import * as Twilio from 'twilio'

const getClient = () => {
  const accountSid = process.env.TWILIO_SID
  const authToken = process.env.TWILIO_TOKEN
  const client = Twilio(accountSid, authToken)
  return client
}

export const sendSMS = (to, body) => {
  const client = getClient()
  return client.messages
    .create({ body, from: process.env.MY_TWILIO_PHONE, to })
    .catch(console.error)
}

export const createVerifyPhoneNumberRequest = async to => {
  const client = getClient()
  return client.verify
    .services(process.env.TWILIO_VERIFICATION_SID)
    .verifications.create({ to, channel: 'sms' })
    .then(verification => console.log(verification.status))
}

export const verifyPhoneNumber = async (to, code) => {
  const client = getClient()
  return client.verify
    .services(process.env.TWILIO_VERIFICATION_SID)
    .verificationChecks.create({ to, code })
    .then(vs => vs.status === 'approved' && vs.valid)
    .catch(() => null)
}
