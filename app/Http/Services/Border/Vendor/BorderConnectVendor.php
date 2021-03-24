<?php

namespace App\Http\Services\Border\Vendor;
use App\Http\Repositories\TripRepository;
use App\Models\Border\BorderConnectCredential;
use WebSocket\Client;

class BorderConnectVendor implements IBorderVendor
{
    /**
     * @var TripRepository
     */
    private $tripRepository;

    public function __construct(TripRepository $tripRepository)
    {
        $this->tripRepository = $tripRepository;
    }
    public function connect(int $tripId, string $type): array
    {
        $client = new Client( "wss://borderconnect.com/api/sockets/test7333111" );
        $borderVendor = BorderConnectCredential::query()->where('carrier_id', 1)->first();
//        $client->send( "{ \"apiKey\": \"$borderVendor->api_key\" }" );
        $client->send( "{ \"apiKey\": \"a-17949-3fe14458178b7000\" }" );

        $response = $client->receive();
        $json_array = json_decode( $response, true );

        $trip = $this->tripRepository->getTripForManifest($tripId);
        if ( array_key_exists( "status", $json_array ) && $json_array['status'] == "OK" )
            $type = $type === 'ACE'? 'ACE': 'ACI';
            $data = [
                "data" => $type."_TRIP",
                "sendId" => "TTF$trip->id",
                "companyKey" => $borderVendor->company_key,
                "operation" => "CREATE",
                "tripNumber" => "TTF$trip->id",
//                "usPortOfArrival" => "0101",
                "portOfEntry" => "0502",
                "estimatedArrivalDateTime" => $trip->expected_delivery_date->format('Y-m-d H:i:s'), // Rename to expected_border_crossing_date
                "truck" => [
                    "number" => $trip->truck->number,
                    "type" => "TR",  // Semi truck
                    "vinNumber" => $trip->truck->vin_number,
                    "licensePlate" => [
                        "number" => $trip->truck->licence_plate_number,
                        "stateProvince" => $trip->truck->licence_plate_state,
                    ]
                ],
                "trailers" => [
                    [
                        "number" => $trip->trailer->number,
                        "type" => "TW", // "Controlled temperature trailer"
                        "licensePlate" => [
                            "number" => $trip->trailer->licence_plate_number,
                            "stateProvince" => $trip->trailer->licence_plate_state,
                        ]
                    ]
                ],
                "drivers" => [
                    [
                        "driverNumber" => $trip->driver1->id,
                        "firstName" => $trip->driver1->first_name,
                        "lastName" => $trip->driver1->last_name,
                        "gender" => $trip->driver1->gender,
                        "dateOfBirth" => $trip->driver1->dob,
                    ]
                ],
                "shipments" => [
                    [
                        "data" => "ACI_SHIPMENT",
                        "sendId" => "TTF$trip->id",
                        "companyKey" => $borderVendor->company_key,
                        "operation" => "CREATE",
                        "type" => "PAPS",
                        "shipmentControlNumber" => "AAAAA754321",
                        "provinceOfLoading" => "NU",
                        "shipper" => [
                            "name" => "Art place",
                            "address" => [
                                "addressLine" => "1234 Vancity",
                                "city" => "Vancouver",
                                "stateProvince" => "BC",
                                "postalCode" => "V6H 3J9"
                            ]
                        ],
                        "consignee" => [
                            "name" => "Elk Corp of Texas",
                            "address" => [
                                "addressLine" => "401 Weavertown Rd",
                                "city" => "Myerstown",
                                "stateProvince" => "PA",
                                "postalCode" => "17067"
                            ]
                        ],
                        "commodities" => [
                            [
                                "loadedOn" => [
                                    "type" => "TRAILER",
                                    "number" => "0456"
                                ],
                                "description" => "Books",
                                "quantity" => 35,
                                "packagingUnit" => "BOX",
                                "weight" => 1500,
                                "weightUnit" => "L"
                            ]
                        ]
                    ]
                ],
                "autoSend" => false
            ];
//            return $data;
            $encodedData = json_encode($data);
            $client->send($encodedData);
            $response = $client->receive();
            $json_array = json_decode( $response, true );
            dd($json_array);
//            return [$response];
    }
}
