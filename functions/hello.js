exports.handler = async (event, context, callback) => {
  console.log('Server log: Query Params: ', event.queryStringParameters)
  qspName = 'name'
  callback(null, {
    statusCode: 200,
    body: `Hello, ${event.queryStringParameters[qspName] || 'World'}`,
  });
};
