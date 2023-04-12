import { rest } from 'msw'

type LoginRequestBody = { email: string }

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
  )
]
