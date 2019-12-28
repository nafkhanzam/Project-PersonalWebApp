import path from "path";
import configFile from "../config.json";

export class Config {
	private static _URL: string;
	private static _PORT: number;
	private static _STATICS: Array<[string, string]>;
	private static _SERVER_DIR: string;

	static get SERVER_DIR() {
		return Config._SERVER_DIR;
	}

	static get URL() {
		return Config._URL;
	}

	static get PORT() {
		return Config._PORT;
	}

	static get STATICS() {
		return Config._STATICS;
	}

	static init() {
		let config = configFile.default;
		if (this.isProduction()) {
			Object.assign(config, configFile.production);
		}
		const { url, statics } = config;
		Config._URL = url;
		Config._PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
		// @ts-ignore
		Config._STATICS = statics;
		Config._SERVER_DIR = path.join(__dirname, "../..");
	}

	static isDevelopment() {
		return process.env.NODE_ENV === "development";
	}

	static isProduction() {
		return !this.isDevelopment();
	}
}
