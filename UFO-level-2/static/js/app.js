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


input.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {

     // Prevent the page from refreshing
     event.preventDefault();

     var searchedData = {};
    

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


      //checks to see if the form has a value in it and if it does it stores it in the searchData 
      if (inputValueDate !="") {
      searchedData.datetime = inputValueDate;
      };

      if (inputValueCity !="") {
        searchedData.city = inputValueCity;
        };

      if (inputValueState !="") {
          searchedData.state = inputValueState;
        };

      if (inputValueCountry !="") {
          searchedData.country = inputValueCountry;
          };
    
      if (inputValueShape !="") {
            searchedData.shape = inputValueShape;
            };



      // searchedData.city = inputValueCity;
      // searchedData.state = inputValueState;
      // searchedData.country = inputValueCountry;
      // searchedData.shape = inputValueShape;
    
  

    console.log(searchedData);


    //filters the data object by the searchData using the keys

      filteredResult = tableData.filter(function (o) {
          return Object.keys(searchedData).every(function (k) {
              return o[k] === searchedData[k];
          });
      });


  
 console.log(filteredResult);

    
      //clears the original table while keeping the header row
      var bodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0]; bodyRef.innerHTML = '';
     
      filteredResult.forEach((aliens) => {
        var row = tbody.append("tr");
        Object.entries(aliens).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
     
      document.getElementById("filter-btn").click();
    }
  });