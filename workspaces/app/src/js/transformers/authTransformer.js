export const authTransformer = {
  fetchUser: ({ email, firstName, lastName }) => ({
    user: {
      email,
      firstName,
      lastName
    }
  }),

  signUpRequest: ({ data: { email, firstName, lastName, password } }) => ({
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password
  })
}
