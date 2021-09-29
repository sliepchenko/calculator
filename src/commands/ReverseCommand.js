import {CommandAbstract} from './CommandAbstract';
import {StateDecorator} from '../decorators/StateDecorator';

/**
 * Command for reverse plus to minus and vice versa
 *
 * Command, Decorator, State
 */
@StateDecorator
export class ReverseCommand extends CommandAbstract {
    name = 'reverse';

    constructor(payload) {
        super(payload);
    }

    execute() {
        this.state.output = eval(this.state.output) * -1;
    }
}