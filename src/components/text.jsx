import React from 'react'
import polyinsta from '../pics/polyinsta.jpg'
import rps from '../pics/rock-paper-scissors.jpg'
import Modal from './Modal.js'
import  longertexts  from './longtexts.js'

var crezoleft = <React.Fragment> <p>I made this site for a small construction company in Vancouver. 
                   I replaced their old Wordpress site with a more modern
                   version using Gatsby.js.</p>

                   <p>Loading times were vastly decreased and Lighthouse audit scores improved dramatically
                   in all areas.

                    <br/><br/>
                    The site is linked to Contentful CMS so they can manage the content themselves, without knowing any code.
                    <br/><br/> 
                    The colours, fonts and animations used were chosen to give a professional and modern look.
                    <br/><br/> 
                    
                    </p>
                    </React.Fragment>

  var crezoright =  <React.Fragment> <p>
                      Lorem20  Lorem20 Lorem Lorem20  Lorem20 Lorem

                    </p>
                    <p>
                      Lorem20  Lorem20 Lorem Lorem20  Lorem20 Lorem

                    </p>
                    <p>
                      Lorem20  Lorem20 Lorem Lorem20  Lorem20 Lorem

                    </p>
                    <p>
                      Lorem20  Lorem20 Lorem Lorem20  Lorem20 Lorem

                    </p>
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
                    




	cabintext:<p>This is a mock-up website for my brother's company.
                     <br/><br/> Built using React, I tried to convey 
                    the overall ethos of the company with the minimalist website design.

                    <br/><br/>
                    As this website is image-heavy, I learned a lot about optimising images and making them responsive.
                    <br/><br/>
                    The aesthetic is supposed to be "fun" and light-hearted, so I learned about using colours, fonts
                    and various CSS effects and animations to create the right look.
                    <br/><br/> 
                     When the company launches, I will add a booking / payment system to the site.
                     For more details, just
                     <Modal title="Cosy Cabins" column1="heres some chat" column2="more chat" xnumber="secondx" />
                      <br/> <br/>
</p>,
	networktext:<p>

	Networkers is a site I created from scratch to help me learn React.<br/>
                  <br/>It's almost like Tinder, except instead of swiping through dates
                  you swipe through workers in your area. <br/>
                  <br/>

                  So, if you need a pipe fixed or as website designed, <br/> you can swipe through the 
                  local plumbers or designers, and hire one you like!

                  
                    <br/><br/> 
                    This was my first project built using React, and I really came to enjoy the component-based approach
                    <Modal title="NetWorkers" column1="kjn kjn kj" column2="khjbkjhbnkj" />
                     <br/> <br/>
                    
	</p>,

  mystory1: <React.Fragment> 
  <h3>The Beginning</h3>
<p>Hello again! So, how did I get here? </p> 

<p>Well, from a very young age I enjoyed using computers and seeing what I could do with them.
Unfortunately, in my secondary school days there was no IT subject on the curriculum. So, since English was my strongest subject in school, I ended up going to college and studying English.</p>

<p>Whilst I enjoyed my college days and got my degree, I wasn’t sure what to do with myself after graduating. Over the next few years, I studied and worked in a variety of different areas. I studied Sports Performance and Personal Training, then worked in this area for two years in Australia. On returning to Dublin, I worked for two years as an English language teacher.</p>

<p><strong>Though these experiences weren’t really tech-related, they did gradually lead me towards studying computers in more depth.</strong><br/><br/> As a PT, I would use software to create training programs, spreadsheets for tracking progress, marketing materials, E-Books, etc.
As a teacher, I used lots of technology in the classroom and had an idea for a website/app that would help my students with the local Dublin lingo. I also wanted to make an online quiz game which students could play from their phones.</p>

<p>However, in trying to bring these ideas to life, I became frustrated with the limitations of the software I was using. I remember tearing my hair out writing a 78 page fitness manual filled with images, charts, and videos purely in Microsoft Word (if you think positioning in CSS is frustrating, try that!).</p>

<p>I attempted to make the sites for my students on Wordpress and other site-builders, but I couldn’t get things exactly as I wanted them. As I googled more and more, it became apparent that people were teaching themselves how to code so they could make their own apps and websites. Since I thought of myself as a techy sort of guy, I figured “if they can do it, why can’t I?”</p>

 
 <h3>A Slow Start</h3> 
<p>As I started reading more about the world of programming, I began to think it was a viable career path for me. Out of curiosity, I checked out a local bootcamp, but was put off by the hefty tuition fees.
I was still working full-time as a teacher, and spent many more hours preparing classes and correcting homework, but I thought with a few months of dedicated self-study, that I'd be a near-expert.</p>

<p>This was at the beginning of 2018, and I had already planned on a move to Vancouver for that summer. I told myself that by summer, I would have multiple websites and fully functional apps created, and I'd be ready to start a new career as a developer.</p> 

<p>Unfortunately, things didn't go to plan. My learning was a lot slower than I’d expected. Despite putting in the hours, things didn’t seem to click for me. I followed many online tutorials which recommended starting with HTML, CSS and Javascript. It was the latter that I really struggled with.</p>

<p>I read lots about booleans, arrays, strings, for loops, etc, and tried to read books like <em>“Eloquent Javascript”</em> and <em>“You Don’t Know Javascript”</em>. I did code katas that reminded me of the maths questions I used to hate in school.</p>

<p>I must have followed 5 or 6 different “to-do list” tutorials, but I found them quite...well... boring. I didn’t really know WHY this stuff mattered.</p>  <p><strong>It wasn’t until I just ditched the tutorials and started working on creating my own websites that things started to fall into place.</strong></p>

<h3>My First Site</h3>


<p>I remember my first website was a game of Rock-Paper-Scissors. I had a vision for how I wanted it to look, a bit like Street Fighter, with energy bars, animations, and sound effects. I remember gathering all the cartoon images I wanted and figuring out how to put them into position. I remember thinking Absolute positioning made it easy, but then when I opened my site on a mobile or tablet, it just looked awful, so I learned about modern methods like flexbox and grid, which helped with responsiveness.</p>

<img className="textimg left" src={rps}  />

<p>Once I got everything looking how I wanted, I realised, it still didn’t DO anything. This was when I began to realise the power of JavaScript. I created a function which would let you “play” against the computer, and after each round, the energy bars would deplete, and the scores would update and an alert would flash up with “you win!” or “you lose”.</p>

<p><strong>In making this one personal project from start to finish, I'd learned more than in the previous 3 months combined. </strong></p>

<p>Unfortunately, after finishing this project, I managed to fall back into “tutorial hell” and spent many more months learning lots in theory, but not really creating anything to show for it. When I got to Vancouver in June 2018, I still didn’t feel ready to apply for developer jobs. </p> <p>I spent some time exploring my new surroundings and getting settled in. Feeling a bit disillusioned with my lack of progress in programming, I took an unrelated office job and drifted away from my studies for a while.</p>



 </React.Fragment>, 

mystory2: <React.Fragment>



<h3>The Bootcamp</h3> 

<p>One day that Autumn, I was browsing Reddit, when I saw that an individual was looking for students to take part in the first cohort of a new coding bootcamp. As it was the first cohort, it was only a fraction of the usual bootcamp cost. I checked out the planned syllabus and it looked very promising. Even though it was aimed at young high-school graduates, I got in touch, explained a bit about my situation and luckily was accepted onto the course.</p>

<p>Knowing that I’d soon be starting a course, I quickly began making up for lost time. I completed all the requisite pre-course materials and did as much as I could to prepare. The course would be 4 months long, two evenings a week, plus weekends, with additional study time and homework.</p>
 <img className="textimg right" src={polyinsta}  />
<p>I had a packed schedule for those 4 months, working in a hectic sales and marketing job during the day, then straight to bootcamp or homework at night. It was overwhelming at times, but it was well worth it.</p>

<p>Working with a group and having an instructor to guide you and answer questions really accelerated my learning. We were introduced to Python, databases, SQL, and some of the other “back-end” technologies, and learned how to use APIs to get information from sites like Twitter and Reddit onto our websites. We progressed from vanilla JS/jQuery to modern frameworks like React and had a peek at “machine learning”.</p>

<p><strong>We participated in several 12 hour Hackathons (building a group project from start to finish over a Saturday) and getting the experience of working as a team on a project was invaluable.</strong></p>

<p>We covered everything from initial design using pencil and paper, then Sketch, to drawing up relational schema diagrams, to creating the front-end, integrating it with the back-end, creating authorisations, using Git and Github for push/pull requests and finally, uploading to a hosting provider and presenting our work.</p>

<p>At the time, it felt like information overload, and a lot of our group projects were rushed to completion as we had to adhere to strict deadlines. This did give me a great insight into developer life though.</p> <p> <strong>Importantly, the course also laid out the blueprint for what I needed to learn to become a “real” web developer and make proper apps.</strong></p>

<h3> From Then 'til Now </h3>

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

<h3> Current Priorities </h3>

<p>Besides looking for a job, I want to start getting more involved in the community. Until recently I had always been intimidated to go to coding meet ups as I felt I’d be out of my depth (imposter syndrome is real), but now it’s something I’d love to do. Unfortunately, the pandemic has made this impossible, but I am still active on web dev subreddits and on StackOverflow, as well as Slack/Discord groups.</p>

<p>Eventually, I’d like to write my own articles on a site like Medium. I like to think others can learn from my experiences.</p>

<p>In the short-term, I’m planning to start learning more about Typescript, working with databases and APIs, and handling booking/payment systems on websites.</p>

<p>If you have kept reading to this point, I salute you and please get in touch!
</p>

  </React.Fragment>



}

export {alldescriptions}
