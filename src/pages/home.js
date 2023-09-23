import { component, vhtml, rf , include} from "vaderjs";

export const Home = component("home", {
  render: async () => {
    let home = await include('./src/views/home.html')
    let navbar = await include('./src/components/nav.html')
   
 
    return vhtml`
    <div>
    
    ${navbar}
    ${home}
    </div>
    `;
  },
  componentDidMount: () => {
    console.log("Home component mounted");
  },
  componentUpdated: () => {
    console.log("Home component updated");
  }
});
