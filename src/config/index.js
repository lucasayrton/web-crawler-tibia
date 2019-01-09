const cron = require('node-cron');

cron.schedule(
  '* 6 * * *',
  () => {
    console.log('running a task every 6am - Campo Grande/MS');
  },
  {
    timezone: 'America/Campo_Grande',
  },
);
