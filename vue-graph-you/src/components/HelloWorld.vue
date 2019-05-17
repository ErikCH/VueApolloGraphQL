<template>
  <div class="hello">
    <ApolloMutation
      :mutation="require('../graphql/register.gql')"
      :variables="{email, password}"
      @done="onDone"
    >
      <template v-slot="{mutate}">
        <form v-on:submit.prevent=" mutate()">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password">
          <button @click="mutate()">Submit</button>
        </form>
      </template>
    </ApolloMutation>
    {{token}}
    <!-- <div v-for="todo in allTodos" :key="todo.id">{{todo.title}}</div>-->
    <!-- <ApolloQuery
      :query="gql => gql`
                          query {
                              allTodos {
                              title
                              id
                            }
                          } `"
    >-->
    <!-- <input type="text" v-model.number="count"> -->
    <ApolloQuery :query="require('../graphql/allTodos.gql')" :variables="{count}">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="data">
          <div v-for="todo in data.allTodos" :key="todo.id">{{todo.title}}</div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "HelloWorld",
  data() {
    return {
      count: 4,
      email: "",
      password: "",
      token: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    onDone(val) {
      this.token = val.data.register.token;
    }
  },
  apollo: {
    allTodos: gql`
      query {
        allTodos(count: 5) {
          title
          id
        }
      }
    `
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
