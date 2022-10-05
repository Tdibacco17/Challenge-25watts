import { Router } from "express";
import { slider, aboutUs, services, products, moreDetails } from "../controllers/index.js";

export const router = Router();

router.get("/slider", slider);
router.get("/aboutUs", aboutUs);
router.get("/services", services);
router.get("/products", products);
router.get("/moreDetails", moreDetails);

