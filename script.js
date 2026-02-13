function temperature() {
    //To convert celsius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * (9/5)) + 32;
    document.getElementById("fahrenheit").value = f;
    
}

function weight() {
    //To convert kilograms to pounds
    //Weight(kg) * 2.2
    var kilograms = document.getElementById("kilo").value;
    var p = kilograms * 2.2;
    document.getElementById("pounds").value = p;
}

function distance() {
    //To convert kilometers to miles
    //Distance(km) * 0.62137 
    var kilometers = document.getElementById("km").value;
    var m = kilometers * 0.62137;
    document.getElementById("miles").value = m;
}

