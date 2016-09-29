AccountsTemplates.configure({
  //overrideLoginErrors: true,
  showForgotPasswordLink: true,
  enablePasswordChange: true,
  sendVerificationEmail: false,
  confirmPassword: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: false
});

AccountsTemplates.addField({
  _id: 'name',
  type: 'text',
  displayName: "Brukernavn",
  required: true,
  placeholder: {
    signUp: "Vennligst oppgi brukernavn/kallenavn"
  }
});
