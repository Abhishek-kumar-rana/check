
import React, { useState } from 'react';
import { FaHome, FaHeart, FaWallet, FaTag, FaUser } from 'react-icons/fa';

const Wallet = () => {
    const transactions = [
        { id: 1, name: 'Welton', amount: -570.00, time: 'Today at 09:20 am' },
        { id: 2, name: 'Nathsam', amount: 570.00, time: 'Today at 09:20 am' },
        { id: 3, name: 'Welton', amount: -570.00, time: 'Today at 09:20 am' },
        { id: 4, name: 'Nathsam', amount: 570.00, time: 'Today at 09:20 am' },
        { id: 5, name: 'Nathsam', amount: 570.00, time: 'Today at 09:20 am' },

    ];

    const [activeItem, setActiveItem] = useState('Home');

    const navItems = [
        { name: 'Home', icon: FaHome },
        { name: 'Favourite', icon: FaHeart },
        { name: 'Wallet', icon: FaWallet },
        { name: 'Offer', icon: FaTag },
        { name: 'Profile', icon: FaUser },
    ];

    return (
        <div className="p-4 ">


            <div className=" top-0 left-4 right-3 pl-1 py-6 flex justify-between bg-white z-50">
                <img src="/Menu.png" alt="Menu" className="w-10 h-10" />
                <img src="/Notification.png" alt="Notification" className="w-10 h-10" />
            </div>


            <div className="flex justify-between gap-6 mt-8 ">

                <div className="w-full py-4 flex flex-col  text-grey-500 rounded-lg flex items-center justify-center">

                </div>
                <div className="w-full h-14 flex flex-col border  border-[#008955]
                text-[#008955] text-xl font-semibold rounded-lg flex items-center justify-center">
                    Add Money
                </div>

            </div>


            <div className="flex justify-between gap-6 mt-6 text-grey-300">

                <div className="w-full h-[160px] flex flex-col border bg-green-200 border-[#008955] text-grey-500 rounded-lg flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-gray-500">₹500</h3>
                    <p className='text-md mt-5 text-grey-100'>Available Balance</p>
                </div>
                <div className="w-full h-34 flex flex-col border bg-green-200 border-[#008955] text-grey-500 rounded-lg flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-500">₹200</span>
                    <span className='text-md mt-5 text-grey-100'>Total Expend</span>
                </div>

            </div>
            <div className=" py-6 flex justify-between">
                <h4 className=" text-xl font-semibold">Transactions</h4>
                <button className=' text-[#008955]'>See All</button>

            </div>

            <div className='mb-20'>
                <ul>
                    {transactions.map((transaction) => (
                        <li key={transaction.id}
                            className="w-full h-16 border border-[#008955]  rounded-lg flex justify-between items-center mb-4 py-2 px-4">
                            <div className="flex items-center">
                                <img src={`${transaction.amount > 0 ? './Down.png' : './Up.png'}`} alt="" className="mr-4" />
                                <div className="flex flex-col">
                                    <span className='font-bold'>{transaction.name}</span>
                                    <span>{transaction.time}</span>
                                </div>
                            </div>
                            <span className="text-right font-bold">₹{transaction.amount}</span>
                        </li>
                    ))}
                </ul>
            </div>


            {/* <div className=" bg-cover bg-center h-20 w-full bottom-0">


                <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-around">
                    <div className="flex flex-col items-center text-gray-500">
                        <FaHome className="text-xl" />
                        <span className="text-sm">Home</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500">
                        <FaHeart className="text-xl" />
                        <span className="text-sm">Favourite</span>
                    </div>
                    <div className="flex flex-col items-center text-green-500">
                        <FaWallet className="text-xl " />
                        <span className="text-sm">Wallet</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500">
                        <FaTag className="text-xl" />
                        <span className="text-sm">Offer</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500">
                        <FaUser className="text-xl" />
                        <span className="text-sm">Profile</span>
                    </div>
                </div>
            </div> */}

            <div className=" bg-center h-20 md:w-auto w-full fixed bottom-0">
                <div className="fixed bottom-0 left-0 right-0 flex justify-around">
                    <img src="/Menu1.png" alt="Menu" className="" />
                </div>
            </div>

        </div>
    );
};

export default Wallet;
