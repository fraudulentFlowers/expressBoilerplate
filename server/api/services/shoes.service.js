import l from '../../common/logger';

let id = 0;
const shoes = [
    { id: id++, 
      name: "Adizero",
      description: 'Ultra-lightweight running shoes for long-distance racing and training'
    }, 
    { id: id++, 
      name: 'Ultraboost 19',
      description: 'Shoes with endless energy for long city runs'
    },
    { id: id++,
      name: 'Ultraboost Uncaged',
      description: 'Running shoes with internal midfoot support for an unrestricted stride'
    } 
];


export class shoesService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return Promise.resolve(shoes);
  };

  one(id) {
    
    var ids = shoes.find(el => {if (el.id == id) return el});
    return Promise.resolve(ids);

  }
}

export default new shoesService();