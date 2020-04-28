const wiki = require("wikijs").default;
const fs = require("fs");
const years = ["2015","2016","2017","2018"];
const mkdirp = require("mkdirp");

const outputDir = "./output/year-pages";

mkdirp(outputDir);

years.forEach(year=>{
  try {
  wiki()
  .page(year)
  .then((page) => page.html())
  .then((response) => {
    fs.writeFileSync(`${outputDir}/${year}.html`, response);
  });
}

catch(error){
  console.error(error)}
});
