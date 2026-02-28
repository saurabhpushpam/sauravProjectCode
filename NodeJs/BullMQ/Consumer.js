const { Worker } = require('bullmq');

const worker = new Worker(
  'email-queue',
  async (job) => {
    console.log('📨 Processing job:', job.name);
    console.log('Job data:', job.data);

    // simulate async work
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('✅ Email sent to:', job.data.to);
  },
  {
    connection: {
      host: '127.0.0.1',
      port: 6379,
    },
  }
);

worker.on('completed', (job) => {
  console.log(`🎉 Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
  console.log(`❌ Job ${job.id} failed`, err);
});
