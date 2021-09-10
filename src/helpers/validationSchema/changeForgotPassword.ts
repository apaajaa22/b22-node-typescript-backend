const changeForgotPasswordSchema = {
  email: {
    isEmail: {
      bail: true,
      errorMessage: 'Wrong email format'
    }
  },
  password: {
    isLength: {
      errorMessage: 'minimum password length must be 6 characters at least',
      options: {
        min: 6
      }
    }
  },
}

export default changeForgotPasswordSchema
