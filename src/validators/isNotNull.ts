import { isNull } from './isNull';

type ValidatorType = (value: any) => boolean;

export const isNotNull: ValidatorType =
    (value) => { 
        return !isNull(value);
    }