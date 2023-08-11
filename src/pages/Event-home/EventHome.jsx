import React, { useState } from "react";
import "./eventhome.css";
import EventMenus from "./EventMenus";
import HomeDesignCreated from "./HomeDesignCreated";
import AllCompsSwitch from "./AllCompsSwitch";
import { Button } from "components/Common/Button/Button";
import { optionBtns } from "./allbtns";
import OtherCompSwitch from "./OtherCompSwitch";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE } from "Configs/secrets";
import { useParams } from "react-router-dom";

const EventHome = () => {
  const params = useParams();
  const [currComp, setCurrComp] = useState(0);

  const [eventInfo, setEventInfo] = useState({});
  const id = params.id;
  console.log(id);
  const changeCurrComp = (id) => {
    setCurrComp(id);
  };

  const getEventData = async () => {
    await axios
      .get(`${API_BASE}event/get-event?_id=${id}`)
      .then((res) => {
        const { data } = res;
        console.log(data);
        setEventInfo(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEventData();
  }, []);

  if (currComp === 0 || currComp === 1) {
    return (
      <div
        className="event_home_main w-100 h-100"
        style={{ backgroundImage: `url(${eventInfo?.file1})` }}
      >
        <EventMenus
          menuIndex="1"
          currComp={currComp}
          changeCurrComp={changeCurrComp}
        />

        {currComp === 0 || currComp === 8 ? (
          <HomeDesignCreated eventInfo={eventInfo} />
        ) : (
          <div className="bg_wraper_main flex flex-col items-center justify-center">
            <AllCompsSwitch currComp={currComp} />
            <div className="flex justify-between w-85 mb-5">
              <Button className={"text-gray pl-9 pr-5"}>Atrás</Button>
              <Button
                className={"text-white pl-9 pr-5"}
                style={{ backgroundColor: "teal" }}
              >
                Save
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="event_home_main2">
        <div className="btns_wraper flex items-end justify-center gap-3 w-100">
          {optionBtns.map((btn) => {
            return (
              <Button
                className={`${btn.id === currComp ? "text-white" : ""}`}
                style={{
                  backgroundColor: `${btn.id === currComp ? "teal" : ""}`,
                  paddingLeft: "15px",
                  paddingRight: "5px",
                }}
                onClick={() => changeCurrComp(btn.id === 8 ? 0 : btn.id)}
              >
                {btn.title}
              </Button>
            );
          })}
        </div>

        <div
          className={`${
            currComp === 2 ? "bg_wraper_main2" : ""
          } flex flex-col items-center justify-center`}
        >
          <OtherCompSwitch currComp={currComp} />
          {currComp === 2 && (
            <div className="flex justify-between w-85 mb-5">
              <Button className={"text-gray pl-9 pr-5"}>Atrás</Button>
              <Button
                className={"text-white pl-9 pr-5"}
                style={{ backgroundColor: "teal" }}
              >
                Save
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default EventHome;
