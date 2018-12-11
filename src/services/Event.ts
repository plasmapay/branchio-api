import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';

/**
 * Event
 */
export class Event implements IBranchIoService {

  public api: BranchIo;

  constructor(api: BranchIo) {
    this.api = api;
  }
}
