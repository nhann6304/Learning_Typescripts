// import testFn from "./src/test";
// import path from "path"
// import http from "http"
// import { readFileSync, writeFileSync } from "fs"
import express, { NextFunction, Request, Response } from "express";
import { people, products } from "./src/data/data";
import { IData } from "./src/interface/data.interface";
import { logger } from "./src/middleware/logger.middleware";
import { auth } from "./src/middleware/auth.middleware";
import morgan from "morgan";
import rtAuth from "./src/routes/common/auth.routes";
import rtTasks from "./src/routes/models/tasks.routes";
import rtProducts from "./src/routes/models/product.routes";
import rtJobs from "./src/routes/models/jobs.routes";
import { db } from "./src/config/mysql.config";
import { connectDb } from "./src/config/mongoose.config";
import cookieParser from "cookie-parser";
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
console.log(
    "-------------------------------------------------------------------------------"
);
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
    const start = async () => {
        try {
            await connectDb();
            server.listen(port, function () {
                console.log(`server has running port ${port}`);
            });
        } catch (error) {
            console.log(error);
        }
    };
    start()


    //morgan
    server.use(morgan("tiny"));
    // Check truyền body
    server.use(express.urlencoded({ extended: true }));
    // Dùng để parse dữ liệu JSON phía frond-end trả xuống
    server.use(express.json());
    // Cookie 
    server.use(cookieParser())

    //  Các Router
    server.use("/api/v1/auth", rtAuth);
    server.use("/api/v1/task", rtTasks);
    server.use("/api/v1/jobs", rtJobs);
    server.use("/api/v1/products", rtProducts)

    // server.get("/api/products", (req: Request, res: Response) => {
    //     db.query("SELECT * FROM users", (err, results) => {
    //         if (err) {
    //             console.error("Lỗi khi truy vấn MySQL:", err.message);
    //             return res.status(500).json({ success: false, error: err.message });
    //         }
    //         res.status(200).json({ success: true, metadata: results });
    //     });
    // });

    server.get("/api/v1", (req: Request, res: Response) => {
        res.status(200).send({
            metadata: "hello word",
        });
    });

}

console.log(
    "-------------------------------------------------------------------------------"
);
