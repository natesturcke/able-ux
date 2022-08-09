import './styles.html';
import './styles.less';




Template.styles.onRendered(function() {

  $(document).ready(function() {

    $('.select2-dropdown').select2({width: '100%' }).on('select2:open', function(e){
      $('.select2-search__field').attr('placeholder', 'Search...');
    });

    $('.select2-tags').select2({
      width: '100%',
      tags: true
    });



  })
});

Template.styles.onCreated(function() {

});

Template.styles.helpers({

});

Template.styles.events({

});
