
function intializePieChart(failvalue,passvalue){
var data = [
    {
        value: parseInt(failvalue),
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Fail"
            },
    {
        value: parseInt(passvalue),
        color: "#00b200",
        highlight: "#00cc00",
        label: "Pass"
            }
        ];

var ctx = document.getElementById("myChart").getContext("2d");
var myPieChart = new Chart(ctx).Pie(data);
//console.log(data);
}



function getJson(){
    var jsonObject
    $.get('report.html.data', function(xml){ 
        jsonObject = $.xml2json(xml, true);
       // console.log(jsonObject);
        createReport(jsonObject);
    }); 
}

function createReport(jsonObject){
  intializePieChart(jsonObject.activity[0].totalfailedcount, jsonObject.activity[0].totalsuccesscount);

$("#exetime").text(jsonObject.activity[0].timestamp);
$("#osystem").text(jsonObject.activity[0].osversion);
$("#lang").text(jsonObject.activity[0].language);
$("#totalerror").text(jsonObject.activity[0].totalerrorcount);
$("#cname").text(jsonObject.activity[0].host);
$("#screensize").text(jsonObject.activity[0].screenresolution);
$("#duration").text(jsonObject.activity[0].duration);
$("#totalwarning").text(jsonObject.activity[0].totalwarningcount);

var testSuites = jsonObject.activity[0].activity[0].activity;
console.log(testSuites);
 var tree = $("#tree");
for(var testsuite=0;testsuite<testSuites.length;testsuite++){
  
 
  tree.append('<li>yo yo</li>');


}


}

// A $( document ).ready() block.
$( document ).ready(function() {
   
   getJson();
});