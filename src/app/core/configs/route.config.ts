import {UIRouter} from '@uirouter/angular';

export function RouteConfig(router: UIRouter) {

  router.urlService.rules.otherwise({state: 'root'});

}
