type ValidatorType = (value: any) => boolean;

export const isFinite: ValidatorType =
    (value) => { 
        return Number.isFinite(value);
    }