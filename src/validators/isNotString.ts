import { isString } from './isString';

type ValidatorType = (value: any) => boolean;

export const isNotString: ValidatorType =
    (value) => { 
        return !isString(value);
    }