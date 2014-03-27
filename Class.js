module.exports = Class = function (obj) {
    if (obj.initialize) {
        return obj.initialize;
    } else {
        return function () {
        };
    }
};
