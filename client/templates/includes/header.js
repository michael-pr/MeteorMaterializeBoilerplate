Template.header.onRendered(function () {
	$(".button-collapse").sideNav({
		closeOnClick: true
	});
});

Template.header.helpers({
	currentPage: function () {
		return Router.current().route.getName();
	}
});