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
    return JSON.stringify((await axios("/assets/nim_data.json")).data.data);
}

export async function getBlog(name) {
    try {
        const res = await axios(`/assets/blogs/${name}.md`);
        if (res.headers["content-type"].includes("html")) {
            return null;
        }
        return (new showdown.Converter()).makeHtml(res.data);
    } catch (_) {
        return null;
    }
}
