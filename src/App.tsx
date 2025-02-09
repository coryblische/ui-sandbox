import { useState } from 'react'
import DarkLightToggle from '@/components/ui/DarkLightToggle'
import { Button } from '@/components/lib/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/lib/card'
import Heading from '@/components/typography/Heading'
import Container from './components/layout/container'
import FlexCol from './components/layout/flex-col'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800'>
      <Container>
        <Card>
          <CardHeader>
            <FlexCol>
              <CardTitle>
                <Heading size={2}>
                  vite, react, and shadcn walk into a bar...
                </Heading>
              </CardTitle>
              <Heading size={3}>
                ...and the bartender says, "What is this, some kind of joke?"
              </Heading>
            </FlexCol>
          </CardHeader>
          <CardContent>
            <FlexCol>
              <Button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </Button>
              <DarkLightToggle />
            </FlexCol>
          </CardContent>
        </Card>
      </Container>
    </main>
  )
}

export default App
