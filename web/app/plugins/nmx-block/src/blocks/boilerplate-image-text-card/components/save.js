import { InnerBlocks } from '@wordpress/block-editor'

const Save = (props) => {
	const { attributes, className } = props;
    const { iconAlign, bgColor, borderRadius} = attributes
    
	return (
        <div className={['boilerplate-image-text-card-block', className].join(' ')}
            style={{
                backgroundColor: bgColor,
                borderRadius: `${borderRadius}px`
            }}
        >
            
            <div className='boilerplate-image-text-card-block-inner'>
                 <InnerBlocks.Content />  
            </div>
            
         </div>
	)
}

export default Save;