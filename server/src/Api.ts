import { Router } from "express";

import path from "path";

import fs from "fs";

import express from "express";
import { Config } from "./Config";

export class Api {
	router: Router;
	constructor() {
		this.router = express.Router();
		this.init();
	}

	init() {
		this.router.get("/bloglist", (_req, res) => {
			fs.readdir(
				path.join(Config.SERVER_DIR, "public", "blogs"),
				"utf8",
				(err, files) =>
					res.send(
						err ??
							files
								.filter(val => val.endsWith(".md"))
								.map(val => val.replace(/\.[^/.]+$/, "")),
					),
			);
		});
	}
}
