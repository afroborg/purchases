import { RouteConfigSingleView } from 'vue-router/types/router';

export interface IRoute extends RouteConfigSingleView {
  inMenu?: boolean;
}