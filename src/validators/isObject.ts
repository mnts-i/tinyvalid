import { isArray } from './isArray';

type ValidatorType = (value: any, excludeArrays?: boolean) => boolean;

export const isObject: ValidatorType =
    (value, excludeArrays = true) => {
        return value !== null && typeof value === 'object' && (excludeArrays ? !isArray(value) : true);
    }