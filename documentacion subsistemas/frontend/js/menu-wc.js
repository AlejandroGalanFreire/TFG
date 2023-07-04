'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nba-analitics-fr documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-be9dc436c5b15eb5a3ea52bd111f21f52b3fce8d028bf030600aab7a9fe4b5fdc74f9eed4a0e1b30b0044422828c07de2842daa49fe27ef693e74c9c7477ed61"' : 'data-bs-target="#xs-components-links-module-AppModule-be9dc436c5b15eb5a3ea52bd111f21f52b3fce8d028bf030600aab7a9fe4b5fdc74f9eed4a0e1b30b0044422828c07de2842daa49fe27ef693e74c9c7477ed61"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-be9dc436c5b15eb5a3ea52bd111f21f52b3fce8d028bf030600aab7a9fe4b5fdc74f9eed4a0e1b30b0044422828c07de2842daa49fe27ef693e74c9c7477ed61"' :
                                            'id="xs-components-links-module-AppModule-be9dc436c5b15eb5a3ea52bd111f21f52b3fce8d028bf030600aab7a9fe4b5fdc74f9eed4a0e1b30b0044422828c07de2842daa49fe27ef693e74c9c7477ed61"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClasificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClasificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MatchsModule.html" data-type="entity-link" >MatchsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MatchsModule-df5b2394ece8d2101c778ae5a12338b3ca7dd6a4d8b2fa43009b5f5363c4637317eeccee596819b36f9d01e87d0bc1c5fa52f02110c7f59ce492356d146c2ada"' : 'data-bs-target="#xs-components-links-module-MatchsModule-df5b2394ece8d2101c778ae5a12338b3ca7dd6a4d8b2fa43009b5f5363c4637317eeccee596819b36f9d01e87d0bc1c5fa52f02110c7f59ce492356d146c2ada"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MatchsModule-df5b2394ece8d2101c778ae5a12338b3ca7dd6a4d8b2fa43009b5f5363c4637317eeccee596819b36f9d01e87d0bc1c5fa52f02110c7f59ce492356d146c2ada"' :
                                            'id="xs-components-links-module-MatchsModule-df5b2394ece8d2101c778ae5a12338b3ca7dd6a4d8b2fa43009b5f5363c4637317eeccee596819b36f9d01e87d0bc1c5fa52f02110c7f59ce492356d146c2ada"' }>
                                            <li class="link">
                                                <a href="components/MatchDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatchDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatchsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatchsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MatchsRoutingModule.html" data-type="entity-link" >MatchsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PlayersModule.html" data-type="entity-link" >PlayersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PlayersModule-6e7f04d5d07cd764fa098abc65ee10eb5355532536b424a5c84b337014c8763570988d3cacee6725404b9ab28665beeb1ec286fbacc050832fc110e7159751d8"' : 'data-bs-target="#xs-components-links-module-PlayersModule-6e7f04d5d07cd764fa098abc65ee10eb5355532536b424a5c84b337014c8763570988d3cacee6725404b9ab28665beeb1ec286fbacc050832fc110e7159751d8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlayersModule-6e7f04d5d07cd764fa098abc65ee10eb5355532536b424a5c84b337014c8763570988d3cacee6725404b9ab28665beeb1ec286fbacc050832fc110e7159751d8"' :
                                            'id="xs-components-links-module-PlayersModule-6e7f04d5d07cd764fa098abc65ee10eb5355532536b424a5c84b337014c8763570988d3cacee6725404b9ab28665beeb1ec286fbacc050832fc110e7159751d8"' }>
                                            <li class="link">
                                                <a href="components/ComparativePlayersDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComparativePlayersDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayerCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayerCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayerDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayerDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-PlayersModule-6e7f04d5d07cd764fa098abc65ee10eb5355532536b424a5c84b337014c8763570988d3cacee6725404b9ab28665beeb1ec286fbacc050832fc110e7159751d8"' : 'data-bs-target="#xs-pipes-links-module-PlayersModule-6e7f04d5d07cd764fa098abc65ee10eb5355532536b424a5c84b337014c8763570988d3cacee6725404b9ab28665beeb1ec286fbacc050832fc110e7159751d8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PlayersModule-6e7f04d5d07cd764fa098abc65ee10eb5355532536b424a5c84b337014c8763570988d3cacee6725404b9ab28665beeb1ec286fbacc050832fc110e7159751d8"' :
                                            'id="xs-pipes-links-module-PlayersModule-6e7f04d5d07cd764fa098abc65ee10eb5355532536b424a5c84b337014c8763570988d3cacee6725404b9ab28665beeb1ec286fbacc050832fc110e7159751d8"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPlayersPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPlayersPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlayersRoutingModule.html" data-type="entity-link" >PlayersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TeamsModule.html" data-type="entity-link" >TeamsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TeamsModule-683372270daf688a3af216bff6aa46d99ae7c12a4fa329ceaa71aa9038b9ac59e3cd2d4e5ccd9f130a7970fabcb58bff1dbffd670894e65002a9689ff282b030"' : 'data-bs-target="#xs-components-links-module-TeamsModule-683372270daf688a3af216bff6aa46d99ae7c12a4fa329ceaa71aa9038b9ac59e3cd2d4e5ccd9f130a7970fabcb58bff1dbffd670894e65002a9689ff282b030"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TeamsModule-683372270daf688a3af216bff6aa46d99ae7c12a4fa329ceaa71aa9038b9ac59e3cd2d4e5ccd9f130a7970fabcb58bff1dbffd670894e65002a9689ff282b030"' :
                                            'id="xs-components-links-module-TeamsModule-683372270daf688a3af216bff6aa46d99ae7c12a4fa329ceaa71aa9038b9ac59e3cd2d4e5ccd9f130a7970fabcb58bff1dbffd670894e65002a9689ff282b030"' }>
                                            <li class="link">
                                                <a href="components/ComparativeTeamsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComparativeTeamsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlantillaTeamComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlantillaTeamComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeamCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeamsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeamsDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamsDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-TeamsModule-683372270daf688a3af216bff6aa46d99ae7c12a4fa329ceaa71aa9038b9ac59e3cd2d4e5ccd9f130a7970fabcb58bff1dbffd670894e65002a9689ff282b030"' : 'data-bs-target="#xs-pipes-links-module-TeamsModule-683372270daf688a3af216bff6aa46d99ae7c12a4fa329ceaa71aa9038b9ac59e3cd2d4e5ccd9f130a7970fabcb58bff1dbffd670894e65002a9689ff282b030"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TeamsModule-683372270daf688a3af216bff6aa46d99ae7c12a4fa329ceaa71aa9038b9ac59e3cd2d4e5ccd9f130a7970fabcb58bff1dbffd670894e65002a9689ff282b030"' :
                                            'id="xs-pipes-links-module-TeamsModule-683372270daf688a3af216bff6aa46d99ae7c12a4fa329ceaa71aa9038b9ac59e3cd2d4e5ccd9f130a7970fabcb58bff1dbffd670894e65002a9689ff282b030"' }>
                                            <li class="link">
                                                <a href="pipes/FilterTeamByYearPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterTeamByYearPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterTeamsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterTeamsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeamsRoutingModule.html" data-type="entity-link" >TeamsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ClasificationRow.html" data-type="entity-link" >ClasificationRow</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameElem.html" data-type="entity-link" >GameElem</a>
                            </li>
                            <li class="link">
                                <a href="classes/League.html" data-type="entity-link" >League</a>
                            </li>
                            <li class="link">
                                <a href="classes/Player.html" data-type="entity-link" >Player</a>
                            </li>
                            <li class="link">
                                <a href="classes/TeamByYear.html" data-type="entity-link" >TeamByYear</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link" >HomeService</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});