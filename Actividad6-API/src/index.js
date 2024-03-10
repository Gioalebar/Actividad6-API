const express = require("express"); //uso de l framword express
const app = express(); //asignamos la constate app a express
const morgan = require("morgan"); //uso de morgan

//**configuraciones
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//**morgan Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require("./routes/index"));
app.use("/api/movies", require("./routes/movies"));
app.use("/api/users", require("./routes/thirdparty"));

//**configuración de solcitudes (req) y respuestas (res)
/**Para codificar nuestros servicios que expondremos en nuesta API la buena práctica es hacerlo con un enrutamiento definido,
 *  y así lo haremos aquí, pero para ir probando nuestra api la codificaremos de momento aquí en index.js
 *  con el siguiente código: */

/** 
app.get("/", (req, res) => {
  res.json({
    Title: "Hola Mundo, soy Luisa Porras"
  });
});
*/

//** Codificado del listen--Iniciadod el Servidor
app.listen(app.get("port"), () => {
  console.log(`Sever listen on port ${app.get("port")}`);
});
