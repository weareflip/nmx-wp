//  Import CSS.
import "./styles/style.scss";
import "./styles/editor.scss";

import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

import Edit from "./components/edit";
import Save from "./components/save";

const attr = {
	heading: {
		type: 'string',
		default: 'Lorem ipsum dolor sit amet'
	},
	open: {
		type: 'boolean',
		default: false
	},
	anchor: {
		type: 'string'
	},
	fzHeading: {
		type: 'number',
		default: 22.5
	},
};

registerBlockType('boilerplate-blocks/boilerplate-accordion', {
	title: __('Accordion - Boilerplate Blocks'),
	category: 'boilerplate-blocks',
	keywords: [__('accordion'), __('question'), __('answer')],
	description: __('Add accordion block with a title and text'),
	icon: 'text',
	attributes: attr,
	supports: {
		'anchor': true,
	},

	/* Render the block in the editor. */
	edit: (props) => {
		return <Edit {...props} />;
	},
	/* Save the block markup. */
	save: (props) => {
		return <Save {...props} />;
	},
});
