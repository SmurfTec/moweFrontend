import { useState, useEffect } from "react";
import ClassNames from "Helpers/Common";
import { Button } from "components/Common/Button/Button";
import CarouselImage1 from "assets/Images/CarouselImage1.jpg";
import CarouselImage3 from "assets/Images/CarouselImage3.jpg";
import CarouselImage2 from "assets/Images/CarouselImage2.jpg";
import { ReactComponent as LeftIcon } from "assets/Svgs/CarouselLeft.svg";
import { ReactComponent as RightIcon } from "assets/Svgs/CarouselRight.svg";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [prevSlide, setPrevSlide] = useState(null);
  const [isLeftIconClicked, setIsLeftIconClicked] = useState(false);
  useEffect(() => {
    setPrevSlide(currentSlide);
  }, [currentSlide]);
  return (
    <div className="flex flex-col gap-20 mt-20">
      <div className="text-c2xl font-semibold pl-8">Features</div>

      <div
        className={ClassNames(
          "h-[60rem]  flex justify-center px-10 ",
          currentSlide === 1 && "bg-beige",
          currentSlide === 2 && "bg-green-pale",
          currentSlide === 3 && "bg-red-fiery",
          currentSlide === 4 && "bg-brown-deep",
        )}
      >
        <div className="w-full h-full flex  items-center justify-center">
          <LeftIcon
            className="h-8 w-8 lg:h-20 lg:w-20 cursor-pointer"
            onClick={() => {
              if (currentSlide === 1) {
                setCurrentSlide(4);
              } else setCurrentSlide((prevState) => prevState - 1);
              setIsLeftIconClicked(true);
            }}
          />
        </div>
        <div
          className={ClassNames(
            "min-w-[90%] grid grid-cols-2 items-center gap-20 ",
            currentSlide === prevSlide && !isLeftIconClicked && "animate-slide",
            currentSlide === prevSlide && isLeftIconClicked && "animate-slidel",
          )}
        >
          {currentSlide === 1 ? (
            <SlideOne />
          ) : currentSlide === 2 ? (
            <SlideTwo />
          ) : currentSlide === 3 ? (
            <SlideThree />
          ) : (
            currentSlide === 4 && <SlideFour />
          )}
        </div>
        <div className="w-full h-full flex  items-center justify-center">
          <RightIcon
            className="h-8 w-8 lg:h-20 lg:w-20 cursor-pointer"
            onClick={() => {
              if (currentSlide === 4) {
                setCurrentSlide(1);
              } else setCurrentSlide((prevState) => prevState + 1);
              setIsLeftIconClicked(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const SlideOne = () => {
  return (
    <>
      <div>
        <img
          src={CarouselImage2}
          className=" w-full h-[46rem] ml-[3%]"
          alt="Image2"
        />
      </div>
      <div className="flex flex-col gap-20">
        <div className="text-c4xl font-semibold">TU INVITACIÓN ES ÚNICA!</div>
        <div className="text-c2xl2 font-normal text-gray-cool">
          Con Mowe, tendrás la oportunidad de crear una invitación totalmente
          personalizada con tus propias fotos y videos. Además, podrás elegir
          entre nuestros diseños exclusivos y adaptarlos a tus gustos. ¡Haz tu
          boda única y emocionante con Mowe!
        </div>
        <div className="flex w-full justify-end">
          <Button
            btnText={"Crea tu diseño"}
            className={ClassNames("w-72 !bg-black text-white py-3 text-md")}
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
};

const SlideTwo = () => {
  return (
    <>
      <div className="flex flex-col gap-20 ml-[3%]">
        <div className="text-c4xl font-semibold">
          SORPRENDE A TUS INVITADOS!
        </div>
        <div className="text-c2xl2 font-normal text-gray-cool">
          Utiliza una URL personalizada para tu invitación y elige el unboxing
          que más te guste para que tus invitados vivan una experiencia
          emocionante al abrirla. ¡Haz tu boda inolvidable con Mowe!“
        </div>
        <div className="flex w-full justify-end">
          <Button
            btnText={"Crea tu diseño"}
            className={ClassNames("w-72 !bg-black text-white py-3 text-md")}
            onClick={() => {}}
          />
        </div>
      </div>
      <div>
        <img src={CarouselImage1} className=" w-full h-[46rem]" alt="Image2" />
      </div>
    </>
  );
};
const SlideThree = () => {
  return (
    <>
      <div>
        <img
          src={CarouselImage3}
          className=" w-full h-[46rem] ml-[3%]"
          alt="Image2"
        />
      </div>
      <div className="flex flex-col gap-20">
        <div className="text-c4xl font-semibold">TU INVITACIÓN CON TODO!</div>
        <div className="text-c2xl2 font-normal text-gray-cool">
          Mowe incluye una amplia variedad de funciones. Añade una cuenta atrás,
          mapas interactivos, predicción del clima para el gran día, dresscode,
          hashtags personalizados y mucho más.
        </div>
        <div className="flex w-full justify-end">
          <Button
            btnText={"Crea tu diseño"}
            className={ClassNames("w-72 !bg-black text-white py-3 text-md")}
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
};
const SlideFour = () => {
  return (
    <>
      <div className="flex flex-col gap-20 ml-[3%]">
        <div className="text-c4xl font-semibold">
          INTERACTUA CON TUS INVITADOS!
        </div>
        <div className="text-c2xl2 font-normal text-gray-cool">
          Con tu invitación, tendrás acceso al panel Mowe, donde no solo podrás
          gestionar tus invitados de manera fácil y eficiente, sino que también
          podrás organizar grupos o mesas, recibir el feedback y ver las
          estadísticas de tu gran día
        </div>
        <div className="flex w-full justify-end">
          <Button
            btnText={"Crea tu diseño"}
            className={ClassNames("w-72 !bg-black text-white py-3 text-md")}
            onClick={() => {}}
          />
        </div>
      </div>
      <div>
        <img src={CarouselImage1} className=" w-full h-[46rem]" alt="Image2" />
      </div>
    </>
  );
};
