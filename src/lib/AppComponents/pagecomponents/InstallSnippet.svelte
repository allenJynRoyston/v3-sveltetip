<script lang="ts">
	import { getContext } from 'svelte';
	import { dev } from '$app/env';
	import { DeviceStore } from '@st-stores/index';

	import Container from '@layout/Container.svelte';
	import Section from '@layout/Section.svelte';
	import Tabs from '@layout/Tabs.svelte';
	import ColorText from '@text/ColorText.svelte';
	import ThemeWrapper from '@layout/ThemeWrapper.svelte';
	import Link from '@link/Link.svelte';
	import CodeBlock from '@utility/CodeBlock.svelte';
	import FadeIn from '@utility/FadeIn.svelte';
	import ResponsiveImage from '@images/ResponsiveImage.svelte';

	const { isTabletAndBelow } = DeviceStore;
	const theme: string = getContext('theme');
	const version: string = getContext('version');
</script>

<ThemeWrapper invert>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">TL;DR</h2>
					<p>
						A new SvelteKit project with SvelteTip pre-installed can be found here <ColorText
							applyTheme="magic"
							><Link
								active
								inherit
								target="_blank"
								href="https://github.com/allenRoyston/sveltetip-new-project"
							>
								here</Link
							></ColorText
						>.
					</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  $: git clone https://github.com/allenRoyston/sveltetip-new-project.git   
  $: cd svelteip-new-project

  $: pnpm install 
  OR
  $: npm install
  
  $: npm run dev
        `}
					/>

					<p>Otherwise, just follow steps 1 to 6 to start using SvelteTip now!</p>
				</section>
			</Section>
		</FadeIn>
	</Container>
</ThemeWrapper>

<Tabs />

<ThemeWrapper>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">Step 1:</h2>
					<p>
						Note: The same steps will work for a new or exisiting projects, but for demo purposes
						lets pretend like you're starting a new project. For existing projects, go to step 2.
					</p>
					<p>Start by installing a new SvelteKit project:</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  npm init svelte@next my-app
  cd my-app
            `}
					/>

					<p>
						The installer will have a few options available for you. Select the <b
							>Svelte Demo App</b
						>
						and <b>Typescript</b>.
					</p>
					<p>
						<small
							>(ESLint and Prettier options are entirely optional and NOT required, but are
							recommended.)
						</small>
					</p>

					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/about/installer1.PNG' : '/about/installer1.PNG'}
						alt="image"
					/>
				</section>
			</Section>
		</FadeIn>
	</Container>
</ThemeWrapper>

<ThemeWrapper invert>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">Step 2:</h2>
					<p>
						Create a folder in your /src/lib folder called <b>SvelteTip</b>. Now
						<ColorText applyTheme="magic">
							<a
								download
								href={dev
									? `../../../../static/downloads/SvelteTip.${version}.zip`
									: `/downloads/SvelteTip.${version}.zip`}>download the SvelteTip library</a
							>
						</ColorText>
						and place it's contents in the <b>src/lib/SvelteTip</b> folder.
					</p>
					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/about/newproject-2.PNG' : '/about/newproject-2.PNG'}
						alt="image"
					/>
				</section>
			</Section>
		</FadeIn>
	</Container>
</ThemeWrapper>

<ThemeWrapper>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">Step 3:</h2>
					<p>
						Next you'll want to update your package.json file. SvelteTip tries to keep dependencies
						down to an absolute minimum, but it still has a couple.
					</p>
					<p>Add these to your dev dependencies:</p>
					<CodeBlock
						show
						hidetitle
						snippet={`
  "dayjs": "^1.10.5",
  "sass": "^1.35.2",
  "node-sass": "^6.0.0"
            `}
					/>

					<p>And this to your dependencies:</p>
					<CodeBlock
						show
						hidetitle
						snippet={`
  "vite": "^2.4.1"
            `}
					/>
					<br />
					<p>It should look like the following:</p>
					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/about/newproject-3.PNG' : '/about/newproject-3.PNG'}
						alt="image"
					/>
					<p>Now save your changes and install:</p>
					<CodeBlock
						show
						hidetitle
						snippet={`
  $: npm install
            `}
					/>
				</section>
			</Section>
		</FadeIn>
	</Container>
</ThemeWrapper>

<ThemeWrapper invert>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">Step 4:</h2>
					<p>
						Update your <i>tsconfig.json</i> <b>paths</b> parameter.
					</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  "@button/*": ["src/lib/SvelteTip/@Buttons/*"],
  "@cards/*": ["src/lib/SvelteTip/@Cards/*"],
  "@chart/*": ["src/lib/SvelteTip/@Charts/*"],
  "@examples/*": ["src/lib/SvelteTip/@Examples/*"],
  "@external/*": ["src/lib/SvelteTip/@External/*"],
  "@form/*": ["src/lib/SvelteTip/@Form/*"],
  "@required/*": ["src/lib/SvelteTip/@Required/*"],
  "@images/*": ["src/lib/SvelteTip/@Images/*"],
  "@layout/*": ["src/lib/SvelteTip/@Layout/*"],
  "@link/*": ["src/lib/SvelteTip/@Links/*"],
  "@panel/*": ["src/lib/SvelteTip/@Panels/*"],
  "@shopping/*": ["src/lib/SvelteTip/@Shopping/*"],
  "@system/*": ["src/lib/SvelteTip/@System/*"],
  "@text/*": ["src/lib/SvelteTip/@Text/*"],
  "@utility/*": ["src/lib/SvelteTip/@Utility/*"],

  "@st-stores/*": ["src/lib/SvelteTip/stores/*"],
  "@st-js/*": ["src/lib/SvelteTip/js/*"]      
            `}
					/>

					<p>Make sure it looks like the following:</p>

					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/about/newproject-4.PNG' : '/about/newproject-4.PNG'}
						alt="image"
					/>

					<p>Save your file and continue.</p>
				</section>
			</Section>
		</FadeIn>
	</Container>
</ThemeWrapper>

<ThemeWrapper>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">Step 5:</h2>

					<p>
						Update your <i>svelte.config.js</i> by adding the <b>vite</b> param. Just copy the
						following snippet and paste it into your own file.
						<br />
						<br />
						* If you're adding to an exisiting project and are using a different folder naming convention,
						just make sure it matches.
					</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  vite: () => ({
    resolve: {
      alias: {
        // SVELTETIP ALIASES
        '@button': path.resolve('./src/lib/SvelteTip/@Buttons'),
        '@cards': path.resolve('./src/lib/SvelteTip/@Cards'),
        '@chart': path.resolve('./src/lib/SvelteTip/@Charts'),
        '@examples': path.resolve('./src/lib/SvelteTip/@Examples'),
        '@external': path.resolve('./src/lib/SvelteTip/@External'),
        '@form': path.resolve('./src/lib/SvelteTip/@Form'),
        '@images': path.resolve('./src/lib/SvelteTip/@Images'),
        '@layout': path.resolve('./src/lib/SvelteTip/@Layout'),
        '@link': path.resolve('./src/lib/SvelteTip/@Links'),
        '@panel': path.resolve('./src/lib/SvelteTip/@Panels'),
        '@shopping': path.resolve('./src/lib/SvelteTip/@Shopping'),
        '@system': path.resolve('./src/lib/SvelteTip/@System'),
        '@text': path.resolve('./src/lib/SvelteTip/@Text'),
        '@utility': path.resolve('./src/lib/SvelteTip/@Utility'),
        // SVELTETIP SUPPORTING FILES
        '@st-stores': path.resolve('./src/lib/SvelteTip/stores'),
        '@st-js': path.resolve('./src/lib/SvelteTip/js'),
      }
    }
  }),
            `}
					/>

					<p>
						<sub> * Don't forget to import path. </sub>
					</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  import path from 'path'
            `}
					/>

					<p>Make sure it looks like the following:</p>
					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/about/newproject-5.PNG' : '/about/newproject-5.PNG'}
						alt="image"
					/>

					<p>Save your file and continue.</p>
				</section>
			</Section>
		</FadeIn>
	</Container>
</ThemeWrapper>

<ThemeWrapper invert>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">Step 6:</h2>
					<p>
						Lastly, you'll just need import and place the SvelteTipApp at the root of your app.
						While you can do this - generally speaking - at any level, the best place is in the <b
							>src/routes/__layout.svelte</b
						> file so SvelteTip components can be used throughout the entire app. In the demo app, it
						can be found here:
					</p>
					<CodeBlock
						show
						hidetitle
						snippet={`
  <script lang="ts"  >
    import Header from '$lib/header/Header.svelte';
    import SvelteTipApp from '@system/SvelteTipApp.svelte';
    import '../app.css';
  </script  >

  <SvelteTipApp>
    <Header />

    <main>
      <slot />
    </main>

    <footer>
      <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
    </footer>
  </SvelteTipApp>
            `}
					/>
					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/about/newproject-6.PNG' : '/about/newproject-6.PNG'}
						alt="image"
					/>
				</section>
			</Section>
		</FadeIn>
	</Container>
</ThemeWrapper>

<ThemeWrapper>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">Step 7 (optional):</h2>
					<p>Create a new file in the <b>src/routes/</b> and name it <b>test.svelte</b></p>

					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/about/newproject-7a.PNG' : '/about/newproject-7a.PNG'}
						alt="image"
					/>

					<p>Copy/paste the following code snippet.</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  <script >
    import ThemeWrapper from '@layout/ThemeWrapper.svelte'
    import Container from '@layout/Container.svelte'
    import Section from '@layout/Section.svelte'
    import HeroBanner from '@layout/HeroBanner.svelte'
    import Link from '@link/Link.svelte'

    const heroprops = {
      title: "SvelteTip!",
      buttonOne: {
        text: 'Home',
        applyTheme: 'secondary',
        rounded: true,     
        href: '/'
      },
      buttonTwo: {
        text: 'Components',
        applyTheme: 'black',
        rounded: true,  
        hollow: true,
        href: 'https://www.sveltetip.com/components',
        target: "_blank"    
      }    
    }   
  </script >

  <ThemeWrapper invert>
    <HeroBanner {...heroprops}  />
  </ThemeWrapper>


  <ThemeWrapper invert>
    <Container>
        <Section nomargin>
          <section>
            <h2>I can now use SvelteTip components in my application!</h2>
            <p>
              Check out <Link active target='_blank' href='https://www.sveltetip.com/components'>the SvelteTip component</Link> page for details on 
              what components are available and how to use them.            
            </p>
            
          </section>
        </Section>
    </Container>
  </ThemeWrapper>
          `}
					/>

					<p>Start the project.</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  $: npm run dev
          `}
					/>

					<p>
						Navigate to <b>localhost:3000/test</b>. If you get the following output, then SvelteTip
						is working correctly!
					</p>

					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/about/newproject-8.PNG' : '/about/newproject-8.PNG'}
						alt="image"
					/>

					<p>
						Again, a quickstart repo with all the steps up to this point can be found <ColorText
							applyTheme="magic"
							><Link
								active
								inherit
								target="_blank"
								href="https://github.com/allenRoyston/sveltetip-new-project"
							>
								here</Link
							></ColorText
						>.
					</p>
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
		max-width: 650px;
		margin: auto;

		&.tabletAndBelow {
			padding: 20px 0;
		}
	}
</style>
