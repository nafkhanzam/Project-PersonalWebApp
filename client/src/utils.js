import showdown from "showdown";
import axios from "axios";

export function classOnHover(tag, className) {
    $(document).ready(function() {
        $(tag).hover(
            function() {
                $(this).addClass(className).css('cursor', 'pointer');
            },
            function() {
                $(this).removeClass(className);
            }
        );
    });
}

export async function getNIMData() {
    return JSON.stringify((await getJSON("/assets/nim_data.json")).data);
}

export async function getJSON(path) {
    return (await axios(path)).data;
}

export function toPrettyDate(data) {
    if (!data) data = new Date(0, 0, 0);
    return new Intl.DateTimeFormat('en-AU').format(typeof(data) === "string" ? new Date(data) : data);
}

function isHtml(res) {
    return res.headers["content-type"].includes("html");
}

export async function getBlog(name) {
    try {
        const res = await axios(`/assets/blogs/${name}.md`);
        const data = await axios(`/assets/blogs/${name}.json`);
        if (isHtml(res) || isHtml(data)) {
            return null;
        }
        return [data.data, (new showdown.Converter()).makeHtml(res.data)];
    } catch (_) {
        return null;
    }
}
