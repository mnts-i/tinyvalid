type ValidatorType = (value: any) => boolean;

export const isNull: ValidatorType =
    (value) => { 
        return value === null;
    }