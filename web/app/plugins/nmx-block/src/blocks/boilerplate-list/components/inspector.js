
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor'
import { RangeControl, PanelBody } from '@wordpress/components'

const Inspector = (props) => {
	const { attributes, setAttributes } = props
	const { txtColor, fontSize, gap } = attributes
	return (
		<InspectorControls>
			<PanelBody title='General' initialOpen={false}>
				<RangeControl
					label="Gap Item"
					value={gap}
					onChange={(value) => setAttributes({ gap: value })}
					min={2}
					allowReset
					max={50}
					beforeIcon="menu-alt3"
				/>
			</PanelBody>

			<PanelColorSettings
				title='Color Text'
				initialOpen={false}
				colorSettings={[
					{
						value: txtColor,
						onChange: (value) => setAttributes({ txtColor: value }),
						label: 'Text color',
					},
				]}
			/>
		</InspectorControls>
	)
}

export default Inspector;