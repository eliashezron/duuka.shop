import * as React from "react";
import { Admin, ListGuesser, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "../components/userList";
import { PostList } from "../components/posts";
import { PostEdit } from "../components/postEdit";
import { PostCreate } from "../components/postCreate";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const AdminScreen = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
        <Resource name="users" list={UserList} />
    </Admin>
)
export default AdminScreen;