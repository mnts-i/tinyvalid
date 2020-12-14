type ValidatorType = (value: any) => boolean;

export const isFunc: ValidatorType =
    (value) => { 
        return typeof value === 'function';
    }