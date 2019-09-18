import { json } from "body-parser";
import { fork, isMaster } from "cluster";
import { default as cors } from "cors";
import { default as express } from "express";
import { cpus } from "os";

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
    //open up the server
    SERVER.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

