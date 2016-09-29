Router.configure({
  layoutTemplate: 'masterLayout'
});

Router.route('/', {
  name: 'home',
  waitOn: function() {
    if (Meteor.userId())
      return Meteor.subscribe('things');
  }
});

Router.route('/ny', {
	name: 'add',
	template: 'insertThingForm'
});

Router.route('/ting/:slug/:slug2', {
  name: 'ting',
	template: 'thing',

	waitOn: function() {
    if (Meteor.userId())
      return Meteor.subscribe('things');
  },
	data: function() {
    return Things.findOne({
      slug: this.params.slug,
      slug2: this.params.slug2
    });
  }
});

Router.route('/sign-out', {
  name: 'signOut',
  onBeforeAction: function () {
    AccountsTemplates.logout();
    this.redirect('/');
  }
});

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/login',
  layoutTemplate: 'masterLayout',
});
AccountsTemplates.configureRoute('signUp', {
  name: 'signup',
  path: '/registrer',
  layoutTemplate: 'masterLayout'
});

AccountsTemplates.configureRoute('forgotPwd', {
  name: 'forgotPwd',
  path: '/glemt-passord',
  layoutTemplate: 'masterLayout'
});

AccountsTemplates.configureRoute('changePwd', {
  name: 'changePwd',
  path: '/endre-passord',
  layoutTemplate: 'masterLayout'
});
