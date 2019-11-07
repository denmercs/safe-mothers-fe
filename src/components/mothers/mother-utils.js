import {marital_status, wives_number, education} from "./form/lists";
import {choices} from "./form/YesNoDontknowDeclin";

export const NO_SEASON = "NO_SEASON";
//RAIN SEASONS
export const RAIN_SEASONS = ['09', '10', '11', '03', '04', '05'];
export const RAIN_SEASON = "RAIN_SEASON";
//DRY SEASONS
export const DRY_SEASONS = ['12', '01', '06', '07'];
export const DRY_SEASON = "DRY_SEASON";


//RISK
export const HIGHT_RISK = "high risk";
export const NO_RISK = "no risk";

export const defineRainSeason = (data) => {
    if (data) {
        const convertedData = data.split('-');
        const month = convertedData[1];
        if (RAIN_SEASONS.indexOf(month) !== -1) return RAIN_SEASON;
        return NO_SEASON;
    }
    return ""
};

export const defineDrySeason = (data) => {
    if (data) {
        const convertedData = data.split('-');
        const month = convertedData[1];
        if (DRY_SEASONS.indexOf(month) !== -1) return DRY_SEASON;
        return NO_SEASON;
    }
    return ""
};

export function defineHighRisk(mother) {
    if (mother.anemia || mother.malaria ||
        mother.obstructed_labor || mother.malpresent ||
        mother.placenta_previa || mother.other_complication
    ) return HIGHT_RISK;
    return NO_RISK;
}

export function defineDate() {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

//Personal info
const DECLINES_TO_ANSWER = "Decline to answer";
const IDN = "I don`t know";
const NO_DATA = 'N/A';
export const YES = "Yes";
export const NO = "No";

export const defineMaritalStatus = (mother) => {
    const status = marital_status.filter((item, index) => (index + 1) === mother.marital_status);
    if (status.length > 0) return status;
    if (mother.marital_status === choices.OTHER) return mother.marital_status_other;
    if (mother.marital_status === choices.DECLINES_TO_ANSWER) return DECLINES_TO_ANSWER;
    return NO_DATA;
};

export const defineWifeOrder = (mother) => {
    const no_wives = mother.no_wives;
    const order = wives_number.filter((item, index) => (index + 1) === no_wives);
    if (order.length > 0) return order;
    if (no_wives === choices.OTHER) return mother.no_wives_other;
    if (no_wives === choices.DECLINES_TO_ANSWER) return DECLINES_TO_ANSWER;
    return NO_DATA;
};

export const defineEducation = (mother) => {
    const education_level = mother.education;
    const level = education.filter((item, index) => (index + 1) === education_level);
    if(level.length > 0) return level;
    if(education_level === choices.IDN) return IDN;
    if(education_level === choices.DECLINES_TO_ANSWER) return DECLINES_TO_ANSWER;
    return NO_DATA;
};