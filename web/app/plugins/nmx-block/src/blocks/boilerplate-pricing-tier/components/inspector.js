
import {
	InspectorControls,
	PanelColorSettings,
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor'
import {
	PanelBody, RangeControl,
    __experimentalBoxControl as BoxControl
} from '@wordpress/components'

const Inspector = (props) => {
	const { attributes, setAttributes } = props
	const { bgColor, borderRadius, padding} = attributes
	
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
                <hr/>

                <BoxControl
                    label="Padding"
                    values={ padding }
                    onChange={ ( nextValues ) => setAttributes({padding:nextValues} ) }
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