import React from 'react';
import profileImage from '../../assets/profile.png';
import friends from '../../assets/friends.png';
import { FaEllipsisH, FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaReact, FaTwitter } from "react-icons/fa";

const UserInfo = () => {
    return (
        <section className='relative mb-10 w-full '>
            <div className=' mdd:flex justify-between gap-x-5'>
                <div>
                    <img src={profileImage} alt="profileImage" className='absolute md:-top-28 md:w-auto md:h-auto w-24 h-32 -top-10' />
                    <div className='md:ml-52 ml-[6.25rem] md:mt-2 mt-1'>
                        <h1 className='md:text-2xl text-sm font-bold'>Chris Taco</h1>
                        <div className='flex gap-x-2 md:mt-3 mt-1'>
                            <p className='text-[#9EB2D2] md:text-base text-[0.625rem]'>@christaco @USA Joined 12th September 2009</p>
                        </div>
                        <p className='text-[#9EB2D2] text-[0.625rem] md:mt-2 mt-1'>UI/UX Designer</p>
                        <div className='flex gap-x-2 md:mt-2 mt-1'>
                            <p className='text-[#9EB2D2] md:text-base text-[0.625rem]'>
                                Rank:
                                <span className='text-[#01B6FF] ml-1'>345</span>
                            </p>
                            <p className='text-[#9EB2D2] md:text-base text-[0.625rem]'>
                                Followers:
                                <span className='text-[#01B6FF] ml-1'>2345</span>
                            </p>
                            <p className='text-[#9EB2D2] md:text-base text-[0.625rem]'>
                                Following:
                                <span className='text-[#01B6FF] ml-1'>34</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='h-10 flex items-center gap-x-2 md:mt-7 mt-2 md:ml-0 ml-[6.25rem]'>
                    <p className='text-[#9EB2D2] md:text-base text-[0.625rem] '>Chris follows 50 similar <br />accounts to you</p>
                    <div className='flex justify-end w-fit  relative left-10'>
                        

                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-10   top-0  rounded-full relative   border-[#333F50]' />
                       
                        

                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-10   top-0 -left-5 rounded-full z-10 relative border-2 border-[#333F50]' />
                       
                        

                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-10   top-0  rounded-full -left-10 z-20 relative border-2 border-[#333F50]' />
                       
                       
                    </div>

                    <button className='bg-[#2B6DED] md:w-20 md:h-10 w-12 h-5 md:rounded-md rounded-sm md:text-base text-xs px-2 md:py-1 py-0'>Follow</button>
                    <div className='md:w-10 md:h-10 w-5 h-5 flex items-center justify-center bg-[#333F50] rounded-full md:p-2 p-1'>
                        <FaEnvelope />
                    </div>
                    <div className='md:w-10 md:h-10 w-5 h-5 flex items-center justify-center bg-[#333F50] rounded-full md:p-2 p-1'>
                        <FaEllipsisH />
                    </div>
                </div>
            </div>
            <div className='flex gap-x-2 md:mt-10 mt-7'>
                <div className='md:w-10 md:h-10 w-7 h-7 flex items-center justify-center bg-[#333F50] rounded-full p-2'>
                    <FaLinkedinIn />
                </div>
                <div className='md:w-10 md:h-10 w-7 h-7 flex items-center justify-center bg-[#333F50] rounded-full p-2'>
                    <FaTwitter />
                </div>
                <div className='md:w-10 md:h-10 w-7 h-7 flex items-center justify-center bg-[#333F50] rounded-full p-2'>
                    <FaFacebookF />
                </div>
                <div className='md:w-10 md:h-10 w-7 h-7 flex items-center justify-center bg-[#333F50] rounded-full p-2'>
                    <FaInstagram />
                </div >
                <div className='md:w-10 md:h-10 w-7 h-7 flex items-center justify-center bg-[#333F50] rounded-full p-2'>
                    <FaGithub />
                </div >
            </div>
            <div className='flex gap-x-2 mt-3'>
                <div className=' flex items-center justify-center bg-[#333F50] rounded-full md:px-5 py-1 px-3'>
                    <FaReact className='text-[#00D8FF]' />
                    <span className='text-[#9EB2D2] md:text-base text-xs md:ml-2 ml-1'>React</span>
                </div>
                <div className=' flex items-center justify-center bg-[#333F50] rounded-full md:px-5 py-1 px-3'>
                    <FaReact className='text-[#00D8FF]' />
                    <span className='text-[#9EB2D2] md:text-base text-xs md:ml-2 ml-1'>React</span>
                </div>
                <div className=' flex items-center justify-center bg-[#333F50] rounded-full md:px-5 py-1 px-3'>
                    <FaReact className='text-[#00D8FF]' />
                    <span className='text-[#9EB2D2] md:text-base text-xs md:ml-2 ml-1'>React</span>
                </div>
            </div>
        </section>
    );
};

export default UserInfo;