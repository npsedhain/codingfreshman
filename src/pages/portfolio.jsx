import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoRubato from '@/images/logos/rubato.png'
import logoUltify from '@/images/logos/ultify.png'
import logoReact from '@/images/logos/react.svg'
import logoAirvet from '@/images/logos/airvet_logo.svg'
import logoCode from '@/images/logos/code.png'
import logoGo from '@/images/logos/go.png'

const projects = [
  {
    name: 'Care Portal',
    description:
      'Architected and led the development of an internal tool that powers the in house veterinarian technician to communicate with pet parents.',
    link: { href: 'https://www.airvet.com', label: 'care.airvet' },
    logo: logoAirvet,
  },
  {
    name: 'Airvet Blog',
    description:
      'Architected the transfer of WordPress site to Next App with WP as a headless CMS and created a custom css parser to map WP classes to tailwind classes.',
    link: { href: 'https://www.airvet.com/blog', label: 'blog.airvet' },
    logo: logoAirvet,
  },
  {
    name: 'Ultify',
    description:
      'Helped build a real time knowledge sharing platform based in Europe. Handled video transcoding, live video transmission with MUX, peer-to-peer communication, etc.',
    link: { href: 'https://ultify.io/', label: 'ultify.io' },
    logo: logoUltify,
  },
  {
    name: 'Rubato',
    description:
      'Built a platform for artists to share local events. Worked on features like - contract creation and signing with Scrive, impressions tracking, subscriptions, etc.',
    link: { href: 'https://www.polydelic.com/case-studies', label: 'rubato' },
    logo: logoRubato,
  },
  {
    name: 'Reddit Clone',
    description:
      'A backend simulation of a Reddit clone built in Go using the Proto Actor framework. It models user interactions with Zipf distribution, supports nested comments, calculates karma dynamically, and leverages actor-based concurrency for scalability and fault tolerance.',
    link: { href: 'https://github.com/npsedhain/reddit-clone', label: 'reddit' },
    logo: logoGo,
  },
  {
    name: 'Gator Ticket Master',
    description: "This project was completed as coursework for the Advanced Data Structures class. It simulates a ticketing platform using a Red-Black tree and binary heap data structure to maintain a queueing system and issue/cancel/update users' tickets.",
    link: { href: 'https://github.com/npsedhain/gator-ticket-master', label: 'gator.ticket.master' },
    logo: logoCode,
  },
  {
    name: 'Messaging in distributed systems',
    description: 'A simulation of message passing using gossip protocol and push sum algorithm in a distributed system using highly parallel actor model in Pony.',
    link: { href: 'https://github.com/npsedhain/gossip-push-sum', label: 'gossip.simulation' },
    logo: logoCode,
  },
  {
    name: 'React Clone',
    description:
      'Created a minimal clone of react with its own diffing algorithm. And made a TODO app using the custom library. Write components as Javascript functions.',
    link: { href: 'https://github.com/npsedhain/vDom', label: 'vDom' },
    logo: logoReact,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Anup Sedhain</title>
        <meta
          name="description"
          content="Things I’ve built trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="My dent in this universe"
        intro="These are the things I’ve made trying to put my dent in the universe. I’ve worked on tons of little projects and worked with handful of companies over the years. These are the hand picked products that I’m most proud of."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
