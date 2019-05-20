import { IServices } from '../services/IServices';

export class BaseContainer<Services extends IServices> {
  title = 'my-app';
  services:Services;
  constructor(services:Services){
      this.services=services;
  }
}
