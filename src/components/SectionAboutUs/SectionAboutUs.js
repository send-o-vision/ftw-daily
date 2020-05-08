import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionAboutUs.css';

import climberChick from './photos/climberchick.jpg';
import uslookingstupid from './photos/uslookingdumb.jpg';

const SectionAboutUs = props => {
	const {rootClassName, className} = props;

	const classes = classNames(rootClassName || css.root, className);
	return (
		<div className={classes}>
			<div className={css.infoSection}>
				<div className={css.textBox} style={{'padding-right':'40px'}}>
				<h1>Trust is everything</h1>
				<p>
					Whether it be your climbing harness, your ski bindings, or the person you're roped up to, we know trust is a YUGE part of outdoor recreation. That's why every transaction on Switchbackr is backed up by our unwavering Iron Lotus Guarantee.
				</p>
				</div>
				<div className = {css.imageBox}>
					<div className = {css.imageWrapper}>
						<img src={climberChick} alt="climber chick" className={css.locationImage} />
					</div>
				</div>
			</div>
			<div className={css.infoSection}>
				<div className={css.imageBox}>
					<div className={css.imageWrapper}>
						<img src={uslookingstupid} alt="us looking stupid" className={css.locationImage} />
					</div>
				</div>
				<div className={css.textBox} style={{'padding-left': '40px'}}>
					<h1>We are cool. </h1>
					<p>Oh hey there. We're Sasha and Alex, two Stanford students and the mega-serious founders of the company legally known as Switchbackr Worldwide, Inc. Our passion is sending it to the max in the outdoors and we are SO STOKED to help others do the same!
					</p>
				</div>
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
