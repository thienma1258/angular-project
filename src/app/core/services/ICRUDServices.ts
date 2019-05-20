import { IServices } from './IServices';
import { BaseCreateModel } from '../command/request/BaseCreateModel';
import { BaseUpdateModel } from '../command/request/BaseUpdateModel';
import { BaseDeleteModel } from '../command/request/BaseDeleteModel';
import { BaseResponseCommand } from '../command/response/BaseReponseCommand';

export interface ICrudServices<O extends Object, C extends BaseCreateModel, U extends BaseUpdateModel,
    D extends BaseDeleteModel, R extends BaseResponseCommand<O>> extends IServices {
        add():BaseResponseCommand<O>;
        update():BaseResponseCommand<O>;
        delete():BaseResponseCommand<O>;

}