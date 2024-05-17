import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//TODO: Set up config
configViewEngine(app);
//TODO: Init web route
initWebRoutes(app);

const port = process.env.PORT || 3001
//TODO: Port === undifine => port === 3001
app.listen(port, () => {
    console.log("Server in runing on the port : " + port)
})