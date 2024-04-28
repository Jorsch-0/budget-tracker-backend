import express from 'express';

export const expressLoader = async ({ app }: { app: express.Application }) => {
  app.use(express.json());
};
