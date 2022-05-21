// @ts-ignore
const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app: { use: (arg0: any) => void }) {
    app.use(
        createProxyMiddleware("/movies", {target: "http://172.30.1.2:8000/"})
    );
};
