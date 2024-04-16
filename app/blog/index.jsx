import { e } from "vaderjs"
import Navbar from "../../components/navbar"
export const head = () => {
    return (
        <head>
            <title>Blog - Main</title>
            <link rel="stylesheet" href="public/index.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
    )
}
export default function Index() {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '8px' }}>
                <h1>
                    Recent Blog Posts
                </h1>
                <p>
                    Coming soon...
                </p>
            </div>
        </div>
    )
}