function view() {
  console.log('request handler view');
}

function create() {
  console.log('request handler create');
}

var handle = {};
handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;

exports.handle = handle;
