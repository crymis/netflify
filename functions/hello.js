exports.handler = async (event, context, callback) => {
  console.log(event.queryStringParameters)
  callback(null, {
    statusCode: 200,
    body: `Hello, ${event.queryStringParameters || 'World'}`,
  });
};
