import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';
/**
 * App
 */
export declare class App implements IBranchIoService {
    api: BranchIo;
    protected resource: string;
    constructor(api: BranchIo);
    /**
     * Create app
     * @param params
     */
    create(params: any): Promise<any>;
    /**
     * Read app
     * @param params
     */
    read(params: any): Promise<any>;
    /**
     * Update app
     * @param params
     */
    update(params: any): Promise<any>;
    /**
     *
     * @param params
     * @param requiredProps
     */
    static resolveParams(params: any, requiredProps?: Array<any>): any;
}
