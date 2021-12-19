import { Input, Button, Checkbox, If } from '@ui'
import { useRef, useState } from 'react'
import { GitHub } from 'react-feather'
import { useSignup } from '../../redux/hooks/auth.hooks'

const Signup = () => {
  const emailRef = useRef()
  const fullnameRef = useRef()
  const passwordRef = useRef()
  const [showPassword, setShowPassword] = useState(false)

  const { error, loading, handleSignup } = useSignup(
    fullnameRef,
    emailRef,
    passwordRef
  )

  const api_url = process.env['NX_API_URL']

  return (
    <div className="w-screen min-h-screen grid place-content-center">
      <div className="py-10 bg-white w-[400px] shadow-xl rounded-xl">
        <h1 className="text-center py-2">Register</h1>

        <div className="flex flex-col divide-y gap-y-5  px-5">
          <form className="flex flex-col gap-y-3" onSubmit={handleSignup}>
            <If condition={error}>
              <div className="bg-red-500 rounded-md px-4 py-2 my-2  shadow-md shadow-red-300 text-white">
                {error}
              </div>
            </If>

            <Input
              label="Fullname"
              type="text"
              autoComplete="name"
              name="fullname"
              ref={fullnameRef}
              required
            />

            <Input
              label="Email address"
              type="text"
              autoComplete="email"
              name="email"
              ref={emailRef}
              required
            />

            <Input
              ref={passwordRef}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
            />

            <Checkbox
              name="show-passoword"
              label="Show Password"
              onChange={(checked: any) => {
                setShowPassword(checked)
              }}
            />

            <Button fullWidth disabled={loading}>
              Register
            </Button>
          </form>

          <div />

          <Button
            fullWidth
            as="a"
            href={`${api_url}/auth/github`}
            className=" !bg-social-github !text-white !flex !items-center gap-x-3 focus:!outline-social-github"
          >
            <GitHub /> Register with GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Signup
