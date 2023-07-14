import React from 'react';
import { Banner } from './Banner';
import { About } from './About';
import { Services } from './Services';
import { Skillsection } from './Skillsection';
import { Testimonial } from './Testimonial';
import { Articles } from './Articles';
import { Contact } from './Contact';
import { Footer } from './global/Footer';
import { Props } from './Props';
export const Landing = () => {
    return (
        <>
            <Banner/>
            <About/>
            <Services/>
            <Skillsection/>
            <Props/>
            <Testimonial/>
            <Articles/>
            <Contact/>
            <Footer/>
        </>
    );
}