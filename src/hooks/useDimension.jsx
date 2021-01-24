import { useEffect, useState } from 'react';

export default function useDimension( initialState )  {
    const dimension = () => {
        if ( initialState === "width" ) return window.innerWidth;
        if ( initialState === "height" ) return window.innerHeight;
    }
    const [value, setValue] = useState(dimension());
    useEffect(() => {
        const handleResize = () => setValue(dimension());
        window.addEventListener('resize', handleResize);
        return () => window.addEventListener('resize', handleResize);
        // eslint-disable-next-line
    }, [value]);

    return [value];
}
