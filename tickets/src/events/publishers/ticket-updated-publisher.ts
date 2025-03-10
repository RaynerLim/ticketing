import { Publisher, Subjects, TicketUpdatedEvent } from "@novagenesis/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}