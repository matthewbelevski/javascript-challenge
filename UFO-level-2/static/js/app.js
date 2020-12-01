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


//selects the forms
var input = document.getElementById("filters");

//press enter on the forms to perform the filter
input.addEventListener("keyup", function(event) {

  //keycode for enter
  if (event.keyCode === 13) {

     // Prevent the page from refreshing
     event.preventDefault();

     //create a new object to store the filter inputs to compare to the original data 
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


      //checks to see if the relevant form has a value in it and if it does it stores it in the searchData object with appropriate key
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
  
    //displays the searchedData into the console
    console.log(searchedData);


    //filters the data object by the searchData by comparing the keys and their corresponding values
    //if the values are the same then it stores them into filteredResult
      filteredResult = tableData.filter(function (o) {
          return Object.keys(searchedData).every(function (k) {
              return o[k] === searchedData[k];
          });
      });


  //display filteredResult in console
    console.log(filteredResult);

    
      //clears the original table while keeping the header row
      var bodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0]; bodyRef.innerHTML = '';
     
      //creates the new table based on the filtered results
      filteredResult.forEach((aliens) => {
        var row = tbody.append("tr");
        Object.entries(aliens).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
     
    }
  });