San Francisco Entrepreneurship in Residence Website
=====
This is a static HTML website deployed at http://entrepreneur.sfgov.org

#Deploying
The SF EIR website is hosted on [GitHub pages](http://pages.github.com/).  It is served by pushing to the `gh-pages` branch of this repository and the `CNAME` file tells GitHub Pages how to correctly configure the virtual host.

#Thanks
Special thanks for the original inspiration for the site design and concept from [Code for America's single page Accelerator site](https://github.com/codeforamerica/CfA_Accelerator).  Much has been changed to reflect the Mayor's Office of Civic Innovation branding.  Also, the underlying structure has been changed to accommodate [Bootstrap 3.0](https://github.com/twbs/bootstrap).  We kept the form embed and related javascript as we thought this was a very clean way to display the application.  Mentor pages were added as simple one page templates.  These could have been done as [Jekyll templated pages](http://jekyllrb.com/docs/templates/), but given the number and single use of the site, we just replicated the mentor pages manually and dropped in the images and bios.
