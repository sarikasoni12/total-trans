import React from 'react';

const NavBar = () => {
   return <nav id="sidebar" className="sidebar">
       <div className="sidebar-content js-simplebar" data-simplebar="init">
           <div className="simplebar-wrapper margin-0">
               <div className="simplebar-height-auto-observer-wrapper">
                   <div className="simplebar-height-auto-observer"></div>
               </div>
               <div className="simplebar-mask">
                   <div className="simplebar-offset right-bottom">
                       <div className="simplebar-content-wrapper overflow-scroll">
                           <div className="simplebar-content adding-0 ">
                               <a className="sidebar-brand" href="index.html">
                                   <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px"
                                        height="20px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20"
                                        xmlSpace="preserve">
            <path d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4
              C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"></path>
                                       <path d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"></path>
                                       <path d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"></path>
          </svg>

                                   <span className="align-middle mr-3">TTF</span>
                               </a>

                               <ul className="sidebar-nav">
                                   <li className="sidebar-item active">
                                       <a href="#dashboards" data-toggle="collapse" className="sidebar-link">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-sliders align-middle">
                                               <line x1="4" y1="21" x2="4" y2="14"></line>
                                               <line x1="4" y1="10" x2="4" y2="3"></line>
                                               <line x1="12" y1="21" x2="12" y2="12"></line>
                                               <line x1="12" y1="8" x2="12" y2="3"></line>
                                               <line x1="20" y1="21" x2="20" y2="16"></line>
                                               <line x1="20" y1="12" x2="20" y2="3"></line>
                                               <line x1="1" y1="14" x2="7" y2="14"></line>
                                               <line x1="9" y1="8" x2="15" y2="8"></line>
                                               <line x1="17" y1="16" x2="23" y2="16"></line>
                                           </svg>
                                           <span className="align-middle">Dashboards</span>
                                       </a>
                                       {/*<ul id="dashboards" className="sidebar-dropdown list-unstyled collapse show"*/}
                                       {/*    data-parent="#sidebar">*/}
                                       {/*    <li className="sidebar-item active"><a className="sidebar-link"*/}
                                       {/*                                           href="dashboard-default.html">Stats</a>*/}
                                       {/*    </li>*/}
                                       {/*</ul>*/}
                                   </li>
                                   <li className="sidebar-item">
                                       <a href="/trips"  className="sidebar-link">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-layout align-middle">
                                               <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                               <line x1="3" y1="9" x2="21" y2="9"></line>
                                               <line x1="9" y1="21" x2="9" y2="9"></line>
                                           </svg>
                                           <span className="align-middle">
                                                Trips</span>
                                       </a>
                                       {/*<ul id="pages" className="sidebar-dropdown list-unstyled collapse "*/}
                                       {/*    data-parent="#sidebar">*/}
                                       {/*    <li className="sidebar-item"><a className="sidebar-link"*/}
                                       {/*                                    href="pages-profile.html">Add New</a></li>*/}
                                       {/*    <li className="sidebar-item"><a className="sidebar-link"*/}
                                       {/*                                    href="pages-settings.html">List All</a></li>*/}
                                       {/*</ul>*/}
                                   </li>
                                   <li className="sidebar-item">
                                       <a href="#drivers" data-toggle="collapse" className="sidebar-link collapsed">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-users align-middle">
                                               <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                               <circle cx="9" cy="7" r="4"></circle>
                                               <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                               <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                           </svg>
                                           <span className="align-middle">
                                                Drivers</span>
                                           {/*<span className="badge badge-sidebar-secondary">Special</span>*/}
                                       </a>
                                       <ul id="drivers" className="sidebar-dropdown list-unstyled collapse "
                                           data-parent="#sidebar">
                                           <li className="sidebar-item"><a className="sidebar-link"
                                                                           href="/salary">Salary</a></li>
                                           <li className="sidebar-item"><a className="sidebar-link"
                                                                           href="/drivers">List All</a></li>
                                       </ul>
                                   </li>
                                   <li className="sidebar-item">
                                       <a href="#documentation" data-toggle="collapse"
                                          className="sidebar-link collapsed">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="bi bi-gear" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                               <path
                                                   d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                           </svg>
                                           <span className="align-middle">
                                                Settings</span>
                                       </a>
                                       <ul id="documentation" className="sidebar-dropdown list-unstyled collapse "
                                           data-parent="#sidebar">
                                           <li className="sidebar-item"><a className="sidebar-link"
                                                                           href="/settings">Company</a>
                                           </li>
                                           <li className="sidebar-item"><a className="sidebar-link"
                                                                           href="/units">Units</a>
                                           </li>
                                           <li className="sidebar-item"><a className="sidebar-link"
                                                                           href="/expenses">Expenses</a>
                                           </li>
                                           <li className="sidebar-item"><a className="sidebar-link"
                                                                           href="/fuel">Fuel</a>
                                           </li>
                                       </ul>
                                   </li>
                                   {/*<li className="sidebar-item">*/}
                                   {/*    <a href="/settings"  className="sidebar-link">*/}
                                   {/*        /!*<i className="bi bi-gear">*!/*/}
                                   {/*            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                                   {/*                 className="bi bi-gear" viewBox="0 0 16 16">*/}
                                   {/*                <path*/}
                                   {/*                    d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>*/}
                                   {/*                <path*/}
                                   {/*                    d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>*/}
                                   {/*            </svg>*/}
                                   {/*        /!*</i>*!/*/}
                                   {/*        <span className="align-middle">*/}
                                   {/*             Settings</span>*/}
                                   {/*    </a>*/}
                                   {/*</li>*/}

                                   {/*<li className="sidebar-header">*/}
                                   {/*    Settings*/}
                                   {/*</li>*/}
                                   {/*<li className="sidebar-item">*/}
                                   {/*    <a href="#ui" data-toggle="collapse" className="sidebar-link collapsed">*/}
                                   {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                                   {/*             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"*/}
                                   {/*             strokeLinecap="round" strokeLinejoin="round"*/}
                                   {/*             className="feather feather-grid align-middle">*/}
                                   {/*            <rect x="3" y="3" width="7" height="7"></rect>*/}
                                   {/*            <rect x="14" y="3" width="7" height="7"></rect>*/}
                                   {/*            <rect x="14" y="14" width="7" height="7"></rect>*/}
                                   {/*            <rect x="3" y="14" width="7" height="7"></rect>*/}
                                   {/*        </svg>*/}
                                   {/*        <span className="align-middle">UI Elements</span>*/}
                                   {/*    </a>*/}
                                   {/*    <ul id="ui" className="sidebar-dropdown list-unstyled collapse "*/}
                                   {/*        data-parent="#sidebar">*/}
                                   {/*        <li className="sidebar-item"><a className="sidebar-link"*/}
                                   {/*                                        href="ui-alerts.html">Alerts</a></li>*/}
                                   {/*        <li className="sidebar-item"><a className="sidebar-link"*/}
                                   {/*                                        href="ui-buttons.html">Buttons</a></li>*/}
                                   {/*        <li className="sidebar-item"><a className="sidebar-link"*/}
                                   {/*                                        href="ui-cards.html">Cards</a></li>*/}
                                   {/*        <li className="sidebar-item"><a className="sidebar-link"*/}
                                   {/*                                        href="ui-carousel.html">Carousel</a></li>*/}
                                   {/*        <li className="sidebar-item"><a className="sidebar-link"*/}
                                   {/*                                        href="ui-embed-video.html">Embed Video</a>*/}
                                   {/*        </li>*/}
                                   {/*        <li className="sidebar-item"><a className="sidebar-link"*/}
                                   {/*                                        href="ui-general.html">General <span*/}
                                   {/*            className="badge badge-sidebar-primary">10+</span></a></li>*/}
                                   {/*        <li className="sidebar-item"><a className="sidebar-link"*/}
                                   {/*                                        href="ui-grid.html">Grid</a></li>*/}
                                   {/*        <li className="sidebar-item"><a className="sidebar-link"*/}
                                   {/*                                        href="ui-modals.html">Modals</a></li>*/}
                                   {/*        <li className="sidebar-item"><a className="sidebar-link"*/}
                                   {/*                                        href="ui-tabs.html">Tabs</a></li>*/}
                                   {/*        <li className="sidebar-item"><a className="sidebar-link"*/}
                                   {/*                                        href="ui-typography.html">Typography</a></li>*/}
                                   {/*    </ul>*/}
                                   {/*</li>*/}
                               </ul>

                           </div>
                       </div>
                   </div>
               </div>
               {/*<div className="simplebar-placeholder" style="width: auto; height: 1254px;"></div>*/}
           </div>
           <div className="simplebar-track simplebar-horizontal hidden">
               <div className="simplebar-scrollbar none-display"></div>
           </div>
           <div className="simplebar-track simplebar-vertical hidden">
               <div className="simplebar-scrollbar extra-1"></div>
           </div>
       </div>
   </nav>
   ;
}

export default NavBar;
