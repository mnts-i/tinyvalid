type ValidatorType = (value: any) => boolean;

export const isArray: ValidatorType =
    (value) => { 
        return Array.isArray(value);
    }