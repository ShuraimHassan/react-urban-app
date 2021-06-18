import React from 'react';


const MidSection = () => {

  return (
    <>

      <div className="carousel ">
        <div className="carousel-inner">
          <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
          <div className="carousel-item">
            <img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-9/125165469_217637760008413_8428815266113228454_n.png?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=wmcT_IQ6Mw4AX86JZys&_nc_ht=scontent.fkhi2-2.fna&oh=6e6c65b8d43061ac840ea4142c5f9de9&oe=60D2C3F6" alt='get service' />
          </div>
          {/* <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
          <div className="carousel-item">
            <img src="https://cdna4.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000//auto_image/compress/https://s3.amazonaws.com/zcom-media/sites/a0i0L00000VJ0SJQA1/media/mediamanager/field-services-banner-01-v2-01.jpg" alt='' />
          </div>
          <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
          <div className="carousel-item">
            <img src="https://1-content-s3-estateweb.s3.amazonaws.com/assets/8707/contentimages/banner.png" alt=''/>
          </div> */}

          {/* <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
          <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
          <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
          <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
          <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
          <ol className="carousel-indicators">
            <li>
              <label htmlFor="carousel-1" className="carousel-bullet">•</label>
            </li>
            <li>
              <label htmlFor="carousel-2" className="carousel-bullet">•</label>
            </li>
            <li>
              <label htmlFor="carousel-3" className="carousel-bullet">•</label>
            </li>
          </ol> */}
        </div>
      </div>
      <div className='text-center text-gray-600 my-12'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor explicabo corporis est suscipit ab beatae!
      </div>


    </>
  );
}

export default MidSection;
