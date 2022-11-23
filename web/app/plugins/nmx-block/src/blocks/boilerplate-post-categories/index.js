/**
 * BLOCK: Icon Text
 */

import "./styles/style.scss";
import "./styles/editor.scss";

import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import Edit from "./components/edit";
import Save from "./components/save";

registerBlockType('boilerplate-blocks/boilerplate-post-categories', {
    title: __('Post Categories - Boilerplate Blocks'),
    category: 'boilerplate-blocks',
    keywords: [__('post'), __('categories')],
    icon: 'block-default',
    attributes: {
        bgColor: {
            type: 'string',
            default: '#395169',
        },
        color: {
            type: 'string',
            default: '#fff',
        }
    },

	/* Render the block in the editor. */
	edit: (props) => {
		return <Edit {...props} />;
	},

	/* Save the block markup. */
	save: (props) => {
		return <Save {...props} />;
	},
})