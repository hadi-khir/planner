import {Button, Stack} from "@mui/material";

const HydrationInput = () => {

    return (
            <Stack style={{"paddingTop": "5%"}}
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing={2}>
                <Button variant="outlined">+</Button >
            </Stack>
            )
}

export default HydrationInput;