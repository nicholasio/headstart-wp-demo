import {
	BlocksRenderer,
	ColumnBlock,
	ColumnsBlock,
	DebugBlock,
	ParagraphBlock,
} from '@10up/headless-core/react';

import { css } from '@linaria/core';
import PropTypes from 'prop-types';

export const Blocks = ({ html }) => {
	return (
		<div
			className={css`
				position: relative;
			`}
		>
			<BlocksRenderer html={html}>
				<ColumnBlock component={DebugBlock} />
				<ColumnsBlock component={DebugBlock} />
				<ParagraphBlock component={DebugBlock} />
			</BlocksRenderer>
		</div>
	);
};

Blocks.propTypes = {
	html: PropTypes.string.isRequired,
};

export default Blocks;
