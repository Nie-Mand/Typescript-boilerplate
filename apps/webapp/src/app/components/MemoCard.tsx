import moment from 'moment'
import { Switch } from '@headlessui/react'
import { capitalize } from 'lodash'

type Props = {
  latitude: number
  longitude: number
  title: string
  public: boolean
  when: Date
  image_url: string
  onChangePublicStatus: (...props: any) => void
}
const MemoCard = (props: Props) => {
  return (
    <div className="shadow-xl rounded-md w-80">
      <img
        src={props.image_url}
        alt={props.title}
        className="rounded-t-md mb-0"
      />
      <div className="p-3">
        <div className="flex items-center justify-between">
          {props.public ? (
            <h5 className="text-green-600 font-semibold">Public</h5>
          ) : (
            'Private'
          )}
          <Switch
            checked={props.public}
            onChange={props.onChangePublicStatus}
            className={`${props.public ? 'bg-green-600' : 'bg-slate-700'}
          relative inline-flex flex-shrink-0 h-6 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span
              aria-hidden="true"
              className={`${props.public ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
            />
          </Switch>
        </div>
        <h1>{capitalize(props.title)}</h1>
        <i>
          {props.longitude}, {props.latitude},{' '}
          {moment(props.when).format('M-D-YYYY HH:mm')}
        </i>
        <div className="flex justify-end pt-2">
          <button className="text-red-500 font-bold text-sm">Remove</button>
        </div>
      </div>
    </div>
  )
}

export default MemoCard
