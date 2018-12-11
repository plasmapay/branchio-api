import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';
/**
 * Webhook
 */
export declare class Webhook implements IBranchIoService {
    api: BranchIo;
    constructor(api: BranchIo);
}
