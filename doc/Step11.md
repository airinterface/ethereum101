# Create Contract Development environment / Contractの開発環境を作る。

Foundry は　ローカルでのテストやデポロイする環境を作ります。ローカルでNetWorkを作るにはAnvilというToolを使います。

Foundry creates an environment for local testing and deployment. To create a local network, you use a tool called Anvil.


## Install foundry / Foundry をインストールする。

下記のコマンドか[こちら](https://book.getfoundry.sh/getting-started/installation) を見て、Foundryをインストールする。

Follow [here](https://book.getfoundry.sh/getting-started/installation) or type below command to install Foundry. 

```
curl -L https://foundry.paradigm.xyz | bash
```
このコマンドのあとに、Shellを一旦閉じるか、source `${HOME}/.bashrc`
などのコマンドを打つか説明書きが出てきます。それに従ってください。

After this command, a message will appear instructing you to either close the shell temporarily or enter a command like source ${HOME}/.bashrc. Please follow those instructions.

その次に、下記をタイプする　・　Next, type this command 
```
foundryup
```

![Screenshot_2024-05-31_23-03-30](https://github.com/airinterface/ethereum101/assets/2448586/7305815b-065a-4a3d-b944-adc18ab47f2d)



## 開発用のフォルダーに移動します。 Move to  Development Folder


コントラクトを下のコマンドでビルドしてみます。

Type below command and see if you can build contract.

```
cd contract/
forge build

[⠊] Compiling...
[⠆] Installing Solc version 0.8.26
[⠰] Successfully installed Solc 0.8.26
[⠒] Compiling 27 files with Solc 0.8.26
[⠘] Solc 0.8.26 finished in 1.15s
Compiler run successful!

```
