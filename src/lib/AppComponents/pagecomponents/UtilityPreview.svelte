<script lang="ts">
	import { DeviceStore } from '@stores/index';

	import Section from '@layout/Section.svelte';
	import CodeBlock from '@utility/CodeBlock.svelte';
	import Panel from '@panel/Panel.svelte';

	const { appWidth, isMobile, isTabletAndBelow, isTablet, isDesktop } = DeviceStore;

	const classes = [
		'mobile-only',
		'mobile-portrait-and-below',
		'mobile-portrait-and-up',
		'mobile-landscape-and-below',
		'mobile-landscape-and-up',
		'tablet-portrait-and-below',
		'tablet-portrait-and-up',
		'tablet-landscape-only',
		'tablet-landscape-and-below',
		'tablet-landscape-and-up',
		'desktop-and-up',
		'desktop-and-below',
		'retina'
	];
</script>

<Section>
	<section>
		<Panel open rounded shadowOnHover>
			<h3 slot="title">Realtime Detection</h3>
			<div slot="content">
				<CodeBlock
          hidetitle
					title="Import:"
					snippet={`
          import {DeviceStore} from '@stores/store'
          const {appWidth, isMobile, isTabletAndBelow, isTablet, isDesktop} = DeviceStore;
  
          <p>
            Width: {$appWidth} 
          </p>
          <p class:active={$isMobile}>
            isMobile: {$isMobile} 
          </p>
          <p class:active={$isTablet}>
            isTablet: {$isTablet} 
          </p>
          <p class:active={$isTabletAndBelow}>
            isTabletAndBelow: {$isTabletAndBelow} 
          </p>          
          <p class:active={$isDesktop}>
            isDesktop: {$isDesktop}
          </p>          
          <p class:active={$isDesktop}>
            isDesktop: {$isDesktop}
          </p>
          `}
				/>
				<p>
					Width: {$appWidth}
				</p>
				<p class:active={$isMobile}>
					IsMobile: {$isMobile}
				</p>
				<p class:active={$isTabletAndBelow}>
					isTabletAndBelow: {$isTabletAndBelow}
				</p>
				<p class:active={$isTablet}>
					IsTablet: {$isTablet}
				</p>
				<p class:active={$isDesktop}>
					isDesktop: {$isDesktop}
				</p>
			</div>
		</Panel>

		<Panel open rounded shadowOnHover>
			<h3 slot="title">Media Queries</h3>

			<div slot="content">
				<CodeBlock
					hidetitle
					title="Import:"
					snippet={`
          @import "[root]/src/_media-queries.scss";
          `}
				/>

				{#each classes as _class}
					<Panel open rounded shadowOnHover>
						<div slot="title">
							<div class={`utility-block vis-${_class}`}>
								<h3>.{_class}</h3>
							</div>
						</div>

						<div slot="content">
							<CodeBlock
                hidetitle
								title="Example:"
								snippet={`
                @include ${_class} {
                  color: green
                }
                `}
							/>
						</div>
					</Panel>
				{/each}
			</div>
		</Panel>
	</section>
</Section>

<style lang="scss">

	section {
		padding: 50px 0;
		max-width: 900px;
		margin: auto;

	}

	p.active {
		color: var(--success-0);
	}

	.utility-block {
		opacity: 0.4;

		&.vis-mobile-only {
			color: var(--danger-0);
			@include mobile-only {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-mobile-portrait-and-below {
			color: var(--danger-0);
			@include mobile-portrait-and-below {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-mobile-portrait-and-below {
			color: var(--danger-0);
			@include mobile-portrait-and-below {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-mobile-portrait-and-up {
			color: var(--danger-0);
			@include mobile-portrait-and-up {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-mobile-landscape-and-below {
			color: var(--danger-0);
			@include mobile-landscape-and-below {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-mobile-landscape-and-up {
			color: var(--danger-0);
			@include mobile-landscape-and-up {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-tablet-only {
			color: var(--danger-0);
			@include tablet-only {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-tablet-portrait-and-below {
			color: var(--danger-0);
			@include tablet-portrait-and-below {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-tablet-portrait-and-up {
			color: var(--danger-0);
			@include tablet-portrait-and-up {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-tablet-landscape-only {
			color: var(--danger-0);
			@include tablet-landscape-only {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-tablet-landscape-and-below {
			color: var(--danger-0);
			@include tablet-landscape-and-below {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-tablet-landscape-and-up {
			color: var(--danger-0);
			@include tablet-landscape-and-up {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-desktop-and-up {
			color: var(--danger-0);
			@include desktop-and-up {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-desktop-and-below {
			color: var(--danger-0);
			@include desktop-and-below {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-desktop-only {
			color: var(--danger-0);
			@include desktop-only {
				opacity: 1;
				color: var(--success-3);
			}
		}

		&.vis-retina {
			color: var(--danger-0);
			@include retina {
				opacity: 1;
				color: var(--success-3);
			}
		}
	}
</style>
