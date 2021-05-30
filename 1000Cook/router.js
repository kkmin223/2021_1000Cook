function route(handle, pathname, res) {
  console.log('about to route a request for' + pathname);
  if (typeof handle[pathname] == 'function'){
    handle[pathname](res);
  } else {
    console.log('no request handler found for' + pathname);
  }
}

exports.route = route;
