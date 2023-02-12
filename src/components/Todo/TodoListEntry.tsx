import {Button, Stack, TextField} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const TodoListEntry: React.FunctionComponent<any> = ({entries}) => {

    return (
        <Stack spacing={2}>
            {entries.map((entry: any, index: any) => {
                return (
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={1}
                        key={`stack-item-${index}`}>
                        <Button
                            key={`stack-button-item-${index}`}>
                            <TaskAltIcon key={`stack-icon-item-${index}`} style={{"fontSize": "xxx-large"}}/>
                        </Button>
                        <TextField key={`stack-text-field-item-${index}`} value={entry} fullWidth disabled multiline/>
                    </Stack>
                )
            })}
        </Stack>
    )
}

export default TodoListEntry;
