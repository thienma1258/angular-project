import { BaseCreateModel } from '../request/BaseCreateModel';
import { BaseResponseCommand } from '../response/BaseReponseCommand';
import { ICreateCommandHandler } from '../ICreateCommandHandler';

export class CreateCommandHandler <O,C extends BaseCreateModel,R extends BaseResponseCommand<O>> implements ICreateCommandHandler<O,C,R>{
    execute(request: C): import("rxjs").Observable<R> {
        throw new Error("Method not implemented.");
    }
  

}