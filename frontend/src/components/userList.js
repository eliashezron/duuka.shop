import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton, SimpleList } from 'react-admin';
import {makeStyles} from '@material-ui/core/styles'

export const UserList = props => {
   
    return(
    <List {...props}>
            <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <EmailField source="email" />
            <TextField source="telephoneNumber" />
            </Datagrid>
    </List>
    )
};