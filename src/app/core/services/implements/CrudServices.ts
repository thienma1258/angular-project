import { Service } from './Service';
import { CreateCommandHandler } from '../../command/impl/CreateCommandHandler';
import { UpdateCommandHandler } from '../../command/impl/UpdateCommandHandler';
import { ICrudServices } from '../ICrudServices';
import { BaseCreateModel } from '../../command/request/BaseCreateModel';
import { BaseUpdateModel } from '../../command/request/BaseUpdateModel';
import { BaseDeleteModel } from '../../command/request/BaseDeleteModel';
import { BaseResponseCommand } from '../../command/response/BaseReponseCommand';

export abstract class CrudServices<O extends Object,C extends BaseCreateModel,U extends BaseUpdateModel, D extends BaseDeleteModel,
                        R extends BaseResponseCommand<O>> extends Service  implements ICrudServices<O,C,U,D,R> {
    add(): BaseResponseCommand<O> {
        throw new Error("Method not implemented.");
    }
    update(): BaseResponseCommand<O> {
        throw new Error("Method not implemented.");
    }
    delete(): BaseResponseCommand<O> {
        throw new Error("Method not implemented.");
    }
   
    constructor(createCommandHandler:CreateCommandHandler<C,R>,
                updateCommandHandler:UpdateCommandHandler<U,R>){
        super();
    }
    abstract convertToCreateModel(): C;
    abstract convertToUpdateModel(): U;
    abstract convertToDeleteModel(): D;
    
}