/**
 * BLOCK: Icon Text
 */

import "./styles/style.scss";
import "./styles/editor.scss";

import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import Edit from "./components/edit";
import Save from "./components/save";

registerBlockType('boilerplate-blocks/boilerplate-image-text-card', {
    title: __('Image Text Card - Boilerplate Blocks'),
    category: 'boilerplate-blocks',
    keywords: [__('image'), __('card'), __('text')],
    icon: 'shield',
	attributes: {
        bgColor: {
            type: 'string',
        },
        borderRadius: {
            type: 'number',
        },
    },
    
    styles: [
		{ name: 'layout-horizontal', label: 'Horizontal', isDefault: true },
		{ name: 'layout-vertical',  label: 'Vertical' }
	],

	/* Render the block in the editor. */
	edit: (props) => {
		return <Edit {...props} />;
	},

	/* Save the block markup. */
	save: (props) => {
		return <Save {...props} />;
	},
})