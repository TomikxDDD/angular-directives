import { Route, Routes } from '@angular/router';
import { PwValidation01Component } from './pw-validation-01/pw-validation-01.component';

type RouteRaw = {
  path: string;
  label: string;
  component: unknown;
};

export const routesRaw: RouteRaw[] = [
  {
    path: '01-password-validation',
    label: '01 - Password Validation',
    component: PwValidation01Component,
  },
];

export const routes: Routes = routesRaw.map((r: RouteRaw) => {
  return {
    path: r.path,
    component: r.component,
  } as Route;
});

// export const routes: Routes = [
//   { path: '01-password-validation', component: PwValidation01Component },
// ];
