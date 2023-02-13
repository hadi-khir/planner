import {Stack} from "@mui/material";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";

// @ts-ignore
const HydrationEntry = ({cups}) => {

    const displayCups = () => {

        let icons = [];
        for (let i = 0; i < cups; i++) {
            icons.push(<LocalDrinkIcon style={{"fontSize": "xxx-large"}} />);
        }

        return icons;
    }

    return (
            <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing={2}>
                {displayCups()}
            </Stack>
            )
}

export default HydrationEntry;