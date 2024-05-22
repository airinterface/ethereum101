# CSS を　SASS　にしてみる。 / Convert css to sass

## SASS

ここではCSSをSASSにします。よく使う色などをThemeとしてassets/styles/variables.scss に
保管し、それをimportして、他のSASSFileで使います。

SASSの説明は[こちら](https://sass-lang.com/documentation/syntax/)

*CSSをSassに変換する目的は次の通りです：*




    保守性の向上:
    Sassは、ネストや変数、ミックスインなどの機能を提供し、CSSの構造をより論理的かつ整理された形にすることができます。これにより、スタイルシートの保守が容易になります。

    再利用性の向上:
    変数やミックスインを使用することで、共通のスタイルやパターンを一箇所にまとめることができ、再利用性が向上します。これにより、一貫性のあるデザインが保たれ、開発効率も向上します。

    効率的な開発:
    Sassは、計算機能やループ機能を提供し、複雑なスタイルの計算や生成を自動化できます。これにより、手作業によるミスを減らし、開発時間を短縮できます。

    階層的なスタイル管理:
    Sassはネスト機能を提供し、CSSセレクタを階層的に記述することができます。これにより、スタイルシートが読みやすくなり、特定の要素に関連するスタイルを一目で把握できるようになります。

    モジュール化:
    Sassでは、パーシャル（部分ファイル）を使用してスタイルシートを小さなモジュールに分割できます。これにより、大規模なプロジェクトでもスタイルシートを効率的に管理することができます。

これらの機能を活用することで、CSSの管理と開発がより効率的かつ効果的になります。そのため、CSSをSassに変換することが推奨されています。


## SASS 

Here, we will convert CSS to Sass. Frequently used colors and other variables will be stored as a theme in assets/styles/variables.scss. This file will be imported and used in other Sass files.

*The purpose of converting CSS to Sass is as follows:*

    Improved Maintainability:
    Sass provides features like nesting, variables, and mixins, which help structure CSS in a more logical and organized manner. This makes the stylesheet easier to maintain.

    Increased Reusability:
    By using variables and mixins, common styles and patterns can be centralized, enhancing reusability. This ensures design consistency and improves development efficiency.

    Efficient Development:
    Sass offers functions for calculations and loops, automating the generation of complex styles. This reduces manual errors and shortens development time.

    Hierarchical Style Management:
    Sass's nesting feature allows CSS selectors to be written hierarchically. This makes the stylesheet more readable and helps quickly identify styles related to specific elements.

    Modularization:
    Sass allows the use of partials to break down the stylesheet into smaller modules. This enables efficient management of stylesheets even in large projects.

By leveraging these features, managing and developing CSS becomes more efficient and effective. Therefore, converting CSS to Sass is recommended.