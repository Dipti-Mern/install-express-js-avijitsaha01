const checkAge = (req, res, next) => {
  if (!req.params.age) {
    res.send("Please provide your age!");
  } else if (req.params.age < 18) {
    res.send("You are under 18");
  } else {
    next();
  }
};

module.exports = checkAge;
