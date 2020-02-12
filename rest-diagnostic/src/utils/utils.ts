

export const shouldConstructFetchRequest = (fetchInfo: any) => {
  const { method, headers, url, checkbox } = fetchInfo
  const query = method != 'GET' ? fetchInfo.query : null
  const body = method != 'GET' ? JSON.stringify({ query }) : null
  let restStatus;
  return fetch(url, {
    method,
    mode: 'cors',
    headers,
    body
  }).then(res => {
    restStatus = res.status
    return res.json()
  })
    .then(call => ({
      status: restStatus,
      responseBody: checkbox ? call : 'You opted to not include the body. Click on the checkbox to include it',
      fileId: fetchInfo.fileId
    })).catch(err => ({
      status: 500,
      responseBody: `There was an error: ${err}`,
      fileId: fetchInfo.fileId
    }))
}

export const iconResolver = responseCode => {
  if( responseCode >= 200 && responseCode < 400 ){
    return "teal"
  } else if(responseCode){
    return "yellow"
  }
  return null

}