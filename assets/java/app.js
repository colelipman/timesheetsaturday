var config = {

    apiKey: "AIzaSyC2fXWmf2XHBRMxSm33loaWbt6pISJce-g",
    authDomain: "chwtimesheet.firebaseapp.com",
    databaseURL: "https://chwtimesheet.firebaseio.com",
    projectId: "chwtimesheet",
    storageBucket: "",
    messagingSenderId: "163369477025"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

 




function getFormData () {
    // getting data
    var employeeName = $("#employee-name").val().trim();
    var employeeRole = $("#role").val().trim();
    var startDate = $("#start-date").val().trim();
    var monthlyRate = $("#monthly-rate").val().trim();

    

    var employeeInput  = {
        name: employeeName,
        role: employeeRole,
        stDate: startDate,
        mRate: monthlyRate
    }; 
    return employeeInput;
}

function submitBtn() {

    event.preventDefault();

   var employeeInput = getFormData();

    console.log(employeeInput);

    database.ref("/employees").push(employeeInput);
  
}


var table = $("<table style='width: 100%'>");
table.attr("id", "employee-table");

var tr = $("<tr>");

var th = $("<th>"); th.text("Employee Name"); tr.append(th);
var th1 = $("<th>"); th1.text("Role"); tr.append(th1);
var th2 = $("<th>"); th2.text("Start Date"); tr.append(th2);
var th3 = $("<th>"); th3.text("Monthly Rate"); tr.append(th3);

table.append(tr);

$("#employee-table-div").append(table);



database.ref("/employees").on("child_added", function(snapshot) {

    console.log(snapshot.val());

    var tr = $("<tr>");

    var td = $("<td>"); td.text(snapshot.val().name); tr.append(td);
    var td1 = $("<td>"); td1.text(snapshot.val().role); tr.append(td1);
    var td2 = $("<td>"); td2.text(snapshot.val().stDate); tr.append(td2);
    var td3 = $("<td>"); td3.text(snapshot.val().mRate); tr.append(td3);

    $("#employee-table").append(tr);


    
   

    
})

$("#submit-btn").on("click", submitBtn);
