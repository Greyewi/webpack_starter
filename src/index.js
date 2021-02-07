class WorldName {
  #name

  constructor(name) {
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

const root = document.querySelector('#root')
root.append(heading)