/**
 * BLOCK: Blocks Container
 */

// Import block dependencies and components
import Inspector from './components/inspector';
import Container from './components/container';

// Import CSS
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const { InnerBlocks } = wp.blockEditor;

const blockAttributes = {
	containerPaddingTop: {
		type: 'Object',
		default: {
			default: '10vh',
			tablet: '10vh',
			mobile: '10vh',
			sync: true,
		}
	},
	containerPaddingRight: {
		type: 'number',
	},
	containerPaddingBottom: {
		type: 'Object',
		default: {
			default: '10vh',
			tablet: '10vh',
			mobile: '10vh',
			sync: true,
		}
	},
	containerPaddingLeft: {
		type: 'number',
	},
	containerMarginTop: {
		type: 'number',
	},
	containerMarginBottom: {
		type: 'number',
	},
	containerWidth: {
		type: 'string',
	},
	containerMaxWidth: {
		type: 'number',
	},
	containerBackgroundColor: {
		type: 'string',
		default: '#FBFBFB'
	},
	containerBgGradientColor: {
		type: 'string',
		default: ''
	},
	containerImgURL: {
		type: 'string',
		source: 'attribute',
		attribute: 'src',
		selector: 'img',
	},
	focalPoint: {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		}
	},
	containerImgID: {
		type: 'number',
	},
	containerImgAlt: {
		type: 'string',
		source: 'attribute',
		attribute: 'alt',
		selector: 'img',
	},
	containerDimRatio: {
		type: 'number',
		default: 50,
	},
	opacityBg: {
		type: 'number',
		default: 1,
	},
};

class EditContainerBlock extends Component {
	render() {
		// Setup the attributes
		const {
			setAttributes,
		} = this.props;

		return [
			// Show the block controls on focus
			<Inspector key={'boilerplate-container-inspector-' + this.props.clientId} {...{ setAttributes, ...this.props }} />,

			// Show the container markup in the editor
			<Container key={'boilerplate-container-' + this.props.clientId} {...this.props}>
				<InnerBlocks />
			</Container>,
		];
	}
}

// Register the block
registerBlockType('boilerplate-blocks/boilerplate-container', {
	title: __('Container - Boilerplate', 'Boilerplate-blocks'),
	description: __(
		'Add a container block to wrap several blocks in a parent container.',
		'boilerplate-blocks'
	),
	icon: 'editor-table',
	category: 'boilerplate-blocks',
	keywords: [
		__('container', 'boilerplate-blocks'),
		__('section', 'boilerplate-blocks'),
		__('boilerplate', 'boilerplate-blocks'),
	],

	supports: {
		align: ['center', 'wide', 'full']
	},

	attributes: blockAttributes,

	// Render the block components
	edit: EditContainerBlock,

	// Save the attributes and markup
	save(props) {
		// Save the block markup for the front end
		return (
			<Container {...props}>
				<InnerBlocks.Content />
			</Container>
		);
	}, getEditWrapperProps({ containerWidth }) {
		if (
			'center' === containerWidth ||
			'wide' === containerWidth ||
			'full' === containerWidth
		) {
			return { 'data-align': containerWidth };
		}
	},
});
