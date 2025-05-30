import React from 'react';

//function to calculate contrast ratio
const calculateContrastRatio = (colour1, colour2) => {
  const luminance = (rgb) => {
    const [r, g, b] = rgb.map((c) => {
      c /= 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const rgb1 = parseColour(colour1);
  const rgb2 = parseColour(colour2);

  const lum1 = luminance(rgb1);
  const lum2 = luminance(rgb2);

  return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
};
//parse colour from rgb format
const parseColour = (colour) => {
  const rgbMatch = colour.match(/\d+/g);
  return rgbMatch ? rgbMatch.slice(0, 3).map(Number) : [0, 0, 0];
};


//function to check for accessibility issues in scraped HTML
const gradeAccessibility = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const altTextArticleLink = `<a href="/articles/alt-text" target="_blank" rel="noopener noreferrer">The Importance of Alt Text</a>`;


  let score = 100; //start at 100 and deduct for each issue
  let errors = [];
  let warnings = [];


  //check for missing or vague alt text in images
  const images = doc.querySelectorAll('img');

  images.forEach((img) => {

    if(!img.hasAttribute('alt')){
      errors.push(`[ERROR] Image missing alt text. To learn more about how to write alt text click the link to this article: ${altTextArticleLink}.`);
      score -= 10;
    }
    else if(img.alt.trim().length < 10) {
      warnings.push(`[WARNING] Image alt text is too short or too vague ("${img.alt}"). To learn more about how to write alt text click the link to
      this article: ${altTextArticleLink}.`);
      score -= 5;
    }
  });


  //check if an element has any ARIA attributes
  const hasAria = (element) =>
    Array.from(element.attributes).some(attr => attr.name.startsWith('aria-'));
  
  //check for missing aria labels on form inputs
  const inputs = doc.querySelectorAll('input');
  
  inputs.forEach((input) => {
    if (!hasAria(input)){
      errors.push(`[ERROR] Input field missing ARIA attribute. ARIA attributes aid screen reader accessibility.`);
      score -= 10;
    }
  });


  //error if no aria labels at all in the webpage
  const ariaEls= doc.querySelectorAll('[aria-]');
  if (ariaEls.length === 0) {
    errors.push("[ERROR] No ARIA attribute found on the page. ARIA attributes aid screen reader accessibility.");
    score -= 10;
  }


  //checking the colour contrast
  const elementsWithText = doc.querySelectorAll("*");
  
  elementsWithText.forEach((el) => {
    const textColour = el.style.colour || "rgb(0, 0, 0)";
    const bgColour = el.style.bgColour || "rgb(255, 255, 255)";

    if (textColour && bgColour) {
      const contrastRatio = calculateContrastRatio(textColour, bgColour);

      if (contrastRatio < 3.0) {
        errors.push(`[ERROR] Very poor colour contrast detected (Ratio: ${contrastRatio.toFixed(2)}).`);
        console.log(`Foreground: ${textColour}, Background: ${bgColour}, Ratio: ${contrastRatio}`);
        score -= 10;
      } else if (contrastRatio >= 3.0 && contrastRatio < 4.5) {
        warnings.push(`[WARNING] Slightly bad colour contrast detected (Ratio: ${contrastRatio.toFixed(2)}).`);
        console.log(`Foreground: ${textColour}, Background: ${bgColour}, Ratio: ${contrastRatio}`);
        score -= 5;
      }
    }
  });

  //checking for errors/warnings in anchor tags
  const links = doc.querySelectorAll('a');

  links.forEach((link) => {
    const linkText = link.textContent.trim().toLowerCase();
    const target = link.getAttribute('target');
    const rel = link.getAttribute('rel');
    const vagueTexts = ["click here", "here", "read more", "learn more", "click me", "Visit"];

    //empty or missing link text
    if(!linkText){
      errors.push(`[ERROR] Link is missing text or is empty. Ensure meaningful text is included.`);
      score -=10;
    }
    //link text is too vague
    if(vagueTexts.includes(linkText)){
      errors.push(`[ERROR] Link text is too vague ("${linkText}").`);
      score -=10;
    }
    //links that open in new tab without warning
    if(target === "_blank" && (!rel || !rel.includes("noopener"))) {
      warnings.push(`[WARNING] Link opens into new tab without warning.`);
      score -= 5;
    }

  });


  //error and warnings for buttons
  const buttons = doc.querySelectorAll('button');

  buttons.forEach((button) => {
    //button is missing aria attribute
    if(!hasAria(button)){
      errors.push(`[ERROR] Button is missing an ARIA attribute. ARIA attributes aid screen reader accessibility.`);
      score -=10;
    }

  });



  //prevent negative score
  score = Math.max(0, score);
  
  return { score, errors, warnings };
};

//group multiple error/warning messages together
const groupMessages = (messages) => {
  const messageMap = {};

  messages.forEach((msg) => {
    if (messageMap[msg]) {
      messageMap[msg] += 1;
    } else {
      messageMap[msg] = 1;
    }
  });

  return Object.entries(messageMap).map(([message, count]) => ({ message, count }));
};



export default function Grader({html}){

  if (!html) return null;

  const { score, errors, warnings } = gradeAccessibility(html);

  const groupedErrors = groupMessages(errors);
  const groupedWarnings = groupMessages(warnings);

  const formatMessage = (message, count) => {
    if (count > 1) {
      // Try to smartly pluralise the first word (optional improvement)
      const isButtonError = message.includes("Button is missing");
      const isInputError = message.includes("Input field missing");
      const isImageError = message.includes("Image missing alt text");
      const isLinkError = message.includes("Link text is too vague");
      
      let pluralisedMessage = message;

      if (isButtonError) pluralisedMessage = message.replace("Button is", `${count} Buttons are`);
      else if (isInputError) pluralisedMessage = message.replace("Input field", `${count} Input fields are`);
      else if (isImageError) pluralisedMessage = message.replace("Image", `${count} Images are`);
      else if (isLinkError) pluralisedMessage = message.replace("Link text", `${count} Links' texts`);

      return pluralisedMessage;
    }
    return message;
  };


  return(
    <div className="grader" aria-labelledby="accessibilityGrade">
      <h2>Accessibility Grade: {score}/100</h2>
      <ul className="error-list" role="list" aria-labelledby="error-list">
        {groupedErrors.length > 0 ? (
          groupedErrors.map(({ message, count }, index) => (
          <li key={index} style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: formatMessage(message, count) }}/>
        )) 
      ) : (
          <li style={{ color: 'green' }}>No errors detected.</li>
        )}
      </ul>
      <ul className="warning-list" role="list" aria-labelledby="warning-list">
        {groupedWarnings.length > 0 ? (
          groupedWarnings.map(({ message, count }, index) => (
          <li key={index} style={{ color: 'orange' }} dangerouslySetInnerHTML={{ __html: formatMessage(message, count) }}/>
        )) 
      ) : (
          <li style={{ color: 'green' }}>No warnings detected.</li>
        )}
      </ul>
    </div>
  );
}