import './project_home.html';
import './projects.less';


Template.project_home.onRendered(function() {


  Session.set("currentPathName", 'projects');


  $(document).ready(function() {
  })
});

Template.project_home.onCreated(function() {




});

Template.project_home.helpers({


});

Template.project_home.events({
  'click #programsTable tbody tr'(event, tempate){

    FlowRouter.go('projects.program.view', {
      program_name: 'test-project',
      layout: FlowRouter.getParam('layout')
    });
  }
});
