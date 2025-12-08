import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Image 
            src="https://i.postimg.cc/hGDMGdxg/my-passport-photo.png"
            width={300}
            height={300}
            alt = "My Image"
            />
        </div>
    );
};

export default AboutPage;