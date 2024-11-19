const colors = require("colors");
const cc = (color, msj) => {
    switch (color) {
        case "ama":
        case "yell":
        case "amarillo":
            console.log(colors["yellow"](msj));

            break;

        default:
            console.log(colors[color]);
            break;
    }
};

module.exports = cc;