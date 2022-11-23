import { __ } from '@wordpress/i18n'
import { InnerBlocks } from '@wordpress/block-editor'
import { Fragment, useState } from '@wordpress/element'
import Inspector from './inspector'

const TEMPLATE = [
    [
        'core/paragraph',
        {
            content: 'Preheader Text',
            'style': {
                'typography': {
                    'fontSize': 16,
                    'fontWeight':800,
                    'lineHeight': '120%',
                    'letterSpacing': '0.05em',
                    'textTransform': 'uppercase'
                },
                'color': {
                    'text': '#3C49DC'
                }
            },
            className: "boilerplate-hero__sub-heading",
        }
    ],
    ['nmx-block/boilerplate-spacer', { size: { default: '20px', tablet: '20px', mobile: '14px', sync: true } }],
    [
        'core/heading',
        {
            content: 'Grow your community',
            level: 1,
            'style': {
                'typography': {
                    'fontSize': 64,
                    'lineHeight': '110%',
                    'fontWeight':700,
                },
                'color': {
                    'text': '#000c'
                }
            },
            className: "boilerplate-hero__heading",
        }
    ],
    ['nmx-block/boilerplate-spacer', { size: { default: '20px',  tablet: '20px', mobile: '25px', sync: true } }],
    [
        'core/paragraph',
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis lacinia lectus molestie semper. ',
            'style': {
                'typography': {
                    'fontSize': 18,
                    'lineHeight': '140%',
                    'fontWeight':300,
                },
                'color': {
                    'text': '#000c'
                }
            },
        }
    ],
    ['nmx-block/boilerplate-spacer', { size: { default: '10px', tablet: '10px', mobile: '13px', sync: true } }],
    ['core/column', {className: "boilerplate-hero__ctas"}, [
        ['core/buttons',
            { "layout": { "type": "flex"}},
            [['core/button', { 'text': 'Primary Action', 'backgroundColor':'#0D99FF' }]]
        ],
        ['core/buttons',
            { "layout": { "type": "flex"}},
            [['core/button', { 'text': 'Secondary Action', 'className': 'is-style-boilerplate-border', 'backgroundColor':'#0D99FF' }]]
        ]
    ]],
]

const Edit = (props) => {
	const { attributes, className, setAttributes  } = props;
    const { imgUrl, blockPaddingTop, blockPaddingBottom, linkScroll, focalPoint, bgColor} = attributes;

	return (
        <Fragment>
            <Inspector {...props} />
            <div className={['boilerplate-hero-block', className].join(' ')}
                style={{ backgroundColor: bgColor}}
            >
                <div className='boilerplate-hero-block-inner'
                    style={{
                        '--paddingBottom': blockPaddingBottom.default,
                        '--paddingBottomTablet': blockPaddingBottom.tablet,
                        '--paddingBottomMobile': blockPaddingBottom.mobile,
                        '--paddingTop': blockPaddingTop.default,
                        '--paddingTopTablet': blockPaddingTop.tablet,
                        '--paddingTopMobile': blockPaddingTop.mobile,
                        backgroundImage: `url(${imgUrl})`,
                        backgroundPosition: focalPoint ? `${focalPoint.x * 100}% ${focalPoint.y * 100}%` : 'center'
                    }}
                >

                    <div className='container'>
                        <div className='boilerplate-hero-block-content'>
                            <InnerBlocks template={TEMPLATE} />
                        </div>
                    </div>
                </div>

                {linkScroll ?
                    <div className='boilerplate-hero-block-button-scroll'>
                        <div className='boilerplate-hero-block-button-scroll__icon' data-scroll={linkScroll}>
                            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjY2NjggMjEuOTkxMUMxMy4yNTUzIDIxLjYyMjggMTIuNjIzMSAyMS42NTc5IDEyLjI1NDggMjIuMDY5NEMxMS44ODY1IDIyLjQ4MSAxMS45MjE2IDIzLjExMzIgMTIuMzMzMiAyMy40ODE1TDEzLjY2NjggMjEuOTkxMVpNMjAgMjlMMTkuMzMzMiAyOS43NDUyQzE5LjcxMjggMzAuMDg0OSAyMC4yODcyIDMwLjA4NDkgMjAuNjY2OCAyOS43NDUyTDIwIDI5Wk0yNy42NjY4IDIzLjQ4MTVDMjguMDc4NCAyMy4xMTMyIDI4LjExMzUgMjIuNDgxIDI3Ljc0NTIgMjIuMDY5NEMyNy4zNzY5IDIxLjY1NzkgMjYuNzQ0NyAyMS42MjI4IDI2LjMzMzIgMjEuOTkxMUwyNy42NjY4IDIzLjQ4MTVaTTIxIDExQzIxIDEwLjQ0NzcgMjAuNTUyMyAxMCAyMCAxMEMxOS40NDc3IDEwIDE5IDEwLjQ0NzcgMTkgMTFMMjEgMTFaTTEyLjMzMzIgMjMuNDgxNUwxOS4zMzMyIDI5Ljc0NTJMMjAuNjY2OCAyOC4yNTQ4TDEzLjY2NjggMjEuOTkxMUwxMi4zMzMyIDIzLjQ4MTVaTTIwLjY2NjggMjkuNzQ1MkwyNy42NjY4IDIzLjQ4MTVMMjYuMzMzMiAyMS45OTExTDE5LjMzMzIgMjguMjU0OEwyMC42NjY4IDI5Ljc0NTJaTTIxIDI5TDIxIDExTDE5IDExTDE5IDI5TDIxIDI5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=='/>
                        </div>
                    </div>
                :
                '' }
            </div>
        </Fragment>
	)
}

export default Edit;
