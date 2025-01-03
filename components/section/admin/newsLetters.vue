newsletters
<template>
  <div>
    <v-container>
      <v-data-table :headers="headers" :items="newsletters" :loading="loading">
        <template v-slot:top>
          <v-toolbar flat color="primary">
            <v-toolbar-title>News Letters</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ props }">
                <v-btn
                  :icon="`mdi-plus`"
                  height="40"
                  variant="text"
                  width="40"
                  class="ma-2 mr-5"
                  border
                  dark
                  v-bind="props"
                ></v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-row>
                    <v-col>
                      <v-form ref="form">
                        <v-text-field
                          v-model="editedItem.email"
                          variant="outlined"
                          density="compact"
                          label="Enter Email Address"
                          :rules="[rules.required, rules.validEmail]"
                        >
                        </v-text-field>
                      </v-form>
                    </v-col>
                  </v-row>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue-darken-1" variant="text" @click="save">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="400px">
              <v-card>
                <v-card-title class="text-h5">
                  Delete Confirmation!
                </v-card-title>
                <v-card-text class="mt-n5">
                  Are you sure you want to delete this item?
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn variant="outlined" @click="closeDelete">Cancel</v-btn>
                  <v-btn variant="outlined" @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon class="me-2" size="small" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="getNewsletters"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: true,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: "Email",
        align: "start",
        sortable: false,
        key: "email",
      },
      { title: "Actions", key: "actions", sortable: false },
    ],

    rules: {
      required: (value) => !!value || "Required.",
      validEmail: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
    newsletters: [],
    editedIndex: -1,
    editedItem: {
      email: "",
    },
    defaultItem: {
      email: "",
    },
    selected: "",
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.getNewsletters();
  },

  methods: {
    getNewsletters() {
      try {
        this.$axios.get("/newsletters").then((response) => {
          console.log("Response data:", response.data);
          this.loading = false;
          this.newsletters = response.data;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    editItem(item) {
      this.editedIndex = this.newsletters.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.selected = item;
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.newsletters.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.selected = item;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      try {
        this.$axios
          .delete("/newsletters/" + this.editedItem.id)
          .then((response) => {
            this.newsletters.splice(this.editedIndex, 1);
            this.closeDelete();
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    close() {
      this.dialog = false;
      this.$refs.form.resetValidation();
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      const validation = await this.$refs.form.validate();
      if (validation.valid) {
        let bodyData = {
          id: this.editedItem.id,
          email: this.editedItem.email,
        };
        if (this.editedIndex > -1) {
          try {
            this.$axios.put("/newsletters", bodyData).then((response) => {
              this.newsletters[this.newsletters.indexOf(this.selected)] =
                bodyData;
            });
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        } else {
          try {
            this.$axios
              .post("/newsletters/subscribe", bodyData)
              .then((response) => {
                this.newsletters.push(bodyData);
              });
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        this.close();
      }
    },
  },
};
</script>
