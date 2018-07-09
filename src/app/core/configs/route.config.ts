import {UIRouter} from '@uirouter/angular';
import requiresAuthHook from '@core/guards/auth.guard';

export function RouteConfig(router: UIRouter) {

  const transitionService = router.transitionService;

  router.urlService.rules.otherwise({state: 'root'});

  requiresAuthHook(transitionService);

}
