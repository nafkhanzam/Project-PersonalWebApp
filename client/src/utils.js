import showdown from "showdown";

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
    let data = await fetch("/assets/nim_data.json");
    data = await data.json();
    return JSON.stringify(data.data);
}

export async function getBlog(name) {
    const res = await fetch(`/assets/blogs/${name}.md`);
    const md = await res.text();
    return (new showdown.Converter()).makeHtml(md);
}
