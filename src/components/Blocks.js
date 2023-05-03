import { BlocksRenderer, ColumnBlock, ColumnsBlock, useBlock } from '@10up/headless-core/react';

import { css } from '@linaria/core';
import PropTypes from 'prop-types';

const MyColumnsBlock = (props) => {
	return (
		<div
			className={css`
				outline: 1px blue solid;
				display: flex;
				min-height: 400px;
			`}
		>
			{props.children}
		</div>
	);
};

const MyColumnBlock = (props) => {
	const { name } = useBlock(props.domNode);

	return (
		<div
			className={css`
				flex: 1;
				align-self: center;
			`}
		>
			{name} {props.children}
		</div>
	);
};
export const Blocks = ({ html }) => {
	return (
		<div
			className={css`
				position: relative;
			`}
		>
			<BlocksRenderer html={html}>
				<ColumnsBlock component={MyColumnsBlock} />
				<ColumnBlock component={MyColumnBlock} />
			</BlocksRenderer>
		</div>
	);
};

Blocks.propTypes = {
	html: PropTypes.string.isRequired,
};

export default Blocks;
