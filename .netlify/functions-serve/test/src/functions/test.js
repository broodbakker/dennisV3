var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// functions/test.ts
__markAsModule(exports);
__export(exports, {
  handler: () => handler
});
var handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({message: "HEllow world"})
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=test.js.map
