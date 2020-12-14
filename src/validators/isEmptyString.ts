import { isString } from './isString';

type ValidatorType = (value: any, trim?: boolean) => boolean;

export const isEmptyString: ValidatorType =
    (value, trim = true) => { 
        return isString(value) && (trim ? value.trim() === '' : value === '');
    }