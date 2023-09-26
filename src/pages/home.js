import Vader, { include } from '../../public/vader/vader.js'

export class Home extends Vader.Component{
  constructor(){
    super()
  }

  async render(){
    let homehtml = await include('/views/home.html')
    return this.html(homehtml)
  }
}