import { isArray } from './isArray';

type ValidatorType = (value: any) => boolean;

export const isNotEmptyArray: ValidatorType =
    (value) => { 
        return isArray(value) && (value as any[]).length !== 0;
    }