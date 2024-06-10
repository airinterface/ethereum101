# コントラクトを使用　・　Use Contract


## Tailwindでフォームを見やすくする。

[こちら](https://tailwindcss.com/docs/guides/nextjs) をもとに、Install

Install　based on [this instruction](https://tailwindcss.com/docs/guides/nextjs) 

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

tailwind.config.js に下記を追加。　Add below file　in tailwind.config.js

```
//tailwind.config.js
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


```

postcss.config に書きを追加します。

```

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```



次からがメインです。 / Lets go to the main task.


## Wrap forge script in npm 


Step1２でしたBuildとデプロイはContractのフォルダーで、Forgeをつかってしましたが、ここではそれを更に、Nodeのスクリプトに移動します。

またそれと同時に、環境設定ファイルも同一にします（ルートに置きます）

In Step 12, we built and deployed the contract using Forge in the contract folder. Here, we will move that process to a Node.js script.

Also, we will unify the .env file to set environment variable. 


### Chain を　設定　/ Configure Chain 

WagmiのライブラリはViewmを使って、ネットワーク設定を取り入れるので、
Wagmi depends on the viem library for the chain type

```
npm install --save viem
``` 

### Anvil をスタート 

Anvilをスタートさせ、プライベートキーを取得。

Start Anvil and get the private key

```
npm run anvil
```


![Screenshot_2024-06-09_21-10-11](https://github.com/airinterface/ethereum101/assets/2448586/94b978d2-c3bd-45c6-8244-e891ef3eabe6)




一番目のプライベートキーをコピーし .envに記載　・　Get the first private key and write down .env


```
FORGE_PRIVATE_KEY=<Private Key here>
```



## Contractをビルドし、Deploy　・　Build and Deploy Contract

もう一つのターミナルを開けて、コントラクトをDeployします。

Open Another terminal and deploy contract 

```
$ > npx dotenv-run-script deploy

Deployer: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Deployed to: <Contract Address> <-- Copy
Transaction hash: 0x936dcebd8ca934ffa91b1a1c789d762e056611ba545be061201a6b273bd89b3b
```

![Screenshot_2024-06-09_21-34-25](https://github.com/airinterface/ethereum101/assets/2448586/6a4e2d82-a2d0-4f52-8ba0-141819e76577)


Deploy　されたアドレスをコピー
Write down Deploy address in this case 0x5... 

```
FORGE_PRIVATE_KEY=<Private Key here>
FORGE_RPC_URL=http://127.0.0.1:8545
FORGE_CONTRACT_ADDRESS=<Deployed Contract address>
```



## wagmi を使って、Interfaceを作る。 / Use wagmi to generate interface to contract

```
npx dotenv-run-script .env wagmi 
```

Reference: [https://github.com/geniusgarlic/CheckMates/tree/master](https://github.com/geniusgarlic/CheckMates/tree/master)


## AnvilのNetworkを設定。/ Set Anvil Network. 

src/config.ts に　getWagmiConfig　の メソッドを作り、MetaMaskのConnectorを
Dynamicにアプリの情報を摂取できるようにする。


## Metamask にAnvilを設定。


下記のように新しい、ネットワークを追加。

Add New Network as below 




ネットワークにつなげてアカウントをインポートします。
インポートするには、どれか、Anvilのアカウントのプライベートキーを使用します。
( １番目はコントラクトをつくるのに使用したので、もしかしたら、２番めの方がいいかもしれません。 )


After Connecting to the anvil network, import account using private key from anvil. 
( may be use the second private key since first one has contract )



## Contractを追加してみる。

Contractの関係はすべて、src/context/ContractContextに追加しました。
ここから、useContractContext　を使用し、Read/Writeのアクションができるようになります。
これはcomponents/RegisterForm.tsxで使用されているので、見てみてください。


All contract-related actions has been added to src/context/ContractContext. From here, you can use useContractContext to perform read/write actions. This is used in components/RegisterForm.tsx, so please take a look there.



アプリをスタート
Start the Application

```
npm run dev
``` 

Metamaskを使用し、先程追加したAnvilのネットワークにつなげ、Importしたアカウントにつなげます。

Using Metamask, connect to the Anvil network that was added earlier and connect to the imported account.


もし、アドレスがでなかった場合はアカウントを変えて、戻ってくると、変わると思います。
Anvilのアカウントと確認されると、Formが出てきます。

If the address doesn't appear, try switching accounts and returning; it should change. Once the Anvil account is detected, the form will appear.


TextのデータをSubmitし、Anvilに書き込まれたことを確認してみてください。

Submit the text data and confirm that it has been written to Anvil.


![Screenshot_2024-06-09_20-33-34](https://github.com/airinterface/ethereum101/assets/2448586/be1566a9-8093-4e6c-870d-f1a4072c5ae2)


![Screenshot_2024-06-09_20-46-46](https://github.com/airinterface/ethereum101/assets/2448586/46efeb52-7488-4186-a591-4831dcc80ab9)







