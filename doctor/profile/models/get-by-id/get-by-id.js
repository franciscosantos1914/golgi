import { checkId } from '../shared/validate.js'
import { sanitizer } from '../shared/sanitizer.js'

export function getById(id) {
    const sanitizedId = sanitizer(id)
    const idValidated = checkId(sanitizedId)

    // retrieve from DB
}