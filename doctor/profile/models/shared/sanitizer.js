import * as sanitizeHtml from 'sanitize-html';

export function sanitizer(data) {
    return sanitizeHtml(data)
}