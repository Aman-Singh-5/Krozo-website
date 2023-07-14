import { Footer } from "../global/Footer";
import { Header } from "../global/Header";

export const Aboutme = () => {
    return(
        <>
        
        <section className="section about-section about-left-section">
        
            <div className="container">
            <Header/>
                <div className="row align-items-centre justify-content-centre">
                    <div className="col-lg-6 my-3">
                        <div className="about-section-image">
                            <img src="images/about-5.jpg"/>
                        </div>
                    </div>
                    <div className="col-lg-6 my-3">
                        <div className="about-content">
                            <h3>Raquel Murillo</h3>
                            <h5>A Lead <span class="color-theme">Product Designer</span> based in <span class="color-theme">Australia</span></h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>

                            <div className="row about-list">
                                <div className="col-lg-6">
                                    <div className="media">
                                    <label>Birthday</label>
                                    <p>4th april 1991</p>
                                    </div>
                                    <div className="media">
                                    <label>Age</label>
                                    <p>22 Yr</p>
                                    </div>
                                    <div className="media">
                                    <label>Residence</label>
                                    <p>Canada</p>
                                    </div>
                                    <div className="media">
                                    <label>Address</label>
                                    <p>California, USA</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="media">
                                    <label>E-mail</label>
                                    <p>info@domain.com</p>
                                    </div>
                                    <div className="media">
                                    <label>Phone</label>
                                    <p>820-885-3321</p>
                                    </div>
                                    <div className="media">
                                    <label>Skype</label>
                                    <p>skype.0404</p>
                                    </div>
                                    <div className="media">
                                    <label>Freelance</label>
                                    <p>Available</p>
                                    </div>
                                </div>
                                <div className="btn-bar">
                                <a class="px-btn px-btn-theme" href="images/resume.png" download="">Download CV</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
           
        </section>
        </>
    );

}