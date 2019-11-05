"use strict";

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _reactRedux = require("react-redux");

var _createStore = _interopRequireDefault(require("../src/createStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Koa = require("koa");

const React = require("react");

const Koastatic = require("koa-static");

const Router = require("koa-router");

const path = require("path");

const App = require("../src/app/index.js").default;

const {
  renderToString
} = require("react-dom/server");

const app = new Koa();
global.__SERVER__ = true; //app.use(Koastatic(path.join(process.cwd(), "/static")));

app.use((ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  return next();
});
const index = new Router();
index.get('/', async ctx => {
  let store = (0, _createStore.default)();
  let AppContainer = React.createElement(React.Fragment, null, React.createElement(_reactRedux.Provider, {
    store: store
  }, React.createElement(React.Fragment, null, React.createElement(App, null)))); // 所有的请求已完成

  renderToString(AppContainer);
  let queue = store.getState().app.queue;
  console.log(queue);
  await new Promise(resolve => {
    let num = queue.length;
    queue.forEach(q => {
      let cb = () => {
        num--;
        console.log(num);

        if (num == 0) {
          resolve();
        }
      };

      q.then(cb, cb);
    });
  });
  let str = renderToString(AppContainer);
  let html = `
    <html>
    <head>
        <title>ssr</title>
    </head>
    <body>
        <div id="root">${str}</div>
        <div>99</div>
        <script src="/index.js"></script>
    </body>
    </html>
    `;
  ctx.body = html;
});
const home = new Router();
home.post('/getList', async ctx => {
  let data = await new Promise(resolve => {
    setTimeout(() => {
      resolve([{
        title: "home 1"
      }, {
        title: "home 2"
      }]);
    }, 500);
  });
  ctx.body = data;
});
home.post('/getChild', async ctx => {
  let data = await new Promise(resolve => {
    setTimeout(() => {
      resolve([{
        title: "child 1"
      }, {
        title: "child 2"
      }]);
    }, 1000);
  });
  ctx.body = data;
});
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());
app.use(index.routes()).use(index.allowedMethods());
app.listen(3001);