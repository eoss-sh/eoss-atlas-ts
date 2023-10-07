import { gql } from "../__generated__";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";
import { GetHomePageQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";
import { Hanken_Grotesk,  } from 'next/font/google'
import TwoColumn from "../components/twoColumn";

const hanken = Hanken_Grotesk({ subsets: ['latin'] })

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />
      <div className="bg-primary py-36">
      <main className={`${hanken.className} container mx-auto`}>
        <div className="text-white font-light w-3/4">
        <div className="text-9xl mb-12">😮</div>
        <EntryHeader title="Wir schaffen Digitales, das Nutzer und Suchmaschinen begeistert." />
        <div className="mt-12 w-2/3">
          <p>Entwicklung, die überzeugt. Design, das fesselt. Content, der berührt. SEO-Optimierung, die Ergebnisse liefert - aus einer Hand.</p>
        </div>
        </div>
        
      </main>
      </div>
      <TwoColumn title="Unsere Leistungen" subtitle="Was wir für Sie tun können">Link</TwoColumn>
      <Footer />
    </>
  );
};

Component.query = gql(`
  query GetHomePage {
    generalSettings {
      title
      description
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
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
    }
  }
`);

export default Component;
