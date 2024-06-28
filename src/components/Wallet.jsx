import React, { useEffect, useState } from 'react';
import { FaHome, FaHeart, FaWallet, FaTag, FaUser } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Wallet = () => {
    const transactionslo = [
        { id: 1, name: 'Welton', amount: -570.00, time: 'Today at 09:20 am' },
        { id: 2, name: 'Nathsam', amount: 570.00, time: 'Today at 09:20 am' },
        { id: 3, name: 'Welton', amount: -570.00, time: 'Today at 09:20 am' },
        { id: 4, name: 'Nathsam', amount: 570.00, time: 'Today at 09:20 am' },
        { id: 5, name: 'Nathsam', amount: 570.00, time: 'Today at 09:20 am' },
    ];

    const convertTimestamp = (timestamp) => {
        const date = new Date(parseInt(timestamp, 10));
        return date.toLocaleString();
    };

    const [data, setData] = useState({
        avialableBalance: null,
        totalExpense: null,
        transactions: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate API data fetching
        setTimeout(() => {
            const apidata = {
                avialableBalance: 500,
                totalExpense: 175,
                transactions: [
                    { date: "1717150831365", amount: 45, label: "Pune", type: "expense" },
                    { date: "1717150831365", amount: 25, label: "Pune", type: "expense" },
                    { date: "1717150831365", amount: 25, label: "Cancellation", type: "expense" },
                    { date: "1717150831365", amount: 100, label: "Topup", type: "topup" },
                    { date: "1717150831365", amount: 35, label: "Mumbai", type: "expense" }
                ]
            };
            setData(apidata);
            setLoading(false);
        }, 2000); // Simulate a delay of 2 seconds
    }, []);

    if (error) return <p>Error fetching data: {error.message}</p>;

    const { avialableBalance, totalExpense, transactions } = data;

    return (
        <div className="p-4 ">
            <div className="top-0 left-4 right-3 pl-1 py-6 flex justify-between bg-white z-50">
                <img src="/Menu.png" alt="Menu" className="w-10 h-10" />
                <img src="/Notification.png" alt="Notification" className="w-10 h-10" />
            </div>

            <div className="flex justify-between gap-6 mt-8 ">
                <div className="w-full py-4 flex flex-col text-grey-500 rounded-lg flex items-center justify-center"></div>
                <div className="w-full h-14 flex flex-col border border-[#008955] text-[#008955] text-xl font-semibold rounded-lg flex items-center justify-center">
                    Add Money
                </div>
            </div>

            <div className="flex justify-between gap-6 mt-6 text-grey-300">
                <div className="w-full h-[160px] flex flex-col border bg-green-200 border-[#008955] text-grey-500 rounded-lg flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-gray-500">
                        {loading ? <Skeleton width={100} /> : `₹${avialableBalance}`}
                    </h3>
                    <p className='text-md mt-5 text-grey-100'>Available Balance</p>
                </div>
                <div className="w-full h-34 flex flex-col border bg-green-200 border-[#008955] text-grey-500 rounded-lg flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-500">
                        {loading ? <Skeleton width={100} /> : `₹${totalExpense}`}
                    </span>
                    <span className='text-md mt-5 text-grey-100'>Total Expend</span>
                </div>
            </div>

            <div className="py-6 flex justify-between">
                <h4 className="text-xl font-semibold">Transactions</h4>
                <button className='text-[#008955]'>See All</button>
            </div>

            <div className='mb-20'>
                <ul>
                    {loading ? (
                        Array(5).fill().map((_, index) => (
                            <li key={index}
                                className="w-full h-16 border border-[#008955] rounded-lg flex justify-between items-center mb-4 py-2 px-4">
                                <Skeleton height={40} width={40} circle={true} className="mr-4" />
                                <div className="flex flex-col flex-grow">
                                    <Skeleton width="60%" />
                                    <Skeleton width="40%" />
                                </div>
                                <Skeleton width={60} />
                            </li>
                        ))
                    ) : (
                        transactions.map((transaction, index) => (
                            <li key={index}
                                className="w-full h-16 border border-[#008955] rounded-lg flex justify-between items-center mb-4 py-2 px-4">
                                <div className="flex items-center">
                                    <img src={`${transaction.type === "topup" ? './Down.png' : './Up.png'}`} alt="" className="mr-4" />
                                    <div className="flex flex-col">
                                        <span className='font-bold'>{transaction.label}</span>
                                        <span>{convertTimestamp(transaction.date)}</span>
                                    </div>
                                </div>
                                <span className="text-right font-bold">₹{transaction.amount}</span>
                            </li>
                        ))
                    )}
                </ul>
            </div>

            <div className="bg-center h-20 md:w-auto w-full fixed bottom-0">
                <div className="fixed bottom-0 left-0 right-0 flex justify-around">
                    <img src="/Menu1.png" alt="Menu" className="" />
                </div>
            </div>
        </div>
    );
};

export default Wallet;
