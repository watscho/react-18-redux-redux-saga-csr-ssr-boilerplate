export const authTransformer = {
  fetchUser: ({ email, firstName, lastName }: any) => ({
    user: {
      email,
      firstName,
      lastName
    }
  }),

  signUpRequest: ({ data: { email, firstName, lastName, password } }: any) => ({
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password
  })
}
