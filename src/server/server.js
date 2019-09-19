import { json } from "body-parser";
import { fork, isMaster, on } from "cluster";
import { cpus } from "os";
import { join } from "path";
import { default as cors } from "cors";
import { default as express } from "express";
import { default as routes } from "./routes/routes";
import { constants } from "../config";

const PORT = process.env.PORT || 3000;

//detect if process is master
if(isMaster){
    //if so then start spinning up additional processes
    for(let i = 0; i < cpus().length; i++) fork();
}else{
    //create our http server on each additional process
    let SERVER = express();
    //parse request bodies
    SERVER.use(json());
    //allow cross origin requests
    SERVER.use(cors());
    //apply routes
    SERVER.use("/api", routes);
    //apply base route to server application when user lands on domain
    SERVER.use("/", (req, res) => {
        if(constants.isProduction){
            //send back application
            return res.sendFile(join(__dirname, "public", "index.html"));
        }
        //redirect to webpack dev server
        return res.redirect("http://localhost:8080");
    });
    //apply fallback route to serve up application on undefined routes
    SERVER.use("*", (req, res) => res.redirect("/"));
    //open up the server
    SERVER.listen(PORT, () => {
        console.log(`Server running listening on port ${PORT}`);
    });
}

