<script lang="ts">
	import { DeviceStore, SiteStore, ModalStore } from '@stores/index';

	import Section from '@layout/Section.svelte';
	import CodeBlock from '@utility/CodeBlock.svelte';
	import Panel from '@panel/Panel.svelte';

	const { appWidth, isMobile, isTabletAndBelow, isTablet, isDesktop, isNativeMobile } = DeviceStore;
	const {
		urlHash,
		urlParams,
		openSidebar,
		openNotch,
		searchValue,
		shrinkHeader,
		innerContainerAdditionalHeight
	} = SiteStore;

	const { modalIsOpen, modalIsBusy, modalProps } = ModalStore;
</script>

<Section>
	<section>
		<Panel open skinnybar rounded shadowOnHover>
			<h3 slot="title">DeviceStore</h3>

			<div slot="content">
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
				<p>
					isNativeMobile: {$isNativeMobile}
				</p>

				<CodeBlock
          hidetitle
					show
					snippet={`
            import {DeviceStore} from '@stores/store'
            const {appWidth, isMobile, isTabletAndBelow, isTablet, isDesktop} = DeviceStore;
  
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
            `}
				/>
			</div></Panel
		>

		<Panel open skinnybar rounded shadowOnHover>
			<h3 slot="title">Sitestore</h3>
			<div slot="content">
				<p>
					openSidebar: {$openSidebar}
				</p>
				<p>
					openNotch: {$openNotch}
				</p>
				<p>
					searchValue: {$searchValue}
				</p>
				<p>
					shrinkHeader: {$shrinkHeader}
				</p>
				<p>
					innerContainerAdditionalHeight: {$innerContainerAdditionalHeight}
				</p>
				<p>
					urlHash: {JSON.stringify($urlHash, 4)}
				</p>
				<p>
					urlParams: {JSON.stringify($urlParams, 4)}
				</p>

				<CodeBlock
          hidetitle
					show
					snippet={`
          import {SiteStore} from '@stores/store'
          const {urlHash, urlParams, openSidebar, openNotch, searchValue} = DeviceStore;

          <p>
            openSidebar: {$openSidebar} 
          </p> 
          <p>
            openNotch: {$openNotch} 
          </p> 
          <p>
            searchValue: {$searchValue} 
          </p> 
          <p>
            urlHash: {JSON.stringify($urlHash, 4)} 
          </p> 
          <p>
            urlParams: {JSON.stringify($urlParams, 4)} 
          </p>             
          `}
				/>
			</div></Panel
		>

		<Panel open skinnybar rounded shadowOnHover>
			<h3 slot="title">Modalstore</h3>
			<div slot="content">
				<CodeBlock					
					show
          hidetitle
					snippet={`
          import {ModalStore} from '@stores/store'
          const {modalIsOpen, modalIsBusy, modalProps, onModalSubmit, setModalState} = DeviceStore;

          <p>
            modalIsOpen: {$modalIsOpen} 
          </p>   
          <p>
            modalIsBusy: {$modalIsBusy} 
          </p>     
          <p>
            modalProps: {$modalProps} 
          </p>            
          `}
				/>

				<p>
					modalIsOpen: {$modalIsOpen}
				</p>
				<p>
					modalIsBusy: {$modalIsBusy}
				</p>
				<p>
					modalProps: {$modalProps}
				</p>

				<CodeBlock					
					show
          title='Show/hide modal'
					snippet={`
          setModalState(true) // open
          setModalState(false) // close
          `}
				/>
			</div></Panel
		>
	</section>
</Section>

<style lang="scss">
	@import '../../../scss/src/_media-queries.scss';

	section {
		padding: 50px 0;
		max-width: 900px;
		margin: auto;

		@include tablet-landscape-and-below {
			padding: 20px 0;
		}
	}
</style>
