import showdown from "showdown";
import * as utils from "./utils";

const BACKEND_URL = "";
const ASSETS_URL = `${BACKEND_URL}/assets`;
const API_URL = `${BACKEND_URL}/api`;

export async function getCVBlob() {
	return await utils.getBlob(`${ASSETS_URL}/CV v1.1.4.pdf`);
}

export async function getNIMData() {
	const data = await utils.getJson(`${ASSETS_URL}/nim_data.json`);
	if (!data) {
		return null;
	}
	return JSON.stringify(data.data);
}

export async function getBlogs() {
	return utils.getJson(`${API_URL}/bloglist`);
}

export async function getBlog(name) {
	const res = await utils.getJson(`${ASSETS_URL}/blogs/${name}.md`);
	const data = await getBlogJson(name);
	if (!res || !data) {
		return null;
	}
	return [data, new showdown.Converter().makeHtml(res)];
}

export async function getBlogJson(name) {
	return await utils.getJson(`${ASSETS_URL}/blogs/${name}.json`);
}
