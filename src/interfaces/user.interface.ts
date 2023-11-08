export enum Permissions {
    Admin = 'admin',
    Default = 'user',
}

export interface userEntry {
    id: number,
    name: string,
    credentials: number,
    permissions: Permissions,
    email: string,
    password: string,
}

export type NonSensitiveInfoUser = Pick<userEntry, 'id' | 'name' | 'permissions'>
export type NewUserEntry = Omit<userEntry, 'id'>
export type UpdateUserEntry = Omit<userEntry, 'id'>
export type LoginEntryData = Pick<userEntry, 'email' | 'password'>
export type LoginEntry = Omit<userEntry, 'password' >