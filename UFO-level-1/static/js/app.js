// from data.js
var tableData = data;

// YOUR CODE HERE!
//selects the tbody of the table
var tbody = d3.select("tbody");

//appends the data to the table
var originalTable = tableData.forEach(function(aliens) {
  //console.log(aliens);
  var row = tbody.append("tr");
  Object.entries(aliens).forEach(function([key, value]) {

    // Append a cell to the row for each value in the data
    var cell = row.append("td");
    cell.text(value);
  });
});

 //selects the button
var button = d3.select("#filter-btn");

//selects the form
var form = d3.select("#filters");

// Create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    //displays in the console what was written in the form after pressing the filter button
    console.log(inputValue);
    
  
  //filters the data based on the datetime key
    var filteredData = tableData.filter(alien => alien.datetime === inputValue);
  
    //displays the filtered data into the console
    //console.log(filteredData);
  
    //clears the original table while keeping the header row
    var bodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0]; bodyRef.innerHTML = '';
   
    //appends filtered data to the cleared table
    filteredData.forEach((aliens) => {
        var row = tbody.append("tr");
        Object.entries(aliens).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      
};