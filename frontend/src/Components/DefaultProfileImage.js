import React from 'react';
import defaultPic from '../logo/profile.png'

const DefaultProfileImage = props => {

    const {image, tempImage} = props;

    let imageSource = defaultPic;
    if(image) {
        imageSource = image;
    }

    return <img alt={`Profile`} src={tempImage || imageSource} {...props}/>;
};

export default DefaultProfileImage;