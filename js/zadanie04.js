//1

var element = document.getElementsByClassName("sample_class");
function getTagsOfElements(element) {
    var tab=[];
    for (var i=0; i<element.length;i++) {
        tab.push(element[i]);
    }
    return tab;
}

//2

var element = document.getElementById("sample_id");
element=element.classList;
function getClassesOfElement(element) {
    var tab=[];
    for(var i=0; i<element.length;i++){
        tab.push(element[i]);
    }
    return tab;
}

//3

var elements = document.getElementsByClassName("sample_class_2")[0];
elements=elements.getElementsByTagName('li');
function getInnerTextsOfElements(elements) {
    var tab=[];
    for(var i=0; i<element.length;i++){
        tab.push(elements[i].innerHTML);
    }
    return tab;
}

//4

var elements = document.getElementsByTagName('a');
function getAddressesOfElements(elements) {
    var tab=[];
    for(var i=0; i<element.length;i++){
        tab.push(elements[i]).getAttribute('href');
    }
    return tab;
}

//5

var element = document.getElementsByClassName('sample_3class_3');
element=element.children;
function cccc(element) {
    var tab=[];
    for(var i=0; i<element.length;i++){
        tab.push(element[i].tagName);
    }
    return tab;
}