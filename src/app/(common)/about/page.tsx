import Image from 'next/image';
import React from 'react';
import myImg from '../../../asset/my_photo.png'
const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Image 
            src= {myImg}
            width={300}
            height={300}
            alt = "My Image"
            />
        </div>
    );
};

export default AboutPage;