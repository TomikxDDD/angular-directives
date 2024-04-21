import { Data, Route, Routes } from '@angular/router';
import { PwValidation01Component } from './pages/pw-validation-01/pw-validation-01.component';
import { Autofocus02Component } from './pages/autofocus-02/autofocus-02.component';
import { LazyLoadedImgComponent } from './pages/lazy-loaded-img-03/lazy-loaded-img.component';
import { DragDrop04Component } from './pages/drag-drop-04/drag-drop-04.component';
import { Ellipses05Component } from './pages/ellipses-05/ellipses-05.component';
import { ClickOutside06Component } from './pages/click-outside-06/click-outside-06.component';

type RouteRaw = {
  path: string;
  label: string;
  component: unknown;
  title?: string;
  data?: Data;
};

export const routesRaw: RouteRaw[] = [
  {
    path: '01-password-validation',
    label: '01 - Password Validation',
    component: PwValidation01Component,
  },
  {
    path: '02-autofocus',
    label: '02 - Autofocus',
    component: Autofocus02Component,
  },
  {
    path: '03-lazy-loaded-img',
    label: '03 - Lazy-loaded image',
    component: LazyLoadedImgComponent,
  },
  {
    path: '04-drag-drop',
    label: '04 - Drag&Drop component',
    component: DragDrop04Component,
  },
  {
    path: '05-ellipses',
    label: '05 - Ellipses component',
    component: Ellipses05Component,
  },
  {
    path: '06-click-outside',
    label: '06 - Click outside component',
    component: ClickOutside06Component,
  },
];

/**
 * Copies a 'label' property into 'title' and 'data.title' properties
 */
function copyLabelToTitle(route: RouteRaw): RouteRaw {
  const label = route.label;
  return { ...route, title: label, data: { title: label } };
}

export const routes: Routes = routesRaw.map((r: RouteRaw) => {
  return copyLabelToTitle(r) as Route;
});
