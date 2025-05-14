import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bookRoutes from "./routes/bookRoutes";
import { errorHandler } from "./middlewares/errorMiddleware";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use("/books", bookRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export { app };
