import style from '../public/css/test.module.css'

export default function (props) {
  let [theme, setTheme] = useState(localStorage.getItem('theme') || 'default')

  let themeref = useRef(theme)

  if (theme === 'default') {
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    document.documentElement.setAttribute('data-theme', 'black')
  }

  function toggleTheme(e) {
    switch (e.target.checked) {
      case true:
        localStorage.setItem('theme', 'black')
        document.documentElement.setAttribute('data-theme', 'black')
        setTheme('black', themeref.bind)
        break;
      case false:
        localStorage.setItem('theme', 'default')
        document.documentElement.setAttribute('data-theme', 'light')
        setTheme('default', themeref.bind)
        break;
      default:
        break;
    }
  }


  return <>
    <div className="navbar   w-full  xl:px-64 p-5   " key="nav">

      <div className="navbar-start">
        <a href="#/" className=" text-xl">Malik Whitten</a>
      </div>
      <div className="navbar-center xl:block lg:block md:block hidden">
        <ul className="flex gap-5 ">
          <li>
             <a href="#/blog">Blog</a>
          </li>

          <li>
            <a href="#/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex hero gap-5  ">
        <label className="cursor-pointer grid place-items-center xl:visible lg:visible md:visible  sm:hidden" ref={themeref.bind} >
          <input type="checkbox" ${...theme === 'black' ? 'checked' : ''} onChange={() => toggleTheme(/**@type {Event}**/event)} className="toggle theme-controller rounded-full bg-base-content row-start-1 col-start-1 col-span-2" />
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>

        <div className="dropdown dropdown-left xl:hidden lg:hidden md:hidden">
          <div tabIndex={0} role="button"  >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </div>
          <ul tabIndex={0} className="dropdown-content  text-md z-[1] menu shadow bg-base-100 rounded-box w-52">
            <li className=" ">
              <a>
                <p>Swap Theme</p>
                ${
                  theme === 'black' ? <>
                    <svg class="swap-on fill-current w-10  text-white h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                  </> : <>

                    <svg class="swap-off fill-current text-white w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                  </>
                }
              </a>
            </li>
            <li>
              <a href="#/blog">  Blog</a>
            </li>

            <li>
              <a> Contact</a>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </>

}