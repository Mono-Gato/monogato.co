import Head from 'next/head';
import Image from 'next/future/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Monogato | Diseño, desarollo de paginas y aplicaciones web</title>
        <meta name="description" content="Soy Monogato mi nombre es Juan David Niño, soy diseñador y desarrollador. Mi especialidad es el desarrollo paginas y aplicaciones web. Bogota, Co." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="comingSoon">
          <div>
            <h1>Hi there , I’m Monogato</h1>
            <p>My name is Juan David Niño mostly know as Monogato, I’m a UI/UX Designer and FrontEnd Developer for the web.</p>
            <span>My new web portfolio is coming soon</span>
            <button>Download CV</button>
          </div>
          <aside>
            <div>
              <Image src="" alt="Contact me - Monogato" width={300} height={300} />
            </div>
            <div>
              <h2>Get in touch:</h2>
              <ul>
                <li>
                  <Image src="" alt="LinkedIn Monogato" width={30} height={30} />
                  <p>LinkedIn</p>
                </li>
                <li>
                  <Image src="" alt="GitHub Monogato" width={30} height={30} />
                  <p>GitHub</p>
                </li>
                <li>
                  <Image src="" alt="Behance Monogato" width={30} height={30} />
                  <p>Behance</p>
                </li>
                <li>
                  <Image src="" alt="Instagram Monogato" width={30} height={30} />
                  <p>Instagram</p>
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
