ErrorTrace()
const router = new ReactRouter()
router.bindRoot("app")
router.root("/home", (req, res) => {
     res.title("Malik.isadev")
     res.return()
     dispose('./components/App.jsx', (Component) =>{
     res.jsx(<Component/>)
     res.return()
    }, null)
     res.return()

})
 
 
 
router.on("/portfolio", (req, res) => {
    res.title("My Portfolio")
    res.return()
    dispose('./components/Portfolio.jsx', (Component) =>{
     res.jsx(<Component/>)
     res.return()
    }, null)
})
   
   
   
router.on("/home", (req, res) => {
    res.title("Malik.isadev")
    res.return()
     dispose('./components/App.jsx', (Component) =>{
     res.jsx(<Component/>)
     res.return()
    }, null)
    res.return()

})
