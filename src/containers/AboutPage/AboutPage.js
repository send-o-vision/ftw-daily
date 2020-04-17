import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us.jpeg';
import image2 from './dumbanddumber.jpeg';

const AboutPage = () => {
  const { siteInstagramPage, siteFacebookPage } = config;

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Saunatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Our mission is to make the outdoors more accessible</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Photo from Avalanche Gulch, Mt. Shasta, California</p>
            </div>

            <div className={css.contentMain}>
              <h2>
								Gear is expensive. Whether you're a skier trying to find send sticks, a
								cyclist searching for a trusty steed, or a climber looking for bomber gear, 
								we all know that the cost to get into the outdoors can be pretty steep.
              </h2>

              <p>
              	That's why we're creating Switchbackr: to increase the accessibility of the outdoors by making it easier to buy and sell gear. Not only that, but buying pre-owned is also better for the environment because it extends the effective lifespan of our gear! It's, in the words of Michael Scott, a "win-win-win-win," a win for you, a win for your counterparty, a win for the planet, and a win for us! 
							</p>

              <h2 className={css.subtitle}>Our Story</h2>
							<img className={css.subImage} src={image2} />
              <p>
              	Hello there. We are Sasha and Alex, two seniors at Stanford who are passionate about sending it to the max in the outdoors. We are the founders of Switchbackr and jointly comprise <b>"The Good Team at Switchbackr"</b>. Sasha is a rock climber, surfer, and professional barefoot backpacker. Alex loves skiing, cycling, and mountaineering. Together they founded Switchbackr to make it easier for people like them to buy and sell gear and raise the stoke for the outdoors. 
							</p>

              <h3 id="contact" className={css.subtitle}>
                Contact us
              </h3>
              <p>
                Our customers (aka our "Swishies") are MEGA important to us, so please reach out whenever! You can get in touch with us by emailing <b>hello@switchbackr.com</b> or calling <b>650-268-4182</b>. You can also fill out {' '} <ExternalLink href="localhost:3000">this</ExternalLink> form if you're into forms. 
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteInstagramPage}>Instagram</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
