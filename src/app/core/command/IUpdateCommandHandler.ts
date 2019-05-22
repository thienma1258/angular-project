import { BaseUpdateModel } from './request/BaseUpdateModel';
import { ICommandHandler } from './ICommandHandler';
import { BaseResponseCommand } from './response/BaseReponseCommand';

export interface IUpdateCommandHandler<O,C extends BaseUpdateModel, R extends BaseResponseCommand<O>> extends ICommandHandler<C,R>{


}