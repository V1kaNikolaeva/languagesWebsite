function chSessionStorage() {
    if(sessionStorage.getItem('enTest')) {
        sessionStorage.clear()
        sessionStorage.setItem('chTest', 1)
    }
    sessionStorage.setItem('chTest', 1)
}
chSessionStorage()