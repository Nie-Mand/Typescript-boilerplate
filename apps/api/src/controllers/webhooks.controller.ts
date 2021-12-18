import { handledController, avatar, createToken } from '@shared'
import axios from 'axios'

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
  const client_secret = process.env.GITHUB_CLIENT_SECRET
  const code = req.query.code
  const github_token = await axios.post(
    `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
    null,
    {
      headers: {
        accept: 'application/json',
      },
    }
  )
  if (github_token.data.error) return res.status(401).end()

  const user = await axios.get('https://api.github.com/user', {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + github_token.data.access_token,
    },
  })

  const { id, login, name, email, avatar_url } = user.data
  const data = {
    id,
    login,
    name,
    email,
    avatar_url,
  }
  const token = await createToken(data)
  return res.send({ token })
})

export const loginWithTwitter = handledController(async (req, res) => {
  return res.send('Login With Twitter working')
})

export const loginWithFacebook = handledController(async (req, res) => {
  console.log({
    body: req.body,
    params: req.params,
  })

  return res.send('Login With Facebook working')
})
