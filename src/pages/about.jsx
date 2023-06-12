import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Anup Sedhain</title>
        <meta
          name="description"
          content="I’m Anup Sedhain. I am a full-stack software developer and an aspiring story-teller."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm not a prodigy
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                The tech world has you believe that you need to be a child
                genius to make a good programmer. It's not true.
              </p>
              <p>
                I didn't start writing codes when I was six. Heck, I didn't even
                write a single line of code before I was in high school.
              </p>
              <p>
                When my mother brought back a computer book for me at grade 9, I
                went to school the other day to exchange it with my beloved
                Accounts book. So you know that I have never written a single
                line of code in <strong>QBASIC</strong>. I lack the basics.
              </p>
              <p>
                In high school, I was not even interested in the extra credit
                computer. But that was when I was familiarized with the words{' '}
                <strong>conio</strong> and <strong>stdio</strong>. But with
                great shame, I must tell you that I don't yet know the meaning
                or purpose of those words.
              </p>
              <p>
                I think it's about right time to tell you that I work as a full
                time software developer for a company based in California. I
                know, lucky them!
              </p>
              <br />
              <p>
                However, there is one thing I absolutely loved since my early
                days. And that was a mic and a stage.
              </p>
              <p>
                I was at grade 3, when I got the taste of winning. I came in
                first at a debate competition and it felt sweet. It was also my
                first ever debate and I had won over a team that always stood
                first.
              </p>
              <p>
                From then to grade 7, until I switched school, I always
                participated either in Elocution or Debate and stood not less
                than second position. I lost track of it after that, but I know
                now that I love taking the stage and uttering words.
              </p>
              <br />
              <p>
                I guess by now you have figured out what I am trying to do here.
                I am trying to bring the little of two worlds that I am familiar
                with. Some people would say that I have had a decent success as
                a mediocre developer and I want to tell that story to the world.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/codingfreshman"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/codingfreshman/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/npsedhain"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/anup-sedhain-073563154/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:anup@codingfreshman.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                anup@codingfreshman.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
