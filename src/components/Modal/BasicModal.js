import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ClassNames from "Helpers/Common";

export default function ModalBasic({
  open,
  setOpen,
  icon,
  btnText,
  content,
  heading,
  loading,
  children,
  onClose,
  isDisabled = false,
  classNameModal,
  bgClassName,
  mainModalClass
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className={ClassNames("fixed z-10 inset-0 overflow-y-auto ",mainModalClass)}
        onClose={() => onClose?.()}
      >
        <div className={ClassNames("flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ",bgClassName)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className={ClassNames("inline-block align-bottom bg-transparent rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:p-6",classNameModal)}>
              <div>
                {icon && (
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full">
                    {icon}
                  </div>
                )}
              </div>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
