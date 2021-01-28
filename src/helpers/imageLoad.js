import React, { useState, useEffect } from 'react';

const ImageLoad = React.memo(({ src, placeholder, alt = "", ...restProps}) => {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(placeholder);

    useEffect(() => {
        // start loading original image
        const imageToLoad = new Image();
        imageToLoad.src = src;
        imageToLoad.onload = () => {
            // When image is loaded replace the src and set loading to false
            setLoading(false);
            updateSrc(src);
        }
    }, [src])


    return (
        <img
            src={currentSrc}
            style={{
                filter: loading ? "blur(15px)" : "blur(0)"
            }}
            alt={alt}
            {...restProps}
        />
    )
});

export default ImageLoad;
