<template>
  <div>
    <v-container>
      <v-data-table :headers="headers" :items="blogs" :loading="loading">
        <template v-slot:top>
          <v-toolbar flat color="primary">
            <v-toolbar-title>Blogs</v-toolbar-title>
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
                          v-model="editedItem.title"
                          variant="outlined"
                          density="compact"
                          label="Title"
                          :rules="[rules.required]"
                        >
                        </v-text-field>
                        <v-text-field
                          v-model="editedItem.image"
                          variant="outlined"
                          density="compact"
                          label="Image URl"
                          :rules="[rules.required]"
                        >
                        </v-text-field>
                        <v-textarea
                          v-model="editedItem.descriptions"
                          variant="outlined"
                          density="compact"
                          placeholder="Job Details"
                          :rules="[rules.required]"
                          :rows="4"
                        >
                        </v-textarea>
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
        <template v-slot:item.image="{ item }">
          <v-avatar size="120" class="my-2" rounded="0">
            <v-img :src="item.image" aspect-ratio="1" cover> </v-img>
          </v-avatar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon class="me-2" size="small" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="getBlogs"> Reset </v-btn>
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
        title: "Title",
        align: "start",
        sortable: false,
        key: "title",
      },
      { title: "Image Url", key: "image" },
      { title: "Descriptions", key: "descriptions" },
      { title: "Actions", key: "actions", sortable: false },
    ],

    rules: {
      required: (value) => !!value || "Required.",
      validEmail: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
    blogs: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      image: "",
      descriptions: "",
    },
    defaultItem: {
      title: "",
      image: "",
      descriptions: "",
    },
    selected: "",
    dataTest: [
      {
        title: "The Future of AI in Everyday Life",
        description:
          "Explore how artificial intelligence is transforming industries like healthcare, finance, and education.",
        image: "https://images.unsplash.com/photo-1581093588401-25eb3ef00d44",
      },
      {
        title: "How Remote Work Has Changed Tech Culture",
        description:
          "Remote work is here to stay. Here's how companies are adapting their culture and tools for distributed teams.",
        image: "https://images.unsplash.com/photo-1612178990846-41e7189c8a8c",
      },
      {
        title: "Top 10 UI/UX Design Principles for 2025",
        description:
          "Stay ahead of the curve with these modern design principles that improve usability and accessibility.",
        image: "https://images.unsplash.com/photo-1581276879432-15d5b5f3f5e0",
      },
    ],
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
    this.getBlogs();
  },

  mounted() {
    console.log("data", this.dataTest);
    // this.dataSeeding();
  },
  methods: {
    // dataSeeding() {
    //   let bodyData = {};
    //   for (let i = 0; i < this.dataTest.length; i++) {
    //     console.log(this.dataTest[i].title);
    //     bodyData = {
    //       id: i++,
    //       title: this.dataTest[i]?.title,
    //       image: this.dataTest[i]?.image,
    //       descriptions: this.dataTest[i]?.description,
    //     };
    //     console.log(bodyData);
    //     try {
    //       this.$axios.post("/blog", bodyData).then((response) => {
    //         // this.blogs.push(bodyData);
    //       });
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   }
    // },
    getBlogs() {
      try {
        this.$axios.get("/blog").then((response) => {
          console.log("Response data:", response.data);
          this.loading = false;
          this.blogs = response.data;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    editItem(item) {
      this.editedIndex = this.blogs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.selected = item;
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.blogs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.selected = item;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      try {
        this.$axios.delete("/blog/" + this.editedItem.id).then((response) => {
          this.blogs.splice(this.editedIndex, 1);
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
          title: this.editedItem.title,
          image: this.editedItem.image,
          descriptions: this.editedItem.descriptions,
        };

        if (this.editedIndex > -1) {
          try {
            this.$axios.put("/blog", bodyData).then((response) => {
              this.blogs[this.blogs.indexOf(this.selected)] = bodyData;
            });
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        } else {
          try {
            this.$axios.post("/blog", bodyData).then((response) => {
              this.blogs.push(bodyData);
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
