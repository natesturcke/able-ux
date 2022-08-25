import './quotes.html';
import './quotes.less';


Template.quotes.onRendered(function() {


});

Template.quotes.onCreated(function() {

  this.showTableMenu = new ReactiveVar(true);


});

Template.quotes.helpers({
  showTableMenu() {
    return Template.instance().showTableMenu.get();
  },

});

Template.quotes.events({
  'click .show-sort-menu'(event, template) {
    event.preventDefault();


    template.showTableMenu.set(true);

  },
  'click .show-create-menu'(event, template) {
    event.preventDefault();

    console.log(template.showTableMenu.get());

    template.showTableMenu.get() ?  template.showTableMenu.set(false) : template.showTableMenu.set(true);

  },
  'blur .show-create-menu'(event, template) {
    event.preventDefault();
    template.showTableMenu.set(false);

  },
});
