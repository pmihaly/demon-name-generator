const brain = require("brain.js");

const readJsonFile = (filename) =>
  JSON.parse(fs.readFileSync(filename, "utf8"));

const net = new brain.recurrent.LSTM();
const trainedModel = net.fromJSON(readJsonFile("trained.json"));

const generateSpookyNames = (amountToGenerate) => (cursedness) =>
  Array.from({ length: amountToGenerate }, () =>
    trainedModel.run("", true, cursedness)
  );

module.exports = { generateSpookyNames };
