/**
 * BLOCK: Icon Text
 */

import "./styles/style.scss";
import "./styles/editor.scss";

import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import Edit from "./components/edit";
import Save from "./components/save";

registerBlockType('boilerplate-blocks/boilerplate-call-to-action-box', {
    title: __('Call To Action Box - Boilerplate Blocks'),
    category: 'boilerplate-blocks',
    keywords: [__('call'), __('box'), __('action')],
    icon: 'megaphone',
    attributes: {
        bgColor:{
            type: "string",
            default: "#fff"

        },
        borderRadius: {
            type: "number",
            default: 0,
        },
        blockPaddingTop: {
            type: 'Object',
            default: {
                default: '64px',
                tablet: '25px',
                mobile: '0px',
                sync: true,
            }
        },
        blockPaddingBottom: {
            type: 'Object',
            default: {
                default: '64px',
                tablet: '25px',
                mobile: '0px',
                sync: true,
            }
        },
        blockPaddingLeft: {
            type: 'Object',
            default: {
                default: '64px',
                tablet: '25px',
                mobile: '0px',
                sync: true,
            }
        },
        blockPaddingRight: {
            type: 'Object',
            default: {
                default: '64px',
                tablet: '25px',
                mobile: '0px',
                sync: true,
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