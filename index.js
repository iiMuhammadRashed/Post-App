import express from "express";
import { connection } from "./database/dbConnection.js";

import userRoutes from "./src/modules/user/user.routes.js";
import postRoutes from "./src/modules/post/post.routes.js";

const app = express();
const port = 4000;
connection();

app.use(express.json());
app.use(userRoutes);
app.use(postRoutes);

app.listen(port, () => console.log(`app listening on port ${port}!`));
