module.exports = function(sub, sup) {
    var cstor = sub.initialize || function() {};
    cstor.prototype.__super__ = sup || Object;

    if (sup) {
        for (var key in sub){
            sup.prototype[key] = sub[key];
        }
        cstor.prototype = new sup();
    } else {
        for (var key in sub){
            cstor.prototype[key] = sub[key];
        }
    }
    
    cstor.prototype.super = function (name) {
        var args = arguments;
        return this.__super__.prototype[name]
        ?this.__super__.prototype[name].apply(this, [].slice.call(args, 1))
        :this.super.apply(this,args);
    }
    return cstor;
};