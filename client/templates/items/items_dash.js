Template.itemsDash.helpers({
	noItems: function () {
		return Items.find().count() === 0;
	},
	items: function () {
		return Items.find();
	}
})