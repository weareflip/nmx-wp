
import {
	InspectorControls, PanelColorSettings,
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor'
import {
	PanelBody, RangeControl, TextControl, ToggleControl
} from '@wordpress/components'

const Inspector = (props) => {
	const { attributes, setAttributes } = props
	const { blockPaddingTop, blockPaddingBottom, blockPaddingLeft, blockPaddingRight, bgColor, borderRadius} = attributes

	const onChangeSize = (position, value, screen) => {
		if (position === 'top') {
			let newSize = { ...blockPaddingTop }
			newSize[screen] = value
			if (screen == 'default' && blockPaddingTop.sync == true) {
				newSize.tablet = value
			}

			setAttributes({ blockPaddingTop: newSize })
		}else if(position === 'left'){
			let newSize = { ...blockPaddingLeft }
			newSize[screen] = value
			if (screen == 'default' && blockPaddingLeft.sync == true) {
				newSize.tablet = value
			}

			setAttributes({ blockPaddingLeft: newSize })
		} 
		else {
			let newSize = { ...blockPaddingBottom }
			newSize[screen] = value
			if (screen == 'default' && blockPaddingBottom.sync == true) {
				newSize.tablet = value
			}

			setAttributes({ blockPaddingBottom: newSize })
		}
	}

    const onChangeSizeResponsiveTop = (value) => {
		let newSize = { ...blockPaddingTop }
		newSize.sync = value
		setAttributes({ blockPaddingTop: newSize })
	}

    const onChangeSizeResponsiveBottom = (value) => {
		let newSize = { ...blockPaddingBottom }
		newSize.sync = value
		setAttributes({ blockPaddingBottom: newSize })
	}

	const onChangeSizeResponsiveLeft = (value) =>{
		let newSize = { ...blockPaddingLeft }
		newSize.sync = value
		setAttributes({ blockPaddingLeft: newSize })
	}

	const onChangeSizeResponsiveRight = (value) =>{
		let newSize = { ...blockPaddingRight }
		newSize.sync = value
		setAttributes({ blockPaddingRight: newSize })
	}

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

                <TextControl
					label='Padding Top'
					value={blockPaddingTop.default}
					onChange={(value) => {
						onChangeSize('top', value, 'default')
					}}
				/>

				<ToggleControl
					label='Sync Padding Top'
					help='Disable to custom padding top for each screen (Desktop, Tablet, Mobile)'
					checked={blockPaddingTop.sync}
					onChange={onChangeSizeResponsiveTop}
				/>

                {!blockPaddingTop.sync &&
					<div>
						<TextControl
							label='on Tablet (≦992px)'
							help='Set padding top for tablet'
							value={blockPaddingTop.tablet}
							onChange={(value) => {
								onChangeSize('top', value, 'tablet')
							}}
						/>						
					</div>
				}
				<hr/>
                <TextControl
					label='Padding Bottom'
					value={blockPaddingBottom.default}
					onChange={(value) => {
						onChangeSize('bottom', value, 'default')
					}}
				/>

				<ToggleControl
					label='Sync Padding Bottom'
					help='Disable to custom padding bottom for each screen (Desktop, Tablet, Mobile)'
					checked={blockPaddingBottom.sync}
					onChange={onChangeSizeResponsiveBottom}
				/>

				{!blockPaddingBottom.sync &&
					<div>
						<TextControl
							label='on Tablet (≦992px)'
							help='Set padding bottom for tablet'
							value={blockPaddingBottom.tablet}
							onChange={(value) => {
								onChangeSize('bottom', value, 'tablet')
							}}
						/>						
					</div>
				}
				<hr/>
				<TextControl
					label='Padding left'
					value={ blockPaddingLeft.default}
					onChange={(value) => {
						onChangeSize('top', value, 'default')
					}}
				/>

				<ToggleControl
					label='Sync Padding Left'
					help='Disable to custom padding top for each screen (Desktop, Tablet, Mobile)'
					checked={ blockPaddingLeft.sync}
					onChange={onChangeSizeResponsiveLeft}
				/>

				{!blockPaddingLeft.sync &&
					<div>
						<TextControl
							label='on Tablet (≦992px)'
							help='Set padding left for tablet'
							value={blockPaddingLeft.tablet}
							onChange={(value) => {
								onChangeSize('left', value, 'tablet')
							}}
						/>							
					</div>
				}
				<hr/>
				<TextControl
					label='Padding Right'
					value={blockPaddingRight.default}
					onChange={(value) => {
						onChangeSize('top', value, 'default')
					}}
				/>

				<ToggleControl
					label='Sync Padding Right'
					help='Disable to custom padding top for each screen (Desktop, Tablet, Mobile)'
					checked={blockPaddingRight.sync}
					onChange={onChangeSizeResponsiveRight}
				/>

				{!blockPaddingRight.sync &&
					<div>
						<TextControl
							label='on Tablet (≦992px)'
							help='Set padding right for tablet'
							value={blockPaddingRight.tablet}
							onChange={(value) => {
								onChangeSize('right', value, 'tablet')
							}}
						/>							
					</div>
				}
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