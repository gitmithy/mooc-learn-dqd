!function(c){var e={};function i(n){if(e[n])return e[n].exports;var Q=e[n]={i:n,l:!1,exports:{}};return c[n].call(Q.exports,Q,Q.exports,i),Q.l=!0,Q.exports}i.m=c,i.c=e,i.d=function(c,e,n){i.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:n})},i.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},i.t=function(c,e){if(1&e&&(c=i(c)),8&e)return c;if(4&e&&"object"==typeof c&&c&&c.__esModule)return c;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var Q in c)i.d(n,Q,function(e){return c[e]}.bind(null,Q));return n},i.n=function(c){var e=c&&c.__esModule?function(){return c.default}:function(){return c};return i.d(e,"a",e),e},i.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,e)},i.p="",i(i.s=1)}([function(module,exports){eval('module.exports = require("koa-router");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')},function(module,exports,__webpack_require__){eval('/* WEBPACK VAR INJECTION */(function(__dirname) {// require为node支持的引用写法\n// 配置好webpack后可以写成import koa from \'koa\'\n// 此后可以使用babel - node运行index.js\nconst koa = __webpack_require__(2);\n\nconst path = __webpack_require__(3);\n\nconst cors = __webpack_require__(4);\n\nconst helmet = __webpack_require__(5);\n\nconst router = __webpack_require__(6);\n\nconst statics = __webpack_require__(15);\n\nconst koaBody = __webpack_require__(16);\n\nconst jsonutil = __webpack_require__(17);\n\nconst compose = __webpack_require__(18);\n\nconst app = new koa();\nconst middleware = compose([koaBody(), statics(path.join(__dirname, "../public")), cors(), jsonutil({\n  pretty: false,\n  param: "pretty"\n}), helmet()]);\napp.use(middleware);\napp.use(router());\napp.listen(3001);\n/* WEBPACK VAR INJECTION */}.call(this, "src"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJrb2EiLCJyZXF1aXJlIiwicGF0aCIsImNvcnMiLCJoZWxtZXQiLCJyb3V0ZXIiLCJzdGF0aWNzIiwia29hQm9keSIsImpzb251dGlsIiwiY29tcG9zZSIsImFwcCIsIm1pZGRsZXdhcmUiLCJqb2luIiwiX19kaXJuYW1lIiwicHJldHR5IiwicGFyYW0iLCJ1c2UiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxDQUFELENBQW5COztBQUNBLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxDQUFELENBQXBCOztBQUVBLE1BQU1FLElBQUksR0FBR0YsbUJBQU8sQ0FBQyxDQUFELENBQXBCOztBQUNBLE1BQU1HLE1BQU0sR0FBR0gsbUJBQU8sQ0FBQyxDQUFELENBQXRCOztBQUNBLE1BQU1JLE1BQU0sR0FBR0osbUJBQU8sQ0FBQyxDQUFELENBQXRCOztBQUNBLE1BQU1LLE9BQU8sR0FBR0wsbUJBQU8sQ0FBQyxFQUFELENBQXZCOztBQUNBLE1BQU1NLE9BQU8sR0FBR04sbUJBQU8sQ0FBQyxFQUFELENBQXZCOztBQUNBLE1BQU1PLFFBQVEsR0FBR1AsbUJBQU8sQ0FBQyxFQUFELENBQXhCOztBQUNBLE1BQU1RLE9BQU8sR0FBR1IsbUJBQU8sQ0FBQyxFQUFELENBQXZCOztBQUNBLE1BQU1TLEdBQUcsR0FBRyxJQUFJVixHQUFKLEVBQVo7QUFDQSxNQUFNVyxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxDQUN6QkYsT0FBTyxFQURrQixFQUV6QkQsT0FBTyxDQUFDSixJQUFJLENBQUNVLElBQUwsQ0FBVUMsU0FBVixFQUFxQixXQUFyQixDQUFELENBRmtCLEVBR3pCVixJQUFJLEVBSHFCLEVBSXpCSyxRQUFRLENBQUM7QUFDUE0sUUFBTSxFQUFFLEtBREQ7QUFFUEMsT0FBSyxFQUFFO0FBRkEsQ0FBRCxDQUppQixFQVF6QlgsTUFBTSxFQVJtQixDQUFELENBQTFCO0FBVUFNLEdBQUcsQ0FBQ00sR0FBSixDQUFRTCxVQUFSO0FBQ0FELEdBQUcsQ0FBQ00sR0FBSixDQUFRWCxNQUFNLEVBQWQ7QUFDQUssR0FBRyxDQUFDTyxNQUFKLENBQVcsSUFBWCxFIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZXF1aXJl5Li6bm9kZeaUr+aMgeeahOW8leeUqOWGmeazlVxuLy8g6YWN572u5aW9d2VicGFja+WQjuWPr+S7peWGmeaIkGltcG9ydCBrb2EgZnJvbSAna29hJ1xuLy8g5q2k5ZCO5Y+v5Lul5L2/55SoYmFiZWwgLSBub2Rl6L+Q6KGMaW5kZXguanNcbmNvbnN0IGtvYSA9IHJlcXVpcmUoXCJrb2FcIik7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5cbmNvbnN0IGNvcnMgPSByZXF1aXJlKFwia29hMi1jb3JzXCIpO1xuY29uc3QgaGVsbWV0ID0gcmVxdWlyZShcImtvYS1oZWxtZXRcIik7XG5jb25zdCByb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXMvcm91dGVzXCIpO1xuY29uc3Qgc3RhdGljcyA9IHJlcXVpcmUoXCJrb2Etc3RhdGljXCIpO1xuY29uc3Qga29hQm9keSA9IHJlcXVpcmUoXCJrb2EtYm9keVwiKTtcbmNvbnN0IGpzb251dGlsID0gcmVxdWlyZShcImtvYS1qc29uXCIpO1xuY29uc3QgY29tcG9zZSA9IHJlcXVpcmUoXCJrb2EtY29tcG9zZVwiKTtcbmNvbnN0IGFwcCA9IG5ldyBrb2EoKTtcbmNvbnN0IG1pZGRsZXdhcmUgPSBjb21wb3NlKFtcbiAga29hQm9keSgpLFxuICBzdGF0aWNzKHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vcHVibGljXCIpKSxcbiAgY29ycygpLFxuICBqc29udXRpbCh7XG4gICAgcHJldHR5OiBmYWxzZSxcbiAgICBwYXJhbTogXCJwcmV0dHlcIlxuICB9KSxcbiAgaGVsbWV0KCksXG5dKTtcbmFwcC51c2UobWlkZGxld2FyZSk7XG5hcHAudXNlKHJvdXRlcigpKTtcbmFwcC5saXN0ZW4oMzAwMSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n')},function(module,exports){eval('module.exports = require("koa");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2FcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n')},function(module,exports){eval('module.exports = require("path");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n')},function(module,exports){eval('module.exports = require("koa2-cors");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EyLWNvcnNcIj9hOWJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EyLWNvcnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n')},function(module,exports){eval('module.exports = require("koa-helmet");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n')},function(module,exports,__webpack_require__){eval("const combineRoutes = __webpack_require__(7);\n\nconst aroutes = __webpack_require__(8);\n\nconst broutes = __webpack_require__(10);\n\nconst GetCaptcha = __webpack_require__(12);\n\nmodule.exports = combineRoutes(aroutes, broutes, GetCaptcha);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlcy5qcz82NDFiIl0sIm5hbWVzIjpbImNvbWJpbmVSb3V0ZXMiLCJyZXF1aXJlIiwiYXJvdXRlcyIsImJyb3V0ZXMiLCJHZXRDYXB0Y2hhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsYUFBYSxHQUFHQyxtQkFBTyxDQUFDLENBQUQsQ0FBN0I7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLENBQUQsQ0FBdkI7O0FBQ0EsTUFBTUUsT0FBTyxHQUFHRixtQkFBTyxDQUFDLEVBQUQsQ0FBdkI7O0FBQ0EsTUFBTUcsVUFBVSxHQUFHSCxtQkFBTyxDQUFDLEVBQUQsQ0FBMUI7O0FBQ0FJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sYUFBYSxDQUMxQkUsT0FEMEIsRUFFMUJDLE9BRjBCLEVBRzFCQyxVQUgwQixDQUE5QiIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29tYmluZVJvdXRlcyA9IHJlcXVpcmUoJ2tvYS1jb21iaW5lLXJvdXRlcnMnKVxuY29uc3QgYXJvdXRlcyA9IHJlcXVpcmUoJy4vYVJvdXRlcicpXG5jb25zdCBicm91dGVzID0gcmVxdWlyZSgnLi9iUm91dGVyJylcbmNvbnN0IEdldENhcHRjaGEgPSByZXF1aXJlKCcuL0NhcHRjaGFSb3V0ZXInKVxubW9kdWxlLmV4cG9ydHMgPSBjb21iaW5lUm91dGVzKFxuICAgIGFyb3V0ZXMsXG4gICAgYnJvdXRlcyxcbiAgICBHZXRDYXB0Y2hhXG4pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n")},function(module,exports){eval('module.exports = require("koa-combine-routers");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n')},function(module,exports,__webpack_require__){eval("const Router = __webpack_require__(0);\n\nconst a = __webpack_require__(9);\n\nconst router = new Router();\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2FSb3V0ZXIuanM/OTJiYyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiYSIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBQ0MsbUJBQU8sQ0FBQyxDQUFELENBQXBCOztBQUNBLE1BQU1DLENBQUMsR0FBQ0QsbUJBQU8sQ0FBQyxDQUFELENBQWY7O0FBQ0EsTUFBTUUsTUFBTSxHQUFDLElBQUlILE1BQUosRUFBYjtBQUNBRyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxJQUFYLEVBQWdCRixDQUFoQjtBQUNBRyxNQUFNLENBQUNDLE9BQVAsR0FBZUgsTUFBZiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyPXJlcXVpcmUoJ2tvYS1yb3V0ZXInKVxuY29uc3QgYT1yZXF1aXJlKCcuLi9hcGkvYScpXG5jb25zdCByb3V0ZXI9bmV3IFJvdXRlcigpXG5yb3V0ZXIuZ2V0KCcvYScsYSlcbm1vZHVsZS5leHBvcnRzPXJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n")},function(module,exports){eval('// function a(ctx) {\n//     ctx.body = {\n//         "message": "hello from abc"\n//     }\n// }\n// module.exports = {\n//     a\n// }\n// 简化版\nmodule.exports = function (ctx) {\n  ctx.body = {\n    "message": "hello from a"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2EuanM/YzE5OCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxHQUFWLEVBQWU7QUFDNUJBLEtBQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1AsZUFBVztBQURKLEdBQVg7QUFHSCxDQUpEIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiBhKGN0eCkge1xuLy8gICAgIGN0eC5ib2R5ID0ge1xuLy8gICAgICAgICBcIm1lc3NhZ2VcIjogXCJoZWxsbyBmcm9tIGFiY1wiXG4vLyAgICAgfVxuLy8gfVxuLy8gbW9kdWxlLmV4cG9ydHMgPSB7XG4vLyAgICAgYVxuLy8gfVxuXG5cblxuXG5cbi8vIOeugOWMlueJiFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgY3R4LmJvZHkgPSB7XG4gICAgICAgIFwibWVzc2FnZVwiOiBcImhlbGxvIGZyb20gYVwiXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n')},function(module,exports,__webpack_require__){eval("const Router = __webpack_require__(0);\n\nconst b = __webpack_require__(11);\n\nconst router = new Router();\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2JSb3V0ZXIuanM/MmZlNyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiYiIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBQ0MsbUJBQU8sQ0FBQyxDQUFELENBQXBCOztBQUNBLE1BQU1DLENBQUMsR0FBQ0QsbUJBQU8sQ0FBQyxFQUFELENBQWY7O0FBQ0EsTUFBTUUsTUFBTSxHQUFDLElBQUlILE1BQUosRUFBYjtBQUNBRyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxJQUFYLEVBQWdCRixDQUFoQjtBQUNBRyxNQUFNLENBQUNDLE9BQVAsR0FBZUgsTUFBZiIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlcj1yZXF1aXJlKCdrb2Etcm91dGVyJylcbmNvbnN0IGI9cmVxdWlyZSgnLi4vYXBpL2InKVxuY29uc3Qgcm91dGVyPW5ldyBSb3V0ZXIoKVxucm91dGVyLmdldCgnL2InLGIpXG5tb2R1bGUuZXhwb3J0cz1yb3V0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n")},function(module,exports){eval('module.exports = function (ctx) {\n  ctx.body = {\n    "message": "hello from b"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2IuanM/ZGVmZCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFlLFVBQVNDLEdBQVQsRUFBYTtBQUN4QkEsS0FBRyxDQUFDQyxJQUFKLEdBQVM7QUFDTCxlQUFVO0FBREwsR0FBVDtBQUdILENBSkQiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihjdHgpe1xuICAgIGN0eC5ib2R5PXtcbiAgICAgICAgXCJtZXNzYWdlXCI6XCJoZWxsbyBmcm9tIGJcIlxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n')},function(module,exports,__webpack_require__){eval("const Router = __webpack_require__(0);\n\nconst GetCaptcha = __webpack_require__(13);\n\nconst router = new Router();\nrouter.get('/GetCaptcha', GetCaptcha.demo);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0NhcHRjaGFSb3V0ZXIuanM/Y2VhMSJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiR2V0Q2FwdGNoYSIsInJvdXRlciIsImdldCIsImRlbW8iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsQ0FBRCxDQUF0Qjs7QUFDQSxNQUFNQyxVQUFVLEdBQUdELG1CQUFPLENBQUMsRUFBRCxDQUExQjs7QUFDQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUgsTUFBSixFQUFmO0FBQ0FHLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLGFBQVgsRUFBMEJGLFVBQVUsQ0FBQ0csSUFBckM7QUFDQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQiIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2tvYS1yb3V0ZXInKVxuY29uc3QgR2V0Q2FwdGNoYSA9IHJlcXVpcmUoJy4uL2FwaS9HZXRDYXB0Y2hhJylcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxucm91dGVyLmdldCgnL0dldENhcHRjaGEnLCBHZXRDYXB0Y2hhLmRlbW8pXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n")},function(module,exports,__webpack_require__){eval("const svgCaptcha = __webpack_require__(14);\n\nclass GetCaptcha {\n  constructor() {}\n\n  async demo(ctx) {\n    const newCaptca = svgCaptcha.create({\n      size: 5,\n      ignoreChars: '0o1il',\n      color: true,\n      noise: Math.floor(Math.random() * 5),\n      width: 150 // height: 50\n\n    });\n    console.log(newCaptca);\n    ctx.body = {\n      code: 200,\n      msg: newCaptca.data\n    };\n  }\n\n}\n\nmodule.exports = new GetCaptcha();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL0dldENhcHRjaGEuanM/MWVhMyJdLCJuYW1lcyI6WyJzdmdDYXB0Y2hhIiwicmVxdWlyZSIsIkdldENhcHRjaGEiLCJjb25zdHJ1Y3RvciIsImRlbW8iLCJjdHgiLCJuZXdDYXB0Y2EiLCJjcmVhdGUiLCJzaXplIiwiaWdub3JlQ2hhcnMiLCJjb2xvciIsIm5vaXNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwid2lkdGgiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImNvZGUiLCJtc2ciLCJkYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLEVBQUQsQ0FBMUI7O0FBQ0EsTUFBTUMsVUFBTixDQUFpQjtBQUNiQyxhQUFXLEdBQUcsQ0FBRTs7QUFDaEIsUUFBTUMsSUFBTixDQUFXQyxHQUFYLEVBQWdCO0FBQ1osVUFBTUMsU0FBUyxHQUFHTixVQUFVLENBQUNPLE1BQVgsQ0FBa0I7QUFDaENDLFVBQUksRUFBRSxDQUQwQjtBQUVoQ0MsaUJBQVcsRUFBRSxPQUZtQjtBQUdoQ0MsV0FBSyxFQUFFLElBSHlCO0FBSWhDQyxXQUFLLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FKeUI7QUFLaENDLFdBQUssRUFBRSxHQUx5QixDQU1oQzs7QUFOZ0MsS0FBbEIsQ0FBbEI7QUFRQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlYLFNBQVo7QUFDQUQsT0FBRyxDQUFDYSxJQUFKLEdBQVc7QUFDUEMsVUFBSSxFQUFFLEdBREM7QUFFUEMsU0FBRyxFQUFFZCxTQUFTLENBQUNlO0FBRlIsS0FBWDtBQUlIOztBQWhCWTs7QUFrQmpCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsSUFBSXJCLFVBQUosRUFBakIiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdmdDYXB0Y2hhID0gcmVxdWlyZSgnc3ZnLWNhcHRjaGEnKVxuY2xhc3MgR2V0Q2FwdGNoYSB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIGFzeW5jIGRlbW8oY3R4KSB7XG4gICAgICAgIGNvbnN0IG5ld0NhcHRjYSA9IHN2Z0NhcHRjaGEuY3JlYXRlKHtcbiAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICBpZ25vcmVDaGFyczogJzBvMWlsJyxcbiAgICAgICAgICAgIGNvbG9yOiB0cnVlLFxuICAgICAgICAgICAgbm9pc2U6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpLFxuICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgIC8vIGhlaWdodDogNTBcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cobmV3Q2FwdGNhKVxuICAgICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgIG1zZzogbmV3Q2FwdGNhLmRhdGEsXG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBHZXRDYXB0Y2hhKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n")},function(module,exports){eval('module.exports = require("svg-captcha");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdmctY2FwdGNoYVwiP2NjNjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdmctY2FwdGNoYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n')},function(module,exports){eval('module.exports = require("koa-static");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1zdGF0aWNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n')},function(module,exports){eval('module.exports = require("koa-body");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtYm9keVwiPzNmNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYm9keVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n')},function(module,exports){eval('module.exports = require("koa-json");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtanNvblwiPzY1MjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtanNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n')},function(module,exports){eval('module.exports = require("koa-compose");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tcG9zZVwiPzczMTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtY29tcG9zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n')}]);