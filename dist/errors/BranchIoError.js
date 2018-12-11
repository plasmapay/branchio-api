"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * BranchIoError
 */
class BranchIoError extends Error {
    /**
     * Constructor
     * @param message
     * @param code
     * @param errors
     */
    constructor(message, code, errors) {
        super(message);
        this.code = 0;
        this.code = code || 0;
        this.errors = errors || [];
    }
}
exports.BranchIoError = BranchIoError;
