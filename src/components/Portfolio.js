import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';
export function Card() {
    return (
        <>

            <div className='col-lg-4 col-sm-6'>
                <div className='portfolio-box'>
                    <div className='portfolio-content'>
                        <div class="portfolio-info">
                            <h5><a href="#" target="_blank" rel="noopener noreferrer">Motion Graphy</a></h5>
                            <span>Android App</span>
                        </div>
                        <img src={"images/1.jpg"} alt="Shoot" role="button" />
                    </div>
                </div>
            </div>
        </>
    );
}




export const Portfolio = () => {
    return (
        <>
            <section className="section portfolio-section bg-gray">
                <div className="container">
                    <div className="row justify-content-centre section-title text-center">
                        <div className="col-lg-7">
                            <h3>My Portfolio</h3>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                        </div>
                    </div>
                    {/* ================ */}
                    <Tabs>
                        <div className='container'>
                            <div className='row justify-content-centre'>
                                <div className='col-lg-7'>

                                    <TabList>
                                        <Tab>All</Tab>
                                        <Tab>Branding</Tab>
                                        <Tab>Photography</Tab>
                                        <Tab>Fashion</Tab>
                                        <Tab>Product</Tab>
                                    </TabList>
                                </div>
                            </div>

                            <TabPanel>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-sm-6'>
                                            <div className='portfolio-box'>
                                                <div className='portfolio-content'>
                                                    <div class="portfolio-info">
                                                        <h5><a href="#" target="_blank" rel="noopener noreferrer">Motion Graphy</a></h5>
                                                        <span>Android App</span>
                                                    </div>
                                                    <img src={"images/1.jpg"} alt="Shoot" role="button" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-sm-6'>
                                            <div className='portfolio-box'>
                                                <div className='portfolio-content'>
                                                    <div class="portfolio-info">
                                                        <h5><a href="#" target="_blank" rel="noopener noreferrer">Motion Graphy</a></h5>
                                                        <span>Android App</span>
                                                    </div>
                                                    <img src={"images/1.jpg"} alt="Shoot" role="button" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-sm-6'>
                                            <div className='portfolio-box'>
                                                <div className='portfolio-content'>
                                                    <div class="portfolio-info">
                                                        <h5><a href="#" target="_blank" rel="noopener noreferrer">Motion Graphy</a></h5>
                                                        <span>Android App</span>
                                                    </div>
                                                    <img src={"images/1.jpg"} alt="Shoot" role="button" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-sm-6'>
                                            <div className='portfolio-box'>
                                                <div className='portfolio-content'>
                                                    <div class="portfolio-info">
                                                        <h5><a href="#" target="_blank" rel="noopener noreferrer">Motion Graphy</a></h5>
                                                        <span>Android App</span>
                                                    </div>
                                                    <img src={"images/1.jpg"} alt="Shoot" role="button" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-sm-6'>
                                            <div className='portfolio-box'>
                                                <div className='portfolio-content'>
                                                    <div class="portfolio-info">
                                                        <h5><a href="#" target="_blank" rel="noopener noreferrer">Motion Graphy</a></h5>
                                                        <span>Android App</span>
                                                    </div>
                                                    <img src={"images/1.jpg"} alt="Shoot" role="button" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-sm-6'>
                                            <div className='portfolio-box'>
                                                <div className='portfolio-content'>
                                                    <div class="portfolio-info">
                                                        <h5><a href="#" target="_blank" rel="noopener noreferrer">Motion Graphy</a></h5>
                                                        <span>Android App</span>
                                                    </div>
                                                    <img src={"images/1.jpg"} alt="Shoot" role="button" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </TabPanel>
                            <TabPanel>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-sm-6'>
                                            <div className='portfolio-box'>
                                                <div className='portfolio-content'>
                                                    <div class="portfolio-info">
                                                        <h5><a href="#" target="_blank" rel="noopener noreferrer">Motion Graphy</a></h5>
                                                        <span>Android App</span>
                                                    </div>
                                                    <img src={"images/1.jpg"} alt="Shoot" role="button" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-sm-6'>
                                            <div className='portfolio-box'>
                                                <div className='portfolio-content'>
                                                    <div class="portfolio-info">
                                                        <h5><a href="#" target="_blank" rel="noopener noreferrer">Motion Graphy</a></h5>
                                                        <span>Android App</span>
                                                    </div>
                                                    <img src={"images/1.jpg"} alt="Shoot" role="button" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-sm-6'>
                                            <div className='portfolio-box'>
                                                <div className='portfolio-content'>
                                                    <div class="portfolio-info">
                                                        <h5><a href="#" target="_blank" rel="noopener noreferrer">Motion Graphy</a></h5>
                                                        <span>Android App</span>
                                                    </div>
                                                    <img src={"images/1.jpg"} alt="Shoot" role="button" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>




                        </div>
                    </Tabs>
                    {/* ==================== */}
                </div>
            </section>
        </>
    );
}