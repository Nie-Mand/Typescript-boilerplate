import { getRandom, objectToString } from './global'

const styles = [
  'bottts',
  'croodles',
  'adventurer',
  'gridy',
  'big-smile',
  'avataaars',
  'initials',
  'jdenticon',
  'miniavs',
  'open-peeps',
  'personas',
]

export const avatar = (opt: Options) => {
  console.log(opt)

  // https://avatars.dicebear.com/styles
  const { mood = 'happy', style = getRandom(styles), seed, options = {} } = opt
  return `https://avatars.dicebear.com/api/${style}/${seed}.svg?mood=${mood}${objectToString(
    options
  )}`
}

type Options = {
  mood?: string
  style?: string
  seed: string
  options?: any
}
