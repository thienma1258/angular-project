import { ICommandHandler } from '../ICommandHandler';
import { BaseCreateModel } from '../request/BaseCreateModel';
import { BaseResponseCommand } from '../response/BaseReponseCommand';
import { ICreateCommandHandler } from '../ICreateCommandHandler';

export class CreateCommandHandler implements ICreateCommandHandler{
    validate(request: BaseCreateModel): boolean {
        throw new Error("Method not implemented.");
    }    
    execute(request: BaseCreateModel): BaseResponseCommand {
        throw new Error("Method not implemented.");
    }

}