import { isFinite } from './isFinite';

type ValidatorType = (value: any) => boolean;

export const isDecimal: ValidatorType =
    (value) => {
        // Using isFinite instead of isNumber because positive / negative infinity would pass the check isNumber && modulus !== 0
        return isFinite(value) && (value as number) % 1 !== 0;
    }