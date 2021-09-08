import express from "express";
import CovidController from "../controllers/covid.controller";

const router = express.Router();

/**
 * @swagger
 * /covid/state:
 *   get:
 *     summary: COVID-19 VietNam State 
 *     tags:
 *       - Main
 *     responses:
 *       200:
 *         description: Message response
 *         schema:
 *           type: object
 *           example: {
 *             status: 'success'
 *           }
 *       400:
 *         description: When upload failed
 *         schema:
 *           type: string
 *           example: {
 *                status: "failed"
 *            }
 */

 router.route("/state")
 .get(CovidController.state);

export default router;