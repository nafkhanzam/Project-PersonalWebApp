import express from "express";

import cors from "cors";

export class Server {
	app: express.Express;
	constructor() {
		this.app = express();
	}

	startServer(port: number, cb?: (...args: Array<any>) => void) {
		this.app.listen(port, cb);
	}

	useCors(options?: cors.CorsOptions | cors.CorsOptionsDelegate) {
		this.app.use(cors(options));
	}

	useStatic(...map: Array<[string, string, boolean?]>) {
		map.forEach(element => {
			this.app.use(element[0], express.static(element[1]));
		});
		map.filter(element => element[2]).forEach(element => {
			this.app.use(element[0], (_req, res) => res.sendStatus(404));
		});
	}

	serve(url: string, path: string) {
		this.app.get(url, (_, res) => res.sendFile(path));
	}

	useJson() {
		this.app.use(express.json());
	}
}
