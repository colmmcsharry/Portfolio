import React from 'react'
import polyinsta from '../pics/polyinsta.jpg'
import rps from '../pics/rock-paper-scissors.jpg'
import Modal from './Modal.js'
import newclighthouse from '../pics/NewCrezoLighthouse.jpg'
import currentCL from '../pics/CurrentCrezoLighthouse.jpg'
import schema from '../pics/schema-diagrams.jpg'
import sketchnet from '../pics/Sketchnet2.jpg'
import snippet from '../pics/snippet.jpg'
import weather from '../pics/weather.jpg'
import youtube from '../pics/Youtube.jpg'
import college from '../pics/college.jpeg'
import LazyLoad from 'react-lazyload';



var crezoleft = <React.Fragment> 
<h3>  The Backstory</h3>

<p>A staff member of this construction company reached out to me after I made an ad offering to help local businesses with their websites. Their old site was made themselves using Wordpress but, in their own words, “wasn’t great”.</p>

<p>I checked it out and identified many areas areas that needed improvement, such as;   <ul className="learning-list"> <li>Initial load time was very slow </li> <li> Fonts were bland and often clashed with the background colour</li>  <li>Animations were janky and often distracting</li> <li>Positioning of some images and divs was obtrusive</li> <li>Responsiveness was poor, eg. horizontal scroll on mobile!</li> <li>Overall design was generic and uninspired</li>  </ul></p>

<p> So, I saw lots of areas where the performance and user experience could be improved.</p>

<figure className="left">
<img className="textimg" src={currentCL} alt="Lightousescore" loading="lazy"/> 
<figcaption>Their old Lighthouse scores</figcaption>
</figure>

<h3> The Tech Stack</h3>

<p>I had been reading about Gatsby.js a lot, and decided this project would be an ideal chance to start using it.</p>

<p>I also wanted the Crezo staff to be able to update the site content themselves, so I needed to link the site to a Content Management System.</p>

<p>Since this was my first time using Gatsby, and also my first time using a CMS, I decided to look for starter templates just to see how it all works. Eventually I found one that combined Gatsby with Contentful, a modern “headless” CMS.</p>

<p>Because this template was built as a web developer’s portfolio, the fonts, layout, and overall structure of the site needed to be changed, but I was able to dig into the code and see how the data was sent back and forth between client and Contenful. Gatsby uses GraphQL queries to “fetch” the data it needs, either from a local directory or from Contentful.</p>

<h3> GraphQL for images</h3>

<p>GraphQL was quite confusing at first but after a few days I could understand it. It actually turned out to be a huge time saver for me, as with just a few lines of code, it can query for images and return them in multiple different sizes, and automatically choose the correct one based on the user’s viewport, connection speed, internet browser, etc.</p>

<p>This meant no more tediously cropping and compressing images into several sizes, and using media-queries or picture/srcSet to choose the appropriate one. Going forward, I will continue to utilise Gatsby for image-heavy websites.</p>

<p>Now, the image galleries on the website were loading much faster, even for viewers on poor internet connections. I also gave them a shiny new background-image with the company slogan overlaid on it.</p>
 
                    </React.Fragment>

  var crezoright =  <React.Fragment> <h3>Lighthouse Audits</h3><p>Knowing that Google is starting to rank pages based on their loading speed, accessibility, and best-practices, I set about achieving perfect scores in all Lighthouse audits.</p>

<p>Some of optimisations involved</p>

<ul className="learning-list"><li>Lazy-Loading components until the user scrolls near them</li> <li>Using Chrome’s Coverage Dev Tool to remove unnecessary JS/CSS code</li>  <li>Researching and implementing different techniques to increase SEO scores</li>  <li>Ensuring all images had correct alt-texts and inputs had labels</li></ul>

<p>After much work, all Lighthouse scores were near-perfect on both desktop and mobile. There is a clear improvement when compared to their previous website’s performance. This should lead to a much-improved user experience on the site.</p>

<figure className="right">
<LazyLoad>
<img loading="lazy" className="textimg" src={newclighthouse} alt="Lightousescore" /> 
</LazyLoad>
<figcaption>Their new, improved Lighthouse scores</figcaption>
</figure>
<p> Other features I added include;</p>

<ul className="learning-list"> <li>a Testimonials section with some of their top Google reviews</li> <li>Drop-down menus showing the company’s full-range of services</li> <li>Contact forms using Formspree, linked to the owner’s e-mail inbox</li> <li>Added a Google maps iframe to their contact section</li> <li>Provided staff with log-ins for Contenful and demonstrated how to edit content</li></ul>


<p> Like with my portfolio, I tried to minimise clutter. Rather than take up the home-page with big walls of text, I hid them inside drop-down sections, so if a visitor wants to read in more detail, they can click the “read-more” button.</p>

<p>In summary, this was my first experience making a site for an active, real-life company, and I made extra effort to ensure they were happy with it. I learned a lot about topics I had never needed to pay much attention to before, such as SEO, accessibility, and Content Management Systems.</p>

<p>I look forward to using Gatsby again and I now have a template I can use and edit if businesses want similar websites made.</p>

                    </React.Fragment>      


var cabinsleft = <React.Fragment>
  
  <h3>The Backstory</h3>

<p>I made this site for my brother’s company, which is due to launch later this year. The company allows people to book overnight stays in small cabins in the wilderness. It is about the escaping the hustle and bustle of city life and the constant hum of technology and getting back into nature. I tried to reflect the overall ethos of the company with the minimalist, uncluttered website design.</p>

<h3> Design</h3>

<p>I designed this site totally from scratch, with no particular inspiration to draw from.  I really enjoyed exploring lots of little CSS tricks and animations, such as the fog on the background image.</p>

<p>I learned a lot about typography and design and the difference fonts and colours can make to a user’s perception of your brand. I tried to get away from a corporate-style website.</p>

<p>The aesthetic is supposed to be fun and light-hearted and this is reflected in my choice of fonts, colours, borders styles, buttons, and images.</p>

<p>I used 8 values in the CSS border-radius on the images, buttons and videos on the site, so each one has unique, organic-looking borders.</p>

<h3>  Features</h3>

<p>I added a blog to the site, and each blog-entry is easily viewable in drop-down format so the user never has to navigate away from the page.</p>

<p>I also linked the site to OpenWeatherMap’s API, so a customer can check out the 5-day forecast at each cabin’s location prior to making their booking.</p>

<figure className="left">
<img loading="lazy" className="textimg" src={weather} alt="weathermap" /> 
<figcaption>image gallery & 5 day weather forecast</figcaption>
</figure>
<br/>

<p>When the company launches, I will add a booking/payment system to the site.</p>

<p>I considered using Google-Maps widgets to show customers the location of each cabin, but since the actual addresses are secret, I just used Photoshop to put small symbols onto the map of Ireland, to give a rough idea of the locations.</p>

</React.Fragment>

var cabinsright = <React.Fragment>


<br/><br/><br/>

<p>The Youtube video in the embedded player currently is just a placeholder, to be replaced once we shoot our own promo video.</p>

<figure className="right">
<img loading="lazy" className="textimg" src={youtube} alt="youtubeiframe" /> 
<figcaption>Embedded Youtube player with funky borders</figcaption>
</figure>

<p>Since I wanted the site to be minimally cluttered, the navbar slides away when the user scrolls down, and reappears when the user scrolls up. I used some Javascript logic for this.</p>

<p>The icons in the footer have a small animation/box-shadow on hover, just to let the user know which one is being selected. I find these subtle little effects really add to the user experience.</p>

<p>The social media icons are from Font-Awesome, although I had to custom-make the Instagram one using a PNG, as the Font-Awesome version wasn’t available in color.</p>

<p>Each image on the site has multiple versions. The larger, high-quality versions only load on-click, to save bandwidth and aid load speed.</p>

<p>The only part of the site that uses Bootstrap is the contact form.</p>

<p>On the About page, I wanted one GIF or video that zooms in/out on a cabin from a bird’s-eye view, to fully convey how isolated the cabins are. I couldn’t find any animations like this online, so I had to learn about keyframes and how to manually code the animation myself. I was happy with the end result.</p>

<h3> Summary</h3>

<p>Like all of my sites, it is fully responsive and looks just as good on any device. I made sure that the Lighthouse audits all passed with flying colors, and that my code is tidy, semantic and is not repetitive. I used React and each component loads very quickly.</p>

<p>I had lots of fun making this site and being in control of the creative process. I spent a lot of time learning about design theory and how to add make a site look artistic and unique. I showed the site to my brother, who had struggled with making a site himself using WIX, and he was delighted with my work. 
<br/><br/>
I may add more features and visual effects, in addition to the booking system, before the site goes live.</p>


</React.Fragment>

var networkersleft= <React.Fragment>
  
<h3>The Background</h3>

<p>The idea for this site was originally conceived during my coding Bootcamp. Everybody was paired up with a partner and asked to create a website from scratch. I came up with an idea for a Tinder-like site where you could swipe through local workers in your area, see ratings, testimonials, prices, etc. and hire one you like.</p>

<p>My partner agreed on this, and we decided that she would take care of the Back-End, and I would take care of the Front-End. After sketching up the idea for the main page on pen and paper, I then downloaded the app Sketch, and created a mock-up there.</p>


<figure className="left">
<img loading="lazy" className="textimg" src={sketchnet} alt="Sketchversion" /> 
<figcaption>An early Sketch of the website</figcaption>
</figure>



<p>My partner created some Schema diagrams, showing how the database objects would relate to each other, and the how different logins for users/customers would work.</p>

<figure className="left">
<img  loading="lazy" className="textimg" src={schema} alt="Schema-diagram" /> 
<figcaption> Schema-diagrams </figcaption>
</figure>

<p>Unfortunately, due to time constraints and my partner becoming ill during this part of the course, the project went unfinished. Months later, after the course, I decided to return to it.</p>

<p>This was by far the most complex site I had built at the time, and my first full site using React. As the site grew and grew, I begun to realise that I could save lots of time and write less code by being clever with Javascript.</p>


</React.Fragment>

var networkersright = 


<React.Fragment>
 <h3>Utilising Javascript</h3>


<p>I learned to use reusable components and change the props or state to slightly vary them each time.</p>

<p>Just to give an example, there are 5 different categories of workers on the site (builders, accountants, designers, clowns, and chefs), and each has 3 individual workers to choose from. So, rather than create 15 distinct bios, I instead wrote just 6 and used props to sub in the names, job titles, costs, pronouns, contact info, images, etc, so they are always appropriate.</p>

<figure className="right">
<img loading="lazy" className="textimg" src={snippet} alt="JS Snippet" /> 
<figcaption> Javscript logic using props </figcaption>
</figure>

<p>There are also 3 testimonials written on each worker’s page. So, rather than write 45 unique testimonials, I just wrote a handful but used Javascript to make them appropriate for each worker. I also created an array of headshots and names which are chosen at random, so that the testimonials are never the same on each page visit.</p>



<p>The contact form uses Bootstrap but has different fields depending on whether you sign in as a Worker or Customer.</p>

<p>The carousel on the main page has 3 images on Desktop, but reduces to 3 on tablets, and one on phones. This can be swiped back and forth on mobiles too.</p>

<p>With the menus, fonts and colors, I tried to go for a more professional, corporate look. I used Font-Awesome to include each worker’s social-media links.</p>

<p>I learned to use favicons so that the site’s logo shows up on all types of tabs on all types of devices.</p>

<p>Looking back on the code now, I can see many areas in which I've improved. Back when I made this site, I tended to use px too much, instead of more responsive units like em/rem, %, or vw/vh. I also wasn't as descriptive as I should have been with my class names. 

 </p>

<p>In future, I plan to finish the back-end, and use Passport to create a functioning log-in system and MySQL to create a database of workers, ratings, testimonials, etc.</p>
<h3 > Summary </h3>
<p>In summary, this project thought me a lot about using Javascript arrays, objects and functions to show the correct data to the user, and to save myself a lot of repetitive typing. I also learned lots about using Node.js to install packages, and how to navigate around package.json files. It also showed me how the back-end and front-end integrate and how to co-ordinate with a partner regarding version control.</p>


</React.Fragment>




const alldescriptions = {
	crezotext:<React.Fragment> <p>I made this site for a small construction company in Vancouver. 
                   I replaced their old Wordpress site with a more modern
                   version using Gatsby.js.</p>

                   <p>Loading times were vastly decreased and Lighthouse audit scores improved dramatically
                   in all areas.

                    <br/><br/>
                    I linked the site to Contentful CMS so they can manage the content themselves, without knowing any code.
                    <br/><br/> 
                    For detailed info about how I made this site and what I learned along the way, just  
                    <Modal title="Crezo Construction" column1={crezoleft} column2={crezoright} xnumber="secondx" />
                      <br/> <br/>
                    </p>
                    </React.Fragment>
                    ,
                    




	cabintext:<p>This is a mock-up website for my brother's company. The company is a bit like Air BnB, but specialises in off-the-grid cabins.
                     <br/><br/> Built using React, I tried to convey 
                    the overall ethos of the company with the minimalist website design.

                    <br/><br/>
                    The site contains image galleries, a blog, 5 day weather forecast using API, and some 
                    quirky animations.
                    <br/><br/> 
                     When the company launches, I will add a booking / payment system to the site. <br/> <br/>
                     For more details, just
                     <Modal title="Cosy Cabins" column1={cabinsleft} column2={cabinsright} xnumber="secondx" />
                      
</p>,

	networktext:<p>

	Networkers is a site for finding skilled workers, fast<br/>
                  <br/>It's almost like Tinder, except instead of swiping through dates
                  you swipe through workers in your area. <br/>
                  <br/>

                  So, if you need a hair cut, a pipe fixed or a website designed, you can swipe through the 
                  local barbers, plumbers or designers, and hire one you like!

                    <br/><br/> 
                    This was my first project built using React, to read more about it, just
                    <Modal title="NetWorkers" column1={networkersleft} column2={networkersright} />
                     <br/> <br/>
                    
	</p>,

  mystory1: <React.Fragment> 
  <h3 className="mystoryh3">The Beginning</h3>
<p>Hello again! So, how did I get here? </p> 

<p>Well, from a very young age I enjoyed using computers and seeing what I could do with them.
Unfortunately, in my secondary school days there was no IT subject on the curriculum. So, since English was my strongest subject in school, I ended up going to college and studying English.</p>

<p>Whilst I enjoyed my college days and got my degree, I wasn’t sure what to do with myself after graduating.</p>
<figure className="left">
<img loading="lazy" className="textimg" src={college} alt="collegegrad" /> 
<figcaption> Graduation Day </figcaption>
</figure>
<p>Over the next few years, I studied and worked in a variety of different areas that interested me. I studied Sports Performance and Personal Training, then worked in this area for two years in Australia. On returning to Dublin, I worked for two years as an English language teacher.</p>

<p><strong>Though these experiences weren’t really tech-related, they did gradually lead me towards studying computers in more depth.</strong><br/><br/> As a PT, I would use software to create training programs, spreadsheets for tracking progress, marketing materials, E-Books, etc.
As a teacher, I used lots of technology in the classroom and had an idea for a website/app that would help my students with the local Dublin lingo. I also wanted to make an online quiz game which students could play from their phones.</p>

<p>However, in trying to bring these ideas to life, I became frustrated with the limitations of the software I was using. I remember tearing my hair out writing a 78 page fitness manual filled with images, charts, and videos purely in Microsoft Word (if you think positioning in CSS is frustrating, try that!).</p>

<p>I attempted to make the sites for my students on Wordpress and other site-builders, but I couldn’t get things exactly as I wanted them. As I googled more and more, it became apparent that people were teaching themselves how to code so they could make their own apps and websites. Since I thought of myself as a techy sort of guy, I figured “if they can do it, why can’t I?”</p>

 
 <h3 className="mystoryh3">A Slow Start</h3> 
<p>As I started reading more about the world of programming, I began to think it was a viable career path for me. Out of curiosity, I checked out a local bootcamp, but was put off by the hefty tuition fees.
I was still working full-time as a teacher, and spent many more hours preparing classes and correcting homework, but I thought with a few months of dedicated self-study, that I'd be a near-expert.</p>

<p>This was at the beginning of 2018, and I had already planned on a move to Vancouver for that summer. I told myself that by summer, I would have multiple websites and fully functional apps created, and I'd be ready to start a new career as a developer.</p> 

<p>Unfortunately, things didn't go to plan. My learning was a lot slower than I’d expected. Despite putting in the hours, things didn’t seem to click for me. I followed many online tutorials which recommended starting with HTML, CSS and Javascript. It was the latter that I really struggled with.</p>

<p>I read lots about booleans, arrays, strings, for loops, etc, and tried to read books like <em>“Eloquent Javascript”</em> and <em>“You Don’t Know Javascript”</em>. I did code katas that reminded me of the maths questions I used to hate in school.</p>

<p>I must have followed 5 or 6 different “to-do list” tutorials, but I found them quite...well... boring. I didn’t really know WHY this stuff mattered.</p>  <p><strong>It wasn’t until I just ditched the tutorials and started working on creating my own websites that things started to fall into place.</strong></p>

<h3 className="mystoryh3">My First Site</h3>


<p>I remember my first website was a game of Rock-Paper-Scissors. I had a vision for how I wanted it to look, a bit like Street Fighter, with energy bars, animations, and sound effects. I remember gathering all the cartoon images I wanted and figuring out how to put them into position. I remember thinking Absolute positioning made it easy, but then when I opened my site on a mobile or tablet, it just looked awful, so I learned about modern methods like flexbox and grid, which helped with responsiveness.</p>

<figure className="left">
<img loading="lazy" className="textimg" src={rps} alt="rockpaperscissors" /> 
<figcaption> my first site! </figcaption>
</figure>


<p>Once I got everything looking how I wanted, I realised, it still didn’t DO anything. This was when I began to realise the power of JavaScript. I created a function which would let you “play” against the computer, and after each round, the energy bars would deplete, and the scores would update and an alert would flash up with “you win!” or “you lose”.</p>

<p><strong>In making this one personal project from start to finish, I'd learned more than in the previous 3 months combined. </strong></p>

<p>Unfortunately, after finishing this project, I managed to fall back into “tutorial hell” and spent many more months learning lots in theory, but not really creating anything to show for it. When I got to Vancouver in June 2018, I still didn’t feel ready to apply for developer jobs. </p> <p>I spent some time exploring my new surroundings and getting settled in. Feeling a bit disillusioned with my lack of progress in programming, I took an unrelated office job and drifted away from my studies for a while.</p>



 </React.Fragment>, 

mystory2: <React.Fragment>



<h3 className="mystoryh3">The Bootcamp</h3> 

<p>One day that Autumn, I was browsing Reddit, when I saw that an individual was looking for students to take part in the first cohort of a new coding bootcamp. As it was the first cohort, it was only a fraction of the usual bootcamp cost. I checked out the planned syllabus and it looked very promising. Even though it was aimed at young high-school graduates, I got in touch, explained a bit about my situation and luckily was accepted onto the course.</p>

<p>Knowing that I’d soon be starting a course, I quickly began making up for lost time. I completed all the requisite pre-course materials and did as much as I could to prepare. The course would be 4 months long, two evenings a week, plus weekends, with additional study time and homework.</p>

<figure className="right">
<img loading="lazy" className="textimg" src={polyinsta} alt="codingbootcamp" /> 
<figcaption> At bootcamp, me on the left </figcaption>
</figure>

<p>I had a packed schedule for those 4 months, working in a hectic sales and marketing job during the day, then straight to bootcamp or homework at night. It was overwhelming at times, but it was well worth it.</p>

<p>Working with a group and having an instructor to guide you and answer questions really accelerated my learning. We were introduced to Python, databases, SQL, and some of the other “back-end” technologies, and learned how to use APIs to get information from sites like Twitter and Reddit onto our websites. We progressed from vanilla JS/jQuery to modern frameworks like React and had a peek at “machine learning”.</p>

<p><strong>We participated in several 12 hour Hackathons (building a group project from start to finish over a Saturday) and getting the experience of working as a team on a project was invaluable.</strong></p>

<p>We covered everything from initial design using pencil and paper, then Sketch, to drawing up relational schema diagrams, to creating the front-end, integrating it with the back-end, creating authorisations, using Git and Github for push/pull requests and finally, uploading to a hosting provider and presenting our work.</p>

<p>At the time, it felt like information overload, and a lot of our group projects were rushed to completion as we had to adhere to strict deadlines. This did give me a great insight into developer life though.</p> <p> <strong>Importantly, the course also laid out the blueprint for what I needed to learn to become a “real” web developer and make proper apps.</strong></p>

<h3 className="mystoryh3"> From Then 'til Now </h3>

<p>During the few months after the bootcamp, I set out on sprucing up my portfolio with more sites and apps, and I benefited from being able to look back at the course material and ask questions in our Slack group.</p>

<p>I really started to enjoy using React and have since built several websites with it (see my Projects section). Each time I build a new project, I learn lots along the way, then I go back and optimise my older sites with what I learned.</p>

<p>I’m aware that the world of tech is constantly changing, and it’s impossible to ever know everything, but I feel like I’m steadily improving by 1% every day.
I have learned how to get past the initial feeling of hopelessness when first learning a new concept or language and now feel like I can learn anything I set my mind to (GraphQL being my most recent conquest). 
</p>

<p>* <strong>Two books that have helped shape my self-study habits are </strong>“<em>Deep Work</em>”<strong> and </strong>“<em>So Good They Can’t Ignore You</em>”<strong>, both written by computer professor Cal Newport.</strong></p>

<p>Most of my learning these days comes from starting projects, thinking of new features to implement, then learning as I go. When I want to learn more on a certain topic, I use a mix of Youtube, Google, Udemy, Reddit, Stack Overflow, Medium and occasionally CodeAcademy or Scrimba.</p>
Here are some examples of random tidbits I've learned over the last few weeks.
<ul className="learning-list" ><li> Use CSS variables to allow Javascript to target psuedo elements</li>
<li>The Chrome extension Snapfont is great for finding suitable fonts </li>
<li>AnimXYZ makes creating animations much easier and more performant</li>
<li>Gatsby takes the hassle out of resizing/compressing images</li></ul>

<h3 className="mystoryh3"> Current Priorities </h3>

<p>Besides looking for a job, I want to start getting more involved in the community. Until recently I had always been intimidated to go to coding meet ups as I felt I’d be out of my depth (imposter syndrome is real), but now it’s something I’d love to do. Unfortunately, the pandemic has made this impossible, but I am still active on web dev subreddits and on StackOverflow, as well as Slack/Discord groups.</p>

<p>Eventually, I’d like to write my own articles on a site like Medium. I like to think others can learn from my experiences.</p>

<p>In the short-term, I’m planning to start learning more about Typescript, working with databases and APIs, and handling booking/payment systems on websites.</p>

<p>If you have kept reading to this point, I salute you and please get in touch!
</p>

  </React.Fragment>



}

export {alldescriptions}
