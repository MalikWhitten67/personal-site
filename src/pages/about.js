import Vader, {include} from "../../public/vader/vader.js"

export class About extends Vader.Component{
    constructor(){
        super()
    }

    async render(){
        
        let aboutpage = await include('/views/about.html')
        return this.html(aboutpage)
    }
}