
AutoForm.addHooks(['insertThingForm'], {
  onSuccess: function(operation, result, template) {
    //Bert.alert('Sangen ble lagt til!', 'success', 'growl-bottom-right');
    Router.go('home');
  }
});
