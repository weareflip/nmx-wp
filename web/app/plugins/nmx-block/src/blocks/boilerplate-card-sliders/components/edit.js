import { __ } from '@wordpress/i18n'
import {InnerBlocks, BlockControls } from '@wordpress/block-editor'
import { Fragment } from '@wordpress/element'
import Inspector from './inspector'
import {ToolbarButton, ToolbarGroup} from '@wordpress/components'

const ALLOWED_CHILDREN_BLOCKS = ['boilerplate-blocks/boilerplate-image-text-card']
const TEMPLATE = [
    ['boilerplate-blocks/boilerplate-image-text-card'],
    ['boilerplate-blocks/boilerplate-image-text-card'],
    ['boilerplate-blocks/boilerplate-image-text-card']
]


const Edit = (props) => {
    const { attributes, className, setAttributes  } = props; 

    const onAddItem = () => {
        const $button = jQuery('.boilerplate-card-sliders.boilerplate-slider-edit .boilerplate-card-sliders-wrapper > .block-editor-inner-blocks > .block-editor-block-list__layout > .block-list-appender > button')
        $button.trigger( "click" )
    }
    return(
        <Fragment>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon={<span className="dashicons dashicons-plus" />}
                        label={__('Add Item Slider')}
                        onClick={(e) => onAddItem()}
                    />
                </ToolbarGroup>
            </BlockControls>
            
            <Inspector {...props} />

            <div className={['boilerplate-blocks', 'boilerplate-card-sliders', 'boilerplate-slider-edit', className].join(' ')}>
                <div className="boilerplate-card-sliders-wrapper">
                    <InnerBlocks
                        template={TEMPLATE}
                        allowedBlocks={ALLOWED_CHILDREN_BLOCKS}
                        renderAppender={InnerBlocks.ButtonBlockAppender}
                        orientation="horizontal"
                    />
                </div>
            </div>
        </Fragment>
    )
}
export default Edit;