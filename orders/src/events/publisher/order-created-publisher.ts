import { Publisher, OrderCreatedEvent, Subjects } from '@novagenesis/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}