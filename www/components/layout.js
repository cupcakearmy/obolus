import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { logout } from '../utils/auth'
import { getRandomSlogan } from '../utils/misc'


const Layout = ({ children }) => {
    const title = getRandomSlogan()

    return <React.Fragment>
        <Head>
            <title>{title}</title>

            {/* https://www.flaticon.com/packs/zoo-20 */}
            <link rel="stylesheet" href="/static/css/spectre.min.css"/>
            <link rel="stylesheet" href="/static/css/spectre-exp.min.css"/>
            <link rel="stylesheet" href="/static/css/spectre-icons.min.css"/>
            <link rel="stylesheet" href="/static/css/main.css"/>

            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>

        <div id='navbar-container'>
            <header className="navbar">
                <section className="navbar-section">
                    <Link href='/'>
                        <a className="btn btn-link">
                            <img src={'/static/icons/ui/stats.svg'} alt={'overview'}/>
                            <span className={'hide-sm'}> Overview</span>
                        </a>
                    </Link>
                    <Link href='/new'>
                        <a className="btn btn-link">
                            <img src={'/static/icons/ui/add.svg'} alt={'add'}/>
                            <span className={'hide-sm'}> New</span>
                        </a>
                    </Link>
                </section>
                <section className="navbar-center hide-sm">
                    <b>{title}</b>
                </section>
                <section className="navbar-section">
                    <Link href='/me'>
                        <a className="btn btn-link">
                            <img src={'/static/icons/ui/me.svg'} alt={'profile'}/>
                            <span className={'hide-sm'}> Me</span>
                        </a>
                    </Link>
                    <a onClick={logout} className="btn btn-link">
                        <img src={'/static/icons/ui/logout.svg'} alt={'add'}/>
                        <span className={'hide-sm'}> Logout</span>
                    </a>
                </section>
            </header>
        </div>

        <main>
            <div className="container">
                <div id='content'>
                    {children}
                </div>
            </div>
        </main>

        {/* language=CSS */}
        <style jsx>{`
            main {
                padding: 6em 0;
            }

            #navbar-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                padding: 1em;
                box-shadow: 0 -0.4em 1em -0.5em;
                background-color: var(--clr-white);
                z-index: 10;
            }

            #navbar-container header {
                max-width: 50em;
                margin: auto;
            }

            #content {
                width: 100%;
                max-width: 32em;
                margin: auto;
            }

            .navbar a {
                color: inherit;
            }

            .navbar a img {
                height: 1.5em;
                width: 1.5em;
                vertical-align: bottom;
            }
        `}</style>

    </React.Fragment>
}


export default Layout
