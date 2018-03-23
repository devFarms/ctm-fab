
export default {
    isLoggedIn() {
        return window.localStorage.getItem("token") != null;
    },
    logOut() {
        window.localStorage.removeItem("token");
    },
    getToken() {
        const token = window.localStorage.getItem("token");
        if(!this.isValid(token)) {
            this.logOut();
        }
    },
    isValid(token) {
        if(token != null) {
            const userData = this.splitToken(token);
            return userData.exp > Date.now();
        }        
        return false;
    },
    splitToken(token) {
        return JSON.parse(window.atob(token.split(".")[1]))
    }
}