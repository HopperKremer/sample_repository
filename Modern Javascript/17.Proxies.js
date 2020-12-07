let obj = {
  reason: "some reason",
  code: "12345",
};
console.log("reason: " + obj.reason);
console.log("code: " + obj.code);
console.log("key: " + obj.someKey);

let handler = {
  get: function (target, name) {
    return name in target ? target[name] : "no key";
  },
};
//proxies (hide undefined)
//new Proxy(obj, handler) //handler is another obj which handles current obj
let proxy = new Proxy(obj, handler);
console.log("reason: " + proxy.reason);
console.log("key: " + proxy.someKey);
