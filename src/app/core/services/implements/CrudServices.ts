import { Service } from './Service';
import { CreateCommandHandler } from '../../command/impl/CreateCommandHandler';
import { UpdateCommandHandler } from '../../command/impl/UpdateCommandHandler';
import { HttpClient } from "@angular/common/http";
import { ICrudServices } from '../ICrudServices';
import { BaseCreateModel } from '../../command/request/BaseCreateModel';
import { BaseUpdateModel } from '../../command/request/BaseUpdateModel';
import { BaseDeleteModel } from '../../command/request/BaseDeleteModel';
import { BaseResponseCommand } from '../../command/response/BaseReponseCommand';
import { Observable } from 'rxjs'
import { tap, map } from "rxjs/operators";

export abstract class CrudServices<O extends Object, C extends BaseCreateModel, U extends BaseUpdateModel, D extends BaseDeleteModel,
    R extends BaseResponseCommand<O>> extends Service implements ICrudServices<O, C, U, D, R> {
    private postURL: string = 'https://jsonplaceholder.typicode.com/posts';

    add(): Observable<BaseResponseCommand<O>> {
        return this.http.post<BaseResponseCommand<O>>(this.postURL, this.convertToCreateModel).pipe(
            map((response)=>{
                return response as BaseResponseCommand<O>;
            })
        );
    }
    update(): Observable<BaseResponseCommand<O>> {
        throw new Error("Method not implemented.");
    }
    delete(): Observable<BaseResponseCommand<O>> {
        throw new Error("Method not implemented.");
    }

    constructor(private http: HttpClient, protected createCommandHandler: CreateCommandHandler<O,C, R>,
        protected updateCommandHandler: UpdateCommandHandler<O,U, R>) {
        super();
    }
    abstract convertToCreateModel(): C;
    abstract convertToUpdateModel(): U;
    abstract convertToDeleteModel(): D;

    

}