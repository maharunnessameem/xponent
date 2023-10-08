"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Header = () => {
    const pathname = usePathname();
    const navItems = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Posts",
            href: "/posts"
        },
        {
            label: "About",
            href: "/about"
        }
    ]

    return (
        <div>
            <ul className='flex gap-5 py-10 '>
                {
                    navItems.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className={pathname === `${link.href}` ? "text-blue-500 fonnt-bold" : ''}>
                                {link.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Header;