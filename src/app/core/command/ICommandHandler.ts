import { BaseRequest } from '../model/BaseRequest';
import { BaseRepone } from '../model/BaseReponse';

export interface ICommandHandler <IRequest extends BaseRequest, IResponse extends BaseRepone>{
    validate(request:IRequest):boolean;
    execute(request:IRequest):IResponse;
}