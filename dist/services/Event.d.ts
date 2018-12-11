import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';
/**
 * Event
 */
export declare class Event implements IBranchIoService {
    api: BranchIo;
    constructor(api: BranchIo);
}
