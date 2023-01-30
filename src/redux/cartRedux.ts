import { createSlice } from '@reduxjs/toolkit';

interface IProductProps {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
  quantityOfProduct: number;
}

export interface SliceState {
  products: IProductProps[];
  quantity: number;
  total: number;
}

const initialState: SliceState = {
  products: [{
    id: 0,
    name: '',
    description: '',
    photo: '',
    price: '',
    quantityOfProduct: 0,
  }],
  quantity: 0,
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.total += action.payload.total;

      if (state?.products?.[0]?.id === 0) {
        state.quantity += 1;
        state.products[0] = action.payload;
      } else {

        const productFound = state.products.find(element => element.id === action.payload.id);

        if (!productFound) {
          state.quantity += 1;
          state.products.push(action.payload);
        } else {
          state.products = state.products.map((product) => {
            if (product.id === action.payload.id) {
              product.quantityOfProduct += action.payload.quantityOfProduct;
            }
            return product;
          })
        }
      }
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;

      const newTotalOfProducts = state.products.filter(product => product.id !== action.payload.id)

      state.total = newTotalOfProducts.reduce((result, quantity) => {
        const newTotal = quantity.quantityOfProduct * Number(quantity.price)
        return (result + newTotal)
      }, 0);

      state.products = state.products.filter(product => product.id !== action.payload.id)
    },
    addTotal: (state, action) => {
      state.total += action.payload.total;
      state.products = state.products.map(product => {
        if (product.id === action.payload.id) {
          product = action.payload;
        }
        return product;
      })
    },
    minusTotal: (state, action) => {
      state.total -= action.payload.total;
      state.products = state.products.map(product => {
        if (product.id === action.payload.id) {
          product = action.payload;
        }
        return product;
      })
    },
    removeSuccess: (state, action) => {
      state.products = [action.payload];
      state.quantity = 0;
      state.total = 0;
    },
  }
});

export const {
  addProduct,
  deleteProduct,
  addTotal,
  minusTotal,
  removeSuccess
} = cartSlice.actions;

export default cartSlice.reducer;