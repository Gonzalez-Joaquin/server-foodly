import { Request, Response } from "express"

import getConnection from "../db/database"

import validate from "../utils/users.utils"
import service from "../services/user.service"

import { NewUserEntry, UpdateUserEntry } from "../interfaces/user.interface"

const getEntries = async (_req: Request, res: Response): Promise<Response | void> => {
    try {
        const connection = await getConnection()
        const allEntries = await connection.query('SELECT * FROM users')
        return res.json(service.getEntriesWithoutSensitiveInfo(allEntries[0]))

    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const addEntry = async (req: Request, res: Response) => {
    try {
        const newEntry: NewUserEntry = validate.toNewUserEntry(req.body)
        const connection = await getConnection()
        await connection.query('INSERT INTO users SET ?', [newEntry])
        res.json({ message: 'New User Created' })
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }

}

const getEntry = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection()
        const user = await connection.query('SELECT * FROM users WHERE id = ?', [+req.params.id])
        res.json(user[0])
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const deleteEntry = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection()
        await connection.query('DELETE FROM users WHERE id = ?'[+req.params.id])
        res.json({ message: 'User Deleted' })
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const updateEntry = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection()
        const updated: UpdateUserEntry = validate.toNewUserEntry(req.body);
        await connection.query('UPDATE users set ? WHERE id = ?', [updated, +req.params.id]);
        res.json({ message: 'User updated' });
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const loginWithEmailAndPassword = async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const connection = await getConnection()
        const allEntries = await connection.query('SELECT * FROM users')
        res.json(service.loginWithEmailAndPassword(req.body, allEntries[0]))
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

export default { getEntries, addEntry, getEntry, deleteEntry, updateEntry, loginWithEmailAndPassword }