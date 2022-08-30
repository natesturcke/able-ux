import './profile.html';
import './profile.less';




Template.profile.onRendered(function() {

  $(document).ready(function() {




  })
});

Template.profile.onCreated(function() {


});

Template.profile.helpers({
  profile(){
    return  {
        name: 'Nate Sturcke',
        email: 'nate@soma.academy',
        role: 'Design Thinking Facilitator',
        profile_pic: '/images/user.png',
        organisation: 'Skills of the Modern Age',
        location: 'Perth, WA',
        phone: '+61 4345 965 050',
        experience: '5 - 10 years',
        qualifications: ['ICF - MCC', 'PhD', 'MBA', 'Integral 360 Accredidation'],
        service: ['Consulting', 'Facilitation', 'RTO'],
        topics: ['Innovation', 'Design Thinking', 'Strategy'],
        logo: '/images/partner_logos/soma.png',
        organisation_abn: '13 625 003 492',
        organisation_email: 'hello@soma.academy',
        organisation_phone: '+61 43 123 123',
        organisation_website: 'skillsofthemodernage.com.au'        

      };
  }

});

Template.profile.events({

});
