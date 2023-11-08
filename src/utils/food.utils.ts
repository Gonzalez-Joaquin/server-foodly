import { newEntry } from '../interfaces/food.interface'

import parse from './parse.utils'

const toNewEntry = (object: any): newEntry => {
    const newEntry: newEntry = {
        name: parse.string(object.name, 'name'),
        description: parse.string(object.description, 'description'),
        price: parse.number(object.price, 'price')
    }
    return newEntry
}

export default { toNewEntry }