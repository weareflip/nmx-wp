/**
 * BLOCK: Icon Text
 */

import "./styles/style.scss";
import "./styles/editor.scss";

import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import Edit from "./components/edit";
import Save from "./components/save";

registerBlockType('boilerplate-blocks/boilerplate-pricing-tier', {
    title: __('Pricing Tier - Boilerplate Blocks'),
    category: 'boilerplate-blocks',
    keywords: [__('pricing'), __('tiger'), __('card')],
    icon: 'shield',
	attributes: {
        bgColor: {
            type: 'string',
        },
        borderRadius: {
            type: 'number',
        },
        padding: {
            type: 'Object',
            default: {
                top: '32px',
                bottom: '32px',
                left: '32px',
                right: '32px',
            }
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