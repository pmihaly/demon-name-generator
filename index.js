const fs = require("fs");
const app = require("express")();
const brain = require("brain.js");

const readJsonFile = (filename) =>
  JSON.parse(fs.readFileSync(filename, "utf8"));

const net = new brain.recurrent.LSTM();
const trainedModel = net.fromJSON(readJsonFile("trained.json"));

const generateSpookyNames = (amountToGenerate) => (cursedness) =>
  Array.from({ length: amountToGenerate }, () =>
    trainedModel.run("", true, cursedness)
  );

const parseIntOrReturnNull = (stringToParse) => {
  try {
    return parseInt(stringToParse, 10);
  } catch {
    return null;
  }
};

app.get("/:cursedness?", (req, res) => {
  res.json(
    generateSpookyNames(20)(parseIntOrReturnNull(req.params.cursedness) || 1)
  );
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000...`);
});
