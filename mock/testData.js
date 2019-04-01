// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
    // 支持值为 Object 和 Array
    // GET POST 可省略
    '/api/testData':[
        {
            data:1
        },
        {
            data:2
        }
    ],
    '/api/testPostData':(req, res) => {
      const { id } = req.body;
      console.log("id",id)
      // console.log("req",req)
      // console.log("res",res)
    },
  };
  