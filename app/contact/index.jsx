import { e } from 'vaderjs';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
export const head = () => {
    return (
        <head>
            <title>Contact Page</title>
            <link rel="stylesheet" href="public/index.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
    )
}
export default function App() {
    return(
        <div>
            <Navbar />
            <div style={{padding:'8px'}}>
                <h1>Contact Info</h1>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <div>
                    <h2>Email</h2>
                    <a href='mailto:malikwhitterb@gmail.com'>malikwhitterb@gmail.com</a>
                  </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}