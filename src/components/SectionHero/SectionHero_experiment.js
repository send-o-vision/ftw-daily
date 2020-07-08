import React, { Component } from 'react';
import { Slide, Fade, Zoom } from './lib';
import css from './SectionHero.css';
import classNames from 'classnames';
import { string } from 'prop-types';

const SectionHero = props => {
	const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

	const properties = {
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		indicators: true,
		pauseOnHover: true,
		onChange: (oldIndex, newIndex) => {
			console.log(
				`Slide transition finished from ${oldIndex} to ${newIndex}`
			);
		}
	};
	
	return (
		<div>
			<h3>Slide Effect</h3>
			<div className={css.slideContainer}>
				<Slide {...properties}>
					{slideImages.map((each, index) => (
						<div key={index} className={css.eachSlide}>
							<div style={{ backgroundImage: `url(${each})` }}>
								<span>Slide {index + 1}</span>
							</div>
						</div>
					))}
				</Slide>
			</div>
		</div>
	);
}

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;

