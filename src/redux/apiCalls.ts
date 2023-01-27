
import { removeSuccess } from "./cartRedux";

export const clearCart = async (
  dispatch: ((arg0: { payload: undefined; type: string; }) => void)
) => {

  try {
    const productCurrent = {
      id: '',
      name: '',
      description: '',
      photo: '',
      price: 0,
      quantityOfProduct: 0,
    }

    dispatch(removeSuccess(productCurrent))

  } catch (error) {
    console.log(error)
  }
}