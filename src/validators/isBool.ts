type ValidatorType = (value: any) => boolean;

export const isBool: ValidatorType =
    (value) => {
        return typeof value === 'boolean';
    }