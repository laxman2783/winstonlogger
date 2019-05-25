1) npm install winston

-- 
2) create logger file 

3) use in .js file

 const Logger = require ('winston);

  Logger.info({ ctx, message: `result-reciever` });


 Logger.debug({ ctx: 'system', message: 'Closed DB connection' });




 Logger.error({ ctx, message: 'error' + err });
