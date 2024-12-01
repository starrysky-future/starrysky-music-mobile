import Event from "./event";
import type { InitState as CommonState } from "@/store/common/state";

export class StateEvent extends Event {
  navActiveIdUpdated(id: CommonState["navActiveId"]) {
    this.emit("navActiveIdUpdated", id);
  }
  drawer(open: CommonState["drawer"]) {
    this.emit("drawer", open);
  }
}

type EventMethods = Omit<EventType, keyof Event>;

declare class EventType extends StateEvent {
  on<K extends keyof EventMethods>(event: K, listener: EventMethods[K]): any;
  off<K extends keyof EventMethods>(event: K, listener: EventMethods[K]): any;
}

export type StateEventTypes = Omit<EventType, keyof Omit<Event, "on" | "off">>;
export const createStateEventHub = (): StateEventTypes => {
  return new StateEvent();
};
