// import testFn from "./src/test";
// import path from "path"
// import http from "http"
// import { readFileSync, writeFileSync } from "fs"
import express, { NextFunction, Request, Response } from "express"
import { people, products } from "./src/data/data";
import { IData } from "./src/interface/data.interface";
import { logger } from "./src/middleware/logger.middleware";
import { auth } from "./src/middleware/auth.middleware";
import morgan from "morgan";
import rtAuth from "./src/routes/auth.routes";
// {
//     //path
//     const first = readFileSync("./nodejs/src/test.txt", "utf-8")


//     console.log(testFn<string>(first));


//     writeFileSync("./nodejs/src/vietra.txt", "co gan len nha ");
// }

// {
//     //http
//     // request => yêu cầu từ client gửi xuống
//     // response => yêu cầu từ server gửi lên
//     // const server = http.createServer((request, response) => {
//     //     console.log("chạy sau thằng listen");
//     //     if (request.url === "/") {
//     //         response.end("Home page nè")
//     //     } else if (request.url === "/about") {
//     //         response.end("about page nè")
//     //     } else {
//     //         response.end(`<h1>404</h1>`)
//     //     }
//     // })
//     // server.listen(8001, () => {
//     //     console.log("server is running port 8001");
//     // })
// }
console.log("-------------------------------------------------------------------------------");
//express leaning

// Các phương thức server.get => 1
// Các phương thức server.post => 2
// Các phương thức server.put => 3
// Các phương thức server.delete => 4
// Các phương thức server.all => 5
// Các phương thức server.use => 6
// Các phương thức server.lister =>7


// 7 Lắng nghe trên cổng
const port = 5500;
const server = express();
{
    server.listen(port, function () {
        console.log(`server has running port ${port}`);
    })


    //morgan
    server.use(morgan("tiny"))
    // Check truyền body
    server.use(express.urlencoded({ extended: true }))
    // Dùng để parse dữ liệu JSON phía frond-end trả xuống
    server.use(express.json())

    //  Các Router 
    server.use("/api/v1/auth", rtAuth)



    server.get("/api/v1", (req: Request, res: Response) => {
        res.status(200).send({
            success: true,
            metadata: people
        })
    })

    //Param thì phải có dấu :sau trường đó
    server.get("/api/product/:id", (req: Request, res: Response) => {
        const { id: param } = req.params
        const result = products.find((product) => product.id === +param)

        if (!result) {
            res.send("<h1>Product not exist</h1>")
        }

        res.json(result);

    })
    //Param lồng 
    server.get("/api/product/:id/detail/:ids", (req: Request, res: Response) => {
        console.log(req.params);

        res.send("Param")
    })
    // query 
    server.get("/api/query", (req: Request, res: Response) => {
        console.log(req.query);
        let sortedProducts: IData[] = [...products]
        const { search, limit } = req.query;

        sortedProducts = sortedProducts.filter((item) => item.name.startsWith(search as string))
        sortedProducts = sortedProducts.slice(0, +limit)


        res.status(200).json(sortedProducts);
    })

    server.all("*", (req: Request, res: Response) => {
        res.send("<h1>Oops 404</h1>")
    })


}





console.log("-------------------------------------------------------------------------------");

