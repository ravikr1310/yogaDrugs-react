import React from 'react';

class Banner extends React.Component{
    render() {
        return (
            <section class="hero d-flex flex-column justify-content-center align-items-center" id="home">
        
                <div class="bg-overlay"></div>
        
                <div class="container">
                    <div class="row">
        
                        <div class="col-lg-8 col-md-10 mx-auto col-12">
                            <div class="hero-text text-center">
        
                                <h6 class="home-subtitle" data-aos="fade-up" data-aos-delay="300">new way to build a healthy
                                    lifestyle!</h6>
        
                                <h1 class="text-white" data-aos="fade-up" data-aos-delay="500">Upgrade your body at Yoga Drugs
                                </h1>
        
                                <a href="#feature" class="btn custom-btn mt-3" data-aos="fade-up" data-aos-delay="600">Get
                                    started</a>
        
                                <a href="#about" class="btn custom-btn bordered mt-3" data-aos="fade-up"
                                    data-aos-delay="700">learn more</a>
        
                            </div>
                        </div>
        
                    </div>
                </div>
            </section> 
        )
    }
}

export default Banner;