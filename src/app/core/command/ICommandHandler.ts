import { BaseRequest } from '../model/BaseRequest';
import { BaseRepone } from '../model/BaseReponse';
import { Observable } from 'rxjs';

export interface ICommandHandler <Request extends BaseRequest, Response extends BaseRepone>{
    execute(request:Request):Observable<Response>;
}