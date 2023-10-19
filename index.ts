import server from "./src/serve";
import { connectDB } from "./src/DataBase";

connectDB();

server.listen(6500, () => {
  console.log("Servidor levantado con exito!");
});
