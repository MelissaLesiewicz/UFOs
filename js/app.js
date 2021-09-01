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