import axios from "axios";

export function onHover(tag, className, pointerCursor) {
	$(document).ready(function() {
		$(tag).hover(
			function() {
				$(this).addClass(className);
				if (pointerCursor) $(this).css("cursor", "pointer");
			},
			function() {
				$(this).removeClass(className);
			},
		);
	});
}

export async function getJson(path) {
	const response = await axios({
		url: path,
		validateStatus: () => true,
	});
	if (response.status >= 400) {
		return null;
	}
	return response.data;
}

export async function getBlob(path) {
	const response = await axios({
		url: path,
		method: "GET",
		responseType: "blob",
		validateStatus: () => true,
	});
	if (response.status >= 400) {
		return null;
	}
	return response.data;
}

export function toPrettyDate(data) {
	if (!data) data = new Date(0, 0, 0);
	return new Intl.DateTimeFormat("en-AU").format(
		typeof data === "string" ? new Date(data) : data,
	);
}
