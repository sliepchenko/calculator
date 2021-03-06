import {StateManager} from '../services/StateManager';

/**
 * Decorator
 * @param target
 *
 * @pattern Decorator, State
 */
export function StateDecorator(target) {
    target.prototype.state = new StateManager();

    return target;
}