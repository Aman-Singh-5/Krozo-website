import { TfiFacebook } from 'react-icons/tfi';
import { TfiTwitterAlt } from 'react-icons/tfi';
import { BsInstagram } from 'react-icons/bs';
import { TfiLinkedin } from 'react-icons/tfi';
import { TfiPinterest} from 'react-icons/tfi';
export const Footer = () => {
    return(
        <>
            <footer className='footer-section'>
                <div className='container'>
                    <div className='row align-items-centre'>
                        <div className='col-lg-6 my-2'>
                            <div className='footer-left'>
                                <TfiFacebook/>
                                <TfiTwitterAlt/>
                                <BsInstagram/>
                                <TfiLinkedin/>
                                <TfiPinterest/>
                            </div>
                        </div>
                        <div className='col-lg-6 my-2'>
                            <div className='footer-right'>
                                <p>© 2023 copyright ib-themes all right reserved</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}