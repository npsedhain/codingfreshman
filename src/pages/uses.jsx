import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
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
        <title>Uses - Anup Sedhain</title>
        <meta name="description" content="What I use" />
      </Head>
      <SimpleLayout
        title="What I use"
        intro="I try to keep things simple and I don't own a lot of things. But what I do own makes my life a wee-bit easier."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, Intel, 16GB RAM, 512GB SSD (2019)">
              This is my first ever MacBook that I bought back in 2019. I took
              out my salary in advance to get this and its what got be hooked to
              the apple eco system.
            </Tool>
            <Tool title="MSI Optix MAG342CQRV 34 Inch Curved Gaming Monitor">
              I am probably the last person you would imagine playing games on
              my monitor but this one is quite handy to just open up a couple of
              code editors. I love this monitor.
            </Tool>
            <Tool title="Keychron K3">
              I googled which external keyboard goes best with a Mac and this
              was the first result. I rushed to the showroom the other day and
              got it.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              I liked how MKBHD had a right hand on a mouse and left on a track
              pad. I couldn't miss out on all the Mac gestures, could I?
            </Tool>
            <Tool title="Logitech G604 LIGHTSPEED Gaming Mouse">
              I got this because of my friends. They didn't even recommend me. I
              just didn't know a lot about mouse. I sometimes regret it. It's an
              overkill for anyone who doesn't play shooting games.
            </Tool>
            <Tool title="Sony WH-1000XM5 Wireless Headphones">
              I needed one over the ear headphones. Sony claims it is the
              industry leading headphones and I choose to believe them.
            </Tool>
            <Tool title="Worst Gaming Chair">
              I am not sure why I have been sitting on this one. Maybe I paid a
              lot for this and the guilt is overpowering my bad postures. I need
              to do better.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">Good old VS Code. Need I say more?</Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I don't do design. But I do fiddle around sometimes. And this is
              what my team uses.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notion">
              Whenever I have a long list of TODOs. When I have thoughts to
              pour. My articles. Even the first draft of this page was on
              Notion. I just fire it up when I feel like writing anything except
              for codes.
            </Tool>
            <Tool title="Spreadsheets">
              Doing my homework for life on a Spreadsheet. What is it you ask?
              You must read{' '}
              <a
                className="text-blue-500"
                href="https://www.amazon.com/Storyworthy-Engage-Persuade-through-Storytelling/dp/1608685489"
              >
                Storyworthy
              </a>
            </Tool>
            <Tool title="Icloud Notes">
              Who doesn't use notes? I take meeting minutes here. Jot down any random words I
              come across. Sometimes my grocery list goes in here. Whatever I
              don't need in the future but needs tracking. This is my go to app.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
