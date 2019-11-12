const { join, extname } = require("path");
const { readdirSync, readFileSync, writeFileSync } = require("fs");

const DIST = join(__dirname, "../dist/client");

const FILES = readdirSync(DIST);

for(let file of FILES){
    if(extname(file) === ".svg"){
        let joined = join(DIST, file),
            text = readFileSync(joined).toString("utf8");
        writeFileSync(joined, text.replace(/(\n|\t|\r)/g, ""));
    }
}