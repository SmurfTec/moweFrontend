import { createContext, useReducer, useContext } from "react";

const initialFormState = {
  form1: {
    media1: "",
    media2: "",
  },
};

const SET_Media = "form1";
const RESET_PROVIDER = "resetProvider";
const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_Media:
      return { ...state, form1: payload };

    case RESET_PROVIDER:
      return {
        ...state,

        form1: {
          media1: "",
          media2: "",
        },
      };
    default:
      return state;
  }
};

const AppContext = createContext();
const EventEditing = (props) => {
  const { children } = props || {};
  const [providerState, setProviderState] = useReducer(
    reducer,
    initialFormState,
  );

  const setValToProviderCxt = (type, payload) => {
    setProviderState({ type, payload });
  };

  const setMediaState = (form1) => setValToProviderCxt(SET_Media, form1);

  const resetProvderCtx = () => setValToProviderCxt(RESET_PROVIDER);
  return (
    <AppContext.Provider
      value={{
        media: providerState.form1,
        setMediaState,
        resetProvderCtx,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useMediaCreationContext = () => {
  return useContext(AppContext);
};
export { AppContext, EventEditing };
