import React from "react";
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';
import HoaxSubmit from '../components/HoaxSubmit';
import { useSelector } from 'react-redux';
import HoaxFeed from '../components/HoaxFeed';
const Users = () => {
    const { isLoggedIn } = useSelector(store => ({ isLoggedIn: store.isLoggedIn }));
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {isLoggedIn && (
                        <div className="mb-1">
                            <HoaxSubmit />
                        </div>
                    )}
                    <HoaxFeed />
                </div>
                <div className="col">
                    <UserList />
                </div>
            </div>
        </div>
    );
};

export default Users;
