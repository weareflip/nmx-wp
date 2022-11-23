
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck, PanelColorSettings,
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor'
import {
	PanelBody,
	Button, TextControl, ToggleControl, FocalPointPicker
} from '@wordpress/components'


const { Component } = wp.element;
import apiFetch from '@wordpress/api-fetch';

export default class Inspector extends Component {
	constructor(props) {
		super(...arguments);
	}
	render() {
		// Setup the attributes
		const {
			color, 
			bgColor,
		} = this.props.attributes;
		const { setAttributes } = this.props;
		
		return (
			<InspectorControls key="inspector">
				<PanelColorSettings
				initialOpen={false}
				title='Background Color'
				colorSettings={[
					{
						value: bgColor,
						onChange: (value) => setAttributes({ bgColor: value }),
						label: 'Color',
					}
				]}
			/>

			<PanelColorSettings
				initialOpen={false}
				title='Color'
				colorSettings={[
					{
						value: color,
						onChange: (value) => setAttributes({ color: value }),
						label: 'Color',
					}
				]}
			/>
			</InspectorControls>
		);
	}
}
