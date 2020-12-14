import { isNull } from './isNull';

type ValidatorType = (value: any) => boolean;

export const isNotNil: ValidatorType =
    (value) => { 
        return !isNull(value);
    }