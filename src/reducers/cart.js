export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []
export const CART_ACTION_TYPE = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}
// update localStorage with state for cart
export const updateLocaleStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTION_TYPE.ADD_TO_CART:{
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocaleStorage(newState)
        return newState
      }
      const newState = [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1
        }
      ]
      updateLocaleStorage(newState)
      return newState
    }
    case CART_ACTION_TYPE.REMOVE_FROM_CART:{
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocaleStorage(newState)
      return newState
    }
    case CART_ACTION_TYPE.CLEAR_CART: {
      updateLocaleStorage([])
      return []
    }
  }
  return state
}
