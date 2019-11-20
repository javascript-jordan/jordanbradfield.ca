import { json } from "body-parser";
import { fork, isMaster, on } from "cluster";
import { cpus } from "os";
import { join } from "path";
import { default as cors } from "cors";
import { default as express } from "express";
import { default as routes } from "./routes/routes";
import { constants } from "../config";

const PORT = process.env.PORT || 3000;

//create our http server on each additional process
const SERVER = express();
//parse request bodies
SERVER.use(json());
//allow cross origin requests
SERVER.use(cors());
//apply routes
SERVER.use("/api", routes);
//serve static images
SERVER.use("/images", (req, res) => {
    res.sendFile(join(__dirname, "images", req.path));
});
//aware express of the build directory
SERVER.use(express.static(join(__dirname, "public")));
//apply base route to server application when user lands on domain
//UPDATE: Dont need this as server is just api, not meant to serve app
// SERVER.use("/", (req, res) => {
//     console.log(req.path)
//     if(constants.isProduction){
//         //send back application
//         return res.sendFile(join(__dirname, "public", "index.html"));
//     }
//     //redirect to webpack dev server
//     return res.redirect("http://localhost:8080");
// });
//apply fallback route to serve up application on undefined routes
//UPDATE: No need for this, let them get 404 if route is non existant
// SERVER.use("*", (req, res) => res.redirect("/"));
//open up the server
SERVER.listen(PORT, () => {
    console.log(`Server running listening on port ${PORT}`);
});

