$(document).ready(function () {
    $.ajax({
        url: 'data.csv',
        dataType: 'text',
        contentType: 'text/plain',
        success: function (data) {
            var parsedData = Papa.parse(data, { header: true }).data;
            var table = document.getElementById('excelTable');
            
            // Create table header
            var headers = Object.keys(parsedData[0]);
            var headerRow = table.insertRow();
            headers.forEach(function (header) {
                var cell = headerRow.insertCell();
                cell.textContent = header;
            });

            // Create table rows
            parsedData.forEach(function (row) {
                var dataRow = table.insertRow();
                headers.forEach(function (header) {
                    if (row[header] != ""){
                        var cell = dataRow.insertCell();
                        cell.textContent = row[header];       
                    }

                });
            });
        }
    });
});
