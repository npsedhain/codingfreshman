import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpeg'
// import image3 from '@/images/photos/image-3.jpeg'
import image4 from '@/images/photos/image-4.jpeg'
import image5 from '@/images/photos/image-5.jpeg'
import logoAirvet from '@/images/logos/airvet_logo.svg'
import logoUF from '@/images/logos/uf-logo.svg'
import logoLeapfrog from '@/images/logos/logo_leapfrog.svg'
import logoPolydelic from '@/images/logos/polydelic_logo.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { Newsletter } from '@/components/NewsLetter'
import { Button } from '@/components/Button'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/essays/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Timeline() {
  let resume = [
    {
      company: 'University of Florida',
      title: 'MSCS',
      logo: logoUF,
      start: '2024',
      end: '2026',
    },
    {
      company: 'Airvet',
      title: 'Software Engineer',
      logo: logoAirvet,
      start: '2021',
      end: '2024',
    },
    {
      company: 'Polydelic',
      title: 'Lead Engineer',
      logo: logoPolydelic,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Leapfrog',
      title: 'Software Engineer',
      logo: logoLeapfrog,
      start: '2019',
      end: '2021',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">History</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/resume.pdf" variant="secondary" className="group mt-6 w-full">
        View Resume
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Anup Sedhain - Software engineer, and amateur storyteller</title>
        <meta
          name="description"
          content="I’m Anup, a software engineer and storyteller based in Florida. I am originally from Nepal and I am sharing what I learn in my journey as a software developer."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Engineer
          </h1>
          <p className="mt-6 text-lg text-zinc-800 dark:text-zinc-200">
            TL;DR
            <br />
            I am currently pursuing a Master’s degree in Computer Science at the University of Florida, specializing in Parallel Systems with a minor in Data Engineering and Machine Learning.
            I have over 5 years of industry experience and I am currently looking for a summer internship.
            Here is my <a className='text-teal-500' href="/resume.pdf">resume</a>.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi! I’m Anup, originally from Nepal and currently pursuing a Master’s in Computer Science at the University of Florida.
          </p>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            My primary interest lies in parallel computer architecture. With the growing demand for computational resources, scalable parallel systems are the way forward. However, designing efficient and scalable distributed parallel systems remains a complex challenge—and that’s exactly where I want to focus my efforts.
          </p>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Beyond this, I’m also passionate about Data Engineering and Machine Learning.
          </p>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            This semester, I’m affiliated with the Adaptive Learning and Optimization Lab, where I’m working on predicting users’ tipping point in the context of social norm emergence using TGNNs and developing an interactive visualization system to maintain information integrity in online social networks.
          </p>

          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Before joining UF, I worked at Airvet, a leading startup providing 24/7 veterinary care as an employee benefit.
          </p>

          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            I bring over five years of full-stack software engineering experience, during which I’ve architected products from the ground up and scaled them to serve thousands of users.
          </p>

          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Currently, I’m looking for internship opportunities where I can contribute to designing scalable systems or building and managing data pipelines for ML models, analytics, and more.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/codingfreshman"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/codingfreshman/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/npsedhain"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/npsedhain/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Timeline />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
