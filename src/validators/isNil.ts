type ValidatorType = (value: any) => boolean;

export const isNil: ValidatorType =
    (value) => {
        return value === null || typeof value === 'undefined';
    }