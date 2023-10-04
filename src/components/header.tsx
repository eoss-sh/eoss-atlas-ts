import React from "react";
import { gql } from "../__generated__";
import {
  PrimaryMenuItemFragmentFragment,
} from "../__generated__/graphql";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./hamburger";
import { JetBrains_Mono  } from 'next/font/google'
import logo from '../../public/logo_white.svg'


const jb = JetBrains_Mono({ subsets: ['latin'], weight: '100' })

type HeaderProps = {
  menuItems: PrimaryMenuItemFragmentFragment[];
};

export default function Header({
  menuItems,
}: HeaderProps) {

  const [isOpen, setIsOpen] = React.useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  } 

  return (
    <header className={`${jb.className} bg-primary pt-4 pb-4 mb-12`}>
      <div className="flex flex-row items-center justify-between container mx-auto">
        <Link href="/" className="">
          <Image src={logo} width={100} height={50} alt="Logo" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex">
            {menuItems.map((item) => (
              <li key={item.id} className="mr-8 last:mr-0 text-l text-white hover:text-secondary transition">
                <Link href={item.uri}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="block md:hidden">
          <Hamburger open={isOpen} handleIsOpen={handleIsOpen} />
          <ul className={`${isOpen ? "block" : "hidden"} flex flex-col`}>
            {menuItems.map((item) => (
              <li key={item.id} className="mr-8 last:mr-0 text-l text-white hover:text-secondary transition">
                <Link href={item.uri}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.fragments = {
  generalSettingsFragment: gql(`
    fragment HeaderGeneralSettingsFragment on GeneralSettings {
      title
      description
    }
  `),
  menuItemFragment: gql(`
    fragment PrimaryMenuItemFragment on MenuItem {
      id
      uri
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `),
};
