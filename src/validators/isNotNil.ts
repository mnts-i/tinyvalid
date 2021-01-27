import { isNil } from './isNil';

type ValidatorType = (value: any) => boolean;

export const isNotNil: ValidatorType =
    (value) => { 
        return !isNil(value);
    }