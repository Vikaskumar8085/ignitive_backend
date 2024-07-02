const http = require("http");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cluster = require("cluster");
const os = require("os").cpus();
const dotenv = require("dotenv");
const morgan = require("morgan");
const router = require("./Routers");
const path = require("path");
const bodyParser = require("body-parser");
require("./config/dbconfig");
dotenv.config();

const app = express();
const Port = process.env.PORT || 8000;
// middleware

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "*",
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// middleware

// api
app.use("/api", router);

// api

const server = http.createServer(app);
if (cluster.isMaster) {
  for (var i = 0; i < os.length; i++) {
    cluster.fork();
  }
  cluster.on("exit", () => {
    console.log("exit server");
  });
} else {
  server.listen(Port, () => {
    console.log("server started on Port", Port);
  });
}
