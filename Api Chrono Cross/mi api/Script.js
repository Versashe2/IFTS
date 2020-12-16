
$.getJSON("ChronoCross.json", function(responseJson) {

    poblarTable(responseJson);
});

function poblarTable(data) {
    
    let rowtable = "";
    for (let i = 0; i < data.length; i++) {

        rowtable += `<tr>
        <td> ${data[i].id}
        <td> ${data[i].nombre}</td>
        <td>${data[i].trasfondo}</td>
        <td>${data[i].edad}</td>
        <td>${data[i].origen}</td>
        <td>${data[i].altura}</td>
        <td>${data[i].peso}</td>
        <td>${data[i].color}</td>
        <td><img src='${ data[i].imagen }' style='width: 150px;height: 327px; background: rgb(255, 255, 255)' alt= 'imagen no encontrad' /></td>
        </tr>`

    }
    $("#bodyTable").html(rowtable)


}