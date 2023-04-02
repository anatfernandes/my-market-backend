import dotenv from "dotenv";
import { server } from "./server.js";

dotenv.config();

const port = process.env.PORT || 4001;

server.listen(port, () => console.log(`Listening on port ${port}...`));
