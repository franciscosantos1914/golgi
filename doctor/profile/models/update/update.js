import { sanitizer } from '../shared/sanitizer.js'
import { checkDoctor, checkId } from '../shared/validate.js'

export function update(id, doctor) {
    const sanitizedId = sanitizer(id)
    const sanitizedData = sanitizer(doctor)

    const idValidated = checkId(sanitizedId)
    const dataValidated = checkDoctor(sanitizedData)

    // Update data in database
}