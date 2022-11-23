/**
 * Container wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from 'classnames';

/**
 * Create a Button wrapper Component
 */
export default class Container extends Component {
	constructor(props) {
		super(...arguments);
	}

	render() {
		// Setup the attributes
		const {
			attributes: {
				containerBackgroundColor,
				containerBgGradientColor,
				containerAlignment,
				containerPaddingTop,
				containerPaddingRight,
				containerPaddingBottom,
				containerPaddingLeft,
				containerMarginTop,
				containerMarginBottom,
				containerWidth,
				containerMaxWidth,
				containerImgURL,
				containerImgAlt,
				containerDimRatio,
				opacityBg,
				focalPoint
			},
		} = this.props;

		const styles = {
			textAlign: containerAlignment ? containerAlignment : undefined,
			paddingLeft: containerPaddingLeft
				? `${containerPaddingLeft}%`
				: undefined,
			paddingRight: containerPaddingRight
				? `${containerPaddingRight}%`
				: undefined,
			'--paddingBottom': containerPaddingBottom.default,
			'--paddingBottomTablet': containerPaddingBottom.tablet,
			'--paddingBottomMobile': containerPaddingBottom.mobile,
			'--paddingTop': containerPaddingTop.default,
			'--paddingTopTablet': containerPaddingTop.tablet,
			'--paddingTopMobile': containerPaddingTop.mobile,
			marginTop: containerMarginTop
				? `${containerMarginTop}%`
				: undefined,
			marginBottom: containerMarginBottom
				? `${containerMarginBottom}%`
				: undefined,
			backgroundColor: containerBgGradientColor ? '#FFF' : ''
		};

		const className = classnames(
			[this.props.className, 'nmx-block-container'],
			{
				['align' + containerWidth]: containerWidth,
			}
		);

		return (
			<div
				style={styles}
				className={className ? className : undefined}
			>
				<div
					className='boilerplate-container-bg'
					style={{
						background: containerBgGradientColor ? containerBgGradientColor : containerBackgroundColor ? containerBackgroundColor : 'unset',
						opacity: opacityBg
					}} />
				{containerImgURL && !!containerImgURL.length && (
					<div className="boilerplate-container-image-wrap" style={{ '--bg-position' : `${ focalPoint.x * 100 }% ${ focalPoint.y * 100 }%`, }}>
						<img
							className={classnames(
								'boilerplate-container-image',
								dimRatioToClass(containerDimRatio),
								{
									'has-background-dim':
										0 !== containerDimRatio,
								}
							)}
							src={containerImgURL}
							alt={containerImgAlt}
						/>
					</div>
				)}
				<div className="container"
					style={{
						maxWidth: containerMaxWidth
							? `${containerMaxWidth}px`
							: undefined,
					}}
				>
					{this.props.children}
				</div>
			</div>
		);
	}
}

function dimRatioToClass(ratio) {
	return 0 === ratio || 50 === ratio
		? null
		: 'has-background-dim-' + 10 * Math.round(ratio / 10);
}
