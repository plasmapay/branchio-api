import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';
/**
 * Link
 */
export declare class Link implements IBranchIoService {
    api: BranchIo;
    protected resource: string;
    constructor(api: BranchIo);
    /**
     * Create link
     * @param params
     */
    create(params: any): Promise<any>;
    /**
     * Read link
     */
    read(url: string): Promise<any>;
    /**
     * Update link
     * @param url
     * @param params
     */
    update(url: string, params: any): Promise<any>;
    /**
     *
     * @param params
     * @param requiredProps
     */
    static resolveParams(params: any, requiredProps?: Array<any>): any;
}
