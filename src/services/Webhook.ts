import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';

/**
 * Webhook
 */
export class Webhook implements IBranchIoService {

  public api: BranchIo;

  constructor(api: BranchIo) {
    this.api = api;
  }
}
