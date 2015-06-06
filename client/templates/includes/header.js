Template.header.onRendered(function () {
	$(".button-collapse").sideNav({
		closeOnClick: true
	});
});

Template.header.helpers({
	currentPage: function () {
		return Router.current().route.getName();
	},
	needSubmit: function () {
		switch (Router.current().route.getName()) {
			case "itemsDash": return true;
			default: return false;
		}
	}
});

Template.header.events({
	"click #logout-submit": function (e) {
		e.preventDefault();

		Meteor.logout(function (error) {
			if (error) {
				alert(error.reason);
			} else {
				Router.go("home");
			}
		});
	}
});