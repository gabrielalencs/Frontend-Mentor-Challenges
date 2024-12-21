import { BirthdayDate } from "../types/BirthdayDate";

type InputErrorMessages = {
    [key: string]: string;
};

export const validateFields = (data: BirthdayDate) => {
    const errors: InputErrorMessages = {};

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
    const currentDay = currentDate.getDate();

    if (!data?.day) {
        errors["day"] = "This field is required";
    } else if (data?.day < 1 || data?.day > 31) {
        errors["day"] = "Must be a valid day";
    }

    if (!data?.month) {
        errors["month"] = "This field is required";
    } else if (data?.month < 1 || data?.month > 12) {
        errors["month"] = "Must be a valid month";
    }

    if (!data?.year) {
        errors["year"] = "This field is required";
    } else if (data?.year < 1000) {
        errors["year"] = "Must be in the past";
    } else if (data?.year > currentYear) {
        errors["year"] = "Must be in the past";
    } else if (
        data.year === currentYear &&
        (data.month > currentMonth || (data.month === currentMonth && data.day > currentDay))
    ) {
        errors["year"] = "Must be in the past";
    }

    return errors;
};
