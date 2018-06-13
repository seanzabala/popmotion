
import { createElement } from 'react';
import marksy from 'marksy/components';
import { A, H1, H2, H3, H4, H5, P, Li, Ol, Ul, Hr, Code, Blockquote, ArticleHeader, Video } from '~/templates/global/styled';
import { Img } from '~/templates/content/styled';
import ContentTemplate from '~/templates/content/Template';
import Example from '~/components/examples/Example';
import CodePen from '~/components/examples/CodePen';

const removeEmpty = filename => filename !== '';

const convertMarkdown = marksy({
  createElement,
  elements: {
    a: A,
    h1: ArticleHeader,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    p: P,
    code: Code,
    li: Li,
    ol: Ol,
    ul: Ul,
    hr: Hr,
    img: Img,
    blockquote: Blockquote,
  },
  components: {
    Example,
    CodePen,
    Video
  }
});

const content = convertMarkdown(`
# Easing

Easing functions make tweened motion look more natural by emulating the changes in velocity experienced by objects in the real world.

They work by accepting a progress value from \`0\` to \`1\`, and returning a new one.

Popmotion comes with a number of preset easing functions, and provides methods to create new easing functions.

## Import

\`\`\`javascript
import { easing } from 'popmotion';
\`\`\`

## Example

\`\`\`javascript
import { tween, easing } from 'popmotion';

tween({
  ease: easing.easeOut
}).start();
\`\`\`

## Presets

Popmotion comes with the following preset easing functions:

- \`cubicBezier\`
- \`linear\`
- \`easeIn\`, \`easeOut\`, \`easeInOut\`
- \`circIn\`, \`circOut\`, \`circInOut\`
- \`backIn\`, \`backOut\`, \`backInOut\`
- \`anticipate\`

Try them out by editing this live example:

\`\`\`marksy
<Example template="Ball" id="b">{\`
const ball = document.querySelector('#b .ball');
const ballStyler = styler(ball);

tween({
  to: 300,
  duration: 300,
  ease: easing.linear
}).start(ballStyler.set('x'));
\`}</Example>
\`\`\`

## Easing creation

Popmotion provides the following functions to create your own easing functions:

### \`cubicBezier\`
Creates cubic bezier curve easing function.

\`\`\`javascript
const { cubicBezier } = easing;
const longTail = cubicBezier(0, .42, 0, 1);
\`\`\`

### \`createReversedEasing\`
Reverses the provided easing function.

\`\`\`javascript
const { anticipate, createReversedEasing } = easing;
const anticipateOut = createReversedEasing(anticipate);
\`\`\`

### \`createMirroredEasing\`
Mirrors the provided easing function.

\`\`\`javascript
const { anticipate, createMirroredEasing } = easing;
const anticipateInAndOut = createMirroredEasing(anticipate);
\`\`\`

### \`createExpoIn\`
Creates an easing function based on the exponent function \`progress ** exponent\`. \`easeIn\` is \`createExpoIn(2)\`.

\`\`\`javascript
const { createExpoIn } = easing;
const strongerEaseIn = createExpoIn(3);
\`\`\`

### \`createBackIn\`
Creates an easing function with an overshoot. \`backIn\` is \`createBackIn(1.525)\`.

\`\`\`javascript
const { createBackIn, createReversedEasing } = easing;
const strongerBackOut = createReversedEasing(createBackIn(3));
\`\`\`

### \`createAnticipateEasing\`
Creates an easing function with a small anticipate and ease out. \`anticipate\` is \`createAnticipateEasing(1.525)\`.

\`\`\`javascript
const { createAnticipateEasing } = easing;
const strongerAnticipate = createAnticipateEasing(3);
\`\`\`
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="easing"
    section="api"
    undefined
    title="Easing"
    description="Functions that speed or slow a tween over time."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
