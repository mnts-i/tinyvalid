import { isNil } from './isNil';
import { isEmptyArray } from './isEmptyArray';
import { isEmptyObject } from './isEmptyObject';
import { isEmptyString } from './isEmptyString';

type ValidatorType = (value: any) => boolean;

export const isEmpty: ValidatorType =
    (value) => { 
        return isNil(value) 
            || isEmptyArray(value) 
            || isEmptyObject(value) 
            || isEmptyString(value);
    }