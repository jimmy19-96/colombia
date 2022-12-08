import { Router } from "express";
import {
  createSubscription,
  finishSubscription,
  renderSubscriptions,
  deleteSubscription,
} from "../controllers/subscription.controller.js";

import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// New Subscription
router.post("/subscriptions/start-subscription/:id", isAuthenticated, createSubscription);

router.post("/subscriptions/new-subscription", isAuthenticated, finishSubscription);

// Get All Subscriptions
router.get("/subscriptions", isAuthenticated, renderSubscriptions);

// Delete Subscriptions
router.delete("/subscriptions/delete/:id", isAuthenticated, deleteSubscription);

export default router;
