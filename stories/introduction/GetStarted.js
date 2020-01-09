import React from 'react'
import { storiesOf } from '@storybook/react'

import Preview from '../helpers/Preview'

const getStarted = `

<div style="text-align: center;margin-bottom: 64px;color: cadetblue;">

# components-extra

<hr style="width: 40%;color: lightgrey;"/>

</div>

<div style="margin-bottom: 32px;">

Thank you for using **components-extra** <3. Here you will learn how to set up in 2 minutes the lib inside your app.

</div>

## Getting started in only 2 steps

### Prerequisites

<div style="margin-bottom: 48px;">

Before anything, please make you to have the three following packages installed:

- [react >= 16.8.0](https://www.npmjs.com/package/react)
- [react-dom >= 16.8.0](https://www.npmjs.com/package/react-dom)
- [styled-components](https://www.npmjs.com/package/styled-components)

</div>

### Step 1

**components-extra** relies on both [material-ui theme](https://material-ui.com/customization/theming/) configuration
as well as the [styled-components](https://www.styled-components.com/docs/advanced) theming system.

So the first step consists into wrapping your web application in **components-extra**'s default theme provider **StyledProvider**:

\`\`\`jsx
import { StyledProvider } from 'components-extra'

const App = () => {

  return (
    <StyledProvider>
      <p>Simple, is it not ?</p>
    </StyledProvider>
  )
}
\`\`\`

<div style="margin-bottom: 48px;">

Doing so will forward the **theme** object to all the children recursively. Not using this Provider above
the other components will result in an JS error.

</div>

### Step 2

Import the component you want to use. For example, the **BackToTop** button:

\`\`\`jsx
import { BackToTop, StyledProvider } from 'components-extra'

const App = () => {

  return (
    <StyledProvider>
      <BackToTop />
    </StyledProvider>
  )
}
\`\`\`

And voilà! you're all set and ready to create your website's interface.
`

const fonts = `
## Fonts

Like Material-UI, the components all use **[Roboto](https://fonts.google.com/specimen/Roboto)** font-familly as their main option,
but it is not included in **components-extra** to provide more freedom to the developers.

You have to manually use the following CDN link to include the Roboto font in your application:

\`\`\`html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
\`\`\`
`

const story = storiesOf('Introduction|Get Started', module)

story.add('How to use components-extra', () => <Preview content={getStarted} />, {
  info: { disable: true },
})

story.add('Typography fonts', () => <Preview content={fonts} />, { info: { disable: true } })
