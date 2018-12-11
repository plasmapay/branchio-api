import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';

/**
 * User
 */
export class User implements IBranchIoService {

  public api: BranchIo;

  constructor(api: BranchIo) {
    this.api = api;
  }
}
