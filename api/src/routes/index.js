const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRoutes = require("./recipeRoute.js");
const dietRoutes = require("./dietRoute.js");
const mainRoutes = require("./mainRoute");






// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", mainRoutes);
router.use("/recipe", recipeRoutes);
router.use("/diet", dietRoutes)


module.exports = router;
