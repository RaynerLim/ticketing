import { Subjects, Publisher, OrderCancelledEvent } from "@novagenesis/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}