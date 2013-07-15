!function(a){if("function"==typeof bootstrap)bootstrap("promise",a);else if("object"==typeof exports)module.exports=a();else if("function"==typeof define&&define.amd)define(a);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=a}else Q=a()}(function(){"use strict";function a(a){var b=Function.call;return function(){return b.apply(a,arguments)}}function b(a){return a===Object(a)}function c(a){return"[object StopIteration]"===sb(a)||a instanceof kb}function d(a,b){if(eb&&b.stack&&"object"==typeof a&&null!==a&&a.stack&&-1===a.stack.indexOf(ub)){for(var c=[],d=b;d;d=d.source)d.stack&&c.unshift(d.stack);c.unshift(a.stack);var f=c.join("\n"+ub+"\n");a.stack=e(f)}}function e(a){for(var b=a.split("\n"),c=[],d=0;d<b.length;++d){var e=b[d];h(e)||f(e)||!e||c.push(e)}return c.join("\n")}function f(a){return-1!==a.indexOf("(module.js:")||-1!==a.indexOf("(node.js:")}function g(a){var b=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);if(b)return[b[1],Number(b[2])];var c=/at ([^ ]+):(\d+):(?:\d+)$/.exec(a);if(c)return[c[1],Number(c[2])];var d=/.*@(.+):(\d+)$/.exec(a);return d?[d[1],Number(d[2])]:void 0}function h(a){var b=g(a);if(!b)return!1;var c=b[0],d=b[1];return c===gb&&d>=ib&&Ab>=d}function i(){if(eb)try{throw new Error}catch(a){var b=a.stack.split("\n"),c=b[0].indexOf("@")>0?b[1]:b[2],d=g(c);if(!d)return;return gb=d[0],d[1]}}function j(a,b,c){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(b+" is deprecated, use "+c+" instead.",new Error("").stack),a.apply(a,arguments)}}function k(a){return B(a)}function l(){function a(a){b=a,f.source=a,mb(c,function(b,c){hb(function(){a.promiseDispatch.apply(a,c)})},void 0),c=void 0,d=void 0}var b,c=[],d=[],e=pb(l.prototype),f=pb(n.prototype);if(f.promiseDispatch=function(a,e,f){var g=lb(arguments);c?(c.push(g),"when"===e&&f[1]&&d.push(f[1])):hb(function(){b.promiseDispatch.apply(b,g)})},f.valueOf=j(function(){if(c)return f;var a=o(b);return p(a)&&(b=a),a},"valueOf","inspect"),f.inspect=function(){return b?b.inspect():{state:"pending"}},k.longStackSupport&&eb)try{throw new Error}catch(g){f.stack=g.stack.substring(g.stack.indexOf("\n")+1)}return e.promise=f,e.resolve=function(c){b||a(B(c))},e.fulfill=function(c){b||a(A(c))},e.reject=function(c){b||a(z(c))},e.notify=function(a){b||mb(d,function(b,c){hb(function(){c(a)})},void 0)},e}function m(a){if("function"!=typeof a)throw new TypeError("resolver must be a function.");var b=l();return O(a,b.resolve,b.reject,b.notify).fail(b.reject),b.promise}function n(a,b,c){void 0===b&&(b=function(a){return z(new Error("Promise does not support operation: "+a))});var d=pb(n.prototype);if(d.promiseDispatch=function(c,e,f){var g;try{g=a[e]?a[e].apply(d,f):b.call(d,e,f)}catch(h){g=z(h)}c&&c(g)},d.inspect=c,c){var e=c();"rejected"===e.state&&(d.exception=e.reason),d.valueOf=j(function(){var a=c();return"pending"===a.state||"rejected"===a.state?d:a.value})}return d}function o(a){if(p(a)){var b=a.inspect();if("fulfilled"===b.state)return b.value}return a}function p(a){return b(a)&&"function"==typeof a.promiseDispatch}function q(a){return b(a)&&"function"==typeof a.then}function r(a){return p(a)&&"pending"===a.inspect().state}function s(a){return!p(a)||"fulfilled"===a.inspect().state}function t(a){return p(a)&&"rejected"===a.inspect().state}function u(){xb||"undefined"==typeof window||window.Touch||!window.console||console.warn("[Q] Unhandled rejection reasons (should be empty):",vb),xb=!0}function v(){for(var a=0;a<vb.length;a++){var b=vb[a];b&&"undefined"!=typeof b.stack?console.warn("Unhandled rejection reason:",b.stack):console.warn("Unhandled rejection reason (no stack):",b)}}function w(){vb.length=0,wb.length=0,xb=!1,yb||(yb=!0,"undefined"!=typeof process&&process.on&&process.on("exit",v))}function x(a,b){yb&&(wb.push(a),vb.push(b),u())}function y(a){if(yb){var b=nb(wb,a);-1!==b&&(wb.splice(b,1),vb.splice(b,1))}}function z(a){var b=n({when:function(b){return b&&y(this),b?b(a):this}},function(){return this},function(){return{state:"rejected",reason:a}});return x(b,a),b}function A(a){return n({when:function(){return a},get:function(b){return a[b]},set:function(b,c){a[b]=c},"delete":function(b){delete a[b]},post:function(b,c){return null===b||void 0===b?a.apply(void 0,c):a[b].apply(a,c)},apply:function(b,c){return a.apply(b,c)},keys:function(){return rb(a)}},void 0,function(){return{state:"fulfilled",value:a}})}function B(a){return p(a)?a:q(a)?C(a):A(a)}function C(a){var b=l();return hb(function(){try{a.then(b.resolve,b.reject,b.notify)}catch(c){b.reject(c)}}),b.promise}function D(a){return n({isDef:function(){}},function(b,c){return K(a,b,c)},function(){return B(a).inspect()})}function E(a,b,c,e){function f(a){try{return"function"==typeof b?b(a):a}catch(c){return z(c)}}function g(a){if("function"==typeof c){d(a,m);try{return c(a)}catch(b){return z(b)}}return z(a)}function h(a){return"function"==typeof e?e(a):a}var i=l(),j=!1,m=B(a);return hb(function(){m.promiseDispatch(function(a){j||(j=!0,i.resolve(f(a)))},"when",[function(a){j||(j=!0,i.resolve(g(a)))}])}),m.promiseDispatch(void 0,"when",[void 0,function(a){var b,c=!1;try{b=h(a)}catch(d){if(c=!0,!k.onerror)throw d;k.onerror(d)}c||i.notify(b)}]),i.promise}function F(a,b,c){return E(a,function(a){return Q(a).then(function(a){return b.apply(void 0,a)},c)},c)}function G(a){return function(){function b(a,b){var g;if(tb){try{g=d[a](b)}catch(h){return z(h)}return g.done?g.value:E(g.value,e,f)}try{g=d[a](b)}catch(h){return c(h)?h.value:z(h)}return E(g,e,f)}var d=a.apply(this,arguments),e=b.bind(b,"send"),f=b.bind(b,"throw");return e()}}function H(a){k.done(k.async(a)())}function I(a){throw new kb(a)}function J(a){return function(){return F([this,Q(arguments)],function(b,c){return a.apply(b,c)})}}function K(a,b,c){var d=l();return hb(function(){B(a).promiseDispatch(d.resolve,b,c)}),d.promise}function L(a){return function(b){var c=lb(arguments,1);return K(b,a,c)}}function M(a,b){var c=lb(arguments,2);return zb(a,b,c)}function N(a,b){return K(a,"apply",[void 0,b])}function O(a){var b=lb(arguments,1);return N(a,b)}function P(a){var b=lb(arguments,1);return function(){var c=b.concat(lb(arguments));return K(a,"apply",[this,c])}}function Q(a){return E(a,function(a){var b=0,c=l();return mb(a,function(d,e,f){var g;p(e)&&"fulfilled"===(g=e.inspect()).state?a[f]=g.value:(++b,E(e,function(d){a[f]=d,0===--b&&c.resolve(a)},c.reject))},void 0),0===b&&c.resolve(a),c.promise})}function R(a){return E(a,function(a){return a=ob(a,B),E(Q(ob(a,function(a){return E(a,jb,jb)})),function(){return a})})}function S(a){return E(a,function(a){return Q(ob(a,function(b,c){return E(b,function(b){return a[c]={state:"fulfilled",value:b},a[c]},function(b){return a[c]={state:"rejected",reason:b},a[c]})})).thenResolve(a)})}function T(a,b){return E(a,void 0,b)}function U(a,b){return E(a,void 0,void 0,b)}function V(a,b){return E(a,function(a){return E(b(),function(){return a})},function(a){return E(b(),function(){return z(a)})})}function W(a,b,c,e){var f=function(b){hb(function(){if(d(b,a),!k.onerror)throw b;k.onerror(b)})},g=b||c||e?E(a,b,c,e):a;"object"==typeof process&&process&&process.domain&&(f=process.domain.bind(f)),T(g,f)}function X(a,b,c){var d=l(),e=setTimeout(function(){d.reject(new Error(c||"Timed out after "+b+" ms"))},b);return E(a,function(a){clearTimeout(e),d.resolve(a)},function(a){clearTimeout(e),d.reject(a)},d.notify),d.promise}function Y(a,b){void 0===b&&(b=a,a=void 0);var c=l();return E(a,void 0,void 0,c.notify),setTimeout(function(){c.resolve(a)},b),c.promise}function Z(a,b){var c=lb(b),d=l();return c.push(d.makeNodeResolver()),N(a,c).fail(d.reject),d.promise}function $(a){var b=lb(arguments,1),c=l();return b.push(c.makeNodeResolver()),N(a,b).fail(c.reject),c.promise}function _(a){var b=lb(arguments,1);return function(){var c=b.concat(lb(arguments)),d=l();return c.push(d.makeNodeResolver()),N(a,c).fail(d.reject),d.promise}}function ab(a,b){var c=lb(arguments,2);return function(){function d(){return a.apply(b,arguments)}var e=c.concat(lb(arguments)),f=l();return e.push(f.makeNodeResolver()),N(d,e).fail(f.reject),f.promise}}function bb(a,b,c){var d=lb(c||[]),e=l();return d.push(e.makeNodeResolver()),zb(a,b,d).fail(e.reject),e.promise}function cb(a,b){var c=lb(arguments,2),d=l();return c.push(d.makeNodeResolver()),zb(a,b,c).fail(d.reject),d.promise}function db(a,b){return b?(a.then(function(a){hb(function(){b(null,a)})},function(a){hb(function(){b(a)})}),void 0):a}var eb=!1;try{throw new Error}catch(fb){eb=!!fb.stack}var gb,hb,ib=i(),jb=function(){};"function"==typeof setImmediate?hb="undefined"!=typeof window?setImmediate.bind(window):setImmediate:"undefined"!=typeof process&&process.nextTick?hb=process.nextTick:function(){function a(){if(--e,++g>=d){g=0,d*=4;for(var a=f&&Math.min(f-1,d);a>e;)++e,h()}for(;f;){--f,b=b.next;var c=b.task;b.task=void 0,c()}g=0}var b={task:void 0,next:null},c=b,d=2,e=0,f=0,g=0,h=void 0;if(hb=function(a){c=c.next={task:a,next:null},e<++f&&d>e&&(++e,h())},"undefined"!=typeof MessageChannel){var i=new MessageChannel;i.port1.onmessage=a,h=function(){i.port2.postMessage(0)}}else h=function(){setTimeout(a,0)}}();var kb,lb=a(Array.prototype.slice),mb=a(Array.prototype.reduce||function(a,b){var c=0,d=this.length;if(1===arguments.length)for(;;){if(c in this){b=this[c++];break}if(++c>=d)throw new TypeError}for(;d>c;c++)c in this&&(b=a(b,this[c],c));return b}),nb=a(Array.prototype.indexOf||function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}),ob=a(Array.prototype.map||function(a,b){var c=this,d=[];return mb(c,function(e,f,g){d.push(a.call(b,f,g,c))},void 0),d}),pb=Object.create||function(a){function b(){}return b.prototype=a,new b},qb=a(Object.prototype.hasOwnProperty),rb=Object.keys||function(a){var b=[];for(var c in a)qb(a,c)&&b.push(c);return b},sb=a(Object.prototype.toString);kb="undefined"!=typeof ReturnValue?ReturnValue:function(a){this.value=a};var tb;try{new Function("(function* (){ yield 1; })"),tb=!0}catch(fb){tb=!1}var ub="From previous event:";k.nextTick=hb,k.longStackSupport=!1,k.defer=l,l.prototype.makeNodeResolver=function(){var a=this;return function(b,c){b?a.reject(b):arguments.length>2?a.resolve(lb(arguments,1)):a.resolve(c)}},k.promise=m,k.makePromise=n,n.prototype.then=function(a,b,c){return E(this,a,b,c)},n.prototype.thenResolve=function(a){return E(this,function(){return a})},n.prototype.thenReject=function(a){return E(this,function(){throw a})},mb(["isFulfilled","isRejected","isPending","dispatch","when","spread","get","set","del","delete","post","send","mapply","invoke","mcall","keys","fapply","fcall","fbind","all","allResolved","timeout","delay","catch","finally","fail","fin","progress","done","nfcall","nfapply","nfbind","denodeify","nbind","npost","nsend","nmapply","ninvoke","nmcall","nodeify"],function(a,b){n.prototype[b]=function(){return k[b].apply(k,[this].concat(lb(arguments)))}},void 0),n.prototype.toSource=function(){return this.toString()},n.prototype.toString=function(){return"[object Promise]"},k.nearer=o,k.isPromise=p,k.isPromiseAlike=q,k.isPending=r,k.isFulfilled=s,k.isRejected=t;var vb=[],wb=[],xb=!1,yb=!0;k.resetUnhandledRejections=w,k.getUnhandledReasons=function(){return vb.slice()},k.stopUnhandledRejectionTracking=function(){w(),"undefined"!=typeof process&&process.on&&process.removeListener("exit",v),yb=!1},w(),k.reject=z,k.fulfill=A,k.resolve=B,k.master=D,k.when=E,k.spread=F,k.async=G,k.spawn=H,k["return"]=I,k.promised=J,k.dispatch=K,k.dispatcher=L,k.get=L("get"),k.set=L("set"),k["delete"]=k.del=L("delete");var zb=k.post=L("post");k.mapply=zb,k.send=M,k.invoke=M,k.mcall=M,k.fapply=N,k["try"]=O,k.fcall=O,k.fbind=P,k.keys=L("keys"),k.all=Q,k.allResolved=j(R,"allResolved","allSettled"),k.allSettled=S,k["catch"]=k.fail=T,k.progress=U,k["finally"]=k.fin=V,k.done=W,k.timeout=X,k.delay=Y,k.nfapply=Z,k.nfcall=$,k.nfbind=_,k.denodeify=k.nfbind,k.nbind=ab,k.npost=bb,k.nmapply=bb,k.nsend=cb,k.ninvoke=k.nsend,k.nmcall=k.nsend,k.nodeify=db;var Ab=i();return k});
(function() {
  (typeof exports !== "undefined" && exports !== null ? exports : this).BaseInterface = (function() {
    function BaseInterface(global, globalName, interfaceName, usePromises) {
      this.global = global;
      this.globalName = globalName;
      this.usePromises = usePromises;
      this.proxy = this.global[interfaceName];
      this.currIdCount = 1;
      this.callbacks = {};
      this.registeredMethods = [];
      this.promises = [];
      this.readyState = !this.usePromises;
    }

    BaseInterface.prototype._registerMethod = function(name, callback) {
      var self;

      if (name === "constructor" || name[0] === "_") {
        return;
      }
      self = this;
      this.registeredMethods.push(name);
      return this.global[this.globalName][name] = function() {
        var args, deferred, f, givenCallback;

        args = Array.prototype.slice.call(arguments) || ["_____undefinedCallback"];
        givenCallback = void 0;
        if (args.length > 0 && typeof args[args.length - 1] === "function") {
          givenCallback = self._generateCallback(args.pop());
          args.push(givenCallback);
        }
        f = function() {
          if (callback) {
            return callback.apply(self, args);
          }
        };
        if (self.usePromises || self.readyState) {
          return f.apply(this, args);
        } else {
          deferred = Q.defer();
          return self.promises.push(deferred.promise);
        }
      };
    };

    BaseInterface.prototype._registerMethods = function(obj) {
      var m, _results;

      _results = [];
      for (m in obj) {
        _results.push(this._registerMethod(m, obj[m]));
      }
      return _results;
    };

    BaseInterface.prototype._generateCallback = function(fn) {
      var id, self;

      id = this._generatedUniqueId();
      self = this;
      this.global[id] = function() {
        return fn.apply(self, arguments);
      };
      return id;
    };

    BaseInterface.prototype._generatedUniqueId = function() {
      if (this.currIdCount >= 2048) {
        this.currIdCount = 1;
      }
      return this.globalName + "-callback-" + (this.currIdCount++) + "-" + Date.now();
    };

    BaseInterface.prototype._clean = function(opts) {
      var prop;

      for (prop in opts) {
        if (typeof opts[prop] === "function") {
          opts[prop] = this._generateCallback(opts[prop]);
        }
      }
      return JSON.stringify(opts);
    };

    BaseInterface.prototype._setReady = function() {
      var promise, _results;

      this.readyState = true;
      if (this.usePromises) {
        console.log("READY TO GO!!!!!!");
        _results = [];
        for (promise in this.promises) {
          _results.push(promise.resolve(this));
        }
        return _results;
      }
    };

    BaseInterface.instances = {};

    BaseInterface.instance = function(global, name, interfaceName, usePromises) {
      var inst, k, v;

      if (this.instances[name] === void 0) {
        inst = new this(global, name, interfaceName, usePromises);
        this.instances[name] = global[name] = inst;
        for (k in inst) {
          v = inst[k];
          if (typeof v === "function") {
            inst._registerMethod(k, v);
          }
        }
      }
      return global[name];
    };

    return BaseInterface;

  })();

}).call(this);
(function() {
  window['moto'] = {
    setup: function() {
      if (typeof window['setup'] === "function") {
        window.setup();
        return _moto.ok("");
      }
    },
    loop: function() {
      var resp;

      if (typeof window.loop === "function") {
        resp = window.loop();
        if (resp === undefined || resp === true) {
          return _moto.ok("");
        } else {
          return _moto.finish("");
        }
      } else {
        return _moto.finish("");
      }
    }
  };

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (typeof exports !== "undefined" && exports !== null ? exports : this).AndroidInterface = (function(_super) {
    __extends(AndroidInterface, _super);

    function AndroidInterface() {
      _ref = AndroidInterface.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AndroidInterface.prototype.vibrate = function(duration) {
      return this.proxy.vibrate(duration);
    };

    return AndroidInterface;

  })(BaseInterface);

  AndroidInterface.instance(window, "android", "_android", false);

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (typeof exports !== "undefined" && exports !== null ? exports : this).IOIOInterface = (function(_super) {
    __extends(IOIOInterface, _super);

    function IOIOInterface() {
      _ref = IOIOInterface.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    IOIOInterface.prototype.createDigitalOutput = function(pin, name, callback) {
      var cb, givenCallback, self;

      self = this;
      cb = function(publicName, privateName) {
        self.global[publicName] = {
          write: function(state) {
            return self.proxy.writeDigitalOutput(privateName, state);
          }
        };
        if (callback) {
          return self.global[callback].apply(self, this);
        }
      };
      givenCallback = this._generateCallback(cb);
      return this.proxy.createDigitalOutput(pin, name, givenCallback);
    };

    IOIOInterface.prototype.createDigitalInput = function(pin, name, callback) {
      var cb, self;

      self = this;
      cb = function(publicName, privateName) {
        self.global[publicName] = {
          read: function(into) {
            return self.proxy.readDigitalInput(privateName, self._generateCallback(into));
          },
          when: function(v, into) {
            return self.proxy.blockReadDigitalInput(privateName, v, self._generateCallback(into));
          },
          whenever: function(v, into) {
            return self.proxy.loopBlockReadDigitalInput(privateName, self._generateCallback(into));
          }
        };
        if (callback) {
          return self.global[callback].apply(self, this);
        }
      };
      return this.proxy.createDigitalInput(pin, name, this._generateCallback(cb));
    };

    IOIOInterface.prototype.createAnalogInput = function(pin, name, callback) {
      var cb, self;

      self = this;
      cb = function(publicName, privateName) {
        self.global[publicName] = {
          read: function(into) {
            return self.proxy.readAnalogInput(privateName, self._generateCallback(into));
          }
        };
        if (callback) {
          return self.global[callback].apply(self, this);
        }
      };
      return this.proxy.createAnalogInput(pin, name, this._generateCallback(cb));
    };

    IOIOInterface.prototype.createPulseInput = function(pin, name, callback) {
      var cb, self;

      self = this;
      cb = function(publicName, privateName) {
        self.global[publicName] = {
          getDuration: function(into) {
            return self.proxy.getPulseInputDuration(privateName, self._generateCallback(into));
          },
          getFrequency: function(into) {
            return self.proxy.getPulseFrequency(privateName, self._generateCallback(into));
          }
        };
        if (callback) {
          return self.global[callback].apply(self, this);
        }
      };
      return this.proxy.createPwmOutput(pin, name, this._generateCallback(cb));
    };

    IOIOInterface.prototype.createPwmOutput = function(pin, freq, name, callback) {
      var cb, self;

      self = this;
      cb = function(publicName, privateName) {
        self.global[publicName] = {
          setDutyCycle: function(num) {
            return self.proxy.setDutyCycle(privateName, num);
          },
          setPulseWidth: function(num) {
            return self.proxy.setPulseWidth(privateName, num);
          }
        };
        if (callback) {
          return self.global[callback].apply(self, this);
        }
      };
      return this.proxy.createPwmOutput(pin, freq, name, this._generateCallback(cb));
    };

    return IOIOInterface;

  })(BaseInterface);

  IOIOInterface.instance(window, "ioio", "_ioio", true);

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (typeof exports !== "undefined" && exports !== null ? exports : this).LogInterface = (function(_super) {
    __extends(LogInterface, _super);

    function LogInterface() {
      _ref = LogInterface.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    LogInterface.prototype.log = function(msg) {
      return this.proxy.log(msg);
    };

    return LogInterface;

  })(BaseInterface);

  LogInterface.instance(window, "console", "_console", false);

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (typeof exports !== "undefined" && exports !== null ? exports : this).SensorInterface = (function(_super) {
    __extends(SensorInterface, _super);

    function SensorInterface() {
      _ref = SensorInterface.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SensorInterface.prototype.startAccelerometer = function(cb) {
      return this.proxy.startAccelerometer(cb);
    };

    SensorInterface.prototype.stopAccelerometer = function() {
      return this.proxy.stopAccelerometer("");
    };

    return SensorInterface;

  })(BaseInterface);

  SensorInterface.instance(window, "sensors", "_sensors", false);

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (typeof exports !== "undefined" && exports !== null ? exports : this).UiInterface = (function(_super) {
    __extends(UiInterface, _super);

    function UiInterface() {
      _ref = UiInterface.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    UiInterface.prototype.addButton = function(text, callback) {
      return this.proxy.addButton(text, callback);
    };

    UiInterface.prototype.addLabel = function(text) {
      return this.proxy.addTextLabel(text);
    };

    UiInterface.prototype.addSeekBar = function(label, to, start, callback) {
      return this.proxy.addSeekBar(label, to, start, callback);
    };

    UiInterface.prototype.addCheckbox = function(label, selected, callback) {
      return this.proxy.addACheckbox(label, selected, callback);
    };

    UiInterface.prototype.addToggleButton = function(label, callback) {
      return this.proxy.addAToggleButton(label, callback);
    };

    UiInterface.prototype.showToast = function(text, duration) {
      if (duration == null) {
        duration = 1000;
      }
      return this.proxy.showToast(text, duration);
    };

    UiInterface.prototype.addPlot = function(callback) {
      return this.proxy.addPlot(callback);
    };

    UiInterface.prototype.addPlotValue = function(value) {
      return this.proxy.addPlotValue(value);
    };

    return UiInterface;

  })(BaseInterface);

  UiInterface.instance(window, "ui", "_ui", false);

}).call(this);
(function() {
  (typeof exports !== "undefined" && exports !== null ? exports : this).WebSocket = (function() {
    function WebSocket(manager, url, path, timeout) {
      if (timeout == null) {
        timeout = 300;
      }
      this.manager = manager;
      this.url = "http://" + url;
      this.path = path;
    }

    return WebSocket;

  })();

  (typeof exports !== "undefined" && exports !== null ? exports : this).WebSocketManager = (function() {
    function WebSocketManager() {
      this.ws = new WebSocket(this, window.location.hostname + ":8080", "/api");
      this.ws.onerror = this.onError;
      this.ws.onmessage = this.onMessage;
      this.ws.onclose = this.onClose;
      this.callbacks = [];
    }

    WebSocketManager.prototype.onError = function(err) {
      return console.log("on error");
    };

    WebSocketManager.prototype.onMessage = function(msg) {
      var c, _i, _len, _ref, _results;

      console.log("Got message: ", msg);
      _ref = this.callbacks;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        _results.push(c(msg));
      }
      return _results;
    };

    WebSocketManager.prototype.onClose = function() {
      return console.log("on close");
    };

    WebSocketManager.prototype.subscribe = function(cb) {
      if (typeof cb === "function") {
        alert("registering " + cb);
        return this.callbacks.push(cb);
      }
    };

    return WebSocketManager;

  })();

}).call(this);
(function() {


}).call(this);