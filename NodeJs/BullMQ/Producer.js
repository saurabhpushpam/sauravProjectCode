const { Queue } = require('bullmq');

const queue = new Queue('email-queue', {
  connection: {
    host: '127.0.0.1',
    port: 6379,
  },
});

async function addJob() {
  await queue.add('send-email', {
    to: 'Saurav@example.com',
    subject: 'Hello From BullMQ',
  });

  console.log('✅ Job added to queue');
  process.exit(0);
}

addJob();
