import { isEmptyArray } from './isEmptyArray';

type ValidatorType = (value: any) => boolean;

export const isNotEmptyArray: ValidatorType =
    (value) => { 
        return !isEmptyArray(value);
    }