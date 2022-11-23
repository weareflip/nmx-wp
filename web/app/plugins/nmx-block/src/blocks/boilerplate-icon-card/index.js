/**
 * BLOCK: Icon Text
 */

import "./styles/style.scss";
import "./styles/editor.scss";

import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import Edit from "./components/edit";
import Save from "./components/save";

registerBlockType('boilerplate-blocks/boilerplate-icon-card', {
    title: __('Icon Card - Boilerplate Blocks'),
    category: 'boilerplate-blocks',
    keywords: [__('icon'), __('card')],
    icon: 'shield',
	attributes: {
        imgID: {
            type: "number",
            default: 0,
        },
        imgUrl: {
            type: "string",
            default: cgbGlobal.iconCardDefault
        },
        iconAlign: {
            type: "string",
			default: "flex-start"
        },
        fzIcon: {
            type: 'number',
            default: 56
        },
        bgColor: {
            type: 'string',
            default: 'transparent',
        },
        borderRadius: {
            type: 'number',
            default: 0
        },
        blockPaddingTop: {
            type: 'Object',
            default: {
                default: '24px',
                tablet: '24px',
                mobile: '0px',
                sync: true,
            }
        },
        blockPaddingBottom: {
            type: 'Object',
            default: {
                default: '24px',
                tablet: '24px',
                mobile: '0px',
                sync: true,
            }
        },
        blockPaddingLeft: {
            type: 'Object',
            default: {
                default: '15px',
                tablet: '15px',
                mobile: '0px',
                sync: true,
            }
        },
        blockPaddingRight: {
            type: 'Object',
            default: {
                default: '15px',
                tablet: '15px',
                mobile: '0px',
                sync: true,
            }
        },
        align: {
            type: "string",
            default: "top",
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