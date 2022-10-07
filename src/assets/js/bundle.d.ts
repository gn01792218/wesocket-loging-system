import * as $protobuf from "protobufjs";
/** Namespace announcement. */
export namespace announcement {

    /** Properties of a BroadcastAnnouncement. */
    interface IBroadcastAnnouncement {

        /** BroadcastAnnouncement header */
        header?: (foundation.IHeader|null);

        /** BroadcastAnnouncement announcements */
        announcements?: (announcement.IAnnouncement[]|null);
    }

    /** Represents a BroadcastAnnouncement. */
    class BroadcastAnnouncement implements IBroadcastAnnouncement {

        /**
         * Constructs a new BroadcastAnnouncement.
         * @param [properties] Properties to set
         */
        constructor(properties?: announcement.IBroadcastAnnouncement);

        /** BroadcastAnnouncement header. */
        public header?: (foundation.IHeader|null);

        /** BroadcastAnnouncement announcements. */
        public announcements: announcement.IAnnouncement[];

        /**
         * Creates a new BroadcastAnnouncement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastAnnouncement instance
         */
        public static create(properties?: announcement.IBroadcastAnnouncement): announcement.BroadcastAnnouncement;

        /**
         * Encodes the specified BroadcastAnnouncement message. Does not implicitly {@link announcement.BroadcastAnnouncement.verify|verify} messages.
         * @param message BroadcastAnnouncement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: announcement.IBroadcastAnnouncement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastAnnouncement message, length delimited. Does not implicitly {@link announcement.BroadcastAnnouncement.verify|verify} messages.
         * @param message BroadcastAnnouncement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: announcement.IBroadcastAnnouncement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastAnnouncement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastAnnouncement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): announcement.BroadcastAnnouncement;

        /**
         * Decodes a BroadcastAnnouncement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastAnnouncement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): announcement.BroadcastAnnouncement;

        /**
         * Verifies a BroadcastAnnouncement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastAnnouncement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastAnnouncement
         */
        public static fromObject(object: { [k: string]: any }): announcement.BroadcastAnnouncement;

        /**
         * Creates a plain object from a BroadcastAnnouncement message. Also converts values to other types if specified.
         * @param message BroadcastAnnouncement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: announcement.BroadcastAnnouncement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastAnnouncement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Announcement. */
    interface IAnnouncement {

        /** Announcement message */
        message?: (string|null);

        /** Announcement createAt */
        createAt?: (string|null);
    }

    /** Represents an Announcement. */
    class Announcement implements IAnnouncement {

        /**
         * Constructs a new Announcement.
         * @param [properties] Properties to set
         */
        constructor(properties?: announcement.IAnnouncement);

        /** Announcement message. */
        public message: string;

        /** Announcement createAt. */
        public createAt: string;

        /**
         * Creates a new Announcement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Announcement instance
         */
        public static create(properties?: announcement.IAnnouncement): announcement.Announcement;

        /**
         * Encodes the specified Announcement message. Does not implicitly {@link announcement.Announcement.verify|verify} messages.
         * @param message Announcement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: announcement.IAnnouncement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Announcement message, length delimited. Does not implicitly {@link announcement.Announcement.verify|verify} messages.
         * @param message Announcement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: announcement.IAnnouncement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Announcement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Announcement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): announcement.Announcement;

        /**
         * Decodes an Announcement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Announcement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): announcement.Announcement;

        /**
         * Verifies an Announcement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Announcement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Announcement
         */
        public static fromObject(object: { [k: string]: any }): announcement.Announcement;

        /**
         * Creates a plain object from an Announcement message. Also converts values to other types if specified.
         * @param message Announcement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: announcement.Announcement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Announcement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace auth. */
export namespace auth {

    /** Properties of a LoginCall. */
    interface ILoginCall {

        /** LoginCall header */
        header?: (foundation.IHeader|null);

        /** LoginCall token */
        token?: (string|null);
    }

    /** Represents a LoginCall. */
    class LoginCall implements ILoginCall {

        /**
         * Constructs a new LoginCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginCall);

        /** LoginCall header. */
        public header?: (foundation.IHeader|null);

        /** LoginCall token. */
        public token: string;

        /**
         * Creates a new LoginCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginCall instance
         */
        public static create(properties?: auth.ILoginCall): auth.LoginCall;

        /**
         * Encodes the specified LoginCall message. Does not implicitly {@link auth.LoginCall.verify|verify} messages.
         * @param message LoginCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ILoginCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginCall message, length delimited. Does not implicitly {@link auth.LoginCall.verify|verify} messages.
         * @param message LoginCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.ILoginCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.LoginCall;

        /**
         * Decodes a LoginCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.LoginCall;

        /**
         * Verifies a LoginCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginCall
         */
        public static fromObject(object: { [k: string]: any }): auth.LoginCall;

        /**
         * Creates a plain object from a LoginCall message. Also converts values to other types if specified.
         * @param message LoginCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.LoginCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRecall. */
    interface ILoginRecall {

        /** LoginRecall header */
        header?: (foundation.IHeader|null);

        /** LoginRecall status */
        status?: (number|null);
    }

    /** Represents a LoginRecall. */
    class LoginRecall implements ILoginRecall {

        /**
         * Constructs a new LoginRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginRecall);

        /** LoginRecall header. */
        public header?: (foundation.IHeader|null);

        /** LoginRecall status. */
        public status: number;

        /**
         * Creates a new LoginRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRecall instance
         */
        public static create(properties?: auth.ILoginRecall): auth.LoginRecall;

        /**
         * Encodes the specified LoginRecall message. Does not implicitly {@link auth.LoginRecall.verify|verify} messages.
         * @param message LoginRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ILoginRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRecall message, length delimited. Does not implicitly {@link auth.LoginRecall.verify|verify} messages.
         * @param message LoginRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.ILoginRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.LoginRecall;

        /**
         * Decodes a LoginRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.LoginRecall;

        /**
         * Verifies a LoginRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRecall
         */
        public static fromObject(object: { [k: string]: any }): auth.LoginRecall;

        /**
         * Creates a plain object from a LoginRecall message. Also converts values to other types if specified.
         * @param message LoginRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.LoginRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo header */
        header?: (foundation.IHeader|null);

        /** UserInfo user */
        user?: (auth.IUser|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IUserInfo);

        /** UserInfo header. */
        public header?: (foundation.IHeader|null);

        /** UserInfo user. */
        public user?: (auth.IUser|null);

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: auth.IUserInfo): auth.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): auth.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User name */
        name?: (string|null);

        /** User wallet */
        wallet?: (number|null);

        /** User totalValidBets */
        totalValidBets?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IUser);

        /** User name. */
        public name: string;

        /** User wallet. */
        public wallet: number;

        /** User totalValidBets. */
        public totalValidBets: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: auth.IUser): auth.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link auth.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link auth.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): auth.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace bet. */
export namespace bet {

    /** Error enum. */
    enum Error {
        ErrorDefault = 0,
        BetTimeNotInvlid = 1,
        BetIndexInvalid = 2,
        BetAreaInvalid = 3,
        ReachMaxLimit = 4,
        RoundNotFound = 5,
        NoEnoughWallet = 6,
        AlreadyConfirmed = 7,
        PermissionDeined = 8
    }

    /** BetArea enum. */
    enum BetArea {
        BetAreaDefault = 0,
        Player = 1,
        Banker = 2,
        PlayerPair = 3,
        Tie = 4,
        BankerPair = 5
    }

    /** Properties of a BetStatus. */
    interface IBetStatus {

        /** BetStatus header */
        header?: (foundation.IHeader|null);

        /** BetStatus Banker */
        Banker?: (number|null);

        /** BetStatus Player */
        Player?: (number|null);

        /** BetStatus BankerPair */
        BankerPair?: (number|null);

        /** BetStatus Tie */
        Tie?: (number|null);

        /** BetStatus PlayerPair */
        PlayerPair?: (number|null);
    }

    /** Represents a BetStatus. */
    class BetStatus implements IBetStatus {

        /**
         * Constructs a new BetStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetStatus);

        /** BetStatus header. */
        public header?: (foundation.IHeader|null);

        /** BetStatus Banker. */
        public Banker: number;

        /** BetStatus Player. */
        public Player: number;

        /** BetStatus BankerPair. */
        public BankerPair: number;

        /** BetStatus Tie. */
        public Tie: number;

        /** BetStatus PlayerPair. */
        public PlayerPair: number;

        /**
         * Creates a new BetStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetStatus instance
         */
        public static create(properties?: bet.IBetStatus): bet.BetStatus;

        /**
         * Encodes the specified BetStatus message. Does not implicitly {@link bet.BetStatus.verify|verify} messages.
         * @param message BetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetStatus message, length delimited. Does not implicitly {@link bet.BetStatus.verify|verify} messages.
         * @param message BetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetStatus;

        /**
         * Decodes a BetStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetStatus;

        /**
         * Verifies a BetStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetStatus
         */
        public static fromObject(object: { [k: string]: any }): bet.BetStatus;

        /**
         * Creates a plain object from a BetStatus message. Also converts values to other types if specified.
         * @param message BetStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetCall. */
    interface IBetCall {

        /** BetCall header */
        header?: (foundation.IHeader|null);

        /** BetCall gameUuid */
        gameUuid?: (string|null);

        /** BetCall betIndex */
        betIndex?: (number|null);

        /** BetCall betArea */
        betArea?: (bet.BetArea|null);
    }

    /** Represents a BetCall. */
    class BetCall implements IBetCall {

        /**
         * Constructs a new BetCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetCall);

        /** BetCall header. */
        public header?: (foundation.IHeader|null);

        /** BetCall gameUuid. */
        public gameUuid: string;

        /** BetCall betIndex. */
        public betIndex: number;

        /** BetCall betArea. */
        public betArea: bet.BetArea;

        /**
         * Creates a new BetCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetCall instance
         */
        public static create(properties?: bet.IBetCall): bet.BetCall;

        /**
         * Encodes the specified BetCall message. Does not implicitly {@link bet.BetCall.verify|verify} messages.
         * @param message BetCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetCall message, length delimited. Does not implicitly {@link bet.BetCall.verify|verify} messages.
         * @param message BetCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetCall;

        /**
         * Decodes a BetCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetCall;

        /**
         * Verifies a BetCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetCall
         */
        public static fromObject(object: { [k: string]: any }): bet.BetCall;

        /**
         * Creates a plain object from a BetCall message. Also converts values to other types if specified.
         * @param message BetCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRecall. */
    interface IBetRecall {

        /** BetRecall header */
        header?: (foundation.IHeader|null);

        /** BetRecall result */
        result?: (number|null);

        /** BetRecall totalBets */
        totalBets?: (number|null);

        /** BetRecall betStatus */
        betStatus?: (bet.IBetStatus|null);

        /** BetRecall betError */
        betError?: (bet.IBetError|null);

        /** BetRecall isConfirmed */
        isConfirmed?: (boolean|null);
    }

    /** Represents a BetRecall. */
    class BetRecall implements IBetRecall {

        /**
         * Constructs a new BetRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetRecall);

        /** BetRecall header. */
        public header?: (foundation.IHeader|null);

        /** BetRecall result. */
        public result: number;

        /** BetRecall totalBets. */
        public totalBets: number;

        /** BetRecall betStatus. */
        public betStatus?: (bet.IBetStatus|null);

        /** BetRecall betError. */
        public betError?: (bet.IBetError|null);

        /** BetRecall isConfirmed. */
        public isConfirmed: boolean;

        /**
         * Creates a new BetRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRecall instance
         */
        public static create(properties?: bet.IBetRecall): bet.BetRecall;

        /**
         * Encodes the specified BetRecall message. Does not implicitly {@link bet.BetRecall.verify|verify} messages.
         * @param message BetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRecall message, length delimited. Does not implicitly {@link bet.BetRecall.verify|verify} messages.
         * @param message BetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetRecall;

        /**
         * Decodes a BetRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetRecall;

        /**
         * Verifies a BetRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRecall
         */
        public static fromObject(object: { [k: string]: any }): bet.BetRecall;

        /**
         * Creates a plain object from a BetRecall message. Also converts values to other types if specified.
         * @param message BetRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetResetCall. */
    interface IBetResetCall {

        /** BetResetCall header */
        header?: (foundation.IHeader|null);

        /** BetResetCall gameUuid */
        gameUuid?: (string|null);
    }

    /** Represents a BetResetCall. */
    class BetResetCall implements IBetResetCall {

        /**
         * Constructs a new BetResetCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetResetCall);

        /** BetResetCall header. */
        public header?: (foundation.IHeader|null);

        /** BetResetCall gameUuid. */
        public gameUuid: string;

        /**
         * Creates a new BetResetCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetResetCall instance
         */
        public static create(properties?: bet.IBetResetCall): bet.BetResetCall;

        /**
         * Encodes the specified BetResetCall message. Does not implicitly {@link bet.BetResetCall.verify|verify} messages.
         * @param message BetResetCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetResetCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetResetCall message, length delimited. Does not implicitly {@link bet.BetResetCall.verify|verify} messages.
         * @param message BetResetCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetResetCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetResetCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetResetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetResetCall;

        /**
         * Decodes a BetResetCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetResetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetResetCall;

        /**
         * Verifies a BetResetCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetResetCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetResetCall
         */
        public static fromObject(object: { [k: string]: any }): bet.BetResetCall;

        /**
         * Creates a plain object from a BetResetCall message. Also converts values to other types if specified.
         * @param message BetResetCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetResetCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetResetCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetResetRecall. */
    interface IBetResetRecall {

        /** BetResetRecall header */
        header?: (foundation.IHeader|null);

        /** BetResetRecall result */
        result?: (number|null);

        /** BetResetRecall totalBets */
        totalBets?: (number|null);

        /** BetResetRecall betStatus */
        betStatus?: (bet.IBetStatus|null);
    }

    /** Represents a BetResetRecall. */
    class BetResetRecall implements IBetResetRecall {

        /**
         * Constructs a new BetResetRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetResetRecall);

        /** BetResetRecall header. */
        public header?: (foundation.IHeader|null);

        /** BetResetRecall result. */
        public result: number;

        /** BetResetRecall totalBets. */
        public totalBets: number;

        /** BetResetRecall betStatus. */
        public betStatus?: (bet.IBetStatus|null);

        /**
         * Creates a new BetResetRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetResetRecall instance
         */
        public static create(properties?: bet.IBetResetRecall): bet.BetResetRecall;

        /**
         * Encodes the specified BetResetRecall message. Does not implicitly {@link bet.BetResetRecall.verify|verify} messages.
         * @param message BetResetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetResetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetResetRecall message, length delimited. Does not implicitly {@link bet.BetResetRecall.verify|verify} messages.
         * @param message BetResetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetResetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetResetRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetResetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetResetRecall;

        /**
         * Decodes a BetResetRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetResetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetResetRecall;

        /**
         * Verifies a BetResetRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetResetRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetResetRecall
         */
        public static fromObject(object: { [k: string]: any }): bet.BetResetRecall;

        /**
         * Creates a plain object from a BetResetRecall message. Also converts values to other types if specified.
         * @param message BetResetRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetResetRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetResetRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetError. */
    interface IBetError {

        /** BetError header */
        header?: (foundation.IHeader|null);

        /** BetError error */
        error?: (bet.Error|null);

        /** BetError errorMessage */
        errorMessage?: (string|null);
    }

    /** Represents a BetError. */
    class BetError implements IBetError {

        /**
         * Constructs a new BetError.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetError);

        /** BetError header. */
        public header?: (foundation.IHeader|null);

        /** BetError error. */
        public error: bet.Error;

        /** BetError errorMessage. */
        public errorMessage: string;

        /**
         * Creates a new BetError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetError instance
         */
        public static create(properties?: bet.IBetError): bet.BetError;

        /**
         * Encodes the specified BetError message. Does not implicitly {@link bet.BetError.verify|verify} messages.
         * @param message BetError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetError message, length delimited. Does not implicitly {@link bet.BetError.verify|verify} messages.
         * @param message BetError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetError;

        /**
         * Decodes a BetError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetError;

        /**
         * Verifies a BetError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetError
         */
        public static fromObject(object: { [k: string]: any }): bet.BetError;

        /**
         * Creates a plain object from a BetError message. Also converts values to other types if specified.
         * @param message BetError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConfirmBetCall. */
    interface IConfirmBetCall {

        /** ConfirmBetCall header */
        header?: (foundation.IHeader|null);

        /** ConfirmBetCall gameUuid */
        gameUuid?: (string|null);
    }

    /** Represents a ConfirmBetCall. */
    class ConfirmBetCall implements IConfirmBetCall {

        /**
         * Constructs a new ConfirmBetCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IConfirmBetCall);

        /** ConfirmBetCall header. */
        public header?: (foundation.IHeader|null);

        /** ConfirmBetCall gameUuid. */
        public gameUuid: string;

        /**
         * Creates a new ConfirmBetCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfirmBetCall instance
         */
        public static create(properties?: bet.IConfirmBetCall): bet.ConfirmBetCall;

        /**
         * Encodes the specified ConfirmBetCall message. Does not implicitly {@link bet.ConfirmBetCall.verify|verify} messages.
         * @param message ConfirmBetCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IConfirmBetCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfirmBetCall message, length delimited. Does not implicitly {@link bet.ConfirmBetCall.verify|verify} messages.
         * @param message ConfirmBetCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IConfirmBetCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfirmBetCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConfirmBetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.ConfirmBetCall;

        /**
         * Decodes a ConfirmBetCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConfirmBetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.ConfirmBetCall;

        /**
         * Verifies a ConfirmBetCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfirmBetCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfirmBetCall
         */
        public static fromObject(object: { [k: string]: any }): bet.ConfirmBetCall;

        /**
         * Creates a plain object from a ConfirmBetCall message. Also converts values to other types if specified.
         * @param message ConfirmBetCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.ConfirmBetCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfirmBetCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConfirmBetRecall. */
    interface IConfirmBetRecall {

        /** ConfirmBetRecall header */
        header?: (foundation.IHeader|null);

        /** ConfirmBetRecall result */
        result?: (number|null);

        /** ConfirmBetRecall betStatus */
        betStatus?: (bet.IBetStatus|null);
    }

    /** Represents a ConfirmBetRecall. */
    class ConfirmBetRecall implements IConfirmBetRecall {

        /**
         * Constructs a new ConfirmBetRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IConfirmBetRecall);

        /** ConfirmBetRecall header. */
        public header?: (foundation.IHeader|null);

        /** ConfirmBetRecall result. */
        public result: number;

        /** ConfirmBetRecall betStatus. */
        public betStatus?: (bet.IBetStatus|null);

        /**
         * Creates a new ConfirmBetRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfirmBetRecall instance
         */
        public static create(properties?: bet.IConfirmBetRecall): bet.ConfirmBetRecall;

        /**
         * Encodes the specified ConfirmBetRecall message. Does not implicitly {@link bet.ConfirmBetRecall.verify|verify} messages.
         * @param message ConfirmBetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IConfirmBetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfirmBetRecall message, length delimited. Does not implicitly {@link bet.ConfirmBetRecall.verify|verify} messages.
         * @param message ConfirmBetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IConfirmBetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfirmBetRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConfirmBetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.ConfirmBetRecall;

        /**
         * Decodes a ConfirmBetRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConfirmBetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.ConfirmBetRecall;

        /**
         * Verifies a ConfirmBetRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfirmBetRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfirmBetRecall
         */
        public static fromObject(object: { [k: string]: any }): bet.ConfirmBetRecall;

        /**
         * Creates a plain object from a ConfirmBetRecall message. Also converts values to other types if specified.
         * @param message ConfirmBetRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.ConfirmBetRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfirmBetRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastConfirmBetRecall. */
    interface IBroadcastConfirmBetRecall {

        /** BroadcastConfirmBetRecall header */
        header?: (foundation.IHeader|null);

        /** BroadcastConfirmBetRecall result */
        result?: (number|null);

        /** BroadcastConfirmBetRecall betStatus */
        betStatus?: (bet.IBetStatus|null);

        /** BroadcastConfirmBetRecall account */
        account?: (string|null);
    }

    /** Represents a BroadcastConfirmBetRecall. */
    class BroadcastConfirmBetRecall implements IBroadcastConfirmBetRecall {

        /**
         * Constructs a new BroadcastConfirmBetRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBroadcastConfirmBetRecall);

        /** BroadcastConfirmBetRecall header. */
        public header?: (foundation.IHeader|null);

        /** BroadcastConfirmBetRecall result. */
        public result: number;

        /** BroadcastConfirmBetRecall betStatus. */
        public betStatus?: (bet.IBetStatus|null);

        /** BroadcastConfirmBetRecall account. */
        public account: string;

        /**
         * Creates a new BroadcastConfirmBetRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastConfirmBetRecall instance
         */
        public static create(properties?: bet.IBroadcastConfirmBetRecall): bet.BroadcastConfirmBetRecall;

        /**
         * Encodes the specified BroadcastConfirmBetRecall message. Does not implicitly {@link bet.BroadcastConfirmBetRecall.verify|verify} messages.
         * @param message BroadcastConfirmBetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBroadcastConfirmBetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastConfirmBetRecall message, length delimited. Does not implicitly {@link bet.BroadcastConfirmBetRecall.verify|verify} messages.
         * @param message BroadcastConfirmBetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBroadcastConfirmBetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastConfirmBetRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastConfirmBetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BroadcastConfirmBetRecall;

        /**
         * Decodes a BroadcastConfirmBetRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastConfirmBetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BroadcastConfirmBetRecall;

        /**
         * Verifies a BroadcastConfirmBetRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastConfirmBetRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastConfirmBetRecall
         */
        public static fromObject(object: { [k: string]: any }): bet.BroadcastConfirmBetRecall;

        /**
         * Creates a plain object from a BroadcastConfirmBetRecall message. Also converts values to other types if specified.
         * @param message BroadcastConfirmBetRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BroadcastConfirmBetRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastConfirmBetRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace chat. */
export namespace chat {

    /** MessageType enum. */
    enum MessageType {
        default_type = 0,
        chat = 1,
        donate = 2
    }

    /** Properties of a Chat. */
    interface IChat {

        /** Chat header */
        header?: (foundation.IHeader|null);

        /** Chat message */
        message?: (string|null);

        /** Chat type */
        type?: (chat.MessageType|null);
    }

    /** Represents a Chat. */
    class Chat implements IChat {

        /**
         * Constructs a new Chat.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IChat);

        /** Chat header. */
        public header?: (foundation.IHeader|null);

        /** Chat message. */
        public message: string;

        /** Chat type. */
        public type: chat.MessageType;

        /**
         * Creates a new Chat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chat instance
         */
        public static create(properties?: chat.IChat): chat.Chat;

        /**
         * Encodes the specified Chat message. Does not implicitly {@link chat.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link chat.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Chat;

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Chat;

        /**
         * Verifies a Chat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chat
         */
        public static fromObject(object: { [k: string]: any }): chat.Chat;

        /**
         * Creates a plain object from a Chat message. Also converts values to other types if specified.
         * @param message Chat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.Chat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastChat. */
    interface IBroadcastChat {

        /** BroadcastChat header */
        header?: (foundation.IHeader|null);

        /** BroadcastChat message */
        message?: (string|null);

        /** BroadcastChat player */
        player?: (string|null);

        /** BroadcastChat type */
        type?: (chat.MessageType|null);
    }

    /** Represents a BroadcastChat. */
    class BroadcastChat implements IBroadcastChat {

        /**
         * Constructs a new BroadcastChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IBroadcastChat);

        /** BroadcastChat header. */
        public header?: (foundation.IHeader|null);

        /** BroadcastChat message. */
        public message: string;

        /** BroadcastChat player. */
        public player: string;

        /** BroadcastChat type. */
        public type: chat.MessageType;

        /**
         * Creates a new BroadcastChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastChat instance
         */
        public static create(properties?: chat.IBroadcastChat): chat.BroadcastChat;

        /**
         * Encodes the specified BroadcastChat message. Does not implicitly {@link chat.BroadcastChat.verify|verify} messages.
         * @param message BroadcastChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IBroadcastChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastChat message, length delimited. Does not implicitly {@link chat.BroadcastChat.verify|verify} messages.
         * @param message BroadcastChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IBroadcastChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.BroadcastChat;

        /**
         * Decodes a BroadcastChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.BroadcastChat;

        /**
         * Verifies a BroadcastChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastChat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastChat
         */
        public static fromObject(object: { [k: string]: any }): chat.BroadcastChat;

        /**
         * Creates a plain object from a BroadcastChat message. Also converts values to other types if specified.
         * @param message BroadcastChat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.BroadcastChat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastChat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace dealer. */
export namespace dealer {

    /** Suit enum. */
    enum Suit {
        Default = 0,
        Heart = 1,
        Diamond = 2,
        Spade = 3,
        Club = 4
    }

    /** Properties of a Card. */
    interface ICard {

        /** Card suit */
        suit?: (dealer.Suit|null);

        /** Card point */
        point?: (number|null);
    }

    /** Represents a Card. */
    class Card implements ICard {

        /**
         * Constructs a new Card.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.ICard);

        /** Card suit. */
        public suit: dealer.Suit;

        /** Card point. */
        public point: number;

        /**
         * Creates a new Card instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Card instance
         */
        public static create(properties?: dealer.ICard): dealer.Card;

        /**
         * Encodes the specified Card message. Does not implicitly {@link dealer.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link dealer.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.Card;

        /**
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.Card;

        /**
         * Verifies a Card message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Card
         */
        public static fromObject(object: { [k: string]: any }): dealer.Card;

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @param message Card
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Card to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Side enum. */
    enum Side {
        SideDefault = 0,
        Banker = 1,
        Player = 2
    }

    /** Properties of a Draw. */
    interface IDraw {

        /** Draw header */
        header?: (foundation.IHeader|null);

        /** Draw side */
        side?: (dealer.Side|null);

        /** Draw position */
        position?: (number|null);

        /** Draw card */
        card?: (dealer.ICard|null);
    }

    /** Represents a Draw. */
    class Draw implements IDraw {

        /**
         * Constructs a new Draw.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IDraw);

        /** Draw header. */
        public header?: (foundation.IHeader|null);

        /** Draw side. */
        public side: dealer.Side;

        /** Draw position. */
        public position: number;

        /** Draw card. */
        public card?: (dealer.ICard|null);

        /**
         * Creates a new Draw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Draw instance
         */
        public static create(properties?: dealer.IDraw): dealer.Draw;

        /**
         * Encodes the specified Draw message. Does not implicitly {@link dealer.Draw.verify|verify} messages.
         * @param message Draw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Draw message, length delimited. Does not implicitly {@link dealer.Draw.verify|verify} messages.
         * @param message Draw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Draw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.Draw;

        /**
         * Decodes a Draw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.Draw;

        /**
         * Verifies a Draw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Draw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Draw
         */
        public static fromObject(object: { [k: string]: any }): dealer.Draw;

        /**
         * Creates a plain object from a Draw message. Also converts values to other types if specified.
         * @param message Draw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.Draw, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Draw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoundStartCall. */
    interface IRoundStartCall {

        /** RoundStartCall header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a RoundStartCall. */
    class RoundStartCall implements IRoundStartCall {

        /**
         * Constructs a new RoundStartCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IRoundStartCall);

        /** RoundStartCall header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new RoundStartCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundStartCall instance
         */
        public static create(properties?: dealer.IRoundStartCall): dealer.RoundStartCall;

        /**
         * Encodes the specified RoundStartCall message. Does not implicitly {@link dealer.RoundStartCall.verify|verify} messages.
         * @param message RoundStartCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IRoundStartCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundStartCall message, length delimited. Does not implicitly {@link dealer.RoundStartCall.verify|verify} messages.
         * @param message RoundStartCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IRoundStartCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundStartCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundStartCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.RoundStartCall;

        /**
         * Decodes a RoundStartCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundStartCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.RoundStartCall;

        /**
         * Verifies a RoundStartCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundStartCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundStartCall
         */
        public static fromObject(object: { [k: string]: any }): dealer.RoundStartCall;

        /**
         * Creates a plain object from a RoundStartCall message. Also converts values to other types if specified.
         * @param message RoundStartCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.RoundStartCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundStartCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoundEndCall. */
    interface IRoundEndCall {

        /** RoundEndCall header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a RoundEndCall. */
    class RoundEndCall implements IRoundEndCall {

        /**
         * Constructs a new RoundEndCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IRoundEndCall);

        /** RoundEndCall header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new RoundEndCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundEndCall instance
         */
        public static create(properties?: dealer.IRoundEndCall): dealer.RoundEndCall;

        /**
         * Encodes the specified RoundEndCall message. Does not implicitly {@link dealer.RoundEndCall.verify|verify} messages.
         * @param message RoundEndCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IRoundEndCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundEndCall message, length delimited. Does not implicitly {@link dealer.RoundEndCall.verify|verify} messages.
         * @param message RoundEndCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IRoundEndCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundEndCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.RoundEndCall;

        /**
         * Decodes a RoundEndCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.RoundEndCall;

        /**
         * Verifies a RoundEndCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundEndCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundEndCall
         */
        public static fromObject(object: { [k: string]: any }): dealer.RoundEndCall;

        /**
         * Creates a plain object from a RoundEndCall message. Also converts values to other types if specified.
         * @param message RoundEndCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.RoundEndCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundEndCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoundStartRecall. */
    interface IRoundStartRecall {

        /** RoundStartRecall header */
        header?: (foundation.IHeader|null);

        /** RoundStartRecall status */
        status?: (number|null);

        /** RoundStartRecall message */
        message?: (string|null);
    }

    /** Represents a RoundStartRecall. */
    class RoundStartRecall implements IRoundStartRecall {

        /**
         * Constructs a new RoundStartRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IRoundStartRecall);

        /** RoundStartRecall header. */
        public header?: (foundation.IHeader|null);

        /** RoundStartRecall status. */
        public status: number;

        /** RoundStartRecall message. */
        public message: string;

        /**
         * Creates a new RoundStartRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundStartRecall instance
         */
        public static create(properties?: dealer.IRoundStartRecall): dealer.RoundStartRecall;

        /**
         * Encodes the specified RoundStartRecall message. Does not implicitly {@link dealer.RoundStartRecall.verify|verify} messages.
         * @param message RoundStartRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IRoundStartRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundStartRecall message, length delimited. Does not implicitly {@link dealer.RoundStartRecall.verify|verify} messages.
         * @param message RoundStartRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IRoundStartRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundStartRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundStartRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.RoundStartRecall;

        /**
         * Decodes a RoundStartRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundStartRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.RoundStartRecall;

        /**
         * Verifies a RoundStartRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundStartRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundStartRecall
         */
        public static fromObject(object: { [k: string]: any }): dealer.RoundStartRecall;

        /**
         * Creates a plain object from a RoundStartRecall message. Also converts values to other types if specified.
         * @param message RoundStartRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.RoundStartRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundStartRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoundEndRecall. */
    interface IRoundEndRecall {

        /** RoundEndRecall header */
        header?: (foundation.IHeader|null);

        /** RoundEndRecall status */
        status?: (number|null);

        /** RoundEndRecall message */
        message?: (string|null);
    }

    /** Represents a RoundEndRecall. */
    class RoundEndRecall implements IRoundEndRecall {

        /**
         * Constructs a new RoundEndRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IRoundEndRecall);

        /** RoundEndRecall header. */
        public header?: (foundation.IHeader|null);

        /** RoundEndRecall status. */
        public status: number;

        /** RoundEndRecall message. */
        public message: string;

        /**
         * Creates a new RoundEndRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundEndRecall instance
         */
        public static create(properties?: dealer.IRoundEndRecall): dealer.RoundEndRecall;

        /**
         * Encodes the specified RoundEndRecall message. Does not implicitly {@link dealer.RoundEndRecall.verify|verify} messages.
         * @param message RoundEndRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IRoundEndRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundEndRecall message, length delimited. Does not implicitly {@link dealer.RoundEndRecall.verify|verify} messages.
         * @param message RoundEndRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IRoundEndRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundEndRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundEndRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.RoundEndRecall;

        /**
         * Decodes a RoundEndRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundEndRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.RoundEndRecall;

        /**
         * Verifies a RoundEndRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundEndRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundEndRecall
         */
        public static fromObject(object: { [k: string]: any }): dealer.RoundEndRecall;

        /**
         * Creates a plain object from a RoundEndRecall message. Also converts values to other types if specified.
         * @param message RoundEndRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.RoundEndRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundEndRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastDealerRoundEnd. */
    interface IBroadcastDealerRoundEnd {

        /** BroadcastDealerRoundEnd header */
        header?: (foundation.IHeader|null);

        /** BroadcastDealerRoundEnd gameUuid */
        gameUuid?: (string|null);
    }

    /** Represents a BroadcastDealerRoundEnd. */
    class BroadcastDealerRoundEnd implements IBroadcastDealerRoundEnd {

        /**
         * Constructs a new BroadcastDealerRoundEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IBroadcastDealerRoundEnd);

        /** BroadcastDealerRoundEnd header. */
        public header?: (foundation.IHeader|null);

        /** BroadcastDealerRoundEnd gameUuid. */
        public gameUuid: string;

        /**
         * Creates a new BroadcastDealerRoundEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastDealerRoundEnd instance
         */
        public static create(properties?: dealer.IBroadcastDealerRoundEnd): dealer.BroadcastDealerRoundEnd;

        /**
         * Encodes the specified BroadcastDealerRoundEnd message. Does not implicitly {@link dealer.BroadcastDealerRoundEnd.verify|verify} messages.
         * @param message BroadcastDealerRoundEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IBroadcastDealerRoundEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastDealerRoundEnd message, length delimited. Does not implicitly {@link dealer.BroadcastDealerRoundEnd.verify|verify} messages.
         * @param message BroadcastDealerRoundEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IBroadcastDealerRoundEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastDealerRoundEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastDealerRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.BroadcastDealerRoundEnd;

        /**
         * Decodes a BroadcastDealerRoundEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastDealerRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.BroadcastDealerRoundEnd;

        /**
         * Verifies a BroadcastDealerRoundEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastDealerRoundEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastDealerRoundEnd
         */
        public static fromObject(object: { [k: string]: any }): dealer.BroadcastDealerRoundEnd;

        /**
         * Creates a plain object from a BroadcastDealerRoundEnd message. Also converts values to other types if specified.
         * @param message BroadcastDealerRoundEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.BroadcastDealerRoundEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastDealerRoundEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WhiteCardCall. */
    interface IWhiteCardCall {

        /** WhiteCardCall header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a WhiteCardCall. */
    class WhiteCardCall implements IWhiteCardCall {

        /**
         * Constructs a new WhiteCardCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IWhiteCardCall);

        /** WhiteCardCall header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new WhiteCardCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WhiteCardCall instance
         */
        public static create(properties?: dealer.IWhiteCardCall): dealer.WhiteCardCall;

        /**
         * Encodes the specified WhiteCardCall message. Does not implicitly {@link dealer.WhiteCardCall.verify|verify} messages.
         * @param message WhiteCardCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IWhiteCardCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WhiteCardCall message, length delimited. Does not implicitly {@link dealer.WhiteCardCall.verify|verify} messages.
         * @param message WhiteCardCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IWhiteCardCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WhiteCardCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WhiteCardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.WhiteCardCall;

        /**
         * Decodes a WhiteCardCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WhiteCardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.WhiteCardCall;

        /**
         * Verifies a WhiteCardCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WhiteCardCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WhiteCardCall
         */
        public static fromObject(object: { [k: string]: any }): dealer.WhiteCardCall;

        /**
         * Creates a plain object from a WhiteCardCall message. Also converts values to other types if specified.
         * @param message WhiteCardCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.WhiteCardCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WhiteCardCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRoundEndCall. */
    interface IBetRoundEndCall {

        /** BetRoundEndCall header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a BetRoundEndCall. */
    class BetRoundEndCall implements IBetRoundEndCall {

        /**
         * Constructs a new BetRoundEndCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IBetRoundEndCall);

        /** BetRoundEndCall header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new BetRoundEndCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRoundEndCall instance
         */
        public static create(properties?: dealer.IBetRoundEndCall): dealer.BetRoundEndCall;

        /**
         * Encodes the specified BetRoundEndCall message. Does not implicitly {@link dealer.BetRoundEndCall.verify|verify} messages.
         * @param message BetRoundEndCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IBetRoundEndCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRoundEndCall message, length delimited. Does not implicitly {@link dealer.BetRoundEndCall.verify|verify} messages.
         * @param message BetRoundEndCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IBetRoundEndCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRoundEndCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.BetRoundEndCall;

        /**
         * Decodes a BetRoundEndCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.BetRoundEndCall;

        /**
         * Verifies a BetRoundEndCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRoundEndCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRoundEndCall
         */
        public static fromObject(object: { [k: string]: any }): dealer.BetRoundEndCall;

        /**
         * Creates a plain object from a BetRoundEndCall message. Also converts values to other types if specified.
         * @param message BetRoundEndCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.BetRoundEndCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRoundEndCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Result enum. */
    enum Result {
        Default = 0,
        Banker = 1,
        Player = 2,
        BankerPair = 3,
        Tie = 4,
        PlayerPair = 5
    }

    /** Properties of a GameResult. */
    interface IGameResult {

        /** GameResult header */
        header?: (foundation.IHeader|null);

        /** GameResult results */
        results?: (dealer.Result[]|null);

        /** GameResult totalWin */
        totalWin?: (number|null);
    }

    /** Represents a GameResult. */
    class GameResult implements IGameResult {

        /**
         * Constructs a new GameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IGameResult);

        /** GameResult header. */
        public header?: (foundation.IHeader|null);

        /** GameResult results. */
        public results: dealer.Result[];

        /** GameResult totalWin. */
        public totalWin: number;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResult instance
         */
        public static create(properties?: dealer.IGameResult): dealer.GameResult;

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link dealer.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link dealer.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.GameResult;

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.GameResult;

        /**
         * Verifies a GameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameResult
         */
        public static fromObject(object: { [k: string]: any }): dealer.GameResult;

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @param message GameResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.GameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStatus. */
    interface IGameStatus {

        /** GameStatus header */
        header?: (foundation.IHeader|null);

        /** GameStatus isGaming */
        isGaming?: (boolean|null);
    }

    /** Represents a GameStatus. */
    class GameStatus implements IGameStatus {

        /**
         * Constructs a new GameStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IGameStatus);

        /** GameStatus header. */
        public header?: (foundation.IHeader|null);

        /** GameStatus isGaming. */
        public isGaming: boolean;

        /**
         * Creates a new GameStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStatus instance
         */
        public static create(properties?: dealer.IGameStatus): dealer.GameStatus;

        /**
         * Encodes the specified GameStatus message. Does not implicitly {@link dealer.GameStatus.verify|verify} messages.
         * @param message GameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStatus message, length delimited. Does not implicitly {@link dealer.GameStatus.verify|verify} messages.
         * @param message GameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.GameStatus;

        /**
         * Decodes a GameStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.GameStatus;

        /**
         * Verifies a GameStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStatus
         */
        public static fromObject(object: { [k: string]: any }): dealer.GameStatus;

        /**
         * Creates a plain object from a GameStatus message. Also converts values to other types if specified.
         * @param message GameStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.GameStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace donate. */
export namespace donate {

    /** Properties of a DonateCall. */
    interface IDonateCall {

        /** DonateCall header */
        header?: (foundation.IHeader|null);

        /** DonateCall points */
        points?: (number|null);
    }

    /** Represents a DonateCall. */
    class DonateCall implements IDonateCall {

        /**
         * Constructs a new DonateCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: donate.IDonateCall);

        /** DonateCall header. */
        public header?: (foundation.IHeader|null);

        /** DonateCall points. */
        public points: number;

        /**
         * Creates a new DonateCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DonateCall instance
         */
        public static create(properties?: donate.IDonateCall): donate.DonateCall;

        /**
         * Encodes the specified DonateCall message. Does not implicitly {@link donate.DonateCall.verify|verify} messages.
         * @param message DonateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: donate.IDonateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DonateCall message, length delimited. Does not implicitly {@link donate.DonateCall.verify|verify} messages.
         * @param message DonateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: donate.IDonateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DonateCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DonateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): donate.DonateCall;

        /**
         * Decodes a DonateCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DonateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): donate.DonateCall;

        /**
         * Verifies a DonateCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DonateCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DonateCall
         */
        public static fromObject(object: { [k: string]: any }): donate.DonateCall;

        /**
         * Creates a plain object from a DonateCall message. Also converts values to other types if specified.
         * @param message DonateCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: donate.DonateCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DonateCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DonateRecall. */
    interface IDonateRecall {

        /** DonateRecall header */
        header?: (foundation.IHeader|null);

        /** DonateRecall result */
        result?: (number|null);

        /** DonateRecall error */
        error?: (donate.DonateError|null);
    }

    /** Represents a DonateRecall. */
    class DonateRecall implements IDonateRecall {

        /**
         * Constructs a new DonateRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: donate.IDonateRecall);

        /** DonateRecall header. */
        public header?: (foundation.IHeader|null);

        /** DonateRecall result. */
        public result: number;

        /** DonateRecall error. */
        public error: donate.DonateError;

        /**
         * Creates a new DonateRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DonateRecall instance
         */
        public static create(properties?: donate.IDonateRecall): donate.DonateRecall;

        /**
         * Encodes the specified DonateRecall message. Does not implicitly {@link donate.DonateRecall.verify|verify} messages.
         * @param message DonateRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: donate.IDonateRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DonateRecall message, length delimited. Does not implicitly {@link donate.DonateRecall.verify|verify} messages.
         * @param message DonateRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: donate.IDonateRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DonateRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DonateRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): donate.DonateRecall;

        /**
         * Decodes a DonateRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DonateRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): donate.DonateRecall;

        /**
         * Verifies a DonateRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DonateRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DonateRecall
         */
        public static fromObject(object: { [k: string]: any }): donate.DonateRecall;

        /**
         * Creates a plain object from a DonateRecall message. Also converts values to other types if specified.
         * @param message DonateRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: donate.DonateRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DonateRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** DonateError enum. */
    enum DonateError {
        Default = 0,
        InvalidDonate = 1,
        NotEnoughWallet = 2,
        NoPermission = 3
    }
}

/** Namespace foundation. */
export namespace foundation {

    /** Properties of a Header. */
    interface IHeader {

        /** Header uri */
        uri?: (route.URI|null);
    }

    /** Represents a Header. */
    class Header implements IHeader {

        /**
         * Constructs a new Header.
         * @param [properties] Properties to set
         */
        constructor(properties?: foundation.IHeader);

        /** Header uri. */
        public uri: route.URI;

        /**
         * Creates a new Header instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Header instance
         */
        public static create(properties?: foundation.IHeader): foundation.Header;

        /**
         * Encodes the specified Header message. Does not implicitly {@link foundation.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: foundation.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link foundation.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: foundation.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foundation.Header;

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foundation.Header;

        /**
         * Verifies a Header message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Header
         */
        public static fromObject(object: { [k: string]: any }): foundation.Header;

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @param message Header
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: foundation.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Header to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartbeatPing. */
    interface IHeartbeatPing {

        /** HeartbeatPing header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a HeartbeatPing. */
    class HeartbeatPing implements IHeartbeatPing {

        /**
         * Constructs a new HeartbeatPing.
         * @param [properties] Properties to set
         */
        constructor(properties?: foundation.IHeartbeatPing);

        /** HeartbeatPing header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new HeartbeatPing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatPing instance
         */
        public static create(properties?: foundation.IHeartbeatPing): foundation.HeartbeatPing;

        /**
         * Encodes the specified HeartbeatPing message. Does not implicitly {@link foundation.HeartbeatPing.verify|verify} messages.
         * @param message HeartbeatPing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: foundation.IHeartbeatPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatPing message, length delimited. Does not implicitly {@link foundation.HeartbeatPing.verify|verify} messages.
         * @param message HeartbeatPing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: foundation.IHeartbeatPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foundation.HeartbeatPing;

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foundation.HeartbeatPing;

        /**
         * Verifies a HeartbeatPing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatPing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatPing
         */
        public static fromObject(object: { [k: string]: any }): foundation.HeartbeatPing;

        /**
         * Creates a plain object from a HeartbeatPing message. Also converts values to other types if specified.
         * @param message HeartbeatPing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: foundation.HeartbeatPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatPing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartbeatPong. */
    interface IHeartbeatPong {

        /** HeartbeatPong header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a HeartbeatPong. */
    class HeartbeatPong implements IHeartbeatPong {

        /**
         * Constructs a new HeartbeatPong.
         * @param [properties] Properties to set
         */
        constructor(properties?: foundation.IHeartbeatPong);

        /** HeartbeatPong header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new HeartbeatPong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatPong instance
         */
        public static create(properties?: foundation.IHeartbeatPong): foundation.HeartbeatPong;

        /**
         * Encodes the specified HeartbeatPong message. Does not implicitly {@link foundation.HeartbeatPong.verify|verify} messages.
         * @param message HeartbeatPong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: foundation.IHeartbeatPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatPong message, length delimited. Does not implicitly {@link foundation.HeartbeatPong.verify|verify} messages.
         * @param message HeartbeatPong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: foundation.IHeartbeatPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatPong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foundation.HeartbeatPong;

        /**
         * Decodes a HeartbeatPong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foundation.HeartbeatPong;

        /**
         * Verifies a HeartbeatPong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatPong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatPong
         */
        public static fromObject(object: { [k: string]: any }): foundation.HeartbeatPong;

        /**
         * Creates a plain object from a HeartbeatPong message. Also converts values to other types if specified.
         * @param message HeartbeatPong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: foundation.HeartbeatPong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatPong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: foundation.IMessage);

        /** Message header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: foundation.IMessage): foundation.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link foundation.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: foundation.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link foundation.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: foundation.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foundation.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foundation.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): foundation.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: foundation.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace game. */
export namespace game {

    /** Status enum. */
    enum Status {
        default = 0,
        beting = 1,
        drawing = 2,
        waiting = 3,
        paused = 4,
        watchingcard = 5
    }

    /** GameType enum. */
    enum GameType {
        GameType_default = 0,
        normal = 1,
        vip = 2
    }

    /** WatchcardSide enum. */
    enum WatchcardSide {
        WatchcardSide_default = 0,
        Banker = 1,
        Player = 2
    }

    /** Properties of a GameResultCounter. */
    interface IGameResultCounter {

        /** GameResultCounter player */
        player?: (number|null);

        /** GameResultCounter banker */
        banker?: (number|null);

        /** GameResultCounter tie */
        tie?: (number|null);

        /** GameResultCounter playerPair */
        playerPair?: (number|null);

        /** GameResultCounter bankerPair */
        bankerPair?: (number|null);
    }

    /** Represents a GameResultCounter. */
    class GameResultCounter implements IGameResultCounter {

        /**
         * Constructs a new GameResultCounter.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameResultCounter);

        /** GameResultCounter player. */
        public player: number;

        /** GameResultCounter banker. */
        public banker: number;

        /** GameResultCounter tie. */
        public tie: number;

        /** GameResultCounter playerPair. */
        public playerPair: number;

        /** GameResultCounter bankerPair. */
        public bankerPair: number;

        /**
         * Creates a new GameResultCounter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResultCounter instance
         */
        public static create(properties?: game.IGameResultCounter): game.GameResultCounter;

        /**
         * Encodes the specified GameResultCounter message. Does not implicitly {@link game.GameResultCounter.verify|verify} messages.
         * @param message GameResultCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameResultCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameResultCounter message, length delimited. Does not implicitly {@link game.GameResultCounter.verify|verify} messages.
         * @param message GameResultCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameResultCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResultCounter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResultCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.GameResultCounter;

        /**
         * Decodes a GameResultCounter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResultCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.GameResultCounter;

        /**
         * Verifies a GameResultCounter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameResultCounter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameResultCounter
         */
        public static fromObject(object: { [k: string]: any }): game.GameResultCounter;

        /**
         * Creates a plain object from a GameResultCounter message. Also converts values to other types if specified.
         * @param message GameResultCounter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GameResultCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameResultCounter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRoundStart. */
    interface IBetRoundStart {

        /** BetRoundStart header */
        header?: (foundation.IHeader|null);

        /** BetRoundStart gameUuid */
        gameUuid?: (string|null);

        /** BetRoundStart timeRemain */
        timeRemain?: (number|null);

        /** BetRoundStart numOfShoe */
        numOfShoe?: (number|null);

        /** BetRoundStart numOfRound */
        numOfRound?: (number|null);

        /** BetRoundStart gameResultCounter */
        gameResultCounter?: (game.IGameResultCounter|null);

        /** BetRoundStart askRoadRecalls */
        askRoadRecalls?: (roadmap.IAskRoadRecall[]|null);
    }

    /** Represents a BetRoundStart. */
    class BetRoundStart implements IBetRoundStart {

        /**
         * Constructs a new BetRoundStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBetRoundStart);

        /** BetRoundStart header. */
        public header?: (foundation.IHeader|null);

        /** BetRoundStart gameUuid. */
        public gameUuid: string;

        /** BetRoundStart timeRemain. */
        public timeRemain: number;

        /** BetRoundStart numOfShoe. */
        public numOfShoe: number;

        /** BetRoundStart numOfRound. */
        public numOfRound: number;

        /** BetRoundStart gameResultCounter. */
        public gameResultCounter?: (game.IGameResultCounter|null);

        /** BetRoundStart askRoadRecalls. */
        public askRoadRecalls: roadmap.IAskRoadRecall[];

        /**
         * Creates a new BetRoundStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRoundStart instance
         */
        public static create(properties?: game.IBetRoundStart): game.BetRoundStart;

        /**
         * Encodes the specified BetRoundStart message. Does not implicitly {@link game.BetRoundStart.verify|verify} messages.
         * @param message BetRoundStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBetRoundStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRoundStart message, length delimited. Does not implicitly {@link game.BetRoundStart.verify|verify} messages.
         * @param message BetRoundStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBetRoundStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRoundStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRoundStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BetRoundStart;

        /**
         * Decodes a BetRoundStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRoundStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BetRoundStart;

        /**
         * Verifies a BetRoundStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRoundStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRoundStart
         */
        public static fromObject(object: { [k: string]: any }): game.BetRoundStart;

        /**
         * Creates a plain object from a BetRoundStart message. Also converts values to other types if specified.
         * @param message BetRoundStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BetRoundStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRoundStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRoundCountdown. */
    interface IBetRoundCountdown {

        /** BetRoundCountdown header */
        header?: (foundation.IHeader|null);

        /** BetRoundCountdown timeRemain */
        timeRemain?: (number|null);
    }

    /** Represents a BetRoundCountdown. */
    class BetRoundCountdown implements IBetRoundCountdown {

        /**
         * Constructs a new BetRoundCountdown.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBetRoundCountdown);

        /** BetRoundCountdown header. */
        public header?: (foundation.IHeader|null);

        /** BetRoundCountdown timeRemain. */
        public timeRemain: number;

        /**
         * Creates a new BetRoundCountdown instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRoundCountdown instance
         */
        public static create(properties?: game.IBetRoundCountdown): game.BetRoundCountdown;

        /**
         * Encodes the specified BetRoundCountdown message. Does not implicitly {@link game.BetRoundCountdown.verify|verify} messages.
         * @param message BetRoundCountdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBetRoundCountdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRoundCountdown message, length delimited. Does not implicitly {@link game.BetRoundCountdown.verify|verify} messages.
         * @param message BetRoundCountdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBetRoundCountdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRoundCountdown message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRoundCountdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BetRoundCountdown;

        /**
         * Decodes a BetRoundCountdown message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRoundCountdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BetRoundCountdown;

        /**
         * Verifies a BetRoundCountdown message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRoundCountdown message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRoundCountdown
         */
        public static fromObject(object: { [k: string]: any }): game.BetRoundCountdown;

        /**
         * Creates a plain object from a BetRoundCountdown message. Also converts values to other types if specified.
         * @param message BetRoundCountdown
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BetRoundCountdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRoundCountdown to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRoundEnd. */
    interface IBetRoundEnd {

        /** BetRoundEnd header */
        header?: (foundation.IHeader|null);

        /** BetRoundEnd gameUuid */
        gameUuid?: (string|null);
    }

    /** Represents a BetRoundEnd. */
    class BetRoundEnd implements IBetRoundEnd {

        /**
         * Constructs a new BetRoundEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBetRoundEnd);

        /** BetRoundEnd header. */
        public header?: (foundation.IHeader|null);

        /** BetRoundEnd gameUuid. */
        public gameUuid: string;

        /**
         * Creates a new BetRoundEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRoundEnd instance
         */
        public static create(properties?: game.IBetRoundEnd): game.BetRoundEnd;

        /**
         * Encodes the specified BetRoundEnd message. Does not implicitly {@link game.BetRoundEnd.verify|verify} messages.
         * @param message BetRoundEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBetRoundEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRoundEnd message, length delimited. Does not implicitly {@link game.BetRoundEnd.verify|verify} messages.
         * @param message BetRoundEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBetRoundEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRoundEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BetRoundEnd;

        /**
         * Decodes a BetRoundEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BetRoundEnd;

        /**
         * Verifies a BetRoundEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRoundEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRoundEnd
         */
        public static fromObject(object: { [k: string]: any }): game.BetRoundEnd;

        /**
         * Creates a plain object from a BetRoundEnd message. Also converts values to other types if specified.
         * @param message BetRoundEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BetRoundEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRoundEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStatus. */
    interface IGameStatus {

        /** GameStatus header */
        header?: (foundation.IHeader|null);

        /** GameStatus status */
        status?: (game.Status|null);

        /** GameStatus timeRemain */
        timeRemain?: (number|null);

        /** GameStatus draws */
        draws?: (dealer.IDraw[]|null);

        /** GameStatus numOfShoe */
        numOfShoe?: (number|null);

        /** GameStatus numOfRound */
        numOfRound?: (number|null);

        /** GameStatus gameResultCounter */
        gameResultCounter?: (game.IGameResultCounter|null);

        /** GameStatus gameUuid */
        gameUuid?: (string|null);
    }

    /** Represents a GameStatus. */
    class GameStatus implements IGameStatus {

        /**
         * Constructs a new GameStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameStatus);

        /** GameStatus header. */
        public header?: (foundation.IHeader|null);

        /** GameStatus status. */
        public status: game.Status;

        /** GameStatus timeRemain. */
        public timeRemain: number;

        /** GameStatus draws. */
        public draws: dealer.IDraw[];

        /** GameStatus numOfShoe. */
        public numOfShoe: number;

        /** GameStatus numOfRound. */
        public numOfRound: number;

        /** GameStatus gameResultCounter. */
        public gameResultCounter?: (game.IGameResultCounter|null);

        /** GameStatus gameUuid. */
        public gameUuid: string;

        /**
         * Creates a new GameStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStatus instance
         */
        public static create(properties?: game.IGameStatus): game.GameStatus;

        /**
         * Encodes the specified GameStatus message. Does not implicitly {@link game.GameStatus.verify|verify} messages.
         * @param message GameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStatus message, length delimited. Does not implicitly {@link game.GameStatus.verify|verify} messages.
         * @param message GameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.GameStatus;

        /**
         * Decodes a GameStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.GameStatus;

        /**
         * Verifies a GameStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStatus
         */
        public static fromObject(object: { [k: string]: any }): game.GameStatus;

        /**
         * Creates a plain object from a GameStatus message. Also converts values to other types if specified.
         * @param message GameStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GameStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WatchcardNotificaion. */
    interface IWatchcardNotificaion {

        /** WatchcardNotificaion header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a WatchcardNotificaion. */
    class WatchcardNotificaion implements IWatchcardNotificaion {

        /**
         * Constructs a new WatchcardNotificaion.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IWatchcardNotificaion);

        /** WatchcardNotificaion header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new WatchcardNotificaion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WatchcardNotificaion instance
         */
        public static create(properties?: game.IWatchcardNotificaion): game.WatchcardNotificaion;

        /**
         * Encodes the specified WatchcardNotificaion message. Does not implicitly {@link game.WatchcardNotificaion.verify|verify} messages.
         * @param message WatchcardNotificaion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IWatchcardNotificaion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WatchcardNotificaion message, length delimited. Does not implicitly {@link game.WatchcardNotificaion.verify|verify} messages.
         * @param message WatchcardNotificaion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IWatchcardNotificaion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WatchcardNotificaion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WatchcardNotificaion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.WatchcardNotificaion;

        /**
         * Decodes a WatchcardNotificaion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WatchcardNotificaion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.WatchcardNotificaion;

        /**
         * Verifies a WatchcardNotificaion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WatchcardNotificaion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WatchcardNotificaion
         */
        public static fromObject(object: { [k: string]: any }): game.WatchcardNotificaion;

        /**
         * Creates a plain object from a WatchcardNotificaion message. Also converts values to other types if specified.
         * @param message WatchcardNotificaion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.WatchcardNotificaion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WatchcardNotificaion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastWatchcardNotificaion. */
    interface IBroadcastWatchcardNotificaion {

        /** BroadcastWatchcardNotificaion header */
        header?: (foundation.IHeader|null);

        /** BroadcastWatchcardNotificaion account */
        account?: (string|null);

        /** BroadcastWatchcardNotificaion side */
        side?: (game.WatchcardSide|null);
    }

    /** Represents a BroadcastWatchcardNotificaion. */
    class BroadcastWatchcardNotificaion implements IBroadcastWatchcardNotificaion {

        /**
         * Constructs a new BroadcastWatchcardNotificaion.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBroadcastWatchcardNotificaion);

        /** BroadcastWatchcardNotificaion header. */
        public header?: (foundation.IHeader|null);

        /** BroadcastWatchcardNotificaion account. */
        public account: string;

        /** BroadcastWatchcardNotificaion side. */
        public side: game.WatchcardSide;

        /**
         * Creates a new BroadcastWatchcardNotificaion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastWatchcardNotificaion instance
         */
        public static create(properties?: game.IBroadcastWatchcardNotificaion): game.BroadcastWatchcardNotificaion;

        /**
         * Encodes the specified BroadcastWatchcardNotificaion message. Does not implicitly {@link game.BroadcastWatchcardNotificaion.verify|verify} messages.
         * @param message BroadcastWatchcardNotificaion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBroadcastWatchcardNotificaion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastWatchcardNotificaion message, length delimited. Does not implicitly {@link game.BroadcastWatchcardNotificaion.verify|verify} messages.
         * @param message BroadcastWatchcardNotificaion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBroadcastWatchcardNotificaion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastWatchcardNotificaion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastWatchcardNotificaion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BroadcastWatchcardNotificaion;

        /**
         * Decodes a BroadcastWatchcardNotificaion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastWatchcardNotificaion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BroadcastWatchcardNotificaion;

        /**
         * Verifies a BroadcastWatchcardNotificaion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastWatchcardNotificaion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastWatchcardNotificaion
         */
        public static fromObject(object: { [k: string]: any }): game.BroadcastWatchcardNotificaion;

        /**
         * Creates a plain object from a BroadcastWatchcardNotificaion message. Also converts values to other types if specified.
         * @param message BroadcastWatchcardNotificaion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BroadcastWatchcardNotificaion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastWatchcardNotificaion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WatchcardCall. */
    interface IWatchcardCall {

        /** WatchcardCall header */
        header?: (foundation.IHeader|null);

        /** WatchcardCall confirm */
        confirm?: (boolean|null);
    }

    /** Represents a WatchcardCall. */
    class WatchcardCall implements IWatchcardCall {

        /**
         * Constructs a new WatchcardCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IWatchcardCall);

        /** WatchcardCall header. */
        public header?: (foundation.IHeader|null);

        /** WatchcardCall confirm. */
        public confirm: boolean;

        /**
         * Creates a new WatchcardCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WatchcardCall instance
         */
        public static create(properties?: game.IWatchcardCall): game.WatchcardCall;

        /**
         * Encodes the specified WatchcardCall message. Does not implicitly {@link game.WatchcardCall.verify|verify} messages.
         * @param message WatchcardCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IWatchcardCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WatchcardCall message, length delimited. Does not implicitly {@link game.WatchcardCall.verify|verify} messages.
         * @param message WatchcardCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IWatchcardCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WatchcardCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WatchcardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.WatchcardCall;

        /**
         * Decodes a WatchcardCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WatchcardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.WatchcardCall;

        /**
         * Verifies a WatchcardCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WatchcardCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WatchcardCall
         */
        public static fromObject(object: { [k: string]: any }): game.WatchcardCall;

        /**
         * Creates a plain object from a WatchcardCall message. Also converts values to other types if specified.
         * @param message WatchcardCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.WatchcardCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WatchcardCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastWatchcardCall. */
    interface IBroadcastWatchcardCall {

        /** BroadcastWatchcardCall header */
        header?: (foundation.IHeader|null);

        /** BroadcastWatchcardCall account */
        account?: (string|null);

        /** BroadcastWatchcardCall side */
        side?: (game.WatchcardSide|null);

        /** BroadcastWatchcardCall call */
        call?: (game.IWatchcardCall|null);
    }

    /** Represents a BroadcastWatchcardCall. */
    class BroadcastWatchcardCall implements IBroadcastWatchcardCall {

        /**
         * Constructs a new BroadcastWatchcardCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBroadcastWatchcardCall);

        /** BroadcastWatchcardCall header. */
        public header?: (foundation.IHeader|null);

        /** BroadcastWatchcardCall account. */
        public account: string;

        /** BroadcastWatchcardCall side. */
        public side: game.WatchcardSide;

        /** BroadcastWatchcardCall call. */
        public call?: (game.IWatchcardCall|null);

        /**
         * Creates a new BroadcastWatchcardCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastWatchcardCall instance
         */
        public static create(properties?: game.IBroadcastWatchcardCall): game.BroadcastWatchcardCall;

        /**
         * Encodes the specified BroadcastWatchcardCall message. Does not implicitly {@link game.BroadcastWatchcardCall.verify|verify} messages.
         * @param message BroadcastWatchcardCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBroadcastWatchcardCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastWatchcardCall message, length delimited. Does not implicitly {@link game.BroadcastWatchcardCall.verify|verify} messages.
         * @param message BroadcastWatchcardCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBroadcastWatchcardCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastWatchcardCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastWatchcardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BroadcastWatchcardCall;

        /**
         * Decodes a BroadcastWatchcardCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastWatchcardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BroadcastWatchcardCall;

        /**
         * Verifies a BroadcastWatchcardCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastWatchcardCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastWatchcardCall
         */
        public static fromObject(object: { [k: string]: any }): game.BroadcastWatchcardCall;

        /**
         * Creates a plain object from a BroadcastWatchcardCall message. Also converts values to other types if specified.
         * @param message BroadcastWatchcardCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BroadcastWatchcardCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastWatchcardCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WatchcardRecall. */
    interface IWatchcardRecall {

        /** WatchcardRecall header */
        header?: (foundation.IHeader|null);

        /** WatchcardRecall watchcardUrl */
        watchcardUrl?: (game.IWatchcardUrl|null);
    }

    /** Represents a WatchcardRecall. */
    class WatchcardRecall implements IWatchcardRecall {

        /**
         * Constructs a new WatchcardRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IWatchcardRecall);

        /** WatchcardRecall header. */
        public header?: (foundation.IHeader|null);

        /** WatchcardRecall watchcardUrl. */
        public watchcardUrl?: (game.IWatchcardUrl|null);

        /**
         * Creates a new WatchcardRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WatchcardRecall instance
         */
        public static create(properties?: game.IWatchcardRecall): game.WatchcardRecall;

        /**
         * Encodes the specified WatchcardRecall message. Does not implicitly {@link game.WatchcardRecall.verify|verify} messages.
         * @param message WatchcardRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IWatchcardRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WatchcardRecall message, length delimited. Does not implicitly {@link game.WatchcardRecall.verify|verify} messages.
         * @param message WatchcardRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IWatchcardRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WatchcardRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WatchcardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.WatchcardRecall;

        /**
         * Decodes a WatchcardRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WatchcardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.WatchcardRecall;

        /**
         * Verifies a WatchcardRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WatchcardRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WatchcardRecall
         */
        public static fromObject(object: { [k: string]: any }): game.WatchcardRecall;

        /**
         * Creates a plain object from a WatchcardRecall message. Also converts values to other types if specified.
         * @param message WatchcardRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.WatchcardRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WatchcardRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WatchcardUrl. */
    interface IWatchcardUrl {

        /** WatchcardUrl banker */
        banker?: (game.IStreamingUrl|null);

        /** WatchcardUrl player */
        player?: (game.IStreamingUrl|null);
    }

    /** Represents a WatchcardUrl. */
    class WatchcardUrl implements IWatchcardUrl {

        /**
         * Constructs a new WatchcardUrl.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IWatchcardUrl);

        /** WatchcardUrl banker. */
        public banker?: (game.IStreamingUrl|null);

        /** WatchcardUrl player. */
        public player?: (game.IStreamingUrl|null);

        /**
         * Creates a new WatchcardUrl instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WatchcardUrl instance
         */
        public static create(properties?: game.IWatchcardUrl): game.WatchcardUrl;

        /**
         * Encodes the specified WatchcardUrl message. Does not implicitly {@link game.WatchcardUrl.verify|verify} messages.
         * @param message WatchcardUrl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IWatchcardUrl, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WatchcardUrl message, length delimited. Does not implicitly {@link game.WatchcardUrl.verify|verify} messages.
         * @param message WatchcardUrl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IWatchcardUrl, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WatchcardUrl message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WatchcardUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.WatchcardUrl;

        /**
         * Decodes a WatchcardUrl message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WatchcardUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.WatchcardUrl;

        /**
         * Verifies a WatchcardUrl message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WatchcardUrl message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WatchcardUrl
         */
        public static fromObject(object: { [k: string]: any }): game.WatchcardUrl;

        /**
         * Creates a plain object from a WatchcardUrl message. Also converts values to other types if specified.
         * @param message WatchcardUrl
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.WatchcardUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WatchcardUrl to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StreamingUrl. */
    interface IStreamingUrl {

        /** StreamingUrl desktop */
        desktop?: (string|null);

        /** StreamingUrl moblie */
        moblie?: (string|null);
    }

    /** Represents a StreamingUrl. */
    class StreamingUrl implements IStreamingUrl {

        /**
         * Constructs a new StreamingUrl.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IStreamingUrl);

        /** StreamingUrl desktop. */
        public desktop: string;

        /** StreamingUrl moblie. */
        public moblie: string;

        /**
         * Creates a new StreamingUrl instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StreamingUrl instance
         */
        public static create(properties?: game.IStreamingUrl): game.StreamingUrl;

        /**
         * Encodes the specified StreamingUrl message. Does not implicitly {@link game.StreamingUrl.verify|verify} messages.
         * @param message StreamingUrl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IStreamingUrl, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StreamingUrl message, length delimited. Does not implicitly {@link game.StreamingUrl.verify|verify} messages.
         * @param message StreamingUrl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IStreamingUrl, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StreamingUrl message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamingUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.StreamingUrl;

        /**
         * Decodes a StreamingUrl message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StreamingUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.StreamingUrl;

        /**
         * Verifies a StreamingUrl message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StreamingUrl message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StreamingUrl
         */
        public static fromObject(object: { [k: string]: any }): game.StreamingUrl;

        /**
         * Creates a plain object from a StreamingUrl message. Also converts values to other types if specified.
         * @param message StreamingUrl
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.StreamingUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StreamingUrl to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FlyCardCall. */
    interface IFlyCardCall {

        /** FlyCardCall header */
        header?: (foundation.IHeader|null);

        /** FlyCardCall gameUuid */
        gameUuid?: (string|null);
    }

    /** Represents a FlyCardCall. */
    class FlyCardCall implements IFlyCardCall {

        /**
         * Constructs a new FlyCardCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IFlyCardCall);

        /** FlyCardCall header. */
        public header?: (foundation.IHeader|null);

        /** FlyCardCall gameUuid. */
        public gameUuid: string;

        /**
         * Creates a new FlyCardCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FlyCardCall instance
         */
        public static create(properties?: game.IFlyCardCall): game.FlyCardCall;

        /**
         * Encodes the specified FlyCardCall message. Does not implicitly {@link game.FlyCardCall.verify|verify} messages.
         * @param message FlyCardCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IFlyCardCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FlyCardCall message, length delimited. Does not implicitly {@link game.FlyCardCall.verify|verify} messages.
         * @param message FlyCardCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IFlyCardCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FlyCardCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FlyCardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.FlyCardCall;

        /**
         * Decodes a FlyCardCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FlyCardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.FlyCardCall;

        /**
         * Verifies a FlyCardCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FlyCardCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FlyCardCall
         */
        public static fromObject(object: { [k: string]: any }): game.FlyCardCall;

        /**
         * Creates a plain object from a FlyCardCall message. Also converts values to other types if specified.
         * @param message FlyCardCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.FlyCardCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FlyCardCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FlyCardRecall. */
    interface IFlyCardRecall {

        /** FlyCardRecall header */
        header?: (foundation.IHeader|null);

        /** FlyCardRecall result */
        result?: (number|null);

        /** FlyCardRecall error */
        error?: (string|null);
    }

    /** Represents a FlyCardRecall. */
    class FlyCardRecall implements IFlyCardRecall {

        /**
         * Constructs a new FlyCardRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IFlyCardRecall);

        /** FlyCardRecall header. */
        public header?: (foundation.IHeader|null);

        /** FlyCardRecall result. */
        public result: number;

        /** FlyCardRecall error. */
        public error: string;

        /**
         * Creates a new FlyCardRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FlyCardRecall instance
         */
        public static create(properties?: game.IFlyCardRecall): game.FlyCardRecall;

        /**
         * Encodes the specified FlyCardRecall message. Does not implicitly {@link game.FlyCardRecall.verify|verify} messages.
         * @param message FlyCardRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IFlyCardRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FlyCardRecall message, length delimited. Does not implicitly {@link game.FlyCardRecall.verify|verify} messages.
         * @param message FlyCardRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IFlyCardRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FlyCardRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FlyCardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.FlyCardRecall;

        /**
         * Decodes a FlyCardRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FlyCardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.FlyCardRecall;

        /**
         * Verifies a FlyCardRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FlyCardRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FlyCardRecall
         */
        public static fromObject(object: { [k: string]: any }): game.FlyCardRecall;

        /**
         * Creates a plain object from a FlyCardRecall message. Also converts values to other types if specified.
         * @param message FlyCardRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.FlyCardRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FlyCardRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastFlyCardRecall. */
    interface IBroadcastFlyCardRecall {

        /** BroadcastFlyCardRecall header */
        header?: (foundation.IHeader|null);

        /** BroadcastFlyCardRecall account */
        account?: (string|null);

        /** BroadcastFlyCardRecall recall */
        recall?: (game.IFlyCardRecall|null);
    }

    /** Represents a BroadcastFlyCardRecall. */
    class BroadcastFlyCardRecall implements IBroadcastFlyCardRecall {

        /**
         * Constructs a new BroadcastFlyCardRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBroadcastFlyCardRecall);

        /** BroadcastFlyCardRecall header. */
        public header?: (foundation.IHeader|null);

        /** BroadcastFlyCardRecall account. */
        public account: string;

        /** BroadcastFlyCardRecall recall. */
        public recall?: (game.IFlyCardRecall|null);

        /**
         * Creates a new BroadcastFlyCardRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastFlyCardRecall instance
         */
        public static create(properties?: game.IBroadcastFlyCardRecall): game.BroadcastFlyCardRecall;

        /**
         * Encodes the specified BroadcastFlyCardRecall message. Does not implicitly {@link game.BroadcastFlyCardRecall.verify|verify} messages.
         * @param message BroadcastFlyCardRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBroadcastFlyCardRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastFlyCardRecall message, length delimited. Does not implicitly {@link game.BroadcastFlyCardRecall.verify|verify} messages.
         * @param message BroadcastFlyCardRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBroadcastFlyCardRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastFlyCardRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastFlyCardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BroadcastFlyCardRecall;

        /**
         * Decodes a BroadcastFlyCardRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastFlyCardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BroadcastFlyCardRecall;

        /**
         * Verifies a BroadcastFlyCardRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastFlyCardRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastFlyCardRecall
         */
        public static fromObject(object: { [k: string]: any }): game.BroadcastFlyCardRecall;

        /**
         * Creates a plain object from a BroadcastFlyCardRecall message. Also converts values to other types if specified.
         * @param message BroadcastFlyCardRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BroadcastFlyCardRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastFlyCardRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace history. */
export namespace history {

    /** Properties of a History. */
    interface IHistory {

        /** History bets */
        bets?: (history.IBetStatus|null);

        /** History totalBet */
        totalBet?: (number|null);

        /** History results */
        results?: (history.HistoryResult[]|null);

        /** History draws */
        draws?: (dealer.IDraw[]|null);

        /** History table */
        table?: (string|null);

        /** History numOfShoe */
        numOfShoe?: (number|null);

        /** History numOfRound */
        numOfRound?: (number|null);

        /** History totalWin */
        totalWin?: (number|null);

        /** History gameTime */
        gameTime?: (string|null);
    }

    /** Represents a History. */
    class History implements IHistory {

        /**
         * Constructs a new History.
         * @param [properties] Properties to set
         */
        constructor(properties?: history.IHistory);

        /** History bets. */
        public bets?: (history.IBetStatus|null);

        /** History totalBet. */
        public totalBet: number;

        /** History results. */
        public results: history.HistoryResult[];

        /** History draws. */
        public draws: dealer.IDraw[];

        /** History table. */
        public table: string;

        /** History numOfShoe. */
        public numOfShoe: number;

        /** History numOfRound. */
        public numOfRound: number;

        /** History totalWin. */
        public totalWin: number;

        /** History gameTime. */
        public gameTime: string;

        /**
         * Creates a new History instance using the specified properties.
         * @param [properties] Properties to set
         * @returns History instance
         */
        public static create(properties?: history.IHistory): history.History;

        /**
         * Encodes the specified History message. Does not implicitly {@link history.History.verify|verify} messages.
         * @param message History message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: history.IHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified History message, length delimited. Does not implicitly {@link history.History.verify|verify} messages.
         * @param message History message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: history.IHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a History message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns History
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): history.History;

        /**
         * Decodes a History message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns History
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): history.History;

        /**
         * Verifies a History message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a History message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns History
         */
        public static fromObject(object: { [k: string]: any }): history.History;

        /**
         * Creates a plain object from a History message. Also converts values to other types if specified.
         * @param message History
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: history.History, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this History to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HistoryCall. */
    interface IHistoryCall {

        /** HistoryCall header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a HistoryCall. */
    class HistoryCall implements IHistoryCall {

        /**
         * Constructs a new HistoryCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: history.IHistoryCall);

        /** HistoryCall header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new HistoryCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryCall instance
         */
        public static create(properties?: history.IHistoryCall): history.HistoryCall;

        /**
         * Encodes the specified HistoryCall message. Does not implicitly {@link history.HistoryCall.verify|verify} messages.
         * @param message HistoryCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: history.IHistoryCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HistoryCall message, length delimited. Does not implicitly {@link history.HistoryCall.verify|verify} messages.
         * @param message HistoryCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: history.IHistoryCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): history.HistoryCall;

        /**
         * Decodes a HistoryCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HistoryCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): history.HistoryCall;

        /**
         * Verifies a HistoryCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HistoryCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HistoryCall
         */
        public static fromObject(object: { [k: string]: any }): history.HistoryCall;

        /**
         * Creates a plain object from a HistoryCall message. Also converts values to other types if specified.
         * @param message HistoryCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: history.HistoryCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HistoryCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HistoryRecall. */
    interface IHistoryRecall {

        /** HistoryRecall header */
        header?: (foundation.IHeader|null);

        /** HistoryRecall histories */
        histories?: (history.IHistory[]|null);
    }

    /** Represents a HistoryRecall. */
    class HistoryRecall implements IHistoryRecall {

        /**
         * Constructs a new HistoryRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: history.IHistoryRecall);

        /** HistoryRecall header. */
        public header?: (foundation.IHeader|null);

        /** HistoryRecall histories. */
        public histories: history.IHistory[];

        /**
         * Creates a new HistoryRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryRecall instance
         */
        public static create(properties?: history.IHistoryRecall): history.HistoryRecall;

        /**
         * Encodes the specified HistoryRecall message. Does not implicitly {@link history.HistoryRecall.verify|verify} messages.
         * @param message HistoryRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: history.IHistoryRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HistoryRecall message, length delimited. Does not implicitly {@link history.HistoryRecall.verify|verify} messages.
         * @param message HistoryRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: history.IHistoryRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): history.HistoryRecall;

        /**
         * Decodes a HistoryRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HistoryRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): history.HistoryRecall;

        /**
         * Verifies a HistoryRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HistoryRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HistoryRecall
         */
        public static fromObject(object: { [k: string]: any }): history.HistoryRecall;

        /**
         * Creates a plain object from a HistoryRecall message. Also converts values to other types if specified.
         * @param message HistoryRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: history.HistoryRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HistoryRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** HistoryResult enum. */
    enum HistoryResult {
        ResultDefault = 0,
        Banker = 1,
        Player = 2,
        BankerPair = 3,
        Tie = 4,
        PlayerPair = 5
    }

    /** Properties of a BetStatus. */
    interface IBetStatus {

        /** BetStatus Banker */
        Banker?: (number|null);

        /** BetStatus Player */
        Player?: (number|null);

        /** BetStatus BankerPair */
        BankerPair?: (number|null);

        /** BetStatus Tie */
        Tie?: (number|null);

        /** BetStatus PlayerPair */
        PlayerPair?: (number|null);
    }

    /** Represents a BetStatus. */
    class BetStatus implements IBetStatus {

        /**
         * Constructs a new BetStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: history.IBetStatus);

        /** BetStatus Banker. */
        public Banker: number;

        /** BetStatus Player. */
        public Player: number;

        /** BetStatus BankerPair. */
        public BankerPair: number;

        /** BetStatus Tie. */
        public Tie: number;

        /** BetStatus PlayerPair. */
        public PlayerPair: number;

        /**
         * Creates a new BetStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetStatus instance
         */
        public static create(properties?: history.IBetStatus): history.BetStatus;

        /**
         * Encodes the specified BetStatus message. Does not implicitly {@link history.BetStatus.verify|verify} messages.
         * @param message BetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: history.IBetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetStatus message, length delimited. Does not implicitly {@link history.BetStatus.verify|verify} messages.
         * @param message BetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: history.IBetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): history.BetStatus;

        /**
         * Decodes a BetStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): history.BetStatus;

        /**
         * Verifies a BetStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetStatus
         */
        public static fromObject(object: { [k: string]: any }): history.BetStatus;

        /**
         * Creates a plain object from a BetStatus message. Also converts values to other types if specified.
         * @param message BetStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: history.BetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace kick. */
export namespace kick {

    /** Properties of a kickout. */
    interface Ikickout {

        /** kickout header */
        header?: (foundation.IHeader|null);

        /** kickout message */
        message?: (string|null);
    }

    /** Represents a kickout. */
    class kickout implements Ikickout {

        /**
         * Constructs a new kickout.
         * @param [properties] Properties to set
         */
        constructor(properties?: kick.Ikickout);

        /** kickout header. */
        public header?: (foundation.IHeader|null);

        /** kickout message. */
        public message: string;

        /**
         * Creates a new kickout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns kickout instance
         */
        public static create(properties?: kick.Ikickout): kick.kickout;

        /**
         * Encodes the specified kickout message. Does not implicitly {@link kick.kickout.verify|verify} messages.
         * @param message kickout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kick.Ikickout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified kickout message, length delimited. Does not implicitly {@link kick.kickout.verify|verify} messages.
         * @param message kickout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kick.Ikickout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a kickout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns kickout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kick.kickout;

        /**
         * Decodes a kickout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns kickout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kick.kickout;

        /**
         * Verifies a kickout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a kickout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns kickout
         */
        public static fromObject(object: { [k: string]: any }): kick.kickout;

        /**
         * Creates a plain object from a kickout message. Also converts values to other types if specified.
         * @param message kickout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kick.kickout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this kickout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a kickoutWarn. */
    interface IkickoutWarn {

        /** kickoutWarn header */
        header?: (foundation.IHeader|null);

        /** kickoutWarn message */
        message?: (string|null);
    }

    /** Represents a kickoutWarn. */
    class kickoutWarn implements IkickoutWarn {

        /**
         * Constructs a new kickoutWarn.
         * @param [properties] Properties to set
         */
        constructor(properties?: kick.IkickoutWarn);

        /** kickoutWarn header. */
        public header?: (foundation.IHeader|null);

        /** kickoutWarn message. */
        public message: string;

        /**
         * Creates a new kickoutWarn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns kickoutWarn instance
         */
        public static create(properties?: kick.IkickoutWarn): kick.kickoutWarn;

        /**
         * Encodes the specified kickoutWarn message. Does not implicitly {@link kick.kickoutWarn.verify|verify} messages.
         * @param message kickoutWarn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kick.IkickoutWarn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified kickoutWarn message, length delimited. Does not implicitly {@link kick.kickoutWarn.verify|verify} messages.
         * @param message kickoutWarn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kick.IkickoutWarn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a kickoutWarn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns kickoutWarn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kick.kickoutWarn;

        /**
         * Decodes a kickoutWarn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns kickoutWarn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kick.kickoutWarn;

        /**
         * Verifies a kickoutWarn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a kickoutWarn message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns kickoutWarn
         */
        public static fromObject(object: { [k: string]: any }): kick.kickoutWarn;

        /**
         * Creates a plain object from a kickoutWarn message. Also converts values to other types if specified.
         * @param message kickoutWarn
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kick.kickoutWarn, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this kickoutWarn to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace lobby. */
export namespace lobby {

    /** Properties of a LobbyInfo. */
    interface ILobbyInfo {

        /** LobbyInfo header */
        header?: (foundation.IHeader|null);

        /** LobbyInfo tables */
        tables?: (lobby.ITableInfo[]|null);
    }

    /** Represents a LobbyInfo. */
    class LobbyInfo implements ILobbyInfo {

        /**
         * Constructs a new LobbyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.ILobbyInfo);

        /** LobbyInfo header. */
        public header?: (foundation.IHeader|null);

        /** LobbyInfo tables. */
        public tables: lobby.ITableInfo[];

        /**
         * Creates a new LobbyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyInfo instance
         */
        public static create(properties?: lobby.ILobbyInfo): lobby.LobbyInfo;

        /**
         * Encodes the specified LobbyInfo message. Does not implicitly {@link lobby.LobbyInfo.verify|verify} messages.
         * @param message LobbyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.ILobbyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyInfo message, length delimited. Does not implicitly {@link lobby.LobbyInfo.verify|verify} messages.
         * @param message LobbyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.ILobbyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.LobbyInfo;

        /**
         * Decodes a LobbyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.LobbyInfo;

        /**
         * Verifies a LobbyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyInfo
         */
        public static fromObject(object: { [k: string]: any }): lobby.LobbyInfo;

        /**
         * Creates a plain object from a LobbyInfo message. Also converts values to other types if specified.
         * @param message LobbyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.LobbyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TableInfo. */
    interface ITableInfo {

        /** TableInfo uuid */
        uuid?: (string|null);

        /** TableInfo name */
        name?: (string|null);

        /** TableInfo betRule */
        betRule?: (table.IBetRule|null);

        /** TableInfo betList */
        betList?: (number[]|null);
    }

    /** Represents a TableInfo. */
    class TableInfo implements ITableInfo {

        /**
         * Constructs a new TableInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.ITableInfo);

        /** TableInfo uuid. */
        public uuid: string;

        /** TableInfo name. */
        public name: string;

        /** TableInfo betRule. */
        public betRule?: (table.IBetRule|null);

        /** TableInfo betList. */
        public betList: number[];

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableInfo instance
         */
        public static create(properties?: lobby.ITableInfo): lobby.TableInfo;

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link lobby.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link lobby.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.TableInfo;

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.TableInfo;

        /**
         * Verifies a TableInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableInfo
         */
        public static fromObject(object: { [k: string]: any }): lobby.TableInfo;

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @param message TableInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.TableInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastTotalPlayersOnline. */
    interface IBroadcastTotalPlayersOnline {

        /** BroadcastTotalPlayersOnline header */
        header?: (foundation.IHeader|null);

        /** BroadcastTotalPlayersOnline numberOfPlayers */
        numberOfPlayers?: (number|null);
    }

    /** Represents a BroadcastTotalPlayersOnline. */
    class BroadcastTotalPlayersOnline implements IBroadcastTotalPlayersOnline {

        /**
         * Constructs a new BroadcastTotalPlayersOnline.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IBroadcastTotalPlayersOnline);

        /** BroadcastTotalPlayersOnline header. */
        public header?: (foundation.IHeader|null);

        /** BroadcastTotalPlayersOnline numberOfPlayers. */
        public numberOfPlayers: number;

        /**
         * Creates a new BroadcastTotalPlayersOnline instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastTotalPlayersOnline instance
         */
        public static create(properties?: lobby.IBroadcastTotalPlayersOnline): lobby.BroadcastTotalPlayersOnline;

        /**
         * Encodes the specified BroadcastTotalPlayersOnline message. Does not implicitly {@link lobby.BroadcastTotalPlayersOnline.verify|verify} messages.
         * @param message BroadcastTotalPlayersOnline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IBroadcastTotalPlayersOnline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastTotalPlayersOnline message, length delimited. Does not implicitly {@link lobby.BroadcastTotalPlayersOnline.verify|verify} messages.
         * @param message BroadcastTotalPlayersOnline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IBroadcastTotalPlayersOnline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastTotalPlayersOnline message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastTotalPlayersOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.BroadcastTotalPlayersOnline;

        /**
         * Decodes a BroadcastTotalPlayersOnline message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastTotalPlayersOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.BroadcastTotalPlayersOnline;

        /**
         * Verifies a BroadcastTotalPlayersOnline message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastTotalPlayersOnline message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastTotalPlayersOnline
         */
        public static fromObject(object: { [k: string]: any }): lobby.BroadcastTotalPlayersOnline;

        /**
         * Creates a plain object from a BroadcastTotalPlayersOnline message. Also converts values to other types if specified.
         * @param message BroadcastTotalPlayersOnline
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.BroadcastTotalPlayersOnline, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastTotalPlayersOnline to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace roadmap. */
export namespace roadmap {

    /** Symbol enum. */
    enum Symbol {
        BlockDefault = 0,
        Banker = 1,
        Player = 2,
        Tie = 3,
        BankerAndBankerPair = 4,
        BankerAndPlayerPair = 5,
        BankerAndBothPair = 6,
        PlayerAndBankerPair = 7,
        PlayerAndPlayerPair = 8,
        PlayerAndBothPair = 9,
        TieAndBankerPair = 10,
        TieAndPlayerPair = 11,
        TieAndBothPair = 12,
        BankerAndTie = 13,
        BankerAndBankerPairAndTie = 14,
        BankerAndPlayerPairAndTie = 15,
        BankerAndBothPairAndTie = 16,
        PlayerAndTie = 17,
        PlayerAndBankerPairAndTie = 18,
        PlayerAndPlayerPairAndTie = 19,
        PlayerAndBothPairAndTie = 20
    }

    /** Properties of a Block. */
    interface IBlock {

        /** Block symbol */
        symbol?: (roadmap.Symbol|null);

        /** Block tieCount */
        tieCount?: (number|null);
    }

    /** Represents a Block. */
    class Block implements IBlock {

        /**
         * Constructs a new Block.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IBlock);

        /** Block symbol. */
        public symbol: roadmap.Symbol;

        /** Block tieCount. */
        public tieCount: number;

        /**
         * Creates a new Block instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Block instance
         */
        public static create(properties?: roadmap.IBlock): roadmap.Block;

        /**
         * Encodes the specified Block message. Does not implicitly {@link roadmap.Block.verify|verify} messages.
         * @param message Block message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Block message, length delimited. Does not implicitly {@link roadmap.Block.verify|verify} messages.
         * @param message Block message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Block message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.Block;

        /**
         * Decodes a Block message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.Block;

        /**
         * Verifies a Block message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Block message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Block
         */
        public static fromObject(object: { [k: string]: any }): roadmap.Block;

        /**
         * Creates a plain object from a Block message. Also converts values to other types if specified.
         * @param message Block
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Block to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Column. */
    interface IColumn {

        /** Column blocks */
        blocks?: (roadmap.IBlock[]|null);
    }

    /** Represents a Column. */
    class Column implements IColumn {

        /**
         * Constructs a new Column.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IColumn);

        /** Column blocks. */
        public blocks: roadmap.IBlock[];

        /**
         * Creates a new Column instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Column instance
         */
        public static create(properties?: roadmap.IColumn): roadmap.Column;

        /**
         * Encodes the specified Column message. Does not implicitly {@link roadmap.Column.verify|verify} messages.
         * @param message Column message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Column message, length delimited. Does not implicitly {@link roadmap.Column.verify|verify} messages.
         * @param message Column message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Column message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Column
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.Column;

        /**
         * Decodes a Column message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Column
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.Column;

        /**
         * Verifies a Column message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Column message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Column
         */
        public static fromObject(object: { [k: string]: any }): roadmap.Column;

        /**
         * Creates a plain object from a Column message. Also converts values to other types if specified.
         * @param message Column
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.Column, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Column to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BeadPlate. */
    interface IBeadPlate {

        /** BeadPlate blocks */
        blocks?: (roadmap.IBlock[]|null);
    }

    /** Represents a BeadPlate. */
    class BeadPlate implements IBeadPlate {

        /**
         * Constructs a new BeadPlate.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IBeadPlate);

        /** BeadPlate blocks. */
        public blocks: roadmap.IBlock[];

        /**
         * Creates a new BeadPlate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeadPlate instance
         */
        public static create(properties?: roadmap.IBeadPlate): roadmap.BeadPlate;

        /**
         * Encodes the specified BeadPlate message. Does not implicitly {@link roadmap.BeadPlate.verify|verify} messages.
         * @param message BeadPlate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IBeadPlate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeadPlate message, length delimited. Does not implicitly {@link roadmap.BeadPlate.verify|verify} messages.
         * @param message BeadPlate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IBeadPlate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeadPlate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeadPlate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.BeadPlate;

        /**
         * Decodes a BeadPlate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeadPlate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.BeadPlate;

        /**
         * Verifies a BeadPlate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeadPlate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeadPlate
         */
        public static fromObject(object: { [k: string]: any }): roadmap.BeadPlate;

        /**
         * Creates a plain object from a BeadPlate message. Also converts values to other types if specified.
         * @param message BeadPlate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.BeadPlate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeadPlate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BigRoad. */
    interface IBigRoad {

        /** BigRoad columns */
        columns?: (roadmap.IColumn[]|null);
    }

    /** Represents a BigRoad. */
    class BigRoad implements IBigRoad {

        /**
         * Constructs a new BigRoad.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IBigRoad);

        /** BigRoad columns. */
        public columns: roadmap.IColumn[];

        /**
         * Creates a new BigRoad instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BigRoad instance
         */
        public static create(properties?: roadmap.IBigRoad): roadmap.BigRoad;

        /**
         * Encodes the specified BigRoad message. Does not implicitly {@link roadmap.BigRoad.verify|verify} messages.
         * @param message BigRoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IBigRoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BigRoad message, length delimited. Does not implicitly {@link roadmap.BigRoad.verify|verify} messages.
         * @param message BigRoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IBigRoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BigRoad message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BigRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.BigRoad;

        /**
         * Decodes a BigRoad message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BigRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.BigRoad;

        /**
         * Verifies a BigRoad message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BigRoad message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BigRoad
         */
        public static fromObject(object: { [k: string]: any }): roadmap.BigRoad;

        /**
         * Creates a plain object from a BigRoad message. Also converts values to other types if specified.
         * @param message BigRoad
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.BigRoad, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BigRoad to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BigEyeRoad. */
    interface IBigEyeRoad {

        /** BigEyeRoad columns */
        columns?: (roadmap.IColumn[]|null);
    }

    /** Represents a BigEyeRoad. */
    class BigEyeRoad implements IBigEyeRoad {

        /**
         * Constructs a new BigEyeRoad.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IBigEyeRoad);

        /** BigEyeRoad columns. */
        public columns: roadmap.IColumn[];

        /**
         * Creates a new BigEyeRoad instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BigEyeRoad instance
         */
        public static create(properties?: roadmap.IBigEyeRoad): roadmap.BigEyeRoad;

        /**
         * Encodes the specified BigEyeRoad message. Does not implicitly {@link roadmap.BigEyeRoad.verify|verify} messages.
         * @param message BigEyeRoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IBigEyeRoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BigEyeRoad message, length delimited. Does not implicitly {@link roadmap.BigEyeRoad.verify|verify} messages.
         * @param message BigEyeRoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IBigEyeRoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BigEyeRoad message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BigEyeRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.BigEyeRoad;

        /**
         * Decodes a BigEyeRoad message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BigEyeRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.BigEyeRoad;

        /**
         * Verifies a BigEyeRoad message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BigEyeRoad message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BigEyeRoad
         */
        public static fromObject(object: { [k: string]: any }): roadmap.BigEyeRoad;

        /**
         * Creates a plain object from a BigEyeRoad message. Also converts values to other types if specified.
         * @param message BigEyeRoad
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.BigEyeRoad, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BigEyeRoad to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SmallRoad. */
    interface ISmallRoad {

        /** SmallRoad columns */
        columns?: (roadmap.IColumn[]|null);
    }

    /** Represents a SmallRoad. */
    class SmallRoad implements ISmallRoad {

        /**
         * Constructs a new SmallRoad.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.ISmallRoad);

        /** SmallRoad columns. */
        public columns: roadmap.IColumn[];

        /**
         * Creates a new SmallRoad instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SmallRoad instance
         */
        public static create(properties?: roadmap.ISmallRoad): roadmap.SmallRoad;

        /**
         * Encodes the specified SmallRoad message. Does not implicitly {@link roadmap.SmallRoad.verify|verify} messages.
         * @param message SmallRoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.ISmallRoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SmallRoad message, length delimited. Does not implicitly {@link roadmap.SmallRoad.verify|verify} messages.
         * @param message SmallRoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.ISmallRoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SmallRoad message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SmallRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.SmallRoad;

        /**
         * Decodes a SmallRoad message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SmallRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.SmallRoad;

        /**
         * Verifies a SmallRoad message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SmallRoad message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SmallRoad
         */
        public static fromObject(object: { [k: string]: any }): roadmap.SmallRoad;

        /**
         * Creates a plain object from a SmallRoad message. Also converts values to other types if specified.
         * @param message SmallRoad
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.SmallRoad, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SmallRoad to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CockroachRoad. */
    interface ICockroachRoad {

        /** CockroachRoad columns */
        columns?: (roadmap.IColumn[]|null);
    }

    /** Represents a CockroachRoad. */
    class CockroachRoad implements ICockroachRoad {

        /**
         * Constructs a new CockroachRoad.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.ICockroachRoad);

        /** CockroachRoad columns. */
        public columns: roadmap.IColumn[];

        /**
         * Creates a new CockroachRoad instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CockroachRoad instance
         */
        public static create(properties?: roadmap.ICockroachRoad): roadmap.CockroachRoad;

        /**
         * Encodes the specified CockroachRoad message. Does not implicitly {@link roadmap.CockroachRoad.verify|verify} messages.
         * @param message CockroachRoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.ICockroachRoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CockroachRoad message, length delimited. Does not implicitly {@link roadmap.CockroachRoad.verify|verify} messages.
         * @param message CockroachRoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.ICockroachRoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CockroachRoad message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CockroachRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.CockroachRoad;

        /**
         * Decodes a CockroachRoad message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CockroachRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.CockroachRoad;

        /**
         * Verifies a CockroachRoad message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CockroachRoad message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CockroachRoad
         */
        public static fromObject(object: { [k: string]: any }): roadmap.CockroachRoad;

        /**
         * Creates a plain object from a CockroachRoad message. Also converts values to other types if specified.
         * @param message CockroachRoad
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.CockroachRoad, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CockroachRoad to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Roadmap. */
    interface IRoadmap {

        /** Roadmap header */
        header?: (foundation.IHeader|null);

        /** Roadmap beadPlate */
        beadPlate?: (roadmap.IBeadPlate|null);

        /** Roadmap bigRoad */
        bigRoad?: (roadmap.IBigRoad|null);

        /** Roadmap bigEyeRoad */
        bigEyeRoad?: (roadmap.IBigEyeRoad|null);

        /** Roadmap smallRoad */
        smallRoad?: (roadmap.ISmallRoad|null);

        /** Roadmap cockroachRoad */
        cockroachRoad?: (roadmap.ICockroachRoad|null);
    }

    /** Represents a Roadmap. */
    class Roadmap implements IRoadmap {

        /**
         * Constructs a new Roadmap.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IRoadmap);

        /** Roadmap header. */
        public header?: (foundation.IHeader|null);

        /** Roadmap beadPlate. */
        public beadPlate?: (roadmap.IBeadPlate|null);

        /** Roadmap bigRoad. */
        public bigRoad?: (roadmap.IBigRoad|null);

        /** Roadmap bigEyeRoad. */
        public bigEyeRoad?: (roadmap.IBigEyeRoad|null);

        /** Roadmap smallRoad. */
        public smallRoad?: (roadmap.ISmallRoad|null);

        /** Roadmap cockroachRoad. */
        public cockroachRoad?: (roadmap.ICockroachRoad|null);

        /**
         * Creates a new Roadmap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Roadmap instance
         */
        public static create(properties?: roadmap.IRoadmap): roadmap.Roadmap;

        /**
         * Encodes the specified Roadmap message. Does not implicitly {@link roadmap.Roadmap.verify|verify} messages.
         * @param message Roadmap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IRoadmap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Roadmap message, length delimited. Does not implicitly {@link roadmap.Roadmap.verify|verify} messages.
         * @param message Roadmap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IRoadmap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Roadmap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Roadmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.Roadmap;

        /**
         * Decodes a Roadmap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Roadmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.Roadmap;

        /**
         * Verifies a Roadmap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Roadmap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Roadmap
         */
        public static fromObject(object: { [k: string]: any }): roadmap.Roadmap;

        /**
         * Creates a plain object from a Roadmap message. Also converts values to other types if specified.
         * @param message Roadmap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.Roadmap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Roadmap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AskRoadCall. */
    interface IAskRoadCall {

        /** AskRoadCall header */
        header?: (foundation.IHeader|null);

        /** AskRoadCall block */
        block?: (roadmap.IBlock|null);
    }

    /** Represents an AskRoadCall. */
    class AskRoadCall implements IAskRoadCall {

        /**
         * Constructs a new AskRoadCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IAskRoadCall);

        /** AskRoadCall header. */
        public header?: (foundation.IHeader|null);

        /** AskRoadCall block. */
        public block?: (roadmap.IBlock|null);

        /**
         * Creates a new AskRoadCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AskRoadCall instance
         */
        public static create(properties?: roadmap.IAskRoadCall): roadmap.AskRoadCall;

        /**
         * Encodes the specified AskRoadCall message. Does not implicitly {@link roadmap.AskRoadCall.verify|verify} messages.
         * @param message AskRoadCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IAskRoadCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AskRoadCall message, length delimited. Does not implicitly {@link roadmap.AskRoadCall.verify|verify} messages.
         * @param message AskRoadCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IAskRoadCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AskRoadCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AskRoadCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.AskRoadCall;

        /**
         * Decodes an AskRoadCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AskRoadCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.AskRoadCall;

        /**
         * Verifies an AskRoadCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AskRoadCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AskRoadCall
         */
        public static fromObject(object: { [k: string]: any }): roadmap.AskRoadCall;

        /**
         * Creates a plain object from an AskRoadCall message. Also converts values to other types if specified.
         * @param message AskRoadCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.AskRoadCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AskRoadCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AskRoadRecall. */
    interface IAskRoadRecall {

        /** AskRoadRecall header */
        header?: (foundation.IHeader|null);

        /** AskRoadRecall bigEyeRoadNext */
        bigEyeRoadNext?: (roadmap.IBlock|null);

        /** AskRoadRecall smallRoadNext */
        smallRoadNext?: (roadmap.IBlock|null);

        /** AskRoadRecall cockroachRoadNext */
        cockroachRoadNext?: (roadmap.IBlock|null);

        /** AskRoadRecall askRoadCall */
        askRoadCall?: (roadmap.IAskRoadCall|null);
    }

    /** Represents an AskRoadRecall. */
    class AskRoadRecall implements IAskRoadRecall {

        /**
         * Constructs a new AskRoadRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IAskRoadRecall);

        /** AskRoadRecall header. */
        public header?: (foundation.IHeader|null);

        /** AskRoadRecall bigEyeRoadNext. */
        public bigEyeRoadNext?: (roadmap.IBlock|null);

        /** AskRoadRecall smallRoadNext. */
        public smallRoadNext?: (roadmap.IBlock|null);

        /** AskRoadRecall cockroachRoadNext. */
        public cockroachRoadNext?: (roadmap.IBlock|null);

        /** AskRoadRecall askRoadCall. */
        public askRoadCall?: (roadmap.IAskRoadCall|null);

        /**
         * Creates a new AskRoadRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AskRoadRecall instance
         */
        public static create(properties?: roadmap.IAskRoadRecall): roadmap.AskRoadRecall;

        /**
         * Encodes the specified AskRoadRecall message. Does not implicitly {@link roadmap.AskRoadRecall.verify|verify} messages.
         * @param message AskRoadRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IAskRoadRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AskRoadRecall message, length delimited. Does not implicitly {@link roadmap.AskRoadRecall.verify|verify} messages.
         * @param message AskRoadRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IAskRoadRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AskRoadRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AskRoadRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.AskRoadRecall;

        /**
         * Decodes an AskRoadRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AskRoadRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.AskRoadRecall;

        /**
         * Verifies an AskRoadRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AskRoadRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AskRoadRecall
         */
        public static fromObject(object: { [k: string]: any }): roadmap.AskRoadRecall;

        /**
         * Creates a plain object from an AskRoadRecall message. Also converts values to other types if specified.
         * @param message AskRoadRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.AskRoadRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AskRoadRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace route. */
export namespace route {

    /** URI enum. */
    enum URI {
        Default = 0,
        LoginCall = 1,
        LoginRecall = 2,
        LobbyInfo = 3,
        UserInfo = 4,
        TableJoinCall = 5,
        TableJoinRecall = 6,
        BroadcastJoinedPlayers = 1006,
        BetCall = 7,
        BetRecall = 8,
        BetResetCall = 9,
        BetResetRecall = 10,
        BetConfirmCall = 100,
        BetConfirmRecall = 101,
        BroadcastBetConfirmRecall = 102,
        BroadcastBetstatus = 110,
        Draw = 11,
        DealerGameResult = 12,
        BroadcastGameResult = 13,
        BetRoundStart = 14,
        BetRoundEnd = 15,
        BetRoundEndCall = 1501,
        BetRoundCountdown = 16,
        HeartbeatPing = 17,
        HeartbeatPong = 18,
        DealerRoundStartCall = 19,
        DealerRoundStartRecall = 20,
        DealerRoundEndCall = 21,
        DealerRoundEndRecall = 22,
        BroadcastDealerRoundEnd = 220,
        BetError = 23,
        GameStatus = 24,
        DealerGameStatus = 25,
        Roadmap = 26,
        WhiteCard = 27,
        AskRoadCall = 28,
        AskRoadRecall = 29,
        BroadcastAnnouncement = 30,
        BroadcastTotalPlayersOnline = 31,
        Kickout = 4000,
        kickoutwarn = 4001,
        Chat = 5000,
        BroadcastChat = 5001,
        DonateCall = 6000,
        DonateRecall = 6001,
        WatchcardNotificaion = 7000,
        WatchcardCall = 7001,
        WatchcardRecall = 7002,
        BroadcastWatchcardNotificaion = 7003,
        BroadcastWatchcardCall = 7004,
        HistoryCall = 8001,
        HistoryRecall = 8002,
        FlyCardCall = 8101,
        FlyCardRecall = 8102,
        BroadcastFlyCardRecall = 8103
    }
}

/** Namespace table. */
export namespace table {

    /** Properties of a Table. */
    interface ITable {

        /** Table betStatus */
        betStatus?: (bet.IBetStatus|null);

        /** Table streamingUrl */
        streamingUrl?: (table.IStreamingUrl|null);

        /** Table betList */
        betList?: (number[]|null);

        /** Table betRule */
        betRule?: (table.IBetRule|null);

        /** Table gameType */
        gameType?: (game.GameType|null);
    }

    /** Represents a Table. */
    class Table implements ITable {

        /**
         * Constructs a new Table.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.ITable);

        /** Table betStatus. */
        public betStatus?: (bet.IBetStatus|null);

        /** Table streamingUrl. */
        public streamingUrl?: (table.IStreamingUrl|null);

        /** Table betList. */
        public betList: number[];

        /** Table betRule. */
        public betRule?: (table.IBetRule|null);

        /** Table gameType. */
        public gameType: game.GameType;

        /**
         * Creates a new Table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Table instance
         */
        public static create(properties?: table.ITable): table.Table;

        /**
         * Encodes the specified Table message. Does not implicitly {@link table.Table.verify|verify} messages.
         * @param message Table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Table message, length delimited. Does not implicitly {@link table.Table.verify|verify} messages.
         * @param message Table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.Table;

        /**
         * Decodes a Table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.Table;

        /**
         * Verifies a Table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Table message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Table
         */
        public static fromObject(object: { [k: string]: any }): table.Table;

        /**
         * Creates a plain object from a Table message. Also converts values to other types if specified.
         * @param message Table
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Table to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TableJoinCall. */
    interface ITableJoinCall {

        /** TableJoinCall header */
        header?: (foundation.IHeader|null);

        /** TableJoinCall uuid */
        uuid?: (string|null);
    }

    /** Represents a TableJoinCall. */
    class TableJoinCall implements ITableJoinCall {

        /**
         * Constructs a new TableJoinCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.ITableJoinCall);

        /** TableJoinCall header. */
        public header?: (foundation.IHeader|null);

        /** TableJoinCall uuid. */
        public uuid: string;

        /**
         * Creates a new TableJoinCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableJoinCall instance
         */
        public static create(properties?: table.ITableJoinCall): table.TableJoinCall;

        /**
         * Encodes the specified TableJoinCall message. Does not implicitly {@link table.TableJoinCall.verify|verify} messages.
         * @param message TableJoinCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.ITableJoinCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableJoinCall message, length delimited. Does not implicitly {@link table.TableJoinCall.verify|verify} messages.
         * @param message TableJoinCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.ITableJoinCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableJoinCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableJoinCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.TableJoinCall;

        /**
         * Decodes a TableJoinCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableJoinCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.TableJoinCall;

        /**
         * Verifies a TableJoinCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableJoinCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableJoinCall
         */
        public static fromObject(object: { [k: string]: any }): table.TableJoinCall;

        /**
         * Creates a plain object from a TableJoinCall message. Also converts values to other types if specified.
         * @param message TableJoinCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.TableJoinCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableJoinCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TableJoinRecall. */
    interface ITableJoinRecall {

        /** TableJoinRecall header */
        header?: (foundation.IHeader|null);

        /** TableJoinRecall table */
        table?: (table.ITable|null);
    }

    /** Represents a TableJoinRecall. */
    class TableJoinRecall implements ITableJoinRecall {

        /**
         * Constructs a new TableJoinRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.ITableJoinRecall);

        /** TableJoinRecall header. */
        public header?: (foundation.IHeader|null);

        /** TableJoinRecall table. */
        public table?: (table.ITable|null);

        /**
         * Creates a new TableJoinRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableJoinRecall instance
         */
        public static create(properties?: table.ITableJoinRecall): table.TableJoinRecall;

        /**
         * Encodes the specified TableJoinRecall message. Does not implicitly {@link table.TableJoinRecall.verify|verify} messages.
         * @param message TableJoinRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.ITableJoinRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableJoinRecall message, length delimited. Does not implicitly {@link table.TableJoinRecall.verify|verify} messages.
         * @param message TableJoinRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.ITableJoinRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableJoinRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableJoinRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.TableJoinRecall;

        /**
         * Decodes a TableJoinRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableJoinRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.TableJoinRecall;

        /**
         * Verifies a TableJoinRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableJoinRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableJoinRecall
         */
        public static fromObject(object: { [k: string]: any }): table.TableJoinRecall;

        /**
         * Creates a plain object from a TableJoinRecall message. Also converts values to other types if specified.
         * @param message TableJoinRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.TableJoinRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableJoinRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastJoinedPlayers. */
    interface IBroadcastJoinedPlayers {

        /** BroadcastJoinedPlayers header */
        header?: (foundation.IHeader|null);

        /** BroadcastJoinedPlayers joinedPlayers */
        joinedPlayers?: (table.IJoinedPlayer[]|null);
    }

    /** Represents a BroadcastJoinedPlayers. */
    class BroadcastJoinedPlayers implements IBroadcastJoinedPlayers {

        /**
         * Constructs a new BroadcastJoinedPlayers.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.IBroadcastJoinedPlayers);

        /** BroadcastJoinedPlayers header. */
        public header?: (foundation.IHeader|null);

        /** BroadcastJoinedPlayers joinedPlayers. */
        public joinedPlayers: table.IJoinedPlayer[];

        /**
         * Creates a new BroadcastJoinedPlayers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastJoinedPlayers instance
         */
        public static create(properties?: table.IBroadcastJoinedPlayers): table.BroadcastJoinedPlayers;

        /**
         * Encodes the specified BroadcastJoinedPlayers message. Does not implicitly {@link table.BroadcastJoinedPlayers.verify|verify} messages.
         * @param message BroadcastJoinedPlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.IBroadcastJoinedPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastJoinedPlayers message, length delimited. Does not implicitly {@link table.BroadcastJoinedPlayers.verify|verify} messages.
         * @param message BroadcastJoinedPlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.IBroadcastJoinedPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastJoinedPlayers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastJoinedPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.BroadcastJoinedPlayers;

        /**
         * Decodes a BroadcastJoinedPlayers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastJoinedPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.BroadcastJoinedPlayers;

        /**
         * Verifies a BroadcastJoinedPlayers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastJoinedPlayers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastJoinedPlayers
         */
        public static fromObject(object: { [k: string]: any }): table.BroadcastJoinedPlayers;

        /**
         * Creates a plain object from a BroadcastJoinedPlayers message. Also converts values to other types if specified.
         * @param message BroadcastJoinedPlayers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.BroadcastJoinedPlayers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastJoinedPlayers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinedPlayer. */
    interface IJoinedPlayer {

        /** JoinedPlayer account */
        account?: (string|null);

        /** JoinedPlayer name */
        name?: (string|null);

        /** JoinedPlayer bets */
        bets?: (bet.IBetStatus|null);
    }

    /** Represents a JoinedPlayer. */
    class JoinedPlayer implements IJoinedPlayer {

        /**
         * Constructs a new JoinedPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.IJoinedPlayer);

        /** JoinedPlayer account. */
        public account: string;

        /** JoinedPlayer name. */
        public name: string;

        /** JoinedPlayer bets. */
        public bets?: (bet.IBetStatus|null);

        /**
         * Creates a new JoinedPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinedPlayer instance
         */
        public static create(properties?: table.IJoinedPlayer): table.JoinedPlayer;

        /**
         * Encodes the specified JoinedPlayer message. Does not implicitly {@link table.JoinedPlayer.verify|verify} messages.
         * @param message JoinedPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.IJoinedPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinedPlayer message, length delimited. Does not implicitly {@link table.JoinedPlayer.verify|verify} messages.
         * @param message JoinedPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.IJoinedPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinedPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.JoinedPlayer;

        /**
         * Decodes a JoinedPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.JoinedPlayer;

        /**
         * Verifies a JoinedPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinedPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinedPlayer
         */
        public static fromObject(object: { [k: string]: any }): table.JoinedPlayer;

        /**
         * Creates a plain object from a JoinedPlayer message. Also converts values to other types if specified.
         * @param message JoinedPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.JoinedPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinedPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StreamingUrl. */
    interface IStreamingUrl {

        /** StreamingUrl desktop */
        desktop?: (string|null);

        /** StreamingUrl moblie */
        moblie?: (string|null);
    }

    /** Represents a StreamingUrl. */
    class StreamingUrl implements IStreamingUrl {

        /**
         * Constructs a new StreamingUrl.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.IStreamingUrl);

        /** StreamingUrl desktop. */
        public desktop: string;

        /** StreamingUrl moblie. */
        public moblie: string;

        /**
         * Creates a new StreamingUrl instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StreamingUrl instance
         */
        public static create(properties?: table.IStreamingUrl): table.StreamingUrl;

        /**
         * Encodes the specified StreamingUrl message. Does not implicitly {@link table.StreamingUrl.verify|verify} messages.
         * @param message StreamingUrl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.IStreamingUrl, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StreamingUrl message, length delimited. Does not implicitly {@link table.StreamingUrl.verify|verify} messages.
         * @param message StreamingUrl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.IStreamingUrl, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StreamingUrl message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamingUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.StreamingUrl;

        /**
         * Decodes a StreamingUrl message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StreamingUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.StreamingUrl;

        /**
         * Verifies a StreamingUrl message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StreamingUrl message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StreamingUrl
         */
        public static fromObject(object: { [k: string]: any }): table.StreamingUrl;

        /**
         * Creates a plain object from a StreamingUrl message. Also converts values to other types if specified.
         * @param message StreamingUrl
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.StreamingUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StreamingUrl to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRule. */
    interface IBetRule {

        /** BetRule player */
        player?: (table.IRule|null);

        /** BetRule banker */
        banker?: (table.IRule|null);

        /** BetRule playerPair */
        playerPair?: (table.IRule|null);

        /** BetRule tie */
        tie?: (table.IRule|null);

        /** BetRule bankerPair */
        bankerPair?: (table.IRule|null);
    }

    /** Represents a BetRule. */
    class BetRule implements IBetRule {

        /**
         * Constructs a new BetRule.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.IBetRule);

        /** BetRule player. */
        public player?: (table.IRule|null);

        /** BetRule banker. */
        public banker?: (table.IRule|null);

        /** BetRule playerPair. */
        public playerPair?: (table.IRule|null);

        /** BetRule tie. */
        public tie?: (table.IRule|null);

        /** BetRule bankerPair. */
        public bankerPair?: (table.IRule|null);

        /**
         * Creates a new BetRule instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRule instance
         */
        public static create(properties?: table.IBetRule): table.BetRule;

        /**
         * Encodes the specified BetRule message. Does not implicitly {@link table.BetRule.verify|verify} messages.
         * @param message BetRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.IBetRule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRule message, length delimited. Does not implicitly {@link table.BetRule.verify|verify} messages.
         * @param message BetRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.IBetRule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRule message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.BetRule;

        /**
         * Decodes a BetRule message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.BetRule;

        /**
         * Verifies a BetRule message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRule message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRule
         */
        public static fromObject(object: { [k: string]: any }): table.BetRule;

        /**
         * Creates a plain object from a BetRule message. Also converts values to other types if specified.
         * @param message BetRule
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.BetRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRule to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Rule. */
    interface IRule {

        /** Rule max */
        max?: (number|null);

        /** Rule min */
        min?: (number|null);
    }

    /** Represents a Rule. */
    class Rule implements IRule {

        /**
         * Constructs a new Rule.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.IRule);

        /** Rule max. */
        public max: number;

        /** Rule min. */
        public min: number;

        /**
         * Creates a new Rule instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rule instance
         */
        public static create(properties?: table.IRule): table.Rule;

        /**
         * Encodes the specified Rule message. Does not implicitly {@link table.Rule.verify|verify} messages.
         * @param message Rule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.IRule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Rule message, length delimited. Does not implicitly {@link table.Rule.verify|verify} messages.
         * @param message Rule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.IRule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Rule message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.Rule;

        /**
         * Decodes a Rule message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.Rule;

        /**
         * Verifies a Rule message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Rule message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Rule
         */
        public static fromObject(object: { [k: string]: any }): table.Rule;

        /**
         * Creates a plain object from a Rule message. Also converts values to other types if specified.
         * @param message Rule
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.Rule, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Rule to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}