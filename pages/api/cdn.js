import fs from "fs";
import path from "path";

function getFile() {
    filejs = fs.Dir
  return fs.readFileSync(path.join(__dirname, ''), "utf8");
}

export default function handler(req, res) {
//   const dirRelativeToPublicFolder = "img";

//   const dir = path.resolve("./static/js/", dirRelativeToPublicFolder);

//   const filenames = fs.readdirSync(dir);

//   const images = filenames.map((name) =>
//     path.join("/", dirRelativeToPublicFolder, name)
//   );

//   res.statusCode = 200;
//   res.json(images);
    try {
        const result = await getFile(req.path)
        res.status(200).send({ result })
    }catch (error) {
        res.status(500).send({ error })
    }
}
