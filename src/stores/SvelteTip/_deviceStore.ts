import { readable, writable, derived } from 'svelte/store';
import { browser } from '$app/env';

// device detection
const appWidth = writable(0);
const appHeight = writable(0);

function deviceStoreInit() {
	return {
		appWidth,
		appHeight,
		isMobile: derived(appWidth, ($appWidth) => {
			return $appWidth >= 0 && $appWidth < 480;
		}),
		isTablet: derived(appWidth, ($appWidth) => {
			return $appWidth >= 480 && $appWidth < 768;
		}),
		isTabletAndBelow: derived(appWidth, ($appWidth) => {
			return $appWidth < 1024;
		}),
		isTabletAndAbove: derived(appWidth, ($appWidth) => {
			return $appWidth > 768;
		}),
		isDesktop: derived(appWidth, ($appWidth) => {
			return $appWidth >= 1024;
		}),
		lowHeight: derived(appHeight, ($appHeight) => {
			return $appHeight <= 1080;
		}),
		isNativeMobile: readable(
			browser
				? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
				: false,
			() => {}
		)
	};
}

export const DeviceStore = deviceStoreInit();
