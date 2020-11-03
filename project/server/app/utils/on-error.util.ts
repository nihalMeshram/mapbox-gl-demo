/**
 * Event listener for HTTP server "error" event.
 */
export function onError(error: any) {
    if (error.syscall !== 'listen')
      throw error;
    let port;
    let bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // Handle specific listen `errors` with human-friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges!`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use!`);
        process.exit(1);
        break;
      default:
        console.log(error);
        throw error;
    }
  }
  