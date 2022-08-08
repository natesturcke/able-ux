import './new_quote.html';
import './quotes.less';

Template.new_quote.onRendered(function() {

  $(document).ready(function() {})
});

Template.new_quote.onCreated(function() {

  let iquoteData = {
    title: null,
    status: 'Draft',
    contact: null,
    branding: 'true'
  };

  this.quoteData = new ReactiveVar(iquoteData);


});

Template.new_quote.helpers({
  quoteData() {

    console.log(Template.instance().quoteData.get());

    return Template.instance().quoteData.get();
  },
  createEditor(){
    setTimeout(createEditor,200);
  }

});

Template.new_quote.events({
  'click .status-tabs li'(event, template) {
    event.preventDefault();

    let status = $(event.currentTarget).find("span").text();

    let iquoteData = template.quoteData.get();
    iquoteData.status = status;

    template.quoteData.set(iquoteData);

  },

  'blur .blur-field'(event, template) {
    event.preventDefault();

    let value = $(event.currentTarget).val();

    let iquoteData = template.quoteData.get();
    iquoteData[$(event.currentTarget).data("targetfield")] = value;

    template.quoteData.set(iquoteData);

  },
  'click .click-field'(event, template) {
    event.preventDefault();

    let value = $(event.currentTarget).data("setvalue");

    let iquoteData = template.quoteData.get();
    iquoteData[$(event.currentTarget).data("targetfield")] = value;

    console.log($(event.currentTarget).data("targetfield"),value);

    template.quoteData.set(iquoteData);

  }
});


createEditor = function(){

  console.log("creating editor");

  tinymce.remove("#textEditor");

  tinymce.init({
    menubar:false,
   statusbar: false,
    selector: '#textEditor',
    plugins: [
      'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
      'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
      'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
    ],
    toolbar: 'undo redo | formatpainter casechange blocks | bold italic backcolor | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
  });
}
