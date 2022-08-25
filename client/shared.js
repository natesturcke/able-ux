

Template.registerHelper('currentPathName', function(text) {
  return Session.get("currentPathName");
});

Template.registerHelper('equals', function(a, b) {
  return a == b;
});


Template.registerHelper('current_program', function() {
  return FlowRouter.getParam("program_name");
});

Template.registerHelper('current_profile', function() {
  return FlowRouter.getParam("partner_id");
});


Template.registerHelper('getLayout', function() {
  return FlowRouter.getParam("layout");
});


Template.registerHelper('getQuoteSection', function() {
  return FlowRouter.getParam("quote_section");
})



Template.registerHelper('log', function(value) {
  console.log(value);
});


Template.registerHelper('both', function(v1, v2) {
  return v1 && v2;
});
