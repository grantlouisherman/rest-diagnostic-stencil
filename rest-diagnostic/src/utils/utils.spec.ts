import { shouldConstructFetchRequest, iconResolver } from './utils';
//const { method, headers, url, checkbox } = fetchInfo
describe('shouldConstructFetchRequest', () => {
  it('should return data that has body', async () => {
    let data = await shouldConstructFetchRequest({
      fileId: 0,
      method:'GET', 
      headers: {}, 
      url:'https://jsonplaceholder.typicode.com/posts/1',
      checkbox: true
    })
    expect(data).toEqual({
      status: 404,
      responseBody: {
        data: "Not Found"
      },
        fileId: 0
    });
  });
  it('should return data that has no body', async () => {
    let data = await shouldConstructFetchRequest({
      fileId: 0,
      method:'GET', 
      headers: {}, 
      url:'https://jsonplaceholder.typicode.com/posts/1',
      checkbox: false
    })
    expect(data).toEqual({
      status: 404,
      responseBody: 'You opted to not include the body. Click on the checkbox to include it',
      fileId: 0
    });
  });
  it('should return an error', async () => {
    let data = await shouldConstructFetchRequest({
      fileId: 0,
      method:'GET', 
      headers: {}, 
      url:null,
      checkbox: false
    })
    expect(data).toEqual({
      status: 500,
      responseBody: "There was an error: Error: missing url input for mock fetch()",
      fileId: 0
    });
  });
});

describe('iconResolver', () => {
  it('should return teal color', () => {
    expect(iconResolver(200)).toEqual('teal');
  });
  it('should return yellow color:404', () => {
    expect(iconResolver(404)).toEqual('yellow');
  });
  it('should return yellow color:500', () => {
    expect(iconResolver(500)).toEqual('yellow');
  });
})
