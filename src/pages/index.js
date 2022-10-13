import Head from 'next/head';
import Image from 'next/future/image';
import emojiWavingHand from '@emojis/emoji_waving-hand.png';
import emojiBriefcase from '@emojis/emoji_briefcase.png';
import emojiWrittingHand from '@emojis/emoji_writing-hand.png';
import memojiCallMe from '@memojis/memoji-callme.png';
import iconSocialBehance from '@icons/social_behance.png';
import iconSocialLinkedIn from '@icons/social_linkedin.png';
import iconSocialInstragram from '@icons/social_instagram.png';
import iconSocialGitHub from '@icons/social_github.png';
import imageBrandColor from '@brand/brand_color.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Monogato | Diseño, desarollo de paginas y aplicaciones web</title>
        <meta name="description" content="Soy Monogato mi nombre es Juan David Niño, soy diseñador y desarrollador. Mi especialidad es el desarrollo paginas y aplicaciones web. Bogota, Co." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="comingSoon">
        <div>
          <h1>
            Hi there{' '}
            <span>
              <Image src={emojiWavingHand} alt="Waving Hand" width={65} height={65} />
            </span>{' '}
            , I’m{' '}
            <span>
              <Image src={imageBrandColor} alt="Monogato" width={215} height={72} />
            </span>
          </h1>
          <p>My name is Juan David Niño mostly know as Monogato, I’m a UI/UX Designer and FrontEnd Developer for the web.</p>
          <h3>
            <Image src={emojiBriefcase} alt="icon briefcase" width={36} height={36} /> My new web portfolio is coming soon
          </h3>
          <button>
            Download CV <Image src={emojiWrittingHand} alt="icon writting hand" width={36} height={36} />
          </button>
        </div>
        <aside>
          <div>
            <Image src={memojiCallMe} alt="Contact me - Monogato" width={300} height={300} />
          </div>
          <div>
            <h2>Get in touch:</h2>
            <ul>
              <li>
                <Image src={iconSocialLinkedIn} alt="LinkedIn Monogato" width={60} height={60} />
                <p>LinkedIn</p>
              </li>
              <li>
                <Image src={iconSocialGitHub} alt="GitHub Monogato" width={60} height={60} />
                <p>GitHub</p>
              </li>
              <li>
                <Image src={iconSocialBehance} alt="Behance Monogato" width={60} height={60} />
                <p>Behance</p>
              </li>
              <li>
                <Image src={iconSocialInstragram} alt="Instagram Monogato" width={60} height={60} />
                <p>Instagram</p>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
