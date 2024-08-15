export const userBasketsContractABI = {
  abi: [
    {
      type: "constructor",
      inputs: [
        { name: "_name", type: "string", internalType: "string" },
        { name: "_symbol", type: "string", internalType: "string" },
        {
          name: "baskets",
          type: "tuple[]",
          internalType: "struct IConstant.BasketInfo[]",
          components: [
            { name: "addr", type: "address", internalType: "address" },
            { name: "percent", type: "uint8", internalType: "uint8" },
            { name: "image", type: "string", internalType: "string" },
          ],
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "createdAt",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "deposit",
      inputs: [{ name: "_to", type: "address", internalType: "address" }],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "getOwner",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getUserBasketOfBasketData",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "tuple",
          internalType: "struct UserBasket.UserBasketOfBasketData",
          components: [
            { name: "name", type: "string", internalType: "string" },
            { name: "symbol", type: "string", internalType: "string" },
            { name: "createdAt", type: "uint256", internalType: "uint256" },
            {
              name: "basketTokens",
              type: "tuple[]",
              internalType: "struct IConstant.BasketInfo[]",
              components: [
                { name: "addr", type: "address", internalType: "address" },
                { name: "percent", type: "uint8", internalType: "uint8" },
                { name: "image", type: "string", internalType: "string" },
              ],
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "listedBasket",
      inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      outputs: [
        { name: "addr", type: "address", internalType: "address" },
        { name: "percent", type: "uint8", internalType: "uint8" },
        { name: "image", type: "string", internalType: "string" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "name",
      inputs: [],
      outputs: [{ name: "", type: "string", internalType: "string" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "symbol",
      inputs: [],
      outputs: [{ name: "", type: "string", internalType: "string" }],
      stateMutability: "view",
    },
  ],
  bytecode: {
    object:
      "0x608060405234801561001057600080fd5b5060405161114d38038061114d83398101604081905261002f916103f8565b600061003b848261061d565b506001610048838261061d565b50600280546001600160a01b0319163317905561006481610070565b50504260045550610718565b60008151116100c65760405162461bcd60e51b815260206004820152601f60248201527f557365724261736b65743a204e6f206261736b6574732070726f76696465640060448201526064015b60405180910390fd5b6000805b825181101561029f5760006001600160a01b03168382815181106100f0576100f06106db565b6020026020010151600001516001600160a01b03160361015e5760405162461bcd60e51b8152602060048201526024808201527f557365724261736b65743a20496e76616c69642020206261736b6574206164646044820152637265737360e01b60648201526084016100bd565b6000838281518110610172576101726106db565b60200260200101516020015160ff16116101e85760405162461bcd60e51b815260206004820152603160248201527f557365724261736b65743a204261736b65742070657263656e74206d75737420604482015270062652067726561746572207468616e203607c1b60648201526084016100bd565b8281815181106101fa576101fa6106db565b60200260200101516020015160ff168261021491906106f1565b9150600383828151811061022a5761022a6106db565b602090810291909101810151825460018181018555600094855293839020825160029092020180549383015160ff16600160a01b026001600160a81b03199094166001600160a01b039092169190911792909217825560408101519092820190610294908261061d565b5050506001016100ca565b50806064146103015760405162461bcd60e51b815260206004820152602860248201527f557365724261736b65743a20546f74616c2070657263656e74616765206d7573604482015267074206265203130360c41b60648201526084016100bd565b5050565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b038111828210171561033d5761033d610305565b60405290565b604051601f8201601f191681016001600160401b038111828210171561036b5761036b610305565b604052919050565b600082601f83011261038457600080fd5b81516001600160401b0381111561039d5761039d610305565b6103b0601f8201601f1916602001610343565b8181528460208386010111156103c557600080fd5b60005b828110156103e4576020818601810151838301820152016103c8565b506000918101602001919091529392505050565b60008060006060848603121561040d57600080fd5b83516001600160401b0381111561042357600080fd5b61042f86828701610373565b602086015190945090506001600160401b0381111561044d57600080fd5b61045986828701610373565b604086015190935090506001600160401b0381111561047757600080fd5b8401601f8101861361048857600080fd5b80516001600160401b038111156104a1576104a1610305565b8060051b6104b160208201610343565b918252602081840181019290810190898411156104cd57600080fd5b6020850192505b838310156105855782516001600160401b038111156104f257600080fd5b85016060818c03601f1901121561050857600080fd5b61051061031b565b60208201516001600160a01b038116811461052a57600080fd5b8152604082015160ff8116811461054057600080fd5b602082015260608201516001600160401b0381111561055e57600080fd5b61056d8d602083860101610373565b604083015250835250602092830192909101906104d4565b80955050505050509250925092565b600181811c908216806105a857607f821691505b6020821081036105c857634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561061857806000526020600020601f840160051c810160208510156105f55750805b601f840160051c820191505b818110156106155760008155600101610601565b50505b505050565b81516001600160401b0381111561063657610636610305565b61064a816106448454610594565b846105ce565b6020601f82116001811461067e57600083156106665750848201515b600019600385901b1c1916600184901b178455610615565b600084815260208120601f198516915b828110156106ae578785015182556020948501946001909201910161068e565b50848210156106cc5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b8082018082111561071257634e487b7160e01b600052601160045260246000fd5b92915050565b610a26806107276000396000f3fe60806040526004361061007b5760003560e01c806395d89b411161004e57806395d89b411461011f578063cf09e0d014610134578063d1013f0614610158578063f340fa011461018757600080fd5b806306fdde0314610080578063084ef211146100ab578063893d20e8146100cd5780638da5cb5b146100ff575b600080fd5b34801561008c57600080fd5b5061009561019c565b6040516100a291906107c0565b60405180910390f35b3480156100b757600080fd5b506100c061022a565b6040516100a291906107da565b3480156100d957600080fd5b506002546001600160a01b03165b6040516001600160a01b0390911681526020016100a2565b34801561010b57600080fd5b506002546100e7906001600160a01b031681565b34801561012b57600080fd5b5061009561049f565b34801561014057600080fd5b5061014a60045481565b6040519081526020016100a2565b34801561016457600080fd5b506101786101733660046108b9565b6104ac565b6040516100a2939291906108d2565b61019a610195366004610908565b610579565b005b600080546101a990610931565b80601f01602080910402602001604051908101604052809291908181526020018280546101d590610931565b80156102225780601f106101f757610100808354040283529160200191610222565b820191906000526020600020905b81548152906001019060200180831161020557829003601f168201915b505050505081565b6102556040518060800160405280606081526020016060815260200160008152602001606081525090565b60405180608001604052806000805461026d90610931565b80601f016020809104026020016040519081016040528092919081815260200182805461029990610931565b80156102e65780601f106102bb576101008083540402835291602001916102e6565b820191906000526020600020905b8154815290600101906020018083116102c957829003601f168201915b50505050508152602001600180546102fd90610931565b80601f016020809104026020016040519081016040528092919081815260200182805461032990610931565b80156103765780601f1061034b57610100808354040283529160200191610376565b820191906000526020600020905b81548152906001019060200180831161035957829003601f168201915b5050505050815260200160045481526020016003805480602002602001604051908101604052809291908181526020016000905b82821015610494576000848152602090819020604080516060810182526002860290920180546001600160a01b0381168452600160a01b900460ff16938301939093526001830180549293929184019161040390610931565b80601f016020809104026020016040519081016040528092919081815260200182805461042f90610931565b801561047c5780601f106104515761010080835404028352916020019161047c565b820191906000526020600020905b81548152906001019060200180831161045f57829003601f168201915b505050505081525050815260200190600101906103aa565b505050915250919050565b600180546101a990610931565b600381815481106104bc57600080fd5b6000918252602090912060029091020180546001820180546001600160a01b0383169450600160a01b90920460ff1692916104f690610931565b80601f016020809104026020016040519081016040528092919081815260200182805461052290610931565b801561056f5780601f106105445761010080835404028352916020019161056f565b820191906000526020600020905b81548152906001019060200180831161055257829003601f168201915b5050505050905083565b662386f26fc100003410156105de5760405162461bcd60e51b815260206004820152602160248201527f557365724261736b65743a204d757374206465706f73697420302e30312045546044820152600960fb1b606482015260840160405180910390fd5b60005b600354811015610776576000600382815481106106005761060061096b565b600091825260209182902060408051606081018252600290930290910180546001600160a01b038116845260ff600160a01b90910416938301939093526001830180549293929184019161065390610931565b80601f016020809104026020016040519081016040528092919081815260200182805461067f90610931565b80156106cc5780601f106106a1576101008083540402835291602001916106cc565b820191906000526020600020905b8154815290600101906020018083116106af57829003601f168201915b505050505081525050905060006064826020015160ff16346106ee9190610981565b6106f891906109ac565b8251604051636c6e0c0560e01b81526001600160a01b038781166004830152929350911690636c6e0c0590839060240160206040518083038185885af1158015610746573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061076b91906109ce565b5050506001016105e1565b5050565b6000815180845260005b818110156107a057602081850181015186830182015201610784565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006107d3602083018461077a565b9392505050565b6020815260008251608060208401526107f660a084018261077a565b90506020840151601f19848303016040850152610813828261077a565b915050604084015160608401526060840151601f1984830301608085015281815180845260208401915060208160051b85010160208401935060005b828110156108ad57858203601f19018452845180516001600160a01b0316835260208082015160ff16908401526040908101516060918401829052906108979084018261077a565b602096870196959095019492505060010161084f565b50979650505050505050565b6000602082840312156108cb57600080fd5b5035919050565b6001600160a01b038416815260ff831660208201526060604082018190526000906108ff9083018461077a565b95945050505050565b60006020828403121561091a57600080fd5b81356001600160a01b03811681146107d357600080fd5b600181811c9082168061094557607f821691505b60208210810361096557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b80820281158282048414176109a657634e487b7160e01b600052601160045260246000fd5b92915050565b6000826109c957634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156109e057600080fd5b815180151581146107d357600080fdfea264697066735822122082c6c4b50d3a361f7f65b955a81ee62fbafcfce976f75ce74256b75f73c4859b64736f6c634300081a0033",
    sourceMap:
      "134:2298:35:-:0;;;474:282;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;609:4;:12;616:5;609:4;:12;:::i;:::-;-1:-1:-1;631:6:35;:16;640:7;631:6;:16;:::i;:::-;-1:-1:-1;657:5:35;:18;;-1:-1:-1;;;;;;657:18:35;665:10;657:18;;;685:27;704:7;685:18;:27::i;:::-;-1:-1:-1;;734:15:35;722:9;:27;-1:-1:-1;134:2298:35;;762:766;887:1;870:7;:14;:18;862:62;;;;-1:-1:-1;;;862:62:35;;6277:2:41;862:62:35;;;6259:21:41;6316:2;6296:18;;;6289:30;6355:33;6335:18;;;6328:61;6406:18;;862:62:35;;;;;;;;;934:20;973:9;968:438;992:7;:14;988:1;:18;968:438;;;1088:1;-1:-1:-1;;;;;1052:38:35;1060:7;1068:1;1060:10;;;;;;;;:::i;:::-;;;;;;;:15;;;-1:-1:-1;;;;;1052:38:35;;1027:133;;;;-1:-1:-1;;;1027:133:35;;6769:2:41;1027:133:35;;;6751:21:41;6808:2;6788:18;;;6781:30;6847:34;6827:18;;;6820:62;-1:-1:-1;;;6898:18:41;;;6891:34;6942:19;;1027:133:35;6567:400:41;1027:133:35;1220:1;1199:7;1207:1;1199:10;;;;;;;;:::i;:::-;;;;;;;:18;;;:22;;;1174:130;;;;-1:-1:-1;;;1174:130:35;;7174:2:41;1174:130:35;;;7156:21:41;7213:2;7193:18;;;7186:30;7252:34;7232:18;;;7225:62;-1:-1:-1;;;7303:18:41;;;7296:47;7360:19;;1174:130:35;6972:413:41;1174:130:35;1334:7;1342:1;1334:10;;;;;;;;:::i;:::-;;;;;;;:18;;;1318:34;;;;;;;:::i;:::-;;;1366:12;1384:7;1392:1;1384:10;;;;;;;;:::i;:::-;;;;;;;;;;;;1366:29;;;;;;;;-1:-1:-1;1366:29:35;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1366:29:35;-1:-1:-1;;;;;;1366:29:35;;;-1:-1:-1;;;;;1366:29:35;;;;;;;;;;;;;;;;;1384:10;;1366:29;;;;;;;:::i;:::-;-1:-1:-1;;;1008:3:35;;968:438;;;;1436:12;1452:3;1436:19;1415:106;;;;-1:-1:-1;;;1415:106:35;;7819:2:41;1415:106:35;;;7801:21:41;7858:2;7838:18;;;7831:30;7897:34;7877:18;;;7870:62;-1:-1:-1;;;7948:18:41;;;7941:38;7996:19;;1415:106:35;7617:404:41;1415:106:35;852:676;762:766;:::o;14:127:41:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:251;218:2;212:9;260:2;248:15;;-1:-1:-1;;;;;278:34:41;;314:22;;;275:62;272:88;;;340:18;;:::i;:::-;376:2;369:22;146:251;:::o;402:275::-;473:2;467:9;538:2;519:13;;-1:-1:-1;;515:27:41;503:40;;-1:-1:-1;;;;;558:34:41;;594:22;;;555:62;552:88;;;620:18;;:::i;:::-;656:2;649:22;402:275;;-1:-1:-1;402:275:41:o;682:667::-;736:5;789:3;782:4;774:6;770:17;766:27;756:55;;807:1;804;797:12;756:55;834:13;;-1:-1:-1;;;;;859:30:41;;856:56;;;892:18;;:::i;:::-;936:59;983:2;960:17;;-1:-1:-1;;956:31:41;989:4;952:42;936:59;:::i;:::-;1020:6;1011:7;1004:23;1074:3;1067:4;1058:6;1050;1046:19;1042:30;1039:39;1036:59;;;1091:1;1088;1081:12;1036:59;1113:1;1123:144;1137:6;1134:1;1131:13;1123:144;;;1250:4;1234:14;;;1230:25;;1224:32;1200:15;;;1196:26;;1189:68;1152:12;1123:144;;;-1:-1:-1;1316:1:41;1287:20;;;1309:4;1283:31;1276:42;;;;1291:7;682:667;-1:-1:-1;;;682:667:41:o;1354:2207::-;1516:6;1524;1532;1585:2;1573:9;1564:7;1560:23;1556:32;1553:52;;;1601:1;1598;1591:12;1553:52;1628:16;;-1:-1:-1;;;;;1656:30:41;;1653:50;;;1699:1;1696;1689:12;1653:50;1722:61;1775:7;1766:6;1755:9;1751:22;1722:61;:::i;:::-;1829:2;1814:18;;1808:25;1712:71;;-1:-1:-1;1808:25:41;-1:-1:-1;;;;;;1845:32:41;;1842:52;;;1890:1;1887;1880:12;1842:52;1913:63;1968:7;1957:8;1946:9;1942:24;1913:63;:::i;:::-;2022:2;2007:18;;2001:25;1903:73;;-1:-1:-1;2001:25:41;-1:-1:-1;;;;;;2038:32:41;;2035:52;;;2083:1;2080;2073:12;2035:52;2106:24;;2161:4;2153:13;;2149:27;-1:-1:-1;2139:55:41;;2190:1;2187;2180:12;2139:55;2217:9;;-1:-1:-1;;;;;2238:30:41;;2235:56;;;2271:18;;:::i;:::-;2317:6;2314:1;2310:14;2344:28;2368:2;2364;2360:11;2344:28;:::i;:::-;2406:19;;;2450:2;2480:11;;;2476:20;;;2441:12;;;;2508:19;;;2505:39;;;2540:1;2537;2530:12;2505:39;2572:2;2568;2564:11;2553:22;;2584:947;2600:6;2595:3;2592:15;2584:947;;;2673:10;;-1:-1:-1;;;;;2699:35:41;;2696:55;;;2747:1;2744;2737:12;2696:55;2774:20;;2846:2;2818:16;;;-1:-1:-1;;2814:30:41;2810:39;2807:59;;;2862:1;2859;2852:12;2807:59;2892:22;;:::i;:::-;2956:2;2948:11;;2942:18;-1:-1:-1;;;;;2995:33:41;;2983:46;;2973:74;;3043:1;3040;3033:12;2973:74;3060:22;;3124:2;3116:11;;3110:18;3176:4;3163:18;;3151:31;;3141:59;;3196:1;3193;3186:12;3141:59;3231:2;3220:14;;3213:31;3287:2;3279:11;;3273:18;-1:-1:-1;;;;;3307:32:41;;3304:52;;;3352:1;3349;3342:12;3304:52;3392:65;3449:7;3444:2;3433:8;3429:2;3425:17;3421:26;3392:65;:::i;:::-;3387:2;3376:14;;3369:89;-1:-1:-1;3471:18:41;;-1:-1:-1;3518:2:41;2617:12;;;;3509;;;;2584:947;;;3550:5;3540:15;;;;;;;1354:2207;;;;;:::o;3566:380::-;3645:1;3641:12;;;;3688;;;3709:61;;3763:4;3755:6;3751:17;3741:27;;3709:61;3816:2;3808:6;3805:14;3785:18;3782:38;3779:161;;3862:10;3857:3;3853:20;3850:1;3843:31;3897:4;3894:1;3887:15;3925:4;3922:1;3915:15;3779:161;;3566:380;;;:::o;4077:518::-;4179:2;4174:3;4171:11;4168:421;;;4215:5;4212:1;4205:16;4259:4;4256:1;4246:18;4329:2;4317:10;4313:19;4310:1;4306:27;4300:4;4296:38;4365:4;4353:10;4350:20;4347:47;;;-1:-1:-1;4388:4:41;4347:47;4443:2;4438:3;4434:12;4431:1;4427:20;4421:4;4417:31;4407:41;;4498:81;4516:2;4509:5;4506:13;4498:81;;;4575:1;4561:16;;4542:1;4531:13;4498:81;;;4502:3;;4168:421;4077:518;;;:::o;4771:1299::-;4891:10;;-1:-1:-1;;;;;4913:30:41;;4910:56;;;4946:18;;:::i;:::-;4975:97;5065:6;5025:38;5057:4;5051:11;5025:38;:::i;:::-;5019:4;4975:97;:::i;:::-;5121:4;5152:2;5141:14;;5169:1;5164:649;;;;5857:1;5874:6;5871:89;;;-1:-1:-1;5926:19:41;;;5920:26;5871:89;-1:-1:-1;;4728:1:41;4724:11;;;4720:24;4716:29;4706:40;4752:1;4748:11;;;4703:57;5973:81;;5134:930;;5164:649;4024:1;4017:14;;;4061:4;4048:18;;-1:-1:-1;;5200:20:41;;;5318:222;5332:7;5329:1;5326:14;5318:222;;;5414:19;;;5408:26;5393:42;;5521:4;5506:20;;;;5474:1;5462:14;;;;5348:12;5318:222;;;5322:3;5568:6;5559:7;5556:19;5553:201;;;5629:19;;;5623:26;-1:-1:-1;;5712:1:41;5708:14;;;5724:3;5704:24;5700:37;5696:42;5681:58;5666:74;;5553:201;-1:-1:-1;;;;5800:1:41;5784:14;;;5780:22;5767:36;;-1:-1:-1;4771:1299:41:o;6435:127::-;6496:10;6491:3;6487:20;6484:1;6477:31;6527:4;6524:1;6517:15;6551:4;6548:1;6541:15;7390:222;7455:9;;;7476:10;;;7473:133;;;7528:10;7523:3;7519:20;7516:1;7509:31;7563:4;7560:1;7553:15;7591:4;7588:1;7581:15;7473:133;7390:222;;;;:::o;7617:404::-;134:2298:35;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x60806040526004361061007b5760003560e01c806395d89b411161004e57806395d89b411461011f578063cf09e0d014610134578063d1013f0614610158578063f340fa011461018757600080fd5b806306fdde0314610080578063084ef211146100ab578063893d20e8146100cd5780638da5cb5b146100ff575b600080fd5b34801561008c57600080fd5b5061009561019c565b6040516100a291906107c0565b60405180910390f35b3480156100b757600080fd5b506100c061022a565b6040516100a291906107da565b3480156100d957600080fd5b506002546001600160a01b03165b6040516001600160a01b0390911681526020016100a2565b34801561010b57600080fd5b506002546100e7906001600160a01b031681565b34801561012b57600080fd5b5061009561049f565b34801561014057600080fd5b5061014a60045481565b6040519081526020016100a2565b34801561016457600080fd5b506101786101733660046108b9565b6104ac565b6040516100a2939291906108d2565b61019a610195366004610908565b610579565b005b600080546101a990610931565b80601f01602080910402602001604051908101604052809291908181526020018280546101d590610931565b80156102225780601f106101f757610100808354040283529160200191610222565b820191906000526020600020905b81548152906001019060200180831161020557829003601f168201915b505050505081565b6102556040518060800160405280606081526020016060815260200160008152602001606081525090565b60405180608001604052806000805461026d90610931565b80601f016020809104026020016040519081016040528092919081815260200182805461029990610931565b80156102e65780601f106102bb576101008083540402835291602001916102e6565b820191906000526020600020905b8154815290600101906020018083116102c957829003601f168201915b50505050508152602001600180546102fd90610931565b80601f016020809104026020016040519081016040528092919081815260200182805461032990610931565b80156103765780601f1061034b57610100808354040283529160200191610376565b820191906000526020600020905b81548152906001019060200180831161035957829003601f168201915b5050505050815260200160045481526020016003805480602002602001604051908101604052809291908181526020016000905b82821015610494576000848152602090819020604080516060810182526002860290920180546001600160a01b0381168452600160a01b900460ff16938301939093526001830180549293929184019161040390610931565b80601f016020809104026020016040519081016040528092919081815260200182805461042f90610931565b801561047c5780601f106104515761010080835404028352916020019161047c565b820191906000526020600020905b81548152906001019060200180831161045f57829003601f168201915b505050505081525050815260200190600101906103aa565b505050915250919050565b600180546101a990610931565b600381815481106104bc57600080fd5b6000918252602090912060029091020180546001820180546001600160a01b0383169450600160a01b90920460ff1692916104f690610931565b80601f016020809104026020016040519081016040528092919081815260200182805461052290610931565b801561056f5780601f106105445761010080835404028352916020019161056f565b820191906000526020600020905b81548152906001019060200180831161055257829003601f168201915b5050505050905083565b662386f26fc100003410156105de5760405162461bcd60e51b815260206004820152602160248201527f557365724261736b65743a204d757374206465706f73697420302e30312045546044820152600960fb1b606482015260840160405180910390fd5b60005b600354811015610776576000600382815481106106005761060061096b565b600091825260209182902060408051606081018252600290930290910180546001600160a01b038116845260ff600160a01b90910416938301939093526001830180549293929184019161065390610931565b80601f016020809104026020016040519081016040528092919081815260200182805461067f90610931565b80156106cc5780601f106106a1576101008083540402835291602001916106cc565b820191906000526020600020905b8154815290600101906020018083116106af57829003601f168201915b505050505081525050905060006064826020015160ff16346106ee9190610981565b6106f891906109ac565b8251604051636c6e0c0560e01b81526001600160a01b038781166004830152929350911690636c6e0c0590839060240160206040518083038185885af1158015610746573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061076b91906109ce565b5050506001016105e1565b5050565b6000815180845260005b818110156107a057602081850181015186830182015201610784565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006107d3602083018461077a565b9392505050565b6020815260008251608060208401526107f660a084018261077a565b90506020840151601f19848303016040850152610813828261077a565b915050604084015160608401526060840151601f1984830301608085015281815180845260208401915060208160051b85010160208401935060005b828110156108ad57858203601f19018452845180516001600160a01b0316835260208082015160ff16908401526040908101516060918401829052906108979084018261077a565b602096870196959095019492505060010161084f565b50979650505050505050565b6000602082840312156108cb57600080fd5b5035919050565b6001600160a01b038416815260ff831660208201526060604082018190526000906108ff9083018461077a565b95945050505050565b60006020828403121561091a57600080fd5b81356001600160a01b03811681146107d357600080fd5b600181811c9082168061094557607f821691505b60208210810361096557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b80820281158282048414176109a657634e487b7160e01b600052601160045260246000fd5b92915050565b6000826109c957634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156109e057600080fd5b815180151581146107d357600080fdfea264697066735822122082c6c4b50d3a361f7f65b955a81ee62fbafcfce976f75ce74256b75f73c4859b64736f6c634300081a0033",
    sourceMap:
      "134:2298:35:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;160:18;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2097:333;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;2012:79::-;;;;;;;;;;-1:-1:-1;2079:5:35;;-1:-1:-1;;;;;2079:5:35;2012:79;;;-1:-1:-1;;;;;2378:32:41;;;2360:51;;2348:2;2333:18;2012:79:35;2214:203:41;210:20:35;;;;;;;;;;-1:-1:-1;210:20:35;;;;-1:-1:-1;;;;;210:20:35;;;184;;;;;;;;;;;;;:::i;284:24::-;;;;;;;;;;;;;;;;;;;2568:25:41;;;2556:2;2541:18;284:24:35;2422:177:41;236:42:35;;;;;;;;;;-1:-1:-1;236:42:35;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;1534:472::-;;;;;;:::i;:::-;;:::i;:::-;;160:18;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2097:333::-;2179:29;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2179:29:35;2243:180;;;;;;;;2290:4;2243:180;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2320:6;2243:180;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:9;;2243:180;;;;2396:12;2243:180;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2243:180:35;;;;-1:-1:-1;;;2243:180:35;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2243:180:35;;-1:-1:-1;2224:199:35;2097:333;-1:-1:-1;2097:333:35:o;184:20::-;;;;;;;:::i;236:42::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;236:42:35;;;-1:-1:-1;;;;236:42:35;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1534:472::-;1610:10;1597:9;:23;;1589:69;;;;-1:-1:-1;;;1589:69:35;;4067:2:41;1589:69:35;;;4049:21:41;4106:2;4086:18;;;4079:30;4145:34;4125:18;;;4118:62;-1:-1:-1;;;4196:18:41;;;4189:31;4237:19;;1589:69:35;;;;;;;;1674:9;1669:331;1693:12;:19;1689:23;;1669:331;;;1733:34;1770:12;1783:1;1770:15;;;;;;;;:::i;:::-;;;;;;;;;;1733:52;;;;;;;;1770:15;;;;;;;1733:52;;-1:-1:-1;;;;;1733:52:35;;;;;-1:-1:-1;;;1733:52:35;;;;;;;;;;;;;;;;;;1770:15;1733:52;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1799:29;1862:3;1844:6;:14;;;1832:26;;:9;:26;;;;:::i;:::-;1831:34;;;;:::i;:::-;1893:11;;1880:109;;-1:-1:-1;;;1880:109:35;;-1:-1:-1;;;;;2378:32:41;;;1880:109:35;;;2360:51:41;1799:66:35;;-1:-1:-1;1880:44:35;;;;;1799:66;;2333:18:41;;1880:109:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;1714:3:35;;1669:331;;;;1534:472;:::o;14:400:41:-;56:3;94:5;88:12;121:6;116:3;109:19;146:1;156:139;170:6;167:1;164:13;156:139;;;278:4;263:13;;;259:24;;253:31;233:11;;;229:22;;222:63;185:12;156:139;;;160:3;340:1;333:4;324:6;319:3;315:16;311:27;304:38;403:4;396:2;392:7;387:2;379:6;375:15;371:29;366:3;362:39;358:50;351:57;;;14:400;;;;:::o;419:220::-;568:2;557:9;550:21;531:4;588:45;629:2;618:9;614:18;606:6;588:45;:::i;:::-;580:53;419:220;-1:-1:-1;;;419:220:41:o;644:1565::-;855:2;844:9;837:21;818:4;893:6;887:13;936:4;931:2;920:9;916:18;909:32;964:52;1011:3;1000:9;996:19;982:12;964:52;:::i;:::-;950:66;;1065:2;1057:6;1053:15;1047:22;1137:2;1133:7;1121:9;1113:6;1109:22;1105:36;1100:2;1089:9;1085:18;1078:64;1165:41;1199:6;1183:14;1165:41;:::i;:::-;1151:55;;;1260:2;1252:6;1248:15;1242:22;1237:2;1226:9;1222:18;1215:50;1314:2;1306:6;1302:15;1296:22;1388:2;1384:7;1372:9;1364:6;1360:22;1356:36;1349:4;1338:9;1334:20;1327:66;1413:6;1448:14;1442:21;1487:6;1479;1472:22;1522:2;1514:6;1510:15;1503:22;;1581:2;1571:6;1568:1;1564:14;1556:6;1552:27;1548:36;1627:2;1611:14;1607:23;1593:37;;1648:1;1658:522;1672:6;1669:1;1666:13;1658:522;;;1737:19;;;-1:-1:-1;;1733:33:41;1721:46;;1790:13;;1835:9;;-1:-1:-1;;;;;1831:35:41;1816:51;;1922:2;1914:11;;;1908:18;1928:4;1904:29;1887:15;;;1880:54;1983:2;1975:11;;;1969:18;2024:2;2007:15;;;2000:27;;;1969:18;2050:50;;2084:15;;1969:18;2050:50;:::i;:::-;2135:2;2123:15;;;;2158:12;;;;;2040:60;-1:-1:-1;;1694:1:41;1687:9;1658:522;;;-1:-1:-1;2197:6:41;644:1565;-1:-1:-1;;;;;;;644:1565:41:o;2604:180::-;2663:6;2716:2;2704:9;2695:7;2691:23;2687:32;2684:52;;;2732:1;2729;2722:12;2684:52;-1:-1:-1;2755:23:41;;2604:180;-1:-1:-1;2604:180:41:o;2789:395::-;-1:-1:-1;;;;;2990:32:41;;2972:51;;3071:4;3059:17;;3054:2;3039:18;;3032:45;3113:2;3108;3093:18;;3086:30;;;-1:-1:-1;;3133:45:41;;3159:18;;3151:6;3133:45;:::i;:::-;3125:53;2789:395;-1:-1:-1;;;;;2789:395:41:o;3189:286::-;3248:6;3301:2;3289:9;3280:7;3276:23;3272:32;3269:52;;;3317:1;3314;3307:12;3269:52;3343:23;;-1:-1:-1;;;;;3395:31:41;;3385:42;;3375:70;;3441:1;3438;3431:12;3480:380;3559:1;3555:12;;;;3602;;;3623:61;;3677:4;3669:6;3665:17;3655:27;;3623:61;3730:2;3722:6;3719:14;3699:18;3696:38;3693:161;;3776:10;3771:3;3767:20;3764:1;3757:31;3811:4;3808:1;3801:15;3839:4;3836:1;3829:15;3693:161;;3480:380;;;:::o;4267:127::-;4328:10;4323:3;4319:20;4316:1;4309:31;4359:4;4356:1;4349:15;4383:4;4380:1;4373:15;4399:265;4472:9;;;4503;;4520:15;;;4514:22;;4500:37;4490:168;;4580:10;4575:3;4571:20;4568:1;4561:31;4615:4;4612:1;4605:15;4643:4;4640:1;4633:15;4490:168;4399:265;;;;:::o;4669:217::-;4709:1;4735;4725:132;;4779:10;4774:3;4770:20;4767:1;4760:31;4814:4;4811:1;4804:15;4842:4;4839:1;4832:15;4725:132;-1:-1:-1;4871:9:41;;4669:217::o;4891:277::-;4958:6;5011:2;4999:9;4990:7;4986:23;4982:32;4979:52;;;5027:1;5024;5017:12;4979:52;5059:9;5053:16;5112:5;5105:13;5098:21;5091:5;5088:32;5078:60;;5134:1;5131;5124:12",
    linkReferences: {},
  },
  methodIdentifiers: {
    "createdAt()": "cf09e0d0",
    "deposit(address)": "f340fa01",
    "getOwner()": "893d20e8",
    "getUserBasketOfBasketData()": "084ef211",
    "listedBasket(uint256)": "d1013f06",
    "name()": "06fdde03",
    "owner()": "8da5cb5b",
    "symbol()": "95d89b41",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.26+commit.8a97fa7a"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint8","name":"percent","type":"uint8"},{"internalType":"string","name":"image","type":"string"}],"internalType":"struct IConstant.BasketInfo[]","name":"baskets","type":"tuple[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"createdAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserBasketOfBasketData","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"createdAt","type":"uint256"},{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint8","name":"percent","type":"uint8"},{"internalType":"string","name":"image","type":"string"}],"internalType":"struct IConstant.BasketInfo[]","name":"basketTokens","type":"tuple[]"}],"internalType":"struct UserBasket.UserBasketOfBasketData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listedBasket","outputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint8","name":"percent","type":"uint8"},{"internalType":"string","name":"image","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"src/UserBaskets.sol":"UserBasket"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/=lib/openzeppelin-contracts/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":@uniswap/v2-periphery/=lib/v2-periphery/",":ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":v2-periphery/=lib/v2-periphery/contracts/"]},"sources":{"src/UserBaskets.sol":{"keccak256":"0xfe11f46c740ace7b7344d2cb0c21be37487f2ff8c6a9e64a3e4d9fee505ebd4c","license":"MIT","urls":["bzz-raw://b87ac286801b34d0b19f6dd31ea5b6aac3a41ba2beb74decec20a1fa324aea5e","dweb:/ipfs/QmbaNBPujxqJV8jpL8rYRw2JyLhYiQCCL5rGugzHtuchUT"]},"src/interface/IBasketToken.sol":{"keccak256":"0x1f20824d5a391a3dcea9d2abfc4a6ba6d97ddef08777de25cec98cacb33dbd30","license":"MIT","urls":["bzz-raw://13042d7a112c737a2b00297b40e4752930e53e851ec54fef26faeacd9ff12bc4","dweb:/ipfs/QmXRRNFfX38pgv15dNAjLp2FuiFY8oDpzA9Jgwu2aY9qrV"]},"src/interface/IConstant.sol":{"keccak256":"0x7e23227f0fdbe8e28418b3d70eb599cbaa634c7a3830e116af6b3ec69126a8a8","license":"MIT","urls":["bzz-raw://6c23a545c5ec72a2338be7286aaf9d9cf988faf0802dd3b16b709cf58e4dcecf","dweb:/ipfs/QmSPhqickvSxUswKqEGbMkuzgqFqKZDfdZSrByFdZKWAAU"]}},"version":1}',
  metadata: {
    compiler: { version: "0.8.26+commit.8a97fa7a" },
    language: "Solidity",
    output: {
      abi: [
        {
          inputs: [
            { internalType: "string", name: "_name", type: "string" },
            { internalType: "string", name: "_symbol", type: "string" },
            {
              internalType: "struct IConstant.BasketInfo[]",
              name: "baskets",
              type: "tuple[]",
              components: [
                { internalType: "address", name: "addr", type: "address" },
                { internalType: "uint8", name: "percent", type: "uint8" },
                { internalType: "string", name: "image", type: "string" },
              ],
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "createdAt",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [{ internalType: "address", name: "_to", type: "address" }],
          stateMutability: "payable",
          type: "function",
          name: "deposit",
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getUserBasketOfBasketData",
          outputs: [
            {
              internalType: "struct UserBasket.UserBasketOfBasketData",
              name: "",
              type: "tuple",
              components: [
                { internalType: "string", name: "name", type: "string" },
                { internalType: "string", name: "symbol", type: "string" },
                { internalType: "uint256", name: "createdAt", type: "uint256" },
                {
                  internalType: "struct IConstant.BasketInfo[]",
                  name: "basketTokens",
                  type: "tuple[]",
                  components: [
                    { internalType: "address", name: "addr", type: "address" },
                    { internalType: "uint8", name: "percent", type: "uint8" },
                    { internalType: "string", name: "image", type: "string" },
                  ],
                },
              ],
            },
          ],
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
          name: "listedBasket",
          outputs: [
            { internalType: "address", name: "addr", type: "address" },
            { internalType: "uint8", name: "percent", type: "uint8" },
            { internalType: "string", name: "image", type: "string" },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
        },
      ],
      devdoc: { kind: "dev", methods: {}, version: 1 },
      userdoc: { kind: "user", methods: {}, version: 1 },
    },
    settings: {
      remappings: [
        "@openzeppelin/=lib/openzeppelin-contracts/",
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "@uniswap/v2-periphery/=lib/v2-periphery/",
        "ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "v2-periphery/=lib/v2-periphery/contracts/",
      ],
      optimizer: { enabled: true, runs: 200 },
      metadata: { bytecodeHash: "ipfs" },
      compilationTarget: { "src/UserBaskets.sol": "UserBasket" },
      evmVersion: "paris",
      libraries: {},
    },
    sources: {
      "src/UserBaskets.sol": {
        keccak256:
          "0xfe11f46c740ace7b7344d2cb0c21be37487f2ff8c6a9e64a3e4d9fee505ebd4c",
        urls: [
          "bzz-raw://b87ac286801b34d0b19f6dd31ea5b6aac3a41ba2beb74decec20a1fa324aea5e",
          "dweb:/ipfs/QmbaNBPujxqJV8jpL8rYRw2JyLhYiQCCL5rGugzHtuchUT",
        ],
        license: "MIT",
      },
      "src/interface/IBasketToken.sol": {
        keccak256:
          "0x1f20824d5a391a3dcea9d2abfc4a6ba6d97ddef08777de25cec98cacb33dbd30",
        urls: [
          "bzz-raw://13042d7a112c737a2b00297b40e4752930e53e851ec54fef26faeacd9ff12bc4",
          "dweb:/ipfs/QmXRRNFfX38pgv15dNAjLp2FuiFY8oDpzA9Jgwu2aY9qrV",
        ],
        license: "MIT",
      },
      "src/interface/IConstant.sol": {
        keccak256:
          "0x7e23227f0fdbe8e28418b3d70eb599cbaa634c7a3830e116af6b3ec69126a8a8",
        urls: [
          "bzz-raw://6c23a545c5ec72a2338be7286aaf9d9cf988faf0802dd3b16b709cf58e4dcecf",
          "dweb:/ipfs/QmSPhqickvSxUswKqEGbMkuzgqFqKZDfdZSrByFdZKWAAU",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  id: 35,
};
