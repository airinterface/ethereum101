# Add ethereum wallet functionality

<img src="https://github.com/airinterface/ethereum101/assets/2448586/5bc6a10c-8cfd-4b98-91dc-0abb195fc5fe" style="max-width: 100%;border:  solid 1px black;" /> 


## Wallet とアカウントの状態を更新する。　/ Check wallet and account status


1. **Ethereumライブラリの追加**: プロジェクトにEthereumライブラリを追加して、ユーザーのウォレット（たとえばMetaMask）に接続します。

2. **ウォレットの利用可能性の確認**: コンポーネントを表示する際に、ユーザーがウォレットをインストールしているかどうかを確認します。ウォレットが検出された場合は、次のステップに進みます。

3. **アカウント状態のリスナーの追加**: ウォレットの利用可能性が確認されたら、ユーザーのアカウント状態の変更（ログインやログアウトなど）を監視するリスナーを設定します。

4. **アカウント接続のリクエスト**: ウォレットが接続されているがアカウントが利用できない場合は、ユーザーにアカウントを接続するよう促します。これには、ウォレットにアカウントへのアクセス許可を求めるリクエストを送信します。承認された場合は、ブロックチェーンとのやり取りにそのアカウントを利用できるようにします。

<br/>


1. **Add Ethereum library**: Include the Ethereum library in your project to connect to the user's wallet, such as MetaMask.

2. **Check for wallet availability**: Upon rendering your component, verify if the user has a wallet installed. Proceed to the next steps if a wallet is detected.

3. **Add account status listener**: Once wallet availability is confirmed, set up a listener to monitor changes in the user's account status, such as login or logout events.

4. **Request account connection**: If the wallet is connected but no account is available, prompt the user to connect their account. This involves sending a request to the wallet to obtain permission to access their account. Upon approval, proceed with utilizing their account for blockchain interactions.
