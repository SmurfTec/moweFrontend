import { Button } from 'components/Common/Button/Button'
import { DragDropFile } from 'components/Common/UploadFile/DragDropUploadFile'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFile1, getFile2 } from 'redux/slices/eventSlice'
import { dragDrop, infoIcon } from 'svg-icons/icons'

const ImgUpload = (props) => {
  const dispatch = useDispatch()
  const eventDetails = useSelector(state => state.event.eventDetails)
  const[files, setFiles] = useState({
    file1: "",
    file2: "",
    preview1: "",
    preview2: ""
  })
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

  const handleFileSelect1 = () => {
    const file = fileInputRef1.current.files[0];
    const previewUrl = URL.createObjectURL(file)
    console.log(previewUrl)
    setFiles({...files, file1: file, preview1: previewUrl})

    dispatch(getFile1(file))
  };
  const handleFileSelect2 = () => {
    const file = fileInputRef2.current.files[0];
    const previewUrl = URL.createObjectURL(file)
    setFiles({...files, file2: file, preview2: previewUrl})

    dispatch(getFile2(file))
  };

  const handleClick1 = () => {
    fileInputRef1.current.click();
  };
  const handleClick2 = () => {
    fileInputRef2.current.click();
  };

  useEffect(() => {
    if(eventDetails?.file1){
      console.log("url from details ", URL.createObjectURL(eventDetails?.file1))
      setFiles({
        ...files,
        preview1: URL.createObjectURL(eventDetails?.file1)
      })
    }
    if(eventDetails?.file2){
      console.log("url from details ", URL.createObjectURL(eventDetails?.file2))
      setFiles({
        ...files,
        preview2: URL.createObjectURL(eventDetails?.file2)
      })
    }
  }, [eventDetails])
  console.log(files)
  return (
    <div >
        <div className='flex'>
            <div>
                <h3 className='text-xl font-semibold'>
                    Carga tu fotos
                </h3>
                <p className='text-sm mb-4'>
                    Para empezar, vamos a subir 2 vídeos o fotos. El principal se mostrará en 
                    la portada de la invitación y el secundario en el apartado “cuenta atrás”. 
                    Si no encuentras la foto perfecta, no te preocupes, vas a poder modificarla 
                    después.
                </p>
            </div>
            <div className='cursor-pointer'>{infoIcon}</div>
        </div>

        <div className="select_imgs p-5 bg-white rounded-lg flex justify-center gap-9 items-center">
            <div className="inner text-center">
                <p className='mb-3'>Foto/Video Principal</p>
                <div className="img_vid_1 flex flex-col items-center justify-center cursor-pointer border-dashed border-gray-500 border rounded-lg">
                    {files?.preview1 ? 
                      <img src={files.preview1} className='w-100 h-100' alt="" />
                    :
                    <span>{dragDrop}</span>
                    }
                    <Button onClick={handleClick1} className={'upload_btns text-white pl-5'}>Cargar</Button>
                </div>
                <input
                    type="file"
                    id="customFileInput"
                    ref={fileInputRef1}
                    className="hidden"
                    onChange={handleFileSelect1}
                />
            </div>
            <div className="inner text-center">
                <p className='mb-3'>Foto/Video Principal</p>
                <div className="img_vid_1 flex flex-col items-center justify-center cursor-pointer border-dashed border-gray-500 border rounded-lg">
                    <span>{dragDrop}</span>
                    <Button onClick={handleClick2} className={'upload_btns text-white pl-5'}>Cargar</Button>
                </div>
                <input
                    type="file"
                    id="customFileInput"
                    ref={fileInputRef2}
                    className="hidden"
                    onChange={handleFileSelect2}
                />
            </div>
        </div>
    </div>
  )
}

export default ImgUpload