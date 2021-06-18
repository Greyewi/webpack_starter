import Dragon from './shared/images/Dragon.svg'
import './style.scss'

class WorldName {
    private name: string

    constructor() {
        this.name = ''
    }

    setName() {
        this.name = prompt("Please write your name")
    }

    getName() {
        return this.name
    }
}

const myName= new WorldName()
myName.setName()

const heading: HTMLElement = document.createElement('h1')
heading.textContent = `Hello world of ${myName.getName()}!`

const img: HTMLImageElement = document.createElement('img')
img.src = Dragon

const root: HTMLElement = document.querySelector('#root')
root.append(heading)
root.append(img)