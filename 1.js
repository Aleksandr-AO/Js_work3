const numA = Number.parseFloat(prompt("Enter the temperature in degrees Celsius"));
function convert (x){
    return ((9 / 5) * x + 32);
}
alert (`Temperature Celsius = ${numA.toFixed(1)} Fahrenheit temperature = ${convert(numA).toFixed(1)}`);
