import NextAuth, { AuthOptions } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'
import CredentialsProvider from 'next-auth/providers/credentials'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericObject = { [key: string]: any }

const options: AuthOptions = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign-in',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password })
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, name: data.user.username, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async session({ session, token }: GenericObject) {
      session.jwt = token.jwt
      session.id = token.id
      return Promise.resolve(session)
    },
    async jwt({ token }: GenericObject) {
      return Promise.resolve(token)
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
