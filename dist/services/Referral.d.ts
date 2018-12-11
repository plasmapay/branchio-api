import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';
/**
 * Referral
 */
export declare class Referral implements IBranchIoService {
    api: BranchIo;
    constructor(api: BranchIo);
}
