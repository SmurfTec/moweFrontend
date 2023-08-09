import { Button } from "components/Common/Button/Button";
import React, { useEffect, useState } from "react";
import {
  countDownIcon,
  dressCodeIcon,
  feedBackIcon,
  giftIcon,
  homeOptions,
  locIcon,
  shareIcon,
} from "svg-icons/icons";
import { optionBtns } from "./allbtns";
import { useLocation, useNavigate } from "react-router-dom";
import InvitaionPay from "components/invitation-success/InvitaionPay";
import UserProfile from "components/profile-modals/UserProfile";
import ChangePassword from "components/profile-modals/ChangePassword";
import Help from "components/profile-modals/Help";
import { loadStripe } from "@stripe/stripe-js";
import {
  STRIPE_KEY,
  STRIPE_CANCEL_URL,
  STRIPE_SUCCESS_URL,
  STRIPE_PRICE_ID,
} from "../../Configs/secrets";
const stripePromise = loadStripe(STRIPE_KEY);

const EventMenus = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [isSuccessPayment, setIsSuccessPayment] = useState(false);
  const [profileModal, setProfileModal] = useState(0);

  const handleClose = () => {
    setModalOpen(false);
  };
  const handleProfileClose = () => {
    setProfileModal(false);
  };

  const handleProfile = (id, modalIndex) => {
    if (id === 4) {
      setProfileModal(modalIndex);
    }
  };
  const handleClick = async () => {
    const stripe = await stripePromise;

    const { error } = await stripe
      .redirectToCheckout({
        lineItems: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
        mode: "payment",
        successUrl: STRIPE_SUCCESS_URL + location.pathname,
        cancelUrl: STRIPE_CANCEL_URL + location.pathname,
      })
      .then((res) => {
        setIsSuccessPayment(true);
      });

    if (error) {
      console.error(error);
    }
  };

  const handlePaymentRerouting = async () => {
    setTimeout(() => {}, 2000);
    setModalOpen(true);
  };

  useEffect(() => {
    handlePaymentRerouting();
  }, [isSuccessPayment]);
  return (
    <>
      {profileModal === 1 && (
        <UserProfile
          handleProfileClose={handleProfileClose}
          handleProfile={handleProfile}
        />
      )}
      {profileModal === 2 && (
        <ChangePassword handleProfileClose={handleProfileClose} />
      )}
      {profileModal === 3 && <Help handleProfileClose={handleProfileClose} />}
      <div className="event_menus_main">
        <div className="top w-100 flex justify-end items-center pr-5 gap-2">
          {homeOptions.map((option) => (
            <div
              className={`home_option cursor-pointer ${
                option.id === props.activeHO
              } flex justify-center items-center rounded-full w-14 h-14`}
            >
              <span onClick={() => handleProfile(option.id, 1)}>
                {option.icon}
              </span>
            </div>
          ))}
        </div>
        <div className="left flex justify-between">
          <div className="left_inner flex flex-col justify-between pt-9 pb-4">
            <div className="menu_ w-full flex flex-col item-center">
              <div className="cursor-pointer menu_item rounded-full flex items-center justify-center">
                <span>{locIcon}</span>
              </div>
              <div className="cursor-pointer menu_text text-center rounded-4 mt-1 text-white">
                Location
              </div>
            </div>
            <div className="menu_ w-full flex flex-col item-center">
              <div className="cursor-pointer menu_item rounded-full flex items-center justify-center">
                <span>{countDownIcon}</span>
              </div>
              <div className="cursor-pointer menu_text text-center rounded-4 mt-1 text-white text-sm">
                Countdown
              </div>
            </div>
            <div className="menu_ w-full flex flex-col item-center">
              <div className="cursor-pointer menu_item rounded-full flex items-center justify-center">
                <span>{dressCodeIcon}</span>
              </div>
              <div className="cursor-pointer menu_text text-center rounded-4 mt-1 text-white text-sm">
                Dresscode
              </div>
            </div>
          </div>
          <div className="left_inner flex flex-col justify-between pt-9 pb-4">
            <div className="menu_ w-full flex flex-col item-center">
              <div className="cursor-pointer menu_item rounded-full flex items-center justify-center">
                <span>{giftIcon}</span>
              </div>
              <div className="cursor-pointer menu_text text-center rounded-4 mt-1 text-white text-xm">
                Regalo
              </div>
            </div>
            <div className="menu_ w-full flex flex-col item-center">
              <div className="cursor-pointer menu_item rounded-full flex items-center justify-center">
                <span>{shareIcon}</span>
              </div>
              <div className="cursor-pointer menu_text text-center rounded-4 mt-1 text-white text-xm">
                RRSS
              </div>
            </div>
            <div className="menu_ w-full flex flex-col item-center">
              <div className="cursor-pointer menu_item rounded-full flex items-center justify-center">
                <span>{feedBackIcon}</span>
              </div>
              <div className="cursor-pointer menu_text text-center rounded-4 mt-1 text-white text-sm">
                Feedback
              </div>
            </div>
          </div>
        </div>
        <div className="right flex items-center justify-center gap-3 w-100">
          {props.currComp === 0 ? (
            <>
              <Button
                className={`homem_option_btns`}
                onClick={() => props.changeCurrComp(1)}
              >
                Modificar Diseño
              </Button>
              <Button
                className={`homem_option_btns homem_option_btns_active`}
                onClick={() => navigate("/invitation")}
              >
                AÑADIR DATOS
              </Button>
              <Button
                className={`homem_option_btns`}
                onClick={() => handleClick()}
              >
                La quiero
              </Button>
            </>
          ) : (
            optionBtns.map((btn) => {
              console.log(btn.id, props.currComp);
              return (
                <Button
                  className={`${btn.id === props.currComp ? "text-white" : ""}`}
                  style={{
                    backgroundColor: `${
                      btn.id === props.currComp ? "teal" : ""
                    }`,
                    paddingLeft: "15px",
                    paddingRight: "5px",
                  }}
                  onClick={() => props.changeCurrComp(btn.id)}
                >
                  {btn.title}
                </Button>
              );
            })
          )}
        </div>

        <InvitaionPay modalOpen={modalOpen} handleClose={handleClose} />
      </div>
    </>
  );
};

export default EventMenus;
