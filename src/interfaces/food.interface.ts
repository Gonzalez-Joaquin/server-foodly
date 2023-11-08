interface foodEntry {
    id: number,
    name: string,
    description: string,
    price: number,
}

export default foodEntry

export type newEntry = Omit<foodEntry, 'id'>
export type updateEntry = Omit<foodEntry, 'id'>