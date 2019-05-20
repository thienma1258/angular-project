import { ICommandHandler } from './ICommandHandler';
import { CreateCommandHandler } from './impl/CreateCommandHandler';
import { BaseResponseCommand } from './response/BaseReponseCommand';


export interface ICreateCommandHandler extends ICommandHandler<CreateCommandHandler,BaseResponseCommand>{


}