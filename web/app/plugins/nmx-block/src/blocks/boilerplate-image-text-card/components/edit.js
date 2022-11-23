import { __ } from '@wordpress/i18n'
import { InnerBlocks} from '@wordpress/block-editor'
import { Fragment } from '@wordpress/element'
import Inspector from './inspector'

const TEMPLATE = [ [ 'core/columns', {}, [
    ['core/column', {className: "boilerplate-image-text-card-block-inner__image", 'width': '180px'}, [  
        ['core/image', 
            {
                url: cgbGlobal.imageCardDefault, 
                "align": "center", className: 
                "boilerplate-image-text-card__image", 
                'style': {
                    'height': '180px'    
                }
            } 
        ]
    ]],

    ['core/column', {className: "boilerplate-image-text-card-block-inner__content"}, [
        [
            'core/heading',
            {
                content: 'Card title',
                level: 5,
                "textAlign": "left",
                'style': {
                    'typography': {
                        'fontSize': 22.5,
                        'lineHeight': '120%',
                        'fontWeight':700,
                    },
                    'color': {
                        'text': '#000c'
                    }
                },
                className: "boilerplate-image-text-card__heading",
            }
        ],
        
        [
            'core/paragraph',
            {
                content: 'Elementum in viverra ultrices venenatis mattis pellentesque sed aliquet. ',
                "align": "left",
                'style': {
                    'typography': {
                        'fontSize': 14,
                        'fontWeight':300,
                        'lineHeight': '140%',
                    },
                    'color': {
                        'text': '#000c'
                    }
                },
                className: "boilerplate-image-text-card__desc",
            }
        ],
    
        ['core/buttons',
            { "layout": { "type": "flex"}, className: "boilerplate-image-text-card__cta"},
            [['core/button', 
                { 
                    'text': 'Learn more', 
                    'style':{ 
                        'typography': {
                            'fontSize': 14,
                            'fontWeight':700,
                            'lineHeight': '160%',
                        } 
                    },
                    'color': {
                        'text': '#000c'
                    } 
                }
            ]]
        ],
    ]],
] ] ]

const Edit = (props) => {
	const { attributes, className, setAttributes  } = props;
    const { bgColor, borderRadius} = attributes

    return (
        <Fragment>
            <Inspector {...props} />

            <div className={['boilerplate-image-text-card-block', className].join(' ')} 
                style={{
                    backgroundColor: bgColor,
                    borderRadius: `${borderRadius}px`
                }}
            >
                <div className='boilerplate-image-text-card-block-inner'>
                    <InnerBlocks template={TEMPLATE} />  
                </div>
            </div>
        </Fragment>
	)
}

export default Edit;