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


$("#submit-btn").on("click", submitBtn);
