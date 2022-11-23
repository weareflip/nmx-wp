
import {
	InspectorControls,
} from '@wordpress/block-editor'
import {
	PanelBody,RangeControl, ToggleControl,
} from '@wordpress/components'

const Inspector = (props) => {
	const { attributes, setAttributes } = props
	const { fzHeading, open} = attributes

	return (
		<InspectorControls>			
            <PanelBody title='Genrenal'>
                <RangeControl
                    label="Font Size Title"
                    min={1}
                    max={100}
                    value={fzHeading}
                    onChange={(fzHeading) => setAttributes({ fzHeading })}
                />

                <ToggleControl
                    label="Open default"
                    checked={open}
                    onChange={() => setAttributes({ open: !open })}
                />
            </PanelBody>
		</InspectorControls>
	)
}

export default Inspector