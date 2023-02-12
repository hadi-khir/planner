import {Stack, TextField} from "@mui/material";

const Menu = () => {

    return (
            <Stack
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <TextField multiline label={"Breakfast"} placeholder="Placeholder" fullWidth variant="standard"/>
                <TextField multiline label={"Lunch"} placeholder="Placeholder" fullWidth variant="standard"/>
                <TextField multiline label={"Dinner"} placeholder="Placeholder" fullWidth variant="standard"/>
            </Stack>
            )
}

export default Menu;