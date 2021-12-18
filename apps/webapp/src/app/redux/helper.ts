export const createAsyncAction = (actionName: string) => ({
    failure: `${actionName}_FAILURE`,
    request: `${actionName}_REQUEST`,
    success: `${actionName}_SUCCESS`,
  })
  
export type AsyncState<T> = {
    data: T
    loading: boolean
    error: any
}

export type Action = {
  type: string | AsyncActionType
  payload: any
}

export type AsyncActionType = {
  failure: string
  success: string
  request: string
}
