import {UIRouter} from '@uirouter/angular';
import requiresAuthHook from '@core/guards/auth.guard';

export function RouteConfig(router: UIRouter) {

  // peopleService.getAllPeople(); PRELOAD USER // TODO

  const transitionService = router.transitionService;

  router.urlService.rules.otherwise({state: 'root'});

  requiresAuthHook(transitionService);

}
