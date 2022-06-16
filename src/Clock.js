import { useEffect, useRef, useState } from "react";

let timerId = null;

export default function Clock() {

    const [clock, setClock] = useState(new Date());

    const paragraphRef = useRef(null)

    useEffect(() => {
        timerId = setInterval(() => {
            setClock(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, []);

    const onClickParagraph = () => {
        console.log(paragraphRef);
        paragraphRef.current.className = 'clock-timer';
        console.log(paragraphRef.current.className)
    }

    return(
        <>
            <p ref={paragraphRef} onClick={onClickParagraph}>It is {clock.toLocaleTimeString()}</p>
        </>
    )    
}