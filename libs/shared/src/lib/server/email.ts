import nodemailer from 'nodemailer'

export default async message => {
  const transporter = nodemailer.createTransport({
    pool: true,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || '465',
    secure: process.env.SMTP_PORT == '587' ? false : true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  transporter.sendMail(message).catch(console.error)
}
