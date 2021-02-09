import Dragon from './shared/images/Dragon.svg'

class WorldName {
  #name

  constructor() {
    this.#name = ''
  }

  setName() {
    this.#name = prompt("Please write your name")
  }

  getName() {
    return this.#name
  }
}

const myName = new WorldName()
myName.setName()

const heading = document.createElement('h1')
heading.textContent = `Hello world of ${myName.getName()}!`

const img = document.createElement('img')
img.src = Dragon

const root = document.querySelector('#root')
root.append(heading)
root.append(img)