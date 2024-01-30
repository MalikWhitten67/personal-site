import { Html, Head, Component } from "vaderjs/client" 
/**
 * 
 * @param {*} props 
 * @param {String} props.title
 * @param {String} props.description
 * @param {String} props.children
 * @param {String} props.logo
 * @returns 
 */
export class Layout extends Component {
    /**
     * @constructor
     * @param {*} props 
     * @param {String} props.title
     * @param {String} props.description
     * @param {String} props.children
     * @param {String} props.logo
     * @returns {void}
     */
    constructor(props){
        super(props)
        this.props = {
            title: props.title,
            description: props.description,
            children: props.children,
        } 
        this.key = "layout"
    }
    render(){
        return  (<>
            <Html
            
            lang={this.props?.lang || "en" }
            
            >
                <Head>
                    <title>${this.props.title}</title>
                    <meta charset="utf-8" />
                    <meta name="description" content={this.props.description} /> 
                    <meta name="robots" content="index, follow" />
                    <meta name="author" content={"Malik Whitten"} />
                    <meta name="keywords" content="Malik Whitten, Malik, Whitten, Malik Whitten Blog, Malik Whitten Website, Malik Whitten Personal Website, Malik Whitten Blog" />
                    <meta name="url" content="https://malikwhitten.com" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" href={this.props.logo} /> 
                    <script src="/src/theme.js" eager> </script>
                    <link rel="stylesheet" href="/public/css/styles.css" />
                </Head>
        
                ${this.props.children}
                
            </Html>
             
        </>)
    }

}
 