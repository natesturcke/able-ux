import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// import layouts

import '../imports/ui/layouts/layout_app.js';
import '../imports/ui/layouts/layout_blank.js';

//import pages

import '../imports/ui/pages/home/home.js';
import '../imports/ui/pages/projects/projects.js';
import '../imports/ui/components/project_nav/project_nav.js';
import '../imports/ui/pages/projects/project_home.js';
import '../imports/ui/pages/programs/program_home.js';
import '../imports/ui/pages/programs/program_workshops.js';
import '../imports/ui/pages/programs/program_workshops_book.js';

import '../imports/ui/pages/partners/partners.js';
import '../imports/ui/pages/partners/partners_striped.js';
import '../imports/ui/components/profile/profile.js';


import '../imports/ui/components/dashboard_nav/dashboard_nav.js';

import '../imports/ui/pages/styles/styles.js';

import '../imports/ui/pages/quotes/quotes.js';
import '../imports/ui/pages/quotes/new_quote.js';

import '../imports/ui/pages/coachees/coachees.js';

import '../imports/ui/pages/onboarding/register.js';
import '../imports/ui/pages/onboarding/onboarding.js';
import '../imports/ui/pages/onboarding/login.js'
import '../imports/ui/pages/onboarding/register_invite.js'
import '../imports/ui/pages/onboarding/register_invite_email.js'




FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('layout_app', { main: 'home', current_nav: 'dashboard', sub_nav: 'dashboard' });
  },
});

FlowRouter.route('/styles/', {
  name: 'styles',
  action() {
    BlazeLayout.render('layout_blank', { main: 'styles' });
  },
});


FlowRouter.route('/register/', {
  name: 'register',
  action() {
    BlazeLayout.render('layout_blank', { main: 'register' });
  },
});

FlowRouter.route('/register/invite', {
  name: 'register_invite',
  action() {
    BlazeLayout.render('layout_blank', { main: 'register_invite' });
  },
});

FlowRouter.route('/register/invite/email', {
  name: 'register_invite_email',
  action() {
    BlazeLayout.render('layout_blank', { main: 'register_invite_email' });
  },
});





FlowRouter.route('/login/', {
  name: 'login',
  action() {
    BlazeLayout.render('layout_blank', { main: 'login' });
  },
});


FlowRouter.route('/projects/', {
  name: 'projects',
  action() {
    BlazeLayout.render('layout_app', { main: 'projects', current_nav: 'projects' });
  },
});


FlowRouter.route('/projects/view/test-project', {
  name: 'projects.view',
  action() {
    BlazeLayout.render('layout_app', { main: 'project_home', current_nav: 'projects', sub_nav: 'project_nav' });
  },
});

FlowRouter.route('/projects/view/test-project/:program_name', {
  name: 'projects.program.view',
  action() {
    BlazeLayout.render('layout_app', { main: 'program_home', current_nav: 'projects', sub_nav: 'project_nav' });
  },
});

FlowRouter.route('/projects/view/test-project/:program_name/workshops', {
  name: 'projects.program.workshops',
  action() {
    BlazeLayout.render('layout_app', { main: 'program_workshops', current_nav: 'projects', sub_nav: 'project_nav' });
  },
});

FlowRouter.route('/projects/view/test-project/:program_name/workshops/book', {
  name: 'projects.program.workshops.book',
  action() {
    BlazeLayout.render('layout_app', { main: 'program_workshops', current_nav: 'projects', sub_nav: 'project_nav', slideout: 'program_workshops_book', slideout_title: "Calendly Booking" });
  },
});





FlowRouter.route('/quotes/', {
  name: 'quotes',
  action() {
    BlazeLayout.render('layout_app', { main: 'quotes', current_nav: 'quotes'  });
  },
});



FlowRouter.route('/quotes/new/:quote_section', {
  name: 'quotes.new',
  action() {
    BlazeLayout.render('layout_app', { main: 'new_quote', current_nav: 'quotes'});
  },
});



FlowRouter.route('/partner-network-alt/', {
  name: 'partners_alt',
  action() {
    BlazeLayout.render('layout_app', { main: 'partners'});
  },
});

FlowRouter.route('/partner-network/', {
  name: 'partners',
  action() {
    BlazeLayout.render('layout_app', { main: 'partners'});
  },
});

FlowRouter.route('/partner-network/:partner_id', {
  name: 'partners.profile',
  action() {
    BlazeLayout.render('layout_app', { main: 'profile'});
  },
});


FlowRouter.route('/my-coachees/', {
  name: 'coachees',
  action() {
    BlazeLayout.render('layout_app', { main: 'coachees', current_nav: 'dashboard', sub_nav: 'dashboard' });
  },
});
