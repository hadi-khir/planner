import {Stack, TextField} from "@mui/material";
import {useEffect, useState} from "react";

const CATEGORIES = {
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner'
}

const Menu = () => {
    const [breakfast, setBreakfast] = useState('');
    const [lunch, setLunch] = useState('');
    const [dinner, setDinner] = useState('');

    useEffect(() => {

        const lsBreakfast = localStorage.getItem(CATEGORIES.breakfast);
        const lsLunch = localStorage.getItem(CATEGORIES.lunch);
        const lsDinner = localStorage.getItem(CATEGORIES.dinner);

        // @ts-ignore
        setBreakfast(lsBreakfast);
        // @ts-ignore
        setLunch(lsLunch)
        // @ts-ignore
        setDinner(lsDinner)
    })
    const handleUpdate = (event: object, category: string, callback: Function) => {

        // @ts-ignore
        const input = event.target.value;
        callback(input);

        localStorage.setItem(category, input);
    }

    return (
            <Stack
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <TextField
                    value={breakfast}
                    multiline
                    label={"Breakfast"}
                    placeholder="Placeholder"
                    fullWidth
                    onChange={(e) => handleUpdate(e, CATEGORIES.breakfast, setBreakfast)}
                    variant="standard"/>
                <TextField
                    value={lunch}
                    multiline
                    label={"Lunch"}
                    placeholder="Placeholder"
                    fullWidth
                    onChange={(e) => handleUpdate(e, CATEGORIES.lunch, setLunch)}
                    variant="standard"/>
                <TextField
                    value={dinner}
                    multiline
                    label={"Dinner"}
                    placeholder="Placeholder"
                    fullWidth
                    onChange={(e) => handleUpdate(e, CATEGORIES.dinner, setDinner)}
                    variant="standard"/>
            </Stack>
            )
}

export default Menu;