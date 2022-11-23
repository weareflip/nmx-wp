/**
 * BLOCK: Icon Text
 */

import "./styles/style.scss";
import "./styles/editor.scss";

import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import Edit from "./components/edit";
import Save from "./components/save";

registerBlockType('boilerplate-blocks/boilerplate-hero', {
    title: __('Hero Section - Boilerplate Blocks'),
    category: 'boilerplate-blocks',
    keywords: [__('hero'), __('images')],
    icon: 'block-default',
    attributes: {
        bgColor: {
            type: 'string',
            default: '#395169',
        },
        linkScroll: {
            type: "string",
        },
        imgID: {
            type: "number",
            default: 0,
        },
        focalPoint: {
            type: "object",
            default: { x: 0.5, y: 0.5 },
        },
        imgUrl: {
            type: "string",
        },
        blockPaddingTop: {
            type: 'Object',
            default: {
                default: '172px',
                tablet: '120px',
                mobile: '120px',
                sync: true,
            }
        },
        blockPaddingBottom: {
            type: 'Object',
            default: {
                default: '214px',
                tablet: '180px',
                mobile: '186px',
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