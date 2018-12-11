/**
 * BranchIoError
 */
export declare class BranchIoError extends Error {
    code: number;
    errors: Array<any>;
    /**
     * Constructor
     * @param message
     * @param code
     * @param errors
     */
    constructor(message: string, code?: number, errors?: Array<any>);
}
