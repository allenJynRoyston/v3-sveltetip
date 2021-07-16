<script lang="ts">
	import { getContext } from 'svelte';
	import { DeviceStore } from '@stores/index';

	import Container from '@layout/Container.svelte';
	import Section from '@layout/Section.svelte';
	import Button from '@button/Button.svelte';
	import ColorText from '@base/ColorText.svelte';
	import ThemeWrapper from '@layout/ThemeWrapper.svelte';
	import Link from '@link/Link.svelte';
	import CodeBlock from '@utility/CodeBlock.svelte';
  import FadeIn from '@utility/FadeIn.svelte'

	const { isTabletAndBelow } = DeviceStore;
	const theme: string = getContext('theme');
</script>

<ThemeWrapper>
  <Container>
      <FadeIn condition='when-inviewport' fadeDirection='right'>
        <Section nomargin>
          <section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
            <h2 class="about-title">What is SvelteTip?</h2>
            <p>
              <ColorText applyTheme="success">SvelteTip</ColorText> is a rapid development boilerplate project
              built using the
              <ColorText applyTheme="warning"
                ><Link target="_blank" href="https://svelte.dev/" inherit>Svelte</Link></ColorText
              > and
              <ColorText applyTheme="magic"
                ><Link target="_blank" href="https://www.snowpack.dev/" inherit>SvelteKit</Link
                ></ColorText
              > framework. <ColorText applyTheme="success">SvelteTip</ColorText> takes advantage of both
              of these amazing technologies to specialize on ease of use, tiny compile size, and component
              centric development that makes building large apps just as seamless as small ones. Regardless
              of the size or complexity of your SPA project, you'll find that using <ColorText
                applyTheme="success">SvelteTip</ColorText
              > can save you - the developer - countless little pockets of time.
            </p>
            <!-- <p>
              Projects can be configured to be SPA (single-page app) or SSR (server-side rendering).
              Your choice. For convience, anything you develop using the SvelteTip boilerplate can be
              deployed easily using <ColorText applyTheme="secondary"
                ><Link target="_blank" href="https://www.fastify.io" inherit>Fastify</Link></ColorText
              >.
            </p> -->
        </section>
      </Section>
    </FadeIn>
  </Container>
</ThemeWrapper>

<ThemeWrapper invert>
  <Container>
      <FadeIn condition='when-inviewport' fadeDirection='right'>
        <Section nomargin>
          <section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
            <h2 class="about-title">Build it Once</h2>
            <p>
              <ColorText applyTheme="success">SvelteTip</ColorText> prides itself on it's growing library
              of useful pre-made components that have been specifically engineered to work just as well on
              your phone as it would your desktop. The goal, ultimately, is to move towards a "just build
              it once" web ecosystem that avoids costly mobile app development. If you know a little bit
              of <ColorText applyTheme="warning"
                ><Link target="_blank" href="https://svelte.dev/" inherit>Svelte</Link></ColorText
              >, functionality can be extended with ease.
            </p>
            <p>
              New things will be added to the <ColorText applyTheme="success">SvelteTip</ColorText> library
              over time, so check back often to see if there's a component you can use for your project!
            </p>
          </section>
        </Section>
    </FadeIn>
  </Container>
</ThemeWrapper>

<ThemeWrapper>
  <Container>
    <FadeIn condition='when-inviewport' fadeDirection='right'>
      <Section nomargin>
        <section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
          <h2 class="about-title">Optimized for Production</h2>
          <p>
            <ColorText applyTheme="success">SvelteTip</ColorText> is built with optimization in mind but
            without all the hassel that goes into it. Quite simply:
            <br /><br />
            Build for production:
            <br />
            <br />
            <CodeBlock
              hidetitle
              show
              snippet={`            
      npm run build
              `}
            />

            <br />
            And to serve:
          </p>

          <p>
            <CodeBlock
              hidetitle
              show
              snippet={`            
      npm run start
            `}
            />

            <br />
            No additional configurations necessary (unless you want it of course).
            <br /><br />
            EZ freakin' PZ.
          </p>

          <!-- <p>
            And on a personal note, while I love and adore React and Vue for their own merits,
            developing with <ColorText applyTheme="warning"
              ><Link target="_blank" href="https://svelte.dev/" inherit>Svelte</Link></ColorText
            > is just a much better experience.
          </p> -->
        </section>
      </Section>
    </FadeIn>
  </Container>
</ThemeWrapper>

<ThemeWrapper invert>
  <Container>
    <FadeIn condition='when-inviewport' fadeDirection='right'>
      <Section nomargin>
        <section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
          <h2 class="about-title">
            <ColorText applyTheme="success">SvelteTip</ColorText> is Non-opinionated (kinda)
          </h2>
          <p>
            Do you like Typescript? SCSS or SASS? Less or Stylus? Pug? Awesome - me too; give me all
            the tools please. Build how you want to bulid. While there is a recommended structure
            <ColorText applyTheme="success">SvelteTip</ColorText> prefers for it's root app, nothing says
            you have to use it. Or any of it. It's as non-commital as your last failed relationship (presumably).
          </p>
          <p>
            Everything in <ColorText applyTheme="success">SvelteTip</ColorText> is meant to be easily customizable,
            including the colors, typography and component styles. In fact, this entire site is built using
            only the components in the <ColorText applyTheme="success">SvelteTip</ColorText> library!
          </p>
        </section>
      </Section>
  </FadeIn>
  </Container>
</ThemeWrapper>

<ThemeWrapper>
  <Container>
    <FadeIn condition='when-inviewport' fadeDirection='right'>
      <Section nomargin>
        <section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
          <h2 class="about-title">Try it out now</h2>
          <p>
            <ColorText applyTheme="success">SvelteTip</ColorText> is working towards a 1.0 release soon,
            but feel free to check it out now!
          </p>
          <br />
          <div style="max-width: 200px; margin: auto">
            <Button
              href="https://github.com/allenRoyston/svelte-component-library"
              target="_blank"
              applyTheme={theme === 'light' ? 'magic' : 'primary'}
              hollow
              size="large"
              rounded>Github</Button
            >
          </div>
        </section>
      </Section>
    </FadeIn>
  </Container>
</ThemeWrapper>


<ThemeWrapper invert>
  <Container>
    <FadeIn condition='when-inviewport' fadeDirection='right'>
      <Section nomargin>
        <section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
          <h2 class="about-title">
            Built using <ColorText applyTheme="success">SvelteTip</ColorText>!
          </h2>
          <p>Nothing yet, but let's try and change that around shall we!</p>
        </section>
      </Section>
    </FadeIn>
  </Container>
</ThemeWrapper>

<style lang="scss">
	.about-title {
		font-size: 28px;
	}

	section {
		padding: 50px 0;
		max-width: 500px;
		margin: auto;

		&.tabletAndBelow{
			padding: 20px 0;
		}
	}
</style>
