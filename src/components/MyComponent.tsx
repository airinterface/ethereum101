import React from 'react';

// プロパティの型を定義
interface MyComponentProps {
  active: boolean
  title: string
}


/*
Here it takes boolean type active / string type title. 

 */
const MyComponent: React.FC<MyComponentProps> = ({active, title})=> {

  return <div className={ active?"active":""}>
      {title}
      </div>
}

export default MyComponent;