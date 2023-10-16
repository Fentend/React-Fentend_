// import {React, useState, useEffect} from 'react'
// import { Link } from 'react-router-dom';
// import {LuCheckCircle} from "react-icons/lu";
// import {IoMdClose} from "react-icons/io";
// import { smileyEmoji } from "../Assets";
// import ReactplosiveModal from "reactplosive-modal";
// import ClipLoader from "react-spinners/ClipLoader";



{/* <div id='pop-modal' tabIndex="-1" className='fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'>
  <div className='relative w-full max-w-md max-h-full'>
    <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
      <button type='button' className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-grray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' data-modal-hide="popup-modal">
        <svg className='w-3 h-3' aria-hidden="true" xmins="http://www.w3.org/2000/svg" fill='none' viewBox='0 0 14 14'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d='m1 1 6 6M7 716-6M7 7l6-6M7 7l-6 6' />
        </svg>

      </button>

    </div>

  </div>

</div> */}


// const Popup = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   return (
//     <ReactplosiveModal
//       title = {<h4>Title</h4>}
//       isVisible = {isModalVisible}
//       onClose={() => setIsModalVisible(false)}
//       >
//         <p>Your submission have been recieved successfully, you will recieve a response within 24hrs</p>
//         <button>I do nothing</button>

//       </ReactplosiveModal>
//   );
// };
// const Popup = ({PopupVisible, onClose}) => {

//     if (!PopupVisible) return null; 
    
//   return (
    
//     <div className='my-auto pt-24 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm'>
  
//          <div className='bg-white text-center rounded md:mx-auto mx-3'>
//          <div className='flex flex-row bg-indigo-500 font-title text-white py-5 gap-20 md:gap-0'>
//           <h1 className='mx-16 text-xl text-center'>Thank You</h1>
//           <div onClick={onClose}><IoMdClose className='md:text-3xl text-2xl border'/></div>
//           </div>
//           <div className='flex flex-col'>
//             {/* <LuCheckCircle className='md:mx-80 text-indigo-500 mx-40 my-5 text-3xl'/> */}
//             <img src={ smileyEmoji } alt='smileyFace' className='w-20' />
//             <p className='my-5'>
//               Your submission has been received, you will recieve a response within 24hrs.
//             </p>
//             <Link to="./Home"><button className='text-lg font-serif bg-indigo-500 rounded-md text-white py-2 px-2 md:mx-56 my-5'>Back to Main Menu</button></Link>
//           </div>

//         </div>
//     </div>
//   )
// }
// export default Popup;


// import React, { useState } from 'react';

// function Modal() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button onClick={toggleModal}> Open Modal</button>
//       {isOpen && (
//         <div className='fixed z-10 inset-0 overflow-y-auto' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
//           <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
//             <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>
//               <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'> &#8203;</span>
//                 <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
//                   <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
//                     <div className='sm:flex sm:items-start'>
//                       <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
//                         <h3 className='text-lg leading-6 font-medium text-gray-900' id='modal-title'>
//                           Modal title
//                         </h3>
//                         <div className='mt-2'>
//                           <p className='text-sm text-gray-500'>
//                             Modal content
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                       <div className='bg-gay-50 px-4 py-3 sm:px-6sm:flex-row-reverse'> 
//                         <button type='button' className='mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-mediumtext-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm' onClick={toggleModal}>Close</button>
//                       </div>
//                 </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// export default Modal;