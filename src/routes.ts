import { Router } from 'express'
import CharacterController from './controllers/CharacterController'

const routes = Router()

routes.get('/', CharacterController.index)
routes.post('/', CharacterController.create)
routes.delete('/:id', CharacterController.destroy)
routes.put('/:id', CharacterController.update)

export default routes