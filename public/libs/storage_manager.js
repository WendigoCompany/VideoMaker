const ss = {
    get: (key) => { 
        return sessionStorage.getItem(key)
    },
    set: (key, value) => { 
         sessionStorage.setItem(key, value)
    },
    remove: (key) => { 
        return sessionStorage.removeItem(key)
    },
    clear: () => { 
        return sessionStorage.clear()
    },
};

const ls = {
    get: (key) => { 
        return localStorage.getItem(key)
    },
    set: (key, value) => { 
         localStorage.setItem(key, value)
    },
    remove: (key) => { 
        return localStorage.removeItem(key)
    },
    clear: () => { 
        return localStorage.clear()
    },
};
