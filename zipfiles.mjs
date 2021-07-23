import { zip } from 'zip-a-folder';
import fs from 'fs';

fs.readFile('package.json', 'utf8', async (err, data) => {
	const { version } = JSON.parse(data);
	const fileName = `SvelteTip.${version}.zip`;
	await zip('./src/lib/SvelteTip', `./static/downloads/${fileName}`, 'SvelteTip');
	console.log(`${fileName} created`);

	fs.writeFile('./src/version.js', `export const version = "${version}"`, () => {
		console.log('version file created');
	});
});
