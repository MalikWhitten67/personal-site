const router = new ReactRouter()
router.bindRoot("app")
lib('@tailwind/daisyui')
router.root("/home", (req, res) => {
     res.title("Home")
     res.return()
     dispose('./components/App.jsx', (App) => {
        res.jsx(<App />)
     }, null)
     res.return()

})
 
 
router.on("/portfolio", (req, res) => {
    res.title("Portfolio")
    res.return()
    res.jsx(<Portfolio />)
})
   
   
 

 
   
   
