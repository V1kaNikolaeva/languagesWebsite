function enSessionStorage() {
    if(sessionStorage.getItem('chTest')) {
        sessionStorage.clear()
        sessionStorage.setItem('enTest', 2)
    }
    sessionStorage.setItem('enTest', 2)
}
enSessionStorage()