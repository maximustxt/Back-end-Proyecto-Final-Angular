import server from "./serve";
import { connectDB } from "./DataBase";

connectDB();

server.listen(6500, () => {
  console.log("Servidor levantado con exito!");
});
