// @ts-ignore
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: { use: (arg0: any) => void }) {
  app.use(
    createProxyMiddleware("/movies", { target: "rtmp://172.30.1.53:1935/" })
  );
};
