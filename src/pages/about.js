import { component, include, rf, vhtml } from "vaderjs";

export const About = component("about", {
    render: async () => {
        let navbar = await include('./src/components/nav.html')
        let about = await include('./src/views/about.html')
        return vhtml`
        <div>
        ${navbar}
        ${about}
        </div>
        `
    },
    componentDidMount: () => {
        console.log("About component mounted");
    },
})