type ValidatorType = (value: any) => boolean;

export const isUndefined: ValidatorType =
    (value) => { 
        return typeof value === 'undefined';
    }