Template.login.onCreated(function () {
	resetFormErrors();
});
Template.login.onRendered(function () {
	/*
	if (Session.get("logging-out") === true) {
		Meteor.logout(function (error) {
			if (error) {
				alert("We could not log you out at the moment. Please try again later.");
			} else {
				Session.set("loggin-out", false);
			}
		});
	}
	*/
});

Template.login.events({
	"submit #login-form": function (e) {
		e.preventDefault();

		var user = {
			email: $(e.target).find("#login-email").val(),
			pass: $(e.target).find("#login-password").val()
		}

		var errors = validateUserOnLogin(user);
		if (errors.messages.length > 0)
			return Session.set("formErrors", errors);

		Meteor.loginWithPassword(
			{ email: user.email }, 
			user.pass,
			function (error) {
				if (error) {
					$("#login-password").val("");
					$("#login-email").select();		

					return Session.set("formErrors", { messages: [error.reason] });
				} else {
					Router.go("activityList");
				}
			}
		);
	}
});

validateUserOnLogin = function (user) {
	var errors = { messages: [] };
	if (!user.email)
		errors.messages.push("Please enter an email");
	if (!user.pass)
		errors.messages.push("Please enter a password");
	return errors;
}