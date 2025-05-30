import React, { useState } from 'react';

export default function Filter({ scrapedHtml, setHtml }) {
  const [filterOption, setFilterOption] = useState('');

  const handleFilter = () => {
    if(!scrapedHtml || !filterOption) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(scrapedHtml, 'text/html');

    let filtered;

    if(filterOption === 'alt'){
      const images = Array.from(doc.querySelectorAll('img'));
      filtered = images
        .map((img) => img.outerHTML + ` (alt="${img.alt || 'No alt text'}")`)
        .join('\n');
    }
    else if(filterOption === 'href'){
      const anchors = Array.from(doc.querySelectorAll('a'));
      filtered = anchors
        .map((anchor) => anchor.outerHTML + ` (href="${anchor.href}")`)
        .join('\n');
    }
    else if(filterOption === 'button'){
      const buttons = Array.from(doc.querySelectorAll('button'));
      filtered = buttons
        .map((button) => {
        const type = button.hasAttribute('type') ? button.type : 'No type';
        const name = button.hasAttribute('name') ? button.name : 'No name';
        const value = button.hasAttribute('value') ? button.value : 'No value';
        return button.outerHTML + ` (type="${type}", name="${name}", value="${value}")`;
        })
        .join('\n');
    }
    else if (filterOption === 'input') {
      const inputs = Array.from(doc.querySelectorAll('input'));
      console.log(inputs);  
      filtered = inputs
        .map((input) => {
          const type = input.hasAttribute('type') ? input.type : 'No type';
          const id = input.hasAttribute('id') ? input.id : 'No id';
          const name = input.hasAttribute('name') ? input.name : 'No name';
          const value = input.hasAttribute('value') ? input.value : 'No value';
          return input.outerHTML + ` (type="${type}", id="${id}", name="${name}", value="${value}")`;
        })
        .join('\n');
    }
    else{
      //default filtering
      const elements = Array.from(doc.querySelectorAll(filterOption));
      filtered = elements.map((el) => el.outerHTML).join('\n');
    }

    setHtml(filtered || `No matching <${filterOption}> elements found.`);
  };

  return(
    
    <div className="filter-container" aria-labelledby="filterLabel">
      {/*dropdown menu for filter selection*/}
      <select 
        value={filterOption}
        onChange={(e) => setFilterOption(e.target.value)}
        aria-label="Select which element to filter by"
        aria-required="true"
      >
        <option value="">-- Select Element Filter --</option>
        <option value="alt">Alt Text</option>
        <option value="a">Anchors (&lt;a&gt;)</option>
        <option value="button">Buttons</option>
        <option value="img">Images (&lt;img&gt;)</option>
        <option value="input">Input Fields</option>
        <option value="href">Links</option>
      </select>
      <button onClick={handleFilter} aria-label="Click to apply filter" aria-describedby="filterLabel">Filter</button>
    </div>
  );
}