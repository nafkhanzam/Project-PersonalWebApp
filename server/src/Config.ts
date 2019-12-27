import configFile from "../config.json";

export class Config {
	private static _URL: string;
	private static _PORT: number;
	private static _STATICS: Array<[string, string]>;

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
		const { url, port, statics } = config;
		Config._URL = url;
		Config._PORT = port;
		// @ts-ignore
		Config._STATICS = statics;
	}

	static isDevelopment() {
		return process.env.NODE_ENV === "development";
	}

	static isProduction() {
		return !this.isDevelopment();
	}
}
