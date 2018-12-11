import * as request from 'request';
import { IBranchIoConfig } from './interfaces';
import { App } from './services/App';
import { Link } from './services/Link';
import { User } from './services/User';
import { Event } from './services/Event';
import { Referral } from './services/Referral';
import { Webhook } from './services/Webhook';

/**
 * BranchIo
 */
export class BranchIo {
  private apiUrl = 'https://api2.branch.io';
  protected config: IBranchIoConfig;
  protected services: {
    app?: App,
    link?: Link,
    event?: Event,
    user?: User,
    referral?: Referral,
    webhook?: Webhook,
  } = {};

  /**
   * Constructor
   * @param config
   */
  constructor(config: IBranchIoConfig) {
    this.config = config;
  }

  /**
   *
   */
  public getConfig(): IBranchIoConfig {
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
  public request(method, uri, data?: any, qs?: any, headers?: any): Promise<any> {
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
  get app(): App {
    if (!(this.services.app instanceof App)) {
      this.services.app = new App(this);
    }

    return this.services.app;
  }

  /**
   * Link
   */
  get link(): Link {
    if (!(this.services.link instanceof Link)) {
      this.services.link = new Link(this);
    }

    return this.services.link;
  }

  /**
   * Event
   */
  get event(): Event {
    if (!(this.services.event instanceof Event)) {
      this.services.event = new Event(this);
    }

    return this.services.event;
  }

  /**
   * User
   */
  get user(): User {
    if (!(this.services.user instanceof User)) {
      this.services.user = new User(this);
    }

    return this.services.user;
  }

  /**
   * Referral
   */
  get referral(): Referral {
    if (!(this.services.referral instanceof Referral)) {
      this.services.referral = new Referral(this);
    }

    return this.services.referral;
  }

  /**
   * Webhook
   */
  get webhook(): Webhook {
    if (!(this.services.webhook instanceof Webhook)) {
      this.services.webhook = new Webhook(this);
    }

    return this.services.webhook;
  }
}
