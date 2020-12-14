import { Predicate } from '../types';
import { isArray } from './isArray';

type ValidatorType = (value: any, predicate: Predicate) => boolean;

export const isArrayOf: ValidatorType = 
    (value, predicate) => {
        return isArray(value) && (value as any[]).findIndex(v => !predicate(v)) === -1;
    }