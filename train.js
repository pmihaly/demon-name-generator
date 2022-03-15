const brain = require('brain.js')
const fs = require('fs')

const goodResults = [
  'Haeva',
  'Shki',
]

const trainingData = [
  ...goodResults,
  'Aamon',
  'Amon',
  'Abaddon',
  'Apollyon',
  'Abezethibou',
  'Abraxas',
  'Abyzou',
  'Achlys',
  'Adrammelech',
  'Aeshma',
  'Agaliarept',
  'Agrat bat Mahlat',
  'Agares',
  'Agiel',
  'Ahriman',
  'Angra Mainyu',
  'Aim',
  'Haborym',
  'Aka Manah',
  'Akem Manah',
  'Akoman',
  'Akvan',
  'Akuma',
  'Al Ana',
  'Ala',
  'Alal',
  'Alastor',
  'Alloces',
  'Allocer',
  'Allu',
  'Amaymon',
  'Amdusias',
  'Amy',
  'Anammelech',
  'Anathan',
  'Anqa',
  'Ancitif',
  'Andhaka',
  'Andras',
  'Andrealphus',
  'Andromalius',
  'Anti',
  'Antichrist',
  'Anzu',
  'Apaosha',
  'Apep or Apophis',
  'Armaros',
  'Archon',
  'Arunasura',
  'Asag',
  'Asakku',
  'Asb',
  'Asmodai',
  'Asmodeus',
  'Astaroth',
  'Asura',
  'Azazel',
  'Azaz',
  'Azi Dahaka',
  'Dahak',
  'Baal',
  'Bael',
  'Babi ngepet',
  'Bakasura',
  'Baku',
  'Balam',
  'Balberith',
  'Bali Raj',
  'Banshee',
  'Baphomet',
  'Barbas',
  'Barbatos',
  'Barong',
  'Bathin',
  'Mathim',
  'Bathym',
  'Marthim',
  'Beelzebub',
  'Belial',
  'Beleth',
  'Belphegor',
  'Berith',
  'Beherit',
  'Bhūta',
  'Bifrons',
  'Boruta',
  'Botis',
  'Buer',
  'Bukavac',
  'Bune',
  'Bushyasta',
  'Caim',
  'Camio',
  'Charun',
  'Chemosh',
  'Choronzon',
  'Chort',
  'Cimejes',
  'Kimaris',
  'Cimeies',
  'Corson',
  'Crocell',
  'Procell',
  'Daeva',
  'Dagon',
  'Dajjal',
  'Dantalion',
  'Danjal',
  'Decarabia',
  'Demiurge',
  'Demogorgon',
  'Dev',
  'Devil',
  'Div-e Sepid',
  'Djall',
  'Drekavac',
  'Dzoavits',
  'Eblis',
  'Iblis',
  'Ibris',
  'Eligos',
  'Eisheth',
  'Erlik',
  'Focalor',
  'Foras',
  'Forcas',
  'Forras',
  'Forneus',
  'Furcas',
  'Forcas',
  'Furfur',
  'Gaap',
  'Gader',
  'Gadulta',
  'Gaf',
  'Gaki',
  'Gamigin',
  'Ghaddar',
  'Ghoul',
  'Giu',
  'Glasya-Labolas',
  'Caacrinolaas',
  'Caassimolar',
  'Classyalabolas',
  'Glassia-labolis',
  'Gorgon',
  'Gremory',
  'Gomory',
  'Grigori',
  'Gualichu',
  'Guayota',
  'Gusion',
  'Gusoin',
  'Gusoyn',
  'Haagenti',
  'Hag',
  'Halphas',
  'Malthus',
  'Haures',
  'Flauros',
  'Flavros',
  'Hauras',
  'Havres',
  'Hinn',
  'Ifrit',
  'Incubus',
  'Ipos',
  'Ipes',
  'Jinn',
  'Jikininki',
  'Kali',
  'Kabandha',
  'Kabhanda',
  'Kara İye',
  'Kasadya',
  'Kokabiel',
  'Kore',
  'Kroni',
  'Krampus',
  'Krun',
  'Killakee Cat',
  'Kukudh',
  'Kulshedra',
  'Kumbhakarna',
  'Lamia',
  'Latabi',
  'Legion',
  'Lechies',
  'Leonard',
  'Leyak',
  'Lempo',
  'Leraje',
  'Leraie',
  'Leviathan',
  'Lili',
  'Lilin',
  'Lilim',
  'Lilith',
  'Ljubi',
  'Lucifer',
  'Lucifuge Rofocale',
  'Mag',
  'Marid',
  'Malphas',
  'Mammon',
  'Mara',
  'Maricha',
  'Marax',
  'Morax',
  'Foraii',
  'Marchosias',
  'Mastema',
  'Mazoku',
  'Mephistopheles',
  'Merihem',
  'Moloch',
  'Murmur',
  'Naamah',
  'Naberius',
  'Cerbere',
  'Naberus',
  'Nalai',
  'Ninurta',
  'Niuli',
  'Namtar',
  'Nar as-samum',
  'Oni',
  'Onoskelis',
  'Orcus',
  'Orias',
  'Oriax',
  'Orobas',
  'Ose',
  'Ördög',
  'O Tokata',
  'Paimon',
  'Pazuzu',
  'Pelesit',
  'Phenex',
  'Penemue',
  'Pithius',
  'Pocong',
  'Pontianak',
  'Preta',
  'Pruflas',
  'Puloman',
  'Qin',
  'Rahab',
  'Raum',
  'Ronove',
  'Rusalka',
  'Rakshasa',
  'Rangda',
  'Ruha',
  'Saleos',
  'Samael',
  'Salpsan',
  'Satan',
  'Satanachia',
  'Scylla',
  'Set',
  'Seir',
  'Semyaza',
  'Shax',
  'Chax',
  'Shaitan',
  'Shedim',
  'Shdum',
  'Sitri',
  'Sthenno',
  'Stihi',
  'Stolas',
  'Solas',
  'Suanggi',
  'Succubus',
  'Surgat',
  'Sut',
  'Shinigami',
  'Shuten Doji',
  'Tannin',
  'El Tío',
  'Tengu',
  'Titivillus',
  'Toyol',
  'Tuchulcha',
  'Ukobach',
  'Ur',
  'Valac',
  'Valefar',
  'Malaphar',
  'Malephar',
  'Vanth',
  'Vapula',
  'Vassago',
  'Vepar',
  'Vine',
  'Wechuge',
  'Xaphan',
  'Yeqon',
  'Zabaniyya',
  'Zagan',
  'Zahreil',
  'Zartai',
  'Zartanai',
  'Zepar',
  'Ziminiar'
]

const net = new brain.recurrent.LSTM();
const result = net.train(trainingData, {
  iterations: 1500,
  log: console.log,
  errorThresh: 0.4
});

let netFunctionAsString = net.toFunction().toString();

netFunctionAsString = ["module.exports.net = ", ...netFunctionAsString].join("")
netFunctionAsString = netFunctionAsString.replace('zeros$1(size)', 'zeros(size)')

fs.writeFileSync('trained.js', netFunctionAsString) 


module.exports = {trained: net}
