const config = require('../config.js');
const packageName = config.packageName

function random(min, max, decimal=false){
    if(typeof min !== 'number') throw new Error(`[${packageName} Error] No se dió el Minimo`)
    if(typeof max !== 'number') throw new Error(`[${packageName} Error] No se dió el Maximo`)
    if(decimal === false){
        return Math.floor(Math.random() * (max - min)) + min;
    }
    if(decimal === true){
        return Math.random() * (max - min) + min;
    }
}

module.exports = random