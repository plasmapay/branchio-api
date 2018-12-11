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
export declare class BranchIo {
    private apiUrl;
    protected config: IBranchIoConfig;
    protected services: {
        app?: App;
        link?: Link;
        event?: Event;
        user?: User;
        referral?: Referral;
        webhook?: Webhook;
    };
    /**
     * Constructor
     * @param config
     */
    constructor(config: IBranchIoConfig);
    /**
     *
     */
    getConfig(): IBranchIoConfig;
    /**
     * Request
     * @param method
     * @param uri
     * @param data
     * @param qs
     * @param headers
     */
    request(method: any, uri: any, data?: any, qs?: any, headers?: any): Promise<any>;
    /**
     * App
     */
    readonly app: App;
    /**
     * Link
     */
    readonly link: Link;
    /**
     * Event
     */
    readonly event: Event;
    /**
     * User
     */
    readonly user: User;
    /**
     * Referral
     */
    readonly referral: Referral;
    /**
     * Webhook
     */
    readonly webhook: Webhook;
}
