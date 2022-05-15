import React from 'react';
//import banner image
import BannerImg from '../../Images/hero-b.png';
const BannerHome = () => {
    return (
        <section className='container my-lg-5'>
            <div className='row'>
                {/* banner left part text */}
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h1 className='display-1 fw-bold'>Learn Without <br className='d-none d-lg-block' /> Limits</h1>
                        <p>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                        <button className='btn btn-primary px-5 py-3 me-2'>Explore Courses</button>
                        <button className='btn btn-outline-primary px-5 py-3'>Try Demo</button>
                    </div>
                </div>
                {/* banner right part images */}
                <div className="col-md-6 text-end pe-5">
                    <img className='img-fluid' src={BannerImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default BannerHome;