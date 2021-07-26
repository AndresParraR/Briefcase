import Api from './Api'

class RoleService {
  static getAll () {
    return Api().get('/role')
  }
}

export default RoleService; 