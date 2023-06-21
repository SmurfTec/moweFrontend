import React, { useEffect, useRef } from 'react'

const ColorsPallete = (props) => {
    const colorInputRef = useRef(null);

    const handleChange = (e) => {
      const value = e.target.value
      console.log(value)
      props.currBoxBgColor(value)
    };

    useEffect(() => {
        if(props.active===2){
            colorInputRef.current.click();
        }
    }, [props.active])
  
    return (
      <div className='color_p_main flex items-center justify-center '>
        <input type="color" onChange={handleChange} ref={colorInputRef} style={{ display: 'none' }} />
      </div>
    );
}

export default ColorsPallete