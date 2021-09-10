const registerShema = {
  name: {
    isLength: {
      errorMessage: 'name length must be 4 characters at least',
      options: {
        min: 4
      }
    }
  },
  email: {
    isEmail: {
      bail: true,
      errorMessage: 'Wrong email format'
    }
  },
  password: {
    isLength: {
      errorMessage: 'password length must be 6 characters at least',
      options: {
        min: 6
      }
    }
  },
}
export default registerShema