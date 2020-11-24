// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

var originalTable = tableData.forEach(function(aliens) {
  console.log(aliens);
  var row = tbody.append("tr");
  Object.entries(aliens).forEach(function([key, value]) {
    //console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


var button = d3.select("#filter-btn");

var form = d3.select("#datetime");


button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    //console.log(tableData);
  
    var filteredData = tableData.filter(alien => alien.datetime === inputValue);
  
    console.log(filteredData);
  
    //var ages = filteredData.map(alien => alien.age);

   

    filteredData.forEach((aliens) => {
        var row = tbody.append("tr");
        Object.entries(aliens).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      
  
};