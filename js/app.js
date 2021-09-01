// import the data from data.js
const tableData = data;

// Reference html table using d3
var tbody = d3.Select("tbody");

// build table data
function buildTable(data) {
	//clear out any existing data
	tbody.html("");
	//iterate over each object to add each row in the table
	data.forEach((dataRow) => {
		let row = tbody.append("tr");
		//iterate over each item in an object to add the data to each cell in the row
		Object.values(dataRow.forEach((val) => {
			let cell = row.append("td");
			cell.text(val);
		});
	});
};

function handleClick(){

	// get the date from the filter
	let date = d3.select("#datetime".property("value");
	let filteredData = tableData;
	//check to see if date was entered and filter data based on that date
	if (date) {
		//apply date filter to the table data
		filteredData = filteredData.filter(row => row.datetime === date);
	};
	//build table with new filtered data
	buildTable (filteredData);
};
//attach and event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build the table when the page loads
buildTable(tableData);