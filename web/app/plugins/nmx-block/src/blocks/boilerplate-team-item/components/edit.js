import { __ } from '@wordpress/i18n'
import { InnerBlocks } from '@wordpress/block-editor'
import { Fragment } from '@wordpress/element'

const TEMPLATE = [
    ['core/image', {url: cgbGlobal.avatarDefault, "align": "center", className: "boilerplate-team-item__image", } ],
    ['nmx-block/boilerplate-spacer', { size: { default: '32px', tablet: '32px', mobile: '24px', sync: true } }],
    [
        'core/heading',
        {
            content: 'Name Surname',
            level: 5,
            "textAlign": "center",
            'style': {
                'typography': {
                    'fontSize': 22.5,
                    'lineHeight': '120%',
                    'fontWeight':700,
                    'textAlign' : 'center',
                },
                'color': {
                    'text': '#000c'
                }
            },
            className: "boilerplate-team-item__heading",
        }
    ],
    ['nmx-block/boilerplate-spacer', { size: { default: '16px', tablet: '16px', mobile: '16px', sync: true } }],
    [
        'core/paragraph',
        {
            content: 'Title',
            "align": "center",
            'style': {
                'typography': {
                    'fontSize': 14,
                    'fontWeight':700,
                    'lineHeight': '114%',
                    'letterSpacing': '4px',
                    'textTransform' : 'uppercase'
                },
                'color': {
                    'text': '#000c'
                }
            },
            className: "boilerplate-team-item__sub-heading",
        }
    ]
]

const Edit = (props) => {
	const { attributes, className, setAttributes  } = props;

	return (
        <Fragment>
            <div className={['boilerplate-team-item-block', className].join(' ')} >
                <div className='container'>
                    <div className='boilerplate-team-item-block-content'>
                        <InnerBlocks template={TEMPLATE} />
                    </div>
                </div>
            </div>
        </Fragment>
	)
}

export default Edit;
