import { isArray } from './isArray';

type ValidatorType = (value: any) => boolean;

export const isEmptyArray: ValidatorType =
    (value) => { 
        return isArray(value) && (value as any[]).length === 0;
    }