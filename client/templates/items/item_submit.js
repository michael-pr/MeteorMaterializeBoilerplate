Template.itemSubmit.onCreated(function () {
	resetFormErrors();
});

Template.itemSubmit.events({
	"submit form": function (e) {
		e.preventDefault();

		var item = {
			title: $(e.target).find("#item-title").val()
		}
		
		var errors = validateItem(item);
		if (errors.messages.length > 0)
			return Session.set("formErrors", errors);


		Meteor.call("itemInsert", item, function (error, result) {
			if (error) {
				alert(error.reason);
				return Session.set("formErrors", { messages: [error.reason] });
			}
			Router.go("itemPage", { _id: result._id });
		});
	}
});

validateItem = function (item) {
	var errors = { messages: [] };
	if (!item.title)
		errors.messages.push("You must enter a title for this item");
	return errors;
}