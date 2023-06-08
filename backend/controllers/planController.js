const getPlan = (req, res) => {
  res.json({
    message: "Here is your plan",
  });
};

module.exports = {
  getPlan,
};
