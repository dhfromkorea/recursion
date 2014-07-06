// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
    // your code goes here
    if (typeof obj !== "object" || obj === null) {
        if (typeof obj == "string") obj = '"' + obj + '"';
        return String(obj);
    } else {
        var result = [];
        var arr = (Array.isArray(obj));
        for (var prop in obj) {
            var value = obj[prop];
            if (typeof value == "string") value = '"' + value + '"';
            else if (typeof value == "object" && value !== null) {
                value = stringifyJSON(value);
            }
            if (typeof value !== "undefined" && typeof value !== "function") {
                result.push((arr ? "" : '"' + prop + '":') + String(value));
            }
        }
        return (arr ? "[" : "{") + String(result) + (arr ? "]" : "}");
    }
};
