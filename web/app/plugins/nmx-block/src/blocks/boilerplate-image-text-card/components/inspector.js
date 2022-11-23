
import {
	InspectorControls,
	PanelColorSettings,
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor'
import {
	PanelBody, RangeControl,
} from '@wordpress/components'

const Inspector = (props) => {
	const { attributes, setAttributes } = props
	const { bgColor, borderRadius} = attributes
	
	return (
		<InspectorControls>		            
            <PanelBody title='Genrenal'>
                <RangeControl
                    label="Border Radius"
                    min={0}
                    max={500}
                    value={borderRadius}
                    onChange={(borderRadius) => setAttributes({ borderRadius })}
                />
            </PanelBody>
            
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
		</InspectorControls>
	)
}

export default Inspector