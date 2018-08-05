import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const scan = [
        {
            "operator": {
                "name": "Celltell",
                "country": "Yourcountry",
                "mcc": "425",
                "mnc": "02"
            },
            "band": "1800",
            "channel": "524",
            "rxLevel": "-34",
            "lac": "10444",
            "cellID": "31603",
            "bsic": "17",
            "neighbors": ["523", "515", "407"]
        },
        {
            "operator": {
                "name": "Blahtell",
                "country": "Somecountry",
                "mcc": "333",
                "mnc": "07"
            },
            "band": "1800",
            "channel": "624",
            "rxLevel": "14",
            "lac": "377",
            "cellID": "12603",
            "bsic": "14",
            "neighbors": ["523", "515", "407", "523", "515", "407"]
        },  
        {
            "operator": {
                "name": "TeleCell",
                "country": "My Country",
                "mcc": "125",
                "mnc": "55"
            },
            "band": "900",
            "channel": "124",
            "rxLevel": "-20",
            "lac": "9099",
            "cellID": "21333",
            "bsic": "12",
            "neighbors": ["123", "523", "515", "407", "600"]
        },
        {
            "operator": {
                "name": "TeleCell",
                "country": "My Country",
                "mcc": "252",
                "mnc": "71"
            },
            "band": "900",
            "channel": "124",
            "rxLevel": "-20",
            "lac": "9099",
            "cellID": "91333",
            "bsic": "12",
            "neighbors": ["123", "523", "515", "407", "600"]
        },
        {
            "operator": {
                "name": "TeleCell",
                "country": "My Country",
                "mcc": "125",
                "mnc": "55"
            },
            "band": "900",
            "channel": "124",
            "rxLevel": "-20",
            "lac": "9099",
            "cellID": "1333",
            "bsic": "12",
            "neighbors": ["123", "523", "515", "407", "600"]
        }
        ]
        const enclosures = [
        {
            "id": "1",
            "name": "Harbor District",
            "ip": "192.168.01",
            "status": true,
            "lastUpdated": "2018-14-25T03:24:00",
            "picSixSerial": "9900111",
            "sbc": {
                "type": "Arduino",
                "vendorSerial": "1xb7355g889900111", 
                "ip": "192.168.02",
                "simNumber": 35,
                "memorySize": 512,
                "storageSize": 50000
            },
            "sdr": {
                "type": "OCTBTS 3500",
                "vendorSerial": "1xb7355g889900111", 
                "ip": "192.168.02",
                "BTS": [
                    {
                        "ip": '190.177.444.003',
                        "port": '4100'
                    },
                    {
                        "ip": '999.177.444.003',
                        "port": '1100'
                    }
                ],
                // "BTSPorts": ['3300', '4100', '1100', '4101', '1200', '1250', '9000', '1800'],
                // "BTSport1": "3300",
                // "BTSport2": "4100",
                "port": "3100",
                "protocols": {"twoG": true, "threeG": true, "fourG": true}
            },
            "rfChains": [
            {
                "type": "Dedicated",
                "amp": {
                    "ip": "192.168.0.5", 
                    "make": "amp make test",
                    "model": "amp model test",
                    "mfcSerial": "amp mfc serial test",
                    "picSixSerial": "amp picsix serial test"
                }
            },
            {
                "type": "Shared",
                "freqBand": [
                {
                    "gain": "2.2",
                    "loss": "7",
                    "band": "1800"
                },
                {
                    "gain": "1.4",
                    "loss": "9",
                    "band": "900"
                }
                ]
            }
            ]
        },
        {
            "id": "2",
            "name": "Market District",
            "ip": "192.168.02",
            "status": true,
            "lastUpdated": "2018-14-25T03:24:00",
            "picSixSerial": "88888888",
            "sbc": {
                "type": "Arduino",
                "vendorSerial": "6xb7355g889900111", 
                "ip": "192.168.07",
                "simNumber": 5,
                "memorySize": 512,
                "storageSize": 70000
            },
            "sdr": {
                "type": "OCTBTS 3500",
                "vendorSerial": "1xb7355g889900111", 
                "ip": "192.168.02",
                "BTS": [
                    {
                        "ip": '190.177.444.003',
                        "port": '4100'
                    },
                    {
                        "ip": '999.177.444.003',
                        "port": '1100'
                    }
                ],
                // "BTSPorts": ['3300', '4100'],
                // "BTSport1": "3300",
                // "BTSport2": "4100",
                "port": "3100",
                "protocols": {"twoG": true, "threeG": true, "fourG": false}
            },
            "rfChains": [
            {
                "type": "Shared",
                "freqBand": [
                {
                    "gain": "2.2",
                    "loss": "7",
                    "band": "1800"
                },
                {
                    "gain": "1.4",
                    "loss": "9",
                    "band": "900"
                }
                ]
            },
            {
                "type": "Dedicated",
                "amp": {
                    "ip": "192.168.0.1", 
                    "make": "amp make test",
                    "model": "amp model test",
                    "mfcSerial": "amp mfc serial test",
                    "picSixSerial": "amp picsix serial test"
                }
            }
            ]
        },
        // {
        //     "id": "3",
        //     "name": "Some District",
        //     "ip": "192.168.02",
        //     "status": true,
        //     "lastUpdated": "2018-14-25T03:24:00",
        //     "picSixSerial": "88888888",
        //     "sbc": {
        //         "type": "Arduino",
        //         "vendorSerial": "6xb7355g889900111", 
        //         "ip": "192.168.07",
        //         "simNumber": 5,
        //         "memorySize": 512,
        //         "storageSize": 70000
        //     },
        //     "sdr": {
        //         "type": "OCTBTS 3500",
        //         "vendorSerial": "1xb7355g889900111", 
        //         "ip": "192.168.02",
        //         "BTS": [
        //             {
        //                 "ip": '190.177.444.003',
        //                 "port": '4100'
        //             },
        //             {
        //                 "ip": '999.177.444.003',
        //                 "port": '1100'
        //             }
        //         ],
        //         // "BTSPorts": ['3300', '4100'],
        //         // "BTSport1": "3300",
        //         // "BTSport2": "4100",
        //         "port": "3100",
        //         "protocols": {"twoG": true, "threeG": true, "fourG": false}
        //     },
        //     "rfChains": [
        //     {
        //         "type": "Shared",
        //         "freqBand": [
        //         {
        //             "gain": "2.2",
        //             "loss": "7",
        //             "band": "1800"
        //         },
        //         {
        //             "gain": "1.4",
        //             "loss": "9",
        //             "band": "900"
        //         }
        //         ]
        //     },
        //     {
        //         "type": "Shared",
        //         "freqBand": [
        //         {
        //             "gain": "2.2",
        //             "loss": "7",
        //             "band": "1800"
        //         },
        //         {
        //             "gain": "1.4",
        //             "loss": "9",
        //             "band": "900"
        //         }
        //         ]
        //     }
        //     ]
        // },
        // {
        //     "id": "4",
        //     "name": "Another District",
        //     "ip": "192.168.02",
        //     "status": true,
        //     "lastUpdated": "2018-14-25T03:24:00",
        //     "picSixSerial": "88888888",
        //     "sbc": {
        //         "type": "Arduino",
        //         "vendorSerial": "6xb7355g889900111", 
        //         "ip": "192.168.07",
        //         "simNumber": 5,
        //         "memorySize": 512,
        //         "storageSize": 70000
        //     },
        //     "sdr": {
        //         "type": "OCTBTS 3500",
        //         "vendorSerial": "1xb7355g889900111", 
        //         "ip": "192.168.02",
        //         "BTS": [
        //             {
        //                 "ip": '190.177.444.003',
        //                 "port": '4100'
        //             },
        //             {
        //                 "ip": '999.177.444.003',
        //                 "port": '1100'
        //             }
        //         ],
        //         // "BTSPorts": ['3300', '4100'],
        //         // "BTSport1": "3300",
        //         // "BTSport2": "4100",
        //         "port": "3100",
        //         "protocols": {"twoG": true, "threeG": true, "fourG": false}
        //     },
        //     "rfChains": [
        //     {
        //         "type": "Shared",
        //         "freqBand": [
        //         {
        //             "gain": "2.2",
        //             "loss": "7",
        //             "band": "1800"
        //         },
        //         {
        //             "gain": "1.4",
        //             "loss": "9",
        //             "band": "900"
        //         }
        //         ]
        //     },
        //     {
        //         "type": "Shared",
        //         "freqBand": [
        //         {
        //             "gain": "2.2",
        //             "loss": "7",
        //             "band": "1800"
        //         },
        //         {
        //             "gain": "1.4",
        //             "loss": "9",
        //             "band": "900"
        //         }
        //         ]
        //     }
        //     ]
        // }
        ];

        const targets = [
            {
                "imsi": "12345",
                "BTS": "bts 1",
                "time": " 2017-07-20T01:44:38",
                "operator": "Pelephone",
                "tmsi": "7876",
                "cellNumber": "317-823-9999"
            },
            {
                "imsi": "666655",
                "BTS": "bts 2",
                "time": " 2018-07-20T01:44:38",
                "operator": "Verizon",
                "tmsi": "5433",
                "cellNumber": "617-777-9875"
            }
        ];
        
        return {enclosures, scan, targets};
    }
} 


