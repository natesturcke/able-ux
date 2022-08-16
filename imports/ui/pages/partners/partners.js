import './partners.html';
import './partners.less';


var partners = [
  {
    name: 'Nate Sturcke',
    email: 'nate@soma.academy',
    role: 'Design Thinking Facilitator',
    profile_pic: '/images/users/nate.png',
    organisation: 'Skills of the Modern Age',
    tags: ['design', 'facilitation', 'strategy'],
    logo: '/images/partner_logos/soma.png'
  },
  {
    name: 'Jeroan van Dalen',
    email: 'jeroen@integral.global',
    role: 'Facilitator',
    profile_pic: '/images/users/jeroen.png',
    organisation: 'Integral',
    logo: 'https://static1.squarespace.com/static/5e9bd172ae3b9707c719b4a5/t/5eaa48c22ff52116d1ebca37/1659666469453/'
  },
  {
    name: 'Jennifer van Extralongname',
    email: 'jen@soma.academy',
    role: 'CEO',

    profile_pic: '/images/users/u3.png',
    organisation: 'Acme',
    logo: ''
  },
  {
    name: 'Donald Trumf',
    email: 'don@soma.academy',
    role: 'Master Coach',

    profile_pic: '/images/users/u2.png',
    organisation: 'Long Company Name Pty Ltd',
    logo: ''
  }
]


Template.partners.onRendered(function() {

  $(document).ready(function() {

    $('.select2-tags').select2({
      width: '100%',
      tags: true
    });


  })
});

Template.partners.onCreated(function() {


});

Template.partners.helpers({
  partners(){
    return partners;
  }

});

Template.partners.events({

});
