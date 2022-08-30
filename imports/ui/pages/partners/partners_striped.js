import './partners_striped.html';
import './partners.less';


var partners = [
  {
    name: 'Nate Sturcke',
    email: 'nate@soma.academy',
    role: 'Design Thinking Facilitator',
    profile_pic: '/images/user.png',
    organisation: 'Skills of the Modern Age',
    location: 'Perth, WA',
    experience: '5 - 10 years',
    qualifications: ['ICF - MCC', 'PhD', 'MBA', 'Integral 360 Accredidation'],
    service: ['Consulting', 'Facilitation', 'RTO'],
    topics: ['Innovation', 'Design Thinking', 'Strategy'],
    logo: '/images/partner_logos/soma.png'
  },

  {
    name: 'Jeroan van Dalen',
    email: 'jeroen@integral.global',
    role: 'Facilitator',
    profile_pic: '/images/users/jeroen.png',
    organisation: 'Integral',
    location: 'Perth, WA',
    experience: '5 - 10 years',
    qualifications: ['ICF - MCC', 'PhD', 'MBA', 'Integral 360 Accredidation'],
    service: ['Facilitation', 'RTO'],
    topics: ['Innovation', 'Design Thinking', 'Strategy'],
    logo: 'https://static1.squarespace.com/static/5e9bd172ae3b9707c719b4a5/t/5eaa48c22ff52116d1ebca37/1659666469453/',
  },
  {
    name: 'Jennifer van Extralongname',
    email: 'jen@soma.academy',
    role: 'CEO',
    profile_pic: '/images/users/u3.png',
    organisation: 'Acme',
    location: 'Sydnye, NSW',
    experience: '1 - 3 years',
    qualifications: ['Integral 360 Accredidation'],
    service: [ 'RTO'],
    topics: [],
    logo: '/images/partner_logos/soma.png'
  },
  {
    name: 'Donald Trumf',
    email: 'don@soma.academy',
    role: 'Master Coach',
    profile_pic: '/images/users/u2.png',
    organisation: 'Long Company Name Pty Ltd',
    location: 'Perth, WA',
    experience: '5 - 10 years',
    qualifications: ['ICF - MCC', 'PhD', 'MBA', 'Integral 360 Accredidation'],
    service: ['Consulting', 'Facilitation', 'RTO'],
    topics: ['Innovation', 'Design Thinking', 'Strategy'],
    logo: '/images/partner_logos/soma.png'
  }
];



Template.partners_striped.onRendered(function() {

  $(document).ready(function() {

    $('.select2-tags').select2({
      width: '100%',
      tags: true
    });


  })
});

Template.partners_striped.onCreated(function() {


});

Template.partners_striped.helpers({
  partners(){
    return partners;
  }

});

Template.partners_striped.events({

});
