const defaultState = {
  num: 0,
};

const INC = "INC";
export const ASYNC_INC = "ASYNC_INC";
const DEC = "DEC";
export const ASYNC_DEC = "ASYNC_DEC";

export const countReducer = (
  state = defaultState,
  action: { type: string }
) => {
  switch (action.type) {
    case INC:
      return { ...state, num: state.num + 1 };
    case DEC:
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
};

export const incAction = () => ({
  type: INC,
});

export const AsyncIncAction = () => ({
  type: ASYNC_INC,
});

export const decAction = () => ({
  type: DEC,
});

export const AsyncDecAction = () => ({
  type: ASYNC_DEC,
});
