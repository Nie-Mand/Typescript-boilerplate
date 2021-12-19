import { Illustration, Button, Card } from '@ui'
import { useIsAuth } from '../../redux/hooks/auth.hooks'
import { useCountAll } from '../../redux/hooks/memo.hooks'

const Home = () => {
  const countAll = useCountAll()
  const isAuth = useIsAuth()

  return (
    <div className="w-screen">
      <div className="flex justify-evenly items-center h-screen">
        <div className="flex flex-col justify-center ">
          <h1 className="text-7xl py-5">
            <span className="text-primary">D</span>eja
            <span className="text-primary">V</span>ue
          </h1>
          <h2 className="text-3xl py-5 pb-4">Where Memories make sense!</h2>

          <Button
            href={isAuth ? '/hi' : '/signup'}
            className="self-end text-black"
            as="link"
          >
            {isAuth ? 'My Profile' : 'Start Here'}
          </Button>
        </div>

        <Illustration
          src="/assets/illustration2.png"
          credits="roundicons"
          className="w-96 h-80"
        />
      </div>

      <div className="h-screen">
        <h1 className="text-center text-5xl">
          I Spy {countAll.loading ? '...' : `${countAll.data} happy moments`}
        </h1>
        <div className="flex items-center justify-center ">
          <Illustration src="/assets/illustration.png" credits="merooseth" />

          <div>
            <div className="flex flex-col gap-y-4">
              <Card>
                <h3 className="my-0 font-bold">A Memo</h3>
                <p className="my-0 ml-2">
                  that I would remember, and share to my friends
                </p>
              </Card>

              <Card className="ml-8">
                <h3 className="my-0 font-bold">A Reminder</h3>
                <p className="my-0 mx-2">
                  that would notify me about the happy moments that I've had by
                  an SMS
                </p>
              </Card>

              <Card className="ml-16">
                <h3 className="my-0 font-bold">A Comfort Zone</h3>
                <p className="my-0 ml-2">
                  where I can see where people from every where used to have fun
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
