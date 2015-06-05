Template.register.onCreated(function () {
	resetFormErrors();
})

Template.register.events({
	"submit #register-form": function (e) {
		e.preventDefault();

		var user = {
			email: $(e.target).find("#register-email").val(),
			pass: $(e.target).find("#register-password").val(),
			confirmPass: $(e.target).find("#register-confirm-password").val()
		}

		var errors = validateUser(user);
		if (errors.messages.length > 0)
			return Session.set("formErrors", errors);

		Accounts.createUser({
			email: user.email,
			password: user.pass,
			profile: {
				device: "unknown"
			}
		}, function (error) {
			if (error) {
				alert("There was an error creating your account. Please try again later.");
			} else {
				Router.go("activityList");
			}
		});
	}
});

validateUser = function (user) {
	var errors = { messages: [] };
	if (!user.email)
		errors.messages.push("Please enter an email");
	if (user.pass.length < 8)
		errors.messages.push("Your password must be more than 8 characters long");
	if (user.pass !== user.confirmPass)
		errors.messages.push("Your passwords do not match. Please try again");
	return errors;
}