import { Html, Head } from "vaderjs/client"
/**
 * 
 * @param {*} props 
 * @param {String} props.title
 * @param {String} props.description
 * @param {String} props.children
 * @param {String} props.logo
 * @returns 
 */
export function Layout (/*
    @param {Object} props
    @param {String} props.title
    @param {String} props.description
    @param {String} props.children
    @param {String} props.logo
**/{title, description, children, logo}){ 
    return <>
    <Html lang="en-us">
        <Head>
            <title>${title}</title>
            <meta charset="utf-8" />
            <meta name="description" content={description} /> 
            <meta name="robots" content="index, follow" />
            <meta name="author" content={"Malik Whitten"} />
            <meta name="keywords" content="Malik Whitten, Malik, Whitten, Malik Whitten Blog, Malik Whitten Website, Malik Whitten Personal Website, Malik Whitten Blog" />
            <meta name="url" content="https://malikwhitten.com" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href={logo} /> 
            <script src="/src/theme.js" eager> </script>
            <link rel="stylesheet" href="/public/css/styles.css" />
        </Head>

        ${children}
    </Html>
    </>
}