import { ADD_TO_Basket, REMOVE_FROM_BASKET, SET_USER } from "./Action";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_Basket:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case REMOVE_FROM_BASKET:
      // return {
      //   ...state,
      //   basket: state.basket.filter((item) => item.id !== action.id),
      // };

      const index = state.basket.findIndex((basket) => basket.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id})k as its not in basket!!!`
        );
      }
      return { ...state, basket: newBasket };

    case SET_USER:
      return { ...state, user: action.user };
  }

  return state;
};
