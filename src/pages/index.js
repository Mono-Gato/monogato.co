/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Img from 'next/image';
import Image from 'next/future/image';
import emojiWavingHand from '@emojis/emoji_waving-hand.png';
import emojiBriefcase from '@emojis/emoji_briefcase.webp';
import emojiWrittingHand from '@emojis/emoji_writing-hand.png';
import memojiCallMe from '@memojis/memoji-callme.webp';
import iconSocialBehance from '@icons/social_behance.webp';
import iconSocialLinkedIn from '@icons/social_linkedin.webp';
import iconSocialInstragram from '@icons/social_instagram.webp';
import iconSocialGitHub from '@icons/social_github.webp';
import imageBrandColor from '@brand/brand_color.webp';
import imageBackground from '@bg/bg_light.webp';

import styles from '@styles/ComingSoon.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Monogato | Diseño, desarollo de paginas y aplicaciones web</title>
        <meta name="description" content="Soy Monogato mi nombre es Juan David Niño, soy diseñador y desarrollador. Mi especialidad es el desarrollo paginas y aplicaciones web. Bogota, Co." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.comingSoon}>
        <div className={styles.bgWrap}>
          <Img alt="Texture Monogato" src={imageBackground} layout="fill" objectFit="cover" quality={100} priority />
        </div>
        <div className={styles.container}>
          <div className={styles.mainInfo}>
            <h1 className={styles.title}>
              Hi there
              <Image className={styles.title__emoji} src={emojiWavingHand} alt="Waving Hand" width={65} height={65} />
              , I’m
              <Image className={styles.title__logo} src={imageBrandColor} alt="Monogato" width={215} height={72} />
            </h1>
            <p>
              My name is Juan David Niño mostly know as Monogato, I’m a <span className={styles.bold}>UI/UX Designer</span> and <span>FrontEnd Developer</span> for the web.
            </p>
            <div className={styles.featured}>
              <h3>
                <Image src={emojiBriefcase} className={styles.featured__emoji} alt="icon briefcase" width={36} height={36} /> My new web portfolio is coming soon
              </h3>
            </div>
            <Link href="https://drive.google.com/file/d/1lEKc1iVXuXB2PKAliUMvOlyVodl2gFzb/view?usp=sharing">
              <a target="_blank" className={(styles.button__primary, styles.button)}>
                Download CV <Image className={styles.button__emoji} src={emojiWrittingHand} alt="icon writting hand" width={36} height={36} />
              </a>
            </Link>
          </div>
          <aside className={styles.secondaryInfo}>
            <div className={styles.memoji}>
              <Image src={memojiCallMe} alt="Contact me - Monogato" width={300} height={300} />
            </div>
            <div className={styles.getInTouch}>
              <h2 className={styles.title}>Get in touch:</h2>
              <ul className={styles.social}>
                <li className={styles.social__item}>
                  <Link href="https://www.linkedin.com/in/monogato/">
                    <a target="_blank">
                      <Image src={iconSocialLinkedIn} alt="LinkedIn Monogato" width={60} height={60} />
                      <p>LinkedIn</p>
                    </a>
                  </Link>
                </li>
                <li className={styles.social__item}>
                  <Link href="https://github.com/Mono-Gato">
                    <a target="_blank">
                      <Image src={iconSocialGitHub} alt="GitHub Monogato" width={60} height={60} />
                      <p>GitHub</p>
                    </a>
                  </Link>
                </li>
                <li className={styles.social__item}>
                  <Link href="http://www.behance.net/monogato">
                    <a target="_blank">
                      <Image src={iconSocialBehance} alt="Behance Monogato" width={60} height={60} />
                      <p>Behance</p>
                    </a>
                  </Link>
                </li>
                <li className={styles.social__item}>
                  <Link href="https://www.instagram.com/monogato.type/">
                    <a target="_blank">
                      <Image src={iconSocialInstragram} alt="Instagram Monogato" width={60} height={60} />
                      <p>Instagram</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
