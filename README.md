# ethereum101

# Objective
Step by step learning basic state in front end with Ethereum, React, Typescript
ステップごとの　Ethereum、TypeScript、React　のフロントエンドを学んでいきます。

# Prerequisites / 前提条件

Before you begin, ensure you have met the following requirements:
このプロジェクトを始める前に、以下の要件を満たしていることを確認してください：

- **Node.js**: 
  You need Node.js installed to run this project. You can download it from [Node.js official website](https://nodejs.org/).
  このプロジェクトを実行するにはNode.jsがインストールされている必要があります。[Node.jsの公式ウェブサイト](https://nodejs.org/)からダウンロードできます。
- **Git**: 
  リポジトリをクローンするためにGitがインストールされている必要があります。[Gitのウェブサイト](https://git-scm.com/downloads)で指示に従ってインストールしてください。
  Git must be installed to clone the repository. Instructions are available on the [Git website](https://git-scm.com/downloads).


## インストール方法

**ethereum101**をインストールするには、以下の手順に従ってください。

Follow below instruction to setup.


1. **リポジトリをクローンする / Clone repository**
   ```bash
   git clone https://github.com/airinterface/ethereum101.git
   cd ethereum101

2. **試したいレッスンのブランチを確認’・ Find out which branch you want to try.**

| branch name  | Description    | diff  (差を見る) |
|:-------------|:-------------- |:--------------------|
| step1   <img src="https://github.com/airinterface/ethereum101/assets/2448586/835a4898-6d08-4fc2-9749-fc8c2c650ff8" width=50 style="max-width: 100%;border:  solid 1px black;" /> | JavascriptでHelloworld<br>Show Hello world in Javascript| N/A         |
| [step2](./doc/Step2.md)   <img src="https://github.com/airinterface/ethereum101/assets/2448586/835a4898-6d08-4fc2-9749-fc8c2c650ff8" width=50 style="max-width: 100%;border:  solid 1px black;" /> | TypescriptとLintに変換<br>Convert to TypeScript and Lint| [diff](https://github.com/airinterface/ethereum101/compare/step1...step2)      |
| step3 | DOMNodeをJSでページに追加します。<br> Create DOM Node and append to the page. | [diff](https://github.com/airinterface/ethereum101/compare/step2...step3)      |
| step4 | DOMNodeにイベントリスナーとスタイルを足しました。<br> Added EventListener and Style to DOM Node. | [diff](https://github.com/airinterface/ethereum101/compare/step3...step4)      |
| [step5](./doc/Step5.md) | Reactを使い、JSXでDOMを生成する。<br>Switched with React, and use JSX to render the DOM | [diff](https://github.com/airinterface/ethereum101/compare/step4...step5)      |
| [step6](./doc/Step6.md) <img src="https://github.com/airinterface/ethereum101/assets/2448586/7bf02212-d931-4fa4-9c2f-c02a969a8e31" width=50 style="max-width: 100%;border:  solid 1px black;" /> | SASSを導入しCSSと変える。<br>Switched CSS with SASS | [diff](https://github.com/airinterface/ethereum101/compare/step5...step6)      |
| [step7](./doc/Step7.md) | Componentを作り利用し、ステートとつなげてみる<br>Create and reuse component and connect with state | [diff](https://github.com/airinterface/ethereum101/compare/step6...step7)      |


3. **依存関係をインストールする**

    前の依存ライブラリを消去

    remove previous dependencies

    ```
    rm -rf node_modules
    ```
    
    ブランチをチェックアウト

    Checkout branch ( replace with <branch> below )


    ```
    git reset --hard
    git checkout <branch>
    ```


    今の依存ライブラリをインストール


    install current dependencies


    ```

    npm install
    ```

## ローカルでの実行方法

ローカルでプロジェクト名を実行するには、以下のコマンドをターミナルで実行します。
See work in dev enironment, type below command in terminal

    ```
    npm run dev
    ```

ステップ１,2, 3は
For step 1, 2, 3

Click this link [http://localhost:3000](http://localhost:3000)
[http://localhost:3000](http://localhost:3000) に行きましょう。
