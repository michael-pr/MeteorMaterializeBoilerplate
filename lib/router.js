Router.configure({
	layoutTemplate: "layout",
	loadingTemplate: "loading",
	notFoundTemplate: "notFound",
	waitOn: function () {
		return Meteor.subscribe("items");
	}
});

Router.route("/", { name: "home" });
Router.route("/1", { name: "link1" });
Router.route("/2", { name: "link2" });
Router.route("/3", { name: "link3" });

Router.route("/login", { name: "login" });
Router.route("/register", { name: "register" });

Router.route("/dashboard", { name: "itemsDash" });
Router.route("/item/submit", { name: "itemSubmit" });
Router.route("/item/:_id", {
	name: "itemPage",
	data: function () {
		return Items.findOne(this.params._id);
	}
});