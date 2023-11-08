import { Permissions } from "../interfaces/user.interface"

const isString = (param: any): boolean => {
    return typeof param === 'string' || param instanceof String
}

const isPermissions = (param: any): boolean => {
    return Object.values(Permissions).includes(param)
}

const isNumber = (param: any): boolean => {
    return typeof param === 'number'
}

const isBoolean = (param: any): boolean => {
    return typeof param === 'boolean'
}

export default { isString, isPermissions, isNumber, isBoolean }