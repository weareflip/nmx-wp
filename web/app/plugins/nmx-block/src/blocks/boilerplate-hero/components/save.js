import { InnerBlocks } from '@wordpress/block-editor'

const Save = (props) => {
	const { attributes, className } = props;
	const { imgUrl, linkScroll, blockPaddingTop, blockPaddingBottom, focalPoint, bgColor} = attributes;
	return (
        <div className={['boilerplate-hero-block', imgUrl ? '' : 'not-bg-image', className].join(' ')} style={{ backgroundColor: bgColor}}>
            <div className='boilerplate-hero-block-inner'
                style={{
                    '--paddingBottom': blockPaddingBottom.default,
                    '--paddingBottomTablet': blockPaddingBottom.tablet,
                    '--paddingBottomMobile': blockPaddingBottom.mobile,
                    '--paddingTop': blockPaddingTop.default,
                    '--paddingTopTablet': blockPaddingTop.tablet,
                    '--paddingTopMobile': blockPaddingTop.mobile,
                    backgroundImage: `url(${imgUrl})`,
                    backgroundPosition: focalPoint ? `${focalPoint.x * 100}% ${focalPoint.y * 100}%` : 'center',
                    backgroundColor: imgUrl ? '#fff' : 'transparent'
                }}
            > 
                {imgUrl ? 
                    <img src={imgUrl} alt="bg-hero-mobile" className='boilerplate-hero-block-inner__imgae-mobile' style={{ 'objectPosition': focalPoint ? `${focalPoint.x * 100}% ${focalPoint.y * 100}%` : undefined }} />
                : ''}
                <div className='container'> 
                    <div className='boilerplate-hero-block-content'>  
                        <InnerBlocks.Content />
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
	)
}

export default Save;