import { SQSEvent } from 'aws-lambda';

export const handleConsume = async (event: SQSEvent) => {
  console.info('SQSConsumer: event:', event);
};
