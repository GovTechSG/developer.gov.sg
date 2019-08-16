import sanitizeHtml from "sanitize-html";
export const emailRegex =
    process.env.NODE_ENV === "production"
        ? /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[\w\.]*gov\.sg$/
        : /.*/;

export const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/;

export function sanitize(html) {
    return sanitizeHtml(html, {
        allowedTags: [
            ...sanitizeHtml.defaults.allowedTags,
            "u", // Allow underlined content
            "img", // Allow img tags
            "span" // Allow span tags
        ],
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            iframe: ["src"], // Allow videos
            span: ["style"] // Allow text/background color
        },
        allowedIframeHostnames: ["www.youtube.com", "player.vimeo.com"]
    });
}
