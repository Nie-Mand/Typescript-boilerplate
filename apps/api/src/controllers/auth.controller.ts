import { handledController, avatar, createToken } from '@shared'


export const signup = handledController(async (req, res) => {
  return res.status(201).end()
})


export const login = handledController(async (req, res) => {
  const body = req.body

  const data = {
    id: 'some_id',
    username: body.username,
    name: 'full name',
    avatar: avatar({
      seed: body.username,
    }),
  }

  const token = await createToken(data)
  return res.json({
    token,
  })
})

export const loginWithGitHub = handledController(async (req, res) => {
  const client_id = process.env.GITHUB_CLIENT_ID
  const api_url = process.env.API_URL
  return res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${api_url}/webhook/login/github`
  )
})
