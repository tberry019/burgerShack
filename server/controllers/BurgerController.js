import BaseController from '../utils/BaseController'

export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
  }


}