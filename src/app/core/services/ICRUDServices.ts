import { IServices } from './IServices';
import { BaseCreateModel } from '../command/request/BaseCreateModel';
import { BaseUpdateModel } from '../command/request/BaseUpdateModel';
import { BaseDeleteModel } from '../command/request/BaseDeleteModel';
import { BaseResponseCommand } from '../command/response/BaseReponseCommand';
import { Observable } from 'rxjs';

export interface ICrudServices<O extends Object, C extends BaseCreateModel, U extends BaseUpdateModel,
    D extends BaseDeleteModel, R extends BaseResponseCommand<O>> extends IServices {
        add():Observable<BaseResponseCommand<O>>;
        update():Observable<BaseResponseCommand<O>>;
        delete():Observable<BaseResponseCommand<O>>;
}