<script lang="ts">
	import ColumnLayout from '@layout/ColumnLayout.svelte';
	import Container from '@layout/Container.svelte';

	const root = '/components';

	let links = [
		// CORE
		{ title: 'hashWatch', section: 'Core', href: `${root}/hashWatch` },
		{ title: 'indexDB', section: 'Core', href: `${root}/indexDB` },
		{ title: 'modal', section: 'Core', href: `${root}/modal` },
		{ title: 'snackbar', section: 'Core', href: `${root}/snackbar` },

		// LINKS
		{ title: 'link', section: 'Links', href: `${root}/link` },
		{ title: 'articleLink', section: 'Links', href: `${root}/articleLink` },

		// BUTTON
		{ title: 'button', section: 'Buttons', href: `${root}/button` },
		{ title: 'iconButton', section: 'Buttons', href: `${root}/iconButton` },
		{ title: 'channelButton', section: 'Buttons', href: `${root}/channelButton` },
		{ title: 'pill', section: 'Buttons', href: `${root}/pill` },

		// FORM
		{ title: 'formBuilder', section: 'Forms', href: `${root}/formBuilder` },
		{ title: 'input', section: 'Forms', href: `${root}/input` },
		{ title: 'fileInput', section: 'Forms', href: `${root}/fileInput` },
		{ title: 'inputCheckbox', section: 'Forms', href: `${root}/inputCheckbox` },
		{ title: 'textarea', section: 'Forms', href: `${root}/textarea` },
		{ title: 'inputDate', section: 'Forms', href: `${root}/inputDate` },
		{ title: 'inputTime', section: 'Forms', href: `${root}/inputTime` },
		{ title: 'rating', section: 'Forms', href: `${root}/rating` },
		{ title: 'select', section: 'Forms', href: `${root}/select` },
		{ title: 'selectMulti', section: 'Forms', href: `${root}/selectMulti` },

		// BASE
		{ title: 'accordion', section: 'Base', href: `${root}/accordion` },
		{ title: 'channels', section: 'Base', href: `${root}/channels` },
		{ title: 'colorText', section: 'Base', href: `${root}/colorText` },
		{ title: 'htag', section: 'Base', href: `${root}/htag` },
		{ title: 'link', section: 'Base', href: `${root}/link` },
		{ title: 'progressBar', section: 'Base', href: `${root}/progressBar` },
		{ title: 'spinner', section: 'Base', href: `${root}/spinner` },
		{ title: 'search', section: 'Base', href: `${root}/search` },
		{ title: 'svg', section: 'Base', href: `${root}/svg` },
		{ title: 'twoSlot', section: 'Base', href: `${root}/twoSlot` },
		{ title: 'threeSlot', section: 'Base', href: `${root}/threeSlot` },

		// EXAMPLES
		{ title: 'formExample', section: 'Examples', href: `${root}/formExample` },
		{ title: 'pixiExample', section: 'Examples', href: `${root}/pixiExample` },
		{ title: 'draggableExample', section: 'Examples', href: `${root}/draggableExample` },

		// LAYOUT
		{ title: 'header', section: 'Layout', href: `${root}/header` },
		{ title: 'footer', section: 'Layout', href: `${root}/footer` },
		{ title: 'gridLayout', section: 'Layout', href: `${root}/gridLayout` },
		{ title: 'columnLayout', section: 'Layout', href: `${root}/columnLayout` },
		{ title: 'navbar', section: 'Layout', href: `${root}/navbar` },
		{ title: 'section', section: 'Layout', href: `${root}/section` },
		{ title: 'container', section: 'Layout', href: `${root}/container` },
		{ title: 'heroBanner', section: 'Layout', href: `${root}/heroBanner` },
		{ title: 'themeWrapper', section: 'Layout', href: `${root}/themeWrapper` },
		{ title: 'stack', section: 'Layout', href: `${root}/stack` },
		{ title: 'box', section: 'Layout', href: `${root}/box` },
		{ title: 'scrollWrapper', section: 'Layout', href: `${root}/scrollWrapper` },
		{ title: 'tabs', section: 'Layout', href: `${root}/tabs` },

		// PANELS
		{ title: 'panel', section: 'Panels', href: `${root}/panel` },
		{ title: 'glassPanel', section: 'Panels', href: `${root}/glassPanel` },

		// SHOPPING
		{ title: 'shoppingCart', section: 'Shopping', href: `${root}/shoppingCart` },

		// CARDS
		{ title: 'profileCard', section: 'Cards', href: `${root}/profileCard` },
		{ title: 'productCard', section: 'Cards', href: `${root}/productCard` },

		// IMAGES
		{ title: 'smartImage', section: 'Images', href: `${root}/smartImage` },
		{ title: 'fullImage', section: 'Images', href: `${root}/fullImage` },
		{ title: 'responsiveImage', section: 'Images', href: `${root}/responsiveImage` },
		{ title: 'imageGallery', section: 'Images', href: `${root}/imageGallery` },

		// UTILITY
		{ title: 'draggable', section: 'Utility', href: `${root}/draggable` },
		{ title: 'droppable', section: 'Utility', href: `${root}/droppable` },
		{ title: 'codeBlock', section: 'Utility', href: `${root}/codeBlock` },
		{ title: 'loremBlock', section: 'Utility', href: `${root}/loremBlock` },
		{ title: 'fadeIn', section: 'Utility', href: `${root}/fadein` },
		{ title: 'inViewport', section: 'Utility', href: `${root}/inViewport` },

		// EXTERNAL
		{ title: 'pixijs', section: 'External', href: `${root}/pixijs` },
		{ title: 'quill', section: 'External', href: `${root}/quill` }
	];

	links = links.sort((a, b) => a?.title.localeCompare(b?.title));
</script>

<Container>
	<ColumnLayout {links} watchParam="section">
		<div style="padding: 20px;">
			<main>
				<slot />
			</main>
		</div>
	</ColumnLayout>
</Container>
