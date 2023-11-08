import { LoginEntry, LoginEntryData, NonSensitiveInfoUser, userEntry } from "../interfaces/user.interface"

import validate from '../utils/users.utils'

const getEntriesWithoutSensitiveInfo = (object: any): Array<NonSensitiveInfoUser> => {
    const allUsers: userEntry[] = object.map((user: userEntry) => {
        return validate.asUser(user)
    })

    return allUsers.map(({ id, name, permissions }) => {
        return { id, name, permissions }
    })
}

const loginWithEmailAndPassword = (object: any, allEntries: any): LoginEntry => {
    const allUsers: userEntry[] = allEntries.map((user: any) => validate.asUser(user))
    const loginData: LoginEntryData = validate.updateLoginUserData(object)
    const user = allUsers.find(({ email }) => email === loginData.email)
    if (user !== undefined) {
        if (user.password === loginData.password) {
            const { password, ...updatedUser } = user
            return updatedUser
        }
        throw new Error('Invalid or missing email or password.')
    }
    throw new Error('Invalid or missing email or password.')
}

export default { getEntriesWithoutSensitiveInfo, loginWithEmailAndPassword }