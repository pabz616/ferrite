const axios = require('axios');
const cheerio = require('cheerio');
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
 * @returns {string[]} - An array of extracted selectors without duplicates.
 */
function extractSelectors(html) {
  const $ = cheerio.load(html);
  const selectors = new Set();

  // Extracting input fields and buttons
  $('input, links, button').each((index, element) => {
    const tagName = $(element).prop('tagName').toLowerCase();
    const id = $(element).attr('id');
    const className = $(element).attr('class');
    const name = $(element).attr('name');
    const link = $(element).attr('href');

    const selectorParts = [tagName];
    if (id) selectorParts.push(`page.locator('//${tagName}[@id="${id}"]')`);    
    if (className) selectorParts.push(`page.locator('//${tagName}[@class="${className}"]')`);    
    if (name) selectorParts.push(`page.locator('//${tagName}[@name="${name}"]')`);
    if (link) selectorParts.push(`page.locator('//${tagName}[@href="${link}"]')`);
    
    const selector = selectorParts.join(' | ');
    selectors.add(selector).values;
               
  });

  return Array.from(selectors);
}

// Prompt the user to enter a URL
rl.question("Enter the URL of the web page to fetch: ", (url) => {

// Call the main function with the entered URL
  main(url);
  rl.close();
});

/**
 * Fetch the page and extract selectors.
 * @param {string} url - The URL of the web page to fetch.
 */
function main(url) {
  fetchPage(url)
    .then((html) => {
      if (html) {
        const selectors = extractSelectors(html);
        console.log('Extracted Selectors:');
        console.log('');
        selectors.forEach((selector) => {
          console.log(selector.split(' | ')[1]);
        });
      } else {
        console.log('Failed to fetch the page.');
      }
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
}