import { burgerService } from "../services/BurgerService"
import BaseController from '../utils/BaseController'

export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
  }

  async getAll(req, res, next) {
    try {
      res.send('it works')
      const burgers = burgerService.getAll()
      res.send('get burgers')
    } catch (error) {
      next(error)
    }

  }
}