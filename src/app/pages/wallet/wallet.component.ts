import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  RadixDappToolkit,
  RadixNetwork,
  DataRequestBuilder,
  Logger,
  WalletDataStateAccount
} from '@radixdlt/radix-dapp-toolkit'
import { GatewayApiClient } from "@radixdlt/babylon-gateway-api-sdk";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
  
  public accounts?: WalletDataStateAccount[];

  private rdt = RadixDappToolkit({
    dAppDefinitionAddress:
      'account_tdx_2_129m6s0exegqqza8wmpvj8x3fpl22xhv84s29xx3gh4rmnn3kyg3qhg',
    networkId: RadixNetwork.Stokenet,
    applicationName: 'Radix Web3 dApp',
    applicationVersion: '1.0.0',
    logger: Logger(1),
  })

  private gatewayApi = GatewayApiClient.initialize(this.rdt.gatewayApi.clientConfig); 
  

  ngOnInit() {
    this.rdt.walletApi.setRequestData(DataRequestBuilder.accounts().atLeast(1));

    this.rdt.walletApi.walletData$.subscribe((walletData) => {
      this.accounts = walletData.accounts;
      console.log(walletData);
    });

  }
}
