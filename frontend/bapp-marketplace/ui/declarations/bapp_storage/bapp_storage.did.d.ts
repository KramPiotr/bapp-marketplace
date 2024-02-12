import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type Data = string;
export type ID = string;
export interface _SERVICE {
  'getAllIDs' : ActorMethod<[], Array<ID>>,
  'getBlock' : ActorMethod<[ID], Data>,
  'storeBlock' : ActorMethod<[ID, Data], string>,
}
