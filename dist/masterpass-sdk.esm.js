import axios from 'axios';

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/*! mfs-client 24-02-2021 */
var SDK = {};
var dbits;
function BigInteger(t, e, r) {
  null != t && ('number' == typeof t ? this.fromNumber(t, e, r) : null == e && 'string' != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
}
function nbi() {
  return new BigInteger(null);
}
function am1(t, e, r, n, o, i) {
  for (; 0 <= --i;) {
    var s = e * this[t++] + r[n] + o;
    o = Math.floor(s / 67108864), r[n++] = 67108863 & s;
  }
  return o;
}
function am2(t, e, r, n, o, i) {
  for (var s = 32767 & e, a = e >> 15; 0 <= --i;) {
    var u = 32767 & this[t],
      c = this[t++] >> 15,
      l = a * u + c * s;
    o = ((u = s * u + ((32767 & l) << 15) + r[n] + (1073741823 & o)) >>> 30) + (l >>> 15) + a * c + (o >>> 30), r[n++] = 1073741823 & u;
  }
  return o;
}
function am3(t, e, r, n, o, i) {
  for (var s = 16383 & e, a = e >> 14; 0 <= --i;) {
    var u = 16383 & this[t],
      c = this[t++] >> 14,
      l = a * u + c * s;
    o = ((u = s * u + ((16383 & l) << 14) + r[n] + o) >> 28) + (l >> 14) + a * c, r[n++] = 268435455 & u;
  }
  return o;
}
dbits =  'Microsoft Internet Explorer' == navigator.appName ? (BigInteger.prototype.am = am2, 30) :  'Netscape' != navigator.appName ? (BigInteger.prototype.am = am1, 26) : (BigInteger.prototype.am = am3, 28), BigInteger.prototype.DB = dbits, BigInteger.prototype.DM = (1 << dbits) - 1, BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = /*#__PURE__*/Math.pow(2, BI_FP), BigInteger.prototype.F1 = BI_FP - dbits, BigInteger.prototype.F2 = 2 * dbits - BI_FP;
for (var BI_RM = '0123456789abcdefghijklmnopqrstuvwxyz', BI_RC = /*#__PURE__*/new Array(), rr = /*#__PURE__*/'0'.charCodeAt(0), vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
for (rr = /*#__PURE__*/'a'.charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
for (rr = /*#__PURE__*/'A'.charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
function int2char(t) {
  return BI_RM.charAt(t);
}
function intAt(t, e) {
  e = BI_RC[t.charCodeAt(e)];
  return null == e ? -1 : e;
}
function bnpCopyTo(t) {
  for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
  t.t = this.t, t.s = this.s;
}
function bnpFromInt(t) {
  this.t = 1, this.s = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
}
function nbv(t) {
  var e = nbi();
  return e.fromInt(t), e;
}
function bnpFromString(t, e) {
  var r;
  if (16 == e) r = 4;else if (8 == e) r = 3;else if (256 == e) r = 8;else if (2 == e) r = 1;else if (32 == e) r = 5;else {
    if (4 != e) return void this.fromRadix(t, e);
    r = 2;
  }
  this.t = 0, this.s = 0;
  for (var n = t.length, o = !1, i = 0; 0 <= --n;) {
    var s = 8 == r ? 255 & t[n] : intAt(t, n);
    s < 0 ? '-' == t.charAt(n) && (o = !0) : (o = !1, 0 == i ? this[this.t++] = s : i + r > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - i) - 1) << i, this[this.t++] = s >> this.DB - i) : this[this.t - 1] |= s << i, (i += r) >= this.DB && (i -= this.DB));
  }
  8 == r && 0 != (128 & t[0]) && (this.s = -1, 0 < i && (this[this.t - 1] |= (1 << this.DB - i) - 1 << i)), this.clamp(), o && BigInteger.ZERO.subTo(this, this);
}
function bnpClamp() {
  for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t;
}
function bnToString(t) {
  if (this.s < 0) return '-' + this.negate().toString(t);
  var e;
  if (16 == t) e = 4;else if (8 == t) e = 3;else if (2 == t) e = 1;else if (32 == t) e = 5;else {
    if (4 != t) return this.toRadix(t);
    e = 2;
  }
  var r,
    n = (1 << e) - 1,
    o = !1,
    i = '',
    s = this.t,
    a = this.DB - s * this.DB % e;
  if (0 < s--) for (a < this.DB && 0 < (r = this[s] >> a) && (o = !0, i = int2char(r)); 0 <= s;) a < e ? (r = (this[s] & (1 << a) - 1) << e - a, r |= this[--s] >> (a += this.DB - e)) : (r = this[s] >> (a -= e) & n, a <= 0 && (a += this.DB, --s)), (o = 0 < r ? !0 : o) && (i += int2char(r));
  return o ? i : '0';
}
function bnNegate() {
  var t = nbi();
  return BigInteger.ZERO.subTo(this, t), t;
}
function bnAbs() {
  return this.s < 0 ? this.negate() : this;
}
function bnCompareTo(t) {
  var e = this.s - t.s;
  if (0 != e) return e;
  var r = this.t;
  if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
  for (; 0 <= --r;) if (0 != (e = this[r] - t[r])) return e;
  return 0;
}
function nbits(t) {
  var e,
    r = 1;
  return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r;
}
function bnBitLength() {
  return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
}
function bnpDLShiftTo(t, e) {
  for (var r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
  for (r = t - 1; 0 <= r; --r) e[r] = 0;
  e.t = this.t + t, e.s = this.s;
}
function bnpDRShiftTo(t, e) {
  for (var r = t; r < this.t; ++r) e[r - t] = this[r];
  e.t = Math.max(this.t - t, 0), e.s = this.s;
}
function bnpLShiftTo(t, e) {
  for (var r = t % this.DB, n = this.DB - r, o = (1 << n) - 1, i = Math.floor(t / this.DB), s = this.s << r & this.DM, a = this.t - 1; 0 <= a; --a) e[a + i + 1] = this[a] >> n | s, s = (this[a] & o) << r;
  for (a = i - 1; 0 <= a; --a) e[a] = 0;
  e[i] = s, e.t = this.t + i + 1, e.s = this.s, e.clamp();
}
function bnpRShiftTo(t, e) {
  e.s = this.s;
  var r = Math.floor(t / this.DB);
  if (r >= this.t) e.t = 0;else {
    var n = t % this.DB,
      o = this.DB - n,
      i = (1 << n) - 1;
    e[0] = this[r] >> n;
    for (var s = r + 1; s < this.t; ++s) e[s - r - 1] |= (this[s] & i) << o, e[s - r] = this[s] >> n;
    0 < n && (e[this.t - r - 1] |= (this.s & i) << o), e.t = this.t - r, e.clamp();
  }
}
function bnpSubTo(t, e) {
  for (var r = 0, n = 0, o = Math.min(t.t, this.t); r < o;) n += this[r] - t[r], e[r++] = n & this.DM, n >>= this.DB;
  if (t.t < this.t) {
    for (n -= t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
    n += this.s;
  } else {
    for (n += this.s; r < t.t;) n -= t[r], e[r++] = n & this.DM, n >>= this.DB;
    n -= t.s;
  }
  e.s = n < 0 ? -1 : 0, n < -1 ? e[r++] = this.DV + n : 0 < n && (e[r++] = n), e.t = r, e.clamp();
}
function bnpMultiplyTo(t, e) {
  var r = this.abs(),
    n = t.abs(),
    o = r.t;
  for (e.t = o + n.t; 0 <= --o;) e[o] = 0;
  for (o = 0; o < n.t; ++o) e[o + r.t] = r.am(0, n[o], e, o, 0, r.t);
  e.s = 0, e.clamp(), this.s != t.s && BigInteger.ZERO.subTo(e, e);
}
function bnpSquareTo(t) {
  for (var e = this.abs(), r = t.t = 2 * e.t; 0 <= --r;) t[r] = 0;
  for (r = 0; r < e.t - 1; ++r) {
    var n = e.am(r, e[r], t, 2 * r, 0, 1);
    (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1);
  }
  0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
}
function bnpDivRemTo(t, e, r) {
  var n = t.abs();
  if (!(n.t <= 0)) {
    var o = this.abs();
    if (o.t < n.t) return null != e && e.fromInt(0), void (null != r && this.copyTo(r));
    null == r && (r = nbi());
    var i = nbi(),
      s = this.s,
      a = t.s,
      t = this.DB - nbits(n[n.t - 1]);
    0 < t ? (n.lShiftTo(t, i), o.lShiftTo(t, r)) : (n.copyTo(i), o.copyTo(r));
    var u = i.t,
      c = i[u - 1];
    if (0 != c) {
      var o = c * (1 << this.F1) + (1 < u ? i[u - 2] >> this.F2 : 0),
        l = this.FV / o,
        p = (1 << this.F1) / o,
        f = 1 << this.F2,
        h = r.t,
        d = h - u,
        y = null == e ? nbi() : e;
      for (i.dlShiftTo(d, y), 0 <= r.compareTo(y) && (r[r.t++] = 1, r.subTo(y, r)), BigInteger.ONE.dlShiftTo(u, y), y.subTo(i, i); i.t < u;) i[i.t++] = 0;
      for (; 0 <= --d;) {
        var m = r[--h] == c ? this.DM : Math.floor(r[h] * l + (r[h - 1] + f) * p);
        if ((r[h] += i.am(0, m, r, d, 0, u)) < m) for (i.dlShiftTo(d, y), r.subTo(y, r); r[h] < --m;) r.subTo(y, r);
      }
      null != e && (r.drShiftTo(u, e), s != a && BigInteger.ZERO.subTo(e, e)), r.t = u, r.clamp(), 0 < t && r.rShiftTo(t, r), s < 0 && BigInteger.ZERO.subTo(r, r);
    }
  }
}
function bnMod(t) {
  var e = nbi();
  return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(BigInteger.ZERO) && t.subTo(e, e), e;
}
function Classic(t) {
  this.m = t;
}
function cConvert(t) {
  return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
}
function cRevert(t) {
  return t;
}
function cReduce(t) {
  t.divRemTo(this.m, null, t);
}
function cMulTo(t, e, r) {
  t.multiplyTo(e, r), this.reduce(r);
}
function cSqrTo(t, e) {
  t.squareTo(e), this.reduce(e);
}
function bnpInvDigit() {
  if (this.t < 1) return 0;
  var t = this[0];
  if (0 == (1 & t)) return 0;
  var e = 3 & t;
  return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e;
}
function Montgomery(t) {
  this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
}
function montConvert(t) {
  var e = nbi();
  return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(BigInteger.ZERO) && this.m.subTo(e, e), e;
}
function montRevert(t) {
  var e = nbi();
  return t.copyTo(e), this.reduce(e), e;
}
function montReduce(t) {
  for (; t.t <= this.mt2;) t[t.t++] = 0;
  for (var e = 0; e < this.m.t; ++e) {
    var r = 32767 & t[e],
      n = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
    for (t[r = e + this.m.t] += this.m.am(0, n, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++;
  }
  t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t);
}
function montSqrTo(t, e) {
  t.squareTo(e), this.reduce(e);
}
function montMulTo(t, e, r) {
  t.multiplyTo(e, r), this.reduce(r);
}
function bnpIsEven() {
  return 0 == (0 < this.t ? 1 & this[0] : this.s);
}
function bnpExp(t, e) {
  if (4294967295 < t || t < 1) return BigInteger.ONE;
  var r,
    n = nbi(),
    o = nbi(),
    i = e.convert(this),
    s = nbits(t) - 1;
  for (i.copyTo(n); 0 <= --s;) e.sqrTo(n, o), 0 < (t & 1 << s) ? e.mulTo(o, i, n) : (r = n, n = o, o = r);
  return e.revert(n);
}
function bnModPowInt(t, e) {
  e = new (t < 256 || e.isEven() ? Classic : Montgomery)(e);
  return this.exp(t, e);
}
function Arcfour() {
  this.i = 0, this.j = 0, this.S = new Array();
}
function ARC4init(t) {
  for (var e, r, n = 0; n < 256; ++n) this.S[n] = n;
  for (n = e = 0; n < 256; ++n) e = e + this.S[n] + t[n % t.length] & 255, r = this.S[n], this.S[n] = this.S[e], this.S[e] = r;
  this.i = 0, this.j = 0;
}
function ARC4next() {
  var t;
  return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
}
function prng_newstate() {
  return new Arcfour();
}
Classic.prototype.convert = cConvert, Classic.prototype.revert = cRevert, Classic.prototype.reduce = cReduce, Classic.prototype.mulTo = cMulTo, Classic.prototype.sqrTo = cSqrTo, Montgomery.prototype.convert = montConvert, Montgomery.prototype.revert = montRevert, Montgomery.prototype.reduce = montReduce, Montgomery.prototype.mulTo = montMulTo, Montgomery.prototype.sqrTo = montSqrTo, BigInteger.prototype.copyTo = bnpCopyTo, BigInteger.prototype.fromInt = bnpFromInt, BigInteger.prototype.fromString = bnpFromString, BigInteger.prototype.clamp = bnpClamp, BigInteger.prototype.dlShiftTo = bnpDLShiftTo, BigInteger.prototype.drShiftTo = bnpDRShiftTo, BigInteger.prototype.lShiftTo = bnpLShiftTo, BigInteger.prototype.rShiftTo = bnpRShiftTo, BigInteger.prototype.subTo = bnpSubTo, BigInteger.prototype.multiplyTo = bnpMultiplyTo, BigInteger.prototype.squareTo = bnpSquareTo, BigInteger.prototype.divRemTo = bnpDivRemTo, BigInteger.prototype.invDigit = bnpInvDigit, BigInteger.prototype.isEven = bnpIsEven, BigInteger.prototype.exp = bnpExp, BigInteger.prototype.toString = bnToString, BigInteger.prototype.negate = bnNegate, BigInteger.prototype.abs = bnAbs, BigInteger.prototype.compareTo = bnCompareTo, BigInteger.prototype.bitLength = bnBitLength, BigInteger.prototype.mod = bnMod, BigInteger.prototype.modPowInt = bnModPowInt, BigInteger.ZERO = /*#__PURE__*/nbv(0), BigInteger.ONE = /*#__PURE__*/nbv(1), Arcfour.prototype.init = ARC4init, Arcfour.prototype.next = ARC4next;
var rng_state,
  rng_psize = 256;
function rng_seed_int(t) {
  rng_pool[rng_pptr++] ^= 255 & t, rng_pool[rng_pptr++] ^= t >> 8 & 255, rng_pool[rng_pptr++] ^= t >> 16 & 255, rng_pool[rng_pptr++] ^= t >> 24 & 255, rng_psize <= rng_pptr && (rng_pptr -= rng_psize);
}
function rng_seed_time() {
  rng_seed_int(new Date().getTime());
}
if (null == rng_pool) {
  var rng_pool = /*#__PURE__*/new Array(),
    rng_pptr = 0;
  if (window.crypto && window.crypto.getRandomValues) {
    var ua = /*#__PURE__*/new Uint8Array(32);
    for (window.crypto.getRandomValues(ua), t = 0; t < 32; ++t) rng_pool[rng_pptr++] = ua[t];
  }
  if ('Netscape' == navigator.appName && navigator.appVersion < '5' && window.crypto) for (var z = /*#__PURE__*/window.crypto.random(32), t = 0; t < z.length; ++t) rng_pool[rng_pptr++] = 255 & /*#__PURE__*/z.charCodeAt(t);
  for (; rng_pptr < rng_psize;) t = /*#__PURE__*/Math.floor(65536 * /*#__PURE__*/Math.random()), rng_pool[rng_pptr++] = t >>> 8, rng_pool[rng_pptr++] = 255 & t;
  rng_pptr = 0, rng_seed_time();
}
function rng_get_byte() {
  if (null == rng_state) {
    for (rng_seed_time(), (rng_state = prng_newstate()).init(rng_pool), rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) rng_pool[rng_pptr] = 0;
    rng_pptr = 0;
  }
  return rng_state.next();
}
function rng_get_bytes(t) {
  for (var e = 0; e < t.length; ++e) t[e] = rng_get_byte();
}
function SecureRandom() {}
function parseBigInt(t, e) {
  return new BigInteger(t, e);
}
function pkcs1pad2(t, e) {
  if (e < t.length + 11) return alert('Message too long for RSA'), null;
  for (var r = new Array(), n = t.length - 1; 0 <= n && 0 < e;) {
    var o = t.charCodeAt(n--);
    o < 128 ? r[--e] = o : 127 < o && o < 2048 ? (r[--e] = 63 & o | 128, r[--e] = o >> 6 | 192) : (r[--e] = 63 & o | 128, r[--e] = o >> 6 & 63 | 128, r[--e] = o >> 12 | 224);
  }
  r[--e] = 0;
  for (var i = new SecureRandom(), s = new Array(); 2 < e;) {
    for (s[0] = 0; 0 == s[0];) i.nextBytes(s);
    r[--e] = s[0];
  }
  return r[--e] = 2, r[--e] = 0, new BigInteger(r);
}
function RSAKey() {
  this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null;
}
function RSASetPublic(t, e) {
  null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = parseBigInt(t, 16), this.e = parseInt(e, 16)) : alert('Invalid RSA public key');
}
function RSADoPublic(t) {
  return t.modPowInt(this.e, this.n);
}
function RSAEncrypt(t) {
  t = pkcs1pad2(t, this.n.bitLength() + 7 >> 3);
  if (null == t) return null;
  t = this.doPublic(t);
  if (null == t) return null;
  t = t.toString(16);
  return 0 == (1 & t.length) ? t : '0' + t;
}
SecureRandom.prototype.nextBytes = rng_get_bytes, RSAKey.prototype.doPublic = RSADoPublic, RSAKey.prototype.setPublic = RSASetPublic, RSAKey.prototype.encrypt = RSAEncrypt;
function initMFS() {
  var j = 'https://test.masterpassturkiye.com/MasterpassJsonServerHandler/v2',
    L = '',
    F = new RSAKey();
  F.setPublic('F619C53A37BAB059C583DA9AC4E2920FFC9D57E00885E82F7A0863DEAC43CE06374E45A1417DAC907C6CAC0AF1DDF1D7152192FED7A1D9255C97BC27E420E0742B95ED3C53C62995F42CB6EEDB7B1FBDD3E4F4A4AA935650DA81E763CA7074690032F6A6AF72802CC50394C2AFA5C9450A990E6F969A38571C8BC9E381125D2BEEC348AF919D7374FF10DC3E0B4367566CE929AD6EA323A475A677EB41C20B42D44E82E8A53DD52334D927394FCADF09', '03'), SDK = function () {
    function o(t, e, r) {
      for (var n = r.length - 1; 0 <= n; n--) {
        var o = r[n];
        e[o] = function (t, e) {
          var tValue = t[e];
          for (var r = Object.keys(t), n = r.length - 1; 0 <= n; n--) {
            if (r[n] == e) {
              if ('cardAliasName' == e || 'accountAliasName' == e || 'cardHolderName' == e || 'listAccountName' == e || 'productId' == e || 'senderAliasName' == e || 'recipientAliasName' == e) return encodeURIComponent(tValue);
              if ('validationCode' == e) {
                if (I) return F.encrypt(tValue);
                if (N) {
                  var i = tValue.replace('.', '').replace(',', '');
                  return 3 == i.length ? i : i.concat('0');
                }
              }
              if ('rtaPan' == e || 'pan' == e) return P(tValue) ? F.encrypt(tValue) : '';
              if ('cvv' == e || 'cvc' == e) return 3 != tValue.length && 4 != tValue.length ? '' : F.encrypt(tValue);
              if ('installmentCount' == e && '' !== tValue && !isNaN(tValue)) return parseFloat(tValue);
              if (typeof tValue === 'boolean' && !tValue) continue;
              return tValue;
            }
          }
          return null;
        }(t, o);
      }
      e.fp = L, e.additionalParams = u;
    }
    function i(t, e, n) {
      t.clientId = s;
      var r = (r = new Date().toJSON()).replace(/"/g, '');
      t.dateTime = r, t.version = '36.2', t.clientType = '1', axios.post(j + e, t).then(function (response) {
        return response.data;
      }).then(function (e) {
        var r = function (t) {
          var r = {};
          if (e.hasOwnProperty('Data')) {
            r.referenceNo = e.Data.Body.Fault.Detail.ServiceFaultDetail.RefNo, r.responseCode = e.Data.Body.Fault.Detail.ServiceFaultDetail.ResponseCode, r.responseDescription = e.Data.Body.Fault.Detail.ServiceFaultDetail.ResponseDesc, r.url3D = e.Data.Body.Fault.Detail.ServiceFaultDetail.Url3D, r.url3DSuccess = e.Data.Body.Fault.Detail.ServiceFaultDetail.Url3DSuccess, r.url3DError = e.Data.Body.Fault.Detail.ServiceFaultDetail.Url3DError, r.urlLoan = e.Data.Body.Fault.Detail.ServiceFaultDetail.UrlLoan, r.urlLoanSuccess = e.Data.Body.Fault.Detail.ServiceFaultDetail.UrlLoanSuccess, r.urlLoanError = e.Data.Body.Fault.Detail.ServiceFaultDetail.UrlLoanError, r.newMsisdn = e.Data.Body.Fault.Detail.ServiceFaultDetail.NewMsisdn, r.internalResponseCode = e.Data.Body.Fault.Detail.ServiceFaultDetail.InternalResponseCode, r.internalResponseDescription = e.Data.Body.Fault.Detail.ServiceFaultDetail.InternalResponseMessage;
            var n = e.Data.Body.Fault.Detail.ServiceFaultDetail.Token,
              o = '';
            if (e.Data.Body.hasOwnProperty('Response')) {
              o = e.Data.Body.Response.Result.TransactionBody.Token, r.token = o;
              t = '';
              e.Data.Body.Response.Result.TransactionBody.hasOwnProperty('RefNo') && '' !== e.Data.Body.Response.Result.TransactionBody.RefNo && (t = e.Data.Body.Response.Result.TransactionBody.RefNo), e.Data.Body.Fault.Detail.ServiceFaultDetail.hasOwnProperty('RefNo') && '' !== e.Data.Body.Fault.Detail.ServiceFaultDetail.RefNo && (t = e.Data.Body.Fault.Detail.ServiceFaultDetail.RefNo), r.transactionId = t;
              t = '';
              e.Data.Body.Response.Result.TransactionBody.hasOwnProperty('CardUniqueId') && '' !== e.Data.Body.Response.Result.TransactionBody.CardUniqueId && (t = e.Data.Body.Response.Result.TransactionBody.CardUniqueId), r.cardUniqueId = t, e.Data.Body.Response.Result.TransactionBody.hasOwnProperty('AccountList') && '' !== e.Data.Body.Response.Result.TransactionBody.AccountList && (r.AccountList = e.Data.Body.Response.Result.TransactionBody.AccountList);
              var i = e.Data.Body.Response.Result.TransactionBody.ListItems;
              try {
                i && 0 !== i.ListItem && (r.cards = i.ListItem);
              } catch (t) {}
              try {
                i && 0 !== i.BankList && (r.banks = i.BankList);
              } catch (t) {}
              r.accountStatus = e.Data.Body.Response.Result.TransactionBody.AccountStatus, r.amount = e.Data.Body.Response.Result.TransactionBody.Amount, r.orderNo = e.Data.Body.Response.Result.TransactionBody.OrderNo, r.installmentCount = e.Data.Body.Response.Result.TransactionBody.InstallmentCount;
            }
            n && 0 !== n.length ? a = n : r.token = o;
          }
          return r;
        }(e);
        n(200, r);
      })["catch"](function (error) {
        return n(500, error);
      });
    }
    var s,
      a,
      u,
      c,
      n = ['actionType', 'clientIp', 'delinkReason', 'eActionType', 'cardTypeFlag', 'cpinFlag', 'defaultAccount', 'mmrpConfig', 'identityVerificationFlag', 'mobileAccountConfig', 'msisdn', 'referenceNo', 'sendSms', 'sendSmsLanguage', 'timeZone', 'uiChannelType', 'rtaPan', 'expiryDate', 'accountAliasName', 'cvc', 'homeAddress', 'homeCity', 'homeState', 'homeCountryCode', 'homePostalCode', 'firstName', 'lastName', 'email', 'cardHolderName', 'token'],
      l = ['msisdn', 'referenceNo', 'sendSms', 'sendSmsLanguage', 'accountAliasName', 'token'],
      p = ['validationCode', 'sendSms', 'sendSmsLanguage', 'referenceNo', 'token'],
      f = ['aav', 'amount', 'clientIp', 'encCPin', 'encPassword', 'listAccountName', 'msisdn', 'password', 'referenceNo', 'sendSms', 'sendSmsLanguage', 'sendSmsMerchant', 'userId', 'token', 'rewardName', 'rewardValue', 'moneyCardInvoiceAmount', 'moneyCardMigrosDiscountAmount', 'moneyCardPaymentAmount', 'moneyCardExtraDiscountAmount', 'moneyCardProductBasedDiscountAmount', 'installmentCount', 'cvc', 'macroMerchantId', 'orderNo', 'paymentType'],
      h = ['msisdn', 'encPan', 'token', 'referenceNo', 'sendSms', 'sendSmsLanguage', 'cvv'],
      d = ['userId', 'token', 'referenceNo', 'sendSms', 'sendSmsLanguage'],
      y = ['msisdn', 'cardAliasName', 'token', 'referenceNo', 'sendSms', 'sendSmsLanguage'],
      m = ['msisdn', 'cardAliasName', 'token', 'referenceNo', 'sendSms', 'sendSmsLanguage'],
      g = ['token', 'msisdn', 'sendSmsLanguage', 'fP', 'amount', 'expiryDate', 'rtaPan', 'cardHolderName', 'cvc', 'macroMerchantId', 'orderNo', 'paymentType', 'installmentCount', 'rewardName', 'rewardValue'],
      b = ['sendSmsLanguage', 'msisdn', 'token', 'cardAliasName', 'fP', 'referenceNo', 'sendSms'],
      v = ['token', 'msisdn', 'oldValue', 'theNewValue', 'valueType', 'sendSmsLanguage', 'fP', 'referenceNo', 'sendSms'],
      T = ['token', 'msisdn', 'sendSmsLanguage', 'fP', 'referenceNo', 'sendSms'],
      _ = ['msisdn', 'accountAliasName', 'token', 'referenceNo', 'sendSms', 'sendSmsLanguage', 'fP', 'amount', 'actionType', 'firstName', 'lastName', 'gender', 'expiryDate', 'rtaPan', 'cardHolderName', 'orderNo', 'merchantId', 'rewardName', 'rewardValue', 'moneyCardInvoiceAmount', 'moneyCardMigrosDiscountAmount', 'moneyCardPaymentAmount', 'moneyCardExtraDiscountAmount', 'moneyCardProductBasedDiscountAmount', 'installmentCount', 'cvc', 'macroMerchantId', 'orderNo', 'paymentType'],
      S = ['msisdn', 'token', 'referenceNo', 'sendSms', 'sendSmsLanguage'],
      w = ['msisdn', 'token', 'listAccountName', 'amount', 'endDate', 'actionType', 'referenceNo', 'sendSms', 'sendSmsLanguage', 'productId'],
      D = ['aav', 'amount', 'clientIp', 'encCPin', 'encPassword', 'moneySendType', 'senderAliasName', 'recipientAliasName', 'msisdn', 'password', 'referenceNo', 'sendSms', 'sendSmsLanguage', 'sendSmsMerchant', 'userId', 'token', 'rewardName', 'rewardValue', 'moneyCardInvoiceAmount', 'installmentCount', 'cvc', 'macroMerchantId', 'orderNo', 'paymentType'],
      A = ['language', 'referenceNo', 'cvc', 'pan', 'client_token', 'action_type', 'token'],
      C = ['msisdn', 'token', 'language', 'referenceNo'],
      R = ['referenceNo', 'language', 'msisdn', 'amount', 'client_token', 'fP', 'macroMerchantId', 'orderNo', 'basketInfo', 'campaignCode', 'loanBankIca', 'bankIca'],
      B = ['referenceNo', 'language', 'token', 'fP', 'identityNumber', 'transactionType'],
      E = ['referenceNo', 'language', 'token', 'fP', 'installmentId', 'installmentCount', 'loanType'],
      O = ['referenceNo', 'language', 'token', 'fP', 'loanType', 'loanRrn'],
      I = !1,
      N = !1,
      P = (c = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9], function (t) {
        for (var e, r = t.length, n = 1, o = 0; r;) e = parseInt(t.charAt(--r), 10), o += (n ^= 1) ? c[e] : e;
        return o && o % 10 == 0;
      });
    return {
      setClientId: function setClientId(t) {
        s = t;
      },
      listCards: function listCards(t, e, r) {
        var n = {};
        n.msisdn = t, n.token = e, n.referenceNo = '00000000', n.listType = 'ACCOUNT', n.sendSms = 'Y', n.clientIp = '', n.sendSmsLanguage = 'eng', i(n, '/listManagement', r);
      },
      register: function register(t, e) {
        var r = {};
        o(t, r, n), i(r, '/register', e);
      },
      purchase: function purchase(t, e) {
        var r = {};
        o(t, r, f), i(r, '/remotePurchaseOther', e);
      },
      commit: function commit(t) {
        var e = {
          referenceNo: '00000000',
          sendSms: 'N',
          sendSmsLanguage: 'eng'
        };
        e.token = t, i(e, '/commitTransaction', function () {});
      },
      deleteCard: function deleteCard(t, e) {
        var r = {};
        o(t, r, l), i(r, '/deleteCard', e);
      },
      validateTransaction: function validateTransaction(t, e) {
        var r = t['pinType'];
        I = 'mpin' == r || 'cvv' == r, 'rta' == r && (N = !0);
        r = {};
        r.validationRefNo = a, o(t, r, p), i(r, '/validateTransaction', e);
      },
      forgotPassword: function forgotPassword(t, e) {
        var r = {};
        o(t, r, h), i(r, '/forgotPassword', e);
      },
      setAddress: function setAddress(t) {
        j = t;
      },
      checkMasterPass: function checkMasterPass(t, e) {
        var r = {};
        o(t, r, d), i(r, '/checkMasterPassEndUser', e);
      },
      linkCardToClient: function linkCardToClient(t, e) {
        var r = {};
        o(t, r, m), i(r, '/linkCardToClient', e);
      },
      addCardToMasterPass: function addCardToMasterPass(t, e) {
        var r = {};
        o(t, r, y), i(r, '/addCardToMasterPass', e);
      },
      purchaseAndRegister: function purchaseAndRegister(t, e) {
        var r = {};
        r.validationRefNo = a, o(t, r, _), i(r, '/purchaseAndRegister', e);
      },
      directPurchase: function directPurchase(t, e) {
        var r = {};
        o(t, r, g), i(r, '/directPurchase', e);
      },
      resendOtp: function resendOtp(t, e, r) {
        var n = {};
        n.validationRefNo = t, n.referenceNo = '00000000', n.sendSms = 'N', n.sendSmsLanguage = e, i(n, '/resendOtp', r);
      },
      completeRegistration: function completeRegistration(t, e, r) {
        var n = {};
        n.token2 = e, o(t, n, b), i(n, '/completeRegistration', r);
      },
      setFingerprint: function setFingerprint(t) {
        L = t;
      },
      setToken: function setToken(t) {
        a = t;
      },
      getLastToken: function getLastToken() {
        return a;
      },
      updateUser: function updateUser(t, e) {
        var r = {};
        o(t, r, v), i(r, '/updateUser', e);
      },
      verifyPin: function verifyPin(t, e) {
        var r = {};
        o(t, r, T), i(r, '/verifyPin', e);
      },
      parseQrCode: function parseQrCode(t, e) {
        var r = {};
        o(t, r, S), i(r, '/QrPaymentVerify', e);
      },
      initiateRecurringPayment: function initiateRecurringPayment(t, e) {
        var r = {};
        o(t, r, w), i(r, '/initiateManageRecurringPayment', e);
      },
      setAdditionalParameters: function setAdditionalParameters(t) {
        u = t;
      },
      moneySend: function moneySend(t, e) {
        var r = {};
        o(t, r, D), i(r, '/initiateMoneySend', e);
      },
      getCardUniqueId: function getCardUniqueId(t, e, r) {
        var n = {};
        P(t) ? n.rtaPan = F.encrypt(t) : n.rtaPan = '', n.token = e, n.referenceNo = '00000000', n.sendSms = 'N', n.clientIp = '', n.sendSmsLanguage = 'eng', i(n, '/getCardUniqueId', r);
      },
      listCardAccounts: function listCardAccounts(t, e) {
        var r = {};
        o(t, r, A), i(r, '/ListAccountByCardOwner ', e);
      },
      deleteCardAccount: function deleteCardAccount(t, e) {
        var r = {};
        o(t, r, C), i(r, '/deletecardbycardowner', e);
      },
      getDigitalLoanUrl: function getDigitalLoanUrl(t, e) {
        var r = {};
        o(t, r, R), i(r, '/digitalLoanUrl', e);
      },
      initiateTcknValidation: function initiateTcknValidation(t, e) {
        var r = {};
        o(t, r, B), i(r, '/initiateTcknValidation', e);
      },
      completeLoan: function completeLoan(t, e) {
        var r = {};
        o(t, r, E), i(r, '/completeLoan', e);
      },
      initiateLoanPayment: function initiateLoanPayment(t, e) {
        var r = {};
        o(t, r, O), i(r, '/initiateLoanPayment', e);
      }
    };
  }();
}
initMFS();
var MFS = SDK;

var DefaultMethodData = {
  register: {
    actionType: 'A',
    eActionType: 'A',
    cardTypeFlag: '05',
    cpinFlag: 'Y',
    defaultAccount: 'Y',
    mmrpConfig: '110010',
    identityVerificationFlag: 'Y',
    mobileAccountConfig: 'MWA',
    timeZone: '+01',
    uiChannelType: '06'
  },
  validateTransaction: {
    pinType: 'otp'
  },
  purchase: {
    macroMerchantId: '',
    orderNo: '',
    paymentType: '',
    rewardName: '',
    cvc: '',
    sendSms: 'N',
    aav: 'aav',
    clientIp: '',
    encCPin: '0',
    encPassword: '',
    sendSmsMerchant: 'Y',
    password: ''
  }
};
var ResponseCodes = {
  SUCCESS_EMPTY: '',
  SUCCESS: '0000',
  VALIDATE_OTP: '5001',
  VALIDATE_MPIN: '5002',
  VALIDATE_DEVICE: '5008',
  VALIDATE_3D_SECURE: '5010',
  PIN_DETERMINATION: '5015'
};
var Constants = {
  DefaultMethodData: DefaultMethodData,
  ResponseCodes: ResponseCodes
};

var mfsResponseHandler = function mfsResponseHandler(status, response, resolve, reject) {
  if (status !== 200) {
    return reject({
      status: 'unknown',
      message: 'Connection Error',
      response: {}
    });
  }
  if (response.responseCode === Constants.ResponseCodes.SUCCESS_EMPTY || response.responseCode === Constants.ResponseCodes.SUCCESS || response.responseCode === Constants.ResponseCodes.VALIDATE_OTP || response.responseCode === Constants.ResponseCodes.VALIDATE_MPIN || response.responseCode === Constants.ResponseCodes.VALIDATE_DEVICE || response.responseCode === Constants.ResponseCodes.VALIDATE_3D_SECURE || response.responseCode === Constants.ResponseCodes.PIN_DETERMINATION) {
    return resolve(response);
  }
  reject({
    status: response.responseCode,
    message: response.responseDescription,
    data: _extends({}, response, {
      message: response.responseDescription
    })
  });
};
var parseAccountStatus = function parseAccountStatus(accountStatus) {
  if (accountStatus.substring(0, 6) === '000000') return 'not-user';
  if (accountStatus.substring(1, 6) === '11000') return 'unlinked';
  if (accountStatus.substring(1, 6) === '11100') return 'registered';
  return 'unknown';
};
var Utils = {
  mfsResponseHandler: mfsResponseHandler,
  parseAccountStatus: parseAccountStatus
};

var MasterPass = function MasterPass() {}; // MasterPass Utils Methods
MasterPass.Utils = Utils;
// MasterPass Constants
MasterPass.Constants = Constants;
// Set Adress Method
MasterPass.setAddress = MFS.setAddress;
// Set Client Id Method
MasterPass.setClientId = MFS.setClientId;
// Get Last Token Method
MasterPass.getLastToken = MFS.getLastToken;
// Check MasterPass Method
MasterPass.checkMasterPass = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            MFS.checkMasterPass(data, function (status, response) {
              return Utils.mfsResponseHandler(status, response, resolve, reject);
            });
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
// List Cards Method
MasterPass.listCards = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(msisdn, token) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            MFS.listCards(msisdn, token, function (status, response) {
              return Utils.mfsResponseHandler(status, response, resolve, reject);
            });
          }));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
// Register Method
MasterPass.register = /*#__PURE__*/function () {
  var _ref3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", new Promise(function (resolve, reject) {
            var combined = _extends({}, Constants.DefaultMethodData.register, data);
            MFS.register(combined, function (status, response) {
              return Utils.mfsResponseHandler(status, response, resolve, reject);
            });
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}();
// Validate Transaction Method
MasterPass.validateTransaction = /*#__PURE__*/function () {
  var _ref4 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", new Promise(function (resolve, reject) {
            var combined = _extends({}, Constants.DefaultMethodData.validateTransaction, data);
            MFS.validateTransaction(combined, function (status, response) {
              return Utils.mfsResponseHandler(status, response, resolve, reject);
            });
          }));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x5) {
    return _ref4.apply(this, arguments);
  };
}();
// Delete Card Method
MasterPass.deleteCard = /*#__PURE__*/function () {
  var _ref5 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", new Promise(function (resolve, reject) {
            MFS.deleteCard(data, function (status, response) {
              return Utils.mfsResponseHandler(status, response, resolve, reject);
            });
          }));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x6) {
    return _ref5.apply(this, arguments);
  };
}();
// Resend Otp Method
MasterPass.resendOtp = /*#__PURE__*/function () {
  var _ref6 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(sendSMsLanguage) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", new Promise(function (resolve, reject) {
            var lastToken = MFS.getLastToken();
            MFS.resendOtp(lastToken, sendSMsLanguage, function (status, response) {
              return Utils.mfsResponseHandler(status, response, resolve, reject);
            });
          }));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x7) {
    return _ref6.apply(this, arguments);
  };
}();
// Link Card To Client Method
MasterPass.linkCardToClient = /*#__PURE__*/function () {
  var _ref7 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", new Promise(function (resolve, reject) {
            MFS.linkCardToClient(data, function (status, response) {
              return Utils.mfsResponseHandler(status, response, resolve, reject);
            });
          }));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x8) {
    return _ref7.apply(this, arguments);
  };
}();
// Purchase Method
MasterPass.purchase = /*#__PURE__*/function () {
  var _ref8 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(data) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", new Promise(function (resolve, reject) {
            var combined = _extends({}, Constants.DefaultMethodData.purchase, data);
            MFS.purchase(combined, function (status, response) {
              return Utils.mfsResponseHandler(status, response, resolve, reject);
            });
          }));
        case 1:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x9) {
    return _ref8.apply(this, arguments);
  };
}();
// Purchase And Register Method
MasterPass.purchaseAndRegister = /*#__PURE__*/function () {
  var _ref9 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(data) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.abrupt("return", new Promise(function (resolve, reject) {
            MFS.purchaseAndRegister(data, function (status, response) {
              return Utils.mfsResponseHandler(status, response, resolve, reject);
            });
          }));
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x10) {
    return _ref9.apply(this, arguments);
  };
}();
// Direct Purchase Method
MasterPass.directPurchase = /*#__PURE__*/function () {
  var _ref10 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(data) {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          return _context10.abrupt("return", new Promise(function (resolve, reject) {
            MFS.directPurchase(data, function (status, response) {
              return Utils.mfsResponseHandler(status, response, resolve, reject);
            });
          }));
        case 1:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x11) {
    return _ref10.apply(this, arguments);
  };
}();
// SetAdditionalParameters Method
MasterPass.setAdditionalParameters = MFS.setAdditionalParameters;

export { MasterPass as MasterPassSDK };
//# sourceMappingURL=masterpass-sdk.esm.js.map
