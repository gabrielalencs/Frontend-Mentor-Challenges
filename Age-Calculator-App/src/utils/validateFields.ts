import { BirthdayDate } from "../types/BirthdayDate";

type InputErrorMessages = {
    [key: string]: string;
};

export const validateFields = (data: BirthdayDate) => {
    const errors: InputErrorMessages = {};

    if (!data?.day) {
        errors["day"] = "This field is required";
    } else if (data?.day < 0 || data?.day > 31) {
        errors["day"] = "Must be a valid day";
    }

    if (!data?.month) {
        errors["month"] = "This field is required";
    } else if (data?.month < 0 || data?.month > 12) {
        errors["month"] = "Must be a valid month";
    }

    if (!data?.year) {
        errors["year"] = "This field is required";
    } else if (data?.year < 1000 || data?.year > 2016) {
        errors["year"] = "Must be in the past";
    }

    return errors;
};