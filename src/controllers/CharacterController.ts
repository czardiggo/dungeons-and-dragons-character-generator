import { Request, Response } from 'express'
import Character from '../models/Character'

export default {
  async index(req: Request, res: Response) {
    const characters = await Character.find()

    res.json(characters)
  },

  async create(req: Request, res: Response) {
    const character = await Character.create(req.body)

    res.json(character)
  },

  async destroy(req: Request, res: Response) {
    const { id } = req.params

    const character = await Character.findByIdAndDelete(id)

    res.json(character)
  },

  async update(req: Request, res: Response) {
    const { id } = req.params

    const character = await Character.findByIdAndUpdate(id, req.body, {new: true})

    res.json(character)
  }
}