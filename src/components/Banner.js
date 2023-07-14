import { Header } from "./global/Header";
import { RiFacebookCircleLine } from 'react-icons/ri';
export const Banner = () => {
    return(
        <>
        <section className="banner-section overlay">
                
           
            <div className="container">
            <Header/>
                <div className="row align-items-centre full-screen">
                    <div className="col-xl-12 pl">
                        <div className="banner-heading">
                            <h2>
                                Hello,<br/>I'm Raquel Murillo a<br/>Product <span>Developer</span>
                            </h2>
                        </div>
                        <div className="banner-button mt-4 ">
                            <a href="#" className="px-btn btn-md">See who I'M</a>
                        </div>

                    </div>
                </div>
            </div>
            <div class="scroll-bottom go-to"><a href="#about">Scroll</a></div>
            <div className="social-icons">
                <RiFacebookCircleLine/>
                <RiFacebookCircleLine/>
                <RiFacebookCircleLine/>
                <RiFacebookCircleLine/>
            </div>
        </section>
        </>
    );
}