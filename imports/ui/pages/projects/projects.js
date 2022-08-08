import './projects.html';
import './projects.less';


Template.projects.onRendered(function() {

  $(document).ready(function() {
  })
});

Template.projects.onCreated(function() {


});

Template.projects.helpers({


});

Template.projects.events({
  'click #projectTable tbody tr'(event, tempate){
    FlowRouter.go('projects.view', {
      layout: FlowRouter.getParam('layout')
    });
  }
});
