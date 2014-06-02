// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {

// storage
var result = [];
// top element document.body
var hasClass = function(element, className){
    if (element.className === undefined) {
        return false;
    }
    var elementClass = Array.prototype.slice.call(element.classList);
    if (elementClass.indexOf(className) >= 0) {
        return true;
    }
}

// func search(element, className)
    // check if the elem. has the className -> save to stra
    // if children, iterate over children and recursivly
var searchClass = function(element){
    if (hasClass(element, className)) {
        result.push(element);
    }
    for (var i = 0; i < element.childNodes.length; i++) {
        searchClass(element.childNodes[i]);
    }
};



// searchClass(top element)
searchClass(document.body);
// return storage
return result;
};


