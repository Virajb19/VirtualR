import { resourcesLinks, platformLinks, communityLinks } from "../constants"

export default function Footer() {

    return <footer className="flex p-1 mb:p-0 justify-center">
           <div id="links" className="flex mb:flex-wrap py-5 mb:px-3 w-[77%] tb:w-[95%] mb:w-[95%] gap-44 tb:gap-28 mb:gap-3 justify-start text-white mt-16 mb:mt-5 border-t border-gray-600">
              <Links heading="Resources" links={resourcesLinks}/>
              <Links heading="Platform" links={platformLinks}/>
              <Links heading="Community" links={communityLinks}/>
          </div>
        </footer>
}

function Links({heading, links}){
    return <div className="flex flex-col p-3 mb:p-0 gap-3 text-white">
         <h3 className="text-white font-semibold">{heading}</h3>
         <ul className="flex flex-col p-1 gap-3 font-thin mb:text-xs">
            {links.map((link,i) => {
                return <li key={i} className="text-zinc-400 hover:text-white duration-150">
                    <a href={link.href}>{link.text}</a>
                </li>
            })}
         </ul>
    </div>
}