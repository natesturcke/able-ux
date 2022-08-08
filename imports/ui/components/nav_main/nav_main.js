import './nav_main.html';
import './nav_main.less';

Template.nav_main.onCreated(function() {

  var self = this;

  this.autorun(() => {
    self.showCreateMenu = new ReactiveVar(false);
    self.showQuickLinkMenu = new ReactiveVar(false);

  });

});

Template.nav_main.helpers({

  showCreateMenu() {
    return Template.instance().showCreateMenu.get();
  },
  showQuickLinkMenu() {
    return Template.instance().showQuickLinkMenu.get();
  }

});

Template.nav_main.events({

  'click .show-create-menu'(event, template) {
    event.preventDefault();

    var val = template.showCreateMenu.get();

    if (val) {
      template.showCreateMenu.set(false)
    } else {
      template.showCreateMenu.set(true);
      $(event.currentTarget).focus();
    }
  },
  'blur .show-create-menu'(event, template) {
    event.preventDefault();
    template.showCreateMenu.set(false);

  },

  'click .show-quick-link-menu'(event, template) {
    event.preventDefault();

    var val = template.showQuickLinkMenu.get();

    if (val) {
      template.showQuickLinkMenu.set(false)
    } else {
      template.showQuickLinkMenu.set(true);
      $(event.currentTarget).focus();
    }
  },
  'blur .show-quick-link-menu'(event, template) {
    event.preventDefault();

    template.showQuickLinkMenu.set(false);

  }

});
