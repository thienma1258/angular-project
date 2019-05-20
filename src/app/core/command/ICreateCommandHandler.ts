import { ICommandHandler } from './ICommandHandler';
import { BaseResponseCommand } from './response/BaseReponseCommand';
import { BaseCreateModel } from './request/BaseCreateModel';


export interface ICreateCommandHandler<C extends BaseCreateModel,R extends BaseResponseCommand> extends ICommandHandler<C,R>{


}