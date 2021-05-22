export declare type MaybeError = Error | null

export declare type Room = {
    id: number,
    name: string,
    grid_type: 'square' | 'hex' | 'free',
    locked: 'open' | 'closed' | 'members',
    description: string,
    owner_id: number
}

export declare type PERMISSION = '/LOG/DOWNLOAD'
    | '/LOG/WIPE'
    | '/ROOM/RENAME'
    | '/ROOM/LOCK'
    | '/ROOM/KICK'
    | '/ROOM/DELETE'
    | '/ROOM/MAP-TYPE'
    | '/ROOM/IGNORE-CONFIDENTIAL'
    | '/ROOM/WIPE'
    | '/ROOM/TILE'
    | '/ROOM/READYCHECK'
    | '/ROOM/SCENE'
    | '/ROOM/MARKER'
    | '/ROOM/PARAMETER'
    | '/ROOM/ICON'

    | '/ROOM/COMMIT'

    | '/VISITOR/'

export declare type PERMISSIONS = PERMISSION[];
