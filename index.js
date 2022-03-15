const morgan = require("morgan");
const app = require("express")();
const { net } = require("./trained.js");

const generateSpookyNames = (amountToGenerate) => (cursedness) =>
  Array.from({ length: amountToGenerate }, () => net("", true, cursedness));

const parseIntOrReturnNull = (stringToParse) => {
  try {
    return parseInt(stringToParse, 10);
  } catch {
    return null;
  }
};

app.use(morgan("tiny"));

app.get("/:cursedness?", (req, res) => {
  res.json(
    generateSpookyNames(20)(parseIntOrReturnNull(req.params.cursedness) || 1)
  );
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000...`);
});
