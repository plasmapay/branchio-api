import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';
/**
 * User
 */
export declare class User implements IBranchIoService {
    api: BranchIo;
    constructor(api: BranchIo);
}
