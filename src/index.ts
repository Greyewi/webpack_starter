import Dragon from './shared/images/Dragon.svg'
import './style.scss'

class WorldName {
  private name: string
  protected surname: string
  public age: number

  constructor() {
    this.name = ''
    this.age = 26
  }

  protected setName() {
    this.name = prompt("Please write your name")
  }

  protected setSurname() {
    this.surname = prompt("Please write your surname")
  }

  getName() {
    return this.name
  }
}

class AdditionalWorldName extends WorldName {
  constructor() {
    super();
  }

  setString() {
    super.setName()
    super.setSurname()
  }

  getName() {
    return super.getName() + " " + this.surname
  }

}



const myName = new WorldName()
const myText = new AdditionalWorldName()
myText.setString()

const heading: HTMLElement = document.createElement('h1')
heading.textContent = `Hello world of ${myText.getName()} your age is - ${myName.age}!`

const img: HTMLImageElement = document.createElement('img')
img.src = Dragon

const root: HTMLElement = document.querySelector('#root')
root.append(heading)
root.append(img)