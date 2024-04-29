const express = require("express");

const router = express.Router();

// GET all profesores
router.get("/", (req, res) => {
  // Your code here
});

// GET a single profesor by ID
router.get("/:id", (req, res) => {
  // Your code here
});

// POST a new profesor
router.post("/", (req, res) => {
  // Your code here
});

// PUT/update a profesor by ID
router.put("/:id", (req, res) => {
  // Your code here
});

// DELETE a profesor by ID
router.delete("/:id", (req, res) => {
  // Your code here
});

module.exports = router;
