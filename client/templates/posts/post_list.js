var postsData = [
 {
 title: 'Introducing Telescope',
 url: 'http://sachagreif.com/introducing-telescope/'
 },
 {
 title: 'Meteors',
 url: 'http://meteor.com'
 },
 {
 title: 'The Meteor Booksss',
 url: 'http://themeteorbook.com'
 },
 {
 title: 'The BitTiger Index',
 url: 'http://www.bittiger.io'
 }
];
Template.postsList.helpers({
 posts: postsData
});