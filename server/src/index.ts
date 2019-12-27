import path from "path";

import express from "express";

// import express from "express";
// @ts-ignore
import pingmydyno from "pingmydyno";
import { Server } from "./Server";
import { Config } from "./Config";
import { Log } from "./Log";

Config.init();

const server = new Server();
server.useStatic(...Config.STATICS);

// TODO: Custom response when file doesn't exist
server.app.use(express.static(path.join(__dirname, "../../client/public")));
server.app.get("*", (_, res) =>
	res.sendFile(path.join(__dirname, "../../client/public/index.html")),
);

server.startServer(Config.PORT, () => {
	Log.info(`Listening to port ${Config.PORT}...`);
	if (Config.isProduction()) {
		pingmydyno(Config.URL);
	}
});
