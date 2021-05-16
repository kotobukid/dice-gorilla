export declare type MaybeError = Error | null

export declare type Room = {
  id: number,
  name: string,
  grid_type: 'square' | 'hex' | 'free',
  locked: 'open' | 'closed' | 'members',
  description: string,
  owner_id: number
}
