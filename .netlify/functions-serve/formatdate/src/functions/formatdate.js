var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// functions/formatdate.ts
__markAsModule(exports);
__export(exports, {
  formatDate: () => formatDate
});
var formatDate = (num) => num.split("T");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  formatDate
});
//# sourceMappingURL=formatdate.js.map
