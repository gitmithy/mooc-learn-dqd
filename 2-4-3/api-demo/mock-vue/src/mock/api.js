import mock from 'mockjs'

mock.mock('http://your.domain.com/test', {
  'users|1-10': [{
    'id|+1': 1,
    'name': '@cname',
    'city': '@city',
    'image': '@image'
  }]
})
