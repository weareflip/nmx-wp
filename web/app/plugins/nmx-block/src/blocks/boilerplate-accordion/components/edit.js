import { __ } from '@wordpress/i18n'
import { Fragment} from '@wordpress/element'
import { RichText, InnerBlocks } from '@wordpress/block-editor'

import Inspector from './inspector'

const Edit = (props) => {
	const { attributes, className, setAttributes  } = props;
    let { heading, open, fzHeading} = attributes;
    const TEMPLATE = [
        ['core/paragraph', { content: 'Lorem ipsum dolor sit amet id erat aliquet diam ullamcorper tempus massa eleifend vivamus.' }]
    ]
	return (
        <Fragment>
            <Inspector {...props} />
            <div className={['boilerplate-accordion-block', 'block-editor', props.className].join(' ')} >
                <div className="inner-wrap">
                    <div className={'qa-item ' + (open ? 'qa-item-open' : '')}>
                        <div className="qa-question">
                            <RichText
                                tagName="div"
                                value={heading}
                                placeholder="Question..."
                                onChange={(value) => setAttributes({ heading: value })}
                                className='qa-heading'
                                style={{
                                    '--fzHeading': `${fzHeading}px`,
                                }}
                            />
                            <span className='qa-item-icon'></span>
                        </div>
                        
                        <div className="qa-answer">
                            <InnerBlocks template={TEMPLATE} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
	)
}

export default Edit;