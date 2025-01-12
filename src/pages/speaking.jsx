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
        <title>Stories - Anup Sedhain</title>
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
          <SpeakingSection title="Stories">
            <Appearance
              href="/stories/that-smile"
              title="That smile"
              description="The smile that I will never forget."
              cta="Read"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
