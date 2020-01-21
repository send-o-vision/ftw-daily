import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionAboutUs.css';

const SectionAboutUs = props => {
	const {rootClassName, className} = props;

	const classes = classNames(rootClassName || css.root, className);
	return (
		<div className = {classes}>
			<div className={css.title}>
				"Hello"
			</div>
		</div>
	);
};

SectionAboutUs.defaultProps = {rootClassName: null, className: null};

const {string} = PropTypes;

SectionAboutUs.propTypes = {
	rootClassName: string,
	className: string,
};

export default SectionAboutUs;
