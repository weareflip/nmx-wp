/**
 * EDIT
**/

import { __ } from '@wordpress/i18n'
import { Fragment } from '@wordpress/element'
import Inspector from './Inspector';

const { serverSideRender: ServerSideRender } = wp;

const Edit = (props) => {
	const { attributes, className } = props
	return (
		<Fragment>
			<Inspector  {...props} />
			<ServerSideRender
				className={'block-server-render'}
				block="boilerplate-blocks/grid-card-post"
				attributes={attributes}
			/>
		</Fragment>
	);
}

export default Edit;
