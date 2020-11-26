// from data.js
var tableData = data;

// YOUR CODE HERE!
//selects the tbody of the table
var tbody = d3.select("tbody");

//appends the data to the table
var originalTable = tableData.forEach(function(aliens) {
  console.log(aliens);
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
var form = d3.select(".form-group");


var input = document.getElementById("datetime");

// Create event handlers
//button.on("click", runEnter);
//form.on("submit", event);

function empty(data)
{
  if(typeof(data) == 'number' || typeof(data) == 'boolean')
  { 
    return false; 
  }
  if(typeof(data) == 'undefined' || data === null)
  {
    return true; 
  }
  if(typeof(data.length) != 'undefined')
  {
    return data.length == 0;
  }
  var count = 0;
  for(var i in data)
  {
    if(data.hasOwnProperty(i))
    {
      count ++;
    }
  }
  return count == 0;
}


input.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {

     // Prevent the page from refreshing
     event.preventDefault();
    
      // Select the input elements and get the raw HTML node
      var inputElementDate = d3.select("#datetime");
      var inputElementCity = d3.select("#city");
      var inputElementState = d3.select("#state");
      var inputElementCountry = d3.select("#country");
      var inputElementShape = d3.select("#shape");
    
      // Get the value property of the input elements
      var inputValueDate = inputElementDate.property("value");
      var inputValueCity = inputElementCity.property("value").toLowerCase();
      var inputValueState = inputElementState.property("value").toLowerCase();
      var inputValueCountry = inputElementCountry.property("value").toLowerCase();
      var inputValueShape = inputElementShape.property("value").toLowerCase();
    
      console.log(inputValueDate);
      console.log(inputValueCity);
      console.log(inputValueState);
      console.log(inputValueCountry);
      console.log(inputValueShape);
      

      filteredData = []
    
    //filters the data based on the datetime, city, state, country and shape inputs
      var filteredData1 = tableData.filter(alien => {
        
        if (inputValueDate !="") {
          filteredData = tableData.filter(alien => alien.datetime === inputValueDate);
         } 
         else {
           return false;
          }
        
        
        if (inputValueCity !="") {
          filteredData = tableData.filter(alien => alien.city === inputValueCity);
         } 
         else {
          return false;
          }
        

        if (inputValueState !="") {
          filteredData = tableData.filter(alien => alien.state === inputValueState);
         } 
         else {
          return false;;
          }
        

        if (inputValueCountry !="") {
          filteredData = tableData.filter(alien => alien.country === inputValueCountry);
         } 
         else {
          return false;;
          }

        if (inputValueShape !="") {
          filteredData = tableData.filter(alien => alien.shape === inputValueShape);
         } 
         else {
          return false;;
          }

            //appends filtered data to the cleared table
            filteredData1.forEach((aliens) => {
              var row = tbody.append("tr");
              Object.entries(aliens).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
              });
            });

      });
      console.log(filteredData);
    
      //clears the original table while keeping the header row
      var bodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0]; bodyRef.innerHTML = '';
     
     
      
      document.getElementById("filter-btn").click();
    }
  });