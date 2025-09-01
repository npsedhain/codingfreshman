import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function TimeSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Action({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Timeline - Anup Sedhain</title>
        <meta name="description" content="What I have done" />
      </Head>
      <SimpleLayout
        title="Milestones"
        intro="If you want a quick look at how my life has panned out until now, here you go!"
      >
        <div className="space-y-20">
          <TimeSection title="May 2025 - Present">
            <Action title="Airvet Inc." href="https://www.airvet.com/">
              My second leg at Airvet, and this time from the same time zone. Only this time we are fiddling with both using and building AI tools.
            </Action>
          </TimeSection>
          <TimeSection title="August 2024 - December 2025">
            <Action title="University of Florida" href="https://www.cise.ufl.edu/academics/graduate/masters-program/">
              Currently, I am pursuing Master of Science in Computer Science.
              My decision to go back to school coincided with when the whole software development industry is going through an overhaul.
              Luckily, I get to be at the forefront of that where I can learn the ins and outs of ML and use the tools to help build interesting things at Airvet.
            </Action>
          </TimeSection>
          <TimeSection title="May 2021 - July 2024">
            <Action title="Airvet Inc." href="https://www.airvet.com/">
              While working at Airvet, I grew from a software dev to a product engineer.
              I got introduced to the necessary bureaucracy that goes into building a product for a market that didn't exist before.
              I witnessed a complete product life cycle. At the end, I was more confident in not just my software skills but in my soft skills.
            </Action>
            <Action title="Toastmasters - August 2022" href="https://www.toastmasters.org/">
              Became a Toastmaster to better my public speaking and story telling skills.
              Overcame a lot of fear and learned to charge social battery.
            </Action>
          </TimeSection>
          <TimeSection title="August 2020 - December 2021">
            <Action title="Freelancing" href="https://www.polydelic.com/">
              This was my sleepless era. I was almost working 16 hours a day.
              Honestly, I exceeded everyone's expectations, especially myself.
              This part of my life made me brave and inclined towards taking more risks.
              I was mostly involved with Polydelic AS, a company based in Oslo.
              I built more than half a dozen MVPs with them.
            </Action>
          </TimeSection>
          <TimeSection title="May 2019 - April 2021">
            <Action title="Leapfrog Technology Inc." href="https://www.lftechnology.com/">
              I failed my first written test here. On my second attempt, I got the interview and the internship.
              Started off as an Associate Software Engineer and quickly became a Software Engineer.
              Was a proxy team lead to build a product that automated the process to build Product Requirement Document.
              My friend and I probably started working on at least 5 ideas that still live in my github as incomplete MVPs.
            </Action>
          </TimeSection>
          <TimeSection title="May 2019">
            <Action title="Founder Mode Deactivated">
              Lost Hult Prize in Tokyo and needed a real job that paid. Went on looking for internship. The end of Dailo.
            </Action>
          </TimeSection>
          <TimeSection title="September 2015 - October 2019">
            <Action title="Kathmandu University" href="https://comp.ku.edu.np/">
              I wrote my first lines of code here. Technically I wrote it in high school, but this is where I understood what I was writing.
              Worked on dozens of projects, participated in hackathons, mentored in a few of them, even organized a couple.
            </Action>
            <Action title="Hult Prize - April 2019" href="https://www.hultprize.org/">
              In December 2018, We won the Hult Prize at Kathmandu University.
              We pitched Dailo to a panel of entrepreneur judges in the competition. We won.
              I went on to represent our university to the regional finals at Tokyo where we lost but learned a lot about startups.
            </Action>
            <Action title="Founder Mode - March 2018">
              Few of my friends and I came up with an idea for a collaborative marketplace of unique tasks to be matched with a skilled helper in the network who can voluntarily signup.
              We named it "Dailo" - it roughly means patio in Nepali.
            </Action>
          </TimeSection>
          <TimeSection title="June 2013 - May 2015">
            <Action title="St Xavier's" href="https://sxc.edu.np/">
              Made it to the most prestigious high school in the country.
              First ever win in life.
            </Action>
          </TimeSection>
        </div>
      </SimpleLayout>
    </>
  )
}
