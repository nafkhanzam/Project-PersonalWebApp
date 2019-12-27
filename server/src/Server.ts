import express from "express";

export class Server {
	app: express.Express;
	constructor() {
		this.app = express();
	}

	startServer(port: number, cb?: (...args: Array<any>) => void) {
		this.app.listen(port, cb);
	}

	useStatic(...map: Array<[string, string]>) {
		map.forEach(element =>
			this.app.use(element[0], express.static(element[1])),
		);
	}

	serve(url: string, path: string) {
		this.app.get(url, (_, res) => res.sendFile(path));
	}

	useJson() {
		this.app.use(express.json());
	}
}
