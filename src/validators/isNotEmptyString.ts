import { isEmptyString } from './isEmptyString';

type ValidatorType = (value: any, trim?: boolean) => boolean;

export const isNotEmptyString: ValidatorType =
    (value, trim = true) => { 
        return !isEmptyString(value, trim);
    }