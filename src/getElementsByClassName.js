// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className, start_node) {
    var result = [];

    function search(element) {
        var children = element.children;
        for (var i = 0; i < children.length; i++) {
            if (Array.prototype.indexOf.call(children[i].classList, className) > -1) {
                result.push(children[i]);
            }
            if (children[i].childNodes && children[i].childNodes.length > 0) {
                search(children[i]);
            }
        }
    }
    search(document);
    return result;
};
