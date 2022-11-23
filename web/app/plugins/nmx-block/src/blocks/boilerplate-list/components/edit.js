import Inspector from './inspector';

import { Fragment } from '@wordpress/element'
import { RichText } from '@wordpress/block-editor';

const Edit = (props) => {

	const { attributes, isSelected, setAttributes, className } = props;
	const { values, txtColor, gap } = attributes;
	const listClassName = ['boilerplate-list-block', className].filter(Boolean).join(' ');

	return (
		<Fragment>
			<Inspector {...props}/>
			<div className={listClassName} style={{ '--color': txtColor, '--gap': gap }}>
				<RichText
					multiline="li"
					tagName="ul"
					onChange={(value) => setAttributes({ values: value })}
					value={values}
					placeholder='Write advanced list…'
					isSelected={isSelected}
				/>
			</div>
		</Fragment>
	)
}

export default Edit;