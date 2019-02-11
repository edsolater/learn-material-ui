备注：
只有在需要强调集合的语义下，用名词的复数形式

文档结构：

- # miniShop

  - ## index.js（composition component）

  - ## JSclass

    > 挂载在全局对象 window 之下

    - [Item.js]()
    - [Board.js]()
    - [Button.js]()
      - location
      - duty
    - [DOMRect.js]() 对已有 DOMRect 类型的补充

  - ## components

    > 不妨把 mapStateToProps 直接定义在组件文件中

    item

    - [BaseItem.js]()
    board

    - [BaseBoard.js]()
    - [ShelfBoard.js]()
    - [UserBoards.js]()
    - [Favorites.js]()

    button

    - [BaseButton.js]()
    - [buttonFactory.js]() 返回按钮组件的超高阶模式 signature: ()=>Component

    其他

    - [ShopBar.js]()

  - ## redux  
    - ### reducers （服务于相关操作命令的函数们）

      - [app.js]()
      - [item.js]()
      - [board.js]()
    
    - ### actionCreators
    
    - ### selectors
    
    - ### store （reducer tree）
  - bootstrap
