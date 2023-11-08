import { Permissions } from "../interfaces/user.interface"

import type from './types.utils'

const string = (nameFromRequest: any, value: string): string => {
    if (!type.isString(nameFromRequest)) {
        throw new Error('Incorrect or missing ' + value)
    }
    return nameFromRequest
}

const permissions = (permissionsFromRequest: any): Permissions => {
    if (!type.isString(permissionsFromRequest) || !type.isPermissions(permissionsFromRequest)) {
        throw new Error('Incorrect or missing Permissions')
    }
    return permissionsFromRequest
}

const number = (credentialFromRequest: any, value: string): number => {
    if (!type.isNumber(credentialFromRequest)) {
        throw new Error('Incorrect or missing ' + value)
    }

    return credentialFromRequest
}

const trueOrFalse = (trueOrFalseFromRequest: any, value: string): boolean => {
    if (!type.isBoolean(trueOrFalseFromRequest)) {
        throw new Error('Incorrect or missing ' + value)
    }
    return trueOrFalseFromRequest
}

export default { string, permissions, trueOrFalse, number } 