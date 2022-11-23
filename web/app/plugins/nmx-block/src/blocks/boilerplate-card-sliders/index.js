/**
 * BLOCK: TM Slider Block
 */

import './styles/editor.scss'
import './styles/style.scss'
// import './slide-item'

import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

import Save from "./components/save";
import Edit from "./components/edit";

const attr = {
	align: {
		type: 'string',
		default: ''
	},

	//slider opt
	slidesToShow: {
		type: 'number',
		default: 2
	},
	slidesToScroll: {
		type: 'number',
		default: 1
	},
	arrows: {
		type: 'boolean',
		default: true
	},
	dots: {
		type: 'boolean',
		default: false
	},
	autoplay: {
		type: 'boolean',
		default: false
	},
	infinite: {
		type: 'boolean',
		default: true
	}
};

export default registerBlockType('boilerplate-blocks/boilerplate-card-sliders', {
	title: __('Card Sliders - Boilerplate Blocks'),
	category: 'boilerplate-blocks',
    keywords: [__('carousel'), __('card'), __('sliders')],
	icon: 'slides',
	supports: {
		align: ['full']
	},
	attributes: attr,

	/* Render the block in the editor. */
	edit: (props) => {
		return <Edit {...props} />;
	},
	save: (props) => {
		return <Save {...props} />;
	}
})
