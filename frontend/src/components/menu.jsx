import Link from "next/link";

import "@/components/menu.css";

export default function Menu(){
    return(
        <>
            <Link className="Link" href="/chat">Chat</Link>
            <Link className="Link" href="/universidades">Universidades</Link>
        </>
    );
}