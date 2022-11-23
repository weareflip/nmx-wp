//  Import CSS.
import './styles/editor.scss';
import './styles/style.scss';

import Edit from './components/edit';
import Save from './components/save';

import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

const listBlockIcon = (
	<svg height="20" viewBox="2 2 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
		<path d="M0 0h24v24H0z" fill="none" />
	</svg>
);

const listBlockAttrs = {
	txtColor: {
		type: 'string',
		default: '#00293C',
	},
	gap: {
		type: 'number',
		default: 20,
	},
	values: {
		type: 'array',
		source: 'children',
		selector: 'ul',
		default: [],
	}
};

registerBlockType('nmx-block/list-block', {
	title: 'Bullet Lists - Boilerplate Block',
	description: 'List block with custom icons and styles.',
	icon: {
		src: listBlockIcon,
	},
	category: 'common',
	keywords: ['list','icon'],
	attributes: listBlockAttrs,
	example: {
		attributes: {
			isPreview: true
		},
	},
	supports: {
		anchor: true,
	},
	styles: [
		{ name: 'bullets', label: 'Bullets', isDefault: true },
		{ name: 'ticks', label: 'Ticks' },
		{ name: 'numbered', label: 'Numbered' },
		{ name: 'arrow', label: 'Arrow' },
	],
	edit: Edit,
	save: Save,
});
