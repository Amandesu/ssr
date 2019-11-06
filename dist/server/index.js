"use strict";

const Koa = require("koa");

const React = require("react");

const Koastatic = require("koa-static");

const Router = require("koa-router");

const path = require("path");

const App = require("./app.js").default;

const store = require("./app.js").store;

const {
  renderToString
} = require("react-dom/server");

const app = new Koa();
global.__SERVER__ = true;
app.use(Koastatic(path.join(process.cwd(), "/server/static")));
app.use((ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  return next();
});
const index = new Router();
index.get('/', async ctx => {
  // 所有的请求已完成
  renderToString(React.createElement(App, null));
  await new Promise(resolve => {
    let queue = store.getState().app.queue;
    let num = queue.length;

    if (num == 0) {
      return resolve();
    }

    queue.forEach(q => {
      let cb = () => {
        num--;

        if (num == 0) {
          resolve();
        }
      };

      q.then(cb, cb);
    });
  });
  let str = renderToString(React.createElement(App, null));
  let html = `
    <html>
    <head>
        <title>ssr</title>
    </head>
    <body>
        <textarea id="_erver_inject_store" style="display:none">${JSON.stringify(store.getState())}</textarea>
        <div id="root">${str}</div>
        <script src="/index.js"></script>
    </body>
    </html>
    `;
  ctx.body = html;
});
index.get('/city', async ctx => {
  // 所有的请求已完成
  renderToString(React.createElement(App, {
    location: "/city"
  }));
  await new Promise(resolve => {
    let queue = store.getState().app.queue;
    let num = queue.length;

    if (num == 0) {
      return resolve();
    }

    ;
    queue.forEach(q => {
      let cb = () => {
        num--;

        if (num == 0) {
          resolve();
        }
      };

      q.then(cb, cb);
    });
  });
  let str = renderToString(React.createElement(App, {
    location: "/city"
  }));
  let html = `
    <html>
    <head>
        <title>ssr</title>
    </head>
    <body>
        <textarea id="_erver_inject_store" style="display:none">${JSON.stringify(store.getState())}</textarea>
        <div id="root">${str}</div>
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