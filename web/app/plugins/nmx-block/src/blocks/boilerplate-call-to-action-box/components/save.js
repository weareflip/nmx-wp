import { InnerBlocks } from '@wordpress/block-editor'

const Save = (props) => {
	const { attributes, className } = props;
	const { bgColor, borderRadius, blockPaddingTop, blockPaddingBottom, blockPaddingLeft, blockPaddingRight,} = attributes;
	return (
        <div className={['boilerplate-call-to-action-box-block', className].join(' ')} 
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
            <div className='container'> 
                <div className='boilerplate-call-to-action-box-block-content'>  
                    <InnerBlocks.Content />
                </div>
            </div>
         </div>
	)
}

export default Save;