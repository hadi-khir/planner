import {Stack} from "@mui/material";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";

// @ts-ignore
const HydrationEntry = ({cups}) => {

    const displayCups = () => {

        let icons = [];
        for (let i = 0; i < cups; i++) {
            icons.push(
                <div key={`hydration-grid-item-${i}`} className={"hydration-grid-item"}>
                    <LocalDrinkIcon key={`hydration-icon-${i}`} style={{"fontSize": "xxx-large"}}/>
                </div>
            );
        }

        return icons;
    }

    // @ts-ignore
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            direction="row"
            spacing={2}>
            <div className={"hydration-grid-container"}>
                {displayCups()}
            </div>
        </Stack>
    )
}

export default HydrationEntry;