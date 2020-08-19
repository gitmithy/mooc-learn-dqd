/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/GetCaptcha.js":
/*!*******************************!*\
  !*** ./src/api/GetCaptcha.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const svgCaptcha = __webpack_require__(/*! svg-captcha */ \"svg-captcha\");\n\nclass GetCaptcha {\n  constructor() {}\n\n  async demo(ctx) {\n    const newCaptca = svgCaptcha.create({\n      size: 5,\n      ignoreChars: '0o1il',\n      color: true,\n      noise: Math.floor(Math.random() * 5),\n      width: 150 // height: 50\n\n    });\n    console.log(newCaptca);\n    ctx.body = {\n      code: 200,\n      msg: newCaptca.data\n    };\n  }\n\n}\n\nmodule.exports = new GetCaptcha();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL0dldENhcHRjaGEuanM/MWVhMyJdLCJuYW1lcyI6WyJzdmdDYXB0Y2hhIiwicmVxdWlyZSIsIkdldENhcHRjaGEiLCJjb25zdHJ1Y3RvciIsImRlbW8iLCJjdHgiLCJuZXdDYXB0Y2EiLCJjcmVhdGUiLCJzaXplIiwiaWdub3JlQ2hhcnMiLCJjb2xvciIsIm5vaXNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwid2lkdGgiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImNvZGUiLCJtc2ciLCJkYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQTFCOztBQUNBLE1BQU1DLFVBQU4sQ0FBaUI7QUFDYkMsYUFBVyxHQUFHLENBQUU7O0FBQ2hCLFFBQU1DLElBQU4sQ0FBV0MsR0FBWCxFQUFnQjtBQUNaLFVBQU1DLFNBQVMsR0FBR04sVUFBVSxDQUFDTyxNQUFYLENBQWtCO0FBQ2hDQyxVQUFJLEVBQUUsQ0FEMEI7QUFFaENDLGlCQUFXLEVBQUUsT0FGbUI7QUFHaENDLFdBQUssRUFBRSxJQUh5QjtBQUloQ0MsV0FBSyxFQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBSnlCO0FBS2hDQyxXQUFLLEVBQUUsR0FMeUIsQ0FNaEM7O0FBTmdDLEtBQWxCLENBQWxCO0FBUUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxTQUFaO0FBQ0FELE9BQUcsQ0FBQ2EsSUFBSixHQUFXO0FBQ1BDLFVBQUksRUFBRSxHQURDO0FBRVBDLFNBQUcsRUFBRWQsU0FBUyxDQUFDZTtBQUZSLEtBQVg7QUFJSDs7QUFoQlk7O0FBa0JqQkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlyQixVQUFKLEVBQWpCIiwiZmlsZSI6Ii4vc3JjL2FwaS9HZXRDYXB0Y2hhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3ZnQ2FwdGNoYSA9IHJlcXVpcmUoJ3N2Zy1jYXB0Y2hhJylcbmNsYXNzIEdldENhcHRjaGEge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICBhc3luYyBkZW1vKGN0eCkge1xuICAgICAgICBjb25zdCBuZXdDYXB0Y2EgPSBzdmdDYXB0Y2hhLmNyZWF0ZSh7XG4gICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgaWdub3JlQ2hhcnM6ICcwbzFpbCcsXG4gICAgICAgICAgICBjb2xvcjogdHJ1ZSxcbiAgICAgICAgICAgIG5vaXNlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSxcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDUwXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0NhcHRjYSlcbiAgICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgICBtc2c6IG5ld0NhcHRjYS5kYXRhLFxuICAgICAgICB9XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBuZXcgR2V0Q2FwdGNoYSgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/GetCaptcha.js\n");

/***/ }),

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function a(ctx){\n//     ctx.body={\n//         \"message\":\"hello from a\"\n//     }\n// }\n// module.exports={\n//     a\n// }\n// 简化版\nmodule.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from a\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2EuanM/YzE5OCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFlLFVBQVNDLEdBQVQsRUFBYTtBQUN4QkEsS0FBRyxDQUFDQyxJQUFKLEdBQVM7QUFDTCxlQUFVO0FBREwsR0FBVDtBQUdILENBSkQiLCJmaWxlIjoiLi9zcmMvYXBpL2EuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiBhKGN0eCl7XG4vLyAgICAgY3R4LmJvZHk9e1xuLy8gICAgICAgICBcIm1lc3NhZ2VcIjpcImhlbGxvIGZyb20gYVwiXG4vLyAgICAgfVxuLy8gfVxuLy8gbW9kdWxlLmV4cG9ydHM9e1xuLy8gICAgIGFcbi8vIH1cblxuXG5cblxuXG4vLyDnroDljJbniYhcbm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGN0eCl7XG4gICAgY3R4LmJvZHk9e1xuICAgICAgICBcIm1lc3NhZ2VcIjpcImhlbGxvIGZyb20gYVwiXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from b\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2IuanM/ZGVmZCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFlLFVBQVNDLEdBQVQsRUFBYTtBQUN4QkEsS0FBRyxDQUFDQyxJQUFKLEdBQVM7QUFDTCxlQUFVO0FBREwsR0FBVDtBQUdILENBSkQiLCJmaWxlIjoiLi9zcmMvYXBpL2IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihjdHgpe1xuICAgIGN0eC5ib2R5PXtcbiAgICAgICAgXCJtZXNzYWdlXCI6XCJoZWxsbyBmcm9tIGJcIlxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {// require为node支持的引用写法\n// 配置好webpack后可以写成import koa from 'koa'\n// 此后可以使用babel - node运行index.js\nconst koa = __webpack_require__(/*! koa */ \"koa\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst app = new koa();\n\nconst cors = __webpack_require__(/*! koa2-cors */ \"koa2-cors\");\n\nconst helmet = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n\nconst router = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n\nconst statics = __webpack_require__(/*! koa-static */ \"koa-static\");\n\napp.use(cors());\napp.use(statics(path.join(__dirname, '../public')));\napp.use(helmet());\napp.use(router());\napp.listen(3001);\n/* WEBPACK VAR INJECTION */}.call(this, \"src\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJrb2EiLCJyZXF1aXJlIiwicGF0aCIsImFwcCIsImNvcnMiLCJoZWxtZXQiLCJyb3V0ZXIiLCJzdGF0aWNzIiwidXNlIiwiam9pbiIsIl9fZGlybmFtZSIsImxpc3RlbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdCQUFELENBQW5COztBQUNBLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxNQUFNRSxHQUFHLEdBQUcsSUFBSUgsR0FBSixFQUFaOztBQUNBLE1BQU1JLElBQUksR0FBR0gsbUJBQU8sQ0FBQyw0QkFBRCxDQUFwQjs7QUFDQSxNQUFNSSxNQUFNLEdBQUdKLG1CQUFPLENBQUMsOEJBQUQsQ0FBdEI7O0FBQ0EsTUFBTUssTUFBTSxHQUFHTCxtQkFBTyxDQUFDLCtDQUFELENBQXRCOztBQUNBLE1BQU1NLE9BQU8sR0FBR04sbUJBQU8sQ0FBQyw4QkFBRCxDQUF2Qjs7QUFDQUUsR0FBRyxDQUFDSyxHQUFKLENBQVFKLElBQUksRUFBWjtBQUNBRCxHQUFHLENBQUNLLEdBQUosQ0FBUUQsT0FBTyxDQUFDTCxJQUFJLENBQUNPLElBQUwsQ0FBVUMsU0FBVixFQUFxQixXQUFyQixDQUFELENBQWY7QUFDQVAsR0FBRyxDQUFDSyxHQUFKLENBQVFILE1BQU0sRUFBZDtBQUNBRixHQUFHLENBQUNLLEdBQUosQ0FBUUYsTUFBTSxFQUFkO0FBQ0FILEdBQUcsQ0FBQ1EsTUFBSixDQUFXLElBQVgsRSIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlcXVpcmXkuLpub2Rl5pSv5oyB55qE5byV55So5YaZ5rOVXG4vLyDphY3nva7lpb13ZWJwYWNr5ZCO5Y+v5Lul5YaZ5oiQaW1wb3J0IGtvYSBmcm9tICdrb2EnXG4vLyDmraTlkI7lj6/ku6Xkvb/nlKhiYWJlbCAtIG5vZGXov5DooYxpbmRleC5qc1xuY29uc3Qga29hID0gcmVxdWlyZShcImtvYVwiKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IGFwcCA9IG5ldyBrb2EoKTtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKFwia29hMi1jb3JzXCIpO1xuY29uc3QgaGVsbWV0ID0gcmVxdWlyZShcImtvYS1oZWxtZXRcIik7XG5jb25zdCByb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXMvcm91dGVzXCIpO1xuY29uc3Qgc3RhdGljcyA9IHJlcXVpcmUoXCJrb2Etc3RhdGljXCIpO1xuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKHN0YXRpY3MocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYycpKSlcbmFwcC51c2UoaGVsbWV0KCkpO1xuYXBwLnVzZShyb3V0ZXIoKSk7XG5hcHAubGlzdGVuKDMwMDEpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/CaptchaRouter.js":
/*!*************************************!*\
  !*** ./src/routes/CaptchaRouter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst GetCaptcha = __webpack_require__(/*! ../api/GetCaptcha */ \"./src/api/GetCaptcha.js\");\n\nconst router = new Router();\nrouter.get('/GetCaptcha', GetCaptcha.demo);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0NhcHRjaGFSb3V0ZXIuanM/Y2VhMSJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiR2V0Q2FwdGNoYSIsInJvdXRlciIsImdldCIsImRlbW8iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsOEJBQUQsQ0FBdEI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHRCxtQkFBTyxDQUFDLGtEQUFELENBQTFCOztBQUNBLE1BQU1FLE1BQU0sR0FBRyxJQUFJSCxNQUFKLEVBQWY7QUFDQUcsTUFBTSxDQUFDQyxHQUFQLENBQVcsYUFBWCxFQUEwQkYsVUFBVSxDQUFDRyxJQUFyQztBQUNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLE1BQWpCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9DYXB0Y2hhUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpXG5jb25zdCBHZXRDYXB0Y2hhID0gcmVxdWlyZSgnLi4vYXBpL0dldENhcHRjaGEnKVxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpXG5yb3V0ZXIuZ2V0KCcvR2V0Q2FwdGNoYScsIEdldENhcHRjaGEuZGVtbylcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/CaptchaRouter.js\n");

/***/ }),

/***/ "./src/routes/aRouter.js":
/*!*******************************!*\
  !*** ./src/routes/aRouter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nconst router = new Router();\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2FSb3V0ZXIuanM/OTJiYyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiYSIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBQ0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUFwQjs7QUFDQSxNQUFNQyxDQUFDLEdBQUNELG1CQUFPLENBQUMsZ0NBQUQsQ0FBZjs7QUFDQSxNQUFNRSxNQUFNLEdBQUMsSUFBSUgsTUFBSixFQUFiO0FBQ0FHLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLElBQVgsRUFBZ0JGLENBQWhCO0FBQ0FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFlSCxNQUFmIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9hUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyPXJlcXVpcmUoJ2tvYS1yb3V0ZXInKVxuY29uc3QgYT1yZXF1aXJlKCcuLi9hcGkvYScpXG5jb25zdCByb3V0ZXI9bmV3IFJvdXRlcigpXG5yb3V0ZXIuZ2V0KCcvYScsYSlcbm1vZHVsZS5leHBvcnRzPXJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/aRouter.js\n");

/***/ }),

/***/ "./src/routes/bRouter.js":
/*!*******************************!*\
  !*** ./src/routes/bRouter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\n\nconst router = new Router();\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2JSb3V0ZXIuanM/MmZlNyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiYiIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBQ0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUFwQjs7QUFDQSxNQUFNQyxDQUFDLEdBQUNELG1CQUFPLENBQUMsZ0NBQUQsQ0FBZjs7QUFDQSxNQUFNRSxNQUFNLEdBQUMsSUFBSUgsTUFBSixFQUFiO0FBQ0FHLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLElBQVgsRUFBZ0JGLENBQWhCO0FBQ0FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFlSCxNQUFmIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9iUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyPXJlcXVpcmUoJ2tvYS1yb3V0ZXInKVxuY29uc3QgYj1yZXF1aXJlKCcuLi9hcGkvYicpXG5jb25zdCByb3V0ZXI9bmV3IFJvdXRlcigpXG5yb3V0ZXIuZ2V0KCcvYicsYilcbm1vZHVsZS5leHBvcnRzPXJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/bRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const combineRoutes = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n\nconst aroutes = __webpack_require__(/*! ./aRouter */ \"./src/routes/aRouter.js\");\n\nconst broutes = __webpack_require__(/*! ./bRouter */ \"./src/routes/bRouter.js\");\n\nconst GetCaptcha = __webpack_require__(/*! ./CaptchaRouter */ \"./src/routes/CaptchaRouter.js\");\n\nmodule.exports = combineRoutes(aroutes, broutes, GetCaptcha);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlcy5qcz82NDFiIl0sIm5hbWVzIjpbImNvbWJpbmVSb3V0ZXMiLCJyZXF1aXJlIiwiYXJvdXRlcyIsImJyb3V0ZXMiLCJHZXRDYXB0Y2hhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsYUFBYSxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQTdCOztBQUNBLE1BQU1DLE9BQU8sR0FBR0QsbUJBQU8sQ0FBQywwQ0FBRCxDQUF2Qjs7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLG1CQUFPLENBQUMsMENBQUQsQ0FBdkI7O0FBQ0EsTUFBTUcsVUFBVSxHQUFHSCxtQkFBTyxDQUFDLHNEQUFELENBQTFCOztBQUNBSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLGFBQWEsQ0FDMUJFLE9BRDBCLEVBRTFCQyxPQUYwQixFQUcxQkMsVUFIMEIsQ0FBOUIiLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbWJpbmVSb3V0ZXMgPSByZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJylcbmNvbnN0IGFyb3V0ZXMgPSByZXF1aXJlKCcuL2FSb3V0ZXInKVxuY29uc3QgYnJvdXRlcyA9IHJlcXVpcmUoJy4vYlJvdXRlcicpXG5jb25zdCBHZXRDYXB0Y2hhID0gcmVxdWlyZSgnLi9DYXB0Y2hhUm91dGVyJylcbm1vZHVsZS5leHBvcnRzID0gY29tYmluZVJvdXRlcyhcbiAgICBhcm91dGVzLFxuICAgIGJyb3V0ZXMsXG4gICAgR2V0Q2FwdGNoYVxuKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "koa2-cors":
/*!****************************!*\
  !*** external "koa2-cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa2-cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EyLWNvcnNcIj9hOWJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYTItY29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYTItY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa2-cors\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "svg-captcha":
/*!******************************!*\
  !*** external "svg-captcha" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"svg-captcha\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdmctY2FwdGNoYVwiP2NjNjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3ZnLWNhcHRjaGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdmctY2FwdGNoYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///svg-captcha\n");

/***/ })

/******/ });