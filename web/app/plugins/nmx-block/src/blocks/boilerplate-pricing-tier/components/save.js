import { InnerBlocks } from '@wordpress/block-editor'

const Save = (props) => {
	const { attributes, className } = props;
    const { padding, bgColor, borderRadius} = attributes
    
	return (
        <div className={['boilerplate-pricing-tier-block', className].join(' ')}
            style={{
                paddingBottom: padding.bottom,
                paddingTop: padding.top,
                paddingLeft: padding.left,
                paddingRight: padding.right,
                backgroundColor: bgColor,
                borderRadius: `${borderRadius}px`
            }}
        >
            <div className='boilerplate-pricing-tier-block-inner'>
                 <InnerBlocks.Content />  
            </div>
            
         </div>
	)
}

export default Save;