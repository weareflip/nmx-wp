import { InnerBlocks } from '@wordpress/block-editor'

const Save = (props) => {
	const { attributes, className } = props;

	return (
        <div className={['boilerplate-team-item-block', className].join(' ')}>
            <div className='container'> 
                <div className='boilerplate-team-item-block-content'>  
                    <InnerBlocks.Content />
                </div>
            </div>
         </div>
	)
}

export default Save;