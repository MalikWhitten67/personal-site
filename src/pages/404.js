import { component, vhtml, rf , include} from "vaderjs";

export const Error404 = component("home", {
  render: async () => {
    let html = await include('./src/views/404.html')
 
    return vhtml`
    ${html}
    `;
  },
});
