import React from 'react'

export default function Footer() 
{
  function openWhatsAppChat() {
    const phoneNumber = 8546070100;
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${encodedPhoneNumber}`;
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isAndroid) {
      const intentUrl = `intent://send/${encodedPhoneNumber}#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end`;
      window.location.href = intentUrl;
  }else if(isIOS){
    const whatsappUrl = `https://wa.me/${encodedPhoneNumber}`
    window.open(whatsappUrl, "_blank")
  }
   else {
      window.open(whatsappWebUrl, '_blank');
  }
  }

  const linkedin =()=>{
    window.open('https://www.linkedin.com/in/avinash-singh-292577230/','_blank')
  }

  const twitter =()=>{
    window.open('https://twitter.com/Avinash65588482','_blank')
  }

  const github =()=>{
    window.open('https://github.com/the-avinash-singh','_blank')
  }
  return (
    <>
      <div className='bg-black w-100 bottom-0 text-white"  px-3' style={{opacity: .6}}>
        <div className='fs-6 pt-2'>
          Made by Avinash Singh
        </div>
        <div className='pb-5'>
          2022<sup>
            <i class="fa-regular fa-copyright fa-sm ms-1"></i>
            </sup>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            Some other projects created by me :
        </div>
            <div className='d-flex justify-content-center align-items-center mt-3 pb-5'>
          <ul className='me-4'>
            <li><a href='https://stellular-biscuit-e8c785.netlify.app/' target ="blank" className='text-decoration-none text-white'>Viemo clone</a></li>
            <li><a href='https://github.com/the-avinash-singh/Newswala.git' target ="blank" className='text-decoration-none text-white'>NewsWala</a></li>
            <li><a href='https://github.com/the-avinash-singh/cropper.git' target ="blank" className='text-decoration-none text-white'>Cropper</a></li>
          </ul>
          <ul>
            <li><a href='https://github.com/the-avinash-singh/deliverit.git' target ="blank" className='text-decoration-none text-white'>DeliverIt</a></li>
            <li><a href='https://github.com/the-avinash-singh/TextUtils.git' target ="blank" className='text-decoration-none text-white'>TextUtils</a></li>
            <li><a href='https://github.com/the-avinash-singh/Excel-to-table.git' target ="blank" className='text-decoration-none text-white'>Excel-to-table</a></li>
          </ul>
            </div>
            <div className='d-flex justify-content-end align-items-end mt-3 pb-5'>
              <i className="fa-brands fa-whatsapp fa-xl me-3" style={{color:"#ffffff"}} onClick={openWhatsAppChat}></i>
              <i className="fa-brands fa-linkedin fa-xl me-3" style={{color:"#ffffff"}} onClick={linkedin}></i>
              <i className="fa-brands fa-x-twitter fa-xl me-3" style={{color:"#ffffff"}} onClick={twitter}></i>
              <i className="fa-brands fa-github fa-xl me-3" style={{color:"#ffffff"}} onClick={github}></i>
            </div>
      </div>
      
    </>
  )
}
