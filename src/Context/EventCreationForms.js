import { createContext, useReducer, useContext } from "react";

const initialFormState = {
  form1: {
    invitationNames: "",
    date: new Date(),
    time: "",
  },
  form2: {
    mainTitle: "",
    mainLocation: "",
    secondTitle: "",
    secondTitleLocation: "",
    mapDescriptions: "",
    form2Check:false
  },
  form3: {
    offerTransportation: false,
    transportaionDescriptions: "",
    parkingIndications: "",
    QRimage: "",
  },
  form4: { dressCode: "" },
  form5: {
    hashtags: "",
    googlePhotosCheck: false,
    instagramCheck: false,
    titkTokcheck: false,
    fbCheck: false,
    googleDescription: "",
    instaDescription: "",
    tikTokDescription: "",
    fbDescription: "",
  },
  form6: {
    recieveGiftsDescription: "",
    noGiftsCheck: false,
    bizumDescription: "",
    cuentaDescription: "",
    listaDescription: "",
    paypalDescription: "",
  },
  form7: {
    urlLink: "",
  },
};

const SET_FORM_1 = "form1";
const SET_FORM_2 = "form2";
const SET_FORM_3 = "form3";
const SET_FORM_4 = "form4";
const SET_FORM_5 = "form5";
const SET_FORM_6 = "form6";
const SET_FORM_7 = "form7";
const RESET_PROVIDER = "resetProvider";
const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_FORM_1:
      return { ...state, form1: payload };
    case SET_FORM_2:
      return { ...state, form2: payload };
    case SET_FORM_3:
      return { ...state, form3: payload };
    case SET_FORM_4:
      return { ...state, form4: payload };
    case SET_FORM_5:
      return { ...state, form5: payload };
    case SET_FORM_6:
      return { ...state, form6: payload };
    case SET_FORM_7:
      return { ...state, form7: payload };
    case RESET_PROVIDER:
      return {
        ...state,

        form1: {
          invitationNames: "",
          date: "",
          time: "",
        },
        form2: {
          mainTitle: "",
          mainLocation: "",
          secondTitle: "",
          secondTitleLocation: "",
          mapDescriptions: "",
        },
        form3: {
          offerTransportation: false,
          transportaionDescriptions: "",
          parkingIndications: "",
          QRimage: "",
        },
        form4: { dressCode: "" },
        form5: {
          hashtags: "",
          googlePhotosCheck: false,
          instagramCheck: false,
          titkTokcheck: false,
          fbCheck: false,
          googleDescription: "",
          instaDescription: "",
          tikTokDescription: "",
          fbDescription: "",
        },
        form6: {
          recieveGiftsDescription: "",
          noGiftsCheck: false,
          bizumDescription: "",
          cuentaDescription: "",
          listaDescription: "",
          paypalDescription: "",
        },
        form7: {
          urlLink: "",
        },
      };
    default:
      return state;
  }
};

const AppContext = createContext();
const EventCreationForm = (props) => {
    const { children } = props || {};
  const [providerState, setProviderState] = useReducer(
    reducer,
    initialFormState,
  );

  const setValToProviderCxt = (type, payload) => {
    setProviderState({ type, payload });
  };

  const setFormState1 = (form1) => setValToProviderCxt(SET_FORM_1, form1);
  const setFormState2 = (form2) => setValToProviderCxt(SET_FORM_2, form2);
  const setFormState3 = (form3) => setValToProviderCxt(SET_FORM_3, form3);
  const setFormState4 = (form4) => setValToProviderCxt(SET_FORM_4, form4);
  const setFormState5 = (form5) => setValToProviderCxt(SET_FORM_5, form5);
  const setFormState6 = (form6) => setValToProviderCxt(SET_FORM_6, form6);
  const setFormState7 = (form7) => setValToProviderCxt(SET_FORM_7, form7);

  const resetProvderCtx = () => setValToProviderCxt(RESET_PROVIDER);
  return (
    <AppContext.Provider
      value={{
        form1: providerState.form1,
        form2: providerState.form2,
        form3: providerState.form3,
        form4: providerState.form4,
        form5: providerState.form5,
        form6: providerState.form6,
        form7: providerState.form7,
        setFormState1,
        setFormState2,
        setFormState3,
        setFormState4,
        setFormState5,
        setFormState6,
        setFormState7,
        resetProvderCtx,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useEventCreationFormContext = () => {
  return useContext(AppContext);
};
export { AppContext, EventCreationForm };
