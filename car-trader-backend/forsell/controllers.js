import CarUpload from "./models.js";
import cloudinary from "../configuration/cloudinary.js";

export async function uploadcar(req, res) {
  try {
    const { name, releaseyear, transmissiontype, fueltype, price, mileage } =
      req.body;

    // Check required fields
    if (
      !name ||
      !releaseyear ||
      !transmissiontype ||
      !fueltype ||
      !price ||
      !mileage
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate images
    if (
      !req.files ||
      !req.files.fullview ||
      !req.files.sideview ||
      !req.files.backview ||
      !req.files.insideview
    ) {
      return res.status(400).json({
        success: false,
        message: "All 4 images are required",
      });
    }

    // Validate data ranges
    const currentYear = new Date().getFullYear();

    if (
      typeof Number(releaseyear) !== "number" ||
      releaseyear < 2007 ||
      releaseyear > currentYear
    ) {
      return res.status(400).json({
        success: false,
        message: `Release year must be between 2007 and ${currentYear}`,
      });
    }

    if (typeof Number(price) !== "number" || price <= 0) {
      return res.status(400).json({
        success: false,
        message: "Price must be a positive number",
      });
    }

    if (typeof Number(mileage) !== "number" || mileage < 0) {
      return res.status(400).json({
        success: false,
        message: "Mileage must be a non-negative number",
      });
    }

    // Upload images to Cloudinary
    const uploadToCloudinary = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "car-trader" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(fileBuffer);
      });
    };

    const [fullviewUrl, sideviewUrl, backviewUrl, insideviewUrl] =
      await Promise.all([
        uploadToCloudinary(req.files.fullview[0].buffer),
        uploadToCloudinary(req.files.sideview[0].buffer),
        uploadToCloudinary(req.files.backview[0].buffer),
        uploadToCloudinary(req.files.insideview[0].buffer),
      ]);

    // Create car in MongoDB
    const newCar = await CarUpload.create({
      name,
      releaseyear: Number(releaseyear),
      transmissiontype,
      fueltype,
      price: Number(price),
      mileage: Number(mileage),
      images: {
        fullview: fullviewUrl.secure_url,
        sideview: sideviewUrl.secure_url,
        backview: backviewUrl.secure_url,
        insideview: insideviewUrl.secure_url,
      },
      user: req.userId,
    });

    return res.status(201).json({
      success: true,
      message: "Car uploaded successfully",
      data: newCar,
    });
  } catch (error) {
    console.error("Error uploading car:", error);
    return res.status(500).json({
      success: false,
      message: "Error uploading car",
      error: error.message,
    });
  }
}

// DELETE A CAR FUNCTION
export async function deleteCar(req, res) {
  try {
    const { id } = req.params;
    const car = await CarUpload.findById(id);

    // STEP 3: Verify ownership
    // car.user is the ObjectId of who created the car
    if (car.user.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized: You can only delete your own cars",
      });
    }

    // STEP 4: Extract image URLs from the car document
    const { fullview, sideview, backview, insideview } = car.images;

    // STEP 5: Delete images from Cloudinary
    const getPublicId = (url) => {
      const parts = url.split("/");
      const filename = parts[parts.length - 1].split(".")[0];
      return `car-trader/${filename}`;
    };

    // Delete all 4 images in parallel using Promise.all
    await Promise.all([
      cloudinary.uploader.destroy(getPublicId(fullview)),
      cloudinary.uploader.destroy(getPublicId(sideview)),
      cloudinary.uploader.destroy(getPublicId(backview)),
      cloudinary.uploader.destroy(getPublicId(insideview)),
    ]);

    // STEP 6: Delete car document from MongoDB
    await CarUpload.findByIdAndDelete(id);

    // STEP 7: Return success response
    return res.status(200).json({
      success: true,
      message: "Car deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting car:", error);
    return res.status(500).json({
      success: false,
      message: "Error deleting car",
      error: error.message,
    });
  }
}

//GET A SINGLE CAR FOR FRONTEND
export async function getSingleCar(req, res) {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid car ID format",
      });
    }

    const car = await CarUpload.findById(id);

    // Handle not found
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    // Return car data
    return res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    console.error("Error fetching car:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching car",
      error: error.message,
    });
  }
}

// GET ALL CARS FOR FRONTEND
export async function getAllCars(_req, res) {
  try {
    const cars = await CarUpload.find()
      // -1 means descending (newest → oldest)
      .select(
        "name transmissiontype fueltype releaseyear price mileage images.fullview"
      )
      .sort({ createdAt: -1 });

    //
    return res.status(200).json({
      success: true,
      // many total cars exist in the database,
      count: cars.length,
      data: cars,
    });
  } catch {
    console.error("Error fetching cars:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching cars",
      error: error.message,
    });
  }
}

//GET ALL USERS CAR LISTINGS
export async function myListings(req, res) {
  try {
    const cars = await CarUpload.find({ user: req.userId }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    console.error("Error fetching user listings:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching your listings",
      error: error.message,
    });
  }
}
