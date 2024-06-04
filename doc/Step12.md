# Created a local network and deploy / ローカルネットワークの作成とデプロイ

ここでは、ローカルネットワークを開始します。
Anvilは、Ganacheのように、Forge環境でローカルにコントラクトをデプロイおよびテストするために作成されたツールです。


Here we are starting the local network. 
Anvil is like a ganache created for forge environment to deploy & test contract 
locally. 



## 1. Starting a local network. / ローカルネットワークの開始

1. 別のターミナルを開き、コントラクトディレクトリに移動します
Open up another terminal and move to contract directory 


```
$> cd contract$
$> anvil
```

* 開かない場合はPathが通ってない場合があるので、
source ~/.bash_rc　を　してみてください。

If you can't run anvil, try reinitializing bash by typing 
source ~/.bash_rc 


Anvilを走らせると下記のデータが見れます。/ When you run Anvil, you see these line 

```
Private Keys
==================

(0) 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
(1) 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
(2) 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a
...
```

Choose the private key (0) for later process When you setting .env file. 
このあとのDeployで PrivateKeyの（０）を使用して.envに書き足します。

* Anvilを閉じるとデータはすべてなくなるので、注意してください。

* If you turn off Anvil, data would be cleared.

## 2. Code / Code

このコードは簡単で、Registerをすれば、そのデータがBlockChainに残り、
registerしたアドレスも残るというもの。

This code is very simple. You register the data. And it stays 


## 3. Test / テスト

contract/test folder の中にあるテストを実行します。　 / Perform tests written under contract/test  folder. 

![Test](https://github.com/airinterface/ethereum101/assets/2448586/9d5a3b4f-e399-49a6-8923-fbf0d0dec514)



## 4. Deploy / デポロイ

### 環境Value　設定

"contract" の直下に.env ファイルを作ります。　・　Create .env file under the "contract" Folder. 
注意）こちらはGithubには登録しないので、.gitignoreの中に、.envが入ります。

This enables differenciating where to deploy. For this time, it's under anvil local network. 
Note ) .env file will not get commited to github. So added .env to the .gitignore file.


```
PRIVATE_KEY=<YOUR_PRIVATE_KEY_HERE from step1 >
RPC_URL=http://127.0.0.1:8545
```

foundry.toml ファルに書きを追加します。
これは、環境variableを.env ファイルから取得するように設定しています。

Add below in foundry.toml. This means that 
environment variable is loaded from .env file. 

```
[profile.default]
dotenv = ".env"
```
### DeployScript作成

script/deploy.shを作成し、
環境ファイルからRPCのURL（ネットワークのURL)を設定できるようにしました。

Create a file script/deploy.sh
to be able to load RPCURL( Network Address ) from enviornment variable. 

下記のコマンドをうち、スクリプトとして実行できるファイルにします。
Run the following command to make the script executable:



```
chmod +x deploy.sh
```

![deploySuccess](https://github.com/airinterface/ethereum101/assets/2448586/d87725a1-abcb-41ef-b78f-f8335f242951)


AnvilのTerminalでこのようにログが出ます。Deployされたアドレス(赤線）をコピーします。
In Anvil terminal, you will see below log. 　Copy the address that are underlined in red. 



![ContractCreated](https://github.com/airinterface/ethereum101/assets/2448586/9b1774ea-e0c1-4747-81cb-40efc015937b)


データが登録されたことを確認するために下記をタイプしてください。

Confirm data is registered, type below. 




```
CONTRACT_ADDRESS=<Address that is created > 
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getCode","params":["'"$CONTRACT_ADDRESS"'", "latest"],"id":1}' -H "Content-Type: application/json" http://127.0.0.1:8545

```

See if it's successfully deployed. 






