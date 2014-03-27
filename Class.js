module.exports = Class = function (obj) {
    if (obj.initialize) {
        for (var i in obj) {
        if(i != 'initialize'){
        obj.initialize.prototype[i] = obj[i];
    }}
        return obj.initialize;
    } else {
        return function () {
        };
    }
};
