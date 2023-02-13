import HydrationEntry from "./HydrationEntry";
import HydrationInput from "./HydrationInput";
import {useState} from "react";

const Hydration = () => {
    const [cups, setCups] = useState(0)

    console.log(cups);
    return (
            <>
                <HydrationEntry cups={cups} />
                <HydrationInput cups={cups} callback={setCups} />
            </>
            )
}

export default Hydration;