Items = new Mongo.Collection("items");

Items.allow({
	remove: function (userId, item) {
		return isOwner(userId, item);
	}
});

Items.deny({
	update: function (userId, item, fieldNames) {
		// Only fields allowed to be updated are title
		return (_.without(fieldNames, "title").length > 0);
	}
})

Meteor.methods({
	itemInsert: function (itemAttr) {
		check(this.userId, String);
		check(itemAttr, {
			title: String
		});

		var user = Meteor.user();
		var item = _.extend(itemAttr, {
			userId: user._id,
			submitted: new Date()
		});

		var itemId = Items.insert(item);

		return { _id: itemId };
	}
});

isOwner = function (userId, item) {
	return item && item.userId === userId;
}