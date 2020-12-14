import { isArray } from './isArray';

type ValidatorType = (value: any) => boolean;

export const isNotArray: ValidatorType =
    (value) => { 
        return !isArray(value);
    }