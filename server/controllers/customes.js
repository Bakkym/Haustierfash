const getAllCostumes = (req, res, next) => {
  res.json({ message: "Get all costumes" });
};

const newCostume = (req, res, next) => {
  res.json({ message: "POST new costume" });
};

const getOneCostume = (req, res, next) => {
  res.json({ message: "Get one costume" });
};

const updateCostume = (req, res, next) => {
  res.json({ message: "Update one costume" });
};

const deleteCostume = (req, res, next) => {
  res.json({ message: "Delete one costume" });
};

module.exports = {
  getAllCostumes,
  newCostume,
  getOneCostume,
  updateCostume,
  deleteCostume,
};
