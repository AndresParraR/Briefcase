<template>
  <v-card>
    <v-card-title>
      <v-col cols="12" sm="5" class="order-search">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="2" class="text-right order-icon">
        <v-btn
          color="primary"
          ref="addUser"
          dark
          class="mr-5"
          @click="dialog =  true"
          icon
          large
        ><v-icon>person_add</v-icon></v-btn>
        <v-btn icon small @click="getUsers()"><v-icon color="primary">refresh</v-icon></v-btn>
      </v-col>
    </v-card-title>

    <v-data-table
      :headers="headers"
      ref="dataTableUsers"
      :items="users"
      :search="search"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="700px">
            <v-card style="padding: 20px 0px">
              <v-card-title class="justify-center">
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-form ref="form" v-model="valid" class="row">
                    <v-col cols="12" md="6">
                      <v-text-field ref="firstName" @keyup.enter="save" v-model="editedItem.firstName" :rules="firstNameRules" label="Name" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field ref="lastName" @keyup.enter="save" v-model="editedItem.lastName" :rules="lastNameRules" label="LastName" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field ref="email" @keyup.enter="save" v-model="editedItem.email" :rules="emailRules" label="Email" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-select ref="role" @keyup.enter="save" v-model="editedItem.roleId" label="Role" :items="roles" item-text="name" item-value="id" required></v-select>
                    </v-col>
                    <v-col cols="12" md="6" class="text-right">
                      <v-checkbox ref="active" color="green" v-model="editedItem.active" label="Activate" hide-details required></v-checkbox>
                    </v-col>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions class="justify-center">
                <v-btn large dark color="red darken-1 mr-15" @click="close">Cancel</v-btn>
                <v-btn ref="submit" large dark color="green darken-1" :disabled="!valid" @click="save">sAVE</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.fullName="{ item }">
        {{item.firstName + ' ' +item.lastName}}
      </template>

      <template v-slot:[`item.active`]="{ item }">
        <v-icon :color="getColor(item.active)" dark>{{ getActive(item.active) }}</v-icon>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn icon @click="editItem(item)" id="editUser" ref="editUser">
          <v-icon
            small
            class="mr-2"
          >
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-icon
          small
          class="mr-2"
          @click="deleteItem(item)"
        >
          delete
        </v-icon>
      </template>
    </v-data-table> 
  </v-card>
  
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    created() {
      this.getUsers()
      this.$store.dispatch('GET_ROLES')
    },
    data: () => ({
      dialog: false,
      valid: true,
      items:[
        {
          fullName: 'John Doe',
          email: 'johndoe@gmail.com',
          roleName: 'Administrator',
          active: false,
        },
        {
          fullName: 'Alejandro Test',
          email: 'alejandrotest@gmail.com',
          roleName: 'Administrator',
          active: true,
        },
      ],
      firstNameRules: [
        v => !!v || 'El nombre es requerido'
      ],
      lastNameRules: [
        v => !!v || 'El apellido es requerido'
      ],
      emailRules: [
        v => !!v || 'El correo es requerido',
        v => /.+@.+\..+/.test(v) || 'El correo debe ser valido',
      ],
      search: '',
      headers: [
        {
          text: 'Full Name',
          align: 'start',
          value: 'fullName',
        },
        { text: 'Email', value: 'email' },
        { text: 'Rol', value: 'roleName' },
        { text: 'Active', value: 'active' },
        { text: 'Actions', value: 'actions', sortable: false, align: 'center' },
      ],
      editedIndex: -1,
      editedItem: {},
      defaultItem: {
        id: 0,
        firstName: '',
        lastName: '',
        user: '',
        email: '',
        roleName: '',
        // active: false,
      },
    }),

    computed: {
      ...mapState(['users', 'roles',]),
      formTitle () {
        return this.editedIndex === -1 ? 'Create User' : 'Edit User'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
        if(this.valid==false){
          this.$refs.form.resetValidation()
          //this.editedItem.roleName = 'Administrator'
        }
      },
    },

    methods: {
      getUsers (){
        this.$store.dispatch('GET_USERS')
      },
      getActive (active) {
        if (active == true) return 'check_circle'
        else return 'remove_circle'
      },
      getColor (active) {
        if (active == true) return 'green'
        else return 'red'
      },

      deleteItem(item) {
        let user = Object.assign({}, item)
        this.$store.dispatch('DELETE_USER', user)
      },

      editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = {}
          this.editedIndex = -1
        })
      },

      save () {
        if(this.valid){
          let user = Object.assign({}, this.editedItem)
          user.id = this.editedIndex > -1 ? user.id : 0
          if(this.editedIndex > -1){
            this.$store.dispatch('PUT_USER', user)
          }else{
            this.$store.dispatch('POST_USER', user)
          }
          this.close()
        }
      },
    },
  }
</script>

<style scoped>
  .darken-1{
    margin: 0px 10px;
  }
  @media (max-width: 600px){
  .order-search{
   order: 2; 
  }
  .order-icon{
    order: 1;
  }
}
</style>