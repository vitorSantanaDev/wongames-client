// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: 'auth-token', user: { email: 'email@email.com' } }
useSession.mockImplementation(() => [session])
