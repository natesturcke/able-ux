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
import '../imports/ui/pages/partners/partners.js';

import '../imports/ui/components/dashboard_nav/dashboard_nav.js';

import '../imports/ui/pages/styles/styles.js';

import '../imports/ui/pages/quotes/quotes.js';
import '../imports/ui/pages/quotes/new_quote.js';

import '../imports/ui/pages/coachees/coachees.js';




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



FlowRouter.route('/partner-network/', {
  name: 'partners',
  action() {
    BlazeLayout.render('layout_app', { main: 'partners' });
  },
});


FlowRouter.route('/my-coachees/', {
  name: 'coachees',
  action() {
    BlazeLayout.render('layout_app', { main: 'coachees', current_nav: 'dashboard', sub_nav: 'dashboard' });
  },
});