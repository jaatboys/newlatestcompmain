import React from 'react';
import UserInfo from './UserInfo';
import banner from '../../assets/cover.png';
import Ranking from './Ranking';
import MyQuestions from './MyQuestions';

const Profile = () => {
    return (
        <div>
            {/* banner */}
            <img src={banner} alt="banner" className='w-full' />
            <div className='max-w-[1440px] mx-auto text-white'>
                <div className='mx-5'>
                    <UserInfo />
                    <Ranking />
                    <MyQuestions />
                </div>
            </div>
        </div>
    );
};

export default Profile;