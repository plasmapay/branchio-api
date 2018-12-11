/**
 * BranchIoError
 */
export class BranchIoError extends Error {
  public code: number = 0;
  public errors: Array<any>;

  /**
   * Constructor
   * @param message
   * @param code
   * @param errors
   */
  constructor(message: string, code?: number, errors?: Array<any>) {
    super(message);
    this.code = code || 0;
    this.errors = errors || [];
  }
}
