<template>
  <div>
    <headerBar v-on:childLang="$emit('changeLang')">{{ $vuetify.t('$vuetify.index.lunchDinner') }}</headerBar>

    <v-content id="panelList">
      <v-container fluid>
        <v-card color="white mb-4" class="lunch">
          <v-card-title primary-title>
            <div>
              <div class="headline white--text">{{ $vuetify.t('$vuetify.lunchDinner.lunch') }}</div>
              <span class=" white--text">12:00 - 13:30</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <div class="d-flex"> 
              <v-icon large color="darken-2">location_on</v-icon>
              <span>{{ $vuetify.t('$vuetify.lunchDinner.lunchLocal') }}</span>
            </div>
          </v-card-actions>
        </v-card>

        <v-card color="white" class="dinner">
          <v-card-title primary-title>
            <div>
              <div class="headline white--text">{{ $vuetify.t('$vuetify.lunchDinner.dinner') }}</div>
              <span class=" white--text">18:30 ~ 20:00</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="blue white--text "
              center
              right
              round
              absolute
              @click="dialog = !dialog"
            >
              <v-icon >event_seat</v-icon>&nbsp;{{ $vuetify.t('$vuetify.lunchDinner.find') }}
            </v-btn>
            <div class="d-flex"> 
              <v-icon large color="dark-1">location_on</v-icon>
              <span>{{ $vuetify.t('$vuetify.lunchDinner.dinnerLocal') }}</span>
            </div>
          </v-card-actions>
        </v-card>

        
        <v-dialog v-model="dialog" max-width="500px">
          <v-card id="search">
            <v-card-title class="headline purple darken-2 white--text pb-4">
              {{ $vuetify.t('$vuetify.lunchDinner.find') }}
              
              
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="guestName" required :label="$vuetify.t('$vuetify.lunchDinner.fullname')"></v-text-field>
              <small class="grey--text">{{ $vuetify.t('$vuetify.lunchDinner.sample') }}</small>
            </v-card-text>
            <v-card-actions>
              <v-btn center block flat color="purple" @click="searchName">{{ $vuetify.t('$vuetify.lunchDinner.submit') }}</v-btn>
            </v-card-actions>
            <v-card-actions>
              <div id="result">Result: <span v-text="searchResult">___</span></div>
              </v-card-actions>
          </v-card>
        </v-dialog>

      </v-container>
    </v-content>
  </div>
</template>

<style scoped>

.v-card__title {
  align-items: flex-start;
  height: 130px;
  padding-left: 50px;
}
.v-dialog .v-card__title {
  padding-left: 20px;
  height: auto;
}
.v-card.lunch .v-card__title {
  background: #FFF url('../assets/bg_lunch.png') no-repeat right top;
  background-size: 100% auto;
}
.v-card.dinner .v-card__title {
  background: #FFF url('../assets/bg_dinner.png') no-repeat right top;
  background-size: 100% auto;
}
.v-card__title div {
  width: 100%;
}
.v-card__actions {
  padding-bottom: 10px;
  justify-content:flex-start;
}
.v-card__actions .d-flex {
  justify-content: center;
  align-content: center;
  padding-left: 10px;
}
.v-card__actions span {
  line-height: 3;
}
</style>

<script>
import headerBar from "../components/headerBar.vue";

export default {
  components: {
    headerBar
  },
  data () {
    return {
      dialog: false,
      searchResult: '',
      guestName: '',
      tables: [
        {
          id: 'Table.1',
          name: ['鈴木正浩', '松岡秀佳', '野本正明', '小久保憲一', '金森秀人', '田辺史朗', '鈴木教洋', '小池麻子', '船木謙一', '鮫嶋茂稔'],
          ename: ['matsuoka hideka', 'nomoto masaaki', 'kokubo kenichi', 'kanamori hidehito', 'norihiro suzuki', 'koike asako', 'ishizuka asako', 'funaki kenichi', 'sameshima shigetoshi']
        }, 
        {
          id: 'Table.2',
          name: ['张煜', '陈木青', '罗露露', '马越鹏', '梁东明', '陈杨秋', '马军', '马元琛', '章一苇', '栾天'],
          ename: ['zhang yu', 'chen muqing', 'luo lulu', 'ma yuepeng', 'liang dongming', 'chen yangqiu', 'ma jun', 'ma yuanchen', 'zhang yiwei', 'luan tian']
        },
        {
          id: 'Table.3',
          name: ['鈴木友峰', '畑中長則', '木村雅彦', '马场健治', '森田歩', '矢川雄一', '山田真治', '赤津雅晴', '後藤康', '西澤格'],
          ename: ['suzuki tomomi','hatanaka takenori','masahiko kimura','morita ayumu','yagawa yuichi','yamada shinji','akatsu masaharu','goto yasushi','nishizawa itaru']
        },
        {
          id: 'Table.3',
          name: ['鈴木友峰', '畑中長則', '木村雅彦', '马场健治', '森田歩', '矢川雄一', '山田真治', '赤津雅晴', '後藤康', '西澤格'],
          ename: ['suzuki tomomi','hatanaka takenori','masahiko kimura','morita ayumu','yagawa yuichi','yamada shinji','akatsu masaharu','goto yasushi','nishizawa itaru']
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    searchName: function () {
      var t = this;
      var _name = t.guestName.trim().toLowerCase();

      this.tables.forEach(table => {
        
          if(table.name.indexOf(_name)!=-1 || table.ename.indexOf(_name)!=-1) {
            this.searchResult = table.id;
          }
      });

    }
  }
};
</script>