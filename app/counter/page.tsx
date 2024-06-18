'use client'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { increment, decrement, incrementByAmount } from "@/lib/features/counterSlice";
import { useState } from "react";
import Link from "next/link";
const counter: React.FC = () => {
    const [amount, setAmount] = useState(0)
    const message = useSelector((state: RootState) => state.messages.message)
    const number = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div className="h-screen flex justify-center items-center flex-col border">
            <Link href="/" className="bg-red-500 px-2 py-1 rounded-lg mt-3 cursor-pointer mb-2">BACK</Link>
            <div className="border border-gray-600 p-10 rounded-lg flex flex-col items-center gap-3">
                <h1>Counter</h1>
                <div className="flex gap-10">
                    <button
                        onClick={() => dispatch(increment())}
                        className="bg-green-500  py-2 rounded-lg w-[80px]">
                        Add
                    </button>
                    <button
                        onClick={() => dispatch(decrement())}
                        className="bg-red-500  py-2 rounded-lg w-[80px]">
                        Remove
                    </button>
                </div>
                <div className="text-5xl">
                    {number}
                </div>
                <button
                    onClick={() => dispatch(incrementByAmount(amount))}
                    className="bg-blue-500  py-2 rounded-lg w-[80px]">
                    Amount
                </button>
                <div className=" w-full flex justify-between mt-4">
                    <button
                        onClick={() => setAmount(2)}
                        className={` w-11 rounded-sm text-black ${amount === 2 ? 'bg-red-500' : 'bg-yellow-400'}`}>
                        2
                    </button>
                    <button
                        onClick={() => setAmount(3)}
                        className={`w-11 rounded-sm text-black ${amount === 3 ? 'bg-red-500' : 'bg-yellow-400'}`}>
                        3
                    </button>
                    <button
                        onClick={() => setAmount(5)}
                        className={` w-11 rounded-sm text-black ${amount === 5 ? 'bg-red-500' : 'bg-yellow-400'}`}>
                        5
                    </button>
                </div>

            </div>
            <div>
                <h2 className="m-3">Here from store of Redux</h2>
                <p className="text-red-600 text-center">{message}</p>
            </div>
        </div>
    );
}

export default counter;