import Api from './Api'

class ContactService {
  static sendEmail (params) {
    return Api().post('/contact',{
      "id": 1,
      "names": params.names,
      "email": params.email,
      "message": params.message,
    });
  }
}

export default ContactService;