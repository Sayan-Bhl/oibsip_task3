
const kelvinToCelsius = (kelvin) => {
    const celsius = kelvin - 273;
    return celsius;
}

const kelvinToFahrenheit = (kelvin) => {
    const fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
    return fahrenheit;
}

const fahrenheitToCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
const fahrenheitToKelvin = (fahrenheit) => {
    const kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
    return kelvin;
}


const celsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

const celsiusToKelvin = (celsius) => {
    const kelvin = celsius + 273.15;
    return kelvin;
}



const reset=()=>{
    document.getElementById("temperatureOutput").value="";
}
const convert = (event) => {
    const ind1 = document.getElementById("fromUnit").selectedIndex;
    const from = document.getElementById("fromUnit").options[ind1].value;
    let temp1 = document.getElementById("temperatureInput").value;
    const ind2 = document.getElementById("toUnit").selectedIndex;
    const to = document.getElementById("toUnit").options[ind2].value;
    const temp2 = document.getElementById("temperatureOutput");
    temp2.value="";
    temp1 = parseFloat(temp1);
    if (from == to) {
        temp2.value = temp1.toString();
    }
    else if (from == "kelvin" && to == "celsius") {
        temp2.value = kelvinToCelsius(temp1).toString();
    } else if (from == "kelvin" && to == "fahrenheit") {
        temp2.value = kelvinToCelsius(temp1).toString();
    } else if (from == "fahrenheit" && to == "celsius") {
        temp2.value = fahrenheitToCelsius(temp1).toString();
    } else if (from == "fahrenheit" && to == "kelvin") {
        temp2.value = fahrenheitToKelvin(temp1).toString();
    } else if (from == "celsius" && to == "fahrenheit") {
        temp2.value = celsiusToFahrenheit(temp1).toString();
    } else if (from == "celsius" && to == "kelvin") {
        temp2.value = celsiusToKelvin(temp1).toString();
    }
}
