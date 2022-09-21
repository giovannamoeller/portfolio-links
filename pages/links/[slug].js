import Head from 'next/head'
import styles from '../../src/styles/Links.module.scss'
import profileImage from '../../src/images/me.png';
import boxImage from '../../src/images/box.svg';
import arrowImage from '../../src/images/arrow.svg';
import LINKS from '../../src/graphql/queries.js';
import Image from 'next/image';
import client from '../../src/graphql/config';
import { categories } from '../../src/lib/category';
import Link from 'next/link';

export default function LinkPage({name, description, links}) {
  return (
	<div className={styles.container}>
	  <Head>
		<title>Girl Coding</title>
		<meta name="description" content="Generated by create next app" />
		<link rel="icon" href="/favicon.ico" />
	  </Head>

	  <main className={styles.mainLinks}>
	  <header className={styles.headerLinks}>
		  <h1> {name} </h1>
      {description && (
        <span className={styles.description}>{description}</span>
      )}
	  </header>

    {links ? (
      <section className={styles.links}>
      {links.map(({ name, url }) => {
        return (
          <Link href={url} target='_blank' key={name} rel='noreferrer'>
            <a className={styles.link}>{name}</a>
          </Link>
        )
      })}
    </section>
    ) : (
      <span className={styles.description} id='no-link'>Desculpe, não há nada aqui ainda!</span>
    )}
    <a href='/links' className={styles.button}>
      Voltar para página inicial
    </a>
	</main>
	</div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: categories.map((category) => `/links/${category.slug}`),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const category = categories.find((category) => category.slug === slug);
  return { props: category };
};

