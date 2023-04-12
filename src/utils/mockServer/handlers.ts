import { rest } from 'msw'

type LoginRequestBody = { email: string }

type ResetPasswordRequestBody = {
  code: string
  password: string
  passwordConfirmation: string
}

export const handlers = [
  rest.post<LoginRequestBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
    async (req, res, ctx) => {
      const { email } = req.body

      if (email === 'false@email.com') {
        return res(
          ctx.status(400),
          ctx.json({
            error: 'Bad request',
            message: [{ messages: [{ message: 'This email does not exist' }] }]
          })
        )
      }
      return res(ctx.status(200), ctx.json({ ok: true }))
    }
  ),
  rest.post<ResetPasswordRequestBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
    (req, res, ctx) => {
      const { code } = req.body

      if (code === 'wrong_code') {
        return res(
          ctx.status(400),
          ctx.json({
            error: 'Bad Request',
            message: [{ messages: [{ message: 'Incorrect code provided.' }] }]
          })
        )
      }

      return res(
        ctx.status(200),
        ctx.json({ user: { email: 'valid@email.com' } })
      )
    }
  )
]
