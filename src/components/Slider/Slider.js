import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import './Slider.css'

const Slider = () => {

    const data = [
        {
            image: "https://cdn.tourradar.com/s3/tour/1500x800/102240_5e31724a90af2.jpg",
            caption: "London City Tour"
        },
        {
            image: "https://cdn.tourradar.com/s3/tour/1500x800/102240_5e31724a92250.jpg",
            caption: "Explore and Travel"
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
            caption: "Thailand City Tour"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
            caption: "Romania Tour"
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
            caption: "Scotland Valley"
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
            caption: "Smile and Happy"
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
            caption: "San Francisco Tour"
        }
    ];

    const captionStyle = {
        fontSize: '4em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <Carousel
            data={data}
            time={5000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="0"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="center"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "1000px",
                margin: "0 auto",
            }}
        />
    );
};

export default Slider;