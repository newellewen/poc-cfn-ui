import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  RadixDappToolkit,
  RadixNetwork,
  DataRequestBuilder,
  Logger,
} from '@radixdlt/radix-dapp-toolkit'
import { GatewayApiClient } from "@radixdlt/babylon-gateway-api-sdk";

@Component({
  selector: 'app-wallet',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
  
  private rdt = RadixDappToolkit({
    dAppDefinitionAddress:
      'account_tdx_2_129m6s0exegqqza8wmpvj8x3fpl22xhv84s29xx3gh4rmnn3kyg3qhg',
    networkId: RadixNetwork.Stokenet,
    applicationName: 'Radix Web3 dApp',
    applicationVersion: '1.0.0',
    logger: Logger(1),
  })

  private gatewayApi = GatewayApiClient.initialize(this.rdt.gatewayApi.clientConfig); 
  public entityData: any;

  ngOnInit() {
    this.rdt.walletApi.setRequestData(DataRequestBuilder.accounts().atLeast(1))
    // Subscribe to updates to the user's shared wallet data
    this.rdt.walletApi.walletData$.subscribe((walletData) => {
      console.log("subscription wallet data: ", walletData);
    })
    // let thing = this.gatewayApi.state.getEntityDetailsVaultAggregated('account_tdx_2_129m6s0exegqqza8wmpvj8x3fpl22xhv84s29xx3gh4rmnn3kyg3qhg');
    // thing.then(data => {
    //   console.log('account');
    //   console.log(data);
    //   this.entityData = data;
    // });

    // this.gatewayApi.state.getAllEntityMetadata('resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc')
    // .then(data => {
    //   console.log(data);
    // });

    // this.rdt.walletApi.walletData$.subscribe((walletData) => {
    //   console.log("connected wallet data: ", walletData);
      
    //   let account = walletData.accounts[0];
    //   console.log("Account: ", account);
    // });

  }
}
