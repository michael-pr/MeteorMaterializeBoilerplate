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

		var errors = validateUserOnRegister(user);
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
				$("#register-password").val("");
				$("#register-confirm-password").val("");
				$("#register-password").select();

				return Session.set("formErrors", { messages: [error.reason] });
			} else {
				Router.go("itemsDash");
			}
		});
	}
});

validateUserOnRegister = function (user) {
	var errors = { messages: [] };
	if (!user.email)
		errors.messages.push("Please enter an email");
	if (user.pass.length < 8)
		errors.messages.push("Your password must be more than 8 characters long");
	if (user.pass !== user.confirmPass)
		errors.messages.push("Your passwords do not match. Please try again");
	return errors;
}

/*
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
*/




