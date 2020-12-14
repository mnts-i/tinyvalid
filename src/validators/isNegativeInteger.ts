import { isInteger } from './isInteger';

type ValidatorType = (value: any, includeZero?: boolean) => boolean;

export const isNegativeInteger: ValidatorType =
    (value, includeZero = false) => { 
        return isInteger(value) && (includeZero ? value <= 0 : value < 0);
    }

export const isNegativeInt = isNegativeInteger;