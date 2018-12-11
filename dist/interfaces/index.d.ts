import { BranchIo } from '../index';
export interface IBranchIoConfig {
    branch_key: string;
    branch_secret: string;
}
export interface IBranchIoService {
    api: BranchIo;
}
