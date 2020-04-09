import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class SecondApp {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Second App';
        config.map([{
            route: [ '/', 'second' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home'),
            nav: true,
            title: 'Home'
        }, {
            route: 'second/another',
            name: 'another',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../another/another'),
            nav: true,
            title: 'Another'
        }, {
            route: 'fetch-data',
            name: 'fetchdata',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../fetchdata/fetchdata'),
            nav: true,
            title: 'Fetch data'
        }]);

        this.router = router;
    }
}
