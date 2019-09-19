import { Router } from "express";

const ROUTER = Router();

ROUTER.get("/hi", (req,res) => res.send({data: "hello"}));

export default ROUTER;