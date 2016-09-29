Template.thing.helpers({
  thing: function() {
    return Things.find();
  },
  id: function() {
    return this._id;
  }
});
