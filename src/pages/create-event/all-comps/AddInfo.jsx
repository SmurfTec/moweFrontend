import React from 'react'

const AddInfo = () => {
  return (
    <div className='add_info_main px-6 py-4 bg-white w-full h-auto rounded-lg'>
        <p className='font-semibold text-xl mb-6'>
            Cuéntanos algunos detalles de tu boda!
        </p>
        <p className='mb-2'>
            ¿Cómo os llamáis? (Podrás cambiar las fuentes, tamaño <br />
            y colores más adelante) 
        </p>
        <textarea rows={2} className='p-2 w-full' placeholder='Enter Title'></textarea>

        <p className='mt-5'>Fecha y hora del evento</p>
        <div className='flex gap-9 mt-1'>
            <div>
                <p className='text-lg font-semibold mb-2'>Fecha:</p>
                <div className='date_picker py-1 gap-9 flex justify-between items-center px-3'>
                    <span>Pick a date</span>
                    <span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.04688 0.75C9.33984 0.75 9.61914 0.810547 9.88477 0.931641C10.1543 1.04883 10.3887 1.20898 10.5879 1.41211C10.791 1.61133 10.9512 1.8457 11.0684 2.11523C11.1895 2.38086 11.25 2.66016 11.25 2.95312V9.04688C11.25 9.33984 11.1895 9.62109 11.0684 9.89062C10.9512 10.1562 10.791 10.3906 10.5879 10.5938C10.3887 10.793 10.1543 10.9531 9.88477 11.0742C9.61914 11.1914 9.33984 11.25 9.04688 11.25H2.95312C2.66016 11.25 2.37891 11.1914 2.10938 11.0742C1.84375 10.9531 1.60938 10.793 1.40625 10.5938C1.20703 10.3906 1.04688 10.1562 0.925781 9.89062C0.808594 9.62109 0.75 9.33984 0.75 9.04688V2.95312C0.75 2.66016 0.808594 2.38086 0.925781 2.11523C1.04688 1.8457 1.20703 1.61133 1.40625 1.41211C1.60938 1.20898 1.84375 1.04883 2.10938 0.931641C2.37891 0.810547 2.66016 0.75 2.95312 0.75H9.04688ZM2.9707 1.5C2.77148 1.5 2.58203 1.54102 2.40234 1.62305C2.22266 1.70508 2.06641 1.81445 1.93359 1.95117C1.80078 2.08789 1.69531 2.24805 1.61719 2.43164C1.53906 2.61133 1.5 2.80078 1.5 3H10.5V2.9707C10.5 2.77539 10.459 2.58984 10.377 2.41406C10.2988 2.23437 10.1914 2.07813 10.0547 1.94531C9.92188 1.80859 9.76562 1.70117 9.58594 1.62305C9.41016 1.54102 9.22461 1.5 9.0293 1.5H2.9707ZM9.0293 10.5C9.22461 10.5 9.41016 10.4609 9.58594 10.3828C9.76562 10.3008 9.92188 10.1934 10.0547 10.0605C10.1914 9.92383 10.2988 9.76758 10.377 9.5918C10.459 9.41211 10.5 9.22461 10.5 9.0293V3.75H1.5V9.0293C1.5 9.22461 1.53906 9.41211 1.61719 9.5918C1.69922 9.76758 1.80664 9.92383 1.93945 10.0605C2.07617 10.1934 2.23242 10.3008 2.4082 10.3828C2.58789 10.4609 2.77539 10.5 2.9707 10.5H9.0293ZM3 6C3 5.89453 3.01953 5.79688 3.05859 5.70703C3.09766 5.61719 3.15039 5.53906 3.2168 5.47266C3.28711 5.40234 3.36719 5.34766 3.45703 5.30859C3.55078 5.26953 3.65039 5.25 3.75586 5.25C3.86133 5.25 3.95898 5.26953 4.04883 5.30859C4.13867 5.34766 4.2168 5.40039 4.2832 5.4668C4.34961 5.5332 4.40234 5.61133 4.44141 5.70117C4.48047 5.79102 4.5 5.88867 4.5 5.99414C4.5 6.09961 4.48047 6.19922 4.44141 6.29297C4.40234 6.38281 4.34766 6.46289 4.27734 6.5332C4.21094 6.59961 4.13281 6.65234 4.04297 6.69141C3.95312 6.73047 3.85547 6.75 3.75 6.75C3.64453 6.75 3.54492 6.73047 3.45117 6.69141C3.36133 6.65234 3.2832 6.59961 3.2168 6.5332C3.15039 6.4668 3.09766 6.38867 3.05859 6.29883C3.01953 6.20508 3 6.10547 3 6ZM5.25 6C5.25 5.89453 5.26953 5.79688 5.30859 5.70703C5.34766 5.61719 5.40039 5.53906 5.4668 5.47266C5.53711 5.40234 5.61719 5.34766 5.70703 5.30859C5.80078 5.26953 5.90039 5.25 6.00586 5.25C6.11133 5.25 6.20898 5.26953 6.29883 5.30859C6.38867 5.34766 6.4668 5.40039 6.5332 5.4668C6.59961 5.5332 6.65234 5.61133 6.69141 5.70117C6.73047 5.79102 6.75 5.88867 6.75 5.99414C6.75 6.09961 6.73047 6.19922 6.69141 6.29297C6.65234 6.38281 6.59766 6.46289 6.52734 6.5332C6.46094 6.59961 6.38281 6.65234 6.29297 6.69141C6.20312 6.73047 6.10547 6.75 6 6.75C5.89453 6.75 5.79492 6.73047 5.70117 6.69141C5.61133 6.65234 5.5332 6.59961 5.4668 6.5332C5.40039 6.4668 5.34766 6.38867 5.30859 6.29883C5.26953 6.20508 5.25 6.10547 5.25 6ZM9 5.99414C9 6.09961 8.98047 6.19922 8.94141 6.29297C8.90234 6.38281 8.84766 6.46289 8.77734 6.5332C8.71094 6.59961 8.63281 6.65234 8.54297 6.69141C8.45312 6.73047 8.35547 6.75 8.25 6.75C8.14453 6.75 8.04492 6.73047 7.95117 6.69141C7.86133 6.65234 7.7832 6.59961 7.7168 6.5332C7.65039 6.4668 7.59766 6.38867 7.55859 6.29883C7.51953 6.20508 7.5 6.10547 7.5 6C7.5 5.89453 7.51953 5.79688 7.55859 5.70703C7.59766 5.61719 7.65039 5.53906 7.7168 5.47266C7.78711 5.40234 7.86719 5.34766 7.95703 5.30859C8.05078 5.26953 8.15039 5.25 8.25586 5.25C8.36133 5.25 8.45898 5.26953 8.54883 5.30859C8.63867 5.34766 8.7168 5.40039 8.7832 5.4668C8.84961 5.5332 8.90234 5.61133 8.94141 5.70117C8.98047 5.79102 9 5.88867 9 5.99414ZM4.5 8.25C4.5 8.35547 4.48047 8.45312 4.44141 8.54297C4.40234 8.63281 4.34766 8.71289 4.27734 8.7832C4.21094 8.84961 4.13086 8.90234 4.03711 8.94141C3.94727 8.98047 3.84961 9 3.74414 9C3.63867 9 3.54102 8.98047 3.45117 8.94141C3.36133 8.90234 3.2832 8.84961 3.2168 8.7832C3.15039 8.7168 3.09766 8.63867 3.05859 8.54883C3.01953 8.45898 3 8.36133 3 8.25586C3 8.15039 3.01953 8.05273 3.05859 7.96289C3.09766 7.86914 3.15039 7.78906 3.2168 7.72266C3.28711 7.65234 3.36719 7.59766 3.45703 7.55859C3.54688 7.51953 3.64453 7.5 3.75 7.5C3.85547 7.5 3.95312 7.51953 4.04297 7.55859C4.13672 7.59766 4.2168 7.65039 4.2832 7.7168C4.34961 7.7832 4.40234 7.86328 4.44141 7.95703C4.48047 8.04688 4.5 8.14453 4.5 8.25ZM6.75 8.25C6.75 8.35547 6.73047 8.45312 6.69141 8.54297C6.65234 8.63281 6.59766 8.71289 6.52734 8.7832C6.46094 8.84961 6.38086 8.90234 6.28711 8.94141C6.19727 8.98047 6.09961 9 5.99414 9C5.88867 9 5.79102 8.98047 5.70117 8.94141C5.61133 8.90234 5.5332 8.84961 5.4668 8.7832C5.40039 8.7168 5.34766 8.63867 5.30859 8.54883C5.26953 8.45898 5.25 8.36133 5.25 8.25586C5.25 8.15039 5.26953 8.05273 5.30859 7.96289C5.34766 7.86914 5.40039 7.78906 5.4668 7.72266C5.53711 7.65234 5.61719 7.59766 5.70703 7.55859C5.79688 7.51953 5.89453 7.5 6 7.5C6.10547 7.5 6.20312 7.51953 6.29297 7.55859C6.38672 7.59766 6.4668 7.65039 6.5332 7.7168C6.59961 7.7832 6.65234 7.86328 6.69141 7.95703C6.73047 8.04688 6.75 8.14453 6.75 8.25Z" fill="black" fill-opacity="0.6063"/>
                        </svg>
                    </span>
                </div>
                {/* <input 
                    type="date" 
                    onChange={handleChange}
                    ref={inputDateRef} 
                    style={{display: 'none'}}/> */}
            </div>
            <div>
                <p className='text-lg font-semibold mb-1'>Hara:</p>
                <div className='time_picker py-1 flex justify-between items-center px-3'>
                   <span className='cursor-pointer px-5 py-1'>hour</span>
                   <span className='cursor-pointer px-5 py-1'>minute</span>
                   <span className='cursor-pointer px-5 py-1'>second</span>
                </div>
                {/* <input 
                    type="hours" 
                    onChange={handleChange}
                    ref={inputTimeRef} 
                    style={{display: 'none'}}/> */}
            </div>
        </div>
            <p className='text-sm text-gray-500 mt-9'>
                (Se podrán modificar los datos después)
            </p>
    </div>
  )
}

export default AddInfo