thingsController = RouteController.extend({
  waitOn: function() {
    //if (Meteor.userId())
      return Meteor.subscribe('things', this.params.slug, this.params.slug2);
  },
  data: function() {
    return Things.findOne({
      slug: this.params.slug,
      slug2: this.params.slug2
    });
  }
});
