import { ICommandHandler } from '../ICommandHandler';
import { BaseUpdateModel } from '../request/BaseUpdateModel';
import { BaseResponseCommand } from '../response/BaseReponseCommand';
import { IUpdateCommandHandler } from '../IUpdateCommandHandler';

export class UpdateCommandHandler implements IUpdateCommandHandler{
    validate(request: BaseUpdateModel): boolean {
        throw new Error("Method not implemented.");
    }
    execute(request: BaseUpdateModel): BaseResponseCommand {
        request
        throw new Error("Method not implemented.");
    }


}