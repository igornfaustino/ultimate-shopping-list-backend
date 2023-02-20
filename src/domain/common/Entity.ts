import { randomUUID } from "crypto";

export class Entity {
  readonly id: string;

  constructor(id?: string) {
    this.id = id ? id : randomUUID();
  }
}
