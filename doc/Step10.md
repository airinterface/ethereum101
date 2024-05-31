# React の　Hookを使ってみる　/ Use React Hook

<div style="border:1px solid black;display:inline-block">
<img src="https://github.com/airinterface/ethereum101/assets/2448586/8664508a-362c-4b98-a72d-26e02e27d6e7" style="border:1px solid black; width:500px" />
</div>




[Wagmi](https://wagmi.sh/)ライブラリは複雑な手順を隠し、重要な状態を提供します。
こういう目的はいろいろなHookでも利用されます。
ここではWagmiでメタマスクのアカウントのステータスをこのHookで管理します。



その中でも、Wagmiだけでは動的に状態がNetworkとアカウントがつながった推移したときに変化がなかったので、
前回のAddEventListenerを利用しています。


今回はコネクターはこのままMetamaskだけをつかっているという設定で、
行っています。
今回は、WalletWrapperというReactのコンテクストを作り、Wagmi関係の状態を
そこに入れました。



The [Wagmi](https://wagmi.sh/) library wraps complex steps and provides the essential state that matters.
This concept is used as a hook in many libraries.
Here we will use wagumi to check account status.


Within that context, since Wagmi alone didn't dynamically update the state when the network and account connection changed, we are using the AddEventListener from the previous implementation.



This time, we are proceeding with the setup where the connector is used only with Metamask. We have created a React context called WalletWrapper, and we have included the Wagmi-related state in it.





# Install


下記にそって、wagmi と wagmiが必要とする、@tanstack/react-query
をインストールする。


Following the instructions below, install wagmi and @tanstack/react-query, which is required by wagmi.



```
npm install wagmi @tanstack/react-query  -s
```


# React の[コンテクスト](https://react.dev/reference/react/useContext#usecontext) を使い、ステートを制御する。/ Use React's [context](https://react.dev/reference/react/useContext#usecontext) to control state



状態は下記の状態のように取得でき、変化します。
現在、unhandledRejection: Error: You must provide dAppMetadata option　というエラーが出ますが、検査中です。

The state can be retrieved and changes as shown below. Currently, I am encountering the error "unhandledRejection: Error: You must provide dAppMetadata option," but still under investigation 

```
import { useWalletContext, WalletStateTypes, WalletActionTypes, Web3Status } from '@/context/WalletWrapper'

...

const [ state ] = useWalletContext();
const { walletState } = (state as WalletStateTypes );


```


wallet の　状態は下記になります。

wallet state changed as below

```
WalletExists = 'Wallet exists',
AccountConnected = 'Account connected',
NoWallet = 'No wallet'
```


