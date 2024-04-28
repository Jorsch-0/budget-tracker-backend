import express from 'express';

(async () => {
  const app = express();

  await import('./infrastructure/loaders').then((loader) => loader.default({ app }));

  app.get('/', (_req, res) => {
    res.send('Hello World!');
  });

  app.listen(8000, () => {
    console.log('App running on port 8000');
  });
})();
