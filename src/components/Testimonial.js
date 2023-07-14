
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillStar } from 'react-icons/ai';

export const Testimonial = () => {
    return (
        <>
            <section className='section testimonial-section bg-black'>
                <div className='container'>
                    <Carousel>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="margin">
                                    <div className="testimonial-box">
                                        <div className="testimonial-img">
                                            <img src="images/team-1.jpg" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>  I design and develop services for customers of all sizes,
                                                specializing in creating stylish, modern websites, web services
                                                and online stores.</p>
                                            <h6>Nancy Byers</h6>
                                            <div className="rating-value">
                                            <span><AiFillStar/></span>
                                                <span>5.0</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            {/* ------- */}
                            <div className="col-lg-6">
                                <div className="margin">
                                    <div className="testimonial-box">
                                        <div className="testimonial-img">
                                            <img src="images/team-1.jpg" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>  I design and develop services for customers of all sizes,
                                                specializing in creating stylish, modern websites, web services
                                                and online stores.</p>
                                            <h6>Nancy Byers</h6>
                                            <div className="rating-value">
                                                <span><AiFillStar/></span>
                                                <span> 5.0</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* ===== second */}
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="margin">
                                    <div className="testimonial-box">
                                        <div className="testimonial-img">
                                            <img src="images/team-1.jpg" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>  I design and develop services for customers of all sizes,
                                                specializing in creating stylish, modern websites, web services
                                                and online stores.</p>
                                            <h6>Nancy Byers</h6>
                                            <div className="rating-value">
                                            <span><AiFillStar/></span>
                                                <span>5.0</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            {/* ------- */}
                            <div className="col-lg-6">
                                <div className="margin">
                                    <div className="testimonial-box">
                                        <div className="testimonial-img">
                                            <img src="images/team-1.jpg" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>  I design and develop services for customers of all sizes,
                                                specializing in creating stylish, modern websites, web services
                                                and online stores.</p>
                                            <h6>Nancy Byers</h6>
                                            <div className="rating-value">
                                                <span><AiFillStar/></span>
                                                <span> 5.0</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </Carousel>


                </div>
            </section>
        </>
    );
}