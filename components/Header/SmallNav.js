import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import SmallNavItem from "../../data/header.json"

const SmallNav = () => {
  const pathname = usePathname()

  const isActive = (href) => pathname.startsWith(href)
  return (
    <>
      <nav className="mainmenu-nav">
        <div className="mainmenu-nav">
          <ul className="dashboard-mainmenu rbt-default-sidebar-list"></ul>
          <ul className="dashboard-mainmenu rbt-default-sidebar-list">
            <li>
              <Link href="/release-notes">
                <i className="feather-bell"></i>
                <span>Release </span>
              </Link>
            </li>
            <li>
              <Link href="/terms-policy">
                <i className="feather-briefcase"></i>
                <span>Termeni & Polictici</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default SmallNav
