import { isNil } from './isNil';

type ValidatorType = (
    object: any,
    value: Parameters<typeof Object.prototype.hasOwnProperty>[0],
    nilCheck?: boolean,
) => boolean;

const { hasOwnProperty } = Object.prototype;

export const has: ValidatorType =
    (object, value, nilCheck = true) => {
        if (nilCheck && isNil(object))
            return false;

        return hasOwnProperty.call(object, value);
    }