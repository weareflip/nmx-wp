import { InnerBlocks } from '@wordpress/block-editor'

const Save = (props) => {
	const { attributes, className } = props;
    const { iconAlign, imgUrl, fzIcon, bgColor, borderRadius, blockPaddingTop, blockPaddingBottom, blockPaddingLeft, blockPaddingRight} = attributes
    
	return (
        <div className={['boilerplate-icon-card-block', className].join(' ')}
            style={{
                '--paddingBottom': blockPaddingBottom.default,
                '--paddingBottomTablet': blockPaddingBottom.tablet,
                '--paddingBottomMobile': blockPaddingBottom.mobile,
                '--paddingTop': blockPaddingTop.default,
                '--paddingTopTablet': blockPaddingTop.tablet,
                '--paddingTopMobile': blockPaddingTop.mobile,
                '--paddingLeft': blockPaddingLeft.default,
                '--paddingLeftTablet': blockPaddingLeft.tablet,
                '--paddingLeftMobile': blockPaddingLeft.mobile,
                '--paddingRight': blockPaddingRight.default,
                '--paddingRightTablet': blockPaddingLeft.tablet,
                '--paddingRightMobile': blockPaddingLeft.mobile,
                backgroundColor: bgColor,
                borderRadius: `${borderRadius}px`
            }}
        >
            
            <div className='boilerplate-icon-card-block-inner'
                style={{
                    alignItems: iconAlign,
                    alignContent: iconAlign,
                    '--widthIcon': `${fzIcon}px`
                }}
            >
                <div className='boilerplate-icon-card-block-inner__icon' style={{width: `${fzIcon}px`,}}> 
                    {imgUrl ? 
                        <img src={imgUrl} alt="icon"/>
                    : ''}
                </div>
                <div className='boilerplate-icon-card-block-inner__content'> 
                    <InnerBlocks.Content />
                </div>  
            </div>
            
         </div>
	)
}

export default Save;