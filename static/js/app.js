// from data.js
var tableData = data;

// Console.log the UFO sightings data table
console.log(tableData);

// Get a reference to the table body and the date field
var tbody = d3.select("tbody");
var date = d3.select('#datetime');


// append a row to the table for each object
// fill in each row with values from each object using cell.text
  data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    })
  });


// Select the filter button
var searchbtn = d3.select("#filter-btn");

console.log(searchbtn);

// Use D3 `.on` to filter the data when the "Filter table" button is clicked
searchbtn.on("click", () => {
  d3.event.preventDefault(); 
  var inputDate = date.property('value').trim();

  // filter the data table to match search bar input 
  var filterData = tableData.filter(tableData => tableData.datetime === inputDate);
  console.log(filterData);
  
  // clear the full dataset
  tbody.html("");

  // refill in rows for the new filtered dataset
  filterData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    })
  })


});

