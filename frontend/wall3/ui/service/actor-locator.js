import {
  createActor,
  canisterId
} from "../../ui/declarations/bapp_storage"

export const makeActor = (canisterId, createActor) => {
  return createActor(canisterId, {
    agentOptions: {
      host: process.env.NEXT_PUBLIC_IC_HOST
    }
  })
}

export function makeBAppStorageActor() {
  return makeActor(canisterId, createActor)
}