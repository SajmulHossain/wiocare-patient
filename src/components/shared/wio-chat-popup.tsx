import Image from "next/image";
import chatImg from "@/assets/icons/wio-chat.png";
import Link from "next/link";

const WioChatPopup = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-xl overflow-hidden">
      <Link href="/chat">
        <Image src={chatImg} alt="Wio Chat" width={50} height={50} />
      </Link>
    </div>
  );
};

export default WioChatPopup;
