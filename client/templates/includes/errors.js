Template.generalErrors.onRendered(function () {
	$("#error-modal").leanModal({
		dismissible: true,
		opacity: .5,
		in_duration: 300, 
		out_duration: 200 
	});
});
Template.generalErrors.helpers({
	errors: function () {
		return Errors.find();
	}
});
Template.generalErrors.events({

});


/* FORM ERRORS */
// TODO: Animate errors in
Template.formErrors.helpers({
	errors: function () {
		return Session.get("formErrors").messages;
	},
	showErrorClass: function () {
		return (Session.get("formErrors").messages.length > 0) ? "show-error" : "hide";
	}
});
Template.formErrors.events({
	"click .form-errors-wrapper": function (e) {
		e.preventDefault();
		resetFormErrors();
	}
});

resetFormErrors = function () {
	Session.set("formErrors", { messages: [] });
}