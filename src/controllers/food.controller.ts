import { Request, Response } from "express"

import getConnection from "../db/database"
import validate from '../utils/food.utils'

import { newEntry } from "../interfaces/food.interface"

const getEntries = async (_req: Request, res: Response): Promise<Response | void> => {
    try {
        const connection = await getConnection()
        const allEntries = await connection.query('SELECT * FROM food')
        return res.json(allEntries[0])
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const addEntry = async (req: Request, res: Response) => {
    try {
        const newEntry: newEntry = validate.toNewEntry(req.body)
        const connection = await getConnection()
        await connection.query('INSERT INTO food SET ?', [newEntry])
        res.json({ message: 'New food added' })
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const getEntry = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection()
        const user = await connection.query('SELECT * FROM food WHERE id = ?', [+req.params.id])
        res.json(user[0])
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const deleteEntry = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection()
        await connection.query('DELETE FROM food WHERE id = ?'[+req.params.id])
        res.json({ message: 'Food as deleted' })
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const updateEntry = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection()
        const updated: newEntry = validate.toNewEntry(req.body);
        await connection.query('UPDATE food set ? WHERE id = ?', [updated, +req.params.id]);
        res.json({ message: 'Food as updated' });
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}



export default { getEntries, addEntry, getEntry, deleteEntry, updateEntry }