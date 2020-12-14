type ValidatorType = (value: any) => boolean;

export const isNumber: ValidatorType =
    (value) => { 
        return typeof value === 'number' && !isNaN(value);
    }