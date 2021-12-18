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
  const api_url = process.env.API_URL
  return res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${api_url}/webhook/login/github`
  )
})

export const loginWithFacebook = handledController(async (req, res) => {
  const client_id = process.env.FACEBOOK_APP_ID
  const api_url = process.env.API_URL
  const state = process.env.FACEBOOK_STATE

  return res.redirect(
    `https://www.facebook.com/v12.0/dialog/oauth?client_id=${client_id}&redirect_uri=${api_url}/webhook/login/facebook&state=${state}`
  )
})

export const loginWithDiscord = handledController(async (req, res) => {
  const client_id = process.env.GITHUB_CLIENT_ID
  const api_url = process.env.API_URL
  return res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${api_url}/webhook/login/github`
  )
})

export const loginWithTwitter = handledController(async (req, res) => {
  const api_url = process.env.API_URL
  const api_key = process.env.TWITTER_API_KEY

  const request_token = await axios.post(
    `https://api.twitter.com/oauth/request_token?oauth_callback=${api_url}/webhook/login/twitter`,
    null,
    {
      headers: {
        oauth_consumer_key: api_key,
        oauth_nonce: '$oauth_nonce',
        oauth_signature: 'oauth_signature',
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: '$timestamp',
        oauth_version: '1.0',
      },
    }
  )
  return res.send('Login With Twitter working')
})
