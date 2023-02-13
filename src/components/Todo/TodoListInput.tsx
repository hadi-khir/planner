import {Button, Stack, TextField} from "@mui/material";
import React, {forwardRef, FunctionComponent} from "react";

const TodoListInput: FunctionComponent<any> = forwardRef(({entriesCallback, handleAdd}, inputRef) => {

    return (
            <Stack style={{"paddingTop": "5%"}}
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing={2}>
                <TextField inputRef={inputRef} multiline fullWidth variant="standard" onChange={(e) => entriesCallback(e.target.value)}/>
                <Button variant="outlined" onClick={() => handleAdd()}>+</Button >
            </Stack>
            )
});

export default TodoListInput;