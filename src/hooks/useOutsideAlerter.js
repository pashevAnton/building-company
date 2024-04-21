import {useEffect, useRef, useState} from 'react'

export default function useOutsideAlerter (initialState) {

    const [isShow, setIsShow] = useState(initialState)

    const ref = useRef(null)


    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(true);
        } else {
            setIsShow(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref]);

    return {ref, isShow, setIsShow}
}