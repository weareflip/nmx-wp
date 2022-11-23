import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@wordpress/block-editor'
import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	TextControl, FormTokenField,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components'
import { Component } from '@wordpress/element'
import apiFetch from '@wordpress/api-fetch';

let orderParams = [
	{
		label: __('Created: Newest to oldest'),
		value: 'date/DESC',
	},
	{
		label: __('Created: Oldest to newest'),
		value: 'date/ASC',
	},
	{
		label: __('A → Z'),
		value: 'title/ASC',
	},
	{
		label: __('Z → A'),
		value: 'title/DESC',
	},
];

// const Inspector = (props) => {
export default class Inspector extends Component {	
	constructor(props) {
		super(...arguments)
		this.state = {
			availableCate: [],
		}
	}

	searchCategories = async (value) =>{
		await apiFetch({ path: '/wp/v2/categories?search=' + value }).then(p => {
			this.setState({
				availableCate: p,
			});
		});
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { pagination, orderpost, posts_per_page, columns, gap_row, gap_col, heading, post_type, listCatePost, carousel, slidesToShow, slidesToScroll, arrows, dots,  autoplay, infinite} = attributes;
		const {availableCate  } = this.state
		const tagName = availableCate.map( ( tag ) => tag.name );

		return (
			< InspectorControls >
				<PanelBody title={__('Setting')}>
					<TextControl
						value={heading}
						label="Heading"
						onChange={(heading) => setAttributes({ heading })}
					/>

					<SelectControl
						label="Post type"
						value={post_type}
						options={[
							{ label: 'Page', value: 'page' },
							{ label: 'Post', value: 'post' },
						]}
						onChange={(post_type) => {
							setAttributes({ post_type })
						}}
					/>

					{post_type == 'post' ? 											
						<FormTokenField 
							label="Categories"
							value={listCatePost}
							suggestions={ tagName }
							onChange={(listCatePost) => {
								setAttributes({ listCatePost })
							}}
							maxSuggestions={ 20 }
							onInputChange={ (value) => this.searchCategories( value ) }
						/>
					: ""}

					<ToggleControl
						label="Carousel"
						checked={carousel}
						onChange={(carousel) => {
							setAttributes({ carousel })
						}}
					/>

					<SelectControl
						key="query-controls-order-select"
						label={__('Order by')}
						value={orderpost}
						options={orderParams}
						onChange={(orderpost) => setAttributes({ orderpost })}
					/>
					
					<RangeControl
						label="Number of items"
						value={posts_per_page}
						onChange={(posts_per_page) => setAttributes({ posts_per_page })}
						min={1}
						max={50}
					/>
				</PanelBody>

				{carousel == true ? 
					<PanelBody title={__('Slider Setting')}>
						<label>Number slide to show</label>
						<NumberControl
							isShiftStepEnabled={true}
							onChange={(slidesToShow) => {
								setAttributes({ slidesToShow })
							}}
							shiftStep={10} value={slidesToShow}
						/>
						
						<hr />
						<label>Number slides to scroll</label>
						<NumberControl
							isShiftStepEnabled={true}
							onChange={(slidesToScroll) => {
								setAttributes({ slidesToScroll })
							}}
							shiftStep={10} value={slidesToScroll}
						/>

						<hr />
						<ToggleControl
							label="Arrows"
							help={arrows ? 'Enable arrows.' : 'Disable arrows.'}
							checked={arrows}
							onChange={() => {
								setAttributes({ arrows: !arrows })
							}}
						/>

						<hr />
						<ToggleControl
							label="Dots"
							help={dots ? 'Enable dots.' : 'Disable dots.'}
							checked={dots}
							onChange={() => {
								setAttributes({ dots: !dots })
							}}
						/>
						
						<hr />
						<ToggleControl
							label="Autoplay"
							help={autoplay ? 'Enable autoplay.' : 'Disable autoplay.'}
							checked={autoplay}
							onChange={() => {
								setAttributes({ autoplay: !autoplay })
							}}
						/>

						<hr />
						<ToggleControl
							label="Loop"
							help={infinite ? 'Enable fade.' : 'Disable fade.'}
							checked={infinite}
							onChange={() => {
								setAttributes({ infinite: !infinite })
							}}
						/>
					</PanelBody>
				: 
				<PanelBody title={__('Grids Setting')}>
					<ToggleControl
						label="Pagination"
						checked={pagination}
						onChange={(pagination) => {
							setAttributes({ pagination })
						}}
					/>

					<RangeControl
						label="Columns"
						value={columns}
						onChange={(columns) => setAttributes({ columns })}
						min={2}
						max={4}
					/>

					<RangeControl
						label="Gap Rows"
						value={gap_row}
						onChange={(gap_row) => setAttributes({ gap_row })}
						min={5}
						max={60}
					/> 

<					RangeControl
						label="Gap Columns"
						value={gap_col}
						onChange={(gap_col) => setAttributes({ gap_col })}
						min={5}
						max={60}
					/>
				</PanelBody>
				}
			</InspectorControls>
		)
	}	
}
// export default Inspector;