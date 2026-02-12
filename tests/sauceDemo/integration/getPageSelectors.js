const axios = require('axios');
const cheerio = require('cheerio');

// Function to fetch the HTML content of a page
url = 'https://www.example.com/'; // Replace with the URL of the page you want to analyze

/**
 * Fetches the content of a web page asynchronously.
 * @param {string} url - The URL of the web page to fetch.
 * @returns {Promise<Object|null>} - The response data if successful, or null if an error occurs.
 */
async function fetchPage(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching the page: ${error}`);
    return null;
  }
}

/**
 * Extracts selectors from the HTML content.
 * @param {string} html - The HTML content to extract selectors from.
 * @returns {string[]} - An array of extracted selectors.
 */
function extractSelectors(html) {
  const $ = cheerio.load(html);
  const selectors = [];

  // Extracting input fields and buttons
  $('input, button').each((index, element) => {
    const tagName = $(element).prop('tagName').toLowerCase();
    console.log(`Processing element: <${tagName}>`);
    const id = $(element).attr('id');
    const className = $(element).attr('class');
    const name = $(element).attr('name');

    const selectorParts = [tagName];
    if (id) selectorParts.push(`#${id}`);
    if (className) selectorParts.push(`.${className.split(' ').join('.')}`);
    if (name) selectorParts.push(`[name="${name}"]`);

    selectors.push(selectorParts.join(''));
  });

  return selectors;
}

// Main function to fetch the page and extract selectors
fetchPage(url)
  .then((html) => {
    if (html) {
      const selectors = extractSelectors(html);
      console.log('Extracted Selectors:');
      selectors.forEach((selector) => {
        console.log(selector);
      });
    } else {
      console.log('Failed to fetch the page.');
    }
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });