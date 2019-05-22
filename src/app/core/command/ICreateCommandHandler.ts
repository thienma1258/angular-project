import { ICommandHandler } from './ICommandHandler';
import { BaseResponseCommand } from './response/BaseReponseCommand';
import { BaseCreateModel } from './request/BaseCreateModel';


export interface ICreateCommandHandler<O,C extends BaseCreateModel,R extends BaseResponseCommand<O>> extends ICommandHandler<C,R>{


}