import React from 'react';

const EventImage = (props) => {
    return (
        <div className={props.name}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.29 28.41"><defs></defs><title>crown2</title><path d="M24.81,8.58,36.15,23l.78,1,.79-1,10.1-12.78L45.5,34.38H4.5L2.19,11.07l9.36,12,.77,1,.79-1L24.81,8.58M49.14,7,36.94,22.42,24.82,7,12.34,22.42.86,7.74,3.59,35.38H46.41L49.14,7Z" transform="translate(-0.86 -6.97)"/><circle cx="24.14" cy="21" r="3"/></svg>
        </div>
        
    );
};

export default EventImage;

/*
const louisCrown2 = () => {
    return(
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.29 28.41"><defs></defs><title>crown2</title><path class="cls-1" d="M24.81,8.58,36.15,23l.78,1,.79-1,10.1-12.78L45.5,34.38H4.5L2.19,11.07l9.36,12,.77,1,.79-1L24.81,8.58M49.14,7,36.94,22.42,24.82,7,12.34,22.42.86,7.74,3.59,35.38H46.41L49.14,7Z" transform="translate(-0.86 -6.97)"/><circle class="cls-1" cx="24.14" cy="21" r="3"/></svg>
    )
}

// old version of Louis logo
const louisOld = (props) => {
    return(
        <div className={props.name}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.29 27.15"><defs></defs><title>crown</title><path class="cls-1" d="M24.79,15.33,35,27.77l1.93,2.35,1.93-2.34,7-8.43L44.15,36.08H5.84L4.2,20.19l6.2,7.58,1.9,2.32,1.94-2.29L24.79,15.33m24.35-3.91L36.94,26.18,24.82,11.42,12.34,26.18.86,12.15,3.59,38.58H46.41l2.73-27.16Z" transform="translate(-0.86 -11.42)"/></svg>
        </div>
    )
}
*/