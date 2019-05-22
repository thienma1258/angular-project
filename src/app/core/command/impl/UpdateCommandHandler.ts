import { BaseUpdateModel } from '../request/BaseUpdateModel';
import { BaseResponseCommand } from '../response/BaseReponseCommand';
import { IUpdateCommandHandler } from '../IUpdateCommandHandler';

export class UpdateCommandHandler<O,U extends BaseUpdateModel,R extends BaseResponseCommand<O>> implements IUpdateCommandHandler<O,U,R>{
    execute(request: U): import("rxjs").Observable<R> {
        throw new Error("Method not implemented.");
    }
    
}