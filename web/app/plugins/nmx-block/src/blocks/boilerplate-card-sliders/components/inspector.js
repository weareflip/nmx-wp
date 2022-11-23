import { __ } from '@wordpress/i18n'
import { InspectorControls} from '@wordpress/block-editor'
import {
	ToggleControl,
	PanelBody,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components'

const Inspector = (props) => {
    const { attributes, className, setAttributes  } = props;
    const { slidesToShow, slidesToScroll, arrows, dots,  autoplay, infinite} = attributes;

    return (
        <InspectorControls>
            <PanelBody title={__('Slider Setting')}>
                <label>Number slide to show</label>
                <NumberControl
                    isShiftStepEnabled={true}
                    onChange={(slidesToShow) => {
                        setAttributes({ slidesToShow })
                    }}
                    shiftStep={10} value={slidesToShow}
                />
                
                <hr />
                <label>Number slides to scroll</label>
                <NumberControl
                    isShiftStepEnabled={true}
                    onChange={(slidesToScroll) => {
                        setAttributes({ slidesToScroll })
                    }}
                    shiftStep={10} value={slidesToScroll}
                />

                <hr />
                <ToggleControl
                    label="Arrows"
                    help={arrows ? 'Enable arrows.' : 'Disable arrows.'}
                    checked={arrows}
                    onChange={() => {
                        setAttributes({ arrows: !arrows })
                    }}
                />

                <hr />
                <ToggleControl
                    label="Dots"
                    help={dots ? 'Enable dots.' : 'Disable dots.'}
                    checked={dots}
                    onChange={() => {
                        setAttributes({ dots: !dots })
                    }}
                />
                
                <hr />
                <ToggleControl
                    label="Autoplay"
                    help={autoplay ? 'Enable autoplay.' : 'Disable autoplay.'}
                    checked={autoplay}
                    onChange={() => {
                        setAttributes({ autoplay: !autoplay })
                    }}
                />

                <hr />
                <ToggleControl
                    label="Loop"
                    help={infinite ? 'Enable fade.' : 'Disable fade.'}
                    checked={infinite}
                    onChange={() => {
                        setAttributes({ infinite: !infinite })
                    }}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default Inspector