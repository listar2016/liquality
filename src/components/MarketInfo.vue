<template>
    <div class="container">
        <h2>Market Information</h2>
        <label for="intervals">Refresh Interval</label>
        <select name="intervals" id="intervals" v-model="refreshInterval">
            <option
                v-for="t in intervalList"
                :key="t"
                :value="t"
            >{{ t }}</option>
        </select>
        <table>
            <tr>
                <th></th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
                <th>Min</th>
                <th>Max</th>
                <th>MinConf</th>
                <th>Rate</th>
                <th>Created</th>
                <th>Updated</th>
            </tr>
            <tr v-for="(item, index) in marketInfo" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ item.from }}</td>
                <td>{{ item.to }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.min }}</td>
                <td>{{ item.max }}</td>
                <td>{{ item.minConf }}</td>
                <td>{{ item.rate }}</td>
                <td>{{ item.createdAt }}</td>
                <td>{{ item.updatedAt }}</td>
            </tr>
        </table>
    </div>    
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'MarketInfo',
    data: () => ({
        refreshInterval: 5,
        intervalList: [5, 10, 15],
        refreshTimer: null,
    }),
    computed: {
        ...mapGetters(['marketInfo'])
    },
    watch: {
        refreshInterval: {
            immediate: true,
            handler(value) {
                if (this.refreshTimer) {
                    clearInterval(this.refreshTimer)
                }
                this.refreshTimer = setInterval(() => {
                    this.$store.dispatch('getMarketInfo')
                }, value * 1000)
            }
        }
    },
    created() {
        this.$store.dispatch('getMarketInfo')
    }
}
</script>
<style lang="scss">
    table {
        border-collapse: collapse;
        width: 100%;
        td, th {
            border: 1px solid #ddd;
            padding: 8px;
        }
        th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04AA6D;
            color: white;
        }
        tr {
            &:nth-child(even) {
                background-color: #f2f2f2;
            }
            &:hover {
                background-color: #ddd;
            }
        }
    }
    #intervals {
        margin-left: 12px;
        margin-bottom: 12px;
    }
</style>