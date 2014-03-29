module.exports = Class = function (sub, sup) {
    if (sup) {
        sub.ctr = sup;
        for (var key in sup.prototype) {
            sub.ctr.prototype[key] = sup.prototype[key];
        }
        for (var key in sub) {
            if(key != 'ctr'){
            sub.ctr.prototype[key] = sub[key];
            }
        }
        sub.ctr.__super__ = sup;
        return sub.ctr;
    } else {
        if (sub.initialize) {
            for (var i in sub) {
                if (i != 'initialize') {
                    sub.initialize.prototype[i] = sub[i];
                }
            }
            sub.initialize.__super__ = Object;
            return sub.initialize;
        } else {
            sub.ctr = function () {};
            for (var i in sub){
                if(i != 'ctr'){
                    sub.ctr.prototype[i] = sub[i];
                }
            }
            sub.ctr.__super__ = Object;
            return sub.ctr;
        }
    }
}