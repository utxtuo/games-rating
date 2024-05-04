const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            res.statusCode = 200;
            staticFile(res, "/index.html", ".html");
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            res.statusCode = 200;
            gameRouteController(res);
            staticFile(res, "/index.html", ".html");
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/vote":
            res.statusCode = 200;
            staticFile(res, "/index.html", ".html");
            mainRouteController(res, "/index.html", ".html");
            if (res.method !== "POST") {
                res.statusCode = 405;
                res.end("Запрещённый метод запроса");
            }
            else {
                //qwertyuioiuyrrtyuikjhgf
            }
        default:
            defaultRouteController(res, url);
            const extname = String(path.extname(url)).toLowerCase();
            if (extname in mimeTypes) {
                staticFile(res, url, extname);
            } else {
                res.statusCode = 404;
                res.end("Not Found");
            }
    }
});