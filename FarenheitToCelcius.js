function farrenheitToCelcius(tempF) {
    let celcius = (5 / 9 * (tempF -32))
    console.log(`${tempF}F is $(celcius.toFix(2)} C`)
}
farenheitToCelcius(100)