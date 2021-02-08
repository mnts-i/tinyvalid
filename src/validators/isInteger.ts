type ValidatorType = (value: any) => boolean;

export const isInteger: ValidatorType = 
    (value) => { 
        return Number.isInteger(value);
    }

// Just a simple shorthand for isInteger
export const isInt = isInteger;