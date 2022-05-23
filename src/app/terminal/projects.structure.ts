const tree = new Map();
tree.set('~', [
  { name: 'Projects', type: 'folder' },
  { name: 'About', type: 'folder' },
  { name: 'Contact', type: 'folder' },
]);
tree.set('Projects', [
  { name: 'thesis.txt', type: 'file' },
  { name: 'erasmus-fullstack-assignment.txt', type: 'file' },
  { name: 'find-a-freelancer.txt', type: 'file' },
]);
tree.set('About', [
  { name: 'myFace.png', type: 'file' },
  { name: 'aboutMe.txt', type: 'file' },
]);
tree.set('Contact', [{ name: 'contactInformation.txt', type: 'file' }]);

export default tree;
