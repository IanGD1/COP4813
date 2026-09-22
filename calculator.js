function calculateTemperature(t0, ts, k, t) {
    return ts + (t0 - ts) * Math.exp(-k * t);
}

function calculate() {
    var t0 = Number(document.getElementById("t0").value);
    var ts = Number(document.getElementById("ts").value);
    var k = Number(document.getElementById("k").value);
    var tmin = Number(document.getElementById("tmin").value);
    var tmax = Number(document.getElementById("tmax").value);

    var output = "";
    var data = [];

    for (var t = tmin; t <= tmax; t++) {
        var temperature = calculateTemperature(t0, ts, k, t);

        output += "Time = " + t +
                  " minutes, Temperature = " +
                  temperature.toFixed(2) + " °F<br>";

        data.push([t, temperature]);
    }

    document.getElementById("output").innerHTML = output;

    Highcharts.chart("chart", {
        title: {
            text: "Newton's Law of Cooling"
        },

        xAxis: {
            title: {
                text: "Time (minutes)"
            }
        },

        yAxis: {
            title: {
                text: "Temperature (°F)"
            }
        },

        tooltip: {
            valueDecimals: 2,
            valueSuffix: " °F"
        },

        series: [{
            name: "Temperature",
            data: data
        }]
    });
}

document.getElementById("calculate").onclick = calculate;
