import { InnerBlocks } from '@wordpress/block-editor'

const Save = (props) => {
	const { attributes, className } = props;
	const { color, bgColor} = attributes;
	return (
        <div className={['boilerplate-post-categories-block--main', className].join(' ')}>
            <InnerBlocks.Content /> 
         </div>
	)
}

export default Save;