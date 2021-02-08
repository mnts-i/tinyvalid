import { Predicate } from '../types';
import { isArray } from './isArray';

export const isArrayOf = <T extends any[] = any[]>(value: any, predicate: Predicate): value is T[] => {
        return isArray(value) && (value as any[]).findIndex(v => !predicate(v)) === -1;
    }