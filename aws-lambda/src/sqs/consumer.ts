import { SQSEvent } from 'aws-lambda';

export const handleConsume = async (event: SQSEvent) => {
  console.log('SQSConsumer: event:', event);
};
