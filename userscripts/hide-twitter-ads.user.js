// ==UserScript==
// @name        Hide Twitter Ads
// @description Hide ads on x.com
// @match       *://x.com/*
// ==/UserScript==

function hideAdTweets() {
    // Select all tweet articles
    const tweets = document.querySelectorAll('article[data-testid="tweet"]');

    tweets.forEach(tweet => {
        // Find spans within the tweet
        const spans = tweet.querySelectorAll('span');

        // Check if any span contains exactly the text "Ad"
        const hasAd = Array.from(spans).some(span => span.textContent.trim() === "Ad");

        // If an "Ad" span is found, hide the tweet
        if (hasAd) {
            tweet.style.display = 'none';
        }
    });
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', hideAdTweets);

// If tweets are loaded dynamically, you might want to run this periodically
setInterval(hideAdTweets, 5000); // Run every 5 seconds