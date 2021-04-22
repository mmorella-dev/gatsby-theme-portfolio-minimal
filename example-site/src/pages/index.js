import React from 'react';
import { ArticlesSection, HeroSection, Page, Seo } from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="IndexPage" />
            <Page>
                <HeroSection
                    anchor="hero"
                    content={{
                        iconPrefixText: 'Hello',
                        iconFileName: 'waving-hand.png',
                        title: "I'm a Gatsby Theme",
                        subtitlePrefix: 'I make portfolios ',
                        subtitleHighlight: 'awesome',
                        subtitleSuffix: '.',
                        description: 'A modern portfolio with a minimalistic design.',
                        socialProfiles: ['LinkedIn', 'Medium', 'Github', 'Mail'],
                    }}
                />
                <ArticlesSection anchor="articles" sources={["Medium"]} maxArticles={3} />
            </Page>
        </>
    );
}
