Router.configure({
	layoutTemplate: "layout",
	loadingTemplate: "loading",
	notFoundTemplate: "notFound"
});

Router.route("/", { name: "home" });
Router.route("/1", { name: "link1" });
Router.route("/2", { name: "link2" });
Router.route("/3", { name: "link3" });

Router.route("/login", { name: "login" });
Router.route("/register", { name: "register" });