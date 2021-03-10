import React from 'react';

const Dashboard = () => {
    return (
        <main className="content">
            <div className="container-fluid p-0">

                <div className="row mb-2 mb-xl-3">
                    <div className="col-auto d-none d-sm-block">
                        <h3>Dashboard</h3>
                    </div>

                    <div className="col-auto ml-auto text-right mt-n1">
                                <span className="dropdown mr-2">
          <button className="btn btn-light bg-white shadow-sm dropdown-toggle" id="day" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="feather feather-calendar align-middle mt-n1"><rect x="3" y="4" width="18" height="18" rx="2"
                                                                               ry="2"></rect><line x1="16" y1="2" x2="16"
                                                                                                   y2="6"></line><line
                x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> Today
          </button>
          <div className="dropdown-menu" aria-labelledby="day">
            <h6 className="dropdown-header">Settings</h6>
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </span>

                        <button className="btn btn-primary shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="feather feather-filter align-middle">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                            </svg>
                        </button>
                        <button className="btn btn-primary shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="feather feather-refresh-cw align-middle">
                                <polyline points="23 4 23 10 17 10"></polyline>
                                <polyline points="1 20 1 14 7 14"></polyline>
                                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-xxl d-flex">
                        <div className="card illustration flex-fill">
                            <div className="card-body p-0 d-flex flex-fill">
                                <div className="row no-gutters w-100">
                                    <div className="col-6">
                                        <div className="illustration-text p-3 m-1">
                                            <h4 className="illustration-text">Welcome Back, Chris!</h4>
                                            <p className="mb-0">AppStack Dashboard</p>
                                        </div>
                                    </div>
                                    <div className="col-6 align-self-end text-right">
                                        <img src="img/illustrations/customer-support.png" alt="Customer Support"
                                             className="img-fluid illustration-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xxl d-flex">
                        <div className="card flex-fill">
                            <div className="card-body py-4">
                                <div className="media">
                                    <div className="media-body">
                                        <h3 className="mb-2">$ 24.300</h3>
                                        <p className="mb-2">Total Earnings</p>
                                        <div className="mb-0">
                                                <span className="badge badge-soft-success mr-2"> <i
                                                    className="mdi mdi-arrow-bottom-right"></i> +5.35% </span>
                                            <span className="text-muted">Since last week</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-block ml-3">
                                        <div className="stat">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-dollar-sign align-middle text-success">
                                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xxl d-flex">
                        <div className="card flex-fill">
                            <div className="card-body py-4">
                                <div className="media">
                                    <div className="media-body">
                                        <h3 className="mb-2">43</h3>
                                        <p className="mb-2">Pending Orders</p>
                                        <div className="mb-0">
                                                <span className="badge badge-soft-danger mr-2"> <i
                                                    className="mdi mdi-arrow-bottom-right"></i> -4.25% </span>
                                            <span className="text-muted">Since last week</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-block ml-3">
                                        <div className="stat">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-shopping-bag align-middle text-danger">
                                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xxl d-flex">
                        <div className="card flex-fill">
                            <div className="card-body py-4">
                                <div className="media">
                                    <div className="media-body">
                                        <h3 className="mb-2">$ 18.700</h3>
                                        <p className="mb-2">Total Revenue</p>
                                        <div className="mb-0">
                                                <span className="badge badge-soft-success mr-2"> <i
                                                    className="mdi mdi-arrow-bottom-right"></i> +8.65% </span>
                                            <span className="text-muted">Since last week</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-block ml-3">
                                        <div className="stat">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-dollar-sign align-middle text-info">
                                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="row">*/}
                {/*    <div className="col-12 col-lg-8 d-flex">*/}
                {/*        <div className="card flex-fill w-100">*/}
                {/*            <div className="card-header">*/}
                {/*                <div className="card-actions float-right">*/}
                {/*                    <div className="dropdown show">*/}
                {/*                        <a href="#" data-toggle="dropdown" data-display="static">*/}
                {/*                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                {/*                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"*/}
                {/*                                 strokeLinecap="round" strokeLinejoin="round"*/}
                {/*                                 className="feather feather-more-horizontal align-middle">*/}
                {/*                                <circle cx="12" cy="12" r="1"></circle>*/}
                {/*                                <circle cx="19" cy="12" r="1"></circle>*/}
                {/*                                <circle cx="5" cy="12" r="1"></circle>*/}
                {/*                            </svg>*/}
                {/*                        </a>*/}

                {/*                        <div className="dropdown-menu dropdown-menu-right">*/}
                {/*                            <a className="dropdown-item" href="#">Action</a>*/}
                {/*                            <a className="dropdown-item" href="#">Another action</a>*/}
                {/*                            <a className="dropdown-item" href="#">Something else here</a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <h5 className="card-title mb-0">Sales / Revenue</h5>*/}
                {/*            </div>*/}
                {/*            <div className="card-body d-flex w-100">*/}
                {/*                <div className="align-self-center chart chart-lg">*/}
                {/*                    <div className="chartjs-size-monitor">*/}
                {/*                        <div className="chartjs-size-monitor-expand">*/}
                {/*                            <div className=""></div>*/}
                {/*                        </div>*/}
                {/*                        <div className="chartjs-size-monitor-shrink">*/}
                {/*                            <div className=""></div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-12 col-lg-4 d-flex">*/}
                {/*        <div className="card flex-fill w-100">*/}
                {/*            <div className="card-header">*/}
                {/*                <span className="badge badge-info float-right">Today</span>*/}
                {/*                <h5 className="card-title mb-0">Daily feed</h5>*/}
                {/*            </div>*/}
                {/*            <div className="card-body">*/}
                {/*                <div className="media">*/}
                {/*                    <img src="img/avatars/avatar-5.jpg" width="36" height="36"*/}
                {/*                         className="rounded-circle mr-2" alt="Ashley Briggs" />*/}
                {/*                    <div className="media-body">*/}
                {/*                        <small className="float-right text-navy">5m ago</small>*/}
                {/*                        <strong>Ashley Briggs</strong> started following <strong>Stacie*/}
                {/*                        Hall</strong><br />*/}
                {/*                        <small className="text-muted">Today 7:51 pm</small><br />*/}

                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <hr/>*/}
                {/*                <div className="media">*/}
                {/*                    <img src="img/avatars/avatar.jpg" width="36" height="36"*/}
                {/*                         className="rounded-circle mr-2" alt="Chris Wood"/>*/}
                {/*                    <div className="media-body">*/}
                {/*                        <small className="float-right text-navy">30m ago</small>*/}
                {/*                        <strong>Chris Wood</strong> posted something on <strong>Stacie*/}
                {/*                        Hall</strong>'s timeline<br/>*/}
                {/*                        <small className="text-muted">Today 7:21 pm</small>*/}

                {/*                        <div className="border text-sm text-muted p-2 mt-1">*/}
                {/*                            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem*/}
                {/*                            quam semper libero, sit amet adipiscing...*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <hr/>*/}
                {/*                <div className="media">*/}
                {/*                    <img src="img/avatars/avatar-4.jpg" width="36" height="36"*/}
                {/*                         className="rounded-circle mr-2" alt="Stacie Hall"/>*/}
                {/*                    <div className="media-body">*/}
                {/*                        <small className="float-right text-navy">1h ago</small>*/}
                {/*                        <strong>Stacie Hall</strong> posted a new blog<br/>*/}

                {/*                        <small className="text-muted">Today 6:35 pm</small>*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <hr/>*/}
                {/*                <a href="#" className="btn btn-primary btn-block">Load more</a>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*    <div className="col-12 col-lg-6 col-xl-4 d-flex">*/}
                {/*        <div className="card flex-fill">*/}
                {/*            <div className="card-header">*/}
                {/*                <div className="card-actions float-right">*/}
                {/*                    <div className="dropdown show">*/}
                {/*                        <a href="#" data-toggle="dropdown" data-display="static">*/}
                {/*                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                {/*                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"*/}
                {/*                                 strokeLinecap="round" strokeLinejoin="round"*/}
                {/*                                 className="feather feather-more-horizontal align-middle">*/}
                {/*                                <circle cx="12" cy="12" r="1"></circle>*/}
                {/*                                <circle cx="19" cy="12" r="1"></circle>*/}
                {/*                                <circle cx="5" cy="12" r="1"></circle>*/}
                {/*                            </svg>*/}
                {/*                        </a>*/}

                {/*                        <div className="dropdown-menu dropdown-menu-right">*/}
                {/*                            <a className="dropdown-item" href="#">Action</a>*/}
                {/*                            <a className="dropdown-item" href="#">Another action</a>*/}
                {/*                            <a className="dropdown-item" href="#">Something else here</a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <h5 className="card-title mb-0">Calendar</h5>*/}
                {/*            </div>*/}
                {/*            <div className="card-body d-flex">*/}
                {/*                <div className="align-self-center w-100">*/}
                {/*                    <div className="chart">*/}
                {/*                        <div id="datetimepicker-dashboard">*/}
                {/*                            <div className="bootstrap-datetimepicker-widget usetwentyfour">*/}
                {/*                                <ul className="list-unstyled">*/}
                {/*                                    <li className="show">*/}
                {/*                                        <div className="datepicker">*/}
                {/*                                            <div className="datepicker-days">*/}
                {/*                                                <table className="table table-sm">*/}
                {/*                                                    <thead>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <th className="prev" data-action="previous">*/}
                {/*                                                                <span className="fas fa-chevron-left"*/}
                {/*                                                                      title="Previous Month"></span></th>*/}
                {/*                                                        <th className="picker-switch"*/}
                {/*                                                            data-action="pickerSwitch" colSpan="5"*/}
                {/*                                                            title="Select Month">March 2021*/}
                {/*                                                        </th>*/}
                {/*                                                        <th className="next" data-action="next"><span*/}
                {/*                                                            className="fas fa-chevron-right"*/}
                {/*                                                            title="Next Month"></span></th>*/}
                {/*                                                    </tr>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <th className="dow">Su</th>*/}
                {/*                                                        <th className="dow">Mo</th>*/}
                {/*                                                        <th className="dow">Tu</th>*/}
                {/*                                                        <th className="dow">We</th>*/}
                {/*                                                        <th className="dow">Th</th>*/}
                {/*                                                        <th className="dow">Fr</th>*/}
                {/*                                                        <th className="dow">Sa</th>*/}
                {/*                                                    </tr>*/}
                {/*                                                    </thead>*/}
                {/*                                                    <tbody>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="02/28/2021"*/}
                {/*                                                            className="day old weekend">28*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/01/2021" className="day">1*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/02/2021" className="day">2*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/03/2021" className="day">3*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/04/2021" className="day">4*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/05/2021" className="day">5*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/06/2021"*/}
                {/*                                                            className="day weekend">6*/}
                {/*                                                        </td>*/}
                {/*                                                    </tr>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/07/2021"*/}
                {/*                                                            className="day weekend">7*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/08/2021"*/}
                {/*                                                            className="day active today">8*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/09/2021" className="day">9*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/10/2021" className="day">10*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/11/2021" className="day">11*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/12/2021" className="day">12*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/13/2021"*/}
                {/*                                                            className="day weekend">13*/}
                {/*                                                        </td>*/}
                {/*                                                    </tr>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/14/2021"*/}
                {/*                                                            className="day weekend">14*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/15/2021" className="day">15*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/16/2021" className="day">16*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/17/2021" className="day">17*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/18/2021" className="day">18*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/19/2021" className="day">19*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/20/2021"*/}
                {/*                                                            className="day weekend">20*/}
                {/*                                                        </td>*/}
                {/*                                                    </tr>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/21/2021"*/}
                {/*                                                            className="day weekend">21*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/22/2021" className="day">22*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/23/2021" className="day">23*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/24/2021" className="day">24*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/25/2021" className="day">25*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/26/2021" className="day">26*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/27/2021"*/}
                {/*                                                            className="day weekend">27*/}
                {/*                                                        </td>*/}
                {/*                                                    </tr>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/28/2021"*/}
                {/*                                                            className="day weekend">28*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/29/2021" className="day">29*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/30/2021" className="day">30*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="03/31/2021" className="day">31*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="04/01/2021" className="day new">1*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="04/02/2021" className="day new">2*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="04/03/2021"*/}
                {/*                                                            className="day new weekend">3*/}
                {/*                                                        </td>*/}
                {/*                                                    </tr>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="04/04/2021"*/}
                {/*                                                            className="day new weekend">4*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="04/05/2021" className="day new">5*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="04/06/2021" className="day new">6*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="04/07/2021" className="day new">7*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="04/08/2021" className="day new">8*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="04/09/2021" className="day new">9*/}
                {/*                                                        </td>*/}
                {/*                                                        <td data-action="selectDay"*/}
                {/*                                                            data-day="04/10/2021"*/}
                {/*                                                            className="day new weekend">10*/}
                {/*                                                        </td>*/}
                {/*                                                    </tr>*/}
                {/*                                                    </tbody>*/}
                {/*                                                </table>*/}
                {/*                                            </div>*/}
                {/*                                            <div className="datepicker-months">*/}
                {/*                                                <table className="table-condensed">*/}
                {/*                                                    <thead>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <th className="prev" data-action="previous">*/}
                {/*                                                                <span className="fas fa-chevron-left"*/}
                {/*                                                                      title="Previous Year"></span></th>*/}
                {/*                                                        <th className="picker-switch"*/}
                {/*                                                            data-action="pickerSwitch" colSpan="5"*/}
                {/*                                                            title="Select Year">2021*/}
                {/*                                                        </th>*/}
                {/*                                                        <th className="next" data-action="next"><span*/}
                {/*                                                            className="fas fa-chevron-right"*/}
                {/*                                                            title="Next Year"></span></th>*/}
                {/*                                                    </tr>*/}
                {/*                                                    </thead>*/}
                {/*                                                    <tbody>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <td colSpan="7"><span data-action="selectMonth"*/}
                {/*                                                                              className="month">Jan</span><span*/}
                {/*                                                            data-action="selectMonth"*/}
                {/*                                                            className="month">Feb</span><span*/}
                {/*                                                            data-action="selectMonth"*/}
                {/*                                                            className="month active">Mar</span><span*/}
                {/*                                                            data-action="selectMonth"*/}
                {/*                                                            className="month">Apr</span><span*/}
                {/*                                                            data-action="selectMonth"*/}
                {/*                                                            className="month">May</span><span*/}
                {/*                                                            data-action="selectMonth"*/}
                {/*                                                            className="month">Jun</span><span*/}
                {/*                                                            data-action="selectMonth"*/}
                {/*                                                            className="month">Jul</span><span*/}
                {/*                                                            data-action="selectMonth"*/}
                {/*                                                            className="month">Aug</span><span*/}
                {/*                                                            data-action="selectMonth"*/}
                {/*                                                            className="month">Sep</span><span*/}
                {/*                                                            data-action="selectMonth"*/}
                {/*                                                            className="month">Oct</span><span*/}
                {/*                                                            data-action="selectMonth"*/}
                {/*                                                            className="month">Nov</span><span*/}
                {/*                                                            data-action="selectMonth"*/}
                {/*                                                            className="month">Dec</span></td>*/}
                {/*                                                    </tr>*/}
                {/*                                                    </tbody>*/}
                {/*                                                </table>*/}
                {/*                                            </div>*/}
                {/*                                            <div className="datepicker-years">*/}
                {/*                                                <table className="table-condensed">*/}
                {/*                                                    <thead>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <th className="prev" data-action="previous">*/}
                {/*                                                                <span className="fas fa-chevron-left"*/}
                {/*                                                                      title="Previous Decade"></span></th>*/}
                {/*                                                        <th className="picker-switch"*/}
                {/*                                                            data-action="pickerSwitch" colSpan="5"*/}
                {/*                                                            title="Select Decade">2020-2029*/}
                {/*                                                        </th>*/}
                {/*                                                        <th className="next" data-action="next"><span*/}
                {/*                                                            className="fas fa-chevron-right"*/}
                {/*                                                            title="Next Decade"></span></th>*/}
                {/*                                                    </tr>*/}
                {/*                                                    </thead>*/}
                {/*                                                    <tbody>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <td colSpan="7"><span data-action="selectYear"*/}
                {/*                                                                              className="year old">2019</span><span*/}
                {/*                                                            data-action="selectYear"*/}
                {/*                                                            className="year">2020</span><span*/}
                {/*                                                            data-action="selectYear"*/}
                {/*                                                            className="year active">2021</span><span*/}
                {/*                                                            data-action="selectYear"*/}
                {/*                                                            className="year">2022</span><span*/}
                {/*                                                            data-action="selectYear"*/}
                {/*                                                            className="year">2023</span><span*/}
                {/*                                                            data-action="selectYear"*/}
                {/*                                                            className="year">2024</span><span*/}
                {/*                                                            data-action="selectYear"*/}
                {/*                                                            className="year">2025</span><span*/}
                {/*                                                            data-action="selectYear"*/}
                {/*                                                            className="year">2026</span><span*/}
                {/*                                                            data-action="selectYear"*/}
                {/*                                                            className="year">2027</span><span*/}
                {/*                                                            data-action="selectYear"*/}
                {/*                                                            className="year">2028</span><span*/}
                {/*                                                            data-action="selectYear"*/}
                {/*                                                            className="year">2029</span><span*/}
                {/*                                                            data-action="selectYear"*/}
                {/*                                                            className="year old">2030</span></td>*/}
                {/*                                                    </tr>*/}
                {/*                                                    </tbody>*/}
                {/*                                                </table>*/}
                {/*                                            </div>*/}
                {/*                                            <div className="datepicker-decades">*/}
                {/*                                                <table className="table-condensed">*/}
                {/*                                                    <thead>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <th className="prev" data-action="previous">*/}
                {/*                                                                <span className="fas fa-chevron-left"*/}
                {/*                                                                      title="Previous Century"></span></th>*/}
                {/*                                                        <th className="picker-switch"*/}
                {/*                                                            data-action="pickerSwitch"*/}
                {/*                                                            colSpan="5">2000-2090*/}
                {/*                                                        </th>*/}
                {/*                                                        <th className="next" data-action="next"><span*/}
                {/*                                                            className="fas fa-chevron-right"*/}
                {/*                                                            title="Next Century"></span></th>*/}
                {/*                                                    </tr>*/}
                {/*                                                    </thead>*/}
                {/*                                                    <tbody>*/}
                {/*                                                    <tr>*/}
                {/*                                                        <td colSpan="7"><span data-action="selectDecade"*/}
                {/*                                                                              className="decade old"*/}
                {/*                                                                              data-selection="2006">1990</span><span*/}
                {/*                                                            data-action="selectDecade"*/}
                {/*                                                            className="decade"*/}
                {/*                                                            data-selection="2006">2000</span><span*/}
                {/*                                                            data-action="selectDecade"*/}
                {/*                                                            className="decade active"*/}
                {/*                                                            data-selection="2016">2010</span><span*/}
                {/*                                                            data-action="selectDecade"*/}
                {/*                                                            className="decade active"*/}
                {/*                                                            data-selection="2026">2020</span><span*/}
                {/*                                                            data-action="selectDecade"*/}
                {/*                                                            className="decade"*/}
                {/*                                                            data-selection="2036">2030</span><span*/}
                {/*                                                            data-action="selectDecade"*/}
                {/*                                                            className="decade"*/}
                {/*                                                            data-selection="2046">2040</span><span*/}
                {/*                                                            data-action="selectDecade"*/}
                {/*                                                            className="decade"*/}
                {/*                                                            data-selection="2056">2050</span><span*/}
                {/*                                                            data-action="selectDecade"*/}
                {/*                                                            className="decade"*/}
                {/*                                                            data-selection="2066">2060</span><span*/}
                {/*                                                            data-action="selectDecade"*/}
                {/*                                                            className="decade"*/}
                {/*                                                            data-selection="2076">2070</span><span*/}
                {/*                                                            data-action="selectDecade"*/}
                {/*                                                            className="decade"*/}
                {/*                                                            data-selection="2086">2080</span><span*/}
                {/*                                                            data-action="selectDecade"*/}
                {/*                                                            className="decade"*/}
                {/*                                                            data-selection="2096">2090</span><span*/}
                {/*                                                            data-action="selectDecade"*/}
                {/*                                                            className="decade old"*/}
                {/*                                                            data-selection="2106">2100</span></td>*/}
                {/*                                                    </tr>*/}
                {/*                                                    </tbody>*/}
                {/*                                                </table>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                    </li>*/}
                {/*                                    <li className="picker-switch accordion-toggle"></li>*/}
                {/*                                </ul>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-12 col-xl-4 d-none d-xl-flex">*/}
                {/*        <div className="card flex-fill w-100">*/}
                {/*            <div className="card-header">*/}
                {/*                <div className="card-actions float-right">*/}
                {/*                    <div className="dropdown show">*/}
                {/*                        <a href="#" data-toggle="dropdown" data-display="static">*/}
                {/*                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                {/*                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"*/}
                {/*                                 strokeLinecap="round" strokeLinejoin="round"*/}
                {/*                                 className="feather feather-more-horizontal align-middle">*/}
                {/*                                <circle cx="12" cy="12" r="1"></circle>*/}
                {/*                                <circle cx="19" cy="12" r="1"></circle>*/}
                {/*                                <circle cx="5" cy="12" r="1"></circle>*/}
                {/*                            </svg>*/}
                {/*                        </a>*/}

                {/*                        <div className="dropdown-menu dropdown-menu-right">*/}
                {/*                            <a className="dropdown-item" href="#">Action</a>*/}
                {/*                            <a className="dropdown-item" href="#">Another action</a>*/}
                {/*                            <a className="dropdown-item" href="#">Something else here</a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <h5 className="card-title mb-0">Weekly sales</h5>*/}
                {/*            </div>*/}
                {/*            <div className="card-body d-flex">*/}
                {/*                <div className="align-self-center w-100">*/}
                {/*                    <div className="py-3">*/}
                {/*                        <div className="chart chart-xs">*/}
                {/*                            <div className="chartjs-size-monitor">*/}
                {/*                                <div className="chartjs-size-monitor-expand">*/}
                {/*                                    <div className=""></div>*/}
                {/*                                </div>*/}
                {/*                                <div className="chartjs-size-monitor-shrink">*/}
                {/*                                    <div className=""></div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}

                {/*                    <table className="table mb-0">*/}
                {/*                        <thead>*/}
                {/*                        <tr>*/}
                {/*                            <th>Source</th>*/}
                {/*                            <th className="text-right">Revenue</th>*/}
                {/*                            <th className="text-right">Value</th>*/}
                {/*                        </tr>*/}
                {/*                        </thead>*/}
                {/*                        <tbody>*/}
                {/*                        <tr>*/}
                {/*                            <td><i className="fas fa-square-full text-primary"></i> Direct</td>*/}
                {/*                            <td className="text-right">$ 2602</td>*/}
                {/*                            <td className="text-right text-success">+43%</td>*/}
                {/*                        </tr>*/}
                {/*                        <tr>*/}
                {/*                            <td><i className="fas fa-square-full text-warning"></i> Affiliate</td>*/}
                {/*                            <td className="text-right">$ 1253</td>*/}
                {/*                            <td className="text-right text-success">+13%</td>*/}
                {/*                        </tr>*/}
                {/*                        <tr>*/}
                {/*                            <td><i className="fas fa-square-full text-danger"></i> E-mail</td>*/}
                {/*                            <td className="text-right">$ 541</td>*/}
                {/*                            <td className="text-right text-success">+24%</td>*/}
                {/*                        </tr>*/}
                {/*                        <tr>*/}
                {/*                            <td><i className="fas fa-square-full text-dark"></i> Other</td>*/}
                {/*                            <td className="text-right">$ 1465</td>*/}
                {/*                            <td className="text-right text-success">+11%</td>*/}
                {/*                        </tr>*/}
                {/*                        </tbody>*/}
                {/*                    </table>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-12 col-lg-6 col-xl-4 d-flex">*/}
                {/*        <div className="card flex-fill w-100">*/}
                {/*            <div className="card-header">*/}
                {/*                <div className="card-actions float-right">*/}
                {/*                    <div className="dropdown show">*/}
                {/*                        <a href="#" data-toggle="dropdown" data-display="static">*/}
                {/*                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                {/*                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"*/}
                {/*                                 strokeLinecap="round" strokeLinejoin="round"*/}
                {/*                                 className="feather feather-more-horizontal align-middle">*/}
                {/*                                <circle cx="12" cy="12" r="1"></circle>*/}
                {/*                                <circle cx="19" cy="12" r="1"></circle>*/}
                {/*                                <circle cx="5" cy="12" r="1"></circle>*/}
                {/*                            </svg>*/}
                {/*                        </a>*/}

                {/*                        <div className="dropdown-menu dropdown-menu-right">*/}
                {/*                            <a className="dropdown-item" href="#">Action</a>*/}
                {/*                            <a className="dropdown-item" href="#">Another action</a>*/}
                {/*                            <a className="dropdown-item" href="#">Something else here</a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <h5 className="card-title mb-0">Appointments</h5>*/}
                {/*            </div>*/}
                {/*            <div className="card-body">*/}
                {/*                <ul className="timeline">*/}
                {/*                    <li className="timeline-item">*/}
                {/*                        <strong>Chat with Carl and Ashley</strong>*/}
                {/*                        <span className="float-right text-muted text-sm">30m ago</span>*/}
                {/*                        <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec,*/}
                {/*                            imperdiet iaculis, ipsum. Sed aliquam ultrices mauris...</p>*/}
                {/*                    </li>*/}
                {/*                    <li className="timeline-item">*/}
                {/*                        <strong>The big launch</strong>*/}
                {/*                        <span className="float-right text-muted text-sm">2h ago</span>*/}
                {/*                        <p>Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer*/}
                {/*                            eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum*/}
                {/*                            rutrum*/}
                {/*                            nunc...</p>*/}
                {/*                    </li>*/}
                {/*                    <li className="timeline-item">*/}
                {/*                        <strong>Coffee break</strong>*/}
                {/*                        <span className="float-right text-muted text-sm">3h ago</span>*/}
                {/*                        <p>Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet,*/}
                {/*                            leo. Maecenas malesuada...</p>*/}
                {/*                    </li>*/}
                {/*                    <li className="timeline-item">*/}
                {/*                        <strong>Chat with team</strong>*/}
                {/*                        <span className="float-right text-muted text-sm">30m ago</span>*/}
                {/*                        <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec,*/}
                {/*                            imperdiet iaculis, ipsum...</p>*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="card flex-fill">
                    <div className="card-header">
                        <div className="card-actions float-right">
                            <div className="dropdown show">
                                <a href="#" data-toggle="dropdown" data-display="static">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="feather feather-more-horizontal align-middle">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <h5 className="card-title mb-0">Latest Projects</h5>
                    </div>
                    <div id="datatables-dashboard-projects_wrapper"
                         className="dataTables_wrapper dt-bootstrap4 no-footer">
                        <div className="row">
                            <div className="col-sm-12 col-md-6"></div>
                            <div className="col-sm-12 col-md-6"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <table id="datatables-dashboard-projects"
                                       className="table table-striped my-0 dataTable no-footer" role="grid"
                                       aria-describedby="datatables-dashboard-projects_info">
                                    <thead>
                                    <tr role="row">
                                        <th className="sorting_asc" tabIndex="0"
                                            aria-controls="datatables-dashboard-projects" rowSpan="1" colSpan="1"
                                            aria-sort="ascending"
                                            aria-label="Name: activate to sort column descending">Name
                                        </th>
                                        <th className="d-none d-xl-table-cell sorting" tabIndex="0"
                                            aria-controls="datatables-dashboard-projects" rowSpan="1" colSpan="1"
                                            aria-label="Start Date: activate to sort column ascending">Start Date
                                        </th>
                                        <th className="d-none d-xl-table-cell sorting" tabIndex="0"
                                            aria-controls="datatables-dashboard-projects" rowSpan="1" colSpan="1"
                                            aria-label="End Date: activate to sort column ascending">End Date
                                        </th>
                                        <th className="sorting" tabIndex="0"
                                            aria-controls="datatables-dashboard-projects" rowSpan="1" colSpan="1"
                                            aria-label="Status: activate to sort column ascending">Status
                                        </th>
                                        <th className="d-none d-md-table-cell sorting" tabIndex="0"
                                            aria-controls="datatables-dashboard-projects" rowSpan="1" colSpan="1"
                                            aria-label="Assignee: activate to sort column ascending">Assignee
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>


                                    <tr role="row" className="odd">
                                        <td className="sorting_1">Project Apollo</td>
                                        <td className="d-none d-xl-table-cell">01/01/2018</td>
                                        <td className="d-none d-xl-table-cell">31/06/2018</td>
                                        <td><span className="badge badge-success">Done</span></td>
                                        <td className="d-none d-md-table-cell">Carl Jenkins</td>
                                    </tr>
                                    <tr role="row" className="even">
                                        <td className="sorting_1">Project Fireball</td>
                                        <td className="d-none d-xl-table-cell">01/01/2018</td>
                                        <td className="d-none d-xl-table-cell">31/06/2018</td>
                                        <td><span className="badge badge-danger">Cancelled</span></td>
                                        <td className="d-none d-md-table-cell">Bertha Martin</td>
                                    </tr>
                                    <tr role="row" className="odd">
                                        <td className="sorting_1">Project Hades</td>
                                        <td className="d-none d-xl-table-cell">01/01/2018</td>
                                        <td className="d-none d-xl-table-cell">31/06/2018</td>
                                        <td><span className="badge badge-success">Done</span></td>
                                        <td className="d-none d-md-table-cell">Stacie Hall</td>
                                    </tr>
                                    <tr role="row" className="even">
                                        <td className="sorting_1">Project Nitro</td>
                                        <td className="d-none d-xl-table-cell">01/01/2018</td>
                                        <td className="d-none d-xl-table-cell">31/06/2018</td>
                                        <td><span className="badge badge-warning">In progress</span></td>
                                        <td className="d-none d-md-table-cell">Carl Jenkins</td>
                                    </tr>
                                    <tr role="row" className="odd">
                                        <td className="sorting_1">Project Phoenix</td>
                                        <td className="d-none d-xl-table-cell">01/01/2018</td>
                                        <td className="d-none d-xl-table-cell">31/06/2018</td>
                                        <td><span className="badge badge-success">Done</span></td>
                                        <td className="d-none d-md-table-cell">Bertha Martin</td>
                                    </tr>
                                    <tr role="row" className="even">
                                        <td className="sorting_1">Project Romeo</td>
                                        <td className="d-none d-xl-table-cell">01/01/2018</td>
                                        <td className="d-none d-xl-table-cell">31/06/2018</td>
                                        <td><span className="badge badge-success">Done</span></td>
                                        <td className="d-none d-md-table-cell">Ashley Briggs</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <div className="dataTables_info" id="datatables-dashboard-projects_info" role="status"
                                     aria-live="polite">Showing 1 to 6 of 9 entries
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                                <div className="dataTables_paginate paging_simple_numbers"
                                     id="datatables-dashboard-projects_paginate">
                                    <ul className="pagination">
                                        <li className="paginate_button page-item previous disabled"
                                            id="datatables-dashboard-projects_previous"><a href="#"
                                                                                           aria-controls="datatables-dashboard-projects"
                                                                                           data-dt-idx="0" tabIndex="0"
                                                                                           className="page-link">Previous</a>
                                        </li>
                                        <li className="paginate_button page-item active"><a href="#"
                                                                                            aria-controls="datatables-dashboard-projects"
                                                                                            data-dt-idx="1" tabIndex="0"
                                                                                            className="page-link">1</a>
                                        </li>
                                        <li className="paginate_button page-item "><a href="#"
                                                                                      aria-controls="datatables-dashboard-projects"
                                                                                      data-dt-idx="2" tabIndex="0"
                                                                                      className="page-link">2</a></li>
                                        <li className="paginate_button page-item next"
                                            id="datatables-dashboard-projects_next"><a href="#"
                                                                                       aria-controls="datatables-dashboard-projects"
                                                                                       data-dt-idx="3" tabIndex="0"
                                                                                       className="page-link">Next</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Dashboard
