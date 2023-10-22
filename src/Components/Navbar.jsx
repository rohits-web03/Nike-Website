import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../Constants"

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-center items-center max-container max-lg:justify-between">
            <a href="/">
                <img 
                    src={headerLogo}
                    alt="Logo"
                    width={130}
                    height={29}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a 
                        href={item.href}
                        className="fonts-montserrat leading-normal text-lg text-slate-gray"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
                <li><a href="#">Sign in</a></li>
            </ul>
            <div className="hidden max-lg:block">
                    <img 
                        src={hamburger}
                        alt="hamburger"
                        width={25}
                        height={25}
                    />
            </div>
        </nav>
    </header>
  )
}

export default Navbar