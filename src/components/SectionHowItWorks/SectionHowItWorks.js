import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionHowItWorks.css';

import step1Image from './icons/1.png';
import step2Image from './icons/2.png';
import step3Image from './icons/3.png';

const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
	  <div className={css.title}>
        <FormattedMessage id="SectionHowItWorks.titleLineOne" />
      </div>
			
			
				<p>
					That forlorn pile of camping gear in your garage, those climbing shoes you bought but stopped using after realizing climbing is hard, that backpack you decommissioned after upgrading to the Flextrek Thirty-seven trillion Whipsnake. <b> If you've got gear that still works but you don't need, sell it on Switchbackr.</b> It's good for you, good for the outdoor community, and good for the planet too! 
				</p> 
				<p>
					<b>Because the best gear is gear that's being used. Not gear in landfills.</b>
				</p>	
			

			<div className={css.createListingLink}>
        <NamedLink name="NewListingPage">
          <FormattedMessage id="SectionHowItWorks.createListingLink" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
