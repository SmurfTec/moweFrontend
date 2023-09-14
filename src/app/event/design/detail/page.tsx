"use client";
import { Button } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { TimePicker } from "antd";
const { TextArea } = Input;

const Detail = () => {
  const [details, setDetails] = useState({ text: "", date: "", time: "" });

  useEffect(() => {
    const storedDetails = localStorage.getItem("eventDetails");
    if (storedDetails) {
      setDetails(JSON.parse(storedDetails));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("eventDetails", JSON.stringify(details));
  }, [details]);

  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDetails((prev) => ({ ...prev, date: dateString }));
  };

  const onTimeChange = (time: Dayjs | null, timeString: string) => {
    setDetails((prev) => ({ ...prev, time: timeString }));
  };

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetails((prev) => ({ ...prev, text: e.target.value }));
  };

  return (
    <section className="bg-white w-9/12 bg-opacity-50 backdrop-blur-md mx-auto px-20 py-10 rounded-lg">
      <div className="bg-white rounded-lg py-10 px-10">
        <div>
          <div className="space-y-4">
            <h1 className="text-xl">Cuéntanos algunos detalles de tu boda!</h1>
            <p className="max-w-md">
              ¿Cómo os llamáis? (Podrás cambiar las fuentes, tamaño y colores
              más adelante)
            </p>
          </div>
          <TextArea rows={4} value={details.text} onChange={onTextChange} />
        </div>
        <div className="mt-10 space-y-4">
          <p>Fecha y hora del evento</p>
          <div className="flex gap-20">
            <div>
              <p>Fecha:</p>
              <DatePicker
                onChange={onDateChange}
                size="large"
                className="w-72"
              />
            </div>
            <div>
              <p>Hora:</p>
              <TimePicker
                onChange={onTimeChange}
                size="large"
                className="w-72"
              />
            </div>
          </div>
        </div>
        <p className="text-gray-400 mt-10">
          (Se podrán modificar los datos después){" "}
        </p>
      </div>
      <div className="flex justify-between mt-10">
        <Link href={"/event/media"}>
          <Button type="default" size="large" shape="round">
            Previous Step
          </Button>
        </Link>
        <Link href={"/event/preview"}>
          <Button type="primary" size="large" shape="round">
            Next Step
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Detail;
