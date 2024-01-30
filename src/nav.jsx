import style from '../public/css/test.module.css'
import { Link } from 'vaderjs/client'
export default function (props) {
  console.log(props)
  let [theme, setTheme] = useState(localStorage.getItem('theme') || 'default')

  let themeref = useRef(theme)


  function toggleTheme(e) {
    console.log(e.target.checked)
    switch (e.target.checked) {
      case true:
        localStorage.setItem('theme', 'black')
        document.documentElement.setAttribute('data-theme', 'black')
        setTheme('black', themeref.bind)
        break;
      case false:
        localStorage.setItem('theme', 'default')
        document.documentElement.setAttribute('data-theme', 'default')
        setTheme('default', themeref.bind)
        break;
      default:
        break;
    }
  }

  return (<>

    <div className="navbar   w-full  xl:px-64 p-5   " key="nav">

      <div className="navbar-start">
        <Link key="home" href="/" className="cursor-pointer">Home</Link>
      </div>
      <div className="navbar-center xl:block lg:block md:block hidden">
        <ul className="flex gap-5 ">
          <li>
            <Link key="blogroute" href="/blog" title="Blog" className="cursor-pointer">Blog</Link>
          </li>

          <li>
            <Link key="contact" href="/contact" className="cursor-pointer">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex hero gap-5  ">
        <label className="cursor-pointer grid place-items-center xl:visible lg:visible md:visible  sm:hidden" ref={themeref.bind} >
          <input type="checkbox" ${...theme === 'black' ? 
          (setTimeout(()=>{
            return 'checked'
          }, 1000))
          : ''} onChange={() => {
            toggleTheme(event)
          }} className="toggle theme-controller rounded-full bg-base-content row-start-1 col-start-1 col-span-2" />
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>

        <div className="dropdown dropdown-left xl:hidden lg:hidden md:hidden">
          <div tabIndex={0} role="button"  >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </div>
          <ul tabIndex={0} className="dropdown-content  text-md z-[1] menu shadow bg-base-100 rounded-box w-52">
            <li>
              <a>
                <label className="cursor-pointer grid place-items-center xl:visible lg:visible md:visible " ref={themeref.bind} >
                  <input type="checkbox" ${...theme === 'black' ? (setTimeout(()=>{
                    return 'checked'
                  }, 1000)) : ''} onChange={() => toggleTheme(event)} className="toggle theme-controller rounded-full bg-base-content row-start-1 col-start-1 col-span-2" />
                  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
              </a>
            </li>
            <li>
              <Link key="blog" href="/blog" className="cursor-pointer">Blog</Link>
            </li>

            <li>
              <Link key="contact" href="/contact" className="cursor-pointer">Contact</Link>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </>)

}