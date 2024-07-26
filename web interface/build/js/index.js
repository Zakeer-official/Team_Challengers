firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var email_id = user.email;
        document.getElementById("username").innerHTML = email_id;
    } else {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});


/*                   Login                        */

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    // Fetch new data
    var database = firebase.database();
    var dataRef = database.ref("Unit/6");  // Adjust to the correct path for your data

    dataRef.on('value', function (snapshot) {
        var data = snapshot.val();
        
        // Display values in HTML
        document.getElementById("totalwater").innerText = data.Solids || "No Data";

        // Doughnut charts
        updateDoughnutCharts(data);
        
        // Line Chart
        updateLineChart(data);
        
        // Bar Chart
        updateBarChart(data);
        
        // Gauge Chart
        updateGaugeChart(data.ph);
    });

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
    });
}

function updateDoughnutCharts(data) {
    var ctx = document.getElementById("canvasDoughnut").getContext('2d');
    var doughnutData = {
        labels: ["Industry", "Household", "Main Pipe"],
        datasets: [{
            data: [2202, 25000, data.Solids || 0],
            backgroundColor: ["#455C73", "#9B59B6", "#BDC3C7"],
            hoverBackgroundColor: ["#34495E", "#B370CF", "#CFD4D8"]
        }]
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: doughnutData
    });

    var ctx2 = document.getElementById("canvasDoughnut2").getContext('2d');
    var doughnutData2 = {
        labels: ["Milk", "Beverages", "Dyeing"],
        datasets: [{
            data: [78020, 25000, data.Solids || 0],
            backgroundColor: ["#26B99A", "#BDC3C7", "#FFA500"],
            hoverBackgroundColor: ["#26B99A", "#BDC3C7", "#FFA500"]
        }]
    };

    new Chart(ctx2, {
        type: 'doughnut',
        data: doughnutData2
    });
}

function updateLineChart(data) {
    var ctx = document.getElementById("lineChart").getContext('2d');
    
    var lineData = {
        labels: ["", "", "", "", "", "", ""],
        datasets: [{
            label: "Initial Reading",
            backgroundColor: "rgba(38, 185, 154, 0.31)",
            borderColor: "rgba(38, 185, 154, 0.7)",
            data: [/* Your data here */],
        }, {
            label: "Final Reading",
            backgroundColor: "rgba(3, 88, 106, 0.3)",
            borderColor: "rgba(3, 88, 106, 0.70)",
            data: [/* Your data here */],
        }]
    };

    new Chart(ctx, {
        type: 'line',
        data: lineData
    });
}

function updateBarChart(data) {
    var ctx = document.getElementById("mybarChart").getContext('2d');
    
    var barData = {
        labels: ["", "", "", "", "", "", ""],
        datasets: [{
            label: 'Initial',
            backgroundColor: "#26B99A",
            data: [/* Your data here */],
        }, {
            label: 'Final',
            backgroundColor: "#03586A",
            data: [/* Your data here */],
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: barData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function updateGaugeChart(ph) {
    var echartGauge = echarts.init(document.getElementById('gaugeChart'));

    var gaugeData = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}"
        },
        series: [{
            type: 'gauge',
            center: ['50%', '50%'],
            startAngle: 140,
            endAngle: -140,
            min: 0,
            max: 14,
            precision: 0,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [0.2, '#ff4500'],
                        [0.4, 'orange'],
                        [0.6, 'lightgreen'],
                        [0.8, 'orange'],
                        [1, '#ff4500']
                    ],
                    width: 32
                }
            },
            axisTick: {
                length: 8
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                }
            },
            splitLine: {
                length: 30
            },
            pointer: {
                length: '72%'
            },
            title: {
                offsetCenter: ['-65%', -10]
            },
            detail: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 30
                }
            },
            data: [{
                value: ph || 0,
                name: 'pH'
            }]
        }]
    };

    echartGauge.setOption(gaugeData);
}


        var canvasDoughnut = new Chart(ctx, {
            type: 'doughnut',
            tooltipFillColor: "rgba(51, 51, 51, 0.55)",
            data: data
        });

// Doughnut chart
        var ctx = document.getElementById("canvasDoughnut2");
        var data = {
            labels: [
                "Milk",
                "Beverages",
                "dyeing"
            ],
            datasets: [{
                data: [78020, 25000, datasnapshot.val()],
                backgroundColor: [
                    "#26B99A",
                    "#BDC3C7",
                    "#orange"
                ],
                hoverBackgroundColor: [
                    "#26B99A",
                    "#BDC3C7",
                    "#orange"
                ]

            }]
        };

        var canvasDoughnut2 = new Chart(ctx, {
            type: 'doughnut',
            tooltipFillColor: "rgba(51, 51, 51, 0.55)",
            data: data
        });





    var reading1 = []; //line graph
    var N1 = 0;
    var reading2 = [];
    var N2 = 0;
    var graphRef2 = firebase.database().ref("Unit/5").child("Flowmeter");
    graphRef2.on('value',
        function (datasnapshot) {

            // console.log(datasnapshot.val());

            N2 = Number(datasnapshot.val());
            reading2.push(N2);
            console.log(reading2);
            console.log("js");
        });
    var graphRef1 = firebase.database().ref("Unit/6").child("Flowmeter");
    graphRef1.on('value',
        function (datasnapshot) {
            N1 = Number(datasnapshot.val());
            reading1.push(N1);
            console.log(reading1);
            console.log("js");

            var ctx = document.getElementById("lineChart");
            var lineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["", "", "", "", "", "", ""],
                    datasets: [{
                        label: "Initial Reading",
                        backgroundColor: "rgba(38, 185, 154, 0.31)",
                        borderColor: "rgba(38, 185, 154, 0.7)",
                        data: reading1,
                    }, {
                        label: "Final Reading",
                        backgroundColor: "rgba(3, 88, 106, 0.3)",
                        borderColor: "rgba(3, 88, 106, 0.70)",
                        data: reading2,
                    }]
                },
            });
            if (reading1.length > 6) {
                reading1.shift();
            }
            if (reading2.length > 6) {
                reading2.shift();
            }


        });


    var tds1 = []; //line graph
    var T1 = 0;
    var tds2 = [];
    var T2 = 0;
    var tdsRef2 = firebase.database().ref("Unit/5").child("TDS");
    tdsRef2.on('value',
        function (datasnapshot) {

            // console.log(datasnapshot.val());

            T2 = Number(datasnapshot.val());
            tds2.push(T2);
            console.log(tds2);
            console.log("js");
        });
    var tdsRef1 = firebase.database().ref("Unit/6").child("TDS");
    tdsRef1.on('value',
        function (datasnapshot) {
            T1 = Number(datasnapshot.val());
            tds1.push(T1);
            console.log(tds1);
            console.log("js");

            // Bar chart
            var ctx = document.getElementById("mybarChart");
            var mybarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["", "", "", "", "", "", ""],
                    datasets: [{
                        label: 'Initial',
                        backgroundColor: "#26B99A",
                        data: tds1
                }, {
                        label: 'Final',
                        backgroundColor: "#03586A",
                        data: tds2
                }]
                },

                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                    }]
                    }
                }
            });

            if (tds1.length > 6) {
                tds1.shift();
            }
            if (tds2.length > 6) {
                tds2.shift();
            }


        });






    var database = firebase.database(); /*   alert    */
   
    var alertRef = database.ref("Unit/6").child("alert"); // Update path as needed
alertRef.on('child_added', function (snapshot) {
    var alertMessage = snapshot.val();
    console.log('[child_added] Alert:' + alertMessage);

    // Display modal
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Notify
    function notifyMe() {
        if (!("Notification" in window)) {
            alert("This browser does not support system notifications");
        } else if (Notification.permission === "granted") {
            notify();
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    notify();
                }
            });
        }

        function notify() {
            var notification = new Notification('Alert', {
                icon: 'build/images/waterDrop.png',
                body: alertMessage
            });
            setTimeout(notification.close.bind(notification), 7000);
        }
    }
    notifyMe();
    });

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) { //auth error
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });
    const ulList = document.getElementById('list');

    const dbRefObject = firebase.database().ref().child('Unit/1');
    const dbRefList = dbRefObject.child('alert');
    dbRefList.on('child_added', snap => {
        const li = document.createElement('li');
        li.innerText = snap.val();
        li.id = snap.key;
        ulList.appendChild(li);

    });









    var modal = document.getElementById('myModal');

    var span = document.getElementsByClassName("close")[0];

    var database = firebase.database();
    var guageRef = database.ref("Unit/6").child("pH");
    guageRef.on('value', function (datasnapshot) {
        console.log(" Guage js");
        console.log(datasnapshot.val());

        var N = Number(datasnapshot.val());
        echartGauge.setOption({
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {
                        show: true,
                        title: "Save Image"
                    }
                }
            },
            series: [{
                type: 'gauge',
                center: ['50%', '50%'],
                startAngle: 140,
                endAngle: -140,
                min: 0,
                max: 14,
                precision: 0,
                splitNumber: 10,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [0.2, '#ff4500'],
                            [0.4, 'orange'],
                            [0.6, 'lightgreen'],
                            [0.8, 'orange'],
                            [1, '#ff4500']
                        ],
                        width: 32
                    }
                },
                axisTick: {
                    show: true,
                    splitNumber: 5,
                    length: 8,
                    lineStyle: {
                        color: '#eee',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    formatter: function (v) {
                        switch (v + '') {
                            case '10':
                                return 'a';
                            case '30':
                                return 'b';
                            case '60':
                                return 'c';
                            case '90':
                                return 'd';
                            default:
                                return '';
                        }
                    },
                    textStyle: {
                        color: '#333'
                    }
                },
                splitLine: {
                    show: true,
                    length: 30,
                    lineStyle: {
                        color: '#eee',
                        width: 2,
                        type: 'solid'
                    }
                },
                pointer: {
                    length: '72%',
                    width: 8,
                    color: 'auto'
                },
                title: {
                    show: true,
                    offsetCenter: ['-65%', -10],
                    textStyle: {
                        color: '#333',
                        fontSize: 15
                    }
                },
                detail: {
                    show: true,
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                    borderColor: '#ccc',
                    width: 100,
                    height: 40,
                    offsetCenter: ['-70%', 10],
                    formatter: '{value}',
                    textStyle: {
                        color: 'auto',
                        fontSize: 30
                    }
                },
                data: [{
                    value: Number(datasnapshot.val()),
                    name: 'pH'
                }]
            }]

        });
    });

/*       Logout       */
function logout() {
    firebase.auth().signOut();
}
