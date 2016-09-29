Meteor.publish('things', function () {
  return Things.find();
});
