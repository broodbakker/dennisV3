var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __objSpread = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// functions/importPosts.ts
__markAsModule(exports);
__export(exports, {
  importPost: () => importPost,
  importPost1: () => importPost1,
  importPostSlugs: () => importPostSlugs,
  importPosts: () => importPosts
});
var importPosts = async () => {
  const markdownFiles = require.context("../content/posts", false, /\.md$/).keys().map((relativePath) => relativePath.substring(2));
  return Promise.all(markdownFiles.map(async (path) => {
    const markdown = await Promise.resolve().then(() => __toModule(require(`../content/posts/${path}`)));
    return __objSpread(__objSpread({}, markdown), {slug: path.substring(0, path.length - 3)});
  }));
};
var importPostSlugs = async () => {
  const markdownFiles = require.context("../content/posts", false, /\.md$/).keys().map((relativePath) => relativePath.substring(2, relativePath.length - 3));
  return Promise.all(markdownFiles);
};
var importPost = async (path) => {
  const markdown = await Promise.resolve().then(() => __toModule(require(`../content/posts/${path}`)));
  return markdown;
};
var importPost1 = async () => {
  const PostPathAndDate = await getPostPathAndDate();
  const sorted = sortingPost(PostPathAndDate);
  return Promise.all(sorted.map(async (path) => {
    const markdown = await Promise.resolve().then(() => __toModule(require(`../content/posts/${path.path}`)));
    return __objSpread(__objSpread({}, markdown), {slug: path.path.substring(0, path.path.length - 3)});
  }));
};
var sortingPost = (PostPathAndDate) => {
  return PostPathAndDate.sort((a, b) => a.date < b.date ? 1 : -1);
};
var getPostPathAndDate = () => {
  const markdownFiles = require.context("../content/posts", false, /\.md$/).keys().map((relativePath) => relativePath.substring(2));
  return Promise.all(markdownFiles.map(async (path) => {
    const markdown = await Promise.resolve().then(() => __toModule(require(`../content/posts/${path}`)));
    const date = await markdown.attributes.date;
    return {date, path};
  }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  importPost,
  importPost1,
  importPostSlugs,
  importPosts
});
//# sourceMappingURL=importPosts.js.map
