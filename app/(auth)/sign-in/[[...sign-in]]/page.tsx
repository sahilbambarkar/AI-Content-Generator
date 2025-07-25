import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
    return (
        <div
            className="flex items-center justify-center h-screen"
        >
            <Image
                src="/Background.jpg"
                alt="logo"
                layout="fill"
                objectFit="cover"
            />
            <SignIn />
        </div>
    );
}
