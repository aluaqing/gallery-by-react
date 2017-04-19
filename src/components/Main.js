require('normalize.css/normalize.css');
require('styles/App.css');
//require('styles/App.scss');



import React from 'react';
//获取图片相关的数据
let imageDatas=require('../data/imageDatas.json');
//利用自执行函数，将图片名信息转换为图片URL地址信息
imageDatas=(function genImageURL(imageDatasArr){
  for(var i=0,j=imageDatasArr.legnth;i<j;i++){
    var singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require("../images/"+singleImageData.fileName);
    imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <setction className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </setction>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
