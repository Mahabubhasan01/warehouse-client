import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <p>Name : {user?.displayName}</p>
            <p>Email : {user?.email}</p>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Profile;