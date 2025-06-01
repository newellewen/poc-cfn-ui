import { Routes } from '@angular/router';
import { WalletComponent } from './pages/wallet/wallet.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';

export const routes: Routes = [
    { path: 'wallet', component: WalletComponent },
    { path: 'sandbox', component: SandboxComponent }
  ];
