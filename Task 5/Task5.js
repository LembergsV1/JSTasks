function insert_Row()
{
var a=document.getElementById('sampleTable').insertRow(0);
var b = a.insertCell(0);
var c = a.insertCell(1);
b.innerHTML="Its a new row and cell";
c.innerHTML="Its a new row and cell";
}