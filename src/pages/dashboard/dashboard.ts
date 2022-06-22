import axios from 'axios';
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class Dashboard extends Vue {

    marketName : string = "";
    tradePrice : string = "";

    async mounted(): Promise<void>{
        
        const getTicker = () => {
            axios.get(`https://api.upbit.com/v1/ticker?markets=KRW-BTC`)
            .then((res) => {
                this.marketName = res.data[0].market;
                this.tradePrice = res.data[0].trade_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            });
        }
        getTicker();

        setInterval(getTicker, 60000);
    }

}
