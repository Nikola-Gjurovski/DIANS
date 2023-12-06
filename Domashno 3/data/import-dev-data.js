const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const Vinarii = require("../models/vinariiModel");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con.connections);
    // console.log("DB connection success");
  });

// Define filters
const readData = (filePath) => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

const importData = (data) => {
  try {
    return Vinarii.create(data);
  } catch (err) {
    console.error(err);
  }
};

const deleteData = () => {
  try {
    return Vinarii.deleteMany();
  } catch (err) {
    console.error(err);
  }
};

// Define a basic pipe function
const pipe =
  (...functions) =>
  (initialData) =>
    functions.reduce((data, func) => func(data), initialData);

const inputFilePath = "./data/vinarii.json";

// Create a pipeline
const dataPipeline = pipe(readData, importData);

const data = dataPipeline(inputFilePath);

if (process.argv[2] === "--import") {
  data.then(() => {
    console.log("Data successfully imported!");
    process.exit();
  });
} else if (process.argv[2] === "--delete") {
  deleteData().then(() => {
    console.log("Data successfully deleted!");
    process.exit();
  });
}

console.log(process.argv);
