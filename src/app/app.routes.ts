import { Route, Routes } from '@angular/router';
import { PwValidation01Component } from './pages/pw-validation-01/pw-validation-01.component';
import { Autofocus02Component } from './pages/autofocus-02/autofocus-02.component';

type RouteRaw = {
  path: string;
  label: string;
  component: unknown;
  title?: string;
};

export const routesRaw: RouteRaw[] = [
  {
    path: '01-password-validation',
    label: '01 - Password Validation',
    component: PwValidation01Component,
    title: '01 - Password Validation',
  },
  {
    path: '02-autofocus',
    label: '02 - Autofocus',
    component: Autofocus02Component,
    title: '02 - Autofocus',
  },
];

export const routes: Routes = routesRaw.map((r: RouteRaw) => {
  return {
    path: r.path,
    component: r.component,
    title: r.title,
  } as Route;
});
