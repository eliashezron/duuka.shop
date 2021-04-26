import * as React from "react";
import { Admin, ListGuesser, Resource, EditGuesser } from 'react-admin';
// import simpleRestProvider from 'ra-data-simple-rest';
// import restProvider from 'ra-data-simple-rest'
import { UserList } from "../components/userList";
import { PostList } from "../components/posts";
import { PostEdit } from "../components/postEdit";
import { PostCreate } from "../components/postCreate";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import DashBoard from "../components/DashBoard";
import authProvider from './AuthProvider'
import LoginPage from './Login'
import MyLoginPage from './Loginpage'
import dataProvider from '../dataProvider'

const AdminScreen = () => (
    <Admin authProvider={authProvider} dashboard={DashBoard} dataProvider={dataProvider} loginPage={MyLoginPage}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
)
export default AdminScreen;