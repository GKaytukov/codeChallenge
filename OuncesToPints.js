function ouncesToPints(ounces) {
    let pint = ounces * 0.0625
    return pint 
}
let ounces = 16
const pint = ouncesToPints(ounces)
console.log(`${ounces}fl oz ${pint}pt`)