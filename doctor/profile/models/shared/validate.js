export function checkFullname(doctor) {
    if (doctor == null || doctor.hasOwnProperty("fullname") == false) {
        return { status: false, data: "Fullname Key Not Found" }
    }
    if (typeof doctor.fullname !== "string" || String(doctor.fullname).trim().length === 0) {
        return { status: false, data: "Invalid Fullname" }
    }
    return { status: true, data: doctor.fullname }
}

export function checkUsername(doctor) {
    if (doctor == null || doctor.hasOwnProperty("username") == false) {
        return { status: false, data: "Username Key Not Found" }
    }
    if (typeof doctor.username !== "string" || String(doctor.username).trim().length === 0) {
        return { status: false, data: "Invalid Username" }
    }
    return { status: true, data: doctor.username }
}

export function checkPassword(doctor) {
    if (doctor == null || doctor.hasOwnProperty("password") == false) {
        return { status: false, data: "Password Key Not Found" }
    }
    if (typeof doctor.password !== "string" || String(doctor.password).trim().length === 0) {
        return { status: false, data: "Invalid Password" }
    }
    return { status: true, data: doctor.password }
}

export function checkDateOfBirth(doctor) {
    if (doctor == null || doctor.hasOwnProperty("dateOfBirth") == false) {
        return { status: false, data: "Date of Birth Key Not Found" };
    }
    if (typeof doctor.dateOfBirth !== "string" || String(doctor.dateOfBirth).trim().length === 0) {
        return { status: false, data: "Invalid Date of Birth" };
    }
    return { status: true, data: doctor.dateOfBirth };
}

export function checkGender(doctor) {
    if (doctor == null || doctor.hasOwnProperty("gender") == false) {
        return { status: false, data: "Gender Key Not Found" };
    }
    if (typeof doctor.gender !== "string" || String(doctor.gender).trim().length === 0) {
        return { status: false, data: "Invalid Gender" };
    }
    return { status: true, data: doctor.gender };
}

export function checkPhone(doctor) {
    if (doctor == null || doctor.hasOwnProperty("phone") == false) {
        return { status: false, data: "Phone Key Not Found" };
    }
    if (typeof doctor.phone !== "number" || String(doctor.phone).trim().length === 0) {
        return { status: false, data: "Invalid Phone" };
    }
    return { status: true, data: doctor.phone };
}

export function checkEmail(doctor) {
    if (doctor == null || doctor.hasOwnProperty("email") == false) {
        return { status: false, data: "Email Key Not Found" };
    }
    if (typeof doctor.email !== "string" || String(doctor.email).trim().length === 0) {
        return { status: false, data: "Invalid Email" };
    }
    return { status: true, data: doctor.email };
}

export function checkAddress(doctor) {
    if (doctor == null || doctor.hasOwnProperty("address") == false) {
        return { status: false, data: "Address Key Not Found" };
    }
    if (typeof doctor.address !== "string" || String(doctor.address).trim().length === 0) {
        return { status: false, data: "Invalid Address" };
    }
    return { status: true, data: doctor.address };
}

export function checkLicenseNumber(doctor) {
    if (doctor == null || doctor.hasOwnProperty("licenseNumber") == false) {
        return { status: false, data: "License Number Key Not Found" };
    }
    if (typeof doctor.licenseNumber !== "string" || String(doctor.licenseNumber).trim().length === 0) {
        return { status: false, data: "Invalid License Number" };
    }
    return { status: true, data: doctor.licenseNumber };
}

export function checkSpecialization(doctor) {
    if (doctor == null || doctor.hasOwnProperty("specialization") == false) {
        return { status: false, data: "Specialization Key Not Found" };
    }
    if (Array.isArray(doctor.specialization) === false || doctor.specialization.length === 0) {
        return { status: false, data: "Invalid Specialization" };
    }
    return { status: true, data: doctor.specialization };
}

export function checkYearsOfExperience(doctor) {
    if (doctor == null || doctor.hasOwnProperty("yearsOfExperience") == false) {
        return { status: false, data: "Years of Experience Key Not Found" };
    }
    if (typeof doctor.yearsOfExperience !== "number" || String(doctor.yearsOfExperience).trim().length === 0) {
        return { status: false, data: "Invalid Years of Experience" };
    }
    return { status: true, data: doctor.yearsOfExperience };
}

export function checkMedicalSchoolAttended(doctor) {
    if (doctor == null || doctor.hasOwnProperty("medicalSchoolAttended") == false) {
        return { status: false, data: "Medical School Attended Key Not Found" };
    }
    if (typeof doctor.medicalSchoolAttended !== "string" || String(doctor.medicalSchoolAttended).trim().length === 0) {
        return { status: false, data: "Invalid Medical School Attended" };
    }
    return { status: true, data: doctor.medicalSchoolAttended };
}

export function checkWorkHistory(doctor) {
    if (doctor == null || doctor.hasOwnProperty("workHistory") == false) {
        return { status: false, data: "Work History Key Not Found" };
    }
    if (typeof doctor.workHistory !== "string" || String(doctor.workHistory).trim().length === 0) {
        return { status: false, data: "Invalid Work History" };
    }
    return { status: true, data: doctor.workHistory };
}

export function checkLanguages(doctor) {
    if (doctor == null || doctor.hasOwnProperty("languages") == false) {
        return { status: false, data: "Languages Key Not Found" };
    }
    if (Array.isArray(doctor.languages) === false || doctor.languages.length === 0) {
        return { status: false, data: "Invalid Languages" };
    }
    return { status: true, data: doctor.languages };
}

export function checkBio(doctor) {
    if (doctor == null || doctor.hasOwnProperty("bio") == false) {
        return { status: false, data: "Bio Key Not Found" };
    }
    if (typeof doctor.bio !== "string" || String(doctor.bio).trim().length === 0) {
        return { status: false, data: "Invalid Bio" };
    }
    return { status: true, data: doctor.bio };
}

export function checkCertifications(doctor) {
    if (doctor == null || doctor.hasOwnProperty("certifications") == false) {
        return { status: false, data: "Certifications Key Not Found" };
    }
    if (Array.isArray(doctor.certifications) === false || doctor.certifications.length === 0) {
        return { status: false, data: "Invalid Certifications" };
    }
    return { status: true, data: doctor.certifications };
}

export function checkId(id) {
    if (id == null || String(id).trim().length === 0) {
        return { status: false, data: "Invalid Id" }
    }
    return { status: true, data: id }
}

export function checkScheduleType(data) {
    if (data == null || data.hasOwnProperty("type") === false) {
        return { status: false, data: "Schedule Type Key Not Found" }
    }
    if (String(data.type).toLowerCase() !== "appointment" && String(data.type).toLowerCase() !== "procedure") {
        return { status: false, data: "Schedule Type Must Be Appointment Or Procedure" }
    }
    return { status: true, data: data.type }
}

export function checkDoctor(doctor) {
    const bio = checkBio(doctor)
    const email = checkEmail(doctor)
    const phone = checkPhone(doctor)
    const gender = checkGender(doctor)
    const address = checkAddress(doctor)
    const fullname = checkFullname(doctor)
    const username = checkUsername(doctor)
    const password = checkPassword(doctor)
    const languages = checkLanguages(doctor)
    const dateOfBirth = checkDateOfBirth(doctor)
    const workHistory = checkWorkHistory(doctor)
    const licenseNumber = checkLicenseNumber(doctor)
    const specialization = checkSpecialization(doctor)
    const certifications = checkCertifications(doctor)
    const yearsOfExperience = checkYearsOfExperience(doctor)
    const medicalSchoolAttended = checkMedicalSchoolAttended(doctor)

    const validationList = [
        bio, email, phone, gender, address, fullname, username,
        password, languages, dateOfBirth, workHistory, licenseNumber,
        specialization, yearsOfExperience, medicalSchoolAttended, certifications
    ]

    const exists = validationList.find(v => v.status === false)
    return exists || { status: true, data: doctor }
}