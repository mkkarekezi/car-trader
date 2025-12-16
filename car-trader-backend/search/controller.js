export async function filter(req, res) {
  try {
    const { transmission, powertrain, price, mileage, year } = req.query;

    let filter = {};

    // Transmission filter
    if (transmission) {
      filter.transmission = transmission; // "manual" or "automatic"
    }

    // Powertrain filter
    if (powertrain) {
      filter.powertrain = powertrain; // "gasoline/diesel", "hybrid", "electric"
    }

    // Price filter (RWF)
    if (price) {
      if (price === "0-35000000") {
        filter.price = { $lte: 35000000 };
      } else if (price === "35000000-75000000") {
        filter.price = { $gte: 35000000, $lte: 75000000 };
      } else if (price === "75000000+") {
        filter.price = { $gte: 75000000 };
      }
    }

    // Mileage filter (km)
    if (mileage) {
      if (mileage === "0-25000") {
        filter.mileage = { $lte: 25000 };
      } else if (mileage === "25000-75000") {
        filter.mileage = { $gte: 25000, $lte: 75000 };
      } else if (mileage === "75000-175000") {
        filter.mileage = { $gte: 75000, $lte: 175000 };
      } else if (mileage === "175000+") {
        filter.mileage = { $gte: 175000 };
      }
    }

    // Year filter
    if (year) {
      if (year === "2007-2015") {
        filter.year = { $gte: 2007, $lte: 2015 };
      } else if (year === "2015-present") {
        filter.year = { $gte: 2015 };
      }
    }

    const cars = await Car.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Search failed",
      error: error.message,
    });
  }
}
