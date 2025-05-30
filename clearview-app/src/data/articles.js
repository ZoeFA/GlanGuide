export const articleData = {

  "how-to":{
    title:"How To Use GlánGuide",
    content: `<p>For first time users of GlánGuide, this page will explain step-by-step how to use the webapp.</p>
              <h2>The Homepage</h2>
              <img src="../src/assets/appsc-plain.png" alt="Screenshot of the GlánGuide homepage" width=800 class="image-border">
              <p>This is the main page you will interact with. You can enter in a website URL (link) and press the 'Check' button. From there you have the
              choice to filter for specific aspects of the website. The 'Collapse Code' button allows you to shorten the webpage's HTML code. Pressing this button
              again will expand it back to full size. Scrolling down you will see the website's grade with a list of warnings and or errors, if any. Scrolling 
              further down, you will see links to educational articles, such as this one you are reading right now. These articles provide further information about
              web accessibility, and links to resources.</p>
              <h2>Video Tutorial</h2>
              <video width="800" controls aria-label="Video tutorial on how to use GlánGuide">
                <source src="../src/assets/video-tutorial-with-captions.mp4" type="video/mp4">
                <track src="../src/assets/video-tutorial-captions.srt" kind="captions" srclang="en" label="English captions">
                Your browser does not support the video tag. You can <a href="../src/assets/video-tutorial.mp4">download the video here</a>.
              </video>
              <h2>Step-By-Step Guide</h2>
              <img src="../src/assets/appsc1.png" alt="Screenshot of the GlánGuide homepage with a red arrow pointing to the URL input box" width=800 class="image-border">
              <p>Paste in a link (URL) to a webpage in this input box.</p>
              <img src="../src/assets/appsc1-1.png" alt="Screenshot of the GlánGuide homepage with a red arrow pointing to the Check button." width=800 class="image-border">
              <p>Once you have pasted in your desired link. Click the 'Check' button. This will will pull all the source code from the webpage, and then prints it out below.
              Underneath the source code is the accessibility grade of the webpage.</p>
              <img src="../src/assets/appsc2.png" alt="Screenshot of the GlánGuide homepage with a red arrow pointing to the Filter drop down menu." width=800 class="image-border">
              <p>You can filter the resulting source code by different HTML elements. The filter choices are: Images, Anchors, Alt text, Links, Buttons, Input Fields.</p>
              <img src="../src/assets/appsc2-1.png" alt="Screenshot of the GlánGuide homepage with a red arrow pointing to the Filter button." width=800 class="image-border">
              <p>Once you have made your choice of filter, click the 'Filter' button.</p>
              <img src="../src/assets/appsc3.png" alt="Screenshot of the GlánGuide homepage with a red arrow pointing to the Collapse Code button." width=800 class="image-border">
              <p>If you wish to reduce the length of the outputted code, click the 'Collapse Code' button.</p>
              <img src="../src/assets/appsc-eg1.png" alt="Screenshot of the TUD homepage being checked. There is a red arrow pointing to the Expand Code button." width=800 class="image-border">
              <p>In the above image, the TUD homepage is being used as an example. The 'Collapse Code' button has already been pressed. Pressing 'Expand Code' will return the code to its
              original length.</p>
              <img src="../src/assets/appsc-eg2.png" alt="Screenshot of the accessibility grade for the TUD homepage. The grade is 0 out of 100. There is a list of various errors and warnings." width=800 class="image-border">
              <p>Underneath the outputted source code is the accessibility grade. A list of all errors (red) and warnings (orange) are also displayed. Errors reduce the grade by 10 points.
              Warnings reduce the grade by 5 points.</p>
              <img src="../src/assets/appsc4.png" alt="Screenshot of the list of educational articles, on the lower half of the GlánGuide homepage." width=800 class="image-border">
              <p>At the bottom of the homepage is the list of educational articles. These cover a variety of topics associated with web accessibility. This article you are reading is the 'How-To' guide.</p>
              `
  },
  "external-resources":{
    title: "Accessibility Resources",
    content: `<p>Wish to learn more about accessibility? Here are links to external resources:</p>
              <h2>The W3C Web Accessibility Initiative (WAI)</h2>
              <p>This organisation has developed standards for how content on the web should be displayed
              to best allow people with disabilities to experience and use the Internet. This link will bring you to their website:</p>
              <a href="https://www.w3.org/WAI/about/" rel="noopener noreferrer">https://www.w3.org/WAI/about/</a>
              <h2>The National Disability Authority</h2>
              <p>It was established in 2000 under the National Disability Act 1999. Its mission is to monitor and ensure that the Government
              and all public bodies uphold the rights of people with disabilities. They issue a variety of reports, with one such report looking
              at the accessbility of all public bodies' websites in Ireland. You can find out more about the NDA by clicking this link:</p>
              <a href="https://nda.ie/" rel="noopener noreferrer">https://nda.ie/</a>
              <h2>European Accessibility Act</h2>
              <p>In 2019, the EU inacted the European Accessibililty Act with the aim to improve and encourage accessible products and services. It demands that products and services
              deemed as most important to people with disabilities, such as: ATMs, smartphones, e-commerce, computers, etc. You can read the full act by clicking this link:</p>
              <a href="https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en#products-and-services-covered" rel="noopener noreferrer">European Accessibility Act</a>
              <h2>A11y Project</h2>
              The A11y (pronouned 'ally') Project is a community-driven website with aim to share a variety of resources on accessiblity in many areas of life.
              They post articles on current events or news related to accessibility, particularly in tech. They also provide links to literature, podcasts, newsletters, conferences
              all centred on accessiblity as well as universal design.
              <a href="https://www.a11yproject.com/">https://www.a11yproject.com/</a>
              `
  },
  "alt-text":{
    title: "The Importance of Alt Text",
    content: `<p>Alternative Text is a textual substitute for non-text content in web pages. It is most commonly used for images, but can also be
    used for videos and audio files. While alt text has become more prevalent in todays world, often it is not done well.
    In order for web developers and web masters to best integrate alt text into their websites, they should take into account GlánGuide's
    4 core principals of alt text.</p>
    <ol>
      <li><b><u>Subject:</u></b> Say clearing who is the subject or (in the case of there being many entities such as a picture of a crowd) main subject of the image, video, audio, etc.</li>
      <li><b><u>Colour:</u></b> State the main colour, or colours, which most dominate. There are many users who are visually impared that can still see colour, however their vision might make
          it hard to tell what in the image is which colour. This also helps users with colour blindness to know what colours are in the image.</li>
      <li><b><u>Category:</u></b> State what type of image/video/audio it is. E.g. a painting, gaming footage, radio show recording.</li>
      <li><b><u>Context:</u></b> This any additional infomation such as a date or the purpose of the asset on the web page. For example, stating that an image is a brand logo.
          This allows the user to better understand the wider reason for this asset being on the web page, allowing them to figure for themselves whether it is
          important or not.</li>
    </ol>
    <p>We can never be 100% perfect or exact in the description of non-text content, however we can always try and endeavour to be as accurate as possible. The point is to give\
    users the choice whether to regard or disregard web content as they wish.</p>
    <h2>Example</h2>
    <p>Let's put this alt text standard into practice! Starting off, I will give this image below some generic alt text. You can view this in 'Inpect' mode (press F12 key), but I
    will also have the alt text written underneath it.</p>
    <img src="../src/assets/alt-img-eg1.png" alt="Photo of a woman" width=350>
    <p>The alt text given is: "Photo of a woman". This is not good alt text as it does not give a full description or understanding of the image. The fact that the woman is staring into
    the camera could be important, as well as what she is wearing.</p>
    <img src="../src/assets/alt-img-eg1.png" alt="Photograph of a woman in a red hoodie with BRATZ logo, staring into the camera from a three quarter angle. The woman is in focus and the background is blurry." width=350>
    <p>This time the alt text given is: "Photograph of a woman in a red hoodie with BRATZ logo, staring into the camera from a three quarter angle. The woman is in focus and the background is blurry."
    This alt text is much more descriptive and better captures the essence of the image. We know what the woman is wearing, how she is posing and some idea of 'where' she is.</p>
    <h2>A Picture Paints a Thousand Words</h2>
    <p>This famous idiom couldn't be more true in the case of alt text. You could easily write a paragraph or more for the description of the image, but to some degree alt text should aim to be brief.
    Wikipedia requires users to have both alt text and long alt text, the former being one sentence and the later at least a paragraph long. This is a method that more websites should take on, particulary 
    those where the image is vital to the function and use of the website, i.e. e-commerce sites like Amazon, Dunnes Stores, etc. In the end we can only endeavour to provide as much context and description
    as possible so that users may make up their own mind about whether an image is of importance or not.</p>
    `, 
  },
  "tools":{
    title: "Web Accessibility Tools",
    content: `<p>This webpage aims to educate about a variety of web accessibility tools, however it is not an exhaustive list. Some of these tools can be downloaded
              as a browser extension.</p>
              <h2>Screen Readers</h2>
              <p>A screen reader is a tool that will read aloud any and all text, alt-text, and aria labels for all html web page elements allowing visually 
              impaired users to navigate websites. Clicking on sections of the webpage such as a header or image, will also have the automated voice read aloud
              the text encased in these elements. Screen reader browser extensions can be downloaded on all the major browsers.</p>
              <h2>Colour Contrast Checker</h2>
              <p>This analyses the colours on a webpage, in particular the foreground (text) and background colours, and judges if they are distinct enough that users with
              colour blindness or visual impairments can easily distinguish between the background and foreground. A basic example of good colour contrast is black text
              on a white background. However in todays world, most web pages have many colours and so to best make it accessible this checker tool can tell a web master
              how well the colours contrast so they can make the appropriate adjustments. This tool, like the screen reader, can also be installed as a browser extension.</p>
              <h2>Luma - Seizure & Epilepsy Trigger Checker</h2>
              <p>Luma is a tool that can analyse videos to see if there are sequences of bright or flashing lights or patterns, or other potential seizure triggers. Click on
              this link to visit Luma's official website to try out the tool and to learn more:</p>
              <a href="https://www.includia.com/luma/" rel="noopener noreferrer">https://www.includia.com/luma/</a>
              `
               
  },
  "other-checkers":{
    title: "Other Website Accessibility Checkers",
    content: `<p>No one accessibility checker can find every fault or issue in a webpage. This article lists a variety of other accessibility checkers. Feel free to compare their results with GlánGuide's results.</p>
    <h2>WebAim WAVE</h2>
    <p>WAVE was developed by Utah State University in 2001. It follows the WCAG to assess webpages for their accessibility compliance. It is a highly regarded accessibility checker, 
    and one of the most famous ones. It stands out amongst the other checkers as it overlays its accessibility report overtop the webpage in question. This allows the you to still 
    navigate their desired webpage while also having information about the webpage’s accessibility present at the same time.</p>
    <a href="https://wave.webaim.org/" rel="noopener noreferrer">https://wave.webaim.org/</a>
    <h2>AChecker</h2>
    <p>This accessibility checker was created in 2005 and follows the OAC (Open Accessibility Checks), which is a collection of all web accessibility guidelines available globally. AChecker can also assess the 
    accessibility of text files. AChecker allows for quite a lot of customisation in terms of what standard you wish to grade a webpage. It displays the code segments where errors or warnings are found. As well, 
    it gives the specific guideline violations and examples of how to improve the code. AChecker is a recommended accessibility checker for those with any programming or web dev experience, but not recommended 
    for the average internet user.</p>
    <a href="https://achecks.org/achecker/" rel="noopener noreferrer">https://achecks.org/achecker/</a>
    <h2>Silktide</h2>
    <p>Silktide is a tech company that was founded in 2001. Their main areas of interest are web accessibility, SEO, data privacy, etc. Their website accessibility checker that was used is a browser extension. Silktide 
    was selected due to being the top search result on the Chrome Web Store when you search “accessibility checker”. It has 20,000 users and a rating of 4.6/5. Once activated, on every web page you visit is little black 
    square with the Silktide S logo on the right hand side of the screen. Clicking this square opens a menu with a list of options, one of them being an accessibility checker".</p>
    <a href="https://chromewebstore.google.com/detail/mpobacholfblmnpnfbiomjkecoojakah?utm_source=item-share-cb" rel="noopener noreferrer">https://chromewebstore.google.com/detail/mpobacholfblmnpnfbiomjkecoojakah?utm_source=item-share-cb</a>
    <h2>Skynet Technologies</h2>
    <p>Skynet Technologies is a software and consulting company in relation to website design and development. They provide a free accessibility checker which was used for this comparison. On their website, it states that the checker grades 
    the inputted URL on a variety of guidelines such as: ADA, WCAG, UK Equality Act, European EN 301 549, and a few others. Once a URL is submitted, it scans and grades the webpage. A resulting accessibility score and number of errors will be
    displayed.</p>
    <a href="https://www.skynettechnologies.com/accessibility-checker" rel="noopener noreferrer">https://www.skynettechnologies.com/accessibility-checker</a>
    `
  },
 
};

//list format for homepage
export const articleList = Object.entries(articleData).map(([id, article]) => ({
  id, 
  title: article.title,
  content: article.content.replace(/\n/g, '<br />'), // Replaces \n with <br />
}));