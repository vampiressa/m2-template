import {TransitionService} from '@uirouter/core';
import {OauthService} from '@core/services/oauth.service';

export default function requiresAuthHook(transitionService: TransitionService) {

  const requiresAuthCriteria = {
    to: function (state) {
      return state.data && state.data.canActivate && state.data.canActivate.authGuard;
    }
  };

  const redirectToLogin = (transition) => {
    const authService: OauthService = transition.injector().get(OauthService);
    const $state = transition.router.stateService;
    if (!authService.user) {
      return $state.target('login', undefined);
    }
  };

  transitionService.onBefore(requiresAuthCriteria, redirectToLogin, {priority: 10});
}

