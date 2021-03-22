<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="/css/invoice.css" rel="stylesheet"></link>
</head>
<body>
<div class="invoice">
    <div class="top">
        <div class="block">
            <table>
                <tr>
                    <td class="left-card invoice-title">Invoice</td>
                    <td class="right-card">
                        <table>
                            <tr class="company-name"><td>{{ $company['name'] }}</td></tr>
                            <tr><td>{{ $company['secondary_name'] }}</td></tr>
                            <tr><td>{{ $company['address1'] }}</td></tr>
                            <tr><td>{{ $company['city'] }}, {{ $company['state'] }} {{ $company['zip'] }}</td></tr>
                            <tr><td>Phone# {{ $company['phone'] }}</td></tr>
                            <tr><td>{{ $company['email'] }}</td></tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="spacer"></div>
    <div class="block">
        <table>
            <tr>
                <td class="left-card invoice-to">
                    <table>
                        <tr><td class="bold-text">BILL TO:</td></tr>
                        <tr><td class="company-name">{{$trip->broker->name}}</td></tr>
                        <tr><td>{{$trip->broker->address1}}</td></tr>
                        <tr><td>{{$trip->broker->pobox}} {{$trip->broker->city}}, {{$trip->broker->state}} {{$trip->broker->zip}}</td></tr>
                    </table>
                </td>
                <td class="right-card">
                    <table>
                        <tr><td class="bold-text">Invoice #</td></tr>
                        <tr><td>{{($trip->invoice_number!='' && $trip->invoice_number != null)? $trip->invoice_number : $invoice_number}}</td></tr>
                        <tr><td class="bold-text">Date</td></tr>
                        <tr><td>{{date('m/d/Y')}}</td></tr>
                        <tr><td class="bold-text">Invoice Due Date</td></tr>
                        <tr><td>{{date('m/d/Y', strtotime('+30 days', strtotime($trip->delivery_date)))}}</td></tr>
                        <tr><td class="bold-text">Order # </td></tr>
                        <tr><td>{{$trip->vendor_order_no}} </td></tr>
                        <tr><td class="bold-text"> Order Dated </td></tr>
                        <tr><td>{{$trip->vendor_order_date->format('m/d/Y')}}</td></tr>
                        <tr><td>#{{$trip->truck->name}} Trailer #{{$trip->trailer? $trip->trailer->name:$trip->trailer_other}}</td></tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    <div class="block">
        <table class="div-table" cellpadding="10" cellspacing="0">
            <tr class="div-table-row">
                <td class="div-table-header item">Item</td>
                <td class="div-table-header shipper">Shipper</td>
                <td class="div-table-header pickup-date">Pick-up date</td>
                <td class="div-table-header consignee">Consignee</td>
                <td class="div-table-header delivery-date">Delivery Date</td>
                <td class="div-table-header amount">Amount</td>
            </tr>
            <tr class="div-table-row">
                <td class="div-table-col item">FLT</td>
                <td class="div-table-col shipper">
                    <div>
                        <div>{{$trip->shipperAddress? $trip->shipperAddress->company_name: ''}}</div>
                        <div>{{$trip->shipperAddress? $trip->shipperAddress->address1: ''}}</div>
                        @if($trip->shipperAddress->address2 !='')
                            <div>{{$trip->shipperAddress? $trip->shipperAddress->address2: ''}}</div>
                        @endif
                        <div>{{$trip->shipperAddress? $trip->shipperAddress->city: ''}}, {{$trip->shipperAddress? $trip->shipperAddress->state: ''}}</div>
                        <div>{{$trip->shipperAddress? $trip->shipperAddress->zip: ''}}</div>
                    </div>
                </td>
                <td class="div-table-col pickup-date">{{$trip->pickup_date->format('m/d/Y')}}</td>
                <td class="div-table-col consignee">
                    <div>
                        <div>{{$trip->consigneeAddress? $trip->consigneeAddress->company_name:''}}</div>
                        <div>{{$trip->consigneeAddress? $trip->consigneeAddress->address1:''}}</div>
                        @if($trip->consigneeAddress->address2 !='')
                            <div>{{$trip->consigneeAddress? $trip->consigneeAddress->address2: ''}}</div>
                        @endif
                        <div>{{$trip->consigneeAddress? $trip->consigneeAddress->city:''}}, {{$trip->consigneeAddress? $trip->consigneeAddress->state:''}}</div>
                        <div>{{$trip->consigneeAddress? $trip->consigneeAddress->zip:''}}</div>
                    </div>
                </td>
                <td class="div-table-col delivery-date">{{$trip->delivery_date->format('m/d/Y')}}</td>
                <td class="div-table-col amount">${{number_format($trip->invoice_price, 2)}}</td>
            </tr>
            <tr class="div-table-row">
                <td class="div-table-col item"></td>
                <td class="div-table-col shipper">&nbsp;</td>
                <td class="div-table-col pickup-date">&nbsp;</td>
                <td class="div-table-col consignee">&nbsp;</td>
                <td class="div-table-col delivery-date">Lumper Fee</td>
                <td class="div-table-col amount">${{number_format($trip->lumper_fee, 2)}}</td>
            </tr>
{{--            <tr class="div-table-row">--}}
{{--                <td class="div-table-col item"></td>--}}
{{--                <td class="div-table-col shipper">&nbsp;</td>--}}
{{--                <td class="div-table-col pickup-date">&nbsp;</td>--}}
{{--                <td class="div-table-col consignee">&nbsp;</td>--}}
{{--                <td class="div-table-col delivery-date">Border Inspection Fee</td>--}}
{{--                <td class="div-table-col amount">$480.25</td>--}}
{{--            </tr>--}}
            <tr class="div-table-row">
                <td colspan="3" class="div-table-col">&nbsp;</td>
                <td colspan="2" class="div-table-col subtotal">
                    <span>Subtotal ({{$trip->currency}} $)</span>
                    <br>
                    <br>
                    <span>Zero Rated - Tax</span>
                </td>
                <td class="div-table-col"> ${{number_format($trip->invoice_price+$trip->lumper_fee, 2)}}</td>
            </tr>
{{--            <tr class="div-table-row">--}}
{{--                <td colspan="3" class="div-table-col">&nbsp;</td>--}}
{{--                <td colspan="2" class="div-table-col subtotal">--}}
{{--                    <span>Subtotal (CAD $)</span>--}}
{{--                    <br>--}}
{{--                    <br>--}}
{{--                    <span>Zero Rated - Tax</span>--}}
{{--                </td>--}}
{{--                <td class="div-table-col"> $480.25</td>--}}
{{--            </tr>--}}
            <tr class="div-table-row">
                <td colspan="3" class="div-table-col">&nbsp;</td>
                <td colspan="2" class="div-table-col subtotal">Total Amount ({{$trip->currency}} $)</td>
                <td class="div-table-col"> ${{number_format($trip->invoice_price+$trip->lumper_fee, 2)}}</td>
            </tr>
        </table>
    </div>
</div>
</body>
</html>
