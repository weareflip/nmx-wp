import { __ } from '@wordpress/i18n'
import { InnerBlocks } from '@wordpress/block-editor'
import { Fragment } from '@wordpress/element'
import Inspector from './inspector'

const TEMPLATE = [ [ 'core/columns', {}, [
    ['core/column', {className: "boilerplate-call-to-action-box__text"}, [
        [
            'core/heading',
            {
                content: 'Grow your community with CourseKit',
                level: 2,
                'style': {
                    'typography': {
                        'fontSize': 44,
                        'lineHeight': '120%',
                        'fontWeight':700,
                    },
                    'color': {
                        'text': '#000c'
                    }
                },
                className: "boilerplate-call-to-action-box__heading",
            }
        ],
        ['nmx-block/boilerplate-spacer', { size: { default: '16px', tablet: '16px', mobile: '16px', sync: true } }],
        [
            'core/paragraph',
            {
                content: 'CourseKit is a flexible learning management system (LMS) template with everything you need to sell video content. Create an entire catalogue or just a single course and sell subscriptions with ease!',
                'style': {
                    'typography': {
                        'fontSize': 14,
                        'fontWeight':400,
                        'lineHeight': '140%'
                    },
                    'color': {
                        'text': '#000c'
                    }
                }
            }
        ]
    ]],
    ['core/column', {className: "boilerplate-call-to-action-box__ctas"}, [
        ['core/buttons',
            { "layout": { "type": "flex"}},
            [['core/button', { 'text': 'Primary Action', 'backgroundColor':'#0D99FF' }]]
        ]
    ]],
] ] ]

const Edit = (props) => {
	const { attributes, className, setAttributes  } = props;
    const { bgColor, borderRadius, blockPaddingTop, blockPaddingBottom, blockPaddingLeft, blockPaddingRight} = attributes;

	return (
        <Fragment>
            <Inspector {...props} />
            <div className={['boilerplate-call-to-action-box-block', className].join(' ')}
                style={{
                    '--paddingBottom': blockPaddingBottom.default,
                    '--paddingBottomTablet': blockPaddingBottom.tablet,
                    '--paddingBottomMobile': blockPaddingBottom.mobile,
                    '--paddingTop': blockPaddingTop.default,
                    '--paddingTopTablet': blockPaddingTop.tablet,
                    '--paddingTopMobile': blockPaddingTop.mobile,
                    '--paddingLeft': blockPaddingLeft.default,
                    '--paddingLeftTablet': blockPaddingLeft.tablet,
                    '--paddingLeftMobile': blockPaddingLeft.mobile,
                    '--paddingRight': blockPaddingRight.default,
                    '--paddingRightTablet': blockPaddingLeft.tablet,
                    '--paddingRightMobile': blockPaddingLeft.mobile,
                    backgroundColor: bgColor,
                    borderRadius: `${borderRadius}px`
                }}
            >
                <div className='container'>
                    <div className='boilerplate-call-to-action-box-block-content'>
                        <InnerBlocks template={TEMPLATE} />
                    </div>
                </div>
            </div>
        </Fragment>
	)
}

export default Edit;
