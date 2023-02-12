import {Stack} from "@mui/material";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";

const HydrationEntry = () => {

    return (
            <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing={2}>
                <LocalDrinkIcon style={{"fontSize": "xxx-large"}} />
                <LocalDrinkIcon style={{"fontSize": "xxx-large"}} />
            </Stack>
            )
}

export default HydrationEntry;