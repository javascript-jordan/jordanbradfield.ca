import { Router } from "express";
import { join } from "path";
import config from "../../config";

const ROUTER = Router();

ROUTER.get(config.api.endpoints.downloads.resume, (req,res) => {
    res.download(join(__dirname, "../downloads/resume.pdf"));
});

export default ROUTER;