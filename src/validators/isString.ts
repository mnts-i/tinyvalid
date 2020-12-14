type ValidatorType = (value: any) => boolean;

export const isString: ValidatorType =
    (value) => { 
        return typeof value === 'string';
    }