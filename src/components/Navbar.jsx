import {
  GithubLogo,
  GitBranch,
  LinkedinLogo
} from "phosphor-react"

import Logo from "./Logo"

const Navbar = () => (
  <nav
    className="bg-zinc-800 p-4 flex flex-row justify-around lg:md:p-6"
  >
    <Logo />

    {/* LINKS */}
    <div className="flex flex-row justify-center items-center gap-3 lg:md:gap-5">
      <a href="https://github.com/MarcelloBB">
        <GithubLogo 
          size={25}
          className="text-yellow-600 hover:text-yellow-300 transition-colors duration-200 ease-in"
        />
      </a>
      <a href="https://github.com/MarcelloBB/pokedex-v1">
        <GitBranch 
          size={25}
          className="text-yellow-600 hover:text-yellow-300 transition-colors duration-200 ease-in"
        />
      </a>
      <a href="www.linkedin.com/in/marcello-belanda-batista">
        <LinkedinLogo 
          size={25}
          className="text-yellow-600 hover:text-yellow-300 transition-colors duration-200 ease-in"
        />
      </a>
    </div>
  </nav>
)

export default Navbar
