import { __ } from '@wordpress/i18n'
import { InnerBlocks} from '@wordpress/block-editor'
import { Fragment } from '@wordpress/element'
import Inspector from './inspector'
import AlignmentToolbar from './blockcontrols'
const TEMPLATE = [
    [
        'core/heading',
        {
            content: 'Icon block Value Prop',
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
            className: "boilerplate-icon-card__heading",
        }
    ],
    ['nmx-block/boilerplate-spacer', { size: { default: '8px', tablet: '8px', mobile: '8px', sync: true } }],
    [
        'core/paragraph',
        {
            content: 'Duis semper ultrices aliquam nisl vulputate. Pellentesque convallis urna leo egestas iaculis pulvinar.',
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
            className: "boilerplate-icon-card__desc",
        }
    ]
]

const Edit = (props) => {
	const { attributes, className, setAttributes  } = props;
    const { iconAlign, imgUrl, fzIcon, bgColor, borderRadius, blockPaddingTop, blockPaddingBottom, blockPaddingLeft, blockPaddingRight} = attributes

    return (
        <Fragment>
            <AlignmentToolbar {...props} />
            <Inspector {...props} />

            <div className={['boilerplate-icon-card-block', className].join(' ')}
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
                <div className='boilerplate-icon-card-block-inner'
                    style={{
                        alignItems: iconAlign,
                        alignContent: iconAlign,
                        '--widthIcon': `${fzIcon}px`
                    }}
                >
                    <div className='boilerplate-icon-card-block-inner__icon' style={{width: `${fzIcon}px`}} >
                        {imgUrl ?
                            <img src={imgUrl} alt="icon"/>
                        : ''}
                    </div>
                    <div className='boilerplate-icon-card-block-inner__content' >
                        <InnerBlocks template={TEMPLATE} />
                    </div>
                </div>
            </div>
        </Fragment>
	)
}

export default Edit;
