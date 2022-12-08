import { Router } from "express";
import {
  renderPlaceForm,
  createNewPlace,
  renderPlaces,
  deletePlace,
} from "../controllers/places.controller.js";
import { administrator } from "../helpers/admin.js";
import { isAuthenticated } from "../helpers/auth.js";


const router = Router();

// New Place
router.get("/places/add", isAuthenticated, renderPlaceForm);

router.post("/places/new-place", administrator, isAuthenticated, createNewPlace);

// Get All Places
router.get("/places", isAuthenticated, renderPlaces);

// Delete Places
router.delete("/places/delete/:id", isAuthenticated, administrator, deletePlace);

export default router;
