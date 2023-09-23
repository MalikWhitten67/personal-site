import { component, vhtml, rf , include} from "vaderjs";

export const Home = component("home", {
  render: async () => {
    let home = await include('./src/views/home.html')
    let navbar = await include('./src/components/nav.html')
    let footer = await include('./src/components/footer.html')
   
    return vhtml`
    ${navbar}
    ${home}
    ${footer}
    `;
  },
});
