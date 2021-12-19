import { handledController } from '@shared'

export const getMe = handledController(async (rq, rs) => {
    return rs.json({
        me: {
            name: 'John',
            avatar_url: 'https://avatars.dicebear.com/api/personas/undefined.svg?mood=happy'
        }
    })
})