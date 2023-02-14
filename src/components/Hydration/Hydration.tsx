import HydrationEntry from "./HydrationEntry";
import HydrationInput from "./HydrationInput";
import {useEffect, useState} from "react";

const Hydration = () => {
    const [cups, setCups] = useState(0)

    useEffect(() => {

        const lsCups = localStorage.getItem("hydration");
        // @ts-ignore
        setCups(lsCups);
    }, []);

    return (
            <>
                <HydrationEntry cups={cups} />
                <HydrationInput cups={cups} callback={setCups} />
            </>
            )
}

export default Hydration;