<template>
  <div class="event-logs">
    <v-card class="card" height="200">

      <v-layout row wrap v-if="getLoading">
        <v-flex xs12 class="progress-container">
          <v-progress-circular
              :size="50"
              color="primary"
              indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>


      <v-list one-line v-if="getEventLogs && getEventLogs.length > 0">
        <v-list-tile v-for="log of getEventLogs" class="tile">
          <v-list-tile-content>

            <!--<v-list-tile-title>{{ log.url }}</v-list-tile-title>-->

            <v-list-tile-title v-if="log.state === PostStatuses.open">
              {{ date(log.created_at) }} :
              <strong class="indigo--text text--darken-2">
                {{ log.url }}
              </strong>
              の期限が終了し、デポジット
              <strong class="indigo--text text--darken-2">
                {{ log.deposit }}ETH
              </strong>
              が分配されました。
            </v-list-tile-title>

            <v-list-tile-title v-else-if="log.state === PostStatuses.close">
              {{ date(log.created_at) }} :
              <strong class="indigo--text text--darken-2">
                {{ log.url }}
              </strong>
              の拡散協力依頼が開始しました。( デポジット:
              <strong class="indigo--text text--darken-2">
                {{ log.deposit }} ETH
              </strong>
              )
            </v-list-tile-title>

          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>

  </div>
</template>

<script lang="ts">
  import { Component } from "nuxt-property-decorator";
  import { Getter } from "vuex-class";
  import { MyVue, PostStatuses } from "~/types/types";

  @Component( {} )
  export default class extends MyVue {
    @Getter( "getEventLogs", { namespace: "event-logs" } ) getEventLogs;

    @Getter( "getLoading", { namespace: "event-logs" } ) getLoading;

    data( {} ) {
      return {
        PostStatuses
      };
    };

    date = function ( date ) {
      return this.$moment( date ).format( "YYYY/MM/DD HH:mm" );
    }
  }
</script>

<style scoped lang="scss">

  .progress-container {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .event-logs {
    min-height: 248px;

    .card {
      overflow: scroll;

      .tile {

        &:hover {
          background: $hover-background;
        }
      }
    }
  }

</style>

<style lang="scss">
  .v-list__tile {
    height: 35px;
  }
</style>
