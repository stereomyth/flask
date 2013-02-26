/* # Import controllers
================================================== */

var root = require("./controllers/RootController"),
	instagram = require("./controllers/instagramController");

/* # Routes
================================================== */

module.exports = function(app) {

	app.get("/", root.index);

	app.get("/flo", root.flo);

	app.get("/instagram/realtime", instagram.realtime_get);

	app.post("/instagram/realtime", instagram.realtime_post);

};
