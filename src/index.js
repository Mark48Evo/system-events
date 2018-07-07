import RabbitMQPubSub from '@mark48evo/rabbitmq-pubsub';

const defaultConfig = {
  exchangeName: process.env.SYSTEM_EVENTS_EXCHANGE_NAME || 'system_events',
  queueNamePrefix: process.env.SYSTEM_EVENTS_QUEUE_NAME_PREFIX || 'system_events',
};

/**
 * @param {Channel} channel
 * @param {RabbitMQPubSubOptions} options
 * @returns {Promise<RabbitMQPubSub>}
 */
export default async function (channel, options = {}) {
  const config = { ...defaultConfig, ...options };

  const systemEvents = new RabbitMQPubSub(channel, config);
  await systemEvents.setup();

  return systemEvents;
}
