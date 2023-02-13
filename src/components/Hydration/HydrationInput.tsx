import {Button, Stack} from "@mui/material";

// @ts-ignore
const HydrationInput = ({cups, callback}) => {

    const handleClick = () => {
        const value = cups + 1;
        callback(value)
    }

    return (
            <Stack style={{"paddingTop": "5%"}}
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing={2}>
                <Button
                    onClick={() => handleClick()}
                    variant="outlined">
                    +
                </Button >
            </Stack>
            )
}

export default HydrationInput;