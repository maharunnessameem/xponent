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
        },
        {
            label: "Create",
            href: "/create"
        }
    ]

    return (
        <div className='shadow-md mb-10'
        >
            <ul className='flex gap-5 py-10 px-10'>
                {
                    navItems.map((link, index) => (
                        <li key={index} className='hover:font-bold'>
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