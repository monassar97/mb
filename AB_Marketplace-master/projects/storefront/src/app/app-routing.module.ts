import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CarsSearchHomeComponent } from './modules/home-one/pages/cars-search-home/cars-search-home.component';
import { PropertyComponent } from './modules/blocks/property/property.component';
import { PropertySearchComponent } from './modules/blocks/property-search/property-search.component';
import { PeopertySearchHomeComponent } from './modules/home-one/pages/peoperty-search-home/peoperty-search-home.component';
import { QuotationComponent } from './modules/home-one/pages/quotation/quotation.component';

const routes: Routes = [
    /**
     * ROUTES_ONLY_FOR_DEMO / START
     */
    {
        path: 'home-two',
        component: RootComponent,
        data: {
            desktopHeader: 'classic/one',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () =>
                    import('./modules/home-two/home-two.module').then(
                        (m) => m.HomeTwoModule
                    ),
            },
        ],
    },
    // Desktop header variations.
    {
        path: 'header-spaceship-variant-one',
        component: RootComponent,
        data: { desktopHeader: 'spaceship/one' },
    },
    {
        path: 'header-spaceship-variant-two',
        component: RootComponent,
        data: { desktopHeader: 'spaceship/two' },
    },
    {
        path: 'header-spaceship-variant-three',
        component: RootComponent,
        data: { desktopHeader: 'spaceship/three' },
    },
    {
        path: 'header-classic-variant-one',
        component: RootComponent,
        data: { desktopHeader: 'classic/one' },
    },
    {
        path: 'header-classic-variant-two',
        component: RootComponent,
        data: { desktopHeader: 'classic/two' },
    },
    {
        path: 'header-classic-variant-three',
        component: RootComponent,
        data: { desktopHeader: 'classic/three' },
    },
    {
        path: 'header-classic-variant-four',
        component: RootComponent,
        data: { desktopHeader: 'classic/four' },
    },
    {
        path: 'header-classic-variant-five',
        component: RootComponent,
        data: { desktopHeader: 'classic/five' },
    },
    // Mobile header variations.
    {
        path: 'mobile-header-variant-one',
        component: RootComponent,
        data: { mobileHeader: 'one' },
    },
    {
        path: 'mobile-header-variant-two',
        component: RootComponent,
        data: { mobileHeader: 'two' },
    },
    /**
     * ROUTES_ONLY_FOR_DEMO / END
     */
    {
        path: '',
        component: RootComponent,
        data: {
            /**
             * Desktop header layout, one of:
             * - spaceship/{one, two, three}
             * - classic/{one, two, three, four, five}
             */
            desktopHeader: 'spaceship/one',
            /**
             * Mobile header layout, one of:
             * - one
             * - two
             */
            mobileHeader: 'one',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () =>
                    import('./modules/home-one/home-one.module').then(
                        (m) => m.HomeOneModule
                    ),
            },
            {
                path: 'cars',
                pathMatch: 'full',
                component: CarsSearchHomeComponent,
            },
            {
                path: 'quotation',
                pathMatch: 'full',
                component: QuotationComponent,
            },
            {
                path: 'property',
                pathMatch: 'full',
                component: PeopertySearchHomeComponent,
            },
            {
                path: 'shop',
                loadChildren: () =>
                    import('./modules/shop/shop.module').then(
                        (m) => m.ShopModule
                    ),
            },
            {
                path: 'blog',
                loadChildren: () =>
                    import('./modules/blog/blog.module').then(
                        (m) => m.BlogModule
                    ),
            },
            {
                path: 'account',
                loadChildren: () =>
                    import('./modules/account/account.module').then(
                        (m) => m.AccountModule
                    ),
            },
            {
                path: 'site',
                loadChildren: () =>
                    import('./modules/site/site.module').then(
                        (m) => m.SiteModule
                    ),
            },
            {
                path: '**',
                component: PageNotFoundComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'disabled',
            anchorScrolling: 'enabled',
            initialNavigation: 'enabled',
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
