export class Log {
	static info(o: any) {
		console.log("[INFO] " + o);
	}

	static error(o: any) {
		console.log("[ERROR] " + o);
	}

	static debug(o: any) {
		console.log("[DEBUG] " + o);
	}
}
