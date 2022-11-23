import { __ } from '@wordpress/i18n'
import { InnerBlocks } from '@wordpress/block-editor'
import { Fragment, useState } from '@wordpress/element'
const {serverSideRender: ServerSideRender} = wp;
import Inspector from './inspector'

const Edit = (props) => {
	const { attributes, className, setAttributes  } = props;
    const { color, bgColor} = attributes;
    
	return (
        <Fragment>
            <Inspector {...props} />
            <div className={['boilerplate-post-categories-block', className].join(' ')}>
                <ServerSideRender
                    block={'boilerplate-blocks/boilerplate-post-categories'}
                    attributes={attributes }
				/>
            </div>
        </Fragment>
	)
}
export default Edit;