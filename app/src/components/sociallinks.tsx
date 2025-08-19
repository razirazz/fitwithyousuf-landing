'use client';

import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
  

const SocialLinks = () => {
    return (
        <>
            <div className="p-3 border-2 rounded-[18] bg-(--highlight-color) border-(--highlight-color)">
                <Link href="https://wa.me/971504694434" >
                    <MessageCircle strokeWidth={2} color="var(--background)" size={18} />
                </Link>
            </div>

            <div className="p-3 border-2 rounded-[18] border-(--highlight-color)">
                <Link href="tel:971504694434" >
                    <Phone strokeWidth={1.5} color="var(--highlight-color)" size={18} />
                </Link>
            </div>

            <div className="p-3 border-2 rounded-[18] border-(--highlight-color)">
                <Link href="mailto:getfitwithyousuf@gmail.com" >
                    <Mail strokeWidth={1.5} color="var(--highlight-color)" size={18} />
                </Link>
            </div>

            <div className="p-3 border-2 rounded-[18] border-(--highlight-color)">
                <Link href="https://www.instagram.com/fitwithyousuf/" >
                    <Instagram strokeWidth={1.5} color="var(--highlight-color)" size={18} />
                </Link>
            </div>
        </>
    )
}

export default SocialLinks;