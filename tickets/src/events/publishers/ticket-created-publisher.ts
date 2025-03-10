import { Publisher, Subjects, TicketCreatedEvent } from "@novagenesis/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}