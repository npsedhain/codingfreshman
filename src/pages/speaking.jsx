import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Anup Sedhain</title>
        <meta
          name="description"
          content="I have failed"
        />
      </Head>
      <SimpleLayout
        title="I have failed"
        intro="We tried making a podcast. But of the many things we have tried and failed doing, this one comes up at the top of the list of my most cherised failures."
      >
        <div className="space-y-20">
          {/* <SpeakingSection title="Conferences">
            <Appearance
              href="#"
              title="In space, no one can watch you stream — until now"
              description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
              event="SysConf 2021"
              cta="Watch video"
            />
            <Appearance
              href="#"
              title="Lessons learned from our first product recall"
              description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
              event="Business of Startups 2020"
              cta="Watch video"
            />
          </SpeakingSection> */}
          <SpeakingSection title="Podcasts">
            <Appearance
              href="https://open.spotify.com/show/4yzBHSyNNhDfX3BIRCy0w9"
              title="Aayush * 2"
              description="Our friend Aayush wanted to buy a domain by his name but it was already taken by his younger self... Check out techkai.com for what the young Aayush created."
              event="Love, Internet"
              cta="Listen to podcast"
            />
            {/* <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            /> */}
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
