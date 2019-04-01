import request from '@/utils/request';

export async function queryTestData() {
  return request('/api/testData');
}
export async function queryPostTestData(params) {
  console.log("ininin",params)
  return request('/api/testPostData',{
    method:'POST'
  });
}
