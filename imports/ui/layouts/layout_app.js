import './layout_app.html';
import '../components/nav_main/nav_main.js';
import '../components/side_nav/side_nav.js';

import './layout_app.less';

Template.layout_app.onRendered(function() {

});

Template.layout_app.onCreated(function() {

  var self = this;

  this.autorun(() => {
    FlowRouter.watchPathChange();
    Session.set("currentPathName", FlowRouter.current().route.name);
  });

});

Template.layout_app.helpers({

});

Template.layout_app.events({

});
'layout_app.less'
