import React from 'react';
import {Typography, Paper, Container, Button, Divider} from '@mui/material';

export default function Undo(props) {

    const data = props.data;
    const update = props.update;

    return (
        <>
            <Divider sx={{
                my: 2
            }}/>
            <Button onClick={() => {
                data.undo()
                update()
            }} fullWidth
                    variant={"outlined"}>
                Undo
            </Button>
        </>
    )

}
