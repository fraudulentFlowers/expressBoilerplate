import ShoesService from '../../services/shoes.service';
export class Controller {
  all(req, res) {
    ShoesService
    .all()
    .then(r => res.json(r));
  }
  
  one(req, res) {
    ShoesService
    .one(req.params.id)
    .then(r => res.status(200).json(r));
  }
}

export default new Controller();