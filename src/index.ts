import server from "./serve";
import { connectDB } from "./DataBase";

connectDB();

server.listen(3500, () => {
  console.log("Servidor levantado con exito!");
});