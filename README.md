# Unit 02 CSS and Bootstrap Homework: Creating a Responsive Portfolio

For this assignment, I created three different files: `index.html`, `portfolio.html` and `contact.html`. I also added a CSS style sheet as well as this README file to explain my work.

## Early Steps

First, I did some searching on CSS Bootstrap to find some layouts and components that would work for all 3 of my pages. After doing some research, I decided to set up all 3 of my pages the same way:

- Use the html:5 to set up all 3 sites the same way and give them all a title.

- Make sure all 3 pages were properly linked to:

  - Bootstrap
  - Javascript (just in case any Bootstrap components required it)
  - CSS style sheet
  - Google font that I selected

- Next, I sketched out my 3 separate pages on notebook paper to visualize what I wanted my pages to look like.

## Building/Stylizing the Pages

- First, I added a header that I wanted to appear on all 3 pages above the navbar so the user could see my name the same way no matter which page they were on.

- Then, I found a navbar from Bootstrap and added it to all 3 pages, ensuring that all pages were linked to each other properly.

  - In retrospect, I don't think I chose the correct navbar for this assignment, as it collapses (except the HOME button) every time I shrink the page. In the future, I would probably just create my own "nav" semantic HTML tag and build it myself, but since the assignment required us to use elements from Bootstrap, I decided to make a note of it here in my README file.

- Next, I put all of my attention into the Contact page. I created a container and used snippets from different sections of "forms" from Bootstrap to create the "Name", "Email", and "Message" boxes. I found a button I liked and attached it to the bottom of the form but kept it inside the container.

- I styled my container to the way I wanted it and added a background color to the body around the container to make the form pop a bit more.

- Next, I focused on the homepage and created a horizontal card inside a container to achieve a similar effect as the contact page. I made sure that the entire card was responsive to different sizes by taking advantage of my inspector tool.

- Then, I focused on my portfolio page. For this page, I used columns and rows (as indicated in the directions for this assignment). I essentially put everything into 1 row but split it into 2 equal columns. I also used a similar stylized container to the one I used for my contact info.

## Comments

- I went through and commented on all of my pages and style sheet, while using my pencil/paper sketch to ensure that I accomplished at least the bare bones of what I wanted to accomplish.
  - Another learning moment for me was when I realized I should have commented everything BEFORE I started designing - it probably would have made structuring the pages easier, rather than using it as a checklist at the end of the process. But I definitely learned for next time!

### Finishing Touches

- Checked to see if everything was responsive - again, the navbar threw me for a loop (no pun intended), and I couldn't figure out what I was doing wrong.

- Added a footer with a button that linked to my personal Facebook site on all 3 pages. (Don't look at the photos - I haven't updated my Facebook page in years.)

- Edited/added semantic HTML to focus on my SEO.

  - I wasn't sure if I could add semantic HTML tags to components taken from Bootstrap, so I left those alone. For example, was I able to change div class="row justify-content-center" to make it into a "section" or "main"? I didn't want to change anything and have the Bootstrap functionality stop working, so I decided to play it safe.

- Did one final check to make sure all links were working in my navbar, my portfolio page, and my footer.

- Went through the checklist below for a final sweep.

### Minimum Requirements

- Functional, deployed application (x)

- GitHub repository with README describing the project (x)

- Navbar must be consistent on each page. (x)

- Navbar on each page must contain links to Home/About, Contact, and Portfolio pages. (x)

- All links must work. (x)

- Must use semantic html. (x)

- Each page must have valid and correct HTML. (use a validation service) (x)

- Must contain your personalized information. (bio, name, images, links to social media, etc.) (x)

- Must properly utilize Bootstrap components and grid system. (x)

## Submission on BCS

You are required to submit the following:

- The URLs of the deployed applications (x)

- The URLs of the GitHub repositories (x)
