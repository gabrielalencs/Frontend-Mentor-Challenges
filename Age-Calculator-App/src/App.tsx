// React

import { ChangeEvent, useEffect, useState } from "react";

// Styles

import "./App.css";

// Images

import ArrowImage from "./assets/icon-arrow.svg";

// Types

import { BirthdayDate } from "./types/BirthdayDate";

// Utils

import { validateFields } from "./utils/validateFields";
import { hasError } from "./utils/hasInputError";


const App = () => {
    const [day, setDay] = useState<string>("");
    const [month, setMonth] = useState<string>("");
    const [year, setYear] = useState<string>("");

    const [birthdayDate, setBirthdayDate] = useState<BirthdayDate | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);

    const [animDays, setAnimDays] = useState<number | null>(null);
    const [animMonths, setAnimMonths] = useState<number | null>(null);
    const [animYears, setAnimYears] = useState<number | null>(null);


    const handleInputDate = (
        event: ChangeEvent<HTMLInputElement>,
        numberLimit: number,
        setValue: (value: string) => void
    ) => {
        let value = event.target.value;

        if (value.length > numberLimit) {
            value = value.slice(0, numberLimit);
        }

        setValue(value);
    };

    const handleButtonSubmit = () => {
        setErrors({});

        const birthdayDateNumbers: BirthdayDate = {
            day: Number(day),
            month: Number(month),
            year: Number(year)
        };

        const errorsMessages: { [key: string]: string } = validateFields(birthdayDateNumbers);

        if (Object.keys(errorsMessages).length == 0) {
            setBirthdayDate(birthdayDateNumbers);
            calculateAge(birthdayDateNumbers);

            return;
        }

        setErrors(errorsMessages);
    };

    const animateNumbers = (finalYears: number, finalMonths: number, finalDays: number) => {
        const duration = 1500; 
        const interval = 50; 
        const steps = duration / interval; 

        const yearIncrement = Math.ceil(finalYears / steps); 
        const monthIncrement = Math.ceil(finalMonths / steps); 
        const dayIncrement = Math.ceil(finalDays / steps);

        let countYears = 0;
        let countMonths = 0;
        let countDays = 0;

        const animation = setInterval(() => {
            countYears = Math.min(countYears + yearIncrement, finalYears);
            countMonths = Math.min(countMonths + monthIncrement, finalMonths);
            countDays = Math.min(countDays + dayIncrement, finalDays);

            setAnimYears(countYears);
            setAnimMonths(countMonths);
            setAnimDays(countDays);

            if (
                countYears === finalYears &&
                countMonths === finalMonths &&
                countDays === finalDays
            ) {
                clearInterval(animation);
            }
        }, interval);
    };


    const calculateAge = (birthdayDate: BirthdayDate) => {
        const currentDate = new Date();
        const birthDate = new Date(birthdayDate.year, birthdayDate.month - 1, birthdayDate.day);

        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        if (days < 0) {
            months -= 1;
            const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        animateNumbers(years, months, days);
    };


    return (
        <>
            <>
                <div className="bg-white w-11/12 max-w-[700px] py-11 px-8 rounded-bottom my-5 sm:p-11 md:my-10">
                    <div className="flex items-center gap-4 sm:gap-8">
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="inputDay"
                                className={`date ${errors && hasError(errors, "day")
                                    ? "text-[#ff5757]"
                                    : ""
                                    }`}
                            >
                                Day
                            </label>
                            <input
                                type="number"
                                id="inputDay"
                                className={`inputDate ${errors && hasError(errors, "day")
                                    ? "border-[#ff5757] placeholder:text-[#ff5757]"
                                    : ""
                                    }`}
                                placeholder="DD"
                                value={day}
                                onChange={(e) => handleInputDate(e, 2, setDay)}
                            />
                            <small className="h-1 text-xs italic text-[#ff5757]">
                                {errors?.day && errors.day}
                            </small>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="inputMonth"
                                className={`date ${errors && hasError(errors, "month")
                                    ? "text-[#ff5757]"
                                    : ""
                                    }`}
                            >
                                Month
                            </label>
                            <input
                                type="number"
                                id="inputMonth"
                                className={`inputDate ${errors && hasError(errors, "month")
                                    ? "border-[#ff5757] placeholder:text-[#ff5757]"
                                    : ""
                                    }`}
                                placeholder="MM"
                                value={month}
                                onChange={(e) => handleInputDate(e, 2, setMonth)}
                            />
                            <small className="h-1 text-xs italic text-[#ff5757] whitespace-nowrap">
                                {errors?.month && errors.month}
                            </small>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="inputYear"
                                className={`date ${errors && hasError(errors, "year")
                                    ? "text-[#ff5757]"
                                    : ""
                                    }`}
                            >
                                Year
                            </label>
                            <input
                                type="number"
                                id="inputYear"
                                className={`inputDate ${errors && hasError(errors, "year")
                                    ? "border-[#ff5757] placeholder:text-[#ff5757]"
                                    : ""
                                    }`}
                                placeholder="YYYY"
                                value={year}
                                onChange={(e) => handleInputDate(e, 4, setYear)}
                            />
                            <small className="h-1 text-xs italic text-[#ff5757]">
                                {errors?.year && errors.year}
                            </small>
                        </div>
                    </div>

                    <div className="flex items-center mt-7 relative md:mt-2">
                        <div className="h-[2px] bg-[#dbdbdb] w-full my-10 sm:my-0"></div>
                        <button
                            className="bg-black w-max rounded-full p-4 duration-200 absolute left-[50%] translate-x-[-50%] hover:bg-[#854dff] sm:static"
                            onClick={handleButtonSubmit}
                        >
                            <img src={ArrowImage} alt="Arrow" />
                        </button>
                    </div>

                    <div className="mt-6 sm:mt-3">
                        <div className="flex items-center gap-1">
                            <span className="dataNumber">
                                {animYears ?? "--"}
                            </span>
                            <span className="dataText">years</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="dataNumber">
                                {animMonths ?? "--"}
                            </span>
                            <span className="dataText">months</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="dataNumber">
                                {animDays ?? "--"}
                            </span>
                            <span className="dataText">days</span>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default App;
