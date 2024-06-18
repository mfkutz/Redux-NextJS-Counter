import Link from "next/link";
import MessageForm from "../components/MessageForm";
import MessagePreview from "../components/MessagePreview";
import MessagePreview2 from "../components/MessagePreview2";

export default function Home() {
  return (
    <>
      <div className="flex gap-10 bg-blue-400 h-[90vh] justify-center items-center">
        <MessagePreview />
        <MessageForm />
        <MessagePreview2 />
      </div>
      <div className="flex justify-center">
        <Link href="/counter">
          <button className="bg-red-500 p-2 rounded-lg mt-3">Go to counter</button>
        </Link>
      </div>
    </>
  )
}
