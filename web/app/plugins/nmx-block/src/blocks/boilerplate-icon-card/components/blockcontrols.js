import { __ } from '@wordpress/i18n'
import { BlockControls,useBlockProps, BlockVerticalAlignmentToolbar} from '@wordpress/block-editor'

const AlignmentToolbar = (props) => {
	const { attributes, setAttributes } = props
	const {align, iconAlign} = attributes

	return (
		<BlockControls>		
            <div className='boilerplate-alignment-toolbar'>
				<BlockVerticalAlignmentToolbar
					value= { align }
					onChange={ ( nextAlign ) => {
						
						if(nextAlign == 'bottom'){
							setAttributes( { iconAlign: 'flex-end' } );
						}else if(nextAlign == 'top'){
							setAttributes( { iconAlign: 'flex-start' } );
						}else{
							setAttributes( { iconAlign: 'center' } );
						}
						
						setAttributes( { align: nextAlign } );
					} }
				/>
			</div>
		</BlockControls>
	)
}

export default AlignmentToolbar