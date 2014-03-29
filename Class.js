/**
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
*/

module.exports = Class = function (sub,sup) {
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

    return sub.ctr;
  } else {
    if (sub.initialize) {
    for (var i in sub) {
        if (i != 'initialize') {
          sub.initialize.prototype[i] = sub[i];

        }
      }

        return sub.initialize;
    } else {
      sub.ctr = function () {};
      for (var i in sub){
        if(i != 'ctr'){
        sub.ctr.prototype[i] = sub[i];
        }
      }
          return sub.ctr;
        }
      }

}
