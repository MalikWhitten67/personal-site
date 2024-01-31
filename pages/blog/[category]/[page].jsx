import { useState } from "vaderjs/client";
import Pocketbase from "../../../public/js/pocketbase.es.mjs";
import Nav from "../../../src/nav.jsx";
import Footer from "../../../src/footer.jsx";
import { Layout } from "../../../src/layout.jsx";
const api = new Pocketbase("https://malik.pockethost.io");
api.autoCancellation(false);
export default function (req, res) {
  let category = req.params.category;
  let page = req.params.page;
  let [loaded, setLoaded ] = useState(false);
  this.router.use = async (req, res) => {
    req.pause = true;
    res.send(
      <>
        <div className="w-screen h-screen mx-auto justify-center  flex flex-col gap-5  hero">
          ${!category || !page ? (
            <>
              <h1 className="text-2xl font-bold">
                Error: Invalid Blog Post Query
              </h1>
            </>
          ) : (
            <>
              <span className="loading text-blue-500    loading-spinner"></span>
              ${" "}
              <span>
                Loading: ${req.query?.state
                  ? req.query?.state.replaceAll("%20", " ")
                  : "Blog"}
              </span>
            </>
          )}
          ${!category || !page ? (
            <>
              {" "}
              <a href="#/blog" className="text-blue-500    hover:underline">
                Go Back
              </a>
            </>
          ) : (
            ""
          )}
        </div>
      </>
    );

    if (!window.cache) window.cache = {};
    if (!window.cache[category]) window.cache[category] = {};
    if (!window.cache[category][page] && !window.isFetching) {
      window.isFetching = true;
      window.cache[category][page] =
        category && page
          ? await api
              .collection("blog_pages")
              .getFirstListItem(`category="${category}" && id="${page}"`)
          : null;
      window.isFetching = false;
    }
    if (category && page && window.cache[category][page]) {
      this.data = window.cache[category][page];
      setTimeout(() => {
        setLoaded(true);
        req.pause = false;
      }, 1000);
    }
  };

  return (
    <>
      <Layout
        ${...{
          updateOnReload: true,
          title: loaded ? 'Malik Whitten - Blog' : 'Loading...',
          description: "Malik Whitten Personal Website",
          logo: "https://avatars.githubusercontent.com/u/123524260?s=200&v=4",
        }}
        
      >
        <div className="flex  flex-col   mx-auto xl:justify-center  md:justify-center lg:justify-center  xl:w-[70vw] ">
          <Nav
            key="nav"
            guard={{
              title: "Malik Whitten - Blog",
              description: "Malik Whitten Personal Website",
              logo: "https://avatars.githubusercontent.com/u/123524260?s=200&v=4",
              onClick: () => {
                console.log("clicked");
              },
            }}
            onclick={() => {
              console.log("clicked");
            }}
          />
          <div className="flex flex-col gap-5 xl:px-64 lg:px-64 md:px-64 p-5">
            <h1 className="text-2xl font-bold">${this.data?.head}</h1>
            <p className="text-sm opacity-50">
              Published on ${new Date(this.data?.created).toLocaleDateString()}${" "}
              - Length ${this.data?.body.length} - Read Time $
              {Math.floor(this.data?.body.length / 200)} minutes
            </p>
            <div className="prose">${this.data?.body}</div>
            <Footer key="footer" />
          </div>
        </div>
      </Layout>
    </>
  );
}
