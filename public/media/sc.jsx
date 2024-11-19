setTimeout(() => {
    document.querySelectorAll("div")[0].style.marginTop = "-10%"
}, 300);


const max = 10;
let act = 0;
let scale = "%";
// let inter = setInterval(() => {
//        document.querySelectorAll("div")[0].style.marginTop = `${act}${scale}`
//        act++
//        if(act >= max){
// clearInterval(inter)
//        }
// }, 300);