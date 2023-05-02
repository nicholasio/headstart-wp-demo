import { BlocksRenderer } from '@10up/headless-core/react';

import { css } from '@linaria/core';
import PropTypes from 'prop-types';

export const Blocks = ({ html }) => {
	return (
		<div
			className={css`
				position: relative;
			`}
		>
			<BlocksRenderer html={html} />
		</div>
	);
};

Blocks.propTypes = {
	html: PropTypes.string.isRequired,
};

export default Blocks;
