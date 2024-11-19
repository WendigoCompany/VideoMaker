const stade = store(null, "stade");

if (!stade) {
    ss.set("pr", stade)
}

const svgs = document.getElementsByClassName("buttonera-preview")[0].querySelectorAll("svg")


const change_svg = stade.inf((e) => {
     svgs[0].setAttribute("aria-disabled", e)
     svgs[1].setAttribute("aria-disabled", !e)
})





stade.set(JSON.parse(ss.get("pr")) || false)
change_svg.val()


const handle_change =()=>{
    ss.set("pr",!stade.val())
    stade.set(!stade.val())
    change_svg.val()
}

svgs[0].onclick= handle_change
svgs[1].onclick= handle_change