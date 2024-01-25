import { Component } from "vaderjs/client";

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.key = "footer "
    }

    render() {
        return <>
             <div className=" gap-5 mt-12     text-md" key="footer">
            
            <div className="flex gap-5 flex-wrap">
                    <p>Copyright © 2023 / ${new Date().getFullYear()} - Malik Whitten </p>
                    <p>
                        Built with <a href="https://vader-js.pages.dev/" target="_blank" class="text-blue-500    hover:underline">VaderJS</a> v${Vader.version}
                    </p>
                     
                    <p>
                        Source code available on <a href="https://github.com/MalikWhitten67/personal-site"  target="_blank" className="underline hover:text-blue-500">Github</a>
                    </p>
                </div>
             </div>
            

        </>
    }
}
