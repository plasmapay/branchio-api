import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';

/**
 * Referral
 */
export class Referral implements IBranchIoService {

  public api: BranchIo;

  constructor(api: BranchIo) {
    this.api = api;
  }
}
