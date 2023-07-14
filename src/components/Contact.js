import { TfiMap } from 'react-icons/tfi';

export const Contact = () => {
    return(
        <>
            <section className="section contact-section about-left-section">
                <div className="container">
                    <div className="row align-items-centre">
                        <div className="col-lg-6 my-3">
                            <div className="contact-form">
                                <div className="skill-title">
                                    <h4>Contact Us</h4>
                                </div>
                                <form className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6 margin-bot">
                                        <input type="text" class="form-control" placeholder="name" name="name"/>
                                        </div>
                                        <div className="col-md-6 margin-bot">
                                        <input type="text" class="form-control" placeholder="email" name="name"/>
                                        </div>
                                        <div className="col-12 margin-bot">
                                        <input type="text" class="form-control" placeholder="subject" name="name"/>
                                        </div>
                                        <div className="col-12 margin-bot">
                                        <textarea rows="4" class="form-control" placeholder="Type comment" name="comment"></textarea>
                                        </div>
                                        <div className="col-12 margin-bot">
                                        <div class="btn-bar">
                                            <button class="px-btn px-btn-theme" fdprocessedid="1nz68f">Send your message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 my-3 ml-auto">
                            <div className="contact-info">
                                <div className="skill-title">
                                    <h4>Get in touch</h4>
                                    <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                                </div>
                                <div className="media">
                                    <div className="icon">
                                    <TfiMap/>
                                    </div>
                                    <span class="media-body">123 Stree New York City , <br/>United States Of America <br/>NY 750065.</span>
                                </div>
                                <div className="media">
                                    <div className="icon">
                                    <TfiMap/>
                                    </div>
                                    <span class="media-body">123 Stree New York City , <br/>United States Of America <br/>NY 750065.</span>
                                </div>
                                <div className="media">
                                    <div className="icon">
                                    <TfiMap/>
                                    </div>
                                    <span class="media-body">123 Stree New York City , <br/>United States Of America <br/>NY 750065.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}