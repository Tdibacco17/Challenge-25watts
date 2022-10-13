import express from "express";
import cors from "cors";
import { router } from "./src/routes/index.js";
import dotenv from "dotenv"
// import fs from "fs";
// import path from "path";

dotenv.config()

export const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public/imagenes'))
app.use(cors());
app.use("/", router)
