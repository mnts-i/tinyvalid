type ValidatorType = (value: any) => boolean;

export const isInfinite: ValidatorType =
    (value) => { 
        return value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY;
    }