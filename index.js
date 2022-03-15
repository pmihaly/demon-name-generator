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

app.get("/", (req, res) => {
  const { amountToGenerate, cursedness } = req.query;

  res.json(
    generateSpookyNames(parseIntOrReturnNull(amountToGenerate) || 20)(
      parseIntOrReturnNull(cursedness) || 1
    )
  );
});

app.listen(80, () => {
  console.log(`Server listening on port 80...`);
});
