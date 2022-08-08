import './layout_blank.html';

import './layout_blank.less';

Template.layout_blank.onRendered(function() {

});

Template.layout_blank.onCreated(function() {

  var self = this;

  this.autorun(() => {
    FlowRouter.watchPathChange();
    console.log("...", FlowRouter.current().route.name);
    Session.set("currentPathName", FlowRouter.current().route.name);
  });

});

Template.layout_blank.helpers({

});

Template.layout_blank.events({

});
'layout_blank.less'
