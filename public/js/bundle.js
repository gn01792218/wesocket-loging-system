/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const announcement = $root.announcement = (() => {

    /**
     * Namespace announcement.
     * @exports announcement
     * @namespace
     */
    const announcement = {};

    announcement.BroadcastAnnouncement = (function() {

        /**
         * Properties of a BroadcastAnnouncement.
         * @memberof announcement
         * @interface IBroadcastAnnouncement
         * @property {foundation.IHeader|null} [header] BroadcastAnnouncement header
         * @property {Array.<announcement.IAnnouncement>|null} [announcements] BroadcastAnnouncement announcements
         */

        /**
         * Constructs a new BroadcastAnnouncement.
         * @memberof announcement
         * @classdesc Represents a BroadcastAnnouncement.
         * @implements IBroadcastAnnouncement
         * @constructor
         * @param {announcement.IBroadcastAnnouncement=} [properties] Properties to set
         */
        function BroadcastAnnouncement(properties) {
            this.announcements = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastAnnouncement header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof announcement.BroadcastAnnouncement
         * @instance
         */
        BroadcastAnnouncement.prototype.header = null;

        /**
         * BroadcastAnnouncement announcements.
         * @member {Array.<announcement.IAnnouncement>} announcements
         * @memberof announcement.BroadcastAnnouncement
         * @instance
         */
        BroadcastAnnouncement.prototype.announcements = $util.emptyArray;

        /**
         * Creates a new BroadcastAnnouncement instance using the specified properties.
         * @function create
         * @memberof announcement.BroadcastAnnouncement
         * @static
         * @param {announcement.IBroadcastAnnouncement=} [properties] Properties to set
         * @returns {announcement.BroadcastAnnouncement} BroadcastAnnouncement instance
         */
        BroadcastAnnouncement.create = function create(properties) {
            return new BroadcastAnnouncement(properties);
        };

        /**
         * Encodes the specified BroadcastAnnouncement message. Does not implicitly {@link announcement.BroadcastAnnouncement.verify|verify} messages.
         * @function encode
         * @memberof announcement.BroadcastAnnouncement
         * @static
         * @param {announcement.IBroadcastAnnouncement} message BroadcastAnnouncement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastAnnouncement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.announcements != null && message.announcements.length)
                for (let i = 0; i < message.announcements.length; ++i)
                    $root.announcement.Announcement.encode(message.announcements[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BroadcastAnnouncement message, length delimited. Does not implicitly {@link announcement.BroadcastAnnouncement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof announcement.BroadcastAnnouncement
         * @static
         * @param {announcement.IBroadcastAnnouncement} message BroadcastAnnouncement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastAnnouncement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastAnnouncement message from the specified reader or buffer.
         * @function decode
         * @memberof announcement.BroadcastAnnouncement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {announcement.BroadcastAnnouncement} BroadcastAnnouncement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastAnnouncement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.announcement.BroadcastAnnouncement();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.announcements && message.announcements.length))
                        message.announcements = [];
                    message.announcements.push($root.announcement.Announcement.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastAnnouncement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof announcement.BroadcastAnnouncement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {announcement.BroadcastAnnouncement} BroadcastAnnouncement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastAnnouncement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastAnnouncement message.
         * @function verify
         * @memberof announcement.BroadcastAnnouncement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastAnnouncement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.announcements != null && message.hasOwnProperty("announcements")) {
                if (!Array.isArray(message.announcements))
                    return "announcements: array expected";
                for (let i = 0; i < message.announcements.length; ++i) {
                    let error = $root.announcement.Announcement.verify(message.announcements[i]);
                    if (error)
                        return "announcements." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BroadcastAnnouncement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof announcement.BroadcastAnnouncement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {announcement.BroadcastAnnouncement} BroadcastAnnouncement
         */
        BroadcastAnnouncement.fromObject = function fromObject(object) {
            if (object instanceof $root.announcement.BroadcastAnnouncement)
                return object;
            let message = new $root.announcement.BroadcastAnnouncement();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".announcement.BroadcastAnnouncement.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.announcements) {
                if (!Array.isArray(object.announcements))
                    throw TypeError(".announcement.BroadcastAnnouncement.announcements: array expected");
                message.announcements = [];
                for (let i = 0; i < object.announcements.length; ++i) {
                    if (typeof object.announcements[i] !== "object")
                        throw TypeError(".announcement.BroadcastAnnouncement.announcements: object expected");
                    message.announcements[i] = $root.announcement.Announcement.fromObject(object.announcements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastAnnouncement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof announcement.BroadcastAnnouncement
         * @static
         * @param {announcement.BroadcastAnnouncement} message BroadcastAnnouncement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastAnnouncement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.announcements = [];
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.announcements && message.announcements.length) {
                object.announcements = [];
                for (let j = 0; j < message.announcements.length; ++j)
                    object.announcements[j] = $root.announcement.Announcement.toObject(message.announcements[j], options);
            }
            return object;
        };

        /**
         * Converts this BroadcastAnnouncement to JSON.
         * @function toJSON
         * @memberof announcement.BroadcastAnnouncement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastAnnouncement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastAnnouncement;
    })();

    announcement.Announcement = (function() {

        /**
         * Properties of an Announcement.
         * @memberof announcement
         * @interface IAnnouncement
         * @property {string|null} [message] Announcement message
         * @property {string|null} [createAt] Announcement createAt
         */

        /**
         * Constructs a new Announcement.
         * @memberof announcement
         * @classdesc Represents an Announcement.
         * @implements IAnnouncement
         * @constructor
         * @param {announcement.IAnnouncement=} [properties] Properties to set
         */
        function Announcement(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Announcement message.
         * @member {string} message
         * @memberof announcement.Announcement
         * @instance
         */
        Announcement.prototype.message = "";

        /**
         * Announcement createAt.
         * @member {string} createAt
         * @memberof announcement.Announcement
         * @instance
         */
        Announcement.prototype.createAt = "";

        /**
         * Creates a new Announcement instance using the specified properties.
         * @function create
         * @memberof announcement.Announcement
         * @static
         * @param {announcement.IAnnouncement=} [properties] Properties to set
         * @returns {announcement.Announcement} Announcement instance
         */
        Announcement.create = function create(properties) {
            return new Announcement(properties);
        };

        /**
         * Encodes the specified Announcement message. Does not implicitly {@link announcement.Announcement.verify|verify} messages.
         * @function encode
         * @memberof announcement.Announcement
         * @static
         * @param {announcement.IAnnouncement} message Announcement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Announcement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.createAt != null && Object.hasOwnProperty.call(message, "createAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createAt);
            return writer;
        };

        /**
         * Encodes the specified Announcement message, length delimited. Does not implicitly {@link announcement.Announcement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof announcement.Announcement
         * @static
         * @param {announcement.IAnnouncement} message Announcement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Announcement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Announcement message from the specified reader or buffer.
         * @function decode
         * @memberof announcement.Announcement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {announcement.Announcement} Announcement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Announcement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.announcement.Announcement();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.createAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Announcement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof announcement.Announcement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {announcement.Announcement} Announcement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Announcement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Announcement message.
         * @function verify
         * @memberof announcement.Announcement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Announcement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (!$util.isString(message.createAt))
                    return "createAt: string expected";
            return null;
        };

        /**
         * Creates an Announcement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof announcement.Announcement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {announcement.Announcement} Announcement
         */
        Announcement.fromObject = function fromObject(object) {
            if (object instanceof $root.announcement.Announcement)
                return object;
            let message = new $root.announcement.Announcement();
            if (object.message != null)
                message.message = String(object.message);
            if (object.createAt != null)
                message.createAt = String(object.createAt);
            return message;
        };

        /**
         * Creates a plain object from an Announcement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof announcement.Announcement
         * @static
         * @param {announcement.Announcement} message Announcement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Announcement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.message = "";
                object.createAt = "";
            }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                object.createAt = message.createAt;
            return object;
        };

        /**
         * Converts this Announcement to JSON.
         * @function toJSON
         * @memberof announcement.Announcement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Announcement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Announcement;
    })();

    return announcement;
})();

export const auth = $root.auth = (() => {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    const auth = {};

    auth.LoginCall = (function() {

        /**
         * Properties of a LoginCall.
         * @memberof auth
         * @interface ILoginCall
         * @property {foundation.IHeader|null} [header] LoginCall header
         * @property {string|null} [token] LoginCall token
         */

        /**
         * Constructs a new LoginCall.
         * @memberof auth
         * @classdesc Represents a LoginCall.
         * @implements ILoginCall
         * @constructor
         * @param {auth.ILoginCall=} [properties] Properties to set
         */
        function LoginCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof auth.LoginCall
         * @instance
         */
        LoginCall.prototype.header = null;

        /**
         * LoginCall token.
         * @member {string} token
         * @memberof auth.LoginCall
         * @instance
         */
        LoginCall.prototype.token = "";

        /**
         * Creates a new LoginCall instance using the specified properties.
         * @function create
         * @memberof auth.LoginCall
         * @static
         * @param {auth.ILoginCall=} [properties] Properties to set
         * @returns {auth.LoginCall} LoginCall instance
         */
        LoginCall.create = function create(properties) {
            return new LoginCall(properties);
        };

        /**
         * Encodes the specified LoginCall message. Does not implicitly {@link auth.LoginCall.verify|verify} messages.
         * @function encode
         * @memberof auth.LoginCall
         * @static
         * @param {auth.ILoginCall} message LoginCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified LoginCall message, length delimited. Does not implicitly {@link auth.LoginCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.LoginCall
         * @static
         * @param {auth.ILoginCall} message LoginCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginCall message from the specified reader or buffer.
         * @function decode
         * @memberof auth.LoginCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.LoginCall} LoginCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.LoginCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.LoginCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.LoginCall} LoginCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginCall message.
         * @function verify
         * @memberof auth.LoginCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a LoginCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.LoginCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.LoginCall} LoginCall
         */
        LoginCall.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.LoginCall)
                return object;
            let message = new $root.auth.LoginCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".auth.LoginCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a LoginCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.LoginCall
         * @static
         * @param {auth.LoginCall} message LoginCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.token = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this LoginCall to JSON.
         * @function toJSON
         * @memberof auth.LoginCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginCall;
    })();

    auth.LoginRecall = (function() {

        /**
         * Properties of a LoginRecall.
         * @memberof auth
         * @interface ILoginRecall
         * @property {foundation.IHeader|null} [header] LoginRecall header
         * @property {number|null} [status] LoginRecall status
         */

        /**
         * Constructs a new LoginRecall.
         * @memberof auth
         * @classdesc Represents a LoginRecall.
         * @implements ILoginRecall
         * @constructor
         * @param {auth.ILoginRecall=} [properties] Properties to set
         */
        function LoginRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof auth.LoginRecall
         * @instance
         */
        LoginRecall.prototype.header = null;

        /**
         * LoginRecall status.
         * @member {number} status
         * @memberof auth.LoginRecall
         * @instance
         */
        LoginRecall.prototype.status = 0;

        /**
         * Creates a new LoginRecall instance using the specified properties.
         * @function create
         * @memberof auth.LoginRecall
         * @static
         * @param {auth.ILoginRecall=} [properties] Properties to set
         * @returns {auth.LoginRecall} LoginRecall instance
         */
        LoginRecall.create = function create(properties) {
            return new LoginRecall(properties);
        };

        /**
         * Encodes the specified LoginRecall message. Does not implicitly {@link auth.LoginRecall.verify|verify} messages.
         * @function encode
         * @memberof auth.LoginRecall
         * @static
         * @param {auth.ILoginRecall} message LoginRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified LoginRecall message, length delimited. Does not implicitly {@link auth.LoginRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.LoginRecall
         * @static
         * @param {auth.ILoginRecall} message LoginRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRecall message from the specified reader or buffer.
         * @function decode
         * @memberof auth.LoginRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.LoginRecall} LoginRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.LoginRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.LoginRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.LoginRecall} LoginRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRecall message.
         * @function verify
         * @memberof auth.LoginRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a LoginRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.LoginRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.LoginRecall} LoginRecall
         */
        LoginRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.LoginRecall)
                return object;
            let message = new $root.auth.LoginRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".auth.LoginRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.LoginRecall
         * @static
         * @param {auth.LoginRecall} message LoginRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.status = 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this LoginRecall to JSON.
         * @function toJSON
         * @memberof auth.LoginRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRecall;
    })();

    auth.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof auth
         * @interface IUserInfo
         * @property {foundation.IHeader|null} [header] UserInfo header
         * @property {auth.IUser|null} [user] UserInfo user
         */

        /**
         * Constructs a new UserInfo.
         * @memberof auth
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {auth.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.header = null;

        /**
         * UserInfo user.
         * @member {auth.IUser|null|undefined} user
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.user = null;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof auth.UserInfo
         * @static
         * @param {auth.IUserInfo=} [properties] Properties to set
         * @returns {auth.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof auth.UserInfo
         * @static
         * @param {auth.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.auth.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.UserInfo
         * @static
         * @param {auth.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof auth.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.UserInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.user = $root.auth.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof auth.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.user != null && message.hasOwnProperty("user")) {
                let error = $root.auth.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.UserInfo)
                return object;
            let message = new $root.auth.UserInfo();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".auth.UserInfo.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".auth.UserInfo.user: object expected");
                message.user = $root.auth.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.UserInfo
         * @static
         * @param {auth.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.user = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.auth.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof auth.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    auth.User = (function() {

        /**
         * Properties of a User.
         * @memberof auth
         * @interface IUser
         * @property {string|null} [name] User name
         * @property {number|null} [wallet] User wallet
         * @property {number|null} [totalValidBets] User totalValidBets
         */

        /**
         * Constructs a new User.
         * @memberof auth
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {auth.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User name.
         * @member {string} name
         * @memberof auth.User
         * @instance
         */
        User.prototype.name = "";

        /**
         * User wallet.
         * @member {number} wallet
         * @memberof auth.User
         * @instance
         */
        User.prototype.wallet = 0;

        /**
         * User totalValidBets.
         * @member {number} totalValidBets
         * @memberof auth.User
         * @instance
         */
        User.prototype.totalValidBets = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof auth.User
         * @static
         * @param {auth.IUser=} [properties] Properties to set
         * @returns {auth.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link auth.User.verify|verify} messages.
         * @function encode
         * @memberof auth.User
         * @static
         * @param {auth.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.wallet != null && Object.hasOwnProperty.call(message, "wallet"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.wallet);
            if (message.totalValidBets != null && Object.hasOwnProperty.call(message, "totalValidBets"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.totalValidBets);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link auth.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.User
         * @static
         * @param {auth.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof auth.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.wallet = reader.double();
                    break;
                case 3:
                    message.totalValidBets = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof auth.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.wallet != null && message.hasOwnProperty("wallet"))
                if (typeof message.wallet !== "number")
                    return "wallet: number expected";
            if (message.totalValidBets != null && message.hasOwnProperty("totalValidBets"))
                if (typeof message.totalValidBets !== "number")
                    return "totalValidBets: number expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.User)
                return object;
            let message = new $root.auth.User();
            if (object.name != null)
                message.name = String(object.name);
            if (object.wallet != null)
                message.wallet = Number(object.wallet);
            if (object.totalValidBets != null)
                message.totalValidBets = Number(object.totalValidBets);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.User
         * @static
         * @param {auth.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.wallet = 0;
                object.totalValidBets = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.wallet != null && message.hasOwnProperty("wallet"))
                object.wallet = options.json && !isFinite(message.wallet) ? String(message.wallet) : message.wallet;
            if (message.totalValidBets != null && message.hasOwnProperty("totalValidBets"))
                object.totalValidBets = options.json && !isFinite(message.totalValidBets) ? String(message.totalValidBets) : message.totalValidBets;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof auth.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    return auth;
})();

export const bet = $root.bet = (() => {

    /**
     * Namespace bet.
     * @exports bet
     * @namespace
     */
    const bet = {};

    /**
     * Error enum.
     * @name bet.Error
     * @enum {number}
     * @property {number} ErrorDefault=0 ErrorDefault value
     * @property {number} BetTimeNotInvlid=1 BetTimeNotInvlid value
     * @property {number} BetIndexInvalid=2 BetIndexInvalid value
     * @property {number} BetAreaInvalid=3 BetAreaInvalid value
     * @property {number} ReachMaxLimit=4 ReachMaxLimit value
     * @property {number} RoundNotFound=5 RoundNotFound value
     * @property {number} NoEnoughWallet=6 NoEnoughWallet value
     * @property {number} AlreadyConfirmed=7 AlreadyConfirmed value
     * @property {number} PermissionDeined=8 PermissionDeined value
     */
    bet.Error = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ErrorDefault"] = 0;
        values[valuesById[1] = "BetTimeNotInvlid"] = 1;
        values[valuesById[2] = "BetIndexInvalid"] = 2;
        values[valuesById[3] = "BetAreaInvalid"] = 3;
        values[valuesById[4] = "ReachMaxLimit"] = 4;
        values[valuesById[5] = "RoundNotFound"] = 5;
        values[valuesById[6] = "NoEnoughWallet"] = 6;
        values[valuesById[7] = "AlreadyConfirmed"] = 7;
        values[valuesById[8] = "PermissionDeined"] = 8;
        return values;
    })();

    /**
     * BetArea enum.
     * @name bet.BetArea
     * @enum {number}
     * @property {number} BetAreaDefault=0 BetAreaDefault value
     * @property {number} Player=1 Player value
     * @property {number} Banker=2 Banker value
     * @property {number} PlayerPair=3 PlayerPair value
     * @property {number} Tie=4 Tie value
     * @property {number} BankerPair=5 BankerPair value
     */
    bet.BetArea = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BetAreaDefault"] = 0;
        values[valuesById[1] = "Player"] = 1;
        values[valuesById[2] = "Banker"] = 2;
        values[valuesById[3] = "PlayerPair"] = 3;
        values[valuesById[4] = "Tie"] = 4;
        values[valuesById[5] = "BankerPair"] = 5;
        return values;
    })();

    bet.BetStatus = (function() {

        /**
         * Properties of a BetStatus.
         * @memberof bet
         * @interface IBetStatus
         * @property {foundation.IHeader|null} [header] BetStatus header
         * @property {number|null} [Banker] BetStatus Banker
         * @property {number|null} [Player] BetStatus Player
         * @property {number|null} [BankerPair] BetStatus BankerPair
         * @property {number|null} [Tie] BetStatus Tie
         * @property {number|null} [PlayerPair] BetStatus PlayerPair
         */

        /**
         * Constructs a new BetStatus.
         * @memberof bet
         * @classdesc Represents a BetStatus.
         * @implements IBetStatus
         * @constructor
         * @param {bet.IBetStatus=} [properties] Properties to set
         */
        function BetStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetStatus header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BetStatus
         * @instance
         */
        BetStatus.prototype.header = null;

        /**
         * BetStatus Banker.
         * @member {number} Banker
         * @memberof bet.BetStatus
         * @instance
         */
        BetStatus.prototype.Banker = 0;

        /**
         * BetStatus Player.
         * @member {number} Player
         * @memberof bet.BetStatus
         * @instance
         */
        BetStatus.prototype.Player = 0;

        /**
         * BetStatus BankerPair.
         * @member {number} BankerPair
         * @memberof bet.BetStatus
         * @instance
         */
        BetStatus.prototype.BankerPair = 0;

        /**
         * BetStatus Tie.
         * @member {number} Tie
         * @memberof bet.BetStatus
         * @instance
         */
        BetStatus.prototype.Tie = 0;

        /**
         * BetStatus PlayerPair.
         * @member {number} PlayerPair
         * @memberof bet.BetStatus
         * @instance
         */
        BetStatus.prototype.PlayerPair = 0;

        /**
         * Creates a new BetStatus instance using the specified properties.
         * @function create
         * @memberof bet.BetStatus
         * @static
         * @param {bet.IBetStatus=} [properties] Properties to set
         * @returns {bet.BetStatus} BetStatus instance
         */
        BetStatus.create = function create(properties) {
            return new BetStatus(properties);
        };

        /**
         * Encodes the specified BetStatus message. Does not implicitly {@link bet.BetStatus.verify|verify} messages.
         * @function encode
         * @memberof bet.BetStatus
         * @static
         * @param {bet.IBetStatus} message BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Banker != null && Object.hasOwnProperty.call(message, "Banker"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.Banker);
            if (message.Player != null && Object.hasOwnProperty.call(message, "Player"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.Player);
            if (message.BankerPair != null && Object.hasOwnProperty.call(message, "BankerPair"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.BankerPair);
            if (message.Tie != null && Object.hasOwnProperty.call(message, "Tie"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.Tie);
            if (message.PlayerPair != null && Object.hasOwnProperty.call(message, "PlayerPair"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.PlayerPair);
            return writer;
        };

        /**
         * Encodes the specified BetStatus message, length delimited. Does not implicitly {@link bet.BetStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetStatus
         * @static
         * @param {bet.IBetStatus} message BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetStatus message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetStatus} BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Banker = reader.double();
                    break;
                case 3:
                    message.Player = reader.double();
                    break;
                case 4:
                    message.BankerPair = reader.double();
                    break;
                case 5:
                    message.Tie = reader.double();
                    break;
                case 6:
                    message.PlayerPair = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetStatus} BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetStatus message.
         * @function verify
         * @memberof bet.BetStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.Banker != null && message.hasOwnProperty("Banker"))
                if (typeof message.Banker !== "number")
                    return "Banker: number expected";
            if (message.Player != null && message.hasOwnProperty("Player"))
                if (typeof message.Player !== "number")
                    return "Player: number expected";
            if (message.BankerPair != null && message.hasOwnProperty("BankerPair"))
                if (typeof message.BankerPair !== "number")
                    return "BankerPair: number expected";
            if (message.Tie != null && message.hasOwnProperty("Tie"))
                if (typeof message.Tie !== "number")
                    return "Tie: number expected";
            if (message.PlayerPair != null && message.hasOwnProperty("PlayerPair"))
                if (typeof message.PlayerPair !== "number")
                    return "PlayerPair: number expected";
            return null;
        };

        /**
         * Creates a BetStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetStatus} BetStatus
         */
        BetStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetStatus)
                return object;
            let message = new $root.bet.BetStatus();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BetStatus.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.Banker != null)
                message.Banker = Number(object.Banker);
            if (object.Player != null)
                message.Player = Number(object.Player);
            if (object.BankerPair != null)
                message.BankerPair = Number(object.BankerPair);
            if (object.Tie != null)
                message.Tie = Number(object.Tie);
            if (object.PlayerPair != null)
                message.PlayerPair = Number(object.PlayerPair);
            return message;
        };

        /**
         * Creates a plain object from a BetStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetStatus
         * @static
         * @param {bet.BetStatus} message BetStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.Banker = 0;
                object.Player = 0;
                object.BankerPair = 0;
                object.Tie = 0;
                object.PlayerPair = 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.Banker != null && message.hasOwnProperty("Banker"))
                object.Banker = options.json && !isFinite(message.Banker) ? String(message.Banker) : message.Banker;
            if (message.Player != null && message.hasOwnProperty("Player"))
                object.Player = options.json && !isFinite(message.Player) ? String(message.Player) : message.Player;
            if (message.BankerPair != null && message.hasOwnProperty("BankerPair"))
                object.BankerPair = options.json && !isFinite(message.BankerPair) ? String(message.BankerPair) : message.BankerPair;
            if (message.Tie != null && message.hasOwnProperty("Tie"))
                object.Tie = options.json && !isFinite(message.Tie) ? String(message.Tie) : message.Tie;
            if (message.PlayerPair != null && message.hasOwnProperty("PlayerPair"))
                object.PlayerPair = options.json && !isFinite(message.PlayerPair) ? String(message.PlayerPair) : message.PlayerPair;
            return object;
        };

        /**
         * Converts this BetStatus to JSON.
         * @function toJSON
         * @memberof bet.BetStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetStatus;
    })();

    bet.BetCall = (function() {

        /**
         * Properties of a BetCall.
         * @memberof bet
         * @interface IBetCall
         * @property {foundation.IHeader|null} [header] BetCall header
         * @property {string|null} [gameUuid] BetCall gameUuid
         * @property {number|null} [betIndex] BetCall betIndex
         * @property {bet.BetArea|null} [betArea] BetCall betArea
         */

        /**
         * Constructs a new BetCall.
         * @memberof bet
         * @classdesc Represents a BetCall.
         * @implements IBetCall
         * @constructor
         * @param {bet.IBetCall=} [properties] Properties to set
         */
        function BetCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BetCall
         * @instance
         */
        BetCall.prototype.header = null;

        /**
         * BetCall gameUuid.
         * @member {string} gameUuid
         * @memberof bet.BetCall
         * @instance
         */
        BetCall.prototype.gameUuid = "";

        /**
         * BetCall betIndex.
         * @member {number} betIndex
         * @memberof bet.BetCall
         * @instance
         */
        BetCall.prototype.betIndex = 0;

        /**
         * BetCall betArea.
         * @member {bet.BetArea} betArea
         * @memberof bet.BetCall
         * @instance
         */
        BetCall.prototype.betArea = 0;

        /**
         * Creates a new BetCall instance using the specified properties.
         * @function create
         * @memberof bet.BetCall
         * @static
         * @param {bet.IBetCall=} [properties] Properties to set
         * @returns {bet.BetCall} BetCall instance
         */
        BetCall.create = function create(properties) {
            return new BetCall(properties);
        };

        /**
         * Encodes the specified BetCall message. Does not implicitly {@link bet.BetCall.verify|verify} messages.
         * @function encode
         * @memberof bet.BetCall
         * @static
         * @param {bet.IBetCall} message BetCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameUuid);
            if (message.betIndex != null && Object.hasOwnProperty.call(message, "betIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.betIndex);
            if (message.betArea != null && Object.hasOwnProperty.call(message, "betArea"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.betArea);
            return writer;
        };

        /**
         * Encodes the specified BetCall message, length delimited. Does not implicitly {@link bet.BetCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetCall
         * @static
         * @param {bet.IBetCall} message BetCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetCall message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetCall} BetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameUuid = reader.string();
                    break;
                case 3:
                    message.betIndex = reader.int32();
                    break;
                case 4:
                    message.betArea = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetCall} BetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetCall message.
         * @function verify
         * @memberof bet.BetCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            if (message.betIndex != null && message.hasOwnProperty("betIndex"))
                if (!$util.isInteger(message.betIndex))
                    return "betIndex: integer expected";
            if (message.betArea != null && message.hasOwnProperty("betArea"))
                switch (message.betArea) {
                default:
                    return "betArea: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };

        /**
         * Creates a BetCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetCall} BetCall
         */
        BetCall.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetCall)
                return object;
            let message = new $root.bet.BetCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BetCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            if (object.betIndex != null)
                message.betIndex = object.betIndex | 0;
            switch (object.betArea) {
            case "BetAreaDefault":
            case 0:
                message.betArea = 0;
                break;
            case "Player":
            case 1:
                message.betArea = 1;
                break;
            case "Banker":
            case 2:
                message.betArea = 2;
                break;
            case "PlayerPair":
            case 3:
                message.betArea = 3;
                break;
            case "Tie":
            case 4:
                message.betArea = 4;
                break;
            case "BankerPair":
            case 5:
                message.betArea = 5;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a BetCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetCall
         * @static
         * @param {bet.BetCall} message BetCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.gameUuid = "";
                object.betIndex = 0;
                object.betArea = options.enums === String ? "BetAreaDefault" : 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            if (message.betIndex != null && message.hasOwnProperty("betIndex"))
                object.betIndex = message.betIndex;
            if (message.betArea != null && message.hasOwnProperty("betArea"))
                object.betArea = options.enums === String ? $root.bet.BetArea[message.betArea] : message.betArea;
            return object;
        };

        /**
         * Converts this BetCall to JSON.
         * @function toJSON
         * @memberof bet.BetCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetCall;
    })();

    bet.BetRecall = (function() {

        /**
         * Properties of a BetRecall.
         * @memberof bet
         * @interface IBetRecall
         * @property {foundation.IHeader|null} [header] BetRecall header
         * @property {number|null} [result] BetRecall result
         * @property {number|null} [totalBets] BetRecall totalBets
         * @property {bet.IBetStatus|null} [betStatus] BetRecall betStatus
         * @property {bet.IBetError|null} [betError] BetRecall betError
         * @property {boolean|null} [isConfirmed] BetRecall isConfirmed
         */

        /**
         * Constructs a new BetRecall.
         * @memberof bet
         * @classdesc Represents a BetRecall.
         * @implements IBetRecall
         * @constructor
         * @param {bet.IBetRecall=} [properties] Properties to set
         */
        function BetRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BetRecall
         * @instance
         */
        BetRecall.prototype.header = null;

        /**
         * BetRecall result.
         * @member {number} result
         * @memberof bet.BetRecall
         * @instance
         */
        BetRecall.prototype.result = 0;

        /**
         * BetRecall totalBets.
         * @member {number} totalBets
         * @memberof bet.BetRecall
         * @instance
         */
        BetRecall.prototype.totalBets = 0;

        /**
         * BetRecall betStatus.
         * @member {bet.IBetStatus|null|undefined} betStatus
         * @memberof bet.BetRecall
         * @instance
         */
        BetRecall.prototype.betStatus = null;

        /**
         * BetRecall betError.
         * @member {bet.IBetError|null|undefined} betError
         * @memberof bet.BetRecall
         * @instance
         */
        BetRecall.prototype.betError = null;

        /**
         * BetRecall isConfirmed.
         * @member {boolean} isConfirmed
         * @memberof bet.BetRecall
         * @instance
         */
        BetRecall.prototype.isConfirmed = false;

        /**
         * Creates a new BetRecall instance using the specified properties.
         * @function create
         * @memberof bet.BetRecall
         * @static
         * @param {bet.IBetRecall=} [properties] Properties to set
         * @returns {bet.BetRecall} BetRecall instance
         */
        BetRecall.create = function create(properties) {
            return new BetRecall(properties);
        };

        /**
         * Encodes the specified BetRecall message. Does not implicitly {@link bet.BetRecall.verify|verify} messages.
         * @function encode
         * @memberof bet.BetRecall
         * @static
         * @param {bet.IBetRecall} message BetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.totalBets != null && Object.hasOwnProperty.call(message, "totalBets"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.totalBets);
            if (message.betStatus != null && Object.hasOwnProperty.call(message, "betStatus"))
                $root.bet.BetStatus.encode(message.betStatus, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.betError != null && Object.hasOwnProperty.call(message, "betError"))
                $root.bet.BetError.encode(message.betError, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.isConfirmed != null && Object.hasOwnProperty.call(message, "isConfirmed"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isConfirmed);
            return writer;
        };

        /**
         * Encodes the specified BetRecall message, length delimited. Does not implicitly {@link bet.BetRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetRecall
         * @static
         * @param {bet.IBetRecall} message BetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRecall message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetRecall} BetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.totalBets = reader.double();
                    break;
                case 4:
                    message.betStatus = $root.bet.BetStatus.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.betError = $root.bet.BetError.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.isConfirmed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetRecall} BetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRecall message.
         * @function verify
         * @memberof bet.BetRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.totalBets != null && message.hasOwnProperty("totalBets"))
                if (typeof message.totalBets !== "number")
                    return "totalBets: number expected";
            if (message.betStatus != null && message.hasOwnProperty("betStatus")) {
                let error = $root.bet.BetStatus.verify(message.betStatus);
                if (error)
                    return "betStatus." + error;
            }
            if (message.betError != null && message.hasOwnProperty("betError")) {
                let error = $root.bet.BetError.verify(message.betError);
                if (error)
                    return "betError." + error;
            }
            if (message.isConfirmed != null && message.hasOwnProperty("isConfirmed"))
                if (typeof message.isConfirmed !== "boolean")
                    return "isConfirmed: boolean expected";
            return null;
        };

        /**
         * Creates a BetRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetRecall} BetRecall
         */
        BetRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetRecall)
                return object;
            let message = new $root.bet.BetRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BetRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.result != null)
                message.result = object.result | 0;
            if (object.totalBets != null)
                message.totalBets = Number(object.totalBets);
            if (object.betStatus != null) {
                if (typeof object.betStatus !== "object")
                    throw TypeError(".bet.BetRecall.betStatus: object expected");
                message.betStatus = $root.bet.BetStatus.fromObject(object.betStatus);
            }
            if (object.betError != null) {
                if (typeof object.betError !== "object")
                    throw TypeError(".bet.BetRecall.betError: object expected");
                message.betError = $root.bet.BetError.fromObject(object.betError);
            }
            if (object.isConfirmed != null)
                message.isConfirmed = Boolean(object.isConfirmed);
            return message;
        };

        /**
         * Creates a plain object from a BetRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetRecall
         * @static
         * @param {bet.BetRecall} message BetRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.result = 0;
                object.totalBets = 0;
                object.betStatus = null;
                object.betError = null;
                object.isConfirmed = false;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.totalBets != null && message.hasOwnProperty("totalBets"))
                object.totalBets = options.json && !isFinite(message.totalBets) ? String(message.totalBets) : message.totalBets;
            if (message.betStatus != null && message.hasOwnProperty("betStatus"))
                object.betStatus = $root.bet.BetStatus.toObject(message.betStatus, options);
            if (message.betError != null && message.hasOwnProperty("betError"))
                object.betError = $root.bet.BetError.toObject(message.betError, options);
            if (message.isConfirmed != null && message.hasOwnProperty("isConfirmed"))
                object.isConfirmed = message.isConfirmed;
            return object;
        };

        /**
         * Converts this BetRecall to JSON.
         * @function toJSON
         * @memberof bet.BetRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRecall;
    })();

    bet.BetResetCall = (function() {

        /**
         * Properties of a BetResetCall.
         * @memberof bet
         * @interface IBetResetCall
         * @property {foundation.IHeader|null} [header] BetResetCall header
         * @property {string|null} [gameUuid] BetResetCall gameUuid
         */

        /**
         * Constructs a new BetResetCall.
         * @memberof bet
         * @classdesc Represents a BetResetCall.
         * @implements IBetResetCall
         * @constructor
         * @param {bet.IBetResetCall=} [properties] Properties to set
         */
        function BetResetCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetResetCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BetResetCall
         * @instance
         */
        BetResetCall.prototype.header = null;

        /**
         * BetResetCall gameUuid.
         * @member {string} gameUuid
         * @memberof bet.BetResetCall
         * @instance
         */
        BetResetCall.prototype.gameUuid = "";

        /**
         * Creates a new BetResetCall instance using the specified properties.
         * @function create
         * @memberof bet.BetResetCall
         * @static
         * @param {bet.IBetResetCall=} [properties] Properties to set
         * @returns {bet.BetResetCall} BetResetCall instance
         */
        BetResetCall.create = function create(properties) {
            return new BetResetCall(properties);
        };

        /**
         * Encodes the specified BetResetCall message. Does not implicitly {@link bet.BetResetCall.verify|verify} messages.
         * @function encode
         * @memberof bet.BetResetCall
         * @static
         * @param {bet.IBetResetCall} message BetResetCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResetCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameUuid);
            return writer;
        };

        /**
         * Encodes the specified BetResetCall message, length delimited. Does not implicitly {@link bet.BetResetCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetResetCall
         * @static
         * @param {bet.IBetResetCall} message BetResetCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResetCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetResetCall message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetResetCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetResetCall} BetResetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResetCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetResetCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameUuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetResetCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetResetCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetResetCall} BetResetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResetCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetResetCall message.
         * @function verify
         * @memberof bet.BetResetCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetResetCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            return null;
        };

        /**
         * Creates a BetResetCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetResetCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetResetCall} BetResetCall
         */
        BetResetCall.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetResetCall)
                return object;
            let message = new $root.bet.BetResetCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BetResetCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            return message;
        };

        /**
         * Creates a plain object from a BetResetCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetResetCall
         * @static
         * @param {bet.BetResetCall} message BetResetCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetResetCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.gameUuid = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            return object;
        };

        /**
         * Converts this BetResetCall to JSON.
         * @function toJSON
         * @memberof bet.BetResetCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetResetCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetResetCall;
    })();

    bet.BetResetRecall = (function() {

        /**
         * Properties of a BetResetRecall.
         * @memberof bet
         * @interface IBetResetRecall
         * @property {foundation.IHeader|null} [header] BetResetRecall header
         * @property {number|null} [result] BetResetRecall result
         * @property {number|null} [totalBets] BetResetRecall totalBets
         * @property {bet.IBetStatus|null} [betStatus] BetResetRecall betStatus
         */

        /**
         * Constructs a new BetResetRecall.
         * @memberof bet
         * @classdesc Represents a BetResetRecall.
         * @implements IBetResetRecall
         * @constructor
         * @param {bet.IBetResetRecall=} [properties] Properties to set
         */
        function BetResetRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetResetRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BetResetRecall
         * @instance
         */
        BetResetRecall.prototype.header = null;

        /**
         * BetResetRecall result.
         * @member {number} result
         * @memberof bet.BetResetRecall
         * @instance
         */
        BetResetRecall.prototype.result = 0;

        /**
         * BetResetRecall totalBets.
         * @member {number} totalBets
         * @memberof bet.BetResetRecall
         * @instance
         */
        BetResetRecall.prototype.totalBets = 0;

        /**
         * BetResetRecall betStatus.
         * @member {bet.IBetStatus|null|undefined} betStatus
         * @memberof bet.BetResetRecall
         * @instance
         */
        BetResetRecall.prototype.betStatus = null;

        /**
         * Creates a new BetResetRecall instance using the specified properties.
         * @function create
         * @memberof bet.BetResetRecall
         * @static
         * @param {bet.IBetResetRecall=} [properties] Properties to set
         * @returns {bet.BetResetRecall} BetResetRecall instance
         */
        BetResetRecall.create = function create(properties) {
            return new BetResetRecall(properties);
        };

        /**
         * Encodes the specified BetResetRecall message. Does not implicitly {@link bet.BetResetRecall.verify|verify} messages.
         * @function encode
         * @memberof bet.BetResetRecall
         * @static
         * @param {bet.IBetResetRecall} message BetResetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResetRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.totalBets != null && Object.hasOwnProperty.call(message, "totalBets"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.totalBets);
            if (message.betStatus != null && Object.hasOwnProperty.call(message, "betStatus"))
                $root.bet.BetStatus.encode(message.betStatus, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BetResetRecall message, length delimited. Does not implicitly {@link bet.BetResetRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetResetRecall
         * @static
         * @param {bet.IBetResetRecall} message BetResetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResetRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetResetRecall message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetResetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetResetRecall} BetResetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResetRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetResetRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.totalBets = reader.double();
                    break;
                case 4:
                    message.betStatus = $root.bet.BetStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetResetRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetResetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetResetRecall} BetResetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResetRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetResetRecall message.
         * @function verify
         * @memberof bet.BetResetRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetResetRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.totalBets != null && message.hasOwnProperty("totalBets"))
                if (typeof message.totalBets !== "number")
                    return "totalBets: number expected";
            if (message.betStatus != null && message.hasOwnProperty("betStatus")) {
                let error = $root.bet.BetStatus.verify(message.betStatus);
                if (error)
                    return "betStatus." + error;
            }
            return null;
        };

        /**
         * Creates a BetResetRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetResetRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetResetRecall} BetResetRecall
         */
        BetResetRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetResetRecall)
                return object;
            let message = new $root.bet.BetResetRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BetResetRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.result != null)
                message.result = object.result | 0;
            if (object.totalBets != null)
                message.totalBets = Number(object.totalBets);
            if (object.betStatus != null) {
                if (typeof object.betStatus !== "object")
                    throw TypeError(".bet.BetResetRecall.betStatus: object expected");
                message.betStatus = $root.bet.BetStatus.fromObject(object.betStatus);
            }
            return message;
        };

        /**
         * Creates a plain object from a BetResetRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetResetRecall
         * @static
         * @param {bet.BetResetRecall} message BetResetRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetResetRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.result = 0;
                object.totalBets = 0;
                object.betStatus = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.totalBets != null && message.hasOwnProperty("totalBets"))
                object.totalBets = options.json && !isFinite(message.totalBets) ? String(message.totalBets) : message.totalBets;
            if (message.betStatus != null && message.hasOwnProperty("betStatus"))
                object.betStatus = $root.bet.BetStatus.toObject(message.betStatus, options);
            return object;
        };

        /**
         * Converts this BetResetRecall to JSON.
         * @function toJSON
         * @memberof bet.BetResetRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetResetRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetResetRecall;
    })();

    bet.BetError = (function() {

        /**
         * Properties of a BetError.
         * @memberof bet
         * @interface IBetError
         * @property {foundation.IHeader|null} [header] BetError header
         * @property {bet.Error|null} [error] BetError error
         * @property {string|null} [errorMessage] BetError errorMessage
         */

        /**
         * Constructs a new BetError.
         * @memberof bet
         * @classdesc Represents a BetError.
         * @implements IBetError
         * @constructor
         * @param {bet.IBetError=} [properties] Properties to set
         */
        function BetError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetError header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BetError
         * @instance
         */
        BetError.prototype.header = null;

        /**
         * BetError error.
         * @member {bet.Error} error
         * @memberof bet.BetError
         * @instance
         */
        BetError.prototype.error = 0;

        /**
         * BetError errorMessage.
         * @member {string} errorMessage
         * @memberof bet.BetError
         * @instance
         */
        BetError.prototype.errorMessage = "";

        /**
         * Creates a new BetError instance using the specified properties.
         * @function create
         * @memberof bet.BetError
         * @static
         * @param {bet.IBetError=} [properties] Properties to set
         * @returns {bet.BetError} BetError instance
         */
        BetError.create = function create(properties) {
            return new BetError(properties);
        };

        /**
         * Encodes the specified BetError message. Does not implicitly {@link bet.BetError.verify|verify} messages.
         * @function encode
         * @memberof bet.BetError
         * @static
         * @param {bet.IBetError} message BetError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.error);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified BetError message, length delimited. Does not implicitly {@link bet.BetError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetError
         * @static
         * @param {bet.IBetError} message BetError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetError message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetError} BetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.error = reader.int32();
                    break;
                case 3:
                    message.errorMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetError} BetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetError message.
         * @function verify
         * @memberof bet.BetError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates a BetError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetError} BetError
         */
        BetError.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetError)
                return object;
            let message = new $root.bet.BetError();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BetError.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            switch (object.error) {
            case "ErrorDefault":
            case 0:
                message.error = 0;
                break;
            case "BetTimeNotInvlid":
            case 1:
                message.error = 1;
                break;
            case "BetIndexInvalid":
            case 2:
                message.error = 2;
                break;
            case "BetAreaInvalid":
            case 3:
                message.error = 3;
                break;
            case "ReachMaxLimit":
            case 4:
                message.error = 4;
                break;
            case "RoundNotFound":
            case 5:
                message.error = 5;
                break;
            case "NoEnoughWallet":
            case 6:
                message.error = 6;
                break;
            case "AlreadyConfirmed":
            case 7:
                message.error = 7;
                break;
            case "PermissionDeined":
            case 8:
                message.error = 8;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from a BetError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetError
         * @static
         * @param {bet.BetError} message BetError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.error = options.enums === String ? "ErrorDefault" : 0;
                object.errorMessage = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.bet.Error[message.error] : message.error;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this BetError to JSON.
         * @function toJSON
         * @memberof bet.BetError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetError;
    })();

    bet.ConfirmBetCall = (function() {

        /**
         * Properties of a ConfirmBetCall.
         * @memberof bet
         * @interface IConfirmBetCall
         * @property {foundation.IHeader|null} [header] ConfirmBetCall header
         * @property {string|null} [gameUuid] ConfirmBetCall gameUuid
         */

        /**
         * Constructs a new ConfirmBetCall.
         * @memberof bet
         * @classdesc Represents a ConfirmBetCall.
         * @implements IConfirmBetCall
         * @constructor
         * @param {bet.IConfirmBetCall=} [properties] Properties to set
         */
        function ConfirmBetCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConfirmBetCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.ConfirmBetCall
         * @instance
         */
        ConfirmBetCall.prototype.header = null;

        /**
         * ConfirmBetCall gameUuid.
         * @member {string} gameUuid
         * @memberof bet.ConfirmBetCall
         * @instance
         */
        ConfirmBetCall.prototype.gameUuid = "";

        /**
         * Creates a new ConfirmBetCall instance using the specified properties.
         * @function create
         * @memberof bet.ConfirmBetCall
         * @static
         * @param {bet.IConfirmBetCall=} [properties] Properties to set
         * @returns {bet.ConfirmBetCall} ConfirmBetCall instance
         */
        ConfirmBetCall.create = function create(properties) {
            return new ConfirmBetCall(properties);
        };

        /**
         * Encodes the specified ConfirmBetCall message. Does not implicitly {@link bet.ConfirmBetCall.verify|verify} messages.
         * @function encode
         * @memberof bet.ConfirmBetCall
         * @static
         * @param {bet.IConfirmBetCall} message ConfirmBetCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfirmBetCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameUuid);
            return writer;
        };

        /**
         * Encodes the specified ConfirmBetCall message, length delimited. Does not implicitly {@link bet.ConfirmBetCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.ConfirmBetCall
         * @static
         * @param {bet.IConfirmBetCall} message ConfirmBetCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfirmBetCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConfirmBetCall message from the specified reader or buffer.
         * @function decode
         * @memberof bet.ConfirmBetCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.ConfirmBetCall} ConfirmBetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfirmBetCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.ConfirmBetCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameUuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConfirmBetCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.ConfirmBetCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.ConfirmBetCall} ConfirmBetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfirmBetCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConfirmBetCall message.
         * @function verify
         * @memberof bet.ConfirmBetCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConfirmBetCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            return null;
        };

        /**
         * Creates a ConfirmBetCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.ConfirmBetCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.ConfirmBetCall} ConfirmBetCall
         */
        ConfirmBetCall.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.ConfirmBetCall)
                return object;
            let message = new $root.bet.ConfirmBetCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.ConfirmBetCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            return message;
        };

        /**
         * Creates a plain object from a ConfirmBetCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.ConfirmBetCall
         * @static
         * @param {bet.ConfirmBetCall} message ConfirmBetCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConfirmBetCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.gameUuid = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            return object;
        };

        /**
         * Converts this ConfirmBetCall to JSON.
         * @function toJSON
         * @memberof bet.ConfirmBetCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConfirmBetCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConfirmBetCall;
    })();

    bet.ConfirmBetRecall = (function() {

        /**
         * Properties of a ConfirmBetRecall.
         * @memberof bet
         * @interface IConfirmBetRecall
         * @property {foundation.IHeader|null} [header] ConfirmBetRecall header
         * @property {number|null} [result] ConfirmBetRecall result
         * @property {bet.IBetStatus|null} [betStatus] ConfirmBetRecall betStatus
         */

        /**
         * Constructs a new ConfirmBetRecall.
         * @memberof bet
         * @classdesc Represents a ConfirmBetRecall.
         * @implements IConfirmBetRecall
         * @constructor
         * @param {bet.IConfirmBetRecall=} [properties] Properties to set
         */
        function ConfirmBetRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConfirmBetRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.ConfirmBetRecall
         * @instance
         */
        ConfirmBetRecall.prototype.header = null;

        /**
         * ConfirmBetRecall result.
         * @member {number} result
         * @memberof bet.ConfirmBetRecall
         * @instance
         */
        ConfirmBetRecall.prototype.result = 0;

        /**
         * ConfirmBetRecall betStatus.
         * @member {bet.IBetStatus|null|undefined} betStatus
         * @memberof bet.ConfirmBetRecall
         * @instance
         */
        ConfirmBetRecall.prototype.betStatus = null;

        /**
         * Creates a new ConfirmBetRecall instance using the specified properties.
         * @function create
         * @memberof bet.ConfirmBetRecall
         * @static
         * @param {bet.IConfirmBetRecall=} [properties] Properties to set
         * @returns {bet.ConfirmBetRecall} ConfirmBetRecall instance
         */
        ConfirmBetRecall.create = function create(properties) {
            return new ConfirmBetRecall(properties);
        };

        /**
         * Encodes the specified ConfirmBetRecall message. Does not implicitly {@link bet.ConfirmBetRecall.verify|verify} messages.
         * @function encode
         * @memberof bet.ConfirmBetRecall
         * @static
         * @param {bet.IConfirmBetRecall} message ConfirmBetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfirmBetRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.betStatus != null && Object.hasOwnProperty.call(message, "betStatus"))
                $root.bet.BetStatus.encode(message.betStatus, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ConfirmBetRecall message, length delimited. Does not implicitly {@link bet.ConfirmBetRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.ConfirmBetRecall
         * @static
         * @param {bet.IConfirmBetRecall} message ConfirmBetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfirmBetRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConfirmBetRecall message from the specified reader or buffer.
         * @function decode
         * @memberof bet.ConfirmBetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.ConfirmBetRecall} ConfirmBetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfirmBetRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.ConfirmBetRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.betStatus = $root.bet.BetStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConfirmBetRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.ConfirmBetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.ConfirmBetRecall} ConfirmBetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfirmBetRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConfirmBetRecall message.
         * @function verify
         * @memberof bet.ConfirmBetRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConfirmBetRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.betStatus != null && message.hasOwnProperty("betStatus")) {
                let error = $root.bet.BetStatus.verify(message.betStatus);
                if (error)
                    return "betStatus." + error;
            }
            return null;
        };

        /**
         * Creates a ConfirmBetRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.ConfirmBetRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.ConfirmBetRecall} ConfirmBetRecall
         */
        ConfirmBetRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.ConfirmBetRecall)
                return object;
            let message = new $root.bet.ConfirmBetRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.ConfirmBetRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.result != null)
                message.result = object.result | 0;
            if (object.betStatus != null) {
                if (typeof object.betStatus !== "object")
                    throw TypeError(".bet.ConfirmBetRecall.betStatus: object expected");
                message.betStatus = $root.bet.BetStatus.fromObject(object.betStatus);
            }
            return message;
        };

        /**
         * Creates a plain object from a ConfirmBetRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.ConfirmBetRecall
         * @static
         * @param {bet.ConfirmBetRecall} message ConfirmBetRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConfirmBetRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.result = 0;
                object.betStatus = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.betStatus != null && message.hasOwnProperty("betStatus"))
                object.betStatus = $root.bet.BetStatus.toObject(message.betStatus, options);
            return object;
        };

        /**
         * Converts this ConfirmBetRecall to JSON.
         * @function toJSON
         * @memberof bet.ConfirmBetRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConfirmBetRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConfirmBetRecall;
    })();

    bet.BroadcastConfirmBetRecall = (function() {

        /**
         * Properties of a BroadcastConfirmBetRecall.
         * @memberof bet
         * @interface IBroadcastConfirmBetRecall
         * @property {foundation.IHeader|null} [header] BroadcastConfirmBetRecall header
         * @property {number|null} [result] BroadcastConfirmBetRecall result
         * @property {bet.IBetStatus|null} [betStatus] BroadcastConfirmBetRecall betStatus
         * @property {string|null} [account] BroadcastConfirmBetRecall account
         */

        /**
         * Constructs a new BroadcastConfirmBetRecall.
         * @memberof bet
         * @classdesc Represents a BroadcastConfirmBetRecall.
         * @implements IBroadcastConfirmBetRecall
         * @constructor
         * @param {bet.IBroadcastConfirmBetRecall=} [properties] Properties to set
         */
        function BroadcastConfirmBetRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastConfirmBetRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BroadcastConfirmBetRecall
         * @instance
         */
        BroadcastConfirmBetRecall.prototype.header = null;

        /**
         * BroadcastConfirmBetRecall result.
         * @member {number} result
         * @memberof bet.BroadcastConfirmBetRecall
         * @instance
         */
        BroadcastConfirmBetRecall.prototype.result = 0;

        /**
         * BroadcastConfirmBetRecall betStatus.
         * @member {bet.IBetStatus|null|undefined} betStatus
         * @memberof bet.BroadcastConfirmBetRecall
         * @instance
         */
        BroadcastConfirmBetRecall.prototype.betStatus = null;

        /**
         * BroadcastConfirmBetRecall account.
         * @member {string} account
         * @memberof bet.BroadcastConfirmBetRecall
         * @instance
         */
        BroadcastConfirmBetRecall.prototype.account = "";

        /**
         * Creates a new BroadcastConfirmBetRecall instance using the specified properties.
         * @function create
         * @memberof bet.BroadcastConfirmBetRecall
         * @static
         * @param {bet.IBroadcastConfirmBetRecall=} [properties] Properties to set
         * @returns {bet.BroadcastConfirmBetRecall} BroadcastConfirmBetRecall instance
         */
        BroadcastConfirmBetRecall.create = function create(properties) {
            return new BroadcastConfirmBetRecall(properties);
        };

        /**
         * Encodes the specified BroadcastConfirmBetRecall message. Does not implicitly {@link bet.BroadcastConfirmBetRecall.verify|verify} messages.
         * @function encode
         * @memberof bet.BroadcastConfirmBetRecall
         * @static
         * @param {bet.IBroadcastConfirmBetRecall} message BroadcastConfirmBetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastConfirmBetRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.betStatus != null && Object.hasOwnProperty.call(message, "betStatus"))
                $root.bet.BetStatus.encode(message.betStatus, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.account);
            return writer;
        };

        /**
         * Encodes the specified BroadcastConfirmBetRecall message, length delimited. Does not implicitly {@link bet.BroadcastConfirmBetRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BroadcastConfirmBetRecall
         * @static
         * @param {bet.IBroadcastConfirmBetRecall} message BroadcastConfirmBetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastConfirmBetRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastConfirmBetRecall message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BroadcastConfirmBetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BroadcastConfirmBetRecall} BroadcastConfirmBetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastConfirmBetRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BroadcastConfirmBetRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.betStatus = $root.bet.BetStatus.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.account = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastConfirmBetRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BroadcastConfirmBetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BroadcastConfirmBetRecall} BroadcastConfirmBetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastConfirmBetRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastConfirmBetRecall message.
         * @function verify
         * @memberof bet.BroadcastConfirmBetRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastConfirmBetRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.betStatus != null && message.hasOwnProperty("betStatus")) {
                let error = $root.bet.BetStatus.verify(message.betStatus);
                if (error)
                    return "betStatus." + error;
            }
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            return null;
        };

        /**
         * Creates a BroadcastConfirmBetRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BroadcastConfirmBetRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BroadcastConfirmBetRecall} BroadcastConfirmBetRecall
         */
        BroadcastConfirmBetRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BroadcastConfirmBetRecall)
                return object;
            let message = new $root.bet.BroadcastConfirmBetRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BroadcastConfirmBetRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.result != null)
                message.result = object.result | 0;
            if (object.betStatus != null) {
                if (typeof object.betStatus !== "object")
                    throw TypeError(".bet.BroadcastConfirmBetRecall.betStatus: object expected");
                message.betStatus = $root.bet.BetStatus.fromObject(object.betStatus);
            }
            if (object.account != null)
                message.account = String(object.account);
            return message;
        };

        /**
         * Creates a plain object from a BroadcastConfirmBetRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BroadcastConfirmBetRecall
         * @static
         * @param {bet.BroadcastConfirmBetRecall} message BroadcastConfirmBetRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastConfirmBetRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.result = 0;
                object.betStatus = null;
                object.account = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.betStatus != null && message.hasOwnProperty("betStatus"))
                object.betStatus = $root.bet.BetStatus.toObject(message.betStatus, options);
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            return object;
        };

        /**
         * Converts this BroadcastConfirmBetRecall to JSON.
         * @function toJSON
         * @memberof bet.BroadcastConfirmBetRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastConfirmBetRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastConfirmBetRecall;
    })();

    return bet;
})();

export const chat = $root.chat = (() => {

    /**
     * Namespace chat.
     * @exports chat
     * @namespace
     */
    const chat = {};

    /**
     * MessageType enum.
     * @name chat.MessageType
     * @enum {number}
     * @property {number} default_type=0 default_type value
     * @property {number} chat=1 chat value
     * @property {number} donate=2 donate value
     */
    chat.MessageType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "default_type"] = 0;
        values[valuesById[1] = "chat"] = 1;
        values[valuesById[2] = "donate"] = 2;
        return values;
    })();

    chat.Chat = (function() {

        /**
         * Properties of a Chat.
         * @memberof chat
         * @interface IChat
         * @property {foundation.IHeader|null} [header] Chat header
         * @property {string|null} [message] Chat message
         * @property {chat.MessageType|null} [type] Chat type
         */

        /**
         * Constructs a new Chat.
         * @memberof chat
         * @classdesc Represents a Chat.
         * @implements IChat
         * @constructor
         * @param {chat.IChat=} [properties] Properties to set
         */
        function Chat(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chat header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof chat.Chat
         * @instance
         */
        Chat.prototype.header = null;

        /**
         * Chat message.
         * @member {string} message
         * @memberof chat.Chat
         * @instance
         */
        Chat.prototype.message = "";

        /**
         * Chat type.
         * @member {chat.MessageType} type
         * @memberof chat.Chat
         * @instance
         */
        Chat.prototype.type = 0;

        /**
         * Creates a new Chat instance using the specified properties.
         * @function create
         * @memberof chat.Chat
         * @static
         * @param {chat.IChat=} [properties] Properties to set
         * @returns {chat.Chat} Chat instance
         */
        Chat.create = function create(properties) {
            return new Chat(properties);
        };

        /**
         * Encodes the specified Chat message. Does not implicitly {@link chat.Chat.verify|verify} messages.
         * @function encode
         * @memberof chat.Chat
         * @static
         * @param {chat.IChat} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link chat.Chat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.Chat
         * @static
         * @param {chat.IChat} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @function decode
         * @memberof chat.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.Chat} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Chat();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.Chat} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chat message.
         * @function verify
         * @memberof chat.Chat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.Chat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.Chat} Chat
         */
        Chat.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.Chat)
                return object;
            let message = new $root.chat.Chat();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".chat.Chat.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.message != null)
                message.message = String(object.message);
            switch (object.type) {
            case "default_type":
            case 0:
                message.type = 0;
                break;
            case "chat":
            case 1:
                message.type = 1;
                break;
            case "donate":
            case 2:
                message.type = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Chat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.Chat
         * @static
         * @param {chat.Chat} message Chat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.message = "";
                object.type = options.enums === String ? "default_type" : 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.chat.MessageType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this Chat to JSON.
         * @function toJSON
         * @memberof chat.Chat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Chat;
    })();

    chat.BroadcastChat = (function() {

        /**
         * Properties of a BroadcastChat.
         * @memberof chat
         * @interface IBroadcastChat
         * @property {foundation.IHeader|null} [header] BroadcastChat header
         * @property {string|null} [message] BroadcastChat message
         * @property {string|null} [player] BroadcastChat player
         * @property {chat.MessageType|null} [type] BroadcastChat type
         */

        /**
         * Constructs a new BroadcastChat.
         * @memberof chat
         * @classdesc Represents a BroadcastChat.
         * @implements IBroadcastChat
         * @constructor
         * @param {chat.IBroadcastChat=} [properties] Properties to set
         */
        function BroadcastChat(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastChat header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof chat.BroadcastChat
         * @instance
         */
        BroadcastChat.prototype.header = null;

        /**
         * BroadcastChat message.
         * @member {string} message
         * @memberof chat.BroadcastChat
         * @instance
         */
        BroadcastChat.prototype.message = "";

        /**
         * BroadcastChat player.
         * @member {string} player
         * @memberof chat.BroadcastChat
         * @instance
         */
        BroadcastChat.prototype.player = "";

        /**
         * BroadcastChat type.
         * @member {chat.MessageType} type
         * @memberof chat.BroadcastChat
         * @instance
         */
        BroadcastChat.prototype.type = 0;

        /**
         * Creates a new BroadcastChat instance using the specified properties.
         * @function create
         * @memberof chat.BroadcastChat
         * @static
         * @param {chat.IBroadcastChat=} [properties] Properties to set
         * @returns {chat.BroadcastChat} BroadcastChat instance
         */
        BroadcastChat.create = function create(properties) {
            return new BroadcastChat(properties);
        };

        /**
         * Encodes the specified BroadcastChat message. Does not implicitly {@link chat.BroadcastChat.verify|verify} messages.
         * @function encode
         * @memberof chat.BroadcastChat
         * @static
         * @param {chat.IBroadcastChat} message BroadcastChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.player);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified BroadcastChat message, length delimited. Does not implicitly {@link chat.BroadcastChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.BroadcastChat
         * @static
         * @param {chat.IBroadcastChat} message BroadcastChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastChat message from the specified reader or buffer.
         * @function decode
         * @memberof chat.BroadcastChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.BroadcastChat} BroadcastChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.BroadcastChat();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.player = reader.string();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.BroadcastChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.BroadcastChat} BroadcastChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastChat message.
         * @function verify
         * @memberof chat.BroadcastChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.player != null && message.hasOwnProperty("player"))
                if (!$util.isString(message.player))
                    return "player: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a BroadcastChat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.BroadcastChat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.BroadcastChat} BroadcastChat
         */
        BroadcastChat.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.BroadcastChat)
                return object;
            let message = new $root.chat.BroadcastChat();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".chat.BroadcastChat.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.message != null)
                message.message = String(object.message);
            if (object.player != null)
                message.player = String(object.player);
            switch (object.type) {
            case "default_type":
            case 0:
                message.type = 0;
                break;
            case "chat":
            case 1:
                message.type = 1;
                break;
            case "donate":
            case 2:
                message.type = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastChat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.BroadcastChat
         * @static
         * @param {chat.BroadcastChat} message BroadcastChat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.message = "";
                object.player = "";
                object.type = options.enums === String ? "default_type" : 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = message.player;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.chat.MessageType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this BroadcastChat to JSON.
         * @function toJSON
         * @memberof chat.BroadcastChat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastChat;
    })();

    return chat;
})();

export const dealer = $root.dealer = (() => {

    /**
     * Namespace dealer.
     * @exports dealer
     * @namespace
     */
    const dealer = {};

    /**
     * Suit enum.
     * @name dealer.Suit
     * @enum {number}
     * @property {number} Default=0 Default value
     * @property {number} Heart=1 Heart value
     * @property {number} Diamond=2 Diamond value
     * @property {number} Spade=3 Spade value
     * @property {number} Club=4 Club value
     */
    dealer.Suit = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Default"] = 0;
        values[valuesById[1] = "Heart"] = 1;
        values[valuesById[2] = "Diamond"] = 2;
        values[valuesById[3] = "Spade"] = 3;
        values[valuesById[4] = "Club"] = 4;
        return values;
    })();

    dealer.Card = (function() {

        /**
         * Properties of a Card.
         * @memberof dealer
         * @interface ICard
         * @property {dealer.Suit|null} [suit] Card suit
         * @property {number|null} [point] Card point
         */

        /**
         * Constructs a new Card.
         * @memberof dealer
         * @classdesc Represents a Card.
         * @implements ICard
         * @constructor
         * @param {dealer.ICard=} [properties] Properties to set
         */
        function Card(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Card suit.
         * @member {dealer.Suit} suit
         * @memberof dealer.Card
         * @instance
         */
        Card.prototype.suit = 0;

        /**
         * Card point.
         * @member {number} point
         * @memberof dealer.Card
         * @instance
         */
        Card.prototype.point = 0;

        /**
         * Creates a new Card instance using the specified properties.
         * @function create
         * @memberof dealer.Card
         * @static
         * @param {dealer.ICard=} [properties] Properties to set
         * @returns {dealer.Card} Card instance
         */
        Card.create = function create(properties) {
            return new Card(properties);
        };

        /**
         * Encodes the specified Card message. Does not implicitly {@link dealer.Card.verify|verify} messages.
         * @function encode
         * @memberof dealer.Card
         * @static
         * @param {dealer.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.suit != null && Object.hasOwnProperty.call(message, "suit"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.suit);
            if (message.point != null && Object.hasOwnProperty.call(message, "point"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.point);
            return writer;
        };

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link dealer.Card.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.Card
         * @static
         * @param {dealer.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.Card();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.suit = reader.int32();
                    break;
                case 2:
                    message.point = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Card message.
         * @function verify
         * @memberof dealer.Card
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Card.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.suit != null && message.hasOwnProperty("suit"))
                switch (message.suit) {
                default:
                    return "suit: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.point != null && message.hasOwnProperty("point"))
                if (!$util.isInteger(message.point))
                    return "point: integer expected";
            return null;
        };

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.Card
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.Card} Card
         */
        Card.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.Card)
                return object;
            let message = new $root.dealer.Card();
            switch (object.suit) {
            case "Default":
            case 0:
                message.suit = 0;
                break;
            case "Heart":
            case 1:
                message.suit = 1;
                break;
            case "Diamond":
            case 2:
                message.suit = 2;
                break;
            case "Spade":
            case 3:
                message.suit = 3;
                break;
            case "Club":
            case 4:
                message.suit = 4;
                break;
            }
            if (object.point != null)
                message.point = object.point | 0;
            return message;
        };

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.Card
         * @static
         * @param {dealer.Card} message Card
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Card.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.suit = options.enums === String ? "Default" : 0;
                object.point = 0;
            }
            if (message.suit != null && message.hasOwnProperty("suit"))
                object.suit = options.enums === String ? $root.dealer.Suit[message.suit] : message.suit;
            if (message.point != null && message.hasOwnProperty("point"))
                object.point = message.point;
            return object;
        };

        /**
         * Converts this Card to JSON.
         * @function toJSON
         * @memberof dealer.Card
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Card.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Card;
    })();

    /**
     * Side enum.
     * @name dealer.Side
     * @enum {number}
     * @property {number} SideDefault=0 SideDefault value
     * @property {number} Banker=1 Banker value
     * @property {number} Player=2 Player value
     */
    dealer.Side = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SideDefault"] = 0;
        values[valuesById[1] = "Banker"] = 1;
        values[valuesById[2] = "Player"] = 2;
        return values;
    })();

    dealer.Draw = (function() {

        /**
         * Properties of a Draw.
         * @memberof dealer
         * @interface IDraw
         * @property {foundation.IHeader|null} [header] Draw header
         * @property {dealer.Side|null} [side] Draw side
         * @property {number|null} [position] Draw position
         * @property {dealer.ICard|null} [card] Draw card
         */

        /**
         * Constructs a new Draw.
         * @memberof dealer
         * @classdesc Represents a Draw.
         * @implements IDraw
         * @constructor
         * @param {dealer.IDraw=} [properties] Properties to set
         */
        function Draw(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Draw header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.Draw
         * @instance
         */
        Draw.prototype.header = null;

        /**
         * Draw side.
         * @member {dealer.Side} side
         * @memberof dealer.Draw
         * @instance
         */
        Draw.prototype.side = 0;

        /**
         * Draw position.
         * @member {number} position
         * @memberof dealer.Draw
         * @instance
         */
        Draw.prototype.position = 0;

        /**
         * Draw card.
         * @member {dealer.ICard|null|undefined} card
         * @memberof dealer.Draw
         * @instance
         */
        Draw.prototype.card = null;

        /**
         * Creates a new Draw instance using the specified properties.
         * @function create
         * @memberof dealer.Draw
         * @static
         * @param {dealer.IDraw=} [properties] Properties to set
         * @returns {dealer.Draw} Draw instance
         */
        Draw.create = function create(properties) {
            return new Draw(properties);
        };

        /**
         * Encodes the specified Draw message. Does not implicitly {@link dealer.Draw.verify|verify} messages.
         * @function encode
         * @memberof dealer.Draw
         * @static
         * @param {dealer.IDraw} message Draw message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Draw.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.side != null && Object.hasOwnProperty.call(message, "side"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.side);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.position);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                $root.dealer.Card.encode(message.card, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Draw message, length delimited. Does not implicitly {@link dealer.Draw.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.Draw
         * @static
         * @param {dealer.IDraw} message Draw message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Draw.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Draw message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.Draw
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.Draw} Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Draw.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.Draw();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.side = reader.int32();
                    break;
                case 3:
                    message.position = reader.int32();
                    break;
                case 4:
                    message.card = $root.dealer.Card.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Draw message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.Draw
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.Draw} Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Draw.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Draw message.
         * @function verify
         * @memberof dealer.Draw
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Draw.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.side != null && message.hasOwnProperty("side"))
                switch (message.side) {
                default:
                    return "side: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.card != null && message.hasOwnProperty("card")) {
                let error = $root.dealer.Card.verify(message.card);
                if (error)
                    return "card." + error;
            }
            return null;
        };

        /**
         * Creates a Draw message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.Draw
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.Draw} Draw
         */
        Draw.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.Draw)
                return object;
            let message = new $root.dealer.Draw();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.Draw.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            switch (object.side) {
            case "SideDefault":
            case 0:
                message.side = 0;
                break;
            case "Banker":
            case 1:
                message.side = 1;
                break;
            case "Player":
            case 2:
                message.side = 2;
                break;
            }
            if (object.position != null)
                message.position = object.position | 0;
            if (object.card != null) {
                if (typeof object.card !== "object")
                    throw TypeError(".dealer.Draw.card: object expected");
                message.card = $root.dealer.Card.fromObject(object.card);
            }
            return message;
        };

        /**
         * Creates a plain object from a Draw message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.Draw
         * @static
         * @param {dealer.Draw} message Draw
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Draw.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.side = options.enums === String ? "SideDefault" : 0;
                object.position = 0;
                object.card = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = options.enums === String ? $root.dealer.Side[message.side] : message.side;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = $root.dealer.Card.toObject(message.card, options);
            return object;
        };

        /**
         * Converts this Draw to JSON.
         * @function toJSON
         * @memberof dealer.Draw
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Draw.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Draw;
    })();

    dealer.RoundStartCall = (function() {

        /**
         * Properties of a RoundStartCall.
         * @memberof dealer
         * @interface IRoundStartCall
         * @property {foundation.IHeader|null} [header] RoundStartCall header
         */

        /**
         * Constructs a new RoundStartCall.
         * @memberof dealer
         * @classdesc Represents a RoundStartCall.
         * @implements IRoundStartCall
         * @constructor
         * @param {dealer.IRoundStartCall=} [properties] Properties to set
         */
        function RoundStartCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundStartCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.RoundStartCall
         * @instance
         */
        RoundStartCall.prototype.header = null;

        /**
         * Creates a new RoundStartCall instance using the specified properties.
         * @function create
         * @memberof dealer.RoundStartCall
         * @static
         * @param {dealer.IRoundStartCall=} [properties] Properties to set
         * @returns {dealer.RoundStartCall} RoundStartCall instance
         */
        RoundStartCall.create = function create(properties) {
            return new RoundStartCall(properties);
        };

        /**
         * Encodes the specified RoundStartCall message. Does not implicitly {@link dealer.RoundStartCall.verify|verify} messages.
         * @function encode
         * @memberof dealer.RoundStartCall
         * @static
         * @param {dealer.IRoundStartCall} message RoundStartCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoundStartCall message, length delimited. Does not implicitly {@link dealer.RoundStartCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.RoundStartCall
         * @static
         * @param {dealer.IRoundStartCall} message RoundStartCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundStartCall message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.RoundStartCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.RoundStartCall} RoundStartCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.RoundStartCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoundStartCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.RoundStartCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.RoundStartCall} RoundStartCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundStartCall message.
         * @function verify
         * @memberof dealer.RoundStartCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundStartCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a RoundStartCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.RoundStartCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.RoundStartCall} RoundStartCall
         */
        RoundStartCall.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.RoundStartCall)
                return object;
            let message = new $root.dealer.RoundStartCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.RoundStartCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoundStartCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.RoundStartCall
         * @static
         * @param {dealer.RoundStartCall} message RoundStartCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundStartCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this RoundStartCall to JSON.
         * @function toJSON
         * @memberof dealer.RoundStartCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundStartCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoundStartCall;
    })();

    dealer.RoundEndCall = (function() {

        /**
         * Properties of a RoundEndCall.
         * @memberof dealer
         * @interface IRoundEndCall
         * @property {foundation.IHeader|null} [header] RoundEndCall header
         */

        /**
         * Constructs a new RoundEndCall.
         * @memberof dealer
         * @classdesc Represents a RoundEndCall.
         * @implements IRoundEndCall
         * @constructor
         * @param {dealer.IRoundEndCall=} [properties] Properties to set
         */
        function RoundEndCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundEndCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.RoundEndCall
         * @instance
         */
        RoundEndCall.prototype.header = null;

        /**
         * Creates a new RoundEndCall instance using the specified properties.
         * @function create
         * @memberof dealer.RoundEndCall
         * @static
         * @param {dealer.IRoundEndCall=} [properties] Properties to set
         * @returns {dealer.RoundEndCall} RoundEndCall instance
         */
        RoundEndCall.create = function create(properties) {
            return new RoundEndCall(properties);
        };

        /**
         * Encodes the specified RoundEndCall message. Does not implicitly {@link dealer.RoundEndCall.verify|verify} messages.
         * @function encode
         * @memberof dealer.RoundEndCall
         * @static
         * @param {dealer.IRoundEndCall} message RoundEndCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundEndCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoundEndCall message, length delimited. Does not implicitly {@link dealer.RoundEndCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.RoundEndCall
         * @static
         * @param {dealer.IRoundEndCall} message RoundEndCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundEndCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundEndCall message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.RoundEndCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.RoundEndCall} RoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundEndCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.RoundEndCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoundEndCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.RoundEndCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.RoundEndCall} RoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundEndCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundEndCall message.
         * @function verify
         * @memberof dealer.RoundEndCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundEndCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a RoundEndCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.RoundEndCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.RoundEndCall} RoundEndCall
         */
        RoundEndCall.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.RoundEndCall)
                return object;
            let message = new $root.dealer.RoundEndCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.RoundEndCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoundEndCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.RoundEndCall
         * @static
         * @param {dealer.RoundEndCall} message RoundEndCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundEndCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this RoundEndCall to JSON.
         * @function toJSON
         * @memberof dealer.RoundEndCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundEndCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoundEndCall;
    })();

    dealer.RoundStartRecall = (function() {

        /**
         * Properties of a RoundStartRecall.
         * @memberof dealer
         * @interface IRoundStartRecall
         * @property {foundation.IHeader|null} [header] RoundStartRecall header
         * @property {number|null} [status] RoundStartRecall status
         * @property {string|null} [message] RoundStartRecall message
         */

        /**
         * Constructs a new RoundStartRecall.
         * @memberof dealer
         * @classdesc Represents a RoundStartRecall.
         * @implements IRoundStartRecall
         * @constructor
         * @param {dealer.IRoundStartRecall=} [properties] Properties to set
         */
        function RoundStartRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundStartRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.RoundStartRecall
         * @instance
         */
        RoundStartRecall.prototype.header = null;

        /**
         * RoundStartRecall status.
         * @member {number} status
         * @memberof dealer.RoundStartRecall
         * @instance
         */
        RoundStartRecall.prototype.status = 0;

        /**
         * RoundStartRecall message.
         * @member {string} message
         * @memberof dealer.RoundStartRecall
         * @instance
         */
        RoundStartRecall.prototype.message = "";

        /**
         * Creates a new RoundStartRecall instance using the specified properties.
         * @function create
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {dealer.IRoundStartRecall=} [properties] Properties to set
         * @returns {dealer.RoundStartRecall} RoundStartRecall instance
         */
        RoundStartRecall.create = function create(properties) {
            return new RoundStartRecall(properties);
        };

        /**
         * Encodes the specified RoundStartRecall message. Does not implicitly {@link dealer.RoundStartRecall.verify|verify} messages.
         * @function encode
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {dealer.IRoundStartRecall} message RoundStartRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified RoundStartRecall message, length delimited. Does not implicitly {@link dealer.RoundStartRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {dealer.IRoundStartRecall} message RoundStartRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundStartRecall message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.RoundStartRecall} RoundStartRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.RoundStartRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoundStartRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.RoundStartRecall} RoundStartRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundStartRecall message.
         * @function verify
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundStartRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a RoundStartRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.RoundStartRecall} RoundStartRecall
         */
        RoundStartRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.RoundStartRecall)
                return object;
            let message = new $root.dealer.RoundStartRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.RoundStartRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.status != null)
                message.status = object.status | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a RoundStartRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {dealer.RoundStartRecall} message RoundStartRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundStartRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.status = 0;
                object.message = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this RoundStartRecall to JSON.
         * @function toJSON
         * @memberof dealer.RoundStartRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundStartRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoundStartRecall;
    })();

    dealer.RoundEndRecall = (function() {

        /**
         * Properties of a RoundEndRecall.
         * @memberof dealer
         * @interface IRoundEndRecall
         * @property {foundation.IHeader|null} [header] RoundEndRecall header
         * @property {number|null} [status] RoundEndRecall status
         * @property {string|null} [message] RoundEndRecall message
         */

        /**
         * Constructs a new RoundEndRecall.
         * @memberof dealer
         * @classdesc Represents a RoundEndRecall.
         * @implements IRoundEndRecall
         * @constructor
         * @param {dealer.IRoundEndRecall=} [properties] Properties to set
         */
        function RoundEndRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundEndRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.RoundEndRecall
         * @instance
         */
        RoundEndRecall.prototype.header = null;

        /**
         * RoundEndRecall status.
         * @member {number} status
         * @memberof dealer.RoundEndRecall
         * @instance
         */
        RoundEndRecall.prototype.status = 0;

        /**
         * RoundEndRecall message.
         * @member {string} message
         * @memberof dealer.RoundEndRecall
         * @instance
         */
        RoundEndRecall.prototype.message = "";

        /**
         * Creates a new RoundEndRecall instance using the specified properties.
         * @function create
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {dealer.IRoundEndRecall=} [properties] Properties to set
         * @returns {dealer.RoundEndRecall} RoundEndRecall instance
         */
        RoundEndRecall.create = function create(properties) {
            return new RoundEndRecall(properties);
        };

        /**
         * Encodes the specified RoundEndRecall message. Does not implicitly {@link dealer.RoundEndRecall.verify|verify} messages.
         * @function encode
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {dealer.IRoundEndRecall} message RoundEndRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundEndRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified RoundEndRecall message, length delimited. Does not implicitly {@link dealer.RoundEndRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {dealer.IRoundEndRecall} message RoundEndRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundEndRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundEndRecall message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.RoundEndRecall} RoundEndRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundEndRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.RoundEndRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoundEndRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.RoundEndRecall} RoundEndRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundEndRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundEndRecall message.
         * @function verify
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundEndRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a RoundEndRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.RoundEndRecall} RoundEndRecall
         */
        RoundEndRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.RoundEndRecall)
                return object;
            let message = new $root.dealer.RoundEndRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.RoundEndRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.status != null)
                message.status = object.status | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a RoundEndRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {dealer.RoundEndRecall} message RoundEndRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundEndRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.status = 0;
                object.message = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this RoundEndRecall to JSON.
         * @function toJSON
         * @memberof dealer.RoundEndRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundEndRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoundEndRecall;
    })();

    dealer.BroadcastDealerRoundEnd = (function() {

        /**
         * Properties of a BroadcastDealerRoundEnd.
         * @memberof dealer
         * @interface IBroadcastDealerRoundEnd
         * @property {foundation.IHeader|null} [header] BroadcastDealerRoundEnd header
         * @property {string|null} [gameUuid] BroadcastDealerRoundEnd gameUuid
         */

        /**
         * Constructs a new BroadcastDealerRoundEnd.
         * @memberof dealer
         * @classdesc Represents a BroadcastDealerRoundEnd.
         * @implements IBroadcastDealerRoundEnd
         * @constructor
         * @param {dealer.IBroadcastDealerRoundEnd=} [properties] Properties to set
         */
        function BroadcastDealerRoundEnd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastDealerRoundEnd header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.BroadcastDealerRoundEnd
         * @instance
         */
        BroadcastDealerRoundEnd.prototype.header = null;

        /**
         * BroadcastDealerRoundEnd gameUuid.
         * @member {string} gameUuid
         * @memberof dealer.BroadcastDealerRoundEnd
         * @instance
         */
        BroadcastDealerRoundEnd.prototype.gameUuid = "";

        /**
         * Creates a new BroadcastDealerRoundEnd instance using the specified properties.
         * @function create
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {dealer.IBroadcastDealerRoundEnd=} [properties] Properties to set
         * @returns {dealer.BroadcastDealerRoundEnd} BroadcastDealerRoundEnd instance
         */
        BroadcastDealerRoundEnd.create = function create(properties) {
            return new BroadcastDealerRoundEnd(properties);
        };

        /**
         * Encodes the specified BroadcastDealerRoundEnd message. Does not implicitly {@link dealer.BroadcastDealerRoundEnd.verify|verify} messages.
         * @function encode
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {dealer.IBroadcastDealerRoundEnd} message BroadcastDealerRoundEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastDealerRoundEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameUuid);
            return writer;
        };

        /**
         * Encodes the specified BroadcastDealerRoundEnd message, length delimited. Does not implicitly {@link dealer.BroadcastDealerRoundEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {dealer.IBroadcastDealerRoundEnd} message BroadcastDealerRoundEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastDealerRoundEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastDealerRoundEnd message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.BroadcastDealerRoundEnd} BroadcastDealerRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastDealerRoundEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.BroadcastDealerRoundEnd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameUuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastDealerRoundEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.BroadcastDealerRoundEnd} BroadcastDealerRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastDealerRoundEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastDealerRoundEnd message.
         * @function verify
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastDealerRoundEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            return null;
        };

        /**
         * Creates a BroadcastDealerRoundEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.BroadcastDealerRoundEnd} BroadcastDealerRoundEnd
         */
        BroadcastDealerRoundEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.BroadcastDealerRoundEnd)
                return object;
            let message = new $root.dealer.BroadcastDealerRoundEnd();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.BroadcastDealerRoundEnd.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            return message;
        };

        /**
         * Creates a plain object from a BroadcastDealerRoundEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {dealer.BroadcastDealerRoundEnd} message BroadcastDealerRoundEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastDealerRoundEnd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.gameUuid = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            return object;
        };

        /**
         * Converts this BroadcastDealerRoundEnd to JSON.
         * @function toJSON
         * @memberof dealer.BroadcastDealerRoundEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastDealerRoundEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastDealerRoundEnd;
    })();

    dealer.WhiteCardCall = (function() {

        /**
         * Properties of a WhiteCardCall.
         * @memberof dealer
         * @interface IWhiteCardCall
         * @property {foundation.IHeader|null} [header] WhiteCardCall header
         */

        /**
         * Constructs a new WhiteCardCall.
         * @memberof dealer
         * @classdesc Represents a WhiteCardCall.
         * @implements IWhiteCardCall
         * @constructor
         * @param {dealer.IWhiteCardCall=} [properties] Properties to set
         */
        function WhiteCardCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WhiteCardCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.WhiteCardCall
         * @instance
         */
        WhiteCardCall.prototype.header = null;

        /**
         * Creates a new WhiteCardCall instance using the specified properties.
         * @function create
         * @memberof dealer.WhiteCardCall
         * @static
         * @param {dealer.IWhiteCardCall=} [properties] Properties to set
         * @returns {dealer.WhiteCardCall} WhiteCardCall instance
         */
        WhiteCardCall.create = function create(properties) {
            return new WhiteCardCall(properties);
        };

        /**
         * Encodes the specified WhiteCardCall message. Does not implicitly {@link dealer.WhiteCardCall.verify|verify} messages.
         * @function encode
         * @memberof dealer.WhiteCardCall
         * @static
         * @param {dealer.IWhiteCardCall} message WhiteCardCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhiteCardCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WhiteCardCall message, length delimited. Does not implicitly {@link dealer.WhiteCardCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.WhiteCardCall
         * @static
         * @param {dealer.IWhiteCardCall} message WhiteCardCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhiteCardCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WhiteCardCall message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.WhiteCardCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.WhiteCardCall} WhiteCardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhiteCardCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.WhiteCardCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WhiteCardCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.WhiteCardCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.WhiteCardCall} WhiteCardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhiteCardCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WhiteCardCall message.
         * @function verify
         * @memberof dealer.WhiteCardCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WhiteCardCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a WhiteCardCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.WhiteCardCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.WhiteCardCall} WhiteCardCall
         */
        WhiteCardCall.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.WhiteCardCall)
                return object;
            let message = new $root.dealer.WhiteCardCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.WhiteCardCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a WhiteCardCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.WhiteCardCall
         * @static
         * @param {dealer.WhiteCardCall} message WhiteCardCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WhiteCardCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this WhiteCardCall to JSON.
         * @function toJSON
         * @memberof dealer.WhiteCardCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WhiteCardCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WhiteCardCall;
    })();

    dealer.BetRoundEndCall = (function() {

        /**
         * Properties of a BetRoundEndCall.
         * @memberof dealer
         * @interface IBetRoundEndCall
         * @property {foundation.IHeader|null} [header] BetRoundEndCall header
         */

        /**
         * Constructs a new BetRoundEndCall.
         * @memberof dealer
         * @classdesc Represents a BetRoundEndCall.
         * @implements IBetRoundEndCall
         * @constructor
         * @param {dealer.IBetRoundEndCall=} [properties] Properties to set
         */
        function BetRoundEndCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRoundEndCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.BetRoundEndCall
         * @instance
         */
        BetRoundEndCall.prototype.header = null;

        /**
         * Creates a new BetRoundEndCall instance using the specified properties.
         * @function create
         * @memberof dealer.BetRoundEndCall
         * @static
         * @param {dealer.IBetRoundEndCall=} [properties] Properties to set
         * @returns {dealer.BetRoundEndCall} BetRoundEndCall instance
         */
        BetRoundEndCall.create = function create(properties) {
            return new BetRoundEndCall(properties);
        };

        /**
         * Encodes the specified BetRoundEndCall message. Does not implicitly {@link dealer.BetRoundEndCall.verify|verify} messages.
         * @function encode
         * @memberof dealer.BetRoundEndCall
         * @static
         * @param {dealer.IBetRoundEndCall} message BetRoundEndCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundEndCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BetRoundEndCall message, length delimited. Does not implicitly {@link dealer.BetRoundEndCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.BetRoundEndCall
         * @static
         * @param {dealer.IBetRoundEndCall} message BetRoundEndCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundEndCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRoundEndCall message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.BetRoundEndCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.BetRoundEndCall} BetRoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundEndCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.BetRoundEndCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRoundEndCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.BetRoundEndCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.BetRoundEndCall} BetRoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundEndCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRoundEndCall message.
         * @function verify
         * @memberof dealer.BetRoundEndCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRoundEndCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a BetRoundEndCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.BetRoundEndCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.BetRoundEndCall} BetRoundEndCall
         */
        BetRoundEndCall.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.BetRoundEndCall)
                return object;
            let message = new $root.dealer.BetRoundEndCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.BetRoundEndCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a BetRoundEndCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.BetRoundEndCall
         * @static
         * @param {dealer.BetRoundEndCall} message BetRoundEndCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRoundEndCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this BetRoundEndCall to JSON.
         * @function toJSON
         * @memberof dealer.BetRoundEndCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRoundEndCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRoundEndCall;
    })();

    /**
     * Result enum.
     * @name dealer.Result
     * @enum {number}
     * @property {number} Default=0 Default value
     * @property {number} Banker=1 Banker value
     * @property {number} Player=2 Player value
     * @property {number} BankerPair=3 BankerPair value
     * @property {number} Tie=4 Tie value
     * @property {number} PlayerPair=5 PlayerPair value
     */
    dealer.Result = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Default"] = 0;
        values[valuesById[1] = "Banker"] = 1;
        values[valuesById[2] = "Player"] = 2;
        values[valuesById[3] = "BankerPair"] = 3;
        values[valuesById[4] = "Tie"] = 4;
        values[valuesById[5] = "PlayerPair"] = 5;
        return values;
    })();

    dealer.GameResult = (function() {

        /**
         * Properties of a GameResult.
         * @memberof dealer
         * @interface IGameResult
         * @property {foundation.IHeader|null} [header] GameResult header
         * @property {Array.<dealer.Result>|null} [results] GameResult results
         * @property {number|null} [totalWin] GameResult totalWin
         */

        /**
         * Constructs a new GameResult.
         * @memberof dealer
         * @classdesc Represents a GameResult.
         * @implements IGameResult
         * @constructor
         * @param {dealer.IGameResult=} [properties] Properties to set
         */
        function GameResult(properties) {
            this.results = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResult header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.GameResult
         * @instance
         */
        GameResult.prototype.header = null;

        /**
         * GameResult results.
         * @member {Array.<dealer.Result>} results
         * @memberof dealer.GameResult
         * @instance
         */
        GameResult.prototype.results = $util.emptyArray;

        /**
         * GameResult totalWin.
         * @member {number} totalWin
         * @memberof dealer.GameResult
         * @instance
         */
        GameResult.prototype.totalWin = 0;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @function create
         * @memberof dealer.GameResult
         * @static
         * @param {dealer.IGameResult=} [properties] Properties to set
         * @returns {dealer.GameResult} GameResult instance
         */
        GameResult.create = function create(properties) {
            return new GameResult(properties);
        };

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link dealer.GameResult.verify|verify} messages.
         * @function encode
         * @memberof dealer.GameResult
         * @static
         * @param {dealer.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.results != null && message.results.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.results.length; ++i)
                    writer.int32(message.results[i]);
                writer.ldelim();
            }
            if (message.totalWin != null && Object.hasOwnProperty.call(message, "totalWin"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.totalWin);
            return writer;
        };

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link dealer.GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.GameResult
         * @static
         * @param {dealer.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.GameResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.results.push(reader.int32());
                    } else
                        message.results.push(reader.int32());
                    break;
                case 3:
                    message.totalWin = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResult message.
         * @function verify
         * @memberof dealer.GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (let i = 0; i < message.results.length; ++i)
                    switch (message.results[i]) {
                    default:
                        return "results: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
            }
            if (message.totalWin != null && message.hasOwnProperty("totalWin"))
                if (typeof message.totalWin !== "number")
                    return "totalWin: number expected";
            return null;
        };

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.GameResult} GameResult
         */
        GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.GameResult)
                return object;
            let message = new $root.dealer.GameResult();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.GameResult.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".dealer.GameResult.results: array expected");
                message.results = [];
                for (let i = 0; i < object.results.length; ++i)
                    switch (object.results[i]) {
                    default:
                    case "Default":
                    case 0:
                        message.results[i] = 0;
                        break;
                    case "Banker":
                    case 1:
                        message.results[i] = 1;
                        break;
                    case "Player":
                    case 2:
                        message.results[i] = 2;
                        break;
                    case "BankerPair":
                    case 3:
                        message.results[i] = 3;
                        break;
                    case "Tie":
                    case 4:
                        message.results[i] = 4;
                        break;
                    case "PlayerPair":
                    case 5:
                        message.results[i] = 5;
                        break;
                    }
            }
            if (object.totalWin != null)
                message.totalWin = Number(object.totalWin);
            return message;
        };

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.GameResult
         * @static
         * @param {dealer.GameResult} message GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (options.defaults) {
                object.header = null;
                object.totalWin = 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.results && message.results.length) {
                object.results = [];
                for (let j = 0; j < message.results.length; ++j)
                    object.results[j] = options.enums === String ? $root.dealer.Result[message.results[j]] : message.results[j];
            }
            if (message.totalWin != null && message.hasOwnProperty("totalWin"))
                object.totalWin = options.json && !isFinite(message.totalWin) ? String(message.totalWin) : message.totalWin;
            return object;
        };

        /**
         * Converts this GameResult to JSON.
         * @function toJSON
         * @memberof dealer.GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameResult;
    })();

    dealer.GameStatus = (function() {

        /**
         * Properties of a GameStatus.
         * @memberof dealer
         * @interface IGameStatus
         * @property {foundation.IHeader|null} [header] GameStatus header
         * @property {boolean|null} [isGaming] GameStatus isGaming
         */

        /**
         * Constructs a new GameStatus.
         * @memberof dealer
         * @classdesc Represents a GameStatus.
         * @implements IGameStatus
         * @constructor
         * @param {dealer.IGameStatus=} [properties] Properties to set
         */
        function GameStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStatus header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.GameStatus
         * @instance
         */
        GameStatus.prototype.header = null;

        /**
         * GameStatus isGaming.
         * @member {boolean} isGaming
         * @memberof dealer.GameStatus
         * @instance
         */
        GameStatus.prototype.isGaming = false;

        /**
         * Creates a new GameStatus instance using the specified properties.
         * @function create
         * @memberof dealer.GameStatus
         * @static
         * @param {dealer.IGameStatus=} [properties] Properties to set
         * @returns {dealer.GameStatus} GameStatus instance
         */
        GameStatus.create = function create(properties) {
            return new GameStatus(properties);
        };

        /**
         * Encodes the specified GameStatus message. Does not implicitly {@link dealer.GameStatus.verify|verify} messages.
         * @function encode
         * @memberof dealer.GameStatus
         * @static
         * @param {dealer.IGameStatus} message GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.isGaming != null && Object.hasOwnProperty.call(message, "isGaming"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isGaming);
            return writer;
        };

        /**
         * Encodes the specified GameStatus message, length delimited. Does not implicitly {@link dealer.GameStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.GameStatus
         * @static
         * @param {dealer.IGameStatus} message GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStatus message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.GameStatus} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.GameStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.isGaming = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.GameStatus} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStatus message.
         * @function verify
         * @memberof dealer.GameStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.isGaming != null && message.hasOwnProperty("isGaming"))
                if (typeof message.isGaming !== "boolean")
                    return "isGaming: boolean expected";
            return null;
        };

        /**
         * Creates a GameStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.GameStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.GameStatus} GameStatus
         */
        GameStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.GameStatus)
                return object;
            let message = new $root.dealer.GameStatus();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.GameStatus.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.isGaming != null)
                message.isGaming = Boolean(object.isGaming);
            return message;
        };

        /**
         * Creates a plain object from a GameStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.GameStatus
         * @static
         * @param {dealer.GameStatus} message GameStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.isGaming = false;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.isGaming != null && message.hasOwnProperty("isGaming"))
                object.isGaming = message.isGaming;
            return object;
        };

        /**
         * Converts this GameStatus to JSON.
         * @function toJSON
         * @memberof dealer.GameStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStatus;
    })();

    return dealer;
})();

export const donate = $root.donate = (() => {

    /**
     * Namespace donate.
     * @exports donate
     * @namespace
     */
    const donate = {};

    donate.DonateCall = (function() {

        /**
         * Properties of a DonateCall.
         * @memberof donate
         * @interface IDonateCall
         * @property {foundation.IHeader|null} [header] DonateCall header
         * @property {number|null} [points] DonateCall points
         */

        /**
         * Constructs a new DonateCall.
         * @memberof donate
         * @classdesc Represents a DonateCall.
         * @implements IDonateCall
         * @constructor
         * @param {donate.IDonateCall=} [properties] Properties to set
         */
        function DonateCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DonateCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof donate.DonateCall
         * @instance
         */
        DonateCall.prototype.header = null;

        /**
         * DonateCall points.
         * @member {number} points
         * @memberof donate.DonateCall
         * @instance
         */
        DonateCall.prototype.points = 0;

        /**
         * Creates a new DonateCall instance using the specified properties.
         * @function create
         * @memberof donate.DonateCall
         * @static
         * @param {donate.IDonateCall=} [properties] Properties to set
         * @returns {donate.DonateCall} DonateCall instance
         */
        DonateCall.create = function create(properties) {
            return new DonateCall(properties);
        };

        /**
         * Encodes the specified DonateCall message. Does not implicitly {@link donate.DonateCall.verify|verify} messages.
         * @function encode
         * @memberof donate.DonateCall
         * @static
         * @param {donate.IDonateCall} message DonateCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DonateCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.points != null && Object.hasOwnProperty.call(message, "points"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.points);
            return writer;
        };

        /**
         * Encodes the specified DonateCall message, length delimited. Does not implicitly {@link donate.DonateCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof donate.DonateCall
         * @static
         * @param {donate.IDonateCall} message DonateCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DonateCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DonateCall message from the specified reader or buffer.
         * @function decode
         * @memberof donate.DonateCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {donate.DonateCall} DonateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DonateCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.donate.DonateCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.points = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DonateCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof donate.DonateCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {donate.DonateCall} DonateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DonateCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DonateCall message.
         * @function verify
         * @memberof donate.DonateCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DonateCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.points != null && message.hasOwnProperty("points"))
                if (typeof message.points !== "number")
                    return "points: number expected";
            return null;
        };

        /**
         * Creates a DonateCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof donate.DonateCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {donate.DonateCall} DonateCall
         */
        DonateCall.fromObject = function fromObject(object) {
            if (object instanceof $root.donate.DonateCall)
                return object;
            let message = new $root.donate.DonateCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".donate.DonateCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.points != null)
                message.points = Number(object.points);
            return message;
        };

        /**
         * Creates a plain object from a DonateCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof donate.DonateCall
         * @static
         * @param {donate.DonateCall} message DonateCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DonateCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.points = 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.points != null && message.hasOwnProperty("points"))
                object.points = options.json && !isFinite(message.points) ? String(message.points) : message.points;
            return object;
        };

        /**
         * Converts this DonateCall to JSON.
         * @function toJSON
         * @memberof donate.DonateCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DonateCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DonateCall;
    })();

    donate.DonateRecall = (function() {

        /**
         * Properties of a DonateRecall.
         * @memberof donate
         * @interface IDonateRecall
         * @property {foundation.IHeader|null} [header] DonateRecall header
         * @property {number|null} [result] DonateRecall result
         * @property {donate.DonateError|null} [error] DonateRecall error
         */

        /**
         * Constructs a new DonateRecall.
         * @memberof donate
         * @classdesc Represents a DonateRecall.
         * @implements IDonateRecall
         * @constructor
         * @param {donate.IDonateRecall=} [properties] Properties to set
         */
        function DonateRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DonateRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof donate.DonateRecall
         * @instance
         */
        DonateRecall.prototype.header = null;

        /**
         * DonateRecall result.
         * @member {number} result
         * @memberof donate.DonateRecall
         * @instance
         */
        DonateRecall.prototype.result = 0;

        /**
         * DonateRecall error.
         * @member {donate.DonateError} error
         * @memberof donate.DonateRecall
         * @instance
         */
        DonateRecall.prototype.error = 0;

        /**
         * Creates a new DonateRecall instance using the specified properties.
         * @function create
         * @memberof donate.DonateRecall
         * @static
         * @param {donate.IDonateRecall=} [properties] Properties to set
         * @returns {donate.DonateRecall} DonateRecall instance
         */
        DonateRecall.create = function create(properties) {
            return new DonateRecall(properties);
        };

        /**
         * Encodes the specified DonateRecall message. Does not implicitly {@link donate.DonateRecall.verify|verify} messages.
         * @function encode
         * @memberof donate.DonateRecall
         * @static
         * @param {donate.IDonateRecall} message DonateRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DonateRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.error);
            return writer;
        };

        /**
         * Encodes the specified DonateRecall message, length delimited. Does not implicitly {@link donate.DonateRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof donate.DonateRecall
         * @static
         * @param {donate.IDonateRecall} message DonateRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DonateRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DonateRecall message from the specified reader or buffer.
         * @function decode
         * @memberof donate.DonateRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {donate.DonateRecall} DonateRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DonateRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.donate.DonateRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.error = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DonateRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof donate.DonateRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {donate.DonateRecall} DonateRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DonateRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DonateRecall message.
         * @function verify
         * @memberof donate.DonateRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DonateRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a DonateRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof donate.DonateRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {donate.DonateRecall} DonateRecall
         */
        DonateRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.donate.DonateRecall)
                return object;
            let message = new $root.donate.DonateRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".donate.DonateRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.result != null)
                message.result = object.result | 0;
            switch (object.error) {
            case "Default":
            case 0:
                message.error = 0;
                break;
            case "InvalidDonate":
            case 1:
                message.error = 1;
                break;
            case "NotEnoughWallet":
            case 2:
                message.error = 2;
                break;
            case "NoPermission":
            case 3:
                message.error = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a DonateRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof donate.DonateRecall
         * @static
         * @param {donate.DonateRecall} message DonateRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DonateRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.result = 0;
                object.error = options.enums === String ? "Default" : 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.donate.DonateError[message.error] : message.error;
            return object;
        };

        /**
         * Converts this DonateRecall to JSON.
         * @function toJSON
         * @memberof donate.DonateRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DonateRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DonateRecall;
    })();

    /**
     * DonateError enum.
     * @name donate.DonateError
     * @enum {number}
     * @property {number} Default=0 Default value
     * @property {number} InvalidDonate=1 InvalidDonate value
     * @property {number} NotEnoughWallet=2 NotEnoughWallet value
     * @property {number} NoPermission=3 NoPermission value
     */
    donate.DonateError = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Default"] = 0;
        values[valuesById[1] = "InvalidDonate"] = 1;
        values[valuesById[2] = "NotEnoughWallet"] = 2;
        values[valuesById[3] = "NoPermission"] = 3;
        return values;
    })();

    return donate;
})();

export const foundation = $root.foundation = (() => {

    /**
     * Namespace foundation.
     * @exports foundation
     * @namespace
     */
    const foundation = {};

    foundation.Header = (function() {

        /**
         * Properties of a Header.
         * @memberof foundation
         * @interface IHeader
         * @property {route.URI|null} [uri] Header uri
         */

        /**
         * Constructs a new Header.
         * @memberof foundation
         * @classdesc Represents a Header.
         * @implements IHeader
         * @constructor
         * @param {foundation.IHeader=} [properties] Properties to set
         */
        function Header(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Header uri.
         * @member {route.URI} uri
         * @memberof foundation.Header
         * @instance
         */
        Header.prototype.uri = 0;

        /**
         * Creates a new Header instance using the specified properties.
         * @function create
         * @memberof foundation.Header
         * @static
         * @param {foundation.IHeader=} [properties] Properties to set
         * @returns {foundation.Header} Header instance
         */
        Header.create = function create(properties) {
            return new Header(properties);
        };

        /**
         * Encodes the specified Header message. Does not implicitly {@link foundation.Header.verify|verify} messages.
         * @function encode
         * @memberof foundation.Header
         * @static
         * @param {foundation.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uri);
            return writer;
        };

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link foundation.Header.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foundation.Header
         * @static
         * @param {foundation.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @function decode
         * @memberof foundation.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foundation.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.foundation.Header();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uri = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foundation.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foundation.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Header message.
         * @function verify
         * @memberof foundation.Header
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Header.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uri != null && message.hasOwnProperty("uri"))
                switch (message.uri) {
                default:
                    return "uri: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 1006:
                case 7:
                case 8:
                case 9:
                case 10:
                case 100:
                case 101:
                case 102:
                case 110:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 1501:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 220:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 4000:
                case 4001:
                case 5000:
                case 5001:
                case 6000:
                case 6001:
                case 7000:
                case 7001:
                case 7002:
                case 7003:
                case 7004:
                case 8001:
                case 8002:
                case 8101:
                case 8102:
                case 8103:
                    break;
                }
            return null;
        };

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foundation.Header
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foundation.Header} Header
         */
        Header.fromObject = function fromObject(object) {
            if (object instanceof $root.foundation.Header)
                return object;
            let message = new $root.foundation.Header();
            switch (object.uri) {
            case "Default":
            case 0:
                message.uri = 0;
                break;
            case "LoginCall":
            case 1:
                message.uri = 1;
                break;
            case "LoginRecall":
            case 2:
                message.uri = 2;
                break;
            case "LobbyInfo":
            case 3:
                message.uri = 3;
                break;
            case "UserInfo":
            case 4:
                message.uri = 4;
                break;
            case "TableJoinCall":
            case 5:
                message.uri = 5;
                break;
            case "TableJoinRecall":
            case 6:
                message.uri = 6;
                break;
            case "BroadcastJoinedPlayers":
            case 1006:
                message.uri = 1006;
                break;
            case "BetCall":
            case 7:
                message.uri = 7;
                break;
            case "BetRecall":
            case 8:
                message.uri = 8;
                break;
            case "BetResetCall":
            case 9:
                message.uri = 9;
                break;
            case "BetResetRecall":
            case 10:
                message.uri = 10;
                break;
            case "BetConfirmCall":
            case 100:
                message.uri = 100;
                break;
            case "BetConfirmRecall":
            case 101:
                message.uri = 101;
                break;
            case "BroadcastBetConfirmRecall":
            case 102:
                message.uri = 102;
                break;
            case "BroadcastBetstatus":
            case 110:
                message.uri = 110;
                break;
            case "Draw":
            case 11:
                message.uri = 11;
                break;
            case "DealerGameResult":
            case 12:
                message.uri = 12;
                break;
            case "BroadcastGameResult":
            case 13:
                message.uri = 13;
                break;
            case "BetRoundStart":
            case 14:
                message.uri = 14;
                break;
            case "BetRoundEnd":
            case 15:
                message.uri = 15;
                break;
            case "BetRoundEndCall":
            case 1501:
                message.uri = 1501;
                break;
            case "BetRoundCountdown":
            case 16:
                message.uri = 16;
                break;
            case "HeartbeatPing":
            case 17:
                message.uri = 17;
                break;
            case "HeartbeatPong":
            case 18:
                message.uri = 18;
                break;
            case "DealerRoundStartCall":
            case 19:
                message.uri = 19;
                break;
            case "DealerRoundStartRecall":
            case 20:
                message.uri = 20;
                break;
            case "DealerRoundEndCall":
            case 21:
                message.uri = 21;
                break;
            case "DealerRoundEndRecall":
            case 22:
                message.uri = 22;
                break;
            case "BroadcastDealerRoundEnd":
            case 220:
                message.uri = 220;
                break;
            case "BetError":
            case 23:
                message.uri = 23;
                break;
            case "GameStatus":
            case 24:
                message.uri = 24;
                break;
            case "DealerGameStatus":
            case 25:
                message.uri = 25;
                break;
            case "Roadmap":
            case 26:
                message.uri = 26;
                break;
            case "WhiteCard":
            case 27:
                message.uri = 27;
                break;
            case "AskRoadCall":
            case 28:
                message.uri = 28;
                break;
            case "AskRoadRecall":
            case 29:
                message.uri = 29;
                break;
            case "BroadcastAnnouncement":
            case 30:
                message.uri = 30;
                break;
            case "BroadcastTotalPlayersOnline":
            case 31:
                message.uri = 31;
                break;
            case "Kickout":
            case 4000:
                message.uri = 4000;
                break;
            case "kickoutwarn":
            case 4001:
                message.uri = 4001;
                break;
            case "Chat":
            case 5000:
                message.uri = 5000;
                break;
            case "BroadcastChat":
            case 5001:
                message.uri = 5001;
                break;
            case "DonateCall":
            case 6000:
                message.uri = 6000;
                break;
            case "DonateRecall":
            case 6001:
                message.uri = 6001;
                break;
            case "WatchcardNotificaion":
            case 7000:
                message.uri = 7000;
                break;
            case "WatchcardCall":
            case 7001:
                message.uri = 7001;
                break;
            case "WatchcardRecall":
            case 7002:
                message.uri = 7002;
                break;
            case "BroadcastWatchcardNotificaion":
            case 7003:
                message.uri = 7003;
                break;
            case "BroadcastWatchcardCall":
            case 7004:
                message.uri = 7004;
                break;
            case "HistoryCall":
            case 8001:
                message.uri = 8001;
                break;
            case "HistoryRecall":
            case 8002:
                message.uri = 8002;
                break;
            case "FlyCardCall":
            case 8101:
                message.uri = 8101;
                break;
            case "FlyCardRecall":
            case 8102:
                message.uri = 8102;
                break;
            case "BroadcastFlyCardRecall":
            case 8103:
                message.uri = 8103;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foundation.Header
         * @static
         * @param {foundation.Header} message Header
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Header.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.uri = options.enums === String ? "Default" : 0;
            if (message.uri != null && message.hasOwnProperty("uri"))
                object.uri = options.enums === String ? $root.route.URI[message.uri] : message.uri;
            return object;
        };

        /**
         * Converts this Header to JSON.
         * @function toJSON
         * @memberof foundation.Header
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Header.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Header;
    })();

    foundation.HeartbeatPing = (function() {

        /**
         * Properties of a HeartbeatPing.
         * @memberof foundation
         * @interface IHeartbeatPing
         * @property {foundation.IHeader|null} [header] HeartbeatPing header
         */

        /**
         * Constructs a new HeartbeatPing.
         * @memberof foundation
         * @classdesc Represents a HeartbeatPing.
         * @implements IHeartbeatPing
         * @constructor
         * @param {foundation.IHeartbeatPing=} [properties] Properties to set
         */
        function HeartbeatPing(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatPing header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof foundation.HeartbeatPing
         * @instance
         */
        HeartbeatPing.prototype.header = null;

        /**
         * Creates a new HeartbeatPing instance using the specified properties.
         * @function create
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {foundation.IHeartbeatPing=} [properties] Properties to set
         * @returns {foundation.HeartbeatPing} HeartbeatPing instance
         */
        HeartbeatPing.create = function create(properties) {
            return new HeartbeatPing(properties);
        };

        /**
         * Encodes the specified HeartbeatPing message. Does not implicitly {@link foundation.HeartbeatPing.verify|verify} messages.
         * @function encode
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {foundation.IHeartbeatPing} message HeartbeatPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatPing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeartbeatPing message, length delimited. Does not implicitly {@link foundation.HeartbeatPing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {foundation.IHeartbeatPing} message HeartbeatPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatPing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer.
         * @function decode
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foundation.HeartbeatPing} HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatPing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.foundation.HeartbeatPing();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foundation.HeartbeatPing} HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatPing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatPing message.
         * @function verify
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatPing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a HeartbeatPing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foundation.HeartbeatPing} HeartbeatPing
         */
        HeartbeatPing.fromObject = function fromObject(object) {
            if (object instanceof $root.foundation.HeartbeatPing)
                return object;
            let message = new $root.foundation.HeartbeatPing();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".foundation.HeartbeatPing.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatPing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {foundation.HeartbeatPing} message HeartbeatPing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatPing.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this HeartbeatPing to JSON.
         * @function toJSON
         * @memberof foundation.HeartbeatPing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatPing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartbeatPing;
    })();

    foundation.HeartbeatPong = (function() {

        /**
         * Properties of a HeartbeatPong.
         * @memberof foundation
         * @interface IHeartbeatPong
         * @property {foundation.IHeader|null} [header] HeartbeatPong header
         */

        /**
         * Constructs a new HeartbeatPong.
         * @memberof foundation
         * @classdesc Represents a HeartbeatPong.
         * @implements IHeartbeatPong
         * @constructor
         * @param {foundation.IHeartbeatPong=} [properties] Properties to set
         */
        function HeartbeatPong(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatPong header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof foundation.HeartbeatPong
         * @instance
         */
        HeartbeatPong.prototype.header = null;

        /**
         * Creates a new HeartbeatPong instance using the specified properties.
         * @function create
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {foundation.IHeartbeatPong=} [properties] Properties to set
         * @returns {foundation.HeartbeatPong} HeartbeatPong instance
         */
        HeartbeatPong.create = function create(properties) {
            return new HeartbeatPong(properties);
        };

        /**
         * Encodes the specified HeartbeatPong message. Does not implicitly {@link foundation.HeartbeatPong.verify|verify} messages.
         * @function encode
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {foundation.IHeartbeatPong} message HeartbeatPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatPong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeartbeatPong message, length delimited. Does not implicitly {@link foundation.HeartbeatPong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {foundation.IHeartbeatPong} message HeartbeatPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatPong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatPong message from the specified reader or buffer.
         * @function decode
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foundation.HeartbeatPong} HeartbeatPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatPong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.foundation.HeartbeatPong();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatPong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foundation.HeartbeatPong} HeartbeatPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatPong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatPong message.
         * @function verify
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatPong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a HeartbeatPong message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foundation.HeartbeatPong} HeartbeatPong
         */
        HeartbeatPong.fromObject = function fromObject(object) {
            if (object instanceof $root.foundation.HeartbeatPong)
                return object;
            let message = new $root.foundation.HeartbeatPong();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".foundation.HeartbeatPong.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatPong message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {foundation.HeartbeatPong} message HeartbeatPong
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatPong.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this HeartbeatPong to JSON.
         * @function toJSON
         * @memberof foundation.HeartbeatPong
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatPong.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartbeatPong;
    })();

    foundation.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof foundation
         * @interface IMessage
         * @property {foundation.IHeader|null} [header] Message header
         */

        /**
         * Constructs a new Message.
         * @memberof foundation
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {foundation.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof foundation.Message
         * @instance
         */
        Message.prototype.header = null;

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof foundation.Message
         * @static
         * @param {foundation.IMessage=} [properties] Properties to set
         * @returns {foundation.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link foundation.Message.verify|verify} messages.
         * @function encode
         * @memberof foundation.Message
         * @static
         * @param {foundation.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link foundation.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foundation.Message
         * @static
         * @param {foundation.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof foundation.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foundation.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.foundation.Message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foundation.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foundation.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof foundation.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foundation.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foundation.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.foundation.Message)
                return object;
            let message = new $root.foundation.Message();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".foundation.Message.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foundation.Message
         * @static
         * @param {foundation.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof foundation.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    return foundation;
})();

export const game = $root.game = (() => {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    const game = {};

    /**
     * Status enum.
     * @name game.Status
     * @enum {number}
     * @property {number} default=0 default value
     * @property {number} beting=1 beting value
     * @property {number} drawing=2 drawing value
     * @property {number} waiting=3 waiting value
     * @property {number} paused=4 paused value
     * @property {number} watchingcard=5 watchingcard value
     */
    game.Status = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "default"] = 0;
        values[valuesById[1] = "beting"] = 1;
        values[valuesById[2] = "drawing"] = 2;
        values[valuesById[3] = "waiting"] = 3;
        values[valuesById[4] = "paused"] = 4;
        values[valuesById[5] = "watchingcard"] = 5;
        return values;
    })();

    /**
     * GameType enum.
     * @name game.GameType
     * @enum {number}
     * @property {number} GameType_default=0 GameType_default value
     * @property {number} normal=1 normal value
     * @property {number} vip=2 vip value
     */
    game.GameType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GameType_default"] = 0;
        values[valuesById[1] = "normal"] = 1;
        values[valuesById[2] = "vip"] = 2;
        return values;
    })();

    /**
     * WatchcardSide enum.
     * @name game.WatchcardSide
     * @enum {number}
     * @property {number} WatchcardSide_default=0 WatchcardSide_default value
     * @property {number} Banker=1 Banker value
     * @property {number} Player=2 Player value
     */
    game.WatchcardSide = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WatchcardSide_default"] = 0;
        values[valuesById[1] = "Banker"] = 1;
        values[valuesById[2] = "Player"] = 2;
        return values;
    })();

    game.GameResultCounter = (function() {

        /**
         * Properties of a GameResultCounter.
         * @memberof game
         * @interface IGameResultCounter
         * @property {number|null} [player] GameResultCounter player
         * @property {number|null} [banker] GameResultCounter banker
         * @property {number|null} [tie] GameResultCounter tie
         * @property {number|null} [playerPair] GameResultCounter playerPair
         * @property {number|null} [bankerPair] GameResultCounter bankerPair
         */

        /**
         * Constructs a new GameResultCounter.
         * @memberof game
         * @classdesc Represents a GameResultCounter.
         * @implements IGameResultCounter
         * @constructor
         * @param {game.IGameResultCounter=} [properties] Properties to set
         */
        function GameResultCounter(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResultCounter player.
         * @member {number} player
         * @memberof game.GameResultCounter
         * @instance
         */
        GameResultCounter.prototype.player = 0;

        /**
         * GameResultCounter banker.
         * @member {number} banker
         * @memberof game.GameResultCounter
         * @instance
         */
        GameResultCounter.prototype.banker = 0;

        /**
         * GameResultCounter tie.
         * @member {number} tie
         * @memberof game.GameResultCounter
         * @instance
         */
        GameResultCounter.prototype.tie = 0;

        /**
         * GameResultCounter playerPair.
         * @member {number} playerPair
         * @memberof game.GameResultCounter
         * @instance
         */
        GameResultCounter.prototype.playerPair = 0;

        /**
         * GameResultCounter bankerPair.
         * @member {number} bankerPair
         * @memberof game.GameResultCounter
         * @instance
         */
        GameResultCounter.prototype.bankerPair = 0;

        /**
         * Creates a new GameResultCounter instance using the specified properties.
         * @function create
         * @memberof game.GameResultCounter
         * @static
         * @param {game.IGameResultCounter=} [properties] Properties to set
         * @returns {game.GameResultCounter} GameResultCounter instance
         */
        GameResultCounter.create = function create(properties) {
            return new GameResultCounter(properties);
        };

        /**
         * Encodes the specified GameResultCounter message. Does not implicitly {@link game.GameResultCounter.verify|verify} messages.
         * @function encode
         * @memberof game.GameResultCounter
         * @static
         * @param {game.IGameResultCounter} message GameResultCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultCounter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.player);
            if (message.banker != null && Object.hasOwnProperty.call(message, "banker"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.banker);
            if (message.tie != null && Object.hasOwnProperty.call(message, "tie"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.tie);
            if (message.playerPair != null && Object.hasOwnProperty.call(message, "playerPair"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.playerPair);
            if (message.bankerPair != null && Object.hasOwnProperty.call(message, "bankerPair"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.bankerPair);
            return writer;
        };

        /**
         * Encodes the specified GameResultCounter message, length delimited. Does not implicitly {@link game.GameResultCounter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameResultCounter
         * @static
         * @param {game.IGameResultCounter} message GameResultCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultCounter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResultCounter message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameResultCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameResultCounter} GameResultCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultCounter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameResultCounter();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = reader.int32();
                    break;
                case 2:
                    message.banker = reader.int32();
                    break;
                case 3:
                    message.tie = reader.int32();
                    break;
                case 4:
                    message.playerPair = reader.int32();
                    break;
                case 5:
                    message.bankerPair = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameResultCounter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameResultCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameResultCounter} GameResultCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultCounter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResultCounter message.
         * @function verify
         * @memberof game.GameResultCounter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResultCounter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player"))
                if (!$util.isInteger(message.player))
                    return "player: integer expected";
            if (message.banker != null && message.hasOwnProperty("banker"))
                if (!$util.isInteger(message.banker))
                    return "banker: integer expected";
            if (message.tie != null && message.hasOwnProperty("tie"))
                if (!$util.isInteger(message.tie))
                    return "tie: integer expected";
            if (message.playerPair != null && message.hasOwnProperty("playerPair"))
                if (!$util.isInteger(message.playerPair))
                    return "playerPair: integer expected";
            if (message.bankerPair != null && message.hasOwnProperty("bankerPair"))
                if (!$util.isInteger(message.bankerPair))
                    return "bankerPair: integer expected";
            return null;
        };

        /**
         * Creates a GameResultCounter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GameResultCounter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GameResultCounter} GameResultCounter
         */
        GameResultCounter.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GameResultCounter)
                return object;
            let message = new $root.game.GameResultCounter();
            if (object.player != null)
                message.player = object.player | 0;
            if (object.banker != null)
                message.banker = object.banker | 0;
            if (object.tie != null)
                message.tie = object.tie | 0;
            if (object.playerPair != null)
                message.playerPair = object.playerPair | 0;
            if (object.bankerPair != null)
                message.bankerPair = object.bankerPair | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameResultCounter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GameResultCounter
         * @static
         * @param {game.GameResultCounter} message GameResultCounter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResultCounter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.player = 0;
                object.banker = 0;
                object.tie = 0;
                object.playerPair = 0;
                object.bankerPair = 0;
            }
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = message.player;
            if (message.banker != null && message.hasOwnProperty("banker"))
                object.banker = message.banker;
            if (message.tie != null && message.hasOwnProperty("tie"))
                object.tie = message.tie;
            if (message.playerPair != null && message.hasOwnProperty("playerPair"))
                object.playerPair = message.playerPair;
            if (message.bankerPair != null && message.hasOwnProperty("bankerPair"))
                object.bankerPair = message.bankerPair;
            return object;
        };

        /**
         * Converts this GameResultCounter to JSON.
         * @function toJSON
         * @memberof game.GameResultCounter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResultCounter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameResultCounter;
    })();

    game.BetRoundStart = (function() {

        /**
         * Properties of a BetRoundStart.
         * @memberof game
         * @interface IBetRoundStart
         * @property {foundation.IHeader|null} [header] BetRoundStart header
         * @property {string|null} [gameUuid] BetRoundStart gameUuid
         * @property {number|null} [timeRemain] BetRoundStart timeRemain
         * @property {number|null} [numOfShoe] BetRoundStart numOfShoe
         * @property {number|null} [numOfRound] BetRoundStart numOfRound
         * @property {game.IGameResultCounter|null} [gameResultCounter] BetRoundStart gameResultCounter
         * @property {Array.<roadmap.IAskRoadRecall>|null} [askRoadRecalls] BetRoundStart askRoadRecalls
         */

        /**
         * Constructs a new BetRoundStart.
         * @memberof game
         * @classdesc Represents a BetRoundStart.
         * @implements IBetRoundStart
         * @constructor
         * @param {game.IBetRoundStart=} [properties] Properties to set
         */
        function BetRoundStart(properties) {
            this.askRoadRecalls = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRoundStart header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.BetRoundStart
         * @instance
         */
        BetRoundStart.prototype.header = null;

        /**
         * BetRoundStart gameUuid.
         * @member {string} gameUuid
         * @memberof game.BetRoundStart
         * @instance
         */
        BetRoundStart.prototype.gameUuid = "";

        /**
         * BetRoundStart timeRemain.
         * @member {number} timeRemain
         * @memberof game.BetRoundStart
         * @instance
         */
        BetRoundStart.prototype.timeRemain = 0;

        /**
         * BetRoundStart numOfShoe.
         * @member {number} numOfShoe
         * @memberof game.BetRoundStart
         * @instance
         */
        BetRoundStart.prototype.numOfShoe = 0;

        /**
         * BetRoundStart numOfRound.
         * @member {number} numOfRound
         * @memberof game.BetRoundStart
         * @instance
         */
        BetRoundStart.prototype.numOfRound = 0;

        /**
         * BetRoundStart gameResultCounter.
         * @member {game.IGameResultCounter|null|undefined} gameResultCounter
         * @memberof game.BetRoundStart
         * @instance
         */
        BetRoundStart.prototype.gameResultCounter = null;

        /**
         * BetRoundStart askRoadRecalls.
         * @member {Array.<roadmap.IAskRoadRecall>} askRoadRecalls
         * @memberof game.BetRoundStart
         * @instance
         */
        BetRoundStart.prototype.askRoadRecalls = $util.emptyArray;

        /**
         * Creates a new BetRoundStart instance using the specified properties.
         * @function create
         * @memberof game.BetRoundStart
         * @static
         * @param {game.IBetRoundStart=} [properties] Properties to set
         * @returns {game.BetRoundStart} BetRoundStart instance
         */
        BetRoundStart.create = function create(properties) {
            return new BetRoundStart(properties);
        };

        /**
         * Encodes the specified BetRoundStart message. Does not implicitly {@link game.BetRoundStart.verify|verify} messages.
         * @function encode
         * @memberof game.BetRoundStart
         * @static
         * @param {game.IBetRoundStart} message BetRoundStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameUuid);
            if (message.timeRemain != null && Object.hasOwnProperty.call(message, "timeRemain"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.timeRemain);
            if (message.numOfShoe != null && Object.hasOwnProperty.call(message, "numOfShoe"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.numOfShoe);
            if (message.numOfRound != null && Object.hasOwnProperty.call(message, "numOfRound"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.numOfRound);
            if (message.gameResultCounter != null && Object.hasOwnProperty.call(message, "gameResultCounter"))
                $root.game.GameResultCounter.encode(message.gameResultCounter, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.askRoadRecalls != null && message.askRoadRecalls.length)
                for (let i = 0; i < message.askRoadRecalls.length; ++i)
                    $root.roadmap.AskRoadRecall.encode(message.askRoadRecalls[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BetRoundStart message, length delimited. Does not implicitly {@link game.BetRoundStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BetRoundStart
         * @static
         * @param {game.IBetRoundStart} message BetRoundStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRoundStart message from the specified reader or buffer.
         * @function decode
         * @memberof game.BetRoundStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BetRoundStart} BetRoundStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BetRoundStart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameUuid = reader.string();
                    break;
                case 3:
                    message.timeRemain = reader.int32();
                    break;
                case 4:
                    message.numOfShoe = reader.int32();
                    break;
                case 5:
                    message.numOfRound = reader.int32();
                    break;
                case 6:
                    message.gameResultCounter = $root.game.GameResultCounter.decode(reader, reader.uint32());
                    break;
                case 7:
                    if (!(message.askRoadRecalls && message.askRoadRecalls.length))
                        message.askRoadRecalls = [];
                    message.askRoadRecalls.push($root.roadmap.AskRoadRecall.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRoundStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BetRoundStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BetRoundStart} BetRoundStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRoundStart message.
         * @function verify
         * @memberof game.BetRoundStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRoundStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                if (!$util.isInteger(message.timeRemain))
                    return "timeRemain: integer expected";
            if (message.numOfShoe != null && message.hasOwnProperty("numOfShoe"))
                if (!$util.isInteger(message.numOfShoe))
                    return "numOfShoe: integer expected";
            if (message.numOfRound != null && message.hasOwnProperty("numOfRound"))
                if (!$util.isInteger(message.numOfRound))
                    return "numOfRound: integer expected";
            if (message.gameResultCounter != null && message.hasOwnProperty("gameResultCounter")) {
                let error = $root.game.GameResultCounter.verify(message.gameResultCounter);
                if (error)
                    return "gameResultCounter." + error;
            }
            if (message.askRoadRecalls != null && message.hasOwnProperty("askRoadRecalls")) {
                if (!Array.isArray(message.askRoadRecalls))
                    return "askRoadRecalls: array expected";
                for (let i = 0; i < message.askRoadRecalls.length; ++i) {
                    let error = $root.roadmap.AskRoadRecall.verify(message.askRoadRecalls[i]);
                    if (error)
                        return "askRoadRecalls." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BetRoundStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BetRoundStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BetRoundStart} BetRoundStart
         */
        BetRoundStart.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BetRoundStart)
                return object;
            let message = new $root.game.BetRoundStart();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.BetRoundStart.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            if (object.timeRemain != null)
                message.timeRemain = object.timeRemain | 0;
            if (object.numOfShoe != null)
                message.numOfShoe = object.numOfShoe | 0;
            if (object.numOfRound != null)
                message.numOfRound = object.numOfRound | 0;
            if (object.gameResultCounter != null) {
                if (typeof object.gameResultCounter !== "object")
                    throw TypeError(".game.BetRoundStart.gameResultCounter: object expected");
                message.gameResultCounter = $root.game.GameResultCounter.fromObject(object.gameResultCounter);
            }
            if (object.askRoadRecalls) {
                if (!Array.isArray(object.askRoadRecalls))
                    throw TypeError(".game.BetRoundStart.askRoadRecalls: array expected");
                message.askRoadRecalls = [];
                for (let i = 0; i < object.askRoadRecalls.length; ++i) {
                    if (typeof object.askRoadRecalls[i] !== "object")
                        throw TypeError(".game.BetRoundStart.askRoadRecalls: object expected");
                    message.askRoadRecalls[i] = $root.roadmap.AskRoadRecall.fromObject(object.askRoadRecalls[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BetRoundStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BetRoundStart
         * @static
         * @param {game.BetRoundStart} message BetRoundStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRoundStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.askRoadRecalls = [];
            if (options.defaults) {
                object.header = null;
                object.gameUuid = "";
                object.timeRemain = 0;
                object.numOfShoe = 0;
                object.numOfRound = 0;
                object.gameResultCounter = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                object.timeRemain = message.timeRemain;
            if (message.numOfShoe != null && message.hasOwnProperty("numOfShoe"))
                object.numOfShoe = message.numOfShoe;
            if (message.numOfRound != null && message.hasOwnProperty("numOfRound"))
                object.numOfRound = message.numOfRound;
            if (message.gameResultCounter != null && message.hasOwnProperty("gameResultCounter"))
                object.gameResultCounter = $root.game.GameResultCounter.toObject(message.gameResultCounter, options);
            if (message.askRoadRecalls && message.askRoadRecalls.length) {
                object.askRoadRecalls = [];
                for (let j = 0; j < message.askRoadRecalls.length; ++j)
                    object.askRoadRecalls[j] = $root.roadmap.AskRoadRecall.toObject(message.askRoadRecalls[j], options);
            }
            return object;
        };

        /**
         * Converts this BetRoundStart to JSON.
         * @function toJSON
         * @memberof game.BetRoundStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRoundStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRoundStart;
    })();

    game.BetRoundCountdown = (function() {

        /**
         * Properties of a BetRoundCountdown.
         * @memberof game
         * @interface IBetRoundCountdown
         * @property {foundation.IHeader|null} [header] BetRoundCountdown header
         * @property {number|null} [timeRemain] BetRoundCountdown timeRemain
         */

        /**
         * Constructs a new BetRoundCountdown.
         * @memberof game
         * @classdesc Represents a BetRoundCountdown.
         * @implements IBetRoundCountdown
         * @constructor
         * @param {game.IBetRoundCountdown=} [properties] Properties to set
         */
        function BetRoundCountdown(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRoundCountdown header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.BetRoundCountdown
         * @instance
         */
        BetRoundCountdown.prototype.header = null;

        /**
         * BetRoundCountdown timeRemain.
         * @member {number} timeRemain
         * @memberof game.BetRoundCountdown
         * @instance
         */
        BetRoundCountdown.prototype.timeRemain = 0;

        /**
         * Creates a new BetRoundCountdown instance using the specified properties.
         * @function create
         * @memberof game.BetRoundCountdown
         * @static
         * @param {game.IBetRoundCountdown=} [properties] Properties to set
         * @returns {game.BetRoundCountdown} BetRoundCountdown instance
         */
        BetRoundCountdown.create = function create(properties) {
            return new BetRoundCountdown(properties);
        };

        /**
         * Encodes the specified BetRoundCountdown message. Does not implicitly {@link game.BetRoundCountdown.verify|verify} messages.
         * @function encode
         * @memberof game.BetRoundCountdown
         * @static
         * @param {game.IBetRoundCountdown} message BetRoundCountdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundCountdown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.timeRemain != null && Object.hasOwnProperty.call(message, "timeRemain"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timeRemain);
            return writer;
        };

        /**
         * Encodes the specified BetRoundCountdown message, length delimited. Does not implicitly {@link game.BetRoundCountdown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BetRoundCountdown
         * @static
         * @param {game.IBetRoundCountdown} message BetRoundCountdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundCountdown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRoundCountdown message from the specified reader or buffer.
         * @function decode
         * @memberof game.BetRoundCountdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BetRoundCountdown} BetRoundCountdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundCountdown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BetRoundCountdown();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timeRemain = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRoundCountdown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BetRoundCountdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BetRoundCountdown} BetRoundCountdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundCountdown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRoundCountdown message.
         * @function verify
         * @memberof game.BetRoundCountdown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRoundCountdown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                if (!$util.isInteger(message.timeRemain))
                    return "timeRemain: integer expected";
            return null;
        };

        /**
         * Creates a BetRoundCountdown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BetRoundCountdown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BetRoundCountdown} BetRoundCountdown
         */
        BetRoundCountdown.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BetRoundCountdown)
                return object;
            let message = new $root.game.BetRoundCountdown();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.BetRoundCountdown.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.timeRemain != null)
                message.timeRemain = object.timeRemain | 0;
            return message;
        };

        /**
         * Creates a plain object from a BetRoundCountdown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BetRoundCountdown
         * @static
         * @param {game.BetRoundCountdown} message BetRoundCountdown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRoundCountdown.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.timeRemain = 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                object.timeRemain = message.timeRemain;
            return object;
        };

        /**
         * Converts this BetRoundCountdown to JSON.
         * @function toJSON
         * @memberof game.BetRoundCountdown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRoundCountdown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRoundCountdown;
    })();

    game.BetRoundEnd = (function() {

        /**
         * Properties of a BetRoundEnd.
         * @memberof game
         * @interface IBetRoundEnd
         * @property {foundation.IHeader|null} [header] BetRoundEnd header
         * @property {string|null} [gameUuid] BetRoundEnd gameUuid
         */

        /**
         * Constructs a new BetRoundEnd.
         * @memberof game
         * @classdesc Represents a BetRoundEnd.
         * @implements IBetRoundEnd
         * @constructor
         * @param {game.IBetRoundEnd=} [properties] Properties to set
         */
        function BetRoundEnd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRoundEnd header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.BetRoundEnd
         * @instance
         */
        BetRoundEnd.prototype.header = null;

        /**
         * BetRoundEnd gameUuid.
         * @member {string} gameUuid
         * @memberof game.BetRoundEnd
         * @instance
         */
        BetRoundEnd.prototype.gameUuid = "";

        /**
         * Creates a new BetRoundEnd instance using the specified properties.
         * @function create
         * @memberof game.BetRoundEnd
         * @static
         * @param {game.IBetRoundEnd=} [properties] Properties to set
         * @returns {game.BetRoundEnd} BetRoundEnd instance
         */
        BetRoundEnd.create = function create(properties) {
            return new BetRoundEnd(properties);
        };

        /**
         * Encodes the specified BetRoundEnd message. Does not implicitly {@link game.BetRoundEnd.verify|verify} messages.
         * @function encode
         * @memberof game.BetRoundEnd
         * @static
         * @param {game.IBetRoundEnd} message BetRoundEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameUuid);
            return writer;
        };

        /**
         * Encodes the specified BetRoundEnd message, length delimited. Does not implicitly {@link game.BetRoundEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BetRoundEnd
         * @static
         * @param {game.IBetRoundEnd} message BetRoundEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRoundEnd message from the specified reader or buffer.
         * @function decode
         * @memberof game.BetRoundEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BetRoundEnd} BetRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BetRoundEnd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameUuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRoundEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BetRoundEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BetRoundEnd} BetRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRoundEnd message.
         * @function verify
         * @memberof game.BetRoundEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRoundEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            return null;
        };

        /**
         * Creates a BetRoundEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BetRoundEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BetRoundEnd} BetRoundEnd
         */
        BetRoundEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BetRoundEnd)
                return object;
            let message = new $root.game.BetRoundEnd();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.BetRoundEnd.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            return message;
        };

        /**
         * Creates a plain object from a BetRoundEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BetRoundEnd
         * @static
         * @param {game.BetRoundEnd} message BetRoundEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRoundEnd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.gameUuid = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            return object;
        };

        /**
         * Converts this BetRoundEnd to JSON.
         * @function toJSON
         * @memberof game.BetRoundEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRoundEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRoundEnd;
    })();

    game.GameStatus = (function() {

        /**
         * Properties of a GameStatus.
         * @memberof game
         * @interface IGameStatus
         * @property {foundation.IHeader|null} [header] GameStatus header
         * @property {game.Status|null} [status] GameStatus status
         * @property {number|null} [timeRemain] GameStatus timeRemain
         * @property {Array.<dealer.IDraw>|null} [draws] GameStatus draws
         * @property {number|null} [numOfShoe] GameStatus numOfShoe
         * @property {number|null} [numOfRound] GameStatus numOfRound
         * @property {game.IGameResultCounter|null} [gameResultCounter] GameStatus gameResultCounter
         * @property {string|null} [gameUuid] GameStatus gameUuid
         */

        /**
         * Constructs a new GameStatus.
         * @memberof game
         * @classdesc Represents a GameStatus.
         * @implements IGameStatus
         * @constructor
         * @param {game.IGameStatus=} [properties] Properties to set
         */
        function GameStatus(properties) {
            this.draws = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStatus header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.header = null;

        /**
         * GameStatus status.
         * @member {game.Status} status
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.status = 0;

        /**
         * GameStatus timeRemain.
         * @member {number} timeRemain
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.timeRemain = 0;

        /**
         * GameStatus draws.
         * @member {Array.<dealer.IDraw>} draws
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.draws = $util.emptyArray;

        /**
         * GameStatus numOfShoe.
         * @member {number} numOfShoe
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.numOfShoe = 0;

        /**
         * GameStatus numOfRound.
         * @member {number} numOfRound
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.numOfRound = 0;

        /**
         * GameStatus gameResultCounter.
         * @member {game.IGameResultCounter|null|undefined} gameResultCounter
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.gameResultCounter = null;

        /**
         * GameStatus gameUuid.
         * @member {string} gameUuid
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.gameUuid = "";

        /**
         * Creates a new GameStatus instance using the specified properties.
         * @function create
         * @memberof game.GameStatus
         * @static
         * @param {game.IGameStatus=} [properties] Properties to set
         * @returns {game.GameStatus} GameStatus instance
         */
        GameStatus.create = function create(properties) {
            return new GameStatus(properties);
        };

        /**
         * Encodes the specified GameStatus message. Does not implicitly {@link game.GameStatus.verify|verify} messages.
         * @function encode
         * @memberof game.GameStatus
         * @static
         * @param {game.IGameStatus} message GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.timeRemain != null && Object.hasOwnProperty.call(message, "timeRemain"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.timeRemain);
            if (message.draws != null && message.draws.length)
                for (let i = 0; i < message.draws.length; ++i)
                    $root.dealer.Draw.encode(message.draws[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.numOfShoe != null && Object.hasOwnProperty.call(message, "numOfShoe"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.numOfShoe);
            if (message.numOfRound != null && Object.hasOwnProperty.call(message, "numOfRound"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.numOfRound);
            if (message.gameResultCounter != null && Object.hasOwnProperty.call(message, "gameResultCounter"))
                $root.game.GameResultCounter.encode(message.gameResultCounter, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.gameUuid);
            return writer;
        };

        /**
         * Encodes the specified GameStatus message, length delimited. Does not implicitly {@link game.GameStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameStatus
         * @static
         * @param {game.IGameStatus} message GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStatus message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameStatus} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.timeRemain = reader.int32();
                    break;
                case 4:
                    if (!(message.draws && message.draws.length))
                        message.draws = [];
                    message.draws.push($root.dealer.Draw.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.numOfShoe = reader.int32();
                    break;
                case 6:
                    message.numOfRound = reader.int32();
                    break;
                case 7:
                    message.gameResultCounter = $root.game.GameResultCounter.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.gameUuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameStatus} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStatus message.
         * @function verify
         * @memberof game.GameStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                if (!$util.isInteger(message.timeRemain))
                    return "timeRemain: integer expected";
            if (message.draws != null && message.hasOwnProperty("draws")) {
                if (!Array.isArray(message.draws))
                    return "draws: array expected";
                for (let i = 0; i < message.draws.length; ++i) {
                    let error = $root.dealer.Draw.verify(message.draws[i]);
                    if (error)
                        return "draws." + error;
                }
            }
            if (message.numOfShoe != null && message.hasOwnProperty("numOfShoe"))
                if (!$util.isInteger(message.numOfShoe))
                    return "numOfShoe: integer expected";
            if (message.numOfRound != null && message.hasOwnProperty("numOfRound"))
                if (!$util.isInteger(message.numOfRound))
                    return "numOfRound: integer expected";
            if (message.gameResultCounter != null && message.hasOwnProperty("gameResultCounter")) {
                let error = $root.game.GameResultCounter.verify(message.gameResultCounter);
                if (error)
                    return "gameResultCounter." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            return null;
        };

        /**
         * Creates a GameStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GameStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GameStatus} GameStatus
         */
        GameStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GameStatus)
                return object;
            let message = new $root.game.GameStatus();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.GameStatus.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            switch (object.status) {
            case "default":
            case 0:
                message.status = 0;
                break;
            case "beting":
            case 1:
                message.status = 1;
                break;
            case "drawing":
            case 2:
                message.status = 2;
                break;
            case "waiting":
            case 3:
                message.status = 3;
                break;
            case "paused":
            case 4:
                message.status = 4;
                break;
            case "watchingcard":
            case 5:
                message.status = 5;
                break;
            }
            if (object.timeRemain != null)
                message.timeRemain = object.timeRemain | 0;
            if (object.draws) {
                if (!Array.isArray(object.draws))
                    throw TypeError(".game.GameStatus.draws: array expected");
                message.draws = [];
                for (let i = 0; i < object.draws.length; ++i) {
                    if (typeof object.draws[i] !== "object")
                        throw TypeError(".game.GameStatus.draws: object expected");
                    message.draws[i] = $root.dealer.Draw.fromObject(object.draws[i]);
                }
            }
            if (object.numOfShoe != null)
                message.numOfShoe = object.numOfShoe | 0;
            if (object.numOfRound != null)
                message.numOfRound = object.numOfRound | 0;
            if (object.gameResultCounter != null) {
                if (typeof object.gameResultCounter !== "object")
                    throw TypeError(".game.GameStatus.gameResultCounter: object expected");
                message.gameResultCounter = $root.game.GameResultCounter.fromObject(object.gameResultCounter);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            return message;
        };

        /**
         * Creates a plain object from a GameStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GameStatus
         * @static
         * @param {game.GameStatus} message GameStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.draws = [];
            if (options.defaults) {
                object.header = null;
                object.status = options.enums === String ? "default" : 0;
                object.timeRemain = 0;
                object.numOfShoe = 0;
                object.numOfRound = 0;
                object.gameResultCounter = null;
                object.gameUuid = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.game.Status[message.status] : message.status;
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                object.timeRemain = message.timeRemain;
            if (message.draws && message.draws.length) {
                object.draws = [];
                for (let j = 0; j < message.draws.length; ++j)
                    object.draws[j] = $root.dealer.Draw.toObject(message.draws[j], options);
            }
            if (message.numOfShoe != null && message.hasOwnProperty("numOfShoe"))
                object.numOfShoe = message.numOfShoe;
            if (message.numOfRound != null && message.hasOwnProperty("numOfRound"))
                object.numOfRound = message.numOfRound;
            if (message.gameResultCounter != null && message.hasOwnProperty("gameResultCounter"))
                object.gameResultCounter = $root.game.GameResultCounter.toObject(message.gameResultCounter, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            return object;
        };

        /**
         * Converts this GameStatus to JSON.
         * @function toJSON
         * @memberof game.GameStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStatus;
    })();

    game.WatchcardNotificaion = (function() {

        /**
         * Properties of a WatchcardNotificaion.
         * @memberof game
         * @interface IWatchcardNotificaion
         * @property {foundation.IHeader|null} [header] WatchcardNotificaion header
         */

        /**
         * Constructs a new WatchcardNotificaion.
         * @memberof game
         * @classdesc Represents a WatchcardNotificaion.
         * @implements IWatchcardNotificaion
         * @constructor
         * @param {game.IWatchcardNotificaion=} [properties] Properties to set
         */
        function WatchcardNotificaion(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WatchcardNotificaion header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.WatchcardNotificaion
         * @instance
         */
        WatchcardNotificaion.prototype.header = null;

        /**
         * Creates a new WatchcardNotificaion instance using the specified properties.
         * @function create
         * @memberof game.WatchcardNotificaion
         * @static
         * @param {game.IWatchcardNotificaion=} [properties] Properties to set
         * @returns {game.WatchcardNotificaion} WatchcardNotificaion instance
         */
        WatchcardNotificaion.create = function create(properties) {
            return new WatchcardNotificaion(properties);
        };

        /**
         * Encodes the specified WatchcardNotificaion message. Does not implicitly {@link game.WatchcardNotificaion.verify|verify} messages.
         * @function encode
         * @memberof game.WatchcardNotificaion
         * @static
         * @param {game.IWatchcardNotificaion} message WatchcardNotificaion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WatchcardNotificaion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WatchcardNotificaion message, length delimited. Does not implicitly {@link game.WatchcardNotificaion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.WatchcardNotificaion
         * @static
         * @param {game.IWatchcardNotificaion} message WatchcardNotificaion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WatchcardNotificaion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WatchcardNotificaion message from the specified reader or buffer.
         * @function decode
         * @memberof game.WatchcardNotificaion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.WatchcardNotificaion} WatchcardNotificaion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WatchcardNotificaion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.WatchcardNotificaion();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WatchcardNotificaion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.WatchcardNotificaion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.WatchcardNotificaion} WatchcardNotificaion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WatchcardNotificaion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WatchcardNotificaion message.
         * @function verify
         * @memberof game.WatchcardNotificaion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WatchcardNotificaion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a WatchcardNotificaion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.WatchcardNotificaion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.WatchcardNotificaion} WatchcardNotificaion
         */
        WatchcardNotificaion.fromObject = function fromObject(object) {
            if (object instanceof $root.game.WatchcardNotificaion)
                return object;
            let message = new $root.game.WatchcardNotificaion();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.WatchcardNotificaion.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a WatchcardNotificaion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.WatchcardNotificaion
         * @static
         * @param {game.WatchcardNotificaion} message WatchcardNotificaion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WatchcardNotificaion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this WatchcardNotificaion to JSON.
         * @function toJSON
         * @memberof game.WatchcardNotificaion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WatchcardNotificaion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WatchcardNotificaion;
    })();

    game.BroadcastWatchcardNotificaion = (function() {

        /**
         * Properties of a BroadcastWatchcardNotificaion.
         * @memberof game
         * @interface IBroadcastWatchcardNotificaion
         * @property {foundation.IHeader|null} [header] BroadcastWatchcardNotificaion header
         * @property {string|null} [account] BroadcastWatchcardNotificaion account
         * @property {game.WatchcardSide|null} [side] BroadcastWatchcardNotificaion side
         */

        /**
         * Constructs a new BroadcastWatchcardNotificaion.
         * @memberof game
         * @classdesc Represents a BroadcastWatchcardNotificaion.
         * @implements IBroadcastWatchcardNotificaion
         * @constructor
         * @param {game.IBroadcastWatchcardNotificaion=} [properties] Properties to set
         */
        function BroadcastWatchcardNotificaion(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastWatchcardNotificaion header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.BroadcastWatchcardNotificaion
         * @instance
         */
        BroadcastWatchcardNotificaion.prototype.header = null;

        /**
         * BroadcastWatchcardNotificaion account.
         * @member {string} account
         * @memberof game.BroadcastWatchcardNotificaion
         * @instance
         */
        BroadcastWatchcardNotificaion.prototype.account = "";

        /**
         * BroadcastWatchcardNotificaion side.
         * @member {game.WatchcardSide} side
         * @memberof game.BroadcastWatchcardNotificaion
         * @instance
         */
        BroadcastWatchcardNotificaion.prototype.side = 0;

        /**
         * Creates a new BroadcastWatchcardNotificaion instance using the specified properties.
         * @function create
         * @memberof game.BroadcastWatchcardNotificaion
         * @static
         * @param {game.IBroadcastWatchcardNotificaion=} [properties] Properties to set
         * @returns {game.BroadcastWatchcardNotificaion} BroadcastWatchcardNotificaion instance
         */
        BroadcastWatchcardNotificaion.create = function create(properties) {
            return new BroadcastWatchcardNotificaion(properties);
        };

        /**
         * Encodes the specified BroadcastWatchcardNotificaion message. Does not implicitly {@link game.BroadcastWatchcardNotificaion.verify|verify} messages.
         * @function encode
         * @memberof game.BroadcastWatchcardNotificaion
         * @static
         * @param {game.IBroadcastWatchcardNotificaion} message BroadcastWatchcardNotificaion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastWatchcardNotificaion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
            if (message.side != null && Object.hasOwnProperty.call(message, "side"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.side);
            return writer;
        };

        /**
         * Encodes the specified BroadcastWatchcardNotificaion message, length delimited. Does not implicitly {@link game.BroadcastWatchcardNotificaion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BroadcastWatchcardNotificaion
         * @static
         * @param {game.IBroadcastWatchcardNotificaion} message BroadcastWatchcardNotificaion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastWatchcardNotificaion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastWatchcardNotificaion message from the specified reader or buffer.
         * @function decode
         * @memberof game.BroadcastWatchcardNotificaion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BroadcastWatchcardNotificaion} BroadcastWatchcardNotificaion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastWatchcardNotificaion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BroadcastWatchcardNotificaion();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.account = reader.string();
                    break;
                case 3:
                    message.side = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastWatchcardNotificaion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BroadcastWatchcardNotificaion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BroadcastWatchcardNotificaion} BroadcastWatchcardNotificaion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastWatchcardNotificaion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastWatchcardNotificaion message.
         * @function verify
         * @memberof game.BroadcastWatchcardNotificaion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastWatchcardNotificaion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.side != null && message.hasOwnProperty("side"))
                switch (message.side) {
                default:
                    return "side: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a BroadcastWatchcardNotificaion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BroadcastWatchcardNotificaion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BroadcastWatchcardNotificaion} BroadcastWatchcardNotificaion
         */
        BroadcastWatchcardNotificaion.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BroadcastWatchcardNotificaion)
                return object;
            let message = new $root.game.BroadcastWatchcardNotificaion();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.BroadcastWatchcardNotificaion.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.account != null)
                message.account = String(object.account);
            switch (object.side) {
            case "WatchcardSide_default":
            case 0:
                message.side = 0;
                break;
            case "Banker":
            case 1:
                message.side = 1;
                break;
            case "Player":
            case 2:
                message.side = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastWatchcardNotificaion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BroadcastWatchcardNotificaion
         * @static
         * @param {game.BroadcastWatchcardNotificaion} message BroadcastWatchcardNotificaion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastWatchcardNotificaion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.account = "";
                object.side = options.enums === String ? "WatchcardSide_default" : 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = options.enums === String ? $root.game.WatchcardSide[message.side] : message.side;
            return object;
        };

        /**
         * Converts this BroadcastWatchcardNotificaion to JSON.
         * @function toJSON
         * @memberof game.BroadcastWatchcardNotificaion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastWatchcardNotificaion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastWatchcardNotificaion;
    })();

    game.WatchcardCall = (function() {

        /**
         * Properties of a WatchcardCall.
         * @memberof game
         * @interface IWatchcardCall
         * @property {foundation.IHeader|null} [header] WatchcardCall header
         * @property {boolean|null} [confirm] WatchcardCall confirm
         */

        /**
         * Constructs a new WatchcardCall.
         * @memberof game
         * @classdesc Represents a WatchcardCall.
         * @implements IWatchcardCall
         * @constructor
         * @param {game.IWatchcardCall=} [properties] Properties to set
         */
        function WatchcardCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WatchcardCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.WatchcardCall
         * @instance
         */
        WatchcardCall.prototype.header = null;

        /**
         * WatchcardCall confirm.
         * @member {boolean} confirm
         * @memberof game.WatchcardCall
         * @instance
         */
        WatchcardCall.prototype.confirm = false;

        /**
         * Creates a new WatchcardCall instance using the specified properties.
         * @function create
         * @memberof game.WatchcardCall
         * @static
         * @param {game.IWatchcardCall=} [properties] Properties to set
         * @returns {game.WatchcardCall} WatchcardCall instance
         */
        WatchcardCall.create = function create(properties) {
            return new WatchcardCall(properties);
        };

        /**
         * Encodes the specified WatchcardCall message. Does not implicitly {@link game.WatchcardCall.verify|verify} messages.
         * @function encode
         * @memberof game.WatchcardCall
         * @static
         * @param {game.IWatchcardCall} message WatchcardCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WatchcardCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.confirm != null && Object.hasOwnProperty.call(message, "confirm"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.confirm);
            return writer;
        };

        /**
         * Encodes the specified WatchcardCall message, length delimited. Does not implicitly {@link game.WatchcardCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.WatchcardCall
         * @static
         * @param {game.IWatchcardCall} message WatchcardCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WatchcardCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WatchcardCall message from the specified reader or buffer.
         * @function decode
         * @memberof game.WatchcardCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.WatchcardCall} WatchcardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WatchcardCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.WatchcardCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.confirm = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WatchcardCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.WatchcardCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.WatchcardCall} WatchcardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WatchcardCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WatchcardCall message.
         * @function verify
         * @memberof game.WatchcardCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WatchcardCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.confirm != null && message.hasOwnProperty("confirm"))
                if (typeof message.confirm !== "boolean")
                    return "confirm: boolean expected";
            return null;
        };

        /**
         * Creates a WatchcardCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.WatchcardCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.WatchcardCall} WatchcardCall
         */
        WatchcardCall.fromObject = function fromObject(object) {
            if (object instanceof $root.game.WatchcardCall)
                return object;
            let message = new $root.game.WatchcardCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.WatchcardCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.confirm != null)
                message.confirm = Boolean(object.confirm);
            return message;
        };

        /**
         * Creates a plain object from a WatchcardCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.WatchcardCall
         * @static
         * @param {game.WatchcardCall} message WatchcardCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WatchcardCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.confirm = false;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.confirm != null && message.hasOwnProperty("confirm"))
                object.confirm = message.confirm;
            return object;
        };

        /**
         * Converts this WatchcardCall to JSON.
         * @function toJSON
         * @memberof game.WatchcardCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WatchcardCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WatchcardCall;
    })();

    game.BroadcastWatchcardCall = (function() {

        /**
         * Properties of a BroadcastWatchcardCall.
         * @memberof game
         * @interface IBroadcastWatchcardCall
         * @property {foundation.IHeader|null} [header] BroadcastWatchcardCall header
         * @property {string|null} [account] BroadcastWatchcardCall account
         * @property {game.WatchcardSide|null} [side] BroadcastWatchcardCall side
         * @property {game.IWatchcardCall|null} [call] BroadcastWatchcardCall call
         */

        /**
         * Constructs a new BroadcastWatchcardCall.
         * @memberof game
         * @classdesc Represents a BroadcastWatchcardCall.
         * @implements IBroadcastWatchcardCall
         * @constructor
         * @param {game.IBroadcastWatchcardCall=} [properties] Properties to set
         */
        function BroadcastWatchcardCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastWatchcardCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.BroadcastWatchcardCall
         * @instance
         */
        BroadcastWatchcardCall.prototype.header = null;

        /**
         * BroadcastWatchcardCall account.
         * @member {string} account
         * @memberof game.BroadcastWatchcardCall
         * @instance
         */
        BroadcastWatchcardCall.prototype.account = "";

        /**
         * BroadcastWatchcardCall side.
         * @member {game.WatchcardSide} side
         * @memberof game.BroadcastWatchcardCall
         * @instance
         */
        BroadcastWatchcardCall.prototype.side = 0;

        /**
         * BroadcastWatchcardCall call.
         * @member {game.IWatchcardCall|null|undefined} call
         * @memberof game.BroadcastWatchcardCall
         * @instance
         */
        BroadcastWatchcardCall.prototype.call = null;

        /**
         * Creates a new BroadcastWatchcardCall instance using the specified properties.
         * @function create
         * @memberof game.BroadcastWatchcardCall
         * @static
         * @param {game.IBroadcastWatchcardCall=} [properties] Properties to set
         * @returns {game.BroadcastWatchcardCall} BroadcastWatchcardCall instance
         */
        BroadcastWatchcardCall.create = function create(properties) {
            return new BroadcastWatchcardCall(properties);
        };

        /**
         * Encodes the specified BroadcastWatchcardCall message. Does not implicitly {@link game.BroadcastWatchcardCall.verify|verify} messages.
         * @function encode
         * @memberof game.BroadcastWatchcardCall
         * @static
         * @param {game.IBroadcastWatchcardCall} message BroadcastWatchcardCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastWatchcardCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
            if (message.side != null && Object.hasOwnProperty.call(message, "side"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.side);
            if (message.call != null && Object.hasOwnProperty.call(message, "call"))
                $root.game.WatchcardCall.encode(message.call, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BroadcastWatchcardCall message, length delimited. Does not implicitly {@link game.BroadcastWatchcardCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BroadcastWatchcardCall
         * @static
         * @param {game.IBroadcastWatchcardCall} message BroadcastWatchcardCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastWatchcardCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastWatchcardCall message from the specified reader or buffer.
         * @function decode
         * @memberof game.BroadcastWatchcardCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BroadcastWatchcardCall} BroadcastWatchcardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastWatchcardCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BroadcastWatchcardCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.account = reader.string();
                    break;
                case 3:
                    message.side = reader.int32();
                    break;
                case 4:
                    message.call = $root.game.WatchcardCall.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastWatchcardCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BroadcastWatchcardCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BroadcastWatchcardCall} BroadcastWatchcardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastWatchcardCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastWatchcardCall message.
         * @function verify
         * @memberof game.BroadcastWatchcardCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastWatchcardCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.side != null && message.hasOwnProperty("side"))
                switch (message.side) {
                default:
                    return "side: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.call != null && message.hasOwnProperty("call")) {
                let error = $root.game.WatchcardCall.verify(message.call);
                if (error)
                    return "call." + error;
            }
            return null;
        };

        /**
         * Creates a BroadcastWatchcardCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BroadcastWatchcardCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BroadcastWatchcardCall} BroadcastWatchcardCall
         */
        BroadcastWatchcardCall.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BroadcastWatchcardCall)
                return object;
            let message = new $root.game.BroadcastWatchcardCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.BroadcastWatchcardCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.account != null)
                message.account = String(object.account);
            switch (object.side) {
            case "WatchcardSide_default":
            case 0:
                message.side = 0;
                break;
            case "Banker":
            case 1:
                message.side = 1;
                break;
            case "Player":
            case 2:
                message.side = 2;
                break;
            }
            if (object.call != null) {
                if (typeof object.call !== "object")
                    throw TypeError(".game.BroadcastWatchcardCall.call: object expected");
                message.call = $root.game.WatchcardCall.fromObject(object.call);
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastWatchcardCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BroadcastWatchcardCall
         * @static
         * @param {game.BroadcastWatchcardCall} message BroadcastWatchcardCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastWatchcardCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.account = "";
                object.side = options.enums === String ? "WatchcardSide_default" : 0;
                object.call = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = options.enums === String ? $root.game.WatchcardSide[message.side] : message.side;
            if (message.call != null && message.hasOwnProperty("call"))
                object.call = $root.game.WatchcardCall.toObject(message.call, options);
            return object;
        };

        /**
         * Converts this BroadcastWatchcardCall to JSON.
         * @function toJSON
         * @memberof game.BroadcastWatchcardCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastWatchcardCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastWatchcardCall;
    })();

    game.WatchcardRecall = (function() {

        /**
         * Properties of a WatchcardRecall.
         * @memberof game
         * @interface IWatchcardRecall
         * @property {foundation.IHeader|null} [header] WatchcardRecall header
         * @property {game.IWatchcardUrl|null} [watchcardUrl] WatchcardRecall watchcardUrl
         */

        /**
         * Constructs a new WatchcardRecall.
         * @memberof game
         * @classdesc Represents a WatchcardRecall.
         * @implements IWatchcardRecall
         * @constructor
         * @param {game.IWatchcardRecall=} [properties] Properties to set
         */
        function WatchcardRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WatchcardRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.WatchcardRecall
         * @instance
         */
        WatchcardRecall.prototype.header = null;

        /**
         * WatchcardRecall watchcardUrl.
         * @member {game.IWatchcardUrl|null|undefined} watchcardUrl
         * @memberof game.WatchcardRecall
         * @instance
         */
        WatchcardRecall.prototype.watchcardUrl = null;

        /**
         * Creates a new WatchcardRecall instance using the specified properties.
         * @function create
         * @memberof game.WatchcardRecall
         * @static
         * @param {game.IWatchcardRecall=} [properties] Properties to set
         * @returns {game.WatchcardRecall} WatchcardRecall instance
         */
        WatchcardRecall.create = function create(properties) {
            return new WatchcardRecall(properties);
        };

        /**
         * Encodes the specified WatchcardRecall message. Does not implicitly {@link game.WatchcardRecall.verify|verify} messages.
         * @function encode
         * @memberof game.WatchcardRecall
         * @static
         * @param {game.IWatchcardRecall} message WatchcardRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WatchcardRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.watchcardUrl != null && Object.hasOwnProperty.call(message, "watchcardUrl"))
                $root.game.WatchcardUrl.encode(message.watchcardUrl, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WatchcardRecall message, length delimited. Does not implicitly {@link game.WatchcardRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.WatchcardRecall
         * @static
         * @param {game.IWatchcardRecall} message WatchcardRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WatchcardRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WatchcardRecall message from the specified reader or buffer.
         * @function decode
         * @memberof game.WatchcardRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.WatchcardRecall} WatchcardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WatchcardRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.WatchcardRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.watchcardUrl = $root.game.WatchcardUrl.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WatchcardRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.WatchcardRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.WatchcardRecall} WatchcardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WatchcardRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WatchcardRecall message.
         * @function verify
         * @memberof game.WatchcardRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WatchcardRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.watchcardUrl != null && message.hasOwnProperty("watchcardUrl")) {
                let error = $root.game.WatchcardUrl.verify(message.watchcardUrl);
                if (error)
                    return "watchcardUrl." + error;
            }
            return null;
        };

        /**
         * Creates a WatchcardRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.WatchcardRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.WatchcardRecall} WatchcardRecall
         */
        WatchcardRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.game.WatchcardRecall)
                return object;
            let message = new $root.game.WatchcardRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.WatchcardRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.watchcardUrl != null) {
                if (typeof object.watchcardUrl !== "object")
                    throw TypeError(".game.WatchcardRecall.watchcardUrl: object expected");
                message.watchcardUrl = $root.game.WatchcardUrl.fromObject(object.watchcardUrl);
            }
            return message;
        };

        /**
         * Creates a plain object from a WatchcardRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.WatchcardRecall
         * @static
         * @param {game.WatchcardRecall} message WatchcardRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WatchcardRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.watchcardUrl = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.watchcardUrl != null && message.hasOwnProperty("watchcardUrl"))
                object.watchcardUrl = $root.game.WatchcardUrl.toObject(message.watchcardUrl, options);
            return object;
        };

        /**
         * Converts this WatchcardRecall to JSON.
         * @function toJSON
         * @memberof game.WatchcardRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WatchcardRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WatchcardRecall;
    })();

    game.WatchcardUrl = (function() {

        /**
         * Properties of a WatchcardUrl.
         * @memberof game
         * @interface IWatchcardUrl
         * @property {game.IStreamingUrl|null} [banker] WatchcardUrl banker
         * @property {game.IStreamingUrl|null} [player] WatchcardUrl player
         */

        /**
         * Constructs a new WatchcardUrl.
         * @memberof game
         * @classdesc Represents a WatchcardUrl.
         * @implements IWatchcardUrl
         * @constructor
         * @param {game.IWatchcardUrl=} [properties] Properties to set
         */
        function WatchcardUrl(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WatchcardUrl banker.
         * @member {game.IStreamingUrl|null|undefined} banker
         * @memberof game.WatchcardUrl
         * @instance
         */
        WatchcardUrl.prototype.banker = null;

        /**
         * WatchcardUrl player.
         * @member {game.IStreamingUrl|null|undefined} player
         * @memberof game.WatchcardUrl
         * @instance
         */
        WatchcardUrl.prototype.player = null;

        /**
         * Creates a new WatchcardUrl instance using the specified properties.
         * @function create
         * @memberof game.WatchcardUrl
         * @static
         * @param {game.IWatchcardUrl=} [properties] Properties to set
         * @returns {game.WatchcardUrl} WatchcardUrl instance
         */
        WatchcardUrl.create = function create(properties) {
            return new WatchcardUrl(properties);
        };

        /**
         * Encodes the specified WatchcardUrl message. Does not implicitly {@link game.WatchcardUrl.verify|verify} messages.
         * @function encode
         * @memberof game.WatchcardUrl
         * @static
         * @param {game.IWatchcardUrl} message WatchcardUrl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WatchcardUrl.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.banker != null && Object.hasOwnProperty.call(message, "banker"))
                $root.game.StreamingUrl.encode(message.banker, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                $root.game.StreamingUrl.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WatchcardUrl message, length delimited. Does not implicitly {@link game.WatchcardUrl.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.WatchcardUrl
         * @static
         * @param {game.IWatchcardUrl} message WatchcardUrl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WatchcardUrl.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WatchcardUrl message from the specified reader or buffer.
         * @function decode
         * @memberof game.WatchcardUrl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.WatchcardUrl} WatchcardUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WatchcardUrl.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.WatchcardUrl();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.banker = $root.game.StreamingUrl.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.player = $root.game.StreamingUrl.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WatchcardUrl message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.WatchcardUrl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.WatchcardUrl} WatchcardUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WatchcardUrl.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WatchcardUrl message.
         * @function verify
         * @memberof game.WatchcardUrl
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WatchcardUrl.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.banker != null && message.hasOwnProperty("banker")) {
                let error = $root.game.StreamingUrl.verify(message.banker);
                if (error)
                    return "banker." + error;
            }
            if (message.player != null && message.hasOwnProperty("player")) {
                let error = $root.game.StreamingUrl.verify(message.player);
                if (error)
                    return "player." + error;
            }
            return null;
        };

        /**
         * Creates a WatchcardUrl message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.WatchcardUrl
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.WatchcardUrl} WatchcardUrl
         */
        WatchcardUrl.fromObject = function fromObject(object) {
            if (object instanceof $root.game.WatchcardUrl)
                return object;
            let message = new $root.game.WatchcardUrl();
            if (object.banker != null) {
                if (typeof object.banker !== "object")
                    throw TypeError(".game.WatchcardUrl.banker: object expected");
                message.banker = $root.game.StreamingUrl.fromObject(object.banker);
            }
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".game.WatchcardUrl.player: object expected");
                message.player = $root.game.StreamingUrl.fromObject(object.player);
            }
            return message;
        };

        /**
         * Creates a plain object from a WatchcardUrl message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.WatchcardUrl
         * @static
         * @param {game.WatchcardUrl} message WatchcardUrl
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WatchcardUrl.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.banker = null;
                object.player = null;
            }
            if (message.banker != null && message.hasOwnProperty("banker"))
                object.banker = $root.game.StreamingUrl.toObject(message.banker, options);
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.game.StreamingUrl.toObject(message.player, options);
            return object;
        };

        /**
         * Converts this WatchcardUrl to JSON.
         * @function toJSON
         * @memberof game.WatchcardUrl
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WatchcardUrl.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WatchcardUrl;
    })();

    game.StreamingUrl = (function() {

        /**
         * Properties of a StreamingUrl.
         * @memberof game
         * @interface IStreamingUrl
         * @property {string|null} [desktop] StreamingUrl desktop
         * @property {string|null} [moblie] StreamingUrl moblie
         */

        /**
         * Constructs a new StreamingUrl.
         * @memberof game
         * @classdesc Represents a StreamingUrl.
         * @implements IStreamingUrl
         * @constructor
         * @param {game.IStreamingUrl=} [properties] Properties to set
         */
        function StreamingUrl(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StreamingUrl desktop.
         * @member {string} desktop
         * @memberof game.StreamingUrl
         * @instance
         */
        StreamingUrl.prototype.desktop = "";

        /**
         * StreamingUrl moblie.
         * @member {string} moblie
         * @memberof game.StreamingUrl
         * @instance
         */
        StreamingUrl.prototype.moblie = "";

        /**
         * Creates a new StreamingUrl instance using the specified properties.
         * @function create
         * @memberof game.StreamingUrl
         * @static
         * @param {game.IStreamingUrl=} [properties] Properties to set
         * @returns {game.StreamingUrl} StreamingUrl instance
         */
        StreamingUrl.create = function create(properties) {
            return new StreamingUrl(properties);
        };

        /**
         * Encodes the specified StreamingUrl message. Does not implicitly {@link game.StreamingUrl.verify|verify} messages.
         * @function encode
         * @memberof game.StreamingUrl
         * @static
         * @param {game.IStreamingUrl} message StreamingUrl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamingUrl.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.desktop != null && Object.hasOwnProperty.call(message, "desktop"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.desktop);
            if (message.moblie != null && Object.hasOwnProperty.call(message, "moblie"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.moblie);
            return writer;
        };

        /**
         * Encodes the specified StreamingUrl message, length delimited. Does not implicitly {@link game.StreamingUrl.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.StreamingUrl
         * @static
         * @param {game.IStreamingUrl} message StreamingUrl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamingUrl.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StreamingUrl message from the specified reader or buffer.
         * @function decode
         * @memberof game.StreamingUrl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.StreamingUrl} StreamingUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamingUrl.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.StreamingUrl();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.desktop = reader.string();
                    break;
                case 2:
                    message.moblie = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StreamingUrl message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.StreamingUrl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.StreamingUrl} StreamingUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamingUrl.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StreamingUrl message.
         * @function verify
         * @memberof game.StreamingUrl
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StreamingUrl.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.desktop != null && message.hasOwnProperty("desktop"))
                if (!$util.isString(message.desktop))
                    return "desktop: string expected";
            if (message.moblie != null && message.hasOwnProperty("moblie"))
                if (!$util.isString(message.moblie))
                    return "moblie: string expected";
            return null;
        };

        /**
         * Creates a StreamingUrl message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.StreamingUrl
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.StreamingUrl} StreamingUrl
         */
        StreamingUrl.fromObject = function fromObject(object) {
            if (object instanceof $root.game.StreamingUrl)
                return object;
            let message = new $root.game.StreamingUrl();
            if (object.desktop != null)
                message.desktop = String(object.desktop);
            if (object.moblie != null)
                message.moblie = String(object.moblie);
            return message;
        };

        /**
         * Creates a plain object from a StreamingUrl message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.StreamingUrl
         * @static
         * @param {game.StreamingUrl} message StreamingUrl
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StreamingUrl.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.desktop = "";
                object.moblie = "";
            }
            if (message.desktop != null && message.hasOwnProperty("desktop"))
                object.desktop = message.desktop;
            if (message.moblie != null && message.hasOwnProperty("moblie"))
                object.moblie = message.moblie;
            return object;
        };

        /**
         * Converts this StreamingUrl to JSON.
         * @function toJSON
         * @memberof game.StreamingUrl
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StreamingUrl.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StreamingUrl;
    })();

    game.FlyCardCall = (function() {

        /**
         * Properties of a FlyCardCall.
         * @memberof game
         * @interface IFlyCardCall
         * @property {foundation.IHeader|null} [header] FlyCardCall header
         * @property {string|null} [gameUuid] FlyCardCall gameUuid
         */

        /**
         * Constructs a new FlyCardCall.
         * @memberof game
         * @classdesc Represents a FlyCardCall.
         * @implements IFlyCardCall
         * @constructor
         * @param {game.IFlyCardCall=} [properties] Properties to set
         */
        function FlyCardCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FlyCardCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.FlyCardCall
         * @instance
         */
        FlyCardCall.prototype.header = null;

        /**
         * FlyCardCall gameUuid.
         * @member {string} gameUuid
         * @memberof game.FlyCardCall
         * @instance
         */
        FlyCardCall.prototype.gameUuid = "";

        /**
         * Creates a new FlyCardCall instance using the specified properties.
         * @function create
         * @memberof game.FlyCardCall
         * @static
         * @param {game.IFlyCardCall=} [properties] Properties to set
         * @returns {game.FlyCardCall} FlyCardCall instance
         */
        FlyCardCall.create = function create(properties) {
            return new FlyCardCall(properties);
        };

        /**
         * Encodes the specified FlyCardCall message. Does not implicitly {@link game.FlyCardCall.verify|verify} messages.
         * @function encode
         * @memberof game.FlyCardCall
         * @static
         * @param {game.IFlyCardCall} message FlyCardCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FlyCardCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameUuid);
            return writer;
        };

        /**
         * Encodes the specified FlyCardCall message, length delimited. Does not implicitly {@link game.FlyCardCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.FlyCardCall
         * @static
         * @param {game.IFlyCardCall} message FlyCardCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FlyCardCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FlyCardCall message from the specified reader or buffer.
         * @function decode
         * @memberof game.FlyCardCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.FlyCardCall} FlyCardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FlyCardCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.FlyCardCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameUuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FlyCardCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.FlyCardCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.FlyCardCall} FlyCardCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FlyCardCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FlyCardCall message.
         * @function verify
         * @memberof game.FlyCardCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FlyCardCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            return null;
        };

        /**
         * Creates a FlyCardCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.FlyCardCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.FlyCardCall} FlyCardCall
         */
        FlyCardCall.fromObject = function fromObject(object) {
            if (object instanceof $root.game.FlyCardCall)
                return object;
            let message = new $root.game.FlyCardCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.FlyCardCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            return message;
        };

        /**
         * Creates a plain object from a FlyCardCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.FlyCardCall
         * @static
         * @param {game.FlyCardCall} message FlyCardCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FlyCardCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.gameUuid = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            return object;
        };

        /**
         * Converts this FlyCardCall to JSON.
         * @function toJSON
         * @memberof game.FlyCardCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FlyCardCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FlyCardCall;
    })();

    game.FlyCardRecall = (function() {

        /**
         * Properties of a FlyCardRecall.
         * @memberof game
         * @interface IFlyCardRecall
         * @property {foundation.IHeader|null} [header] FlyCardRecall header
         * @property {number|null} [result] FlyCardRecall result
         * @property {string|null} [error] FlyCardRecall error
         */

        /**
         * Constructs a new FlyCardRecall.
         * @memberof game
         * @classdesc Represents a FlyCardRecall.
         * @implements IFlyCardRecall
         * @constructor
         * @param {game.IFlyCardRecall=} [properties] Properties to set
         */
        function FlyCardRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FlyCardRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.FlyCardRecall
         * @instance
         */
        FlyCardRecall.prototype.header = null;

        /**
         * FlyCardRecall result.
         * @member {number} result
         * @memberof game.FlyCardRecall
         * @instance
         */
        FlyCardRecall.prototype.result = 0;

        /**
         * FlyCardRecall error.
         * @member {string} error
         * @memberof game.FlyCardRecall
         * @instance
         */
        FlyCardRecall.prototype.error = "";

        /**
         * Creates a new FlyCardRecall instance using the specified properties.
         * @function create
         * @memberof game.FlyCardRecall
         * @static
         * @param {game.IFlyCardRecall=} [properties] Properties to set
         * @returns {game.FlyCardRecall} FlyCardRecall instance
         */
        FlyCardRecall.create = function create(properties) {
            return new FlyCardRecall(properties);
        };

        /**
         * Encodes the specified FlyCardRecall message. Does not implicitly {@link game.FlyCardRecall.verify|verify} messages.
         * @function encode
         * @memberof game.FlyCardRecall
         * @static
         * @param {game.IFlyCardRecall} message FlyCardRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FlyCardRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.error);
            return writer;
        };

        /**
         * Encodes the specified FlyCardRecall message, length delimited. Does not implicitly {@link game.FlyCardRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.FlyCardRecall
         * @static
         * @param {game.IFlyCardRecall} message FlyCardRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FlyCardRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FlyCardRecall message from the specified reader or buffer.
         * @function decode
         * @memberof game.FlyCardRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.FlyCardRecall} FlyCardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FlyCardRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.FlyCardRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FlyCardRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.FlyCardRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.FlyCardRecall} FlyCardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FlyCardRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FlyCardRecall message.
         * @function verify
         * @memberof game.FlyCardRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FlyCardRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.error != null && message.hasOwnProperty("error"))
                if (!$util.isString(message.error))
                    return "error: string expected";
            return null;
        };

        /**
         * Creates a FlyCardRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.FlyCardRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.FlyCardRecall} FlyCardRecall
         */
        FlyCardRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.game.FlyCardRecall)
                return object;
            let message = new $root.game.FlyCardRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.FlyCardRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.result != null)
                message.result = object.result | 0;
            if (object.error != null)
                message.error = String(object.error);
            return message;
        };

        /**
         * Creates a plain object from a FlyCardRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.FlyCardRecall
         * @static
         * @param {game.FlyCardRecall} message FlyCardRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FlyCardRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.result = 0;
                object.error = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = message.error;
            return object;
        };

        /**
         * Converts this FlyCardRecall to JSON.
         * @function toJSON
         * @memberof game.FlyCardRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FlyCardRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FlyCardRecall;
    })();

    game.BroadcastFlyCardRecall = (function() {

        /**
         * Properties of a BroadcastFlyCardRecall.
         * @memberof game
         * @interface IBroadcastFlyCardRecall
         * @property {foundation.IHeader|null} [header] BroadcastFlyCardRecall header
         * @property {string|null} [account] BroadcastFlyCardRecall account
         * @property {game.IFlyCardRecall|null} [recall] BroadcastFlyCardRecall recall
         */

        /**
         * Constructs a new BroadcastFlyCardRecall.
         * @memberof game
         * @classdesc Represents a BroadcastFlyCardRecall.
         * @implements IBroadcastFlyCardRecall
         * @constructor
         * @param {game.IBroadcastFlyCardRecall=} [properties] Properties to set
         */
        function BroadcastFlyCardRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastFlyCardRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.BroadcastFlyCardRecall
         * @instance
         */
        BroadcastFlyCardRecall.prototype.header = null;

        /**
         * BroadcastFlyCardRecall account.
         * @member {string} account
         * @memberof game.BroadcastFlyCardRecall
         * @instance
         */
        BroadcastFlyCardRecall.prototype.account = "";

        /**
         * BroadcastFlyCardRecall recall.
         * @member {game.IFlyCardRecall|null|undefined} recall
         * @memberof game.BroadcastFlyCardRecall
         * @instance
         */
        BroadcastFlyCardRecall.prototype.recall = null;

        /**
         * Creates a new BroadcastFlyCardRecall instance using the specified properties.
         * @function create
         * @memberof game.BroadcastFlyCardRecall
         * @static
         * @param {game.IBroadcastFlyCardRecall=} [properties] Properties to set
         * @returns {game.BroadcastFlyCardRecall} BroadcastFlyCardRecall instance
         */
        BroadcastFlyCardRecall.create = function create(properties) {
            return new BroadcastFlyCardRecall(properties);
        };

        /**
         * Encodes the specified BroadcastFlyCardRecall message. Does not implicitly {@link game.BroadcastFlyCardRecall.verify|verify} messages.
         * @function encode
         * @memberof game.BroadcastFlyCardRecall
         * @static
         * @param {game.IBroadcastFlyCardRecall} message BroadcastFlyCardRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastFlyCardRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
            if (message.recall != null && Object.hasOwnProperty.call(message, "recall"))
                $root.game.FlyCardRecall.encode(message.recall, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BroadcastFlyCardRecall message, length delimited. Does not implicitly {@link game.BroadcastFlyCardRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BroadcastFlyCardRecall
         * @static
         * @param {game.IBroadcastFlyCardRecall} message BroadcastFlyCardRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastFlyCardRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastFlyCardRecall message from the specified reader or buffer.
         * @function decode
         * @memberof game.BroadcastFlyCardRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BroadcastFlyCardRecall} BroadcastFlyCardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastFlyCardRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BroadcastFlyCardRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.account = reader.string();
                    break;
                case 3:
                    message.recall = $root.game.FlyCardRecall.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastFlyCardRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BroadcastFlyCardRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BroadcastFlyCardRecall} BroadcastFlyCardRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastFlyCardRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastFlyCardRecall message.
         * @function verify
         * @memberof game.BroadcastFlyCardRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastFlyCardRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.recall != null && message.hasOwnProperty("recall")) {
                let error = $root.game.FlyCardRecall.verify(message.recall);
                if (error)
                    return "recall." + error;
            }
            return null;
        };

        /**
         * Creates a BroadcastFlyCardRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BroadcastFlyCardRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BroadcastFlyCardRecall} BroadcastFlyCardRecall
         */
        BroadcastFlyCardRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BroadcastFlyCardRecall)
                return object;
            let message = new $root.game.BroadcastFlyCardRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.BroadcastFlyCardRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.account != null)
                message.account = String(object.account);
            if (object.recall != null) {
                if (typeof object.recall !== "object")
                    throw TypeError(".game.BroadcastFlyCardRecall.recall: object expected");
                message.recall = $root.game.FlyCardRecall.fromObject(object.recall);
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastFlyCardRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BroadcastFlyCardRecall
         * @static
         * @param {game.BroadcastFlyCardRecall} message BroadcastFlyCardRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastFlyCardRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.account = "";
                object.recall = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.recall != null && message.hasOwnProperty("recall"))
                object.recall = $root.game.FlyCardRecall.toObject(message.recall, options);
            return object;
        };

        /**
         * Converts this BroadcastFlyCardRecall to JSON.
         * @function toJSON
         * @memberof game.BroadcastFlyCardRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastFlyCardRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastFlyCardRecall;
    })();

    return game;
})();

export const history = $root.history = (() => {

    /**
     * Namespace history.
     * @exports history
     * @namespace
     */
    const history = {};

    history.History = (function() {

        /**
         * Properties of a History.
         * @memberof history
         * @interface IHistory
         * @property {history.IBetStatus|null} [bets] History bets
         * @property {number|null} [totalBet] History totalBet
         * @property {Array.<history.HistoryResult>|null} [results] History results
         * @property {Array.<dealer.IDraw>|null} [draws] History draws
         * @property {string|null} [table] History table
         * @property {number|null} [numOfShoe] History numOfShoe
         * @property {number|null} [numOfRound] History numOfRound
         * @property {number|null} [totalWin] History totalWin
         * @property {string|null} [gameTime] History gameTime
         */

        /**
         * Constructs a new History.
         * @memberof history
         * @classdesc Represents a History.
         * @implements IHistory
         * @constructor
         * @param {history.IHistory=} [properties] Properties to set
         */
        function History(properties) {
            this.results = [];
            this.draws = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * History bets.
         * @member {history.IBetStatus|null|undefined} bets
         * @memberof history.History
         * @instance
         */
        History.prototype.bets = null;

        /**
         * History totalBet.
         * @member {number} totalBet
         * @memberof history.History
         * @instance
         */
        History.prototype.totalBet = 0;

        /**
         * History results.
         * @member {Array.<history.HistoryResult>} results
         * @memberof history.History
         * @instance
         */
        History.prototype.results = $util.emptyArray;

        /**
         * History draws.
         * @member {Array.<dealer.IDraw>} draws
         * @memberof history.History
         * @instance
         */
        History.prototype.draws = $util.emptyArray;

        /**
         * History table.
         * @member {string} table
         * @memberof history.History
         * @instance
         */
        History.prototype.table = "";

        /**
         * History numOfShoe.
         * @member {number} numOfShoe
         * @memberof history.History
         * @instance
         */
        History.prototype.numOfShoe = 0;

        /**
         * History numOfRound.
         * @member {number} numOfRound
         * @memberof history.History
         * @instance
         */
        History.prototype.numOfRound = 0;

        /**
         * History totalWin.
         * @member {number} totalWin
         * @memberof history.History
         * @instance
         */
        History.prototype.totalWin = 0;

        /**
         * History gameTime.
         * @member {string} gameTime
         * @memberof history.History
         * @instance
         */
        History.prototype.gameTime = "";

        /**
         * Creates a new History instance using the specified properties.
         * @function create
         * @memberof history.History
         * @static
         * @param {history.IHistory=} [properties] Properties to set
         * @returns {history.History} History instance
         */
        History.create = function create(properties) {
            return new History(properties);
        };

        /**
         * Encodes the specified History message. Does not implicitly {@link history.History.verify|verify} messages.
         * @function encode
         * @memberof history.History
         * @static
         * @param {history.IHistory} message History message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        History.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bets != null && Object.hasOwnProperty.call(message, "bets"))
                $root.history.BetStatus.encode(message.bets, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.totalBet != null && Object.hasOwnProperty.call(message, "totalBet"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.totalBet);
            if (message.results != null && message.results.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.results.length; ++i)
                    writer.int32(message.results[i]);
                writer.ldelim();
            }
            if (message.draws != null && message.draws.length)
                for (let i = 0; i < message.draws.length; ++i)
                    $root.dealer.Draw.encode(message.draws[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.table != null && Object.hasOwnProperty.call(message, "table"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.table);
            if (message.numOfShoe != null && Object.hasOwnProperty.call(message, "numOfShoe"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.numOfShoe);
            if (message.numOfRound != null && Object.hasOwnProperty.call(message, "numOfRound"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.numOfRound);
            if (message.totalWin != null && Object.hasOwnProperty.call(message, "totalWin"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.totalWin);
            if (message.gameTime != null && Object.hasOwnProperty.call(message, "gameTime"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.gameTime);
            return writer;
        };

        /**
         * Encodes the specified History message, length delimited. Does not implicitly {@link history.History.verify|verify} messages.
         * @function encodeDelimited
         * @memberof history.History
         * @static
         * @param {history.IHistory} message History message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        History.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a History message from the specified reader or buffer.
         * @function decode
         * @memberof history.History
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {history.History} History
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        History.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.history.History();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bets = $root.history.BetStatus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.totalBet = reader.double();
                    break;
                case 3:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.results.push(reader.int32());
                    } else
                        message.results.push(reader.int32());
                    break;
                case 4:
                    if (!(message.draws && message.draws.length))
                        message.draws = [];
                    message.draws.push($root.dealer.Draw.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.table = reader.string();
                    break;
                case 6:
                    message.numOfShoe = reader.int32();
                    break;
                case 7:
                    message.numOfRound = reader.int32();
                    break;
                case 8:
                    message.totalWin = reader.double();
                    break;
                case 9:
                    message.gameTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a History message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof history.History
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {history.History} History
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        History.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a History message.
         * @function verify
         * @memberof history.History
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        History.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bets != null && message.hasOwnProperty("bets")) {
                let error = $root.history.BetStatus.verify(message.bets);
                if (error)
                    return "bets." + error;
            }
            if (message.totalBet != null && message.hasOwnProperty("totalBet"))
                if (typeof message.totalBet !== "number")
                    return "totalBet: number expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (let i = 0; i < message.results.length; ++i)
                    switch (message.results[i]) {
                    default:
                        return "results: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
            }
            if (message.draws != null && message.hasOwnProperty("draws")) {
                if (!Array.isArray(message.draws))
                    return "draws: array expected";
                for (let i = 0; i < message.draws.length; ++i) {
                    let error = $root.dealer.Draw.verify(message.draws[i]);
                    if (error)
                        return "draws." + error;
                }
            }
            if (message.table != null && message.hasOwnProperty("table"))
                if (!$util.isString(message.table))
                    return "table: string expected";
            if (message.numOfShoe != null && message.hasOwnProperty("numOfShoe"))
                if (!$util.isInteger(message.numOfShoe))
                    return "numOfShoe: integer expected";
            if (message.numOfRound != null && message.hasOwnProperty("numOfRound"))
                if (!$util.isInteger(message.numOfRound))
                    return "numOfRound: integer expected";
            if (message.totalWin != null && message.hasOwnProperty("totalWin"))
                if (typeof message.totalWin !== "number")
                    return "totalWin: number expected";
            if (message.gameTime != null && message.hasOwnProperty("gameTime"))
                if (!$util.isString(message.gameTime))
                    return "gameTime: string expected";
            return null;
        };

        /**
         * Creates a History message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof history.History
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {history.History} History
         */
        History.fromObject = function fromObject(object) {
            if (object instanceof $root.history.History)
                return object;
            let message = new $root.history.History();
            if (object.bets != null) {
                if (typeof object.bets !== "object")
                    throw TypeError(".history.History.bets: object expected");
                message.bets = $root.history.BetStatus.fromObject(object.bets);
            }
            if (object.totalBet != null)
                message.totalBet = Number(object.totalBet);
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".history.History.results: array expected");
                message.results = [];
                for (let i = 0; i < object.results.length; ++i)
                    switch (object.results[i]) {
                    default:
                    case "ResultDefault":
                    case 0:
                        message.results[i] = 0;
                        break;
                    case "Banker":
                    case 1:
                        message.results[i] = 1;
                        break;
                    case "Player":
                    case 2:
                        message.results[i] = 2;
                        break;
                    case "BankerPair":
                    case 3:
                        message.results[i] = 3;
                        break;
                    case "Tie":
                    case 4:
                        message.results[i] = 4;
                        break;
                    case "PlayerPair":
                    case 5:
                        message.results[i] = 5;
                        break;
                    }
            }
            if (object.draws) {
                if (!Array.isArray(object.draws))
                    throw TypeError(".history.History.draws: array expected");
                message.draws = [];
                for (let i = 0; i < object.draws.length; ++i) {
                    if (typeof object.draws[i] !== "object")
                        throw TypeError(".history.History.draws: object expected");
                    message.draws[i] = $root.dealer.Draw.fromObject(object.draws[i]);
                }
            }
            if (object.table != null)
                message.table = String(object.table);
            if (object.numOfShoe != null)
                message.numOfShoe = object.numOfShoe | 0;
            if (object.numOfRound != null)
                message.numOfRound = object.numOfRound | 0;
            if (object.totalWin != null)
                message.totalWin = Number(object.totalWin);
            if (object.gameTime != null)
                message.gameTime = String(object.gameTime);
            return message;
        };

        /**
         * Creates a plain object from a History message. Also converts values to other types if specified.
         * @function toObject
         * @memberof history.History
         * @static
         * @param {history.History} message History
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        History.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.results = [];
                object.draws = [];
            }
            if (options.defaults) {
                object.bets = null;
                object.totalBet = 0;
                object.table = "";
                object.numOfShoe = 0;
                object.numOfRound = 0;
                object.totalWin = 0;
                object.gameTime = "";
            }
            if (message.bets != null && message.hasOwnProperty("bets"))
                object.bets = $root.history.BetStatus.toObject(message.bets, options);
            if (message.totalBet != null && message.hasOwnProperty("totalBet"))
                object.totalBet = options.json && !isFinite(message.totalBet) ? String(message.totalBet) : message.totalBet;
            if (message.results && message.results.length) {
                object.results = [];
                for (let j = 0; j < message.results.length; ++j)
                    object.results[j] = options.enums === String ? $root.history.HistoryResult[message.results[j]] : message.results[j];
            }
            if (message.draws && message.draws.length) {
                object.draws = [];
                for (let j = 0; j < message.draws.length; ++j)
                    object.draws[j] = $root.dealer.Draw.toObject(message.draws[j], options);
            }
            if (message.table != null && message.hasOwnProperty("table"))
                object.table = message.table;
            if (message.numOfShoe != null && message.hasOwnProperty("numOfShoe"))
                object.numOfShoe = message.numOfShoe;
            if (message.numOfRound != null && message.hasOwnProperty("numOfRound"))
                object.numOfRound = message.numOfRound;
            if (message.totalWin != null && message.hasOwnProperty("totalWin"))
                object.totalWin = options.json && !isFinite(message.totalWin) ? String(message.totalWin) : message.totalWin;
            if (message.gameTime != null && message.hasOwnProperty("gameTime"))
                object.gameTime = message.gameTime;
            return object;
        };

        /**
         * Converts this History to JSON.
         * @function toJSON
         * @memberof history.History
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        History.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return History;
    })();

    history.HistoryCall = (function() {

        /**
         * Properties of a HistoryCall.
         * @memberof history
         * @interface IHistoryCall
         * @property {foundation.IHeader|null} [header] HistoryCall header
         */

        /**
         * Constructs a new HistoryCall.
         * @memberof history
         * @classdesc Represents a HistoryCall.
         * @implements IHistoryCall
         * @constructor
         * @param {history.IHistoryCall=} [properties] Properties to set
         */
        function HistoryCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HistoryCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof history.HistoryCall
         * @instance
         */
        HistoryCall.prototype.header = null;

        /**
         * Creates a new HistoryCall instance using the specified properties.
         * @function create
         * @memberof history.HistoryCall
         * @static
         * @param {history.IHistoryCall=} [properties] Properties to set
         * @returns {history.HistoryCall} HistoryCall instance
         */
        HistoryCall.create = function create(properties) {
            return new HistoryCall(properties);
        };

        /**
         * Encodes the specified HistoryCall message. Does not implicitly {@link history.HistoryCall.verify|verify} messages.
         * @function encode
         * @memberof history.HistoryCall
         * @static
         * @param {history.IHistoryCall} message HistoryCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HistoryCall message, length delimited. Does not implicitly {@link history.HistoryCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof history.HistoryCall
         * @static
         * @param {history.IHistoryCall} message HistoryCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HistoryCall message from the specified reader or buffer.
         * @function decode
         * @memberof history.HistoryCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {history.HistoryCall} HistoryCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.history.HistoryCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HistoryCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof history.HistoryCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {history.HistoryCall} HistoryCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HistoryCall message.
         * @function verify
         * @memberof history.HistoryCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HistoryCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a HistoryCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof history.HistoryCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {history.HistoryCall} HistoryCall
         */
        HistoryCall.fromObject = function fromObject(object) {
            if (object instanceof $root.history.HistoryCall)
                return object;
            let message = new $root.history.HistoryCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".history.HistoryCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a HistoryCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof history.HistoryCall
         * @static
         * @param {history.HistoryCall} message HistoryCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HistoryCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this HistoryCall to JSON.
         * @function toJSON
         * @memberof history.HistoryCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HistoryCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HistoryCall;
    })();

    history.HistoryRecall = (function() {

        /**
         * Properties of a HistoryRecall.
         * @memberof history
         * @interface IHistoryRecall
         * @property {foundation.IHeader|null} [header] HistoryRecall header
         * @property {Array.<history.IHistory>|null} [histories] HistoryRecall histories
         */

        /**
         * Constructs a new HistoryRecall.
         * @memberof history
         * @classdesc Represents a HistoryRecall.
         * @implements IHistoryRecall
         * @constructor
         * @param {history.IHistoryRecall=} [properties] Properties to set
         */
        function HistoryRecall(properties) {
            this.histories = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HistoryRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof history.HistoryRecall
         * @instance
         */
        HistoryRecall.prototype.header = null;

        /**
         * HistoryRecall histories.
         * @member {Array.<history.IHistory>} histories
         * @memberof history.HistoryRecall
         * @instance
         */
        HistoryRecall.prototype.histories = $util.emptyArray;

        /**
         * Creates a new HistoryRecall instance using the specified properties.
         * @function create
         * @memberof history.HistoryRecall
         * @static
         * @param {history.IHistoryRecall=} [properties] Properties to set
         * @returns {history.HistoryRecall} HistoryRecall instance
         */
        HistoryRecall.create = function create(properties) {
            return new HistoryRecall(properties);
        };

        /**
         * Encodes the specified HistoryRecall message. Does not implicitly {@link history.HistoryRecall.verify|verify} messages.
         * @function encode
         * @memberof history.HistoryRecall
         * @static
         * @param {history.IHistoryRecall} message HistoryRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.histories != null && message.histories.length)
                for (let i = 0; i < message.histories.length; ++i)
                    $root.history.History.encode(message.histories[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HistoryRecall message, length delimited. Does not implicitly {@link history.HistoryRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof history.HistoryRecall
         * @static
         * @param {history.IHistoryRecall} message HistoryRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HistoryRecall message from the specified reader or buffer.
         * @function decode
         * @memberof history.HistoryRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {history.HistoryRecall} HistoryRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.history.HistoryRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.histories && message.histories.length))
                        message.histories = [];
                    message.histories.push($root.history.History.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HistoryRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof history.HistoryRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {history.HistoryRecall} HistoryRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HistoryRecall message.
         * @function verify
         * @memberof history.HistoryRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HistoryRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.histories != null && message.hasOwnProperty("histories")) {
                if (!Array.isArray(message.histories))
                    return "histories: array expected";
                for (let i = 0; i < message.histories.length; ++i) {
                    let error = $root.history.History.verify(message.histories[i]);
                    if (error)
                        return "histories." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HistoryRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof history.HistoryRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {history.HistoryRecall} HistoryRecall
         */
        HistoryRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.history.HistoryRecall)
                return object;
            let message = new $root.history.HistoryRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".history.HistoryRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.histories) {
                if (!Array.isArray(object.histories))
                    throw TypeError(".history.HistoryRecall.histories: array expected");
                message.histories = [];
                for (let i = 0; i < object.histories.length; ++i) {
                    if (typeof object.histories[i] !== "object")
                        throw TypeError(".history.HistoryRecall.histories: object expected");
                    message.histories[i] = $root.history.History.fromObject(object.histories[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HistoryRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof history.HistoryRecall
         * @static
         * @param {history.HistoryRecall} message HistoryRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HistoryRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.histories = [];
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.histories && message.histories.length) {
                object.histories = [];
                for (let j = 0; j < message.histories.length; ++j)
                    object.histories[j] = $root.history.History.toObject(message.histories[j], options);
            }
            return object;
        };

        /**
         * Converts this HistoryRecall to JSON.
         * @function toJSON
         * @memberof history.HistoryRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HistoryRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HistoryRecall;
    })();

    /**
     * HistoryResult enum.
     * @name history.HistoryResult
     * @enum {number}
     * @property {number} ResultDefault=0 ResultDefault value
     * @property {number} Banker=1 Banker value
     * @property {number} Player=2 Player value
     * @property {number} BankerPair=3 BankerPair value
     * @property {number} Tie=4 Tie value
     * @property {number} PlayerPair=5 PlayerPair value
     */
    history.HistoryResult = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ResultDefault"] = 0;
        values[valuesById[1] = "Banker"] = 1;
        values[valuesById[2] = "Player"] = 2;
        values[valuesById[3] = "BankerPair"] = 3;
        values[valuesById[4] = "Tie"] = 4;
        values[valuesById[5] = "PlayerPair"] = 5;
        return values;
    })();

    history.BetStatus = (function() {

        /**
         * Properties of a BetStatus.
         * @memberof history
         * @interface IBetStatus
         * @property {number|null} [Banker] BetStatus Banker
         * @property {number|null} [Player] BetStatus Player
         * @property {number|null} [BankerPair] BetStatus BankerPair
         * @property {number|null} [Tie] BetStatus Tie
         * @property {number|null} [PlayerPair] BetStatus PlayerPair
         */

        /**
         * Constructs a new BetStatus.
         * @memberof history
         * @classdesc Represents a BetStatus.
         * @implements IBetStatus
         * @constructor
         * @param {history.IBetStatus=} [properties] Properties to set
         */
        function BetStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetStatus Banker.
         * @member {number} Banker
         * @memberof history.BetStatus
         * @instance
         */
        BetStatus.prototype.Banker = 0;

        /**
         * BetStatus Player.
         * @member {number} Player
         * @memberof history.BetStatus
         * @instance
         */
        BetStatus.prototype.Player = 0;

        /**
         * BetStatus BankerPair.
         * @member {number} BankerPair
         * @memberof history.BetStatus
         * @instance
         */
        BetStatus.prototype.BankerPair = 0;

        /**
         * BetStatus Tie.
         * @member {number} Tie
         * @memberof history.BetStatus
         * @instance
         */
        BetStatus.prototype.Tie = 0;

        /**
         * BetStatus PlayerPair.
         * @member {number} PlayerPair
         * @memberof history.BetStatus
         * @instance
         */
        BetStatus.prototype.PlayerPair = 0;

        /**
         * Creates a new BetStatus instance using the specified properties.
         * @function create
         * @memberof history.BetStatus
         * @static
         * @param {history.IBetStatus=} [properties] Properties to set
         * @returns {history.BetStatus} BetStatus instance
         */
        BetStatus.create = function create(properties) {
            return new BetStatus(properties);
        };

        /**
         * Encodes the specified BetStatus message. Does not implicitly {@link history.BetStatus.verify|verify} messages.
         * @function encode
         * @memberof history.BetStatus
         * @static
         * @param {history.IBetStatus} message BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Banker != null && Object.hasOwnProperty.call(message, "Banker"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.Banker);
            if (message.Player != null && Object.hasOwnProperty.call(message, "Player"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.Player);
            if (message.BankerPair != null && Object.hasOwnProperty.call(message, "BankerPair"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.BankerPair);
            if (message.Tie != null && Object.hasOwnProperty.call(message, "Tie"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.Tie);
            if (message.PlayerPair != null && Object.hasOwnProperty.call(message, "PlayerPair"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.PlayerPair);
            return writer;
        };

        /**
         * Encodes the specified BetStatus message, length delimited. Does not implicitly {@link history.BetStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof history.BetStatus
         * @static
         * @param {history.IBetStatus} message BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetStatus message from the specified reader or buffer.
         * @function decode
         * @memberof history.BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {history.BetStatus} BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.history.BetStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Banker = reader.double();
                    break;
                case 2:
                    message.Player = reader.double();
                    break;
                case 3:
                    message.BankerPair = reader.double();
                    break;
                case 4:
                    message.Tie = reader.double();
                    break;
                case 5:
                    message.PlayerPair = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof history.BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {history.BetStatus} BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetStatus message.
         * @function verify
         * @memberof history.BetStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Banker != null && message.hasOwnProperty("Banker"))
                if (typeof message.Banker !== "number")
                    return "Banker: number expected";
            if (message.Player != null && message.hasOwnProperty("Player"))
                if (typeof message.Player !== "number")
                    return "Player: number expected";
            if (message.BankerPair != null && message.hasOwnProperty("BankerPair"))
                if (typeof message.BankerPair !== "number")
                    return "BankerPair: number expected";
            if (message.Tie != null && message.hasOwnProperty("Tie"))
                if (typeof message.Tie !== "number")
                    return "Tie: number expected";
            if (message.PlayerPair != null && message.hasOwnProperty("PlayerPair"))
                if (typeof message.PlayerPair !== "number")
                    return "PlayerPair: number expected";
            return null;
        };

        /**
         * Creates a BetStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof history.BetStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {history.BetStatus} BetStatus
         */
        BetStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.history.BetStatus)
                return object;
            let message = new $root.history.BetStatus();
            if (object.Banker != null)
                message.Banker = Number(object.Banker);
            if (object.Player != null)
                message.Player = Number(object.Player);
            if (object.BankerPair != null)
                message.BankerPair = Number(object.BankerPair);
            if (object.Tie != null)
                message.Tie = Number(object.Tie);
            if (object.PlayerPair != null)
                message.PlayerPair = Number(object.PlayerPair);
            return message;
        };

        /**
         * Creates a plain object from a BetStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof history.BetStatus
         * @static
         * @param {history.BetStatus} message BetStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Banker = 0;
                object.Player = 0;
                object.BankerPair = 0;
                object.Tie = 0;
                object.PlayerPair = 0;
            }
            if (message.Banker != null && message.hasOwnProperty("Banker"))
                object.Banker = options.json && !isFinite(message.Banker) ? String(message.Banker) : message.Banker;
            if (message.Player != null && message.hasOwnProperty("Player"))
                object.Player = options.json && !isFinite(message.Player) ? String(message.Player) : message.Player;
            if (message.BankerPair != null && message.hasOwnProperty("BankerPair"))
                object.BankerPair = options.json && !isFinite(message.BankerPair) ? String(message.BankerPair) : message.BankerPair;
            if (message.Tie != null && message.hasOwnProperty("Tie"))
                object.Tie = options.json && !isFinite(message.Tie) ? String(message.Tie) : message.Tie;
            if (message.PlayerPair != null && message.hasOwnProperty("PlayerPair"))
                object.PlayerPair = options.json && !isFinite(message.PlayerPair) ? String(message.PlayerPair) : message.PlayerPair;
            return object;
        };

        /**
         * Converts this BetStatus to JSON.
         * @function toJSON
         * @memberof history.BetStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetStatus;
    })();

    return history;
})();

export const kick = $root.kick = (() => {

    /**
     * Namespace kick.
     * @exports kick
     * @namespace
     */
    const kick = {};

    kick.kickout = (function() {

        /**
         * Properties of a kickout.
         * @memberof kick
         * @interface Ikickout
         * @property {foundation.IHeader|null} [header] kickout header
         * @property {string|null} [message] kickout message
         */

        /**
         * Constructs a new kickout.
         * @memberof kick
         * @classdesc Represents a kickout.
         * @implements Ikickout
         * @constructor
         * @param {kick.Ikickout=} [properties] Properties to set
         */
        function kickout(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * kickout header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof kick.kickout
         * @instance
         */
        kickout.prototype.header = null;

        /**
         * kickout message.
         * @member {string} message
         * @memberof kick.kickout
         * @instance
         */
        kickout.prototype.message = "";

        /**
         * Creates a new kickout instance using the specified properties.
         * @function create
         * @memberof kick.kickout
         * @static
         * @param {kick.Ikickout=} [properties] Properties to set
         * @returns {kick.kickout} kickout instance
         */
        kickout.create = function create(properties) {
            return new kickout(properties);
        };

        /**
         * Encodes the specified kickout message. Does not implicitly {@link kick.kickout.verify|verify} messages.
         * @function encode
         * @memberof kick.kickout
         * @static
         * @param {kick.Ikickout} message kickout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        kickout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified kickout message, length delimited. Does not implicitly {@link kick.kickout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kick.kickout
         * @static
         * @param {kick.Ikickout} message kickout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        kickout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a kickout message from the specified reader or buffer.
         * @function decode
         * @memberof kick.kickout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kick.kickout} kickout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        kickout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kick.kickout();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a kickout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kick.kickout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kick.kickout} kickout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        kickout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a kickout message.
         * @function verify
         * @memberof kick.kickout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        kickout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a kickout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kick.kickout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kick.kickout} kickout
         */
        kickout.fromObject = function fromObject(object) {
            if (object instanceof $root.kick.kickout)
                return object;
            let message = new $root.kick.kickout();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".kick.kickout.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a kickout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kick.kickout
         * @static
         * @param {kick.kickout} message kickout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        kickout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.message = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this kickout to JSON.
         * @function toJSON
         * @memberof kick.kickout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        kickout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return kickout;
    })();

    kick.kickoutWarn = (function() {

        /**
         * Properties of a kickoutWarn.
         * @memberof kick
         * @interface IkickoutWarn
         * @property {foundation.IHeader|null} [header] kickoutWarn header
         * @property {string|null} [message] kickoutWarn message
         */

        /**
         * Constructs a new kickoutWarn.
         * @memberof kick
         * @classdesc Represents a kickoutWarn.
         * @implements IkickoutWarn
         * @constructor
         * @param {kick.IkickoutWarn=} [properties] Properties to set
         */
        function kickoutWarn(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * kickoutWarn header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof kick.kickoutWarn
         * @instance
         */
        kickoutWarn.prototype.header = null;

        /**
         * kickoutWarn message.
         * @member {string} message
         * @memberof kick.kickoutWarn
         * @instance
         */
        kickoutWarn.prototype.message = "";

        /**
         * Creates a new kickoutWarn instance using the specified properties.
         * @function create
         * @memberof kick.kickoutWarn
         * @static
         * @param {kick.IkickoutWarn=} [properties] Properties to set
         * @returns {kick.kickoutWarn} kickoutWarn instance
         */
        kickoutWarn.create = function create(properties) {
            return new kickoutWarn(properties);
        };

        /**
         * Encodes the specified kickoutWarn message. Does not implicitly {@link kick.kickoutWarn.verify|verify} messages.
         * @function encode
         * @memberof kick.kickoutWarn
         * @static
         * @param {kick.IkickoutWarn} message kickoutWarn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        kickoutWarn.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified kickoutWarn message, length delimited. Does not implicitly {@link kick.kickoutWarn.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kick.kickoutWarn
         * @static
         * @param {kick.IkickoutWarn} message kickoutWarn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        kickoutWarn.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a kickoutWarn message from the specified reader or buffer.
         * @function decode
         * @memberof kick.kickoutWarn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kick.kickoutWarn} kickoutWarn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        kickoutWarn.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kick.kickoutWarn();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a kickoutWarn message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kick.kickoutWarn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kick.kickoutWarn} kickoutWarn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        kickoutWarn.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a kickoutWarn message.
         * @function verify
         * @memberof kick.kickoutWarn
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        kickoutWarn.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a kickoutWarn message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kick.kickoutWarn
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kick.kickoutWarn} kickoutWarn
         */
        kickoutWarn.fromObject = function fromObject(object) {
            if (object instanceof $root.kick.kickoutWarn)
                return object;
            let message = new $root.kick.kickoutWarn();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".kick.kickoutWarn.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a kickoutWarn message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kick.kickoutWarn
         * @static
         * @param {kick.kickoutWarn} message kickoutWarn
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        kickoutWarn.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.message = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this kickoutWarn to JSON.
         * @function toJSON
         * @memberof kick.kickoutWarn
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        kickoutWarn.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return kickoutWarn;
    })();

    return kick;
})();

export const lobby = $root.lobby = (() => {

    /**
     * Namespace lobby.
     * @exports lobby
     * @namespace
     */
    const lobby = {};

    lobby.LobbyInfo = (function() {

        /**
         * Properties of a LobbyInfo.
         * @memberof lobby
         * @interface ILobbyInfo
         * @property {foundation.IHeader|null} [header] LobbyInfo header
         * @property {Array.<lobby.ITableInfo>|null} [tables] LobbyInfo tables
         */

        /**
         * Constructs a new LobbyInfo.
         * @memberof lobby
         * @classdesc Represents a LobbyInfo.
         * @implements ILobbyInfo
         * @constructor
         * @param {lobby.ILobbyInfo=} [properties] Properties to set
         */
        function LobbyInfo(properties) {
            this.tables = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyInfo header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof lobby.LobbyInfo
         * @instance
         */
        LobbyInfo.prototype.header = null;

        /**
         * LobbyInfo tables.
         * @member {Array.<lobby.ITableInfo>} tables
         * @memberof lobby.LobbyInfo
         * @instance
         */
        LobbyInfo.prototype.tables = $util.emptyArray;

        /**
         * Creates a new LobbyInfo instance using the specified properties.
         * @function create
         * @memberof lobby.LobbyInfo
         * @static
         * @param {lobby.ILobbyInfo=} [properties] Properties to set
         * @returns {lobby.LobbyInfo} LobbyInfo instance
         */
        LobbyInfo.create = function create(properties) {
            return new LobbyInfo(properties);
        };

        /**
         * Encodes the specified LobbyInfo message. Does not implicitly {@link lobby.LobbyInfo.verify|verify} messages.
         * @function encode
         * @memberof lobby.LobbyInfo
         * @static
         * @param {lobby.ILobbyInfo} message LobbyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tables != null && message.tables.length)
                for (let i = 0; i < message.tables.length; ++i)
                    $root.lobby.TableInfo.encode(message.tables[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LobbyInfo message, length delimited. Does not implicitly {@link lobby.LobbyInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.LobbyInfo
         * @static
         * @param {lobby.ILobbyInfo} message LobbyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.LobbyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.LobbyInfo} LobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.LobbyInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.tables && message.tables.length))
                        message.tables = [];
                    message.tables.push($root.lobby.TableInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LobbyInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.LobbyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.LobbyInfo} LobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyInfo message.
         * @function verify
         * @memberof lobby.LobbyInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.tables != null && message.hasOwnProperty("tables")) {
                if (!Array.isArray(message.tables))
                    return "tables: array expected";
                for (let i = 0; i < message.tables.length; ++i) {
                    let error = $root.lobby.TableInfo.verify(message.tables[i]);
                    if (error)
                        return "tables." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LobbyInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby.LobbyInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby.LobbyInfo} LobbyInfo
         */
        LobbyInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby.LobbyInfo)
                return object;
            let message = new $root.lobby.LobbyInfo();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".lobby.LobbyInfo.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.tables) {
                if (!Array.isArray(object.tables))
                    throw TypeError(".lobby.LobbyInfo.tables: array expected");
                message.tables = [];
                for (let i = 0; i < object.tables.length; ++i) {
                    if (typeof object.tables[i] !== "object")
                        throw TypeError(".lobby.LobbyInfo.tables: object expected");
                    message.tables[i] = $root.lobby.TableInfo.fromObject(object.tables[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LobbyInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby.LobbyInfo
         * @static
         * @param {lobby.LobbyInfo} message LobbyInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.tables = [];
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.tables && message.tables.length) {
                object.tables = [];
                for (let j = 0; j < message.tables.length; ++j)
                    object.tables[j] = $root.lobby.TableInfo.toObject(message.tables[j], options);
            }
            return object;
        };

        /**
         * Converts this LobbyInfo to JSON.
         * @function toJSON
         * @memberof lobby.LobbyInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LobbyInfo;
    })();

    lobby.TableInfo = (function() {

        /**
         * Properties of a TableInfo.
         * @memberof lobby
         * @interface ITableInfo
         * @property {string|null} [uuid] TableInfo uuid
         * @property {string|null} [name] TableInfo name
         * @property {table.IBetRule|null} [betRule] TableInfo betRule
         * @property {Array.<number>|null} [betList] TableInfo betList
         */

        /**
         * Constructs a new TableInfo.
         * @memberof lobby
         * @classdesc Represents a TableInfo.
         * @implements ITableInfo
         * @constructor
         * @param {lobby.ITableInfo=} [properties] Properties to set
         */
        function TableInfo(properties) {
            this.betList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableInfo uuid.
         * @member {string} uuid
         * @memberof lobby.TableInfo
         * @instance
         */
        TableInfo.prototype.uuid = "";

        /**
         * TableInfo name.
         * @member {string} name
         * @memberof lobby.TableInfo
         * @instance
         */
        TableInfo.prototype.name = "";

        /**
         * TableInfo betRule.
         * @member {table.IBetRule|null|undefined} betRule
         * @memberof lobby.TableInfo
         * @instance
         */
        TableInfo.prototype.betRule = null;

        /**
         * TableInfo betList.
         * @member {Array.<number>} betList
         * @memberof lobby.TableInfo
         * @instance
         */
        TableInfo.prototype.betList = $util.emptyArray;

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @function create
         * @memberof lobby.TableInfo
         * @static
         * @param {lobby.ITableInfo=} [properties] Properties to set
         * @returns {lobby.TableInfo} TableInfo instance
         */
        TableInfo.create = function create(properties) {
            return new TableInfo(properties);
        };

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link lobby.TableInfo.verify|verify} messages.
         * @function encode
         * @memberof lobby.TableInfo
         * @static
         * @param {lobby.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.betRule != null && Object.hasOwnProperty.call(message, "betRule"))
                $root.table.BetRule.encode(message.betRule, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.betList != null && message.betList.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (let i = 0; i < message.betList.length; ++i)
                    writer.double(message.betList[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link lobby.TableInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.TableInfo
         * @static
         * @param {lobby.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.TableInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.betRule = $root.table.BetRule.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.betList && message.betList.length))
                        message.betList = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.betList.push(reader.double());
                    } else
                        message.betList.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableInfo message.
         * @function verify
         * @memberof lobby.TableInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.betRule != null && message.hasOwnProperty("betRule")) {
                let error = $root.table.BetRule.verify(message.betRule);
                if (error)
                    return "betRule." + error;
            }
            if (message.betList != null && message.hasOwnProperty("betList")) {
                if (!Array.isArray(message.betList))
                    return "betList: array expected";
                for (let i = 0; i < message.betList.length; ++i)
                    if (typeof message.betList[i] !== "number")
                        return "betList: number[] expected";
            }
            return null;
        };

        /**
         * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby.TableInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby.TableInfo} TableInfo
         */
        TableInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby.TableInfo)
                return object;
            let message = new $root.lobby.TableInfo();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.betRule != null) {
                if (typeof object.betRule !== "object")
                    throw TypeError(".lobby.TableInfo.betRule: object expected");
                message.betRule = $root.table.BetRule.fromObject(object.betRule);
            }
            if (object.betList) {
                if (!Array.isArray(object.betList))
                    throw TypeError(".lobby.TableInfo.betList: array expected");
                message.betList = [];
                for (let i = 0; i < object.betList.length; ++i)
                    message.betList[i] = Number(object.betList[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby.TableInfo
         * @static
         * @param {lobby.TableInfo} message TableInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.betList = [];
            if (options.defaults) {
                object.uuid = "";
                object.name = "";
                object.betRule = null;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.betRule != null && message.hasOwnProperty("betRule"))
                object.betRule = $root.table.BetRule.toObject(message.betRule, options);
            if (message.betList && message.betList.length) {
                object.betList = [];
                for (let j = 0; j < message.betList.length; ++j)
                    object.betList[j] = options.json && !isFinite(message.betList[j]) ? String(message.betList[j]) : message.betList[j];
            }
            return object;
        };

        /**
         * Converts this TableInfo to JSON.
         * @function toJSON
         * @memberof lobby.TableInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableInfo;
    })();

    lobby.BroadcastTotalPlayersOnline = (function() {

        /**
         * Properties of a BroadcastTotalPlayersOnline.
         * @memberof lobby
         * @interface IBroadcastTotalPlayersOnline
         * @property {foundation.IHeader|null} [header] BroadcastTotalPlayersOnline header
         * @property {number|null} [numberOfPlayers] BroadcastTotalPlayersOnline numberOfPlayers
         */

        /**
         * Constructs a new BroadcastTotalPlayersOnline.
         * @memberof lobby
         * @classdesc Represents a BroadcastTotalPlayersOnline.
         * @implements IBroadcastTotalPlayersOnline
         * @constructor
         * @param {lobby.IBroadcastTotalPlayersOnline=} [properties] Properties to set
         */
        function BroadcastTotalPlayersOnline(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastTotalPlayersOnline header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof lobby.BroadcastTotalPlayersOnline
         * @instance
         */
        BroadcastTotalPlayersOnline.prototype.header = null;

        /**
         * BroadcastTotalPlayersOnline numberOfPlayers.
         * @member {number} numberOfPlayers
         * @memberof lobby.BroadcastTotalPlayersOnline
         * @instance
         */
        BroadcastTotalPlayersOnline.prototype.numberOfPlayers = 0;

        /**
         * Creates a new BroadcastTotalPlayersOnline instance using the specified properties.
         * @function create
         * @memberof lobby.BroadcastTotalPlayersOnline
         * @static
         * @param {lobby.IBroadcastTotalPlayersOnline=} [properties] Properties to set
         * @returns {lobby.BroadcastTotalPlayersOnline} BroadcastTotalPlayersOnline instance
         */
        BroadcastTotalPlayersOnline.create = function create(properties) {
            return new BroadcastTotalPlayersOnline(properties);
        };

        /**
         * Encodes the specified BroadcastTotalPlayersOnline message. Does not implicitly {@link lobby.BroadcastTotalPlayersOnline.verify|verify} messages.
         * @function encode
         * @memberof lobby.BroadcastTotalPlayersOnline
         * @static
         * @param {lobby.IBroadcastTotalPlayersOnline} message BroadcastTotalPlayersOnline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastTotalPlayersOnline.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.numberOfPlayers != null && Object.hasOwnProperty.call(message, "numberOfPlayers"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.numberOfPlayers);
            return writer;
        };

        /**
         * Encodes the specified BroadcastTotalPlayersOnline message, length delimited. Does not implicitly {@link lobby.BroadcastTotalPlayersOnline.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.BroadcastTotalPlayersOnline
         * @static
         * @param {lobby.IBroadcastTotalPlayersOnline} message BroadcastTotalPlayersOnline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastTotalPlayersOnline.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastTotalPlayersOnline message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.BroadcastTotalPlayersOnline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.BroadcastTotalPlayersOnline} BroadcastTotalPlayersOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastTotalPlayersOnline.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.BroadcastTotalPlayersOnline();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.numberOfPlayers = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastTotalPlayersOnline message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.BroadcastTotalPlayersOnline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.BroadcastTotalPlayersOnline} BroadcastTotalPlayersOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastTotalPlayersOnline.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastTotalPlayersOnline message.
         * @function verify
         * @memberof lobby.BroadcastTotalPlayersOnline
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastTotalPlayersOnline.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.numberOfPlayers != null && message.hasOwnProperty("numberOfPlayers"))
                if (!$util.isInteger(message.numberOfPlayers))
                    return "numberOfPlayers: integer expected";
            return null;
        };

        /**
         * Creates a BroadcastTotalPlayersOnline message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby.BroadcastTotalPlayersOnline
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby.BroadcastTotalPlayersOnline} BroadcastTotalPlayersOnline
         */
        BroadcastTotalPlayersOnline.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby.BroadcastTotalPlayersOnline)
                return object;
            let message = new $root.lobby.BroadcastTotalPlayersOnline();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".lobby.BroadcastTotalPlayersOnline.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.numberOfPlayers != null)
                message.numberOfPlayers = object.numberOfPlayers | 0;
            return message;
        };

        /**
         * Creates a plain object from a BroadcastTotalPlayersOnline message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby.BroadcastTotalPlayersOnline
         * @static
         * @param {lobby.BroadcastTotalPlayersOnline} message BroadcastTotalPlayersOnline
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastTotalPlayersOnline.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.numberOfPlayers = 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.numberOfPlayers != null && message.hasOwnProperty("numberOfPlayers"))
                object.numberOfPlayers = message.numberOfPlayers;
            return object;
        };

        /**
         * Converts this BroadcastTotalPlayersOnline to JSON.
         * @function toJSON
         * @memberof lobby.BroadcastTotalPlayersOnline
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastTotalPlayersOnline.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastTotalPlayersOnline;
    })();

    return lobby;
})();

export const roadmap = $root.roadmap = (() => {

    /**
     * Namespace roadmap.
     * @exports roadmap
     * @namespace
     */
    const roadmap = {};

    /**
     * Symbol enum.
     * @name roadmap.Symbol
     * @enum {number}
     * @property {number} BlockDefault=0 BlockDefault value
     * @property {number} Banker=1 Banker value
     * @property {number} Player=2 Player value
     * @property {number} Tie=3 Tie value
     * @property {number} BankerAndBankerPair=4 BankerAndBankerPair value
     * @property {number} BankerAndPlayerPair=5 BankerAndPlayerPair value
     * @property {number} BankerAndBothPair=6 BankerAndBothPair value
     * @property {number} PlayerAndBankerPair=7 PlayerAndBankerPair value
     * @property {number} PlayerAndPlayerPair=8 PlayerAndPlayerPair value
     * @property {number} PlayerAndBothPair=9 PlayerAndBothPair value
     * @property {number} TieAndBankerPair=10 TieAndBankerPair value
     * @property {number} TieAndPlayerPair=11 TieAndPlayerPair value
     * @property {number} TieAndBothPair=12 TieAndBothPair value
     * @property {number} BankerAndTie=13 BankerAndTie value
     * @property {number} BankerAndBankerPairAndTie=14 BankerAndBankerPairAndTie value
     * @property {number} BankerAndPlayerPairAndTie=15 BankerAndPlayerPairAndTie value
     * @property {number} BankerAndBothPairAndTie=16 BankerAndBothPairAndTie value
     * @property {number} PlayerAndTie=17 PlayerAndTie value
     * @property {number} PlayerAndBankerPairAndTie=18 PlayerAndBankerPairAndTie value
     * @property {number} PlayerAndPlayerPairAndTie=19 PlayerAndPlayerPairAndTie value
     * @property {number} PlayerAndBothPairAndTie=20 PlayerAndBothPairAndTie value
     */
    roadmap.Symbol = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BlockDefault"] = 0;
        values[valuesById[1] = "Banker"] = 1;
        values[valuesById[2] = "Player"] = 2;
        values[valuesById[3] = "Tie"] = 3;
        values[valuesById[4] = "BankerAndBankerPair"] = 4;
        values[valuesById[5] = "BankerAndPlayerPair"] = 5;
        values[valuesById[6] = "BankerAndBothPair"] = 6;
        values[valuesById[7] = "PlayerAndBankerPair"] = 7;
        values[valuesById[8] = "PlayerAndPlayerPair"] = 8;
        values[valuesById[9] = "PlayerAndBothPair"] = 9;
        values[valuesById[10] = "TieAndBankerPair"] = 10;
        values[valuesById[11] = "TieAndPlayerPair"] = 11;
        values[valuesById[12] = "TieAndBothPair"] = 12;
        values[valuesById[13] = "BankerAndTie"] = 13;
        values[valuesById[14] = "BankerAndBankerPairAndTie"] = 14;
        values[valuesById[15] = "BankerAndPlayerPairAndTie"] = 15;
        values[valuesById[16] = "BankerAndBothPairAndTie"] = 16;
        values[valuesById[17] = "PlayerAndTie"] = 17;
        values[valuesById[18] = "PlayerAndBankerPairAndTie"] = 18;
        values[valuesById[19] = "PlayerAndPlayerPairAndTie"] = 19;
        values[valuesById[20] = "PlayerAndBothPairAndTie"] = 20;
        return values;
    })();

    roadmap.Block = (function() {

        /**
         * Properties of a Block.
         * @memberof roadmap
         * @interface IBlock
         * @property {roadmap.Symbol|null} [symbol] Block symbol
         * @property {number|null} [tieCount] Block tieCount
         */

        /**
         * Constructs a new Block.
         * @memberof roadmap
         * @classdesc Represents a Block.
         * @implements IBlock
         * @constructor
         * @param {roadmap.IBlock=} [properties] Properties to set
         */
        function Block(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Block symbol.
         * @member {roadmap.Symbol} symbol
         * @memberof roadmap.Block
         * @instance
         */
        Block.prototype.symbol = 0;

        /**
         * Block tieCount.
         * @member {number} tieCount
         * @memberof roadmap.Block
         * @instance
         */
        Block.prototype.tieCount = 0;

        /**
         * Creates a new Block instance using the specified properties.
         * @function create
         * @memberof roadmap.Block
         * @static
         * @param {roadmap.IBlock=} [properties] Properties to set
         * @returns {roadmap.Block} Block instance
         */
        Block.create = function create(properties) {
            return new Block(properties);
        };

        /**
         * Encodes the specified Block message. Does not implicitly {@link roadmap.Block.verify|verify} messages.
         * @function encode
         * @memberof roadmap.Block
         * @static
         * @param {roadmap.IBlock} message Block message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Block.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.symbol);
            if (message.tieCount != null && Object.hasOwnProperty.call(message, "tieCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tieCount);
            return writer;
        };

        /**
         * Encodes the specified Block message, length delimited. Does not implicitly {@link roadmap.Block.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.Block
         * @static
         * @param {roadmap.IBlock} message Block message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Block.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Block message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.Block
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.Block} Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Block.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.Block();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.int32();
                    break;
                case 2:
                    message.tieCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Block message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.Block
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.Block} Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Block.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Block message.
         * @function verify
         * @memberof roadmap.Block
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Block.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                switch (message.symbol) {
                default:
                    return "symbol: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                    break;
                }
            if (message.tieCount != null && message.hasOwnProperty("tieCount"))
                if (!$util.isInteger(message.tieCount))
                    return "tieCount: integer expected";
            return null;
        };

        /**
         * Creates a Block message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.Block
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.Block} Block
         */
        Block.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.Block)
                return object;
            let message = new $root.roadmap.Block();
            switch (object.symbol) {
            case "BlockDefault":
            case 0:
                message.symbol = 0;
                break;
            case "Banker":
            case 1:
                message.symbol = 1;
                break;
            case "Player":
            case 2:
                message.symbol = 2;
                break;
            case "Tie":
            case 3:
                message.symbol = 3;
                break;
            case "BankerAndBankerPair":
            case 4:
                message.symbol = 4;
                break;
            case "BankerAndPlayerPair":
            case 5:
                message.symbol = 5;
                break;
            case "BankerAndBothPair":
            case 6:
                message.symbol = 6;
                break;
            case "PlayerAndBankerPair":
            case 7:
                message.symbol = 7;
                break;
            case "PlayerAndPlayerPair":
            case 8:
                message.symbol = 8;
                break;
            case "PlayerAndBothPair":
            case 9:
                message.symbol = 9;
                break;
            case "TieAndBankerPair":
            case 10:
                message.symbol = 10;
                break;
            case "TieAndPlayerPair":
            case 11:
                message.symbol = 11;
                break;
            case "TieAndBothPair":
            case 12:
                message.symbol = 12;
                break;
            case "BankerAndTie":
            case 13:
                message.symbol = 13;
                break;
            case "BankerAndBankerPairAndTie":
            case 14:
                message.symbol = 14;
                break;
            case "BankerAndPlayerPairAndTie":
            case 15:
                message.symbol = 15;
                break;
            case "BankerAndBothPairAndTie":
            case 16:
                message.symbol = 16;
                break;
            case "PlayerAndTie":
            case 17:
                message.symbol = 17;
                break;
            case "PlayerAndBankerPairAndTie":
            case 18:
                message.symbol = 18;
                break;
            case "PlayerAndPlayerPairAndTie":
            case 19:
                message.symbol = 19;
                break;
            case "PlayerAndBothPairAndTie":
            case 20:
                message.symbol = 20;
                break;
            }
            if (object.tieCount != null)
                message.tieCount = object.tieCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a Block message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.Block
         * @static
         * @param {roadmap.Block} message Block
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Block.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.symbol = options.enums === String ? "BlockDefault" : 0;
                object.tieCount = 0;
            }
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = options.enums === String ? $root.roadmap.Symbol[message.symbol] : message.symbol;
            if (message.tieCount != null && message.hasOwnProperty("tieCount"))
                object.tieCount = message.tieCount;
            return object;
        };

        /**
         * Converts this Block to JSON.
         * @function toJSON
         * @memberof roadmap.Block
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Block.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Block;
    })();

    roadmap.Column = (function() {

        /**
         * Properties of a Column.
         * @memberof roadmap
         * @interface IColumn
         * @property {Array.<roadmap.IBlock>|null} [blocks] Column blocks
         */

        /**
         * Constructs a new Column.
         * @memberof roadmap
         * @classdesc Represents a Column.
         * @implements IColumn
         * @constructor
         * @param {roadmap.IColumn=} [properties] Properties to set
         */
        function Column(properties) {
            this.blocks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Column blocks.
         * @member {Array.<roadmap.IBlock>} blocks
         * @memberof roadmap.Column
         * @instance
         */
        Column.prototype.blocks = $util.emptyArray;

        /**
         * Creates a new Column instance using the specified properties.
         * @function create
         * @memberof roadmap.Column
         * @static
         * @param {roadmap.IColumn=} [properties] Properties to set
         * @returns {roadmap.Column} Column instance
         */
        Column.create = function create(properties) {
            return new Column(properties);
        };

        /**
         * Encodes the specified Column message. Does not implicitly {@link roadmap.Column.verify|verify} messages.
         * @function encode
         * @memberof roadmap.Column
         * @static
         * @param {roadmap.IColumn} message Column message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Column.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blocks != null && message.blocks.length)
                for (let i = 0; i < message.blocks.length; ++i)
                    $root.roadmap.Block.encode(message.blocks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Column message, length delimited. Does not implicitly {@link roadmap.Column.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.Column
         * @static
         * @param {roadmap.IColumn} message Column message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Column.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Column message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.Column
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.Column} Column
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Column.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.Column();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.blocks && message.blocks.length))
                        message.blocks = [];
                    message.blocks.push($root.roadmap.Block.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Column message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.Column
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.Column} Column
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Column.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Column message.
         * @function verify
         * @memberof roadmap.Column
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Column.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blocks != null && message.hasOwnProperty("blocks")) {
                if (!Array.isArray(message.blocks))
                    return "blocks: array expected";
                for (let i = 0; i < message.blocks.length; ++i) {
                    let error = $root.roadmap.Block.verify(message.blocks[i]);
                    if (error)
                        return "blocks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Column message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.Column
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.Column} Column
         */
        Column.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.Column)
                return object;
            let message = new $root.roadmap.Column();
            if (object.blocks) {
                if (!Array.isArray(object.blocks))
                    throw TypeError(".roadmap.Column.blocks: array expected");
                message.blocks = [];
                for (let i = 0; i < object.blocks.length; ++i) {
                    if (typeof object.blocks[i] !== "object")
                        throw TypeError(".roadmap.Column.blocks: object expected");
                    message.blocks[i] = $root.roadmap.Block.fromObject(object.blocks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Column message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.Column
         * @static
         * @param {roadmap.Column} message Column
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Column.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.blocks = [];
            if (message.blocks && message.blocks.length) {
                object.blocks = [];
                for (let j = 0; j < message.blocks.length; ++j)
                    object.blocks[j] = $root.roadmap.Block.toObject(message.blocks[j], options);
            }
            return object;
        };

        /**
         * Converts this Column to JSON.
         * @function toJSON
         * @memberof roadmap.Column
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Column.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Column;
    })();

    roadmap.BeadPlate = (function() {

        /**
         * Properties of a BeadPlate.
         * @memberof roadmap
         * @interface IBeadPlate
         * @property {Array.<roadmap.IBlock>|null} [blocks] BeadPlate blocks
         */

        /**
         * Constructs a new BeadPlate.
         * @memberof roadmap
         * @classdesc Represents a BeadPlate.
         * @implements IBeadPlate
         * @constructor
         * @param {roadmap.IBeadPlate=} [properties] Properties to set
         */
        function BeadPlate(properties) {
            this.blocks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BeadPlate blocks.
         * @member {Array.<roadmap.IBlock>} blocks
         * @memberof roadmap.BeadPlate
         * @instance
         */
        BeadPlate.prototype.blocks = $util.emptyArray;

        /**
         * Creates a new BeadPlate instance using the specified properties.
         * @function create
         * @memberof roadmap.BeadPlate
         * @static
         * @param {roadmap.IBeadPlate=} [properties] Properties to set
         * @returns {roadmap.BeadPlate} BeadPlate instance
         */
        BeadPlate.create = function create(properties) {
            return new BeadPlate(properties);
        };

        /**
         * Encodes the specified BeadPlate message. Does not implicitly {@link roadmap.BeadPlate.verify|verify} messages.
         * @function encode
         * @memberof roadmap.BeadPlate
         * @static
         * @param {roadmap.IBeadPlate} message BeadPlate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeadPlate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blocks != null && message.blocks.length)
                for (let i = 0; i < message.blocks.length; ++i)
                    $root.roadmap.Block.encode(message.blocks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BeadPlate message, length delimited. Does not implicitly {@link roadmap.BeadPlate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.BeadPlate
         * @static
         * @param {roadmap.IBeadPlate} message BeadPlate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeadPlate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BeadPlate message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.BeadPlate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.BeadPlate} BeadPlate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeadPlate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.BeadPlate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.blocks && message.blocks.length))
                        message.blocks = [];
                    message.blocks.push($root.roadmap.Block.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BeadPlate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.BeadPlate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.BeadPlate} BeadPlate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeadPlate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BeadPlate message.
         * @function verify
         * @memberof roadmap.BeadPlate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BeadPlate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blocks != null && message.hasOwnProperty("blocks")) {
                if (!Array.isArray(message.blocks))
                    return "blocks: array expected";
                for (let i = 0; i < message.blocks.length; ++i) {
                    let error = $root.roadmap.Block.verify(message.blocks[i]);
                    if (error)
                        return "blocks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BeadPlate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.BeadPlate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.BeadPlate} BeadPlate
         */
        BeadPlate.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.BeadPlate)
                return object;
            let message = new $root.roadmap.BeadPlate();
            if (object.blocks) {
                if (!Array.isArray(object.blocks))
                    throw TypeError(".roadmap.BeadPlate.blocks: array expected");
                message.blocks = [];
                for (let i = 0; i < object.blocks.length; ++i) {
                    if (typeof object.blocks[i] !== "object")
                        throw TypeError(".roadmap.BeadPlate.blocks: object expected");
                    message.blocks[i] = $root.roadmap.Block.fromObject(object.blocks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BeadPlate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.BeadPlate
         * @static
         * @param {roadmap.BeadPlate} message BeadPlate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BeadPlate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.blocks = [];
            if (message.blocks && message.blocks.length) {
                object.blocks = [];
                for (let j = 0; j < message.blocks.length; ++j)
                    object.blocks[j] = $root.roadmap.Block.toObject(message.blocks[j], options);
            }
            return object;
        };

        /**
         * Converts this BeadPlate to JSON.
         * @function toJSON
         * @memberof roadmap.BeadPlate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BeadPlate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BeadPlate;
    })();

    roadmap.BigRoad = (function() {

        /**
         * Properties of a BigRoad.
         * @memberof roadmap
         * @interface IBigRoad
         * @property {Array.<roadmap.IColumn>|null} [columns] BigRoad columns
         */

        /**
         * Constructs a new BigRoad.
         * @memberof roadmap
         * @classdesc Represents a BigRoad.
         * @implements IBigRoad
         * @constructor
         * @param {roadmap.IBigRoad=} [properties] Properties to set
         */
        function BigRoad(properties) {
            this.columns = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BigRoad columns.
         * @member {Array.<roadmap.IColumn>} columns
         * @memberof roadmap.BigRoad
         * @instance
         */
        BigRoad.prototype.columns = $util.emptyArray;

        /**
         * Creates a new BigRoad instance using the specified properties.
         * @function create
         * @memberof roadmap.BigRoad
         * @static
         * @param {roadmap.IBigRoad=} [properties] Properties to set
         * @returns {roadmap.BigRoad} BigRoad instance
         */
        BigRoad.create = function create(properties) {
            return new BigRoad(properties);
        };

        /**
         * Encodes the specified BigRoad message. Does not implicitly {@link roadmap.BigRoad.verify|verify} messages.
         * @function encode
         * @memberof roadmap.BigRoad
         * @static
         * @param {roadmap.IBigRoad} message BigRoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BigRoad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.columns != null && message.columns.length)
                for (let i = 0; i < message.columns.length; ++i)
                    $root.roadmap.Column.encode(message.columns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BigRoad message, length delimited. Does not implicitly {@link roadmap.BigRoad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.BigRoad
         * @static
         * @param {roadmap.IBigRoad} message BigRoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BigRoad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BigRoad message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.BigRoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.BigRoad} BigRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BigRoad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.BigRoad();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.columns && message.columns.length))
                        message.columns = [];
                    message.columns.push($root.roadmap.Column.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BigRoad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.BigRoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.BigRoad} BigRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BigRoad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BigRoad message.
         * @function verify
         * @memberof roadmap.BigRoad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BigRoad.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.columns != null && message.hasOwnProperty("columns")) {
                if (!Array.isArray(message.columns))
                    return "columns: array expected";
                for (let i = 0; i < message.columns.length; ++i) {
                    let error = $root.roadmap.Column.verify(message.columns[i]);
                    if (error)
                        return "columns." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BigRoad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.BigRoad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.BigRoad} BigRoad
         */
        BigRoad.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.BigRoad)
                return object;
            let message = new $root.roadmap.BigRoad();
            if (object.columns) {
                if (!Array.isArray(object.columns))
                    throw TypeError(".roadmap.BigRoad.columns: array expected");
                message.columns = [];
                for (let i = 0; i < object.columns.length; ++i) {
                    if (typeof object.columns[i] !== "object")
                        throw TypeError(".roadmap.BigRoad.columns: object expected");
                    message.columns[i] = $root.roadmap.Column.fromObject(object.columns[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BigRoad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.BigRoad
         * @static
         * @param {roadmap.BigRoad} message BigRoad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BigRoad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.columns = [];
            if (message.columns && message.columns.length) {
                object.columns = [];
                for (let j = 0; j < message.columns.length; ++j)
                    object.columns[j] = $root.roadmap.Column.toObject(message.columns[j], options);
            }
            return object;
        };

        /**
         * Converts this BigRoad to JSON.
         * @function toJSON
         * @memberof roadmap.BigRoad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BigRoad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BigRoad;
    })();

    roadmap.BigEyeRoad = (function() {

        /**
         * Properties of a BigEyeRoad.
         * @memberof roadmap
         * @interface IBigEyeRoad
         * @property {Array.<roadmap.IColumn>|null} [columns] BigEyeRoad columns
         */

        /**
         * Constructs a new BigEyeRoad.
         * @memberof roadmap
         * @classdesc Represents a BigEyeRoad.
         * @implements IBigEyeRoad
         * @constructor
         * @param {roadmap.IBigEyeRoad=} [properties] Properties to set
         */
        function BigEyeRoad(properties) {
            this.columns = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BigEyeRoad columns.
         * @member {Array.<roadmap.IColumn>} columns
         * @memberof roadmap.BigEyeRoad
         * @instance
         */
        BigEyeRoad.prototype.columns = $util.emptyArray;

        /**
         * Creates a new BigEyeRoad instance using the specified properties.
         * @function create
         * @memberof roadmap.BigEyeRoad
         * @static
         * @param {roadmap.IBigEyeRoad=} [properties] Properties to set
         * @returns {roadmap.BigEyeRoad} BigEyeRoad instance
         */
        BigEyeRoad.create = function create(properties) {
            return new BigEyeRoad(properties);
        };

        /**
         * Encodes the specified BigEyeRoad message. Does not implicitly {@link roadmap.BigEyeRoad.verify|verify} messages.
         * @function encode
         * @memberof roadmap.BigEyeRoad
         * @static
         * @param {roadmap.IBigEyeRoad} message BigEyeRoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BigEyeRoad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.columns != null && message.columns.length)
                for (let i = 0; i < message.columns.length; ++i)
                    $root.roadmap.Column.encode(message.columns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BigEyeRoad message, length delimited. Does not implicitly {@link roadmap.BigEyeRoad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.BigEyeRoad
         * @static
         * @param {roadmap.IBigEyeRoad} message BigEyeRoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BigEyeRoad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BigEyeRoad message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.BigEyeRoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.BigEyeRoad} BigEyeRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BigEyeRoad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.BigEyeRoad();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.columns && message.columns.length))
                        message.columns = [];
                    message.columns.push($root.roadmap.Column.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BigEyeRoad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.BigEyeRoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.BigEyeRoad} BigEyeRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BigEyeRoad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BigEyeRoad message.
         * @function verify
         * @memberof roadmap.BigEyeRoad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BigEyeRoad.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.columns != null && message.hasOwnProperty("columns")) {
                if (!Array.isArray(message.columns))
                    return "columns: array expected";
                for (let i = 0; i < message.columns.length; ++i) {
                    let error = $root.roadmap.Column.verify(message.columns[i]);
                    if (error)
                        return "columns." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BigEyeRoad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.BigEyeRoad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.BigEyeRoad} BigEyeRoad
         */
        BigEyeRoad.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.BigEyeRoad)
                return object;
            let message = new $root.roadmap.BigEyeRoad();
            if (object.columns) {
                if (!Array.isArray(object.columns))
                    throw TypeError(".roadmap.BigEyeRoad.columns: array expected");
                message.columns = [];
                for (let i = 0; i < object.columns.length; ++i) {
                    if (typeof object.columns[i] !== "object")
                        throw TypeError(".roadmap.BigEyeRoad.columns: object expected");
                    message.columns[i] = $root.roadmap.Column.fromObject(object.columns[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BigEyeRoad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.BigEyeRoad
         * @static
         * @param {roadmap.BigEyeRoad} message BigEyeRoad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BigEyeRoad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.columns = [];
            if (message.columns && message.columns.length) {
                object.columns = [];
                for (let j = 0; j < message.columns.length; ++j)
                    object.columns[j] = $root.roadmap.Column.toObject(message.columns[j], options);
            }
            return object;
        };

        /**
         * Converts this BigEyeRoad to JSON.
         * @function toJSON
         * @memberof roadmap.BigEyeRoad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BigEyeRoad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BigEyeRoad;
    })();

    roadmap.SmallRoad = (function() {

        /**
         * Properties of a SmallRoad.
         * @memberof roadmap
         * @interface ISmallRoad
         * @property {Array.<roadmap.IColumn>|null} [columns] SmallRoad columns
         */

        /**
         * Constructs a new SmallRoad.
         * @memberof roadmap
         * @classdesc Represents a SmallRoad.
         * @implements ISmallRoad
         * @constructor
         * @param {roadmap.ISmallRoad=} [properties] Properties to set
         */
        function SmallRoad(properties) {
            this.columns = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SmallRoad columns.
         * @member {Array.<roadmap.IColumn>} columns
         * @memberof roadmap.SmallRoad
         * @instance
         */
        SmallRoad.prototype.columns = $util.emptyArray;

        /**
         * Creates a new SmallRoad instance using the specified properties.
         * @function create
         * @memberof roadmap.SmallRoad
         * @static
         * @param {roadmap.ISmallRoad=} [properties] Properties to set
         * @returns {roadmap.SmallRoad} SmallRoad instance
         */
        SmallRoad.create = function create(properties) {
            return new SmallRoad(properties);
        };

        /**
         * Encodes the specified SmallRoad message. Does not implicitly {@link roadmap.SmallRoad.verify|verify} messages.
         * @function encode
         * @memberof roadmap.SmallRoad
         * @static
         * @param {roadmap.ISmallRoad} message SmallRoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SmallRoad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.columns != null && message.columns.length)
                for (let i = 0; i < message.columns.length; ++i)
                    $root.roadmap.Column.encode(message.columns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SmallRoad message, length delimited. Does not implicitly {@link roadmap.SmallRoad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.SmallRoad
         * @static
         * @param {roadmap.ISmallRoad} message SmallRoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SmallRoad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SmallRoad message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.SmallRoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.SmallRoad} SmallRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SmallRoad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.SmallRoad();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.columns && message.columns.length))
                        message.columns = [];
                    message.columns.push($root.roadmap.Column.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SmallRoad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.SmallRoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.SmallRoad} SmallRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SmallRoad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SmallRoad message.
         * @function verify
         * @memberof roadmap.SmallRoad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SmallRoad.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.columns != null && message.hasOwnProperty("columns")) {
                if (!Array.isArray(message.columns))
                    return "columns: array expected";
                for (let i = 0; i < message.columns.length; ++i) {
                    let error = $root.roadmap.Column.verify(message.columns[i]);
                    if (error)
                        return "columns." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SmallRoad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.SmallRoad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.SmallRoad} SmallRoad
         */
        SmallRoad.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.SmallRoad)
                return object;
            let message = new $root.roadmap.SmallRoad();
            if (object.columns) {
                if (!Array.isArray(object.columns))
                    throw TypeError(".roadmap.SmallRoad.columns: array expected");
                message.columns = [];
                for (let i = 0; i < object.columns.length; ++i) {
                    if (typeof object.columns[i] !== "object")
                        throw TypeError(".roadmap.SmallRoad.columns: object expected");
                    message.columns[i] = $root.roadmap.Column.fromObject(object.columns[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SmallRoad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.SmallRoad
         * @static
         * @param {roadmap.SmallRoad} message SmallRoad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SmallRoad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.columns = [];
            if (message.columns && message.columns.length) {
                object.columns = [];
                for (let j = 0; j < message.columns.length; ++j)
                    object.columns[j] = $root.roadmap.Column.toObject(message.columns[j], options);
            }
            return object;
        };

        /**
         * Converts this SmallRoad to JSON.
         * @function toJSON
         * @memberof roadmap.SmallRoad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SmallRoad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SmallRoad;
    })();

    roadmap.CockroachRoad = (function() {

        /**
         * Properties of a CockroachRoad.
         * @memberof roadmap
         * @interface ICockroachRoad
         * @property {Array.<roadmap.IColumn>|null} [columns] CockroachRoad columns
         */

        /**
         * Constructs a new CockroachRoad.
         * @memberof roadmap
         * @classdesc Represents a CockroachRoad.
         * @implements ICockroachRoad
         * @constructor
         * @param {roadmap.ICockroachRoad=} [properties] Properties to set
         */
        function CockroachRoad(properties) {
            this.columns = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CockroachRoad columns.
         * @member {Array.<roadmap.IColumn>} columns
         * @memberof roadmap.CockroachRoad
         * @instance
         */
        CockroachRoad.prototype.columns = $util.emptyArray;

        /**
         * Creates a new CockroachRoad instance using the specified properties.
         * @function create
         * @memberof roadmap.CockroachRoad
         * @static
         * @param {roadmap.ICockroachRoad=} [properties] Properties to set
         * @returns {roadmap.CockroachRoad} CockroachRoad instance
         */
        CockroachRoad.create = function create(properties) {
            return new CockroachRoad(properties);
        };

        /**
         * Encodes the specified CockroachRoad message. Does not implicitly {@link roadmap.CockroachRoad.verify|verify} messages.
         * @function encode
         * @memberof roadmap.CockroachRoad
         * @static
         * @param {roadmap.ICockroachRoad} message CockroachRoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CockroachRoad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.columns != null && message.columns.length)
                for (let i = 0; i < message.columns.length; ++i)
                    $root.roadmap.Column.encode(message.columns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CockroachRoad message, length delimited. Does not implicitly {@link roadmap.CockroachRoad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.CockroachRoad
         * @static
         * @param {roadmap.ICockroachRoad} message CockroachRoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CockroachRoad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CockroachRoad message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.CockroachRoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.CockroachRoad} CockroachRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CockroachRoad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.CockroachRoad();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.columns && message.columns.length))
                        message.columns = [];
                    message.columns.push($root.roadmap.Column.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CockroachRoad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.CockroachRoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.CockroachRoad} CockroachRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CockroachRoad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CockroachRoad message.
         * @function verify
         * @memberof roadmap.CockroachRoad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CockroachRoad.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.columns != null && message.hasOwnProperty("columns")) {
                if (!Array.isArray(message.columns))
                    return "columns: array expected";
                for (let i = 0; i < message.columns.length; ++i) {
                    let error = $root.roadmap.Column.verify(message.columns[i]);
                    if (error)
                        return "columns." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CockroachRoad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.CockroachRoad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.CockroachRoad} CockroachRoad
         */
        CockroachRoad.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.CockroachRoad)
                return object;
            let message = new $root.roadmap.CockroachRoad();
            if (object.columns) {
                if (!Array.isArray(object.columns))
                    throw TypeError(".roadmap.CockroachRoad.columns: array expected");
                message.columns = [];
                for (let i = 0; i < object.columns.length; ++i) {
                    if (typeof object.columns[i] !== "object")
                        throw TypeError(".roadmap.CockroachRoad.columns: object expected");
                    message.columns[i] = $root.roadmap.Column.fromObject(object.columns[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CockroachRoad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.CockroachRoad
         * @static
         * @param {roadmap.CockroachRoad} message CockroachRoad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CockroachRoad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.columns = [];
            if (message.columns && message.columns.length) {
                object.columns = [];
                for (let j = 0; j < message.columns.length; ++j)
                    object.columns[j] = $root.roadmap.Column.toObject(message.columns[j], options);
            }
            return object;
        };

        /**
         * Converts this CockroachRoad to JSON.
         * @function toJSON
         * @memberof roadmap.CockroachRoad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CockroachRoad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CockroachRoad;
    })();

    roadmap.Roadmap = (function() {

        /**
         * Properties of a Roadmap.
         * @memberof roadmap
         * @interface IRoadmap
         * @property {foundation.IHeader|null} [header] Roadmap header
         * @property {roadmap.IBeadPlate|null} [beadPlate] Roadmap beadPlate
         * @property {roadmap.IBigRoad|null} [bigRoad] Roadmap bigRoad
         * @property {roadmap.IBigEyeRoad|null} [bigEyeRoad] Roadmap bigEyeRoad
         * @property {roadmap.ISmallRoad|null} [smallRoad] Roadmap smallRoad
         * @property {roadmap.ICockroachRoad|null} [cockroachRoad] Roadmap cockroachRoad
         */

        /**
         * Constructs a new Roadmap.
         * @memberof roadmap
         * @classdesc Represents a Roadmap.
         * @implements IRoadmap
         * @constructor
         * @param {roadmap.IRoadmap=} [properties] Properties to set
         */
        function Roadmap(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Roadmap header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof roadmap.Roadmap
         * @instance
         */
        Roadmap.prototype.header = null;

        /**
         * Roadmap beadPlate.
         * @member {roadmap.IBeadPlate|null|undefined} beadPlate
         * @memberof roadmap.Roadmap
         * @instance
         */
        Roadmap.prototype.beadPlate = null;

        /**
         * Roadmap bigRoad.
         * @member {roadmap.IBigRoad|null|undefined} bigRoad
         * @memberof roadmap.Roadmap
         * @instance
         */
        Roadmap.prototype.bigRoad = null;

        /**
         * Roadmap bigEyeRoad.
         * @member {roadmap.IBigEyeRoad|null|undefined} bigEyeRoad
         * @memberof roadmap.Roadmap
         * @instance
         */
        Roadmap.prototype.bigEyeRoad = null;

        /**
         * Roadmap smallRoad.
         * @member {roadmap.ISmallRoad|null|undefined} smallRoad
         * @memberof roadmap.Roadmap
         * @instance
         */
        Roadmap.prototype.smallRoad = null;

        /**
         * Roadmap cockroachRoad.
         * @member {roadmap.ICockroachRoad|null|undefined} cockroachRoad
         * @memberof roadmap.Roadmap
         * @instance
         */
        Roadmap.prototype.cockroachRoad = null;

        /**
         * Creates a new Roadmap instance using the specified properties.
         * @function create
         * @memberof roadmap.Roadmap
         * @static
         * @param {roadmap.IRoadmap=} [properties] Properties to set
         * @returns {roadmap.Roadmap} Roadmap instance
         */
        Roadmap.create = function create(properties) {
            return new Roadmap(properties);
        };

        /**
         * Encodes the specified Roadmap message. Does not implicitly {@link roadmap.Roadmap.verify|verify} messages.
         * @function encode
         * @memberof roadmap.Roadmap
         * @static
         * @param {roadmap.IRoadmap} message Roadmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Roadmap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.beadPlate != null && Object.hasOwnProperty.call(message, "beadPlate"))
                $root.roadmap.BeadPlate.encode(message.beadPlate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.bigRoad != null && Object.hasOwnProperty.call(message, "bigRoad"))
                $root.roadmap.BigRoad.encode(message.bigRoad, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.bigEyeRoad != null && Object.hasOwnProperty.call(message, "bigEyeRoad"))
                $root.roadmap.BigEyeRoad.encode(message.bigEyeRoad, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.smallRoad != null && Object.hasOwnProperty.call(message, "smallRoad"))
                $root.roadmap.SmallRoad.encode(message.smallRoad, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.cockroachRoad != null && Object.hasOwnProperty.call(message, "cockroachRoad"))
                $root.roadmap.CockroachRoad.encode(message.cockroachRoad, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Roadmap message, length delimited. Does not implicitly {@link roadmap.Roadmap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.Roadmap
         * @static
         * @param {roadmap.IRoadmap} message Roadmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Roadmap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Roadmap message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.Roadmap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.Roadmap} Roadmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Roadmap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.Roadmap();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.beadPlate = $root.roadmap.BeadPlate.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.bigRoad = $root.roadmap.BigRoad.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.bigEyeRoad = $root.roadmap.BigEyeRoad.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.smallRoad = $root.roadmap.SmallRoad.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.cockroachRoad = $root.roadmap.CockroachRoad.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Roadmap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.Roadmap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.Roadmap} Roadmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Roadmap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Roadmap message.
         * @function verify
         * @memberof roadmap.Roadmap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Roadmap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.beadPlate != null && message.hasOwnProperty("beadPlate")) {
                let error = $root.roadmap.BeadPlate.verify(message.beadPlate);
                if (error)
                    return "beadPlate." + error;
            }
            if (message.bigRoad != null && message.hasOwnProperty("bigRoad")) {
                let error = $root.roadmap.BigRoad.verify(message.bigRoad);
                if (error)
                    return "bigRoad." + error;
            }
            if (message.bigEyeRoad != null && message.hasOwnProperty("bigEyeRoad")) {
                let error = $root.roadmap.BigEyeRoad.verify(message.bigEyeRoad);
                if (error)
                    return "bigEyeRoad." + error;
            }
            if (message.smallRoad != null && message.hasOwnProperty("smallRoad")) {
                let error = $root.roadmap.SmallRoad.verify(message.smallRoad);
                if (error)
                    return "smallRoad." + error;
            }
            if (message.cockroachRoad != null && message.hasOwnProperty("cockroachRoad")) {
                let error = $root.roadmap.CockroachRoad.verify(message.cockroachRoad);
                if (error)
                    return "cockroachRoad." + error;
            }
            return null;
        };

        /**
         * Creates a Roadmap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.Roadmap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.Roadmap} Roadmap
         */
        Roadmap.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.Roadmap)
                return object;
            let message = new $root.roadmap.Roadmap();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".roadmap.Roadmap.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.beadPlate != null) {
                if (typeof object.beadPlate !== "object")
                    throw TypeError(".roadmap.Roadmap.beadPlate: object expected");
                message.beadPlate = $root.roadmap.BeadPlate.fromObject(object.beadPlate);
            }
            if (object.bigRoad != null) {
                if (typeof object.bigRoad !== "object")
                    throw TypeError(".roadmap.Roadmap.bigRoad: object expected");
                message.bigRoad = $root.roadmap.BigRoad.fromObject(object.bigRoad);
            }
            if (object.bigEyeRoad != null) {
                if (typeof object.bigEyeRoad !== "object")
                    throw TypeError(".roadmap.Roadmap.bigEyeRoad: object expected");
                message.bigEyeRoad = $root.roadmap.BigEyeRoad.fromObject(object.bigEyeRoad);
            }
            if (object.smallRoad != null) {
                if (typeof object.smallRoad !== "object")
                    throw TypeError(".roadmap.Roadmap.smallRoad: object expected");
                message.smallRoad = $root.roadmap.SmallRoad.fromObject(object.smallRoad);
            }
            if (object.cockroachRoad != null) {
                if (typeof object.cockroachRoad !== "object")
                    throw TypeError(".roadmap.Roadmap.cockroachRoad: object expected");
                message.cockroachRoad = $root.roadmap.CockroachRoad.fromObject(object.cockroachRoad);
            }
            return message;
        };

        /**
         * Creates a plain object from a Roadmap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.Roadmap
         * @static
         * @param {roadmap.Roadmap} message Roadmap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Roadmap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.beadPlate = null;
                object.bigRoad = null;
                object.bigEyeRoad = null;
                object.smallRoad = null;
                object.cockroachRoad = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.beadPlate != null && message.hasOwnProperty("beadPlate"))
                object.beadPlate = $root.roadmap.BeadPlate.toObject(message.beadPlate, options);
            if (message.bigRoad != null && message.hasOwnProperty("bigRoad"))
                object.bigRoad = $root.roadmap.BigRoad.toObject(message.bigRoad, options);
            if (message.bigEyeRoad != null && message.hasOwnProperty("bigEyeRoad"))
                object.bigEyeRoad = $root.roadmap.BigEyeRoad.toObject(message.bigEyeRoad, options);
            if (message.smallRoad != null && message.hasOwnProperty("smallRoad"))
                object.smallRoad = $root.roadmap.SmallRoad.toObject(message.smallRoad, options);
            if (message.cockroachRoad != null && message.hasOwnProperty("cockroachRoad"))
                object.cockroachRoad = $root.roadmap.CockroachRoad.toObject(message.cockroachRoad, options);
            return object;
        };

        /**
         * Converts this Roadmap to JSON.
         * @function toJSON
         * @memberof roadmap.Roadmap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Roadmap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Roadmap;
    })();

    roadmap.AskRoadCall = (function() {

        /**
         * Properties of an AskRoadCall.
         * @memberof roadmap
         * @interface IAskRoadCall
         * @property {foundation.IHeader|null} [header] AskRoadCall header
         * @property {roadmap.IBlock|null} [block] AskRoadCall block
         */

        /**
         * Constructs a new AskRoadCall.
         * @memberof roadmap
         * @classdesc Represents an AskRoadCall.
         * @implements IAskRoadCall
         * @constructor
         * @param {roadmap.IAskRoadCall=} [properties] Properties to set
         */
        function AskRoadCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AskRoadCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof roadmap.AskRoadCall
         * @instance
         */
        AskRoadCall.prototype.header = null;

        /**
         * AskRoadCall block.
         * @member {roadmap.IBlock|null|undefined} block
         * @memberof roadmap.AskRoadCall
         * @instance
         */
        AskRoadCall.prototype.block = null;

        /**
         * Creates a new AskRoadCall instance using the specified properties.
         * @function create
         * @memberof roadmap.AskRoadCall
         * @static
         * @param {roadmap.IAskRoadCall=} [properties] Properties to set
         * @returns {roadmap.AskRoadCall} AskRoadCall instance
         */
        AskRoadCall.create = function create(properties) {
            return new AskRoadCall(properties);
        };

        /**
         * Encodes the specified AskRoadCall message. Does not implicitly {@link roadmap.AskRoadCall.verify|verify} messages.
         * @function encode
         * @memberof roadmap.AskRoadCall
         * @static
         * @param {roadmap.IAskRoadCall} message AskRoadCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AskRoadCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.block != null && Object.hasOwnProperty.call(message, "block"))
                $root.roadmap.Block.encode(message.block, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AskRoadCall message, length delimited. Does not implicitly {@link roadmap.AskRoadCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.AskRoadCall
         * @static
         * @param {roadmap.IAskRoadCall} message AskRoadCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AskRoadCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AskRoadCall message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.AskRoadCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.AskRoadCall} AskRoadCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AskRoadCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.AskRoadCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = $root.roadmap.Block.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AskRoadCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.AskRoadCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.AskRoadCall} AskRoadCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AskRoadCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AskRoadCall message.
         * @function verify
         * @memberof roadmap.AskRoadCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AskRoadCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.block != null && message.hasOwnProperty("block")) {
                let error = $root.roadmap.Block.verify(message.block);
                if (error)
                    return "block." + error;
            }
            return null;
        };

        /**
         * Creates an AskRoadCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.AskRoadCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.AskRoadCall} AskRoadCall
         */
        AskRoadCall.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.AskRoadCall)
                return object;
            let message = new $root.roadmap.AskRoadCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".roadmap.AskRoadCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.block != null) {
                if (typeof object.block !== "object")
                    throw TypeError(".roadmap.AskRoadCall.block: object expected");
                message.block = $root.roadmap.Block.fromObject(object.block);
            }
            return message;
        };

        /**
         * Creates a plain object from an AskRoadCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.AskRoadCall
         * @static
         * @param {roadmap.AskRoadCall} message AskRoadCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AskRoadCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.block = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.block != null && message.hasOwnProperty("block"))
                object.block = $root.roadmap.Block.toObject(message.block, options);
            return object;
        };

        /**
         * Converts this AskRoadCall to JSON.
         * @function toJSON
         * @memberof roadmap.AskRoadCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AskRoadCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AskRoadCall;
    })();

    roadmap.AskRoadRecall = (function() {

        /**
         * Properties of an AskRoadRecall.
         * @memberof roadmap
         * @interface IAskRoadRecall
         * @property {foundation.IHeader|null} [header] AskRoadRecall header
         * @property {roadmap.IBlock|null} [bigEyeRoadNext] AskRoadRecall bigEyeRoadNext
         * @property {roadmap.IBlock|null} [smallRoadNext] AskRoadRecall smallRoadNext
         * @property {roadmap.IBlock|null} [cockroachRoadNext] AskRoadRecall cockroachRoadNext
         * @property {roadmap.IAskRoadCall|null} [askRoadCall] AskRoadRecall askRoadCall
         */

        /**
         * Constructs a new AskRoadRecall.
         * @memberof roadmap
         * @classdesc Represents an AskRoadRecall.
         * @implements IAskRoadRecall
         * @constructor
         * @param {roadmap.IAskRoadRecall=} [properties] Properties to set
         */
        function AskRoadRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AskRoadRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof roadmap.AskRoadRecall
         * @instance
         */
        AskRoadRecall.prototype.header = null;

        /**
         * AskRoadRecall bigEyeRoadNext.
         * @member {roadmap.IBlock|null|undefined} bigEyeRoadNext
         * @memberof roadmap.AskRoadRecall
         * @instance
         */
        AskRoadRecall.prototype.bigEyeRoadNext = null;

        /**
         * AskRoadRecall smallRoadNext.
         * @member {roadmap.IBlock|null|undefined} smallRoadNext
         * @memberof roadmap.AskRoadRecall
         * @instance
         */
        AskRoadRecall.prototype.smallRoadNext = null;

        /**
         * AskRoadRecall cockroachRoadNext.
         * @member {roadmap.IBlock|null|undefined} cockroachRoadNext
         * @memberof roadmap.AskRoadRecall
         * @instance
         */
        AskRoadRecall.prototype.cockroachRoadNext = null;

        /**
         * AskRoadRecall askRoadCall.
         * @member {roadmap.IAskRoadCall|null|undefined} askRoadCall
         * @memberof roadmap.AskRoadRecall
         * @instance
         */
        AskRoadRecall.prototype.askRoadCall = null;

        /**
         * Creates a new AskRoadRecall instance using the specified properties.
         * @function create
         * @memberof roadmap.AskRoadRecall
         * @static
         * @param {roadmap.IAskRoadRecall=} [properties] Properties to set
         * @returns {roadmap.AskRoadRecall} AskRoadRecall instance
         */
        AskRoadRecall.create = function create(properties) {
            return new AskRoadRecall(properties);
        };

        /**
         * Encodes the specified AskRoadRecall message. Does not implicitly {@link roadmap.AskRoadRecall.verify|verify} messages.
         * @function encode
         * @memberof roadmap.AskRoadRecall
         * @static
         * @param {roadmap.IAskRoadRecall} message AskRoadRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AskRoadRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bigEyeRoadNext != null && Object.hasOwnProperty.call(message, "bigEyeRoadNext"))
                $root.roadmap.Block.encode(message.bigEyeRoadNext, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.smallRoadNext != null && Object.hasOwnProperty.call(message, "smallRoadNext"))
                $root.roadmap.Block.encode(message.smallRoadNext, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.cockroachRoadNext != null && Object.hasOwnProperty.call(message, "cockroachRoadNext"))
                $root.roadmap.Block.encode(message.cockroachRoadNext, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.askRoadCall != null && Object.hasOwnProperty.call(message, "askRoadCall"))
                $root.roadmap.AskRoadCall.encode(message.askRoadCall, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AskRoadRecall message, length delimited. Does not implicitly {@link roadmap.AskRoadRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.AskRoadRecall
         * @static
         * @param {roadmap.IAskRoadRecall} message AskRoadRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AskRoadRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AskRoadRecall message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.AskRoadRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.AskRoadRecall} AskRoadRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AskRoadRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.AskRoadRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bigEyeRoadNext = $root.roadmap.Block.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.smallRoadNext = $root.roadmap.Block.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cockroachRoadNext = $root.roadmap.Block.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.askRoadCall = $root.roadmap.AskRoadCall.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AskRoadRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.AskRoadRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.AskRoadRecall} AskRoadRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AskRoadRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AskRoadRecall message.
         * @function verify
         * @memberof roadmap.AskRoadRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AskRoadRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.bigEyeRoadNext != null && message.hasOwnProperty("bigEyeRoadNext")) {
                let error = $root.roadmap.Block.verify(message.bigEyeRoadNext);
                if (error)
                    return "bigEyeRoadNext." + error;
            }
            if (message.smallRoadNext != null && message.hasOwnProperty("smallRoadNext")) {
                let error = $root.roadmap.Block.verify(message.smallRoadNext);
                if (error)
                    return "smallRoadNext." + error;
            }
            if (message.cockroachRoadNext != null && message.hasOwnProperty("cockroachRoadNext")) {
                let error = $root.roadmap.Block.verify(message.cockroachRoadNext);
                if (error)
                    return "cockroachRoadNext." + error;
            }
            if (message.askRoadCall != null && message.hasOwnProperty("askRoadCall")) {
                let error = $root.roadmap.AskRoadCall.verify(message.askRoadCall);
                if (error)
                    return "askRoadCall." + error;
            }
            return null;
        };

        /**
         * Creates an AskRoadRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.AskRoadRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.AskRoadRecall} AskRoadRecall
         */
        AskRoadRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.AskRoadRecall)
                return object;
            let message = new $root.roadmap.AskRoadRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".roadmap.AskRoadRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.bigEyeRoadNext != null) {
                if (typeof object.bigEyeRoadNext !== "object")
                    throw TypeError(".roadmap.AskRoadRecall.bigEyeRoadNext: object expected");
                message.bigEyeRoadNext = $root.roadmap.Block.fromObject(object.bigEyeRoadNext);
            }
            if (object.smallRoadNext != null) {
                if (typeof object.smallRoadNext !== "object")
                    throw TypeError(".roadmap.AskRoadRecall.smallRoadNext: object expected");
                message.smallRoadNext = $root.roadmap.Block.fromObject(object.smallRoadNext);
            }
            if (object.cockroachRoadNext != null) {
                if (typeof object.cockroachRoadNext !== "object")
                    throw TypeError(".roadmap.AskRoadRecall.cockroachRoadNext: object expected");
                message.cockroachRoadNext = $root.roadmap.Block.fromObject(object.cockroachRoadNext);
            }
            if (object.askRoadCall != null) {
                if (typeof object.askRoadCall !== "object")
                    throw TypeError(".roadmap.AskRoadRecall.askRoadCall: object expected");
                message.askRoadCall = $root.roadmap.AskRoadCall.fromObject(object.askRoadCall);
            }
            return message;
        };

        /**
         * Creates a plain object from an AskRoadRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.AskRoadRecall
         * @static
         * @param {roadmap.AskRoadRecall} message AskRoadRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AskRoadRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.bigEyeRoadNext = null;
                object.smallRoadNext = null;
                object.cockroachRoadNext = null;
                object.askRoadCall = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.bigEyeRoadNext != null && message.hasOwnProperty("bigEyeRoadNext"))
                object.bigEyeRoadNext = $root.roadmap.Block.toObject(message.bigEyeRoadNext, options);
            if (message.smallRoadNext != null && message.hasOwnProperty("smallRoadNext"))
                object.smallRoadNext = $root.roadmap.Block.toObject(message.smallRoadNext, options);
            if (message.cockroachRoadNext != null && message.hasOwnProperty("cockroachRoadNext"))
                object.cockroachRoadNext = $root.roadmap.Block.toObject(message.cockroachRoadNext, options);
            if (message.askRoadCall != null && message.hasOwnProperty("askRoadCall"))
                object.askRoadCall = $root.roadmap.AskRoadCall.toObject(message.askRoadCall, options);
            return object;
        };

        /**
         * Converts this AskRoadRecall to JSON.
         * @function toJSON
         * @memberof roadmap.AskRoadRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AskRoadRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AskRoadRecall;
    })();

    return roadmap;
})();

export const route = $root.route = (() => {

    /**
     * Namespace route.
     * @exports route
     * @namespace
     */
    const route = {};

    /**
     * URI enum.
     * @name route.URI
     * @enum {number}
     * @property {number} Default=0 Default value
     * @property {number} LoginCall=1 LoginCall value
     * @property {number} LoginRecall=2 LoginRecall value
     * @property {number} LobbyInfo=3 LobbyInfo value
     * @property {number} UserInfo=4 UserInfo value
     * @property {number} TableJoinCall=5 TableJoinCall value
     * @property {number} TableJoinRecall=6 TableJoinRecall value
     * @property {number} BroadcastJoinedPlayers=1006 BroadcastJoinedPlayers value
     * @property {number} BetCall=7 BetCall value
     * @property {number} BetRecall=8 BetRecall value
     * @property {number} BetResetCall=9 BetResetCall value
     * @property {number} BetResetRecall=10 BetResetRecall value
     * @property {number} BetConfirmCall=100 BetConfirmCall value
     * @property {number} BetConfirmRecall=101 BetConfirmRecall value
     * @property {number} BroadcastBetConfirmRecall=102 BroadcastBetConfirmRecall value
     * @property {number} BroadcastBetstatus=110 BroadcastBetstatus value
     * @property {number} Draw=11 Draw value
     * @property {number} DealerGameResult=12 DealerGameResult value
     * @property {number} BroadcastGameResult=13 BroadcastGameResult value
     * @property {number} BetRoundStart=14 BetRoundStart value
     * @property {number} BetRoundEnd=15 BetRoundEnd value
     * @property {number} BetRoundEndCall=1501 BetRoundEndCall value
     * @property {number} BetRoundCountdown=16 BetRoundCountdown value
     * @property {number} HeartbeatPing=17 HeartbeatPing value
     * @property {number} HeartbeatPong=18 HeartbeatPong value
     * @property {number} DealerRoundStartCall=19 DealerRoundStartCall value
     * @property {number} DealerRoundStartRecall=20 DealerRoundStartRecall value
     * @property {number} DealerRoundEndCall=21 DealerRoundEndCall value
     * @property {number} DealerRoundEndRecall=22 DealerRoundEndRecall value
     * @property {number} BroadcastDealerRoundEnd=220 BroadcastDealerRoundEnd value
     * @property {number} BetError=23 BetError value
     * @property {number} GameStatus=24 GameStatus value
     * @property {number} DealerGameStatus=25 DealerGameStatus value
     * @property {number} Roadmap=26 Roadmap value
     * @property {number} WhiteCard=27 WhiteCard value
     * @property {number} AskRoadCall=28 AskRoadCall value
     * @property {number} AskRoadRecall=29 AskRoadRecall value
     * @property {number} BroadcastAnnouncement=30 BroadcastAnnouncement value
     * @property {number} BroadcastTotalPlayersOnline=31 BroadcastTotalPlayersOnline value
     * @property {number} Kickout=4000 Kickout value
     * @property {number} kickoutwarn=4001 kickoutwarn value
     * @property {number} Chat=5000 Chat value
     * @property {number} BroadcastChat=5001 BroadcastChat value
     * @property {number} DonateCall=6000 DonateCall value
     * @property {number} DonateRecall=6001 DonateRecall value
     * @property {number} WatchcardNotificaion=7000 WatchcardNotificaion value
     * @property {number} WatchcardCall=7001 WatchcardCall value
     * @property {number} WatchcardRecall=7002 WatchcardRecall value
     * @property {number} BroadcastWatchcardNotificaion=7003 BroadcastWatchcardNotificaion value
     * @property {number} BroadcastWatchcardCall=7004 BroadcastWatchcardCall value
     * @property {number} HistoryCall=8001 HistoryCall value
     * @property {number} HistoryRecall=8002 HistoryRecall value
     * @property {number} FlyCardCall=8101 FlyCardCall value
     * @property {number} FlyCardRecall=8102 FlyCardRecall value
     * @property {number} BroadcastFlyCardRecall=8103 BroadcastFlyCardRecall value
     */
    route.URI = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Default"] = 0;
        values[valuesById[1] = "LoginCall"] = 1;
        values[valuesById[2] = "LoginRecall"] = 2;
        values[valuesById[3] = "LobbyInfo"] = 3;
        values[valuesById[4] = "UserInfo"] = 4;
        values[valuesById[5] = "TableJoinCall"] = 5;
        values[valuesById[6] = "TableJoinRecall"] = 6;
        values[valuesById[1006] = "BroadcastJoinedPlayers"] = 1006;
        values[valuesById[7] = "BetCall"] = 7;
        values[valuesById[8] = "BetRecall"] = 8;
        values[valuesById[9] = "BetResetCall"] = 9;
        values[valuesById[10] = "BetResetRecall"] = 10;
        values[valuesById[100] = "BetConfirmCall"] = 100;
        values[valuesById[101] = "BetConfirmRecall"] = 101;
        values[valuesById[102] = "BroadcastBetConfirmRecall"] = 102;
        values[valuesById[110] = "BroadcastBetstatus"] = 110;
        values[valuesById[11] = "Draw"] = 11;
        values[valuesById[12] = "DealerGameResult"] = 12;
        values[valuesById[13] = "BroadcastGameResult"] = 13;
        values[valuesById[14] = "BetRoundStart"] = 14;
        values[valuesById[15] = "BetRoundEnd"] = 15;
        values[valuesById[1501] = "BetRoundEndCall"] = 1501;
        values[valuesById[16] = "BetRoundCountdown"] = 16;
        values[valuesById[17] = "HeartbeatPing"] = 17;
        values[valuesById[18] = "HeartbeatPong"] = 18;
        values[valuesById[19] = "DealerRoundStartCall"] = 19;
        values[valuesById[20] = "DealerRoundStartRecall"] = 20;
        values[valuesById[21] = "DealerRoundEndCall"] = 21;
        values[valuesById[22] = "DealerRoundEndRecall"] = 22;
        values[valuesById[220] = "BroadcastDealerRoundEnd"] = 220;
        values[valuesById[23] = "BetError"] = 23;
        values[valuesById[24] = "GameStatus"] = 24;
        values[valuesById[25] = "DealerGameStatus"] = 25;
        values[valuesById[26] = "Roadmap"] = 26;
        values[valuesById[27] = "WhiteCard"] = 27;
        values[valuesById[28] = "AskRoadCall"] = 28;
        values[valuesById[29] = "AskRoadRecall"] = 29;
        values[valuesById[30] = "BroadcastAnnouncement"] = 30;
        values[valuesById[31] = "BroadcastTotalPlayersOnline"] = 31;
        values[valuesById[4000] = "Kickout"] = 4000;
        values[valuesById[4001] = "kickoutwarn"] = 4001;
        values[valuesById[5000] = "Chat"] = 5000;
        values[valuesById[5001] = "BroadcastChat"] = 5001;
        values[valuesById[6000] = "DonateCall"] = 6000;
        values[valuesById[6001] = "DonateRecall"] = 6001;
        values[valuesById[7000] = "WatchcardNotificaion"] = 7000;
        values[valuesById[7001] = "WatchcardCall"] = 7001;
        values[valuesById[7002] = "WatchcardRecall"] = 7002;
        values[valuesById[7003] = "BroadcastWatchcardNotificaion"] = 7003;
        values[valuesById[7004] = "BroadcastWatchcardCall"] = 7004;
        values[valuesById[8001] = "HistoryCall"] = 8001;
        values[valuesById[8002] = "HistoryRecall"] = 8002;
        values[valuesById[8101] = "FlyCardCall"] = 8101;
        values[valuesById[8102] = "FlyCardRecall"] = 8102;
        values[valuesById[8103] = "BroadcastFlyCardRecall"] = 8103;
        return values;
    })();

    return route;
})();

export const table = $root.table = (() => {

    /**
     * Namespace table.
     * @exports table
     * @namespace
     */
    const table = {};

    table.Table = (function() {

        /**
         * Properties of a Table.
         * @memberof table
         * @interface ITable
         * @property {bet.IBetStatus|null} [betStatus] Table betStatus
         * @property {table.IStreamingUrl|null} [streamingUrl] Table streamingUrl
         * @property {Array.<number>|null} [betList] Table betList
         * @property {table.IBetRule|null} [betRule] Table betRule
         * @property {game.GameType|null} [gameType] Table gameType
         */

        /**
         * Constructs a new Table.
         * @memberof table
         * @classdesc Represents a Table.
         * @implements ITable
         * @constructor
         * @param {table.ITable=} [properties] Properties to set
         */
        function Table(properties) {
            this.betList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Table betStatus.
         * @member {bet.IBetStatus|null|undefined} betStatus
         * @memberof table.Table
         * @instance
         */
        Table.prototype.betStatus = null;

        /**
         * Table streamingUrl.
         * @member {table.IStreamingUrl|null|undefined} streamingUrl
         * @memberof table.Table
         * @instance
         */
        Table.prototype.streamingUrl = null;

        /**
         * Table betList.
         * @member {Array.<number>} betList
         * @memberof table.Table
         * @instance
         */
        Table.prototype.betList = $util.emptyArray;

        /**
         * Table betRule.
         * @member {table.IBetRule|null|undefined} betRule
         * @memberof table.Table
         * @instance
         */
        Table.prototype.betRule = null;

        /**
         * Table gameType.
         * @member {game.GameType} gameType
         * @memberof table.Table
         * @instance
         */
        Table.prototype.gameType = 0;

        /**
         * Creates a new Table instance using the specified properties.
         * @function create
         * @memberof table.Table
         * @static
         * @param {table.ITable=} [properties] Properties to set
         * @returns {table.Table} Table instance
         */
        Table.create = function create(properties) {
            return new Table(properties);
        };

        /**
         * Encodes the specified Table message. Does not implicitly {@link table.Table.verify|verify} messages.
         * @function encode
         * @memberof table.Table
         * @static
         * @param {table.ITable} message Table message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Table.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.betStatus != null && Object.hasOwnProperty.call(message, "betStatus"))
                $root.bet.BetStatus.encode(message.betStatus, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.streamingUrl != null && Object.hasOwnProperty.call(message, "streamingUrl"))
                $root.table.StreamingUrl.encode(message.streamingUrl, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.betList != null && message.betList.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.betList.length; ++i)
                    writer.double(message.betList[i]);
                writer.ldelim();
            }
            if (message.betRule != null && Object.hasOwnProperty.call(message, "betRule"))
                $root.table.BetRule.encode(message.betRule, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.gameType != null && Object.hasOwnProperty.call(message, "gameType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gameType);
            return writer;
        };

        /**
         * Encodes the specified Table message, length delimited. Does not implicitly {@link table.Table.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.Table
         * @static
         * @param {table.ITable} message Table message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Table.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @function decode
         * @memberof table.Table
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.Table} Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Table.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.Table();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.betStatus = $root.bet.BetStatus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.streamingUrl = $root.table.StreamingUrl.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.betList && message.betList.length))
                        message.betList = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.betList.push(reader.double());
                    } else
                        message.betList.push(reader.double());
                    break;
                case 4:
                    message.betRule = $root.table.BetRule.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.gameType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Table message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.Table
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.Table} Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Table.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Table message.
         * @function verify
         * @memberof table.Table
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Table.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.betStatus != null && message.hasOwnProperty("betStatus")) {
                let error = $root.bet.BetStatus.verify(message.betStatus);
                if (error)
                    return "betStatus." + error;
            }
            if (message.streamingUrl != null && message.hasOwnProperty("streamingUrl")) {
                let error = $root.table.StreamingUrl.verify(message.streamingUrl);
                if (error)
                    return "streamingUrl." + error;
            }
            if (message.betList != null && message.hasOwnProperty("betList")) {
                if (!Array.isArray(message.betList))
                    return "betList: array expected";
                for (let i = 0; i < message.betList.length; ++i)
                    if (typeof message.betList[i] !== "number")
                        return "betList: number[] expected";
            }
            if (message.betRule != null && message.hasOwnProperty("betRule")) {
                let error = $root.table.BetRule.verify(message.betRule);
                if (error)
                    return "betRule." + error;
            }
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                switch (message.gameType) {
                default:
                    return "gameType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a Table message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.Table
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.Table} Table
         */
        Table.fromObject = function fromObject(object) {
            if (object instanceof $root.table.Table)
                return object;
            let message = new $root.table.Table();
            if (object.betStatus != null) {
                if (typeof object.betStatus !== "object")
                    throw TypeError(".table.Table.betStatus: object expected");
                message.betStatus = $root.bet.BetStatus.fromObject(object.betStatus);
            }
            if (object.streamingUrl != null) {
                if (typeof object.streamingUrl !== "object")
                    throw TypeError(".table.Table.streamingUrl: object expected");
                message.streamingUrl = $root.table.StreamingUrl.fromObject(object.streamingUrl);
            }
            if (object.betList) {
                if (!Array.isArray(object.betList))
                    throw TypeError(".table.Table.betList: array expected");
                message.betList = [];
                for (let i = 0; i < object.betList.length; ++i)
                    message.betList[i] = Number(object.betList[i]);
            }
            if (object.betRule != null) {
                if (typeof object.betRule !== "object")
                    throw TypeError(".table.Table.betRule: object expected");
                message.betRule = $root.table.BetRule.fromObject(object.betRule);
            }
            switch (object.gameType) {
            case "GameType_default":
            case 0:
                message.gameType = 0;
                break;
            case "normal":
            case 1:
                message.gameType = 1;
                break;
            case "vip":
            case 2:
                message.gameType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Table message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.Table
         * @static
         * @param {table.Table} message Table
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Table.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.betList = [];
            if (options.defaults) {
                object.betStatus = null;
                object.streamingUrl = null;
                object.betRule = null;
                object.gameType = options.enums === String ? "GameType_default" : 0;
            }
            if (message.betStatus != null && message.hasOwnProperty("betStatus"))
                object.betStatus = $root.bet.BetStatus.toObject(message.betStatus, options);
            if (message.streamingUrl != null && message.hasOwnProperty("streamingUrl"))
                object.streamingUrl = $root.table.StreamingUrl.toObject(message.streamingUrl, options);
            if (message.betList && message.betList.length) {
                object.betList = [];
                for (let j = 0; j < message.betList.length; ++j)
                    object.betList[j] = options.json && !isFinite(message.betList[j]) ? String(message.betList[j]) : message.betList[j];
            }
            if (message.betRule != null && message.hasOwnProperty("betRule"))
                object.betRule = $root.table.BetRule.toObject(message.betRule, options);
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                object.gameType = options.enums === String ? $root.game.GameType[message.gameType] : message.gameType;
            return object;
        };

        /**
         * Converts this Table to JSON.
         * @function toJSON
         * @memberof table.Table
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Table.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Table;
    })();

    table.TableJoinCall = (function() {

        /**
         * Properties of a TableJoinCall.
         * @memberof table
         * @interface ITableJoinCall
         * @property {foundation.IHeader|null} [header] TableJoinCall header
         * @property {string|null} [uuid] TableJoinCall uuid
         */

        /**
         * Constructs a new TableJoinCall.
         * @memberof table
         * @classdesc Represents a TableJoinCall.
         * @implements ITableJoinCall
         * @constructor
         * @param {table.ITableJoinCall=} [properties] Properties to set
         */
        function TableJoinCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableJoinCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof table.TableJoinCall
         * @instance
         */
        TableJoinCall.prototype.header = null;

        /**
         * TableJoinCall uuid.
         * @member {string} uuid
         * @memberof table.TableJoinCall
         * @instance
         */
        TableJoinCall.prototype.uuid = "";

        /**
         * Creates a new TableJoinCall instance using the specified properties.
         * @function create
         * @memberof table.TableJoinCall
         * @static
         * @param {table.ITableJoinCall=} [properties] Properties to set
         * @returns {table.TableJoinCall} TableJoinCall instance
         */
        TableJoinCall.create = function create(properties) {
            return new TableJoinCall(properties);
        };

        /**
         * Encodes the specified TableJoinCall message. Does not implicitly {@link table.TableJoinCall.verify|verify} messages.
         * @function encode
         * @memberof table.TableJoinCall
         * @static
         * @param {table.ITableJoinCall} message TableJoinCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableJoinCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uuid);
            return writer;
        };

        /**
         * Encodes the specified TableJoinCall message, length delimited. Does not implicitly {@link table.TableJoinCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.TableJoinCall
         * @static
         * @param {table.ITableJoinCall} message TableJoinCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableJoinCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableJoinCall message from the specified reader or buffer.
         * @function decode
         * @memberof table.TableJoinCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.TableJoinCall} TableJoinCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableJoinCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.TableJoinCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableJoinCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.TableJoinCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.TableJoinCall} TableJoinCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableJoinCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableJoinCall message.
         * @function verify
         * @memberof table.TableJoinCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableJoinCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            return null;
        };

        /**
         * Creates a TableJoinCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.TableJoinCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.TableJoinCall} TableJoinCall
         */
        TableJoinCall.fromObject = function fromObject(object) {
            if (object instanceof $root.table.TableJoinCall)
                return object;
            let message = new $root.table.TableJoinCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".table.TableJoinCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            return message;
        };

        /**
         * Creates a plain object from a TableJoinCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.TableJoinCall
         * @static
         * @param {table.TableJoinCall} message TableJoinCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableJoinCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.uuid = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            return object;
        };

        /**
         * Converts this TableJoinCall to JSON.
         * @function toJSON
         * @memberof table.TableJoinCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableJoinCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableJoinCall;
    })();

    table.TableJoinRecall = (function() {

        /**
         * Properties of a TableJoinRecall.
         * @memberof table
         * @interface ITableJoinRecall
         * @property {foundation.IHeader|null} [header] TableJoinRecall header
         * @property {table.ITable|null} [table] TableJoinRecall table
         */

        /**
         * Constructs a new TableJoinRecall.
         * @memberof table
         * @classdesc Represents a TableJoinRecall.
         * @implements ITableJoinRecall
         * @constructor
         * @param {table.ITableJoinRecall=} [properties] Properties to set
         */
        function TableJoinRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableJoinRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof table.TableJoinRecall
         * @instance
         */
        TableJoinRecall.prototype.header = null;

        /**
         * TableJoinRecall table.
         * @member {table.ITable|null|undefined} table
         * @memberof table.TableJoinRecall
         * @instance
         */
        TableJoinRecall.prototype.table = null;

        /**
         * Creates a new TableJoinRecall instance using the specified properties.
         * @function create
         * @memberof table.TableJoinRecall
         * @static
         * @param {table.ITableJoinRecall=} [properties] Properties to set
         * @returns {table.TableJoinRecall} TableJoinRecall instance
         */
        TableJoinRecall.create = function create(properties) {
            return new TableJoinRecall(properties);
        };

        /**
         * Encodes the specified TableJoinRecall message. Does not implicitly {@link table.TableJoinRecall.verify|verify} messages.
         * @function encode
         * @memberof table.TableJoinRecall
         * @static
         * @param {table.ITableJoinRecall} message TableJoinRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableJoinRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.table != null && Object.hasOwnProperty.call(message, "table"))
                $root.table.Table.encode(message.table, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TableJoinRecall message, length delimited. Does not implicitly {@link table.TableJoinRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.TableJoinRecall
         * @static
         * @param {table.ITableJoinRecall} message TableJoinRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableJoinRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableJoinRecall message from the specified reader or buffer.
         * @function decode
         * @memberof table.TableJoinRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.TableJoinRecall} TableJoinRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableJoinRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.TableJoinRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.table = $root.table.Table.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableJoinRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.TableJoinRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.TableJoinRecall} TableJoinRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableJoinRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableJoinRecall message.
         * @function verify
         * @memberof table.TableJoinRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableJoinRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.table != null && message.hasOwnProperty("table")) {
                let error = $root.table.Table.verify(message.table);
                if (error)
                    return "table." + error;
            }
            return null;
        };

        /**
         * Creates a TableJoinRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.TableJoinRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.TableJoinRecall} TableJoinRecall
         */
        TableJoinRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.table.TableJoinRecall)
                return object;
            let message = new $root.table.TableJoinRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".table.TableJoinRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.table != null) {
                if (typeof object.table !== "object")
                    throw TypeError(".table.TableJoinRecall.table: object expected");
                message.table = $root.table.Table.fromObject(object.table);
            }
            return message;
        };

        /**
         * Creates a plain object from a TableJoinRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.TableJoinRecall
         * @static
         * @param {table.TableJoinRecall} message TableJoinRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableJoinRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.table = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.table != null && message.hasOwnProperty("table"))
                object.table = $root.table.Table.toObject(message.table, options);
            return object;
        };

        /**
         * Converts this TableJoinRecall to JSON.
         * @function toJSON
         * @memberof table.TableJoinRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableJoinRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableJoinRecall;
    })();

    table.BroadcastJoinedPlayers = (function() {

        /**
         * Properties of a BroadcastJoinedPlayers.
         * @memberof table
         * @interface IBroadcastJoinedPlayers
         * @property {foundation.IHeader|null} [header] BroadcastJoinedPlayers header
         * @property {Array.<table.IJoinedPlayer>|null} [joinedPlayers] BroadcastJoinedPlayers joinedPlayers
         */

        /**
         * Constructs a new BroadcastJoinedPlayers.
         * @memberof table
         * @classdesc Represents a BroadcastJoinedPlayers.
         * @implements IBroadcastJoinedPlayers
         * @constructor
         * @param {table.IBroadcastJoinedPlayers=} [properties] Properties to set
         */
        function BroadcastJoinedPlayers(properties) {
            this.joinedPlayers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastJoinedPlayers header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof table.BroadcastJoinedPlayers
         * @instance
         */
        BroadcastJoinedPlayers.prototype.header = null;

        /**
         * BroadcastJoinedPlayers joinedPlayers.
         * @member {Array.<table.IJoinedPlayer>} joinedPlayers
         * @memberof table.BroadcastJoinedPlayers
         * @instance
         */
        BroadcastJoinedPlayers.prototype.joinedPlayers = $util.emptyArray;

        /**
         * Creates a new BroadcastJoinedPlayers instance using the specified properties.
         * @function create
         * @memberof table.BroadcastJoinedPlayers
         * @static
         * @param {table.IBroadcastJoinedPlayers=} [properties] Properties to set
         * @returns {table.BroadcastJoinedPlayers} BroadcastJoinedPlayers instance
         */
        BroadcastJoinedPlayers.create = function create(properties) {
            return new BroadcastJoinedPlayers(properties);
        };

        /**
         * Encodes the specified BroadcastJoinedPlayers message. Does not implicitly {@link table.BroadcastJoinedPlayers.verify|verify} messages.
         * @function encode
         * @memberof table.BroadcastJoinedPlayers
         * @static
         * @param {table.IBroadcastJoinedPlayers} message BroadcastJoinedPlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastJoinedPlayers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.joinedPlayers != null && message.joinedPlayers.length)
                for (let i = 0; i < message.joinedPlayers.length; ++i)
                    $root.table.JoinedPlayer.encode(message.joinedPlayers[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BroadcastJoinedPlayers message, length delimited. Does not implicitly {@link table.BroadcastJoinedPlayers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.BroadcastJoinedPlayers
         * @static
         * @param {table.IBroadcastJoinedPlayers} message BroadcastJoinedPlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastJoinedPlayers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastJoinedPlayers message from the specified reader or buffer.
         * @function decode
         * @memberof table.BroadcastJoinedPlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.BroadcastJoinedPlayers} BroadcastJoinedPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastJoinedPlayers.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.BroadcastJoinedPlayers();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.joinedPlayers && message.joinedPlayers.length))
                        message.joinedPlayers = [];
                    message.joinedPlayers.push($root.table.JoinedPlayer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastJoinedPlayers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.BroadcastJoinedPlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.BroadcastJoinedPlayers} BroadcastJoinedPlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastJoinedPlayers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastJoinedPlayers message.
         * @function verify
         * @memberof table.BroadcastJoinedPlayers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastJoinedPlayers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.joinedPlayers != null && message.hasOwnProperty("joinedPlayers")) {
                if (!Array.isArray(message.joinedPlayers))
                    return "joinedPlayers: array expected";
                for (let i = 0; i < message.joinedPlayers.length; ++i) {
                    let error = $root.table.JoinedPlayer.verify(message.joinedPlayers[i]);
                    if (error)
                        return "joinedPlayers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BroadcastJoinedPlayers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.BroadcastJoinedPlayers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.BroadcastJoinedPlayers} BroadcastJoinedPlayers
         */
        BroadcastJoinedPlayers.fromObject = function fromObject(object) {
            if (object instanceof $root.table.BroadcastJoinedPlayers)
                return object;
            let message = new $root.table.BroadcastJoinedPlayers();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".table.BroadcastJoinedPlayers.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.joinedPlayers) {
                if (!Array.isArray(object.joinedPlayers))
                    throw TypeError(".table.BroadcastJoinedPlayers.joinedPlayers: array expected");
                message.joinedPlayers = [];
                for (let i = 0; i < object.joinedPlayers.length; ++i) {
                    if (typeof object.joinedPlayers[i] !== "object")
                        throw TypeError(".table.BroadcastJoinedPlayers.joinedPlayers: object expected");
                    message.joinedPlayers[i] = $root.table.JoinedPlayer.fromObject(object.joinedPlayers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastJoinedPlayers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.BroadcastJoinedPlayers
         * @static
         * @param {table.BroadcastJoinedPlayers} message BroadcastJoinedPlayers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastJoinedPlayers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.joinedPlayers = [];
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.joinedPlayers && message.joinedPlayers.length) {
                object.joinedPlayers = [];
                for (let j = 0; j < message.joinedPlayers.length; ++j)
                    object.joinedPlayers[j] = $root.table.JoinedPlayer.toObject(message.joinedPlayers[j], options);
            }
            return object;
        };

        /**
         * Converts this BroadcastJoinedPlayers to JSON.
         * @function toJSON
         * @memberof table.BroadcastJoinedPlayers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastJoinedPlayers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastJoinedPlayers;
    })();

    table.JoinedPlayer = (function() {

        /**
         * Properties of a JoinedPlayer.
         * @memberof table
         * @interface IJoinedPlayer
         * @property {string|null} [account] JoinedPlayer account
         * @property {string|null} [name] JoinedPlayer name
         * @property {bet.IBetStatus|null} [bets] JoinedPlayer bets
         */

        /**
         * Constructs a new JoinedPlayer.
         * @memberof table
         * @classdesc Represents a JoinedPlayer.
         * @implements IJoinedPlayer
         * @constructor
         * @param {table.IJoinedPlayer=} [properties] Properties to set
         */
        function JoinedPlayer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinedPlayer account.
         * @member {string} account
         * @memberof table.JoinedPlayer
         * @instance
         */
        JoinedPlayer.prototype.account = "";

        /**
         * JoinedPlayer name.
         * @member {string} name
         * @memberof table.JoinedPlayer
         * @instance
         */
        JoinedPlayer.prototype.name = "";

        /**
         * JoinedPlayer bets.
         * @member {bet.IBetStatus|null|undefined} bets
         * @memberof table.JoinedPlayer
         * @instance
         */
        JoinedPlayer.prototype.bets = null;

        /**
         * Creates a new JoinedPlayer instance using the specified properties.
         * @function create
         * @memberof table.JoinedPlayer
         * @static
         * @param {table.IJoinedPlayer=} [properties] Properties to set
         * @returns {table.JoinedPlayer} JoinedPlayer instance
         */
        JoinedPlayer.create = function create(properties) {
            return new JoinedPlayer(properties);
        };

        /**
         * Encodes the specified JoinedPlayer message. Does not implicitly {@link table.JoinedPlayer.verify|verify} messages.
         * @function encode
         * @memberof table.JoinedPlayer
         * @static
         * @param {table.IJoinedPlayer} message JoinedPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinedPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.bets != null && Object.hasOwnProperty.call(message, "bets"))
                $root.bet.BetStatus.encode(message.bets, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinedPlayer message, length delimited. Does not implicitly {@link table.JoinedPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.JoinedPlayer
         * @static
         * @param {table.IJoinedPlayer} message JoinedPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinedPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinedPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof table.JoinedPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.JoinedPlayer} JoinedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinedPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.JoinedPlayer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.bets = $root.bet.BetStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinedPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.JoinedPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.JoinedPlayer} JoinedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinedPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinedPlayer message.
         * @function verify
         * @memberof table.JoinedPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinedPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.bets != null && message.hasOwnProperty("bets")) {
                let error = $root.bet.BetStatus.verify(message.bets);
                if (error)
                    return "bets." + error;
            }
            return null;
        };

        /**
         * Creates a JoinedPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.JoinedPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.JoinedPlayer} JoinedPlayer
         */
        JoinedPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.table.JoinedPlayer)
                return object;
            let message = new $root.table.JoinedPlayer();
            if (object.account != null)
                message.account = String(object.account);
            if (object.name != null)
                message.name = String(object.name);
            if (object.bets != null) {
                if (typeof object.bets !== "object")
                    throw TypeError(".table.JoinedPlayer.bets: object expected");
                message.bets = $root.bet.BetStatus.fromObject(object.bets);
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinedPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.JoinedPlayer
         * @static
         * @param {table.JoinedPlayer} message JoinedPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinedPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.account = "";
                object.name = "";
                object.bets = null;
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.bets != null && message.hasOwnProperty("bets"))
                object.bets = $root.bet.BetStatus.toObject(message.bets, options);
            return object;
        };

        /**
         * Converts this JoinedPlayer to JSON.
         * @function toJSON
         * @memberof table.JoinedPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinedPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinedPlayer;
    })();

    table.StreamingUrl = (function() {

        /**
         * Properties of a StreamingUrl.
         * @memberof table
         * @interface IStreamingUrl
         * @property {string|null} [desktop] StreamingUrl desktop
         * @property {string|null} [moblie] StreamingUrl moblie
         */

        /**
         * Constructs a new StreamingUrl.
         * @memberof table
         * @classdesc Represents a StreamingUrl.
         * @implements IStreamingUrl
         * @constructor
         * @param {table.IStreamingUrl=} [properties] Properties to set
         */
        function StreamingUrl(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StreamingUrl desktop.
         * @member {string} desktop
         * @memberof table.StreamingUrl
         * @instance
         */
        StreamingUrl.prototype.desktop = "";

        /**
         * StreamingUrl moblie.
         * @member {string} moblie
         * @memberof table.StreamingUrl
         * @instance
         */
        StreamingUrl.prototype.moblie = "";

        /**
         * Creates a new StreamingUrl instance using the specified properties.
         * @function create
         * @memberof table.StreamingUrl
         * @static
         * @param {table.IStreamingUrl=} [properties] Properties to set
         * @returns {table.StreamingUrl} StreamingUrl instance
         */
        StreamingUrl.create = function create(properties) {
            return new StreamingUrl(properties);
        };

        /**
         * Encodes the specified StreamingUrl message. Does not implicitly {@link table.StreamingUrl.verify|verify} messages.
         * @function encode
         * @memberof table.StreamingUrl
         * @static
         * @param {table.IStreamingUrl} message StreamingUrl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamingUrl.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.desktop != null && Object.hasOwnProperty.call(message, "desktop"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.desktop);
            if (message.moblie != null && Object.hasOwnProperty.call(message, "moblie"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.moblie);
            return writer;
        };

        /**
         * Encodes the specified StreamingUrl message, length delimited. Does not implicitly {@link table.StreamingUrl.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.StreamingUrl
         * @static
         * @param {table.IStreamingUrl} message StreamingUrl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamingUrl.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StreamingUrl message from the specified reader or buffer.
         * @function decode
         * @memberof table.StreamingUrl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.StreamingUrl} StreamingUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamingUrl.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.StreamingUrl();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.desktop = reader.string();
                    break;
                case 2:
                    message.moblie = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StreamingUrl message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.StreamingUrl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.StreamingUrl} StreamingUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamingUrl.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StreamingUrl message.
         * @function verify
         * @memberof table.StreamingUrl
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StreamingUrl.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.desktop != null && message.hasOwnProperty("desktop"))
                if (!$util.isString(message.desktop))
                    return "desktop: string expected";
            if (message.moblie != null && message.hasOwnProperty("moblie"))
                if (!$util.isString(message.moblie))
                    return "moblie: string expected";
            return null;
        };

        /**
         * Creates a StreamingUrl message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.StreamingUrl
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.StreamingUrl} StreamingUrl
         */
        StreamingUrl.fromObject = function fromObject(object) {
            if (object instanceof $root.table.StreamingUrl)
                return object;
            let message = new $root.table.StreamingUrl();
            if (object.desktop != null)
                message.desktop = String(object.desktop);
            if (object.moblie != null)
                message.moblie = String(object.moblie);
            return message;
        };

        /**
         * Creates a plain object from a StreamingUrl message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.StreamingUrl
         * @static
         * @param {table.StreamingUrl} message StreamingUrl
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StreamingUrl.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.desktop = "";
                object.moblie = "";
            }
            if (message.desktop != null && message.hasOwnProperty("desktop"))
                object.desktop = message.desktop;
            if (message.moblie != null && message.hasOwnProperty("moblie"))
                object.moblie = message.moblie;
            return object;
        };

        /**
         * Converts this StreamingUrl to JSON.
         * @function toJSON
         * @memberof table.StreamingUrl
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StreamingUrl.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StreamingUrl;
    })();

    table.BetRule = (function() {

        /**
         * Properties of a BetRule.
         * @memberof table
         * @interface IBetRule
         * @property {table.IRule|null} [player] BetRule player
         * @property {table.IRule|null} [banker] BetRule banker
         * @property {table.IRule|null} [playerPair] BetRule playerPair
         * @property {table.IRule|null} [tie] BetRule tie
         * @property {table.IRule|null} [bankerPair] BetRule bankerPair
         */

        /**
         * Constructs a new BetRule.
         * @memberof table
         * @classdesc Represents a BetRule.
         * @implements IBetRule
         * @constructor
         * @param {table.IBetRule=} [properties] Properties to set
         */
        function BetRule(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRule player.
         * @member {table.IRule|null|undefined} player
         * @memberof table.BetRule
         * @instance
         */
        BetRule.prototype.player = null;

        /**
         * BetRule banker.
         * @member {table.IRule|null|undefined} banker
         * @memberof table.BetRule
         * @instance
         */
        BetRule.prototype.banker = null;

        /**
         * BetRule playerPair.
         * @member {table.IRule|null|undefined} playerPair
         * @memberof table.BetRule
         * @instance
         */
        BetRule.prototype.playerPair = null;

        /**
         * BetRule tie.
         * @member {table.IRule|null|undefined} tie
         * @memberof table.BetRule
         * @instance
         */
        BetRule.prototype.tie = null;

        /**
         * BetRule bankerPair.
         * @member {table.IRule|null|undefined} bankerPair
         * @memberof table.BetRule
         * @instance
         */
        BetRule.prototype.bankerPair = null;

        /**
         * Creates a new BetRule instance using the specified properties.
         * @function create
         * @memberof table.BetRule
         * @static
         * @param {table.IBetRule=} [properties] Properties to set
         * @returns {table.BetRule} BetRule instance
         */
        BetRule.create = function create(properties) {
            return new BetRule(properties);
        };

        /**
         * Encodes the specified BetRule message. Does not implicitly {@link table.BetRule.verify|verify} messages.
         * @function encode
         * @memberof table.BetRule
         * @static
         * @param {table.IBetRule} message BetRule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRule.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                $root.table.Rule.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.banker != null && Object.hasOwnProperty.call(message, "banker"))
                $root.table.Rule.encode(message.banker, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.playerPair != null && Object.hasOwnProperty.call(message, "playerPair"))
                $root.table.Rule.encode(message.playerPair, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.tie != null && Object.hasOwnProperty.call(message, "tie"))
                $root.table.Rule.encode(message.tie, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.bankerPair != null && Object.hasOwnProperty.call(message, "bankerPair"))
                $root.table.Rule.encode(message.bankerPair, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BetRule message, length delimited. Does not implicitly {@link table.BetRule.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.BetRule
         * @static
         * @param {table.IBetRule} message BetRule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRule.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRule message from the specified reader or buffer.
         * @function decode
         * @memberof table.BetRule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.BetRule} BetRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRule.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.BetRule();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.table.Rule.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.banker = $root.table.Rule.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.playerPair = $root.table.Rule.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tie = $root.table.Rule.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.bankerPair = $root.table.Rule.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRule message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.BetRule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.BetRule} BetRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRule.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRule message.
         * @function verify
         * @memberof table.BetRule
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRule.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                let error = $root.table.Rule.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.banker != null && message.hasOwnProperty("banker")) {
                let error = $root.table.Rule.verify(message.banker);
                if (error)
                    return "banker." + error;
            }
            if (message.playerPair != null && message.hasOwnProperty("playerPair")) {
                let error = $root.table.Rule.verify(message.playerPair);
                if (error)
                    return "playerPair." + error;
            }
            if (message.tie != null && message.hasOwnProperty("tie")) {
                let error = $root.table.Rule.verify(message.tie);
                if (error)
                    return "tie." + error;
            }
            if (message.bankerPair != null && message.hasOwnProperty("bankerPair")) {
                let error = $root.table.Rule.verify(message.bankerPair);
                if (error)
                    return "bankerPair." + error;
            }
            return null;
        };

        /**
         * Creates a BetRule message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.BetRule
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.BetRule} BetRule
         */
        BetRule.fromObject = function fromObject(object) {
            if (object instanceof $root.table.BetRule)
                return object;
            let message = new $root.table.BetRule();
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".table.BetRule.player: object expected");
                message.player = $root.table.Rule.fromObject(object.player);
            }
            if (object.banker != null) {
                if (typeof object.banker !== "object")
                    throw TypeError(".table.BetRule.banker: object expected");
                message.banker = $root.table.Rule.fromObject(object.banker);
            }
            if (object.playerPair != null) {
                if (typeof object.playerPair !== "object")
                    throw TypeError(".table.BetRule.playerPair: object expected");
                message.playerPair = $root.table.Rule.fromObject(object.playerPair);
            }
            if (object.tie != null) {
                if (typeof object.tie !== "object")
                    throw TypeError(".table.BetRule.tie: object expected");
                message.tie = $root.table.Rule.fromObject(object.tie);
            }
            if (object.bankerPair != null) {
                if (typeof object.bankerPair !== "object")
                    throw TypeError(".table.BetRule.bankerPair: object expected");
                message.bankerPair = $root.table.Rule.fromObject(object.bankerPair);
            }
            return message;
        };

        /**
         * Creates a plain object from a BetRule message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.BetRule
         * @static
         * @param {table.BetRule} message BetRule
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRule.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.player = null;
                object.banker = null;
                object.playerPair = null;
                object.tie = null;
                object.bankerPair = null;
            }
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.table.Rule.toObject(message.player, options);
            if (message.banker != null && message.hasOwnProperty("banker"))
                object.banker = $root.table.Rule.toObject(message.banker, options);
            if (message.playerPair != null && message.hasOwnProperty("playerPair"))
                object.playerPair = $root.table.Rule.toObject(message.playerPair, options);
            if (message.tie != null && message.hasOwnProperty("tie"))
                object.tie = $root.table.Rule.toObject(message.tie, options);
            if (message.bankerPair != null && message.hasOwnProperty("bankerPair"))
                object.bankerPair = $root.table.Rule.toObject(message.bankerPair, options);
            return object;
        };

        /**
         * Converts this BetRule to JSON.
         * @function toJSON
         * @memberof table.BetRule
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRule.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRule;
    })();

    table.Rule = (function() {

        /**
         * Properties of a Rule.
         * @memberof table
         * @interface IRule
         * @property {number|null} [max] Rule max
         * @property {number|null} [min] Rule min
         */

        /**
         * Constructs a new Rule.
         * @memberof table
         * @classdesc Represents a Rule.
         * @implements IRule
         * @constructor
         * @param {table.IRule=} [properties] Properties to set
         */
        function Rule(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Rule max.
         * @member {number} max
         * @memberof table.Rule
         * @instance
         */
        Rule.prototype.max = 0;

        /**
         * Rule min.
         * @member {number} min
         * @memberof table.Rule
         * @instance
         */
        Rule.prototype.min = 0;

        /**
         * Creates a new Rule instance using the specified properties.
         * @function create
         * @memberof table.Rule
         * @static
         * @param {table.IRule=} [properties] Properties to set
         * @returns {table.Rule} Rule instance
         */
        Rule.create = function create(properties) {
            return new Rule(properties);
        };

        /**
         * Encodes the specified Rule message. Does not implicitly {@link table.Rule.verify|verify} messages.
         * @function encode
         * @memberof table.Rule
         * @static
         * @param {table.IRule} message Rule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rule.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.max);
            if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.min);
            return writer;
        };

        /**
         * Encodes the specified Rule message, length delimited. Does not implicitly {@link table.Rule.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.Rule
         * @static
         * @param {table.IRule} message Rule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rule.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rule message from the specified reader or buffer.
         * @function decode
         * @memberof table.Rule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.Rule} Rule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rule.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.Rule();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.max = reader.double();
                    break;
                case 2:
                    message.min = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Rule message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.Rule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.Rule} Rule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rule.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Rule message.
         * @function verify
         * @memberof table.Rule
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Rule.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.max != null && message.hasOwnProperty("max"))
                if (typeof message.max !== "number")
                    return "max: number expected";
            if (message.min != null && message.hasOwnProperty("min"))
                if (typeof message.min !== "number")
                    return "min: number expected";
            return null;
        };

        /**
         * Creates a Rule message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.Rule
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.Rule} Rule
         */
        Rule.fromObject = function fromObject(object) {
            if (object instanceof $root.table.Rule)
                return object;
            let message = new $root.table.Rule();
            if (object.max != null)
                message.max = Number(object.max);
            if (object.min != null)
                message.min = Number(object.min);
            return message;
        };

        /**
         * Creates a plain object from a Rule message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.Rule
         * @static
         * @param {table.Rule} message Rule
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Rule.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.max = 0;
                object.min = 0;
            }
            if (message.max != null && message.hasOwnProperty("max"))
                object.max = options.json && !isFinite(message.max) ? String(message.max) : message.max;
            if (message.min != null && message.hasOwnProperty("min"))
                object.min = options.json && !isFinite(message.min) ? String(message.min) : message.min;
            return object;
        };

        /**
         * Converts this Rule to JSON.
         * @function toJSON
         * @memberof table.Rule
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Rule.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Rule;
    })();

    return table;
})();

export { $root as default };