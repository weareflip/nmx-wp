

const Save = (props) => {
	const { attributes, className } = props;
	const { values, txtColor, gap } = attributes;

	const listClassName = ['boilerplate-list-block', className ].filter(Boolean).join(' ');

	return (
		<div className={listClassName} style={{ '--color': txtColor, '--gap': gap  }}>
			<ul>
				{values}
			</ul>
		</div>
	)
}

export default Save;