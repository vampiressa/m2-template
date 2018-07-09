import {TransitionService} from '@uirouter/core';

export default function requiresAuthHook(transitionService: TransitionService) {

  const requiresAuthCriteria = {
    to: function (state) {
      return state.data && state.data.canActivate && state.data.canActivate.authGuard;
    }
  };

  const redirectToLogin = (transition) => {
    // const authService: AuthService = transition.injector().get(AuthService);
    const $state = transition.router.stateService;
    if (true) {
      // return $state.target('login', undefined);
    }
  };

  transitionService.onBefore(requiresAuthCriteria, redirectToLogin, {priority: 10});
}

