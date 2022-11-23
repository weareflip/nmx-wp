import { __ } from '@wordpress/i18n'
import { InnerBlocks } from '@wordpress/block-editor'

const Save = (props) => {
    const { attributes, className, setAttributes  } = props;
	let data = {
		slidesToShow: parseInt(attributes.slidesToShow),
		slidesToScroll: parseInt(attributes.slidesToScroll),
		arrows: attributes.arrows,
		dots: attributes.dots,
		infinite: attributes.infinite,
		autoplay: attributes.autoplay,
	}
	data = JSON.stringify(data)
	return (
		<div className={['boilerplate-blocks', 'boilerplate-card-sliders', className].join(' ')}
			data-boilerplate-slider={data}
		>
			<div className="boilerplate-card-sliders-wrapper">
                <InnerBlocks.Content />
			</div>
		</div>
	)
}
export default Save;