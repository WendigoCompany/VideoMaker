const STORE = {};

function setNestedValueIterative(obj, path, value) {

}



// let prop = ['style', 'opacity'];
// setNestedValueIterative(document.getElementById("user-img"), prop, 0);



const store = (start, id, cb) => {

    const entry = { val: start };
    entry["get"] = () => {
        return entry["val"]
    }
    entry["set"] = (newVal) => {
        entry["val"] = newVal
        const watchers = document.querySelectorAll(`[aria-watch="${id}"]`);

        for (let i = 0; i < watchers.length; i++) {
            const el = watchers[i];

            switch (el.getAttribute("aria-prop")) {
                case "text":
                    el.textContent = newVal;
                    break;
                case "in-text":
                case "intext":
                    el.textContent = newVal;
                    break;
                default:
                    try {
                        const path = el.getAttribute("aria-prop").split("-");

                        let current = el;
                        for (let i = 0; i < path.length - 1; i++) {
                            current = current[path[i]];  
                        }
                        current[path[path.length - 1]] = newVal;  
                    } catch (error) {
                        console.log(error);
                        
                    }
                    break;
            }


        }
    }
    const infect = (cb) => { return { val: () => { return cb(entry["get"]()) } } }



    return { inf: infect, val: entry["get"], set: entry["set"] }


}







