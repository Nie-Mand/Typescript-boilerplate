import { Avatar, Button, If } from '@ui'
import { useState } from 'react'
import MemoCard from '../../components/MemoCard'
import { useMyData } from '../../redux/hooks/auth.hooks'
import { useGetMyMemos } from '../../redux/hooks/memo.hooks'
import { Memo } from '../../types/memo'

const Welcome = () => {
  const [enabled, setEnabled] = useState(true)

  const memos = useGetMyMemos()

  const me = useMyData()

  return (
    <div className="w-screen pt-20 min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <h1>Hi, {me?.name}!</h1>
        <Avatar className="w-20" src={me?.avatar_url} />
      </div>

      <Button>Create a Memo</Button>

      <div className="flex flex-wrap gap-5 py-10">
        <If condition={memos.loading}>Loading</If>
        <If condition={memos.error}>{memos.error}</If>
        {memos.data.map((memo: Memo) => (
          <MemoCard
            key={memo.id}
            latitude={memo.latitude}
            longitude={memo.longitude}
            title={memo.title}
            public={memo.public}
            image_url={memo.image_url}
            when={memo.when}
            onChangePublicStatus={setEnabled}
          />
        ))}
      </div>
    </div>
  )
}

export default Welcome
