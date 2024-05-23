import * as z from "zod";
import * as sanitizeHtml from 'sanitize-html';

function validateDoctorData(doctor) {
    const schema = z.object({
        fullname: z.string({
            required_error: "Error: fullname is mandatory",
            invalid_type_error: "Error: fullname must string"
        }),
        username: z.string({
            required_error: "Error: username is mandatory",
            invalid_type_error: "Error: username must string"
        }).min(5),
        password: z.string({
            required_error: "Error: password is mandatory",
            invalid_type_error: "Error: password must string"
        }).min(5),
        dateOfBirth: z.date({
            required_error: "Error: dateOfBirth is mandatory",
            invalid_type_error: "Error: dateOfBirth must date"
        }),
        gender: z.string({
            required_error: "Error: gender is mandatory",
            invalid_type_error: "Error: gender must string. Example: M"
        }).length(1),
        phone: z.number({
            required_error: "Error: phone is mandatory",
            invalid_type_error: "Error: phone must numbers only"
        }).min(5),
        email: z.coerce.string({
            required_error: "Error: email is mandatory",
            invalid_type_error: "Error: email must string"
        }).email().min(5),
        address: z.string({
            required_error: "Error: address is mandatory",
            invalid_type_error: "Error: address must string"
        }),
        licenseNumber: z.string({
            required_error: "Error: licenseNumber is mandatory",
            invalid_type_error: "Error: licenseNumber must string"
        }),
        specialization: z.string({
            required_error: "Error: specialization is mandatory",
            invalid_type_error: "Error: specialization must string"
        }),
        yearsOfExperience: z.number({
            required_error: "Error: yearsOfExperience is mandatory",
            invalid_type_error: "Error: yearsOfExperience must number"
        }),
        medicalSchoolAttended: z.string({
            required_error: "Error: medicalSchoolAttended is mandatory",
            invalid_type_error: "Error: medicalSchoolAttended must string"
        }),
        workHistory: z.string({
            required_error: "Error: workHistory is mandatory",
            invalid_type_error: "Error: workHistory must string"
        }),
        avatar: z.string({
            required_error: "Error: avatar is mandatory",
            invalid_type_error: "Error: avatar must string - base64"
        }),
        languages: z.array(),
        bio: z.string({
            required_error: "Error: biography is mandatory",
            invalid_type_error: "Error: biography must string"
        }),
        certifications: z.array()
    })

    return schema.parse(doctor)
}

function sanitizer(data) {
    return sanitizeHtml(data)
}

export function createDoctor(doctor) {
    const sanitizedData = sanitizer(doctor)
    const dataValidated = validateDoctorData(doctor)
    console.log(dataValidated)
}