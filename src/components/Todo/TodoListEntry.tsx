import {Button, Stack, TextField} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import React, {FunctionComponent} from "react";

const TodoListEntry: FunctionComponent<any> = ({entries, handleChecked}) => {

    const displayIcon = (entry: { checked: any; }, index: number) => {

        if (entry.checked) {
            return <TaskAltIcon key={`stack-icon-item-${index}`} style={{"fontSize": "xxx-large"}}/>
        } else {
            return <RadioButtonUncheckedIcon key={`stack-icon-item-${index}-checked`} style={{"fontSize": "xxx-large"}}/>
        }
    }

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
                            key={`stack-button-item-${index}`}
                            onClick={() => handleChecked(entry)}>
                            {displayIcon(entry, index)}
                        </Button>
                        <TextField style={entry.checked ? {
                            textDecoration: 'line-through'
                        } : {}} key={`stack-text-field-item-${index}`} value={entry.text} fullWidth disabled multiline/>
                    </Stack>
                )
            })}
        </Stack>
    )
}

export default TodoListEntry;
