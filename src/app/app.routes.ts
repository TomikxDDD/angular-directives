import { Data, Route, Routes } from '@angular/router';
import { PwValidation01Component } from './pages/pw-validation-01/pw-validation-01.component';
import { Autofocus02Component } from './pages/autofocus-02/autofocus-02.component';
import { LazyLoadedImgComponent } from './pages/lazy-loaded-img-03/lazy-loaded-img.component';
import { DragDrop04Component } from './pages/drag-drop-04/drag-drop-04.component';
import { Ellipses05Component } from './pages/ellipses-05/ellipses-05.component';
import { ClickOutside06Component } from './pages/click-outside-06/click-outside-06.component';
import { Confirmation07Component } from './pages/confirmation-07/confirmation-07.component';
import { InfiniteScroll08Component } from './pages/infinite-scroll-08/infinite-scroll-08.component';
import { HighlightText09Component } from './pages/highlight-text-09/highlight-text-09.component';
import { Responsive10Component } from './pages/responsive-10/responsive-10.component';
import { HomeComponent } from './pages/home/home.component';
import { InputMask11Component } from './pages/input-mask-11/input-mask-11.component';
import { Tooltip12Component } from './pages/tooltip-12/tooltip-12.component';

type RouteRaw = {
  path: string;
  label: string;
  component: unknown;
  title?: string;
  data?: Data;
};

export const routesRaw: RouteRaw[] = [
  {
    path: '',
    label: 'Home',
    component: HomeComponent,
  },
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
  {
    path: '07-confirmation',
    label: '07 - Confirmation dialog component',
    component: Confirmation07Component,
  },
  {
    path: '08-infinite-scroll',
    label: '08 - Infinite scroll component',
    component: InfiniteScroll08Component,
  },
  {
    path: '09-highlight-text',
    label: '09 - Highlight text component',
    component: HighlightText09Component,
  },
  {
    path: '10-responsive',
    label: '10 - Responsive component',
    component: Responsive10Component,
  },
  {
    path: '11-input-mask',
    label: '11 - Input mask',
    component: InputMask11Component,
  },
  {
    path: '12-tooltip',
    label: '12 - Tooltip ',
    component: Tooltip12Component,
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
