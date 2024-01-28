let theme = localStorage.getItem('theme') || 'default'
                        
switch (true){
    case !window.isServer:
    if (theme === 'default') {
        document.documentElement.setAttribute('data-theme', 'light')
    } else {
        document.documentElement.setAttribute('data-theme', 'black')
    }
    break;
    default:
    break;
}