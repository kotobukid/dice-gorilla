import {PERMISSION} from "../../types";


export const create_permission_set = (permissions: PERMISSION[]): Set<PERMISSION> => {
    let s = new Set<PERMISSION>();

    for (let i: number = 0; i < permissions.length; i++) {
        s.add(permissions[i]);
    }

    return s;
};

export const check_permission = (permissions: Set<PERMISSION>, action: PERMISSION, next?: (result: boolean) => {}): boolean | null => {
    if (next) {
        next(permissions.has(action));
        return null;
    } else {
        return permissions.has(action)
    }
};