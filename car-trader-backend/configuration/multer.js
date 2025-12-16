// config/multer.js
import multer from "multer";

// Store in memory as buffer
const storage = multer.memoryStorage();

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPG, PNG, WEBP allowed"), false);
  }
};

// Multer config
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB per file
  },
});

// Middleware for car images (exactly 4 images with specific field names)
export const uploadCarImages = upload.fields([
  { name: "fullview", maxCount: 1 },
  { name: "sideview", maxCount: 1 },
  { name: "backview", maxCount: 1 },
  { name: "insideview", maxCount: 1 },
]);
