// import React, { useState } from 'react';
// import { TiTick } from "react-icons/ti";
// import { RxCross2 } from "react-icons/rx";
// import { SiJava } from "react-icons/si";
// import { FaChevronCircleLeft } from "react-icons/fa";
// import ProgressBar from "@ramonak/react-progress-bar";
// import './progressBarCss.css'
// import QuestionHeader from './QuestionHeader';

// import Sidebar from './Sidebar';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import QuizCard from './QuizCard';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         // marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//         backgroundColor: '#1E2736',
//         padding: '0px',
//         borderRadius: '13px'

//     },
// };

// export const Question = () => {
//     const [quizAnsCss, setQuizAnsCss] = useState('')
//     // console.log(quizAnsCss)
//     const [open, setOpen] = useState(false)

//     // modal function 

//     let subtitle;
//     const [modalIsOpen, setIsOpen] = React.useState(false);

//     function openModal() {
//         setIsOpen(true);
//     }

//     function afterOpenModal() {
//         // references are now sync'd and can be accessed.
//         subtitle.style.color = '#f00';
//     }

//     function closeModal() {
//         setIsOpen(false);
//     }

//     return (
//         <div className='max-w-[1440px] mx-auto text-white font-Poppins min-h-screen relative '>

//             <div className='flex '>
//                 <div className='w-[40%] hidden md:block'>

//                     <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")` }} className='w-full h-full bg-cover bg-no-repeat  flex items-center justify-center'>
//                         <pre>

//                             <h1 className='flex justify-center items-center font-bold font-Poppins text-3xl'>JAVA</h1>
//                             <h6 className='tracking-widest'>JAVA INHERITENCE</h6>
//                         </pre>


//                         <div className='flex gap-2 absolute top-[3%] left-[5%]'>
//                             <FaChevronCircleLeft className='text-xl mt-1'></FaChevronCircleLeft>
//                             <p className='text-xl'>Back to main menu</p>
//                         </div>

//                     </div>
//                 </div>
//                 <Sidebar open={open} setOpen={setOpen}></Sidebar>
//                 <div className='w-full md:w-[60%] bg-[#1e2736] p-2'>
//                     <QuestionHeader open={open} setOpen={setOpen}></QuestionHeader>
//                     <div className='bg-black/20 p-[2px] shadow-lg my-2'>

//                     </div>
//                     <div className='mx-6'>
//                         <h6 className='text-blue-500'>QUESTION 1</h6>
//                         <p className='text-base md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati eius tempora ab unde possimus recusandae officiis illum optio, dolorum voluptatum ipsum veritatis soluta omnis praesentium itaque laborum quis inventore.</p>
//                         <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" className='w-full h-40 md:h-80' />
//                         <div className='mt-4 space-y-3'>
//                             <div className={`p-2 border-2 flex gap-2 items-center  w-full ${quizAnsCss == '1' && 'border-blue-500 text-blue-500'}`} >
//                                 <input onClick={(e) => setQuizAnsCss(e.target.value)} type="radio" name="quiz" id="1" value={1} />
//                                 <label className='text-lg md:text-xl' htmlFor="1">Alvasst</label>
//                             </div>
//                             <div className={`p-2 border-2 flex gap-2 items-center  w-full ${quizAnsCss == '2' && 'border-blue-500 text-blue-500'}`} >
//                                 <input onClick={(e) => setQuizAnsCss(e.target.value)} type="radio" name="quiz" id="2" value={2} />
//                                 <label className='text-lg md:text-xl' htmlFor="2">forloop</label>
//                             </div>
//                             <div className={`p-2 border-2 flex gap-2 items-center  w-full ${quizAnsCss == '3' && 'border-blue-500 text-blue-500'}`} >
//                                 <input onClick={(e) => setQuizAnsCss(e.target.value)} type="radio" name="quiz" id="3" value={3} />
//                                 <label className='text-lg md:text-xl' htmlFor="3">Function</label>
//                             </div>
//                             <div className={`p-2 border-2 flex gap-2 items-center  w-full ${quizAnsCss == '4' && 'border-blue-500 text-blue-500'}`} >
//                                 <input onClick={(e) => setQuizAnsCss(e.target.value)} type="radio" name="quiz" id="4" value={4} />
//                                 <label className='text-lg md:text-xl' htmlFor="4">classname</label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='bg-[#1e2736] p-3  sticky bottom-0 grid grid-cols-12 gap-3 items-center'>
//                 <div className='col-span-12 md:col-span-3'>

//                     {/* modal  */}
//                     <div>
//                         <button type='submit' className='block md:hidden bg-red-400 text-sm px-4 py-3  uppercase' onClick={openModal}>leave quiz</button>
//                         <Modal
//                             isOpen={modalIsOpen}
//                             onAfterOpen={afterOpenModal}
//                             onRequestClose={closeModal}
//                             style={customStyles}
//                             contentLabel="Example Modal"
//                         >

//                             {/* main contain */}
//                             <div className=''>

//                                 <QuizCard></QuizCard>
//                             </div>

//                             <div className='flex justify-end px-2 pb-2 md:hidden'>

//                                 <button onClick={closeModal} className='px-3 py-1 text-lg bg-blue-500 rounded-lg text-white'>Close</button>
//                             </div>
//                         </Modal>
//                     </div>

//                     <div className='hidden md:flex gap-2 items-center'>
//                         <SiJava className='text-3xl'></SiJava>
//                         <h6 className='mt-2'><span className='text-blue-400 text-lg'>Java</span>/Javainheritance</h6>

//                     </div>
//                 </div>

//                 <div className='col-span-12 md:col-span-6 '>
//                     <div className=' bg-[#333F50] rounded-3xl w-[100%] md:w-[80%]'>
//                         <div className='bg-[#01B6FF] w-[40%] p-2 rounded-3xl'>

//                         </div>
//                     </div>
//                 </div>
//                 {/* LEAVE QUIZ
//                 NEXT QUESTION
//                  */}
//                 <div className='col-span-12 md:col-span-3'>

//                     <div className='flex justify-between md:justify-end gap-2 '>

//                         {/* modal  */}
//                         <div>
//                             <button type='submit' className='hidden md:block bg-red-400 text-sm px-4 py-3 md:px-6 md:py-4 whitespace-nowrap uppercase' onClick={openModal}>leave quiz</button>
//                             <Modal
//                                 isOpen={modalIsOpen}
//                                 onAfterOpen={afterOpenModal}
//                                 onRequestClose={closeModal}
//                                 style={customStyles}
//                             // contentLabel="Example Modal"
//                             >


//                                 <div className='p-2'>
//                                     <QuizCard></QuizCard>
//                                 </div>
//                                 <div className='flex justify-end px-2 pb-2 md:hidden'>

//                                     <button onClick={closeModal} className='px-3 py-1 text-lg bg-blue-500 rounded-lg text-white'>Close</button>
//                                 </div>

//                             </Modal>
//                         </div>
//                         <div className='flex md:hidden gap-2 items-center'>
//                             <SiJava className='text-3xl'></SiJava>
//                             <h6 className='mt-2 text-xs md:text-lg'><span className='text-blue-400 '>Java</span>/Javainheritance</h6>

//                         </div>
//                         <button type='submit' className=' bg-green-400 text-sm px-4 py-3 md:px-5 md:py-4 whitespace-nowrap uppercase'>next question</button>
//                     </div>
//                 </div>
//             </div>

//             {/* <Popup
//                 trigger={<button className="button"> Open Modal </button>}
//                 modal
//                 nested
//             >
//                 {close => (
//                     <div className="modal">
//                         <button className="close" onClick={close}>
//                             &times;
//                         </button>

//                         <div className="actions">

//                             <button
//                                 className="button"
//                                 onClick={() => {

//                                     close();
//                                 }}
//                             >
//                                 close modal
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </Popup> */}
//         </div>
//     );
// };

