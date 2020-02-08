document.addEventListener("DOMContentLoaded", function () {

var button1 = document.getElementById('button-1');
button1.addEventListener('click', function chleb() {
    var value="chleb",
    listNode=document.getElementById('shopping-list'),
    liNode=document.createElement("li"),
    txtNode=document.createTextNode(value);
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
})



});