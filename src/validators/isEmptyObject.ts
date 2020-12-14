import { isObject } from './isObject';

type ValidatorType = (value: any) => boolean;

export const isEmptyObject: ValidatorType =
    (value) => { 
        return isObject(value) && Object.keys(value).length === 0;
    }