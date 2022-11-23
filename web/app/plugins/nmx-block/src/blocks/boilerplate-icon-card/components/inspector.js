
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,PanelColorSettings,
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor'
import {
	PanelBody, RangeControl,
	Button, TextControl, ToggleControl
} from '@wordpress/components'

const ALLOWED_MEDIA_TYPES = ['image']
const instructions = (
	<p>To edit the image, you need permission to upload media.</p>
);

const Inspector = (props) => {
	const { attributes, setAttributes } = props
	const { imgID, imgUrl, fzIcon, bgColor, borderRadius, blockPaddingTop, blockPaddingBottom, blockPaddingLeft, blockPaddingRight} = attributes

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
		}else if(position === 'right'){
			let newSize = { ...blockPaddingRight }
			newSize[screen] = value
			if (screen == 'default' && blockPaddingRight.sync == true) {
				newSize.tablet = value
			}
			setAttributes({ blockPaddingRight: newSize })
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
            <PanelBody title='Icon'>
                <div className="components-placeholder__fieldset">
                    <MediaUploadCheck fallback={instructions}>
                        <MediaUpload
                            title="Main Image"
                            onSelect={(media) => {
                                setAttributes({
                                    imgID: parseInt(media.id),
                                    imgUrl: media.url,
                                    srcSet: media.sizes.full.srcset
                                });
                            }}
                            allowedTypes={ALLOWED_MEDIA_TYPES}
                            value={imgID}
                            render={({ open }) => (
                                <Button
                                    className={
                                    !imgID
                                    ? "editor-post-featured-image__toggle"
                                    : "editor-post-featured-image__preview"
                                    }
                                    onClick={open}
                                >
                                    {!imgID && "Change Icon"}
                                    {!!imgID && <img src={imgUrl} alt="img" />}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>

                    {!!imgID && (
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        imgID: parseInt(media.id),
                                        imgUrl: media.url,
                                        srcSet: media.sizes.full.srcset
                                    });
                                }}
                                allowedTypes={ALLOWED_MEDIA_TYPES}
                                value={imgID}
                                render={({ open }) => (
                                    <Button onClick={open} isSecondary>
                                    {"Replace Image"}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                    )}

                    {!!imgID && (
                        <MediaUploadCheck>
                            <Button
                                onClick={() => {
                                    setAttributes({ imgID: 0, imgUrl: "", srcSet: '' });
                                }}
                                isDestructive
                            >
                                {"Remove Image"}
                            </Button>
                        </MediaUploadCheck>
                    )}
                </div>
            </PanelBody>
            
            <PanelBody title='Genrenal'>
                <RangeControl
                    label="Font Size Icon"
                    min={20}
                    max={100}
                    value={fzIcon}
                    onChange={(fzIcon) => setAttributes({ fzIcon })}
                />

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
						onChangeSize('left', value, 'default')
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
						onChangeSize('right', value, 'default')
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