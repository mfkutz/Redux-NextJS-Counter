'use client'

import { useState } from "react";
import { setMessage } from "@/lib/features/messagesSlice";
import { useDispatch } from "react-redux";
const MessageForm = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
        dispatch(setMessage(e.target.value))
        console.log(e.target.value);
    }

    return (
        <div>
            <h1>Message Form</h1>
            <input
                className="w-[400px] h-[40px] rounded-lg text-gray-800 px-2"
                type="text"
                value={input}
                onChange={handleInput}
            />
        </div>
    );
}

export default MessageForm;