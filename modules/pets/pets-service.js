const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get(type) {
    if (type === 'cat') {
      return pets.cats.show()
    }

    if (type === 'dog') {
      return pets.dogs.show()
    }
  },

  getAll() {
    const cats = pets.cats.all()
    const dogs = pets.dogs.all()
    const allPets = {cats, dogs}
    return allPets
  },

  dequeue(type) {
    if (type === 'cat') {
      return pets.cats.dequeue()
    }
    else if (type === 'dog') {
      return pets.dogs.dequeue()
    }
    else {
      throw new Error('Please choose either a "cat" or "dog"')
    }
  }
}