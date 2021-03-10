import React from 'react';
import Search from "./search";

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle">
                <i className="hamburger align-self-center"></i>
            </a>
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                    {/*<li className="nav-item dropdown">*/}
                    {/*    <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-toggle="dropdown">*/}
                    {/*        <div className="position-relative">*/}
                    {/*            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
                    {/*                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                    {/*                 strokeLinejoin="round" className="feather feather-message-circle align-middle">*/}
                    {/*                <path*/}
                    {/*                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>*/}
                    {/*            </svg>*/}
                    {/*            <span className="indicator">4</span>*/}
                    {/*        </div>*/}
                    {/*    </a>*/}
                    {/*    /!*<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"*!/*/}
                    {/*    /!*     aria-labelledby="messagesDropdown">*!/*/}
                    {/*    /!*    /!*<div className="dropdown-menu-header">*!/*!/*/}
                    {/*    /!*    /!*    <div className="position-relative">*!/*!/*/}
                    {/*    /!*    /!*        4 New Messages*!/*!/*/}
                    {/*    /!*    /!*    </div>*!/*!/*/}
                    {/*    /!*    /!*</div>*!/*!/*/}
                    {/*    /!*    /!*<div className="list-group">*!/*!/*/}
                    {/*    /!*    /!*    <a href="#" className="list-group-item">*!/*!/*/}
                    {/*    /!*    /!*        <div className="row no-gutters align-items-center">*!/*!/*/}
                    {/*    /!*    /!*            <div className="col-2">*!/*!/*/}
                    {/*    /!*    /!*                <img src="img/avatars/avatar-5.jpg"*!/*!/*/}
                    {/*    /!*    /!*                     className="avatar img-fluid rounded-circle" alt="Ashley Briggs" />*!/*!/*/}
                    {/*    /!*    /!*            </div>*!/*!/*/}
                    {/*    /!*    /!*            <div className="col-10 pl-2">*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-dark">Ashley Briggs</div>*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu*!/*!/*/}
                    {/*    /!*    /!*                    tortor.*!/*!/*/}
                    {/*    /!*    /!*                </div>*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-muted small mt-1">15m ago</div>*!/*!/*/}
                    {/*    /!*    /!*            </div>*!/*!/*/}
                    {/*    /!*    /!*        </div>*!/*!/*/}
                    {/*    /!*    /!*    </a>*!/*!/*/}
                    {/*    /!*    /!*    <a href="#" className="list-group-item">*!/*!/*/}
                    {/*    /!*    /!*        <div className="row no-gutters align-items-center">*!/*!/*/}
                    {/*    /!*    /!*            <div className="col-2">*!/*!/*/}
                    {/*    /!*    /!*                <img src="img/avatars/avatar-2.jpg"*!/*!/*/}
                    {/*    /!*    /!*                     className="avatar img-fluid rounded-circle" alt="Carl Jenkins" />*!/*!/*/}
                    {/*    /!*    /!*            </div>*!/*!/*/}
                    {/*    /!*    /!*            <div className="col-10 pl-2">*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-dark">Carl Jenkins</div>*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-muted small mt-1">Curabitur ligula sapien euismod*!/*!/*/}
                    {/*    /!*    /!*                    vitae.*!/*!/*/}
                    {/*    /!*    /!*                </div>*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-muted small mt-1">2h ago</div>*!/*!/*/}
                    {/*    /!*    /!*            </div>*!/*!/*/}
                    {/*    /!*    /!*        </div>*!/*!/*/}
                    {/*    /!*    /!*    </a>*!/*!/*/}
                    {/*    /!*    /!*    <a href="#" className="list-group-item">*!/*!/*/}
                    {/*    /!*    /!*        <div className="row no-gutters align-items-center">*!/*!/*/}
                    {/*    /!*    /!*            <div className="col-2">*!/*!/*/}
                    {/*    /!*    /!*                <img src="img/avatars/avatar-4.jpg"*!/*!/*/}
                    {/*    /!*    /!*                     className="avatar img-fluid rounded-circle" alt="Stacie Hall" />*!/*!/*/}
                    {/*    /!*    /!*            </div>*!/*!/*/}
                    {/*    /!*    /!*            <div className="col-10 pl-2">*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-dark">Stacie Hall</div>*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.*!/*!/*/}
                    {/*    /!*    /!*                </div>*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-muted small mt-1">4h ago</div>*!/*!/*/}
                    {/*    /!*    /!*            </div>*!/*!/*/}
                    {/*    /!*    /!*        </div>*!/*!/*/}
                    {/*    /!*    /!*    </a>*!/*!/*/}
                    {/*    /!*    /!*    <a href="#" className="list-group-item">*!/*!/*/}
                    {/*    /!*    /!*        <div className="row no-gutters align-items-center">*!/*!/*/}
                    {/*    /!*    /!*            <div className="col-2">*!/*!/*/}
                    {/*    /!*    /!*                <img src="img/avatars/avatar-3.jpg"*!/*!/*/}
                    {/*    /!*    /!*                     className="avatar img-fluid rounded-circle" alt="Bertha Martin" />*!/*!/*/}
                    {/*    /!*    /!*            </div>*!/*!/*/}
                    {/*    /!*    /!*            <div className="col-10 pl-2">*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-dark">Bertha Martin</div>*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed,*!/*!/*/}
                    {/*    /!*    /!*                    posuere ac, mattis non.*!/*!/*/}
                    {/*    /!*    /!*                </div>*!/*!/*/}
                    {/*    /!*    /!*                <div className="text-muted small mt-1">5h ago</div>*!/*!/*/}
                    {/*    /!*    /!*            </div>*!/*!/*/}
                    {/*    /!*    /!*        </div>*!/*!/*/}
                    {/*    /!*    /!*    </a>*!/*!/*/}
                    {/*    /!*    /!*</div>*!/*!/*/}
                    {/*    /!*    /!*<div className="dropdown-menu-footer">*!/*!/*/}
                    {/*    /!*    /!*    <a href="#" className="text-muted">Show all messages</a>*!/*!/*/}
                    {/*    /!*    /!*</div>*!/*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*</li>*/}
                    {/*<li className="nav-item dropdown">*/}
                    {/*    <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-toggle="dropdown">*/}
                    {/*        <div className="position-relative">*/}
                    {/*            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
                    {/*                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                    {/*                 strokeLinejoin="round" className="feather feather-bell-off align-middle">*/}
                    {/*                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>*/}
                    {/*                <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>*/}
                    {/*                <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>*/}
                    {/*                <path d="M18 8a6 6 0 0 0-9.33-5"></path>*/}
                    {/*                <line x1="1" y1="1" x2="23" y2="23"></line>*/}
                    {/*            </svg>*/}
                    {/*        </div>*/}
                    {/*    </a>*/}
                    {/*    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"*/}
                    {/*         aria-labelledby="alertsDropdown">*/}
                    {/*        <div className="dropdown-menu-header">*/}
                    {/*            4 New Notifications*/}
                    {/*        </div>*/}
                    {/*        <div className="list-group">*/}
                    {/*            <a href="#" className="list-group-item">*/}
                    {/*                <div className="row no-gutters align-items-center">*/}
                    {/*                    <div className="col-2">*/}
                    {/*                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                    {/*                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"*/}
                    {/*                             strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                             className="feather feather-alert-circle text-danger">*/}
                    {/*                            <circle cx="12" cy="12" r="10"></circle>*/}
                    {/*                            <line x1="12" y1="8" x2="12" y2="12"></line>*/}
                    {/*                            <line x1="12" y1="16" x2="12.01" y2="16"></line>*/}
                    {/*                        </svg>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-10">*/}
                    {/*                        <div className="text-dark">Update completed</div>*/}
                    {/*                        <div className="text-muted small mt-1">Restart server 12 to complete the*/}
                    {/*                            update.*/}
                    {/*                        </div>*/}
                    {/*                        <div className="text-muted small mt-1">2h ago</div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*            <a href="#" className="list-group-item">*/}
                    {/*                <div className="row no-gutters align-items-center">*/}
                    {/*                    <div className="col-2">*/}
                    {/*                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                    {/*                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"*/}
                    {/*                             strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                             className="feather feather-bell text-warning">*/}
                    {/*                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>*/}
                    {/*                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>*/}
                    {/*                        </svg>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-10">*/}
                    {/*                        <div className="text-dark">Lorem ipsum</div>*/}
                    {/*                        <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate*/}
                    {/*                            hendrerit et.*/}
                    {/*                        </div>*/}
                    {/*                        <div className="text-muted small mt-1">6h ago</div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*            <a href="#" className="list-group-item">*/}
                    {/*                <div className="row no-gutters align-items-center">*/}
                    {/*                    <div className="col-2">*/}
                    {/*                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                    {/*                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"*/}
                    {/*                             strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                             className="feather feather-home text-primary">*/}
                    {/*                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>*/}
                    {/*                            <polyline points="9 22 9 12 15 12 15 22"></polyline>*/}
                    {/*                        </svg>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-10">*/}
                    {/*                        <div className="text-dark">Login from 192.186.1.1</div>*/}
                    {/*                        <div className="text-muted small mt-1">8h ago</div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*            <a href="#" className="list-group-item">*/}
                    {/*                <div className="row no-gutters align-items-center">*/}
                    {/*                    <div className="col-2">*/}
                    {/*                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                    {/*                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"*/}
                    {/*                             strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                             className="feather feather-user-plus text-success">*/}
                    {/*                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>*/}
                    {/*                            <circle cx="8.5" cy="7" r="4"></circle>*/}
                    {/*                            <line x1="20" y1="8" x2="20" y2="14"></line>*/}
                    {/*                            <line x1="23" y1="11" x2="17" y2="11"></line>*/}
                    {/*                        </svg>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-10">*/}
                    {/*                        <div className="text-dark">New connection</div>*/}
                    {/*                        <div className="text-muted small mt-1">Anna accepted your request.</div>*/}
                    {/*                        <div className="text-muted small mt-1">12h ago</div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*        <div className="dropdown-menu-footer">*/}
                    {/*            <a href="#" className="text-muted">Show all notifications</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item dropdown">*/}
                    {/*    <a className="nav-flag dropdown-toggle" href="#" id="languageDropdown" data-toggle="dropdown">*/}
                    {/*        <img src="img/flags/us.png" alt="English" />*/}
                    {/*    </a>*/}
                    {/*    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="languageDropdown">*/}
                    {/*        <a className="dropdown-item" href="#">*/}
                    {/*            <img src="img/flags/us.png" alt="English" width="20" className="align-middle mr-1" />*/}
                    {/*            <span className="align-middle">English</span>*/}
                    {/*        </a>*/}
                    {/*        <a className="dropdown-item" href="#">*/}
                    {/*            <img src="img/flags/es.png" alt="Spanish" width="20" className="align-middle mr-1" />*/}
                    {/*            <span className="align-middle">Spanish</span>*/}
                    {/*        </a>*/}
                    {/*        <a className="dropdown-item" href="#">*/}
                    {/*            <img src="img/flags/de.png" alt="German" width="20" className="align-middle mr-1" />*/}
                    {/*            <span className="align-middle">German</span>*/}
                    {/*        </a>*/}
                    {/*        <a className="dropdown-item" href="#">*/}
                    {/*            <img src="img/flags/nl.png" alt="Dutch" width="20" className="align-middle mr-1" />*/}
                    {/*            <span className="align-middle">Dutch</span>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item dropdown">*/}
                    {/*    <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"*/}
                    {/*       data-toggle="dropdown">*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
                    {/*             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                    {/*             strokeLinejoin="round" className="feather feather-settings align-middle">*/}
                    {/*            <circle cx="12" cy="12" r="3"></circle>*/}
                    {/*            <path*/}
                    {/*                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>*/}
                    {/*        </svg>*/}
                    {/*    </a>*/}

                    {/*    <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"*/}
                    {/*       data-toggle="dropdown">*/}
                    {/*        <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded-circle mr-1"*/}
                    {/*             alt="Chris Wood" /> <span className="text-dark">Chris Wood</span>*/}
                    {/*    </a>*/}
                    {/*    <div className="dropdown-menu dropdown-menu-right">*/}
                    {/*        <a className="dropdown-item" href="pages-profile.html">*/}
                    {/*            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
                    {/*                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                    {/*                 strokeLinejoin="round" className="feather feather-user align-middle mr-1">*/}
                    {/*                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>*/}
                    {/*                <circle cx="12" cy="7" r="4"></circle>*/}
                    {/*            </svg>*/}
                    {/*            Profile</a>*/}
                    {/*        <a className="dropdown-item" href="#">*/}
                    {/*            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
                    {/*                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                    {/*                 strokeLinejoin="round" className="feather feather-pie-chart align-middle mr-1">*/}
                    {/*                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>*/}
                    {/*                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>*/}
                    {/*            </svg>*/}
                    {/*            Analytics</a>*/}
                    {/*        <div className="dropdown-divider"></div>*/}
                    {/*        <a className="dropdown-item" href="pages-settings.html">Settings &amp; Privacy</a>*/}
                    {/*        <a className="dropdown-item" href="#">Help</a>*/}
                    {/*        <a className="dropdown-item" href="#">Sign out</a>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </nav>

    )
}

export default Header;
