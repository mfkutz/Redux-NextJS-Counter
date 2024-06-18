'use client'
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
const MessagePreview: React.FC = () => {
    const message: string = useSelector((state: RootState) => state.messages.message);
    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default MessagePreview;