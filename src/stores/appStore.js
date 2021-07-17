import { writable } from 'svelte/store';
import { browser } from '$app/env';

//-------------------------------
// localstorage setup
const lsName = 'libraryStore';
const lsDefault = {
	showImport: true,
	showProperties: true,
	showExample: true,
	showCode: true,
	showActions: true
};

const ls = browser
	? !!localStorage.getItem(lsName)
		? JSON.parse(localStorage.getItem(lsName))
		: lsDefault
	: lsDefault;

const _store = { ...ls };
//-------------------------------

//-------------------------------
// create/export store
const showExample = writable(_store.showExample);
const showImport = writable(_store.showImport);
const showProperties = writable(_store.showProperties);
const showCode = writable(_store.showCode);
const showActions = writable(_store.showActions);

function siteInit() {
	return {
		showImport,
		showProperties,
		showExample,
		showCode,
		showActions
	};
}

export const AppStore = siteInit();
//-------------------------------

//-------------------------------
// subscribe to watch for changes
showImport.subscribe((val) => {
	_store.showImport = val;
});

showProperties.subscribe((val) => {
	_store.showProperties = val;
});

showExample.subscribe((val) => {
	_store.showExample = val;
});

showCode.subscribe((val) => {
	_store.showCode = val;
});

showActions.subscribe((val) => {
	_store.showActions = val;
});
//-------------------------------

//-------------------------------
// remove after loaded
if (browser) {
	localStorage.removeItem(lsName);

	window.addEventListener('beforeunload', () => {
		localStorage.setItem(lsName, JSON.stringify(_store));
	});
}
//-------------------------------
