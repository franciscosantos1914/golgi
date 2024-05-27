import { sanitizer } from '../shared/sanitizer.js'
import { checkDoctor } from '../shared/validate.js'

export function createDoctor(doctor) {
    const sanitizedData = sanitizer(doctor)
    const dataValidated = checkDoctor(sanitizedData)

    // keep doctor in database
}