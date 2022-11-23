import { __ } from '@wordpress/i18n'
import { InnerBlocks} from '@wordpress/block-editor'
import { Fragment } from '@wordpress/element'
import Inspector from './inspector'

const TEMPLATE = [
    ['boilerplate-blocks/boilerplate-icon-card',
        {
            'fzIcon':  '32'
        }
    ],
    ['nmx-block/boilerplate-spacer', { size: { default: '12px', tablet: '12px', mobile: '12px', sync: true } }],
    [
        'core/heading',
        {
            content: '$28<span>/mo</span>',
            level: 1,
            "textAlign": "left",
            'style': {
                'typography': {
                    'fontSize': 55,
                    'lineHeight': '120%',
                    'fontWeight':700,
                },
                'color': {
                    'text': '#000c'
                }
            },
            className: "boilerplate-pricing-tier__heading",
        }
    ],
    ['nmx-block/boilerplate-spacer', { size: { default: '12px', tablet: '12px', mobile: '12px', sync: true } }],
    [
        'core/paragraph',
        {
            content: 'or $280 annually',
            "align": "left",
            'style': {
                'typography': {
                    'fontSize': 14,
                    'fontWeight':700,
                    'lineHeight': '160%',
                },
                'color': {
                    'text': '#000c'
                }
            },
            className: "boilerplate-pricing-tier__desc",
        }
    ],
    ['nmx-block/boilerplate-spacer', { size: { default: '32px', tablet: '32px', mobile: '32px', sync: true } }],
    ['core/separator', {className: "is-style-wide",}],
    ['nmx-block/boilerplate-spacer', { size: { default: '32px', tablet: '32px', mobile: '32px', sync: true } }],
    ['nmx-block/list-block',
        {
            gap:'32',
            className: 'is-style-ticks',
        }
    ],
    ['nmx-block/boilerplate-spacer', { size: { default: '32px', tablet: '32px', mobile: '32px', sync: true } }],
    ['core/buttons',
        { "layout": { "type": "flex"}, className: "is-style-boilerplate-border", 'width': '100%'},
        [['core/button',
            {
                'text': 'Subscribe',
                'style':{
                    'typography': {
                        'fontSize': 16,
                        'fontWeight':700,
                        'lineHeight': '150%',
                    }
                },
                'color': {
                    'text': '#0D99FF'
                },
                'width': '100%',
                className: 'is-style-outline'
            }
        ]]
    ]
]

const Edit = (props) => {
	const { attributes, className, setAttributes  } = props;
    const { bgColor, borderRadius, padding} = attributes

    return (
        <Fragment>
            <Inspector {...props} />

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
                    <InnerBlocks template={TEMPLATE} />
                </div>
            </div>
        </Fragment>
	)
}

export default Edit;
