import { useEffect, useState } from "react";


const Clock = () => {
    const [date, setDate] = useState(new Date());


    useEffect(() => {
        const animationId = requestAnimationFrame(() => setDate(new Date()));

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [date]);

    return (
        <>
            <span className="timer__name"><h3> Time </h3></span>
            <div>{date?.toLocaleTimeString()} </div>
        </>
    );
}

export default Clock
