"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const App_1 = require("./services/App");
const Link_1 = require("./services/Link");
const User_1 = require("./services/User");
const Event_1 = require("./services/Event");
const Referral_1 = require("./services/Referral");
const Webhook_1 = require("./services/Webhook");
/**
 * BranchIo
 */
class BranchIo {
    /**
     * Constructor
     * @param config
     */
    constructor(config) {
        this.apiUrl = 'https://api2.branch.io';
        this.services = {};
        this.config = config;
    }
    /**
     *
     */
    getConfig() {
        return this.config;
    }
    /**
     * Request
     * @param method
     * @param uri
     * @param data
     * @param qs
     * @param headers
     */
    request(method, uri, data, qs, headers) {
        return new Promise((resolve, reject) => {
            if (!headers) {
                headers = {};
            }
            headers['content-type'] = 'application/json';
            request({
                method: method,
                url: this.apiUrl + '/' + uri.replace(/^\/+/g, ''),
                strictSSL: true,
                qs: qs,
                headers: headers,
                json: data,
            }, (err, res, body) => {
                if (err) {
                    return reject(err);
                }
                resolve(body);
            });
        });
    }
    /**
     * App
     */
    get app() {
        if (!(this.services.app instanceof App_1.App)) {
            this.services.app = new App_1.App(this);
        }
        return this.services.app;
    }
    /**
     * Link
     */
    get link() {
        if (!(this.services.link instanceof Link_1.Link)) {
            this.services.link = new Link_1.Link(this);
        }
        return this.services.link;
    }
    /**
     * Event
     */
    get event() {
        if (!(this.services.event instanceof Event_1.Event)) {
            this.services.event = new Event_1.Event(this);
        }
        return this.services.event;
    }
    /**
     * User
     */
    get user() {
        if (!(this.services.user instanceof User_1.User)) {
            this.services.user = new User_1.User(this);
        }
        return this.services.user;
    }
    /**
     * Referral
     */
    get referral() {
        if (!(this.services.referral instanceof Referral_1.Referral)) {
            this.services.referral = new Referral_1.Referral(this);
        }
        return this.services.referral;
    }
    /**
     * Webhook
     */
    get webhook() {
        if (!(this.services.webhook instanceof Webhook_1.Webhook)) {
            this.services.webhook = new Webhook_1.Webhook(this);
        }
        return this.services.webhook;
    }
}
exports.BranchIo = BranchIo;
