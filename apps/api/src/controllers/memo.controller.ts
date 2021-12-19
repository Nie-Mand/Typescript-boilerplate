import { handledController, } from '@shared'

export const count = handledController(async (rq, rs) => {
  return rs.json({ count: 666 })
})

export const getMyMemos = handledController(async (rq, rs) => {

  const data = [{
    id: '43534543',
    latitude: 30.23432,
    longitude: 29.30498,
    title: 'ye man',
    public: true,
    image_url: 'https://images.unsplash.com/photo-1637432403673-2722b57b11df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODQzNzl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mzk4ODQ5OTE&ixlib=rb-1.2.1&q=80&w=400',
    when: new Date()

  }]
  return rs.json({ memos: data })
})


export const update = handledController(async (rq, rs) => {
  const body = rq.body
  return rs.json({ memo: body })
})