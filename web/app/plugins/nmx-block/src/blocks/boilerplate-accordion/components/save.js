import { RichText, InnerBlocks } from '@wordpress/block-editor'
const Save = (props) => {
	const { attributes, className } = props;
	let { heading, open, fzHeading } = attributes;
	return (
        <div className={['boilerplate-accordion-block', props.className].join(' ')} >
            <div className="inner-wrap">
                <div
                    className={'qa-item ' + (open ? 'qa-item-open' : '')}
                >
                    <div className="qa-question">
                        <RichText.Content value={heading} tagName="h3" 
                            className='qa-heading' 
                            style={{
                                '--fzHeading': `${fzHeading}px`,
                            }}
                        />
                        <span className='qa-item-icon'></span>
                    </div>

                    <div className="qa-answer">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </div>
	)
}

export default Save;