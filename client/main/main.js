Template.masterLayout.onRendered(function (){
  $('.ui.dropdown').dropdown();
});

Template.masterLayout.helpers({
  username: function() {
    return Meteor.user().profile.name
  }
});
