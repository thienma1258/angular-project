import { BaseRepone } from '../../model/BaseReponse';

export interface BaseResponseCommand<O> extends BaseRepone {
    object:O;
   
}