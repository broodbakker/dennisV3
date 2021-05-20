var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// functions/fetcher.ts
__markAsModule(exports);
__export(exports, {
  MakeCompleteURL: () => MakeCompleteURL,
  reduceArgs: () => reduceArgs
});
var addTwoStrings = (accumulator, currentValue) => `${accumulator}/${currentValue}`;
var reduceArgs = (params) => params.reduce(addTwoStrings);
var MakeCompleteURL = (url) => {
  if (url.length === 1)
    return url[0];
  return reduceArgs(url);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MakeCompleteURL,
  reduceArgs
});
//# sourceMappingURL=fetcher.js.map
