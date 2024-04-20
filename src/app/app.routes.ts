import { Route, Routes } from '@angular/router';
import { PwValidation01Component } from './pages/pw-validation-01/pw-validation-01.component';
import { Autofocus02Component } from './pages/autofocus-02/autofocus-02.component';
import { LazyLoadedImgComponent } from './pages/lazy-loaded-img-03/lazy-loaded-img.component';
import { DragDrop04Component } from './pages/drag-drop-04/drag-drop-04.component';
import { Ellipses05Component } from './pages/ellipses-05/ellipses-05.component';

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
  {
    path: '03-lazy-loaded-img',
    label: '03 - Lazy-loaded image',
    component: LazyLoadedImgComponent,
    title: '03 - Lazy-loaded image',
  },
  {
    path: '04-drag-drop',
    label: '04 - Drag&Drop component',
    component: DragDrop04Component,
    title: '04 - Drag&Drop component',
  },
  {
    path: '05-ellipses',
    label: '05 - Ellipses component',
    component: Ellipses05Component,
    title: '05 - Ellipses component',
  },
];

export const routes: Routes = routesRaw.map((r: RouteRaw) => {
  return {
    path: r.path,
    component: r.component,
    title: r.title,
  } as Route;
});
