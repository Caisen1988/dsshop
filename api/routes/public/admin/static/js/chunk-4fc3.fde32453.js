(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4fc3"],{"5QzL":function(t,e,a){"use strict";a.r(e);var s=a("RQhk"),l=a("BeLl"),i={name:"IndentListDetails",data:function(){return{order_progress:0,list:"",dialogFormVisible:!1,listLoading:!0,id:this.$route.query.id,temp:{},rules:{dhl_id:[{required:!0,message:"请选择物流公司",trigger:"change"}],odd:[{required:!0,message:"请输入订单号",trigger:"blur"}]},refundRules:{refund_money:[{required:!0,message:"请输入退款金额",trigger:"blur"}],refund_way:[{required:!0,message:"请选择退款方式",trigger:"change"}],refund_reason:[{required:!0,message:"请输入退款原因",trigger:"blur"}]},refundTemp:{refund_way:0,refund_reason:"",refund_money:""},dhl:[]}},created:function(){this.getList(),this.getDhl()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(s.b)(this.id).then(function(e){for(var a in e.data.goods_list){switch(e.data.state){case 1:t.order_progress=1;break;case 2:t.order_progress=2;break;case 3:t.order_progress=3;break;case 5:t.order_progress=4}e.data.goods_list[a].good_sku&&(e.data.goods_list[a].good_sku.product_sku.forEach(function(t){e.data.goods_list[a].specification?e.data.goods_list[a].specification+=t.value+";":e.data.goods_list[a].specification=t.value+";"}),e.data.goods_list[a].specification=e.data.goods_list[a].specification.substr(0,e.data.goods_list[a].specification.length-1))}t.list=e.data,t.refundTemp.refund_money=t.list.total,t.listLoading=!1})},getDhl:function(){var t=this;Object(l.b)().then(function(e){t.dhl=e.data})},createSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&(t.temp.id=t.list.id,Object(s.a)(t.temp).then(function(){t.dialogFormVisible=!1,t.$notify({title:t.$t("hint.succeed"),message:"发货成功",type:"success",duration:2e3}),setTimeout(t.$router.back(-1),2e3)}))})},refundData:function(){var t=this;this.$refs.refundForm.validate(function(e){e&&Object(s.d)(t.list.id,t.refundTemp).then(function(){t.dialogFormVisible=!1,t.$notify({title:t.$t("hint.succeed"),message:"退款成功",type:"success",duration:2e3}),setTimeout(t.$router.back(-1),2e3)})})},getSummaries:function(t){var e=t.columns,a=t.data,s=[];return e.forEach(function(t,e){0!==e?1!==e&&2!==e&&3!==e&&(4===e?a.length>0&&(s[e]=a.reduce(function(t,e){var a=Number(e.number);return isNaN(a)?t:t+e.number},0),s[e]+=" 件"):5===e&&a.length>0&&(s[e]=a.reduce(function(t,e){var a=Number(e.price);return isNaN(a)?t:t+e.number*e.price*100},0),s[e]=s[e]/100+" 元")):s[e]="总价"}),s}}},r=(a("7zwI"),a("KHd+")),n=Object(r.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"app-container"},[a("el-card",{attrs:{shadow:"always"}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticStyle:{"font-size":"18px","line-height":"45px","font-weight":"bold"},attrs:{span:20}},[t._v("订单号："+t._s(t.list.identification))]),t._v(" "),a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[0===t.list.shipping_status&&2===t.list.state?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleDelete(t.list,2)}}},[t._v("发货")]):t._e()],1),t._v(" "),a("el-col",{attrs:{span:1}})],1),t._v(" "),a("el-row",{staticStyle:{"line-height":"35px","font-size":"14px"},attrs:{type:"flex"}},[a("el-col",{attrs:{span:10}},[t._v("下单时间："+t._s(t.list.created_at))]),t._v(" "),a("el-col",{attrs:{span:10}},[t._v("买家信息："+t._s(t.list.good_location?t.list.good_location.name:""))]),t._v(" "),a("el-col",{staticStyle:{color:"rgba(0, 0, 0, 0.447)"},attrs:{span:2}},[t._v("状态")]),t._v(" "),a("el-col",{staticStyle:{color:"rgba(0, 0, 0, 0.447)"},attrs:{span:2}},[t._v("订单金额")])],1),t._v(" "),a("el-row",{staticStyle:{"line-height":"35px","font-size":"14px"},attrs:{type:"flex"}},[a("el-col",{attrs:{span:10}},[t._v("备注："+t._s(t.list.remark?t.list.remark:"无"))]),t._v(" "),a("el-col",{attrs:{span:10}},[t._v("联系方式："+t._s(t.list.good_location?t.list.good_location.cellphone:""))]),t._v(" "),a("el-col",{staticStyle:{"font-weight":"bold","font-size":"18px"},attrs:{span:2}},[t._v(t._s(t.list.state_show))]),t._v(" "),a("el-col",{staticStyle:{"font-weight":"bold","font-size":"18px"},attrs:{span:2}},[t._v("¥ "+t._s(t._f("1000")(t.list.total)))])],1),t._v(" "),a("el-row",{staticStyle:{"line-height":"35px","font-size":"14px"},attrs:{type:"flex"}},[t.list.good_location?a("el-col",{attrs:{span:14}},[t._v("收货地址："+t._s(t.list.good_location.location)+" ("+t._s(t.list.good_location.address)+")")]):t._e()],1)],1),t._v(" "),a("el-card",{staticStyle:{"margin-top":"25px"},attrs:{shadow:"always"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("订单进度")])]),t._v(" "),a("el-steps",{attrs:{active:t.order_progress,"align-center":""}},[a("el-step",{attrs:{description:t.list.created_at,title:"买家下单"}}),t._v(" "),a("el-step",{attrs:{description:"1970-01-01 08:00:00"!==t.list.pay_time?t.list.pay_time:"",title:"买家付款"}}),t._v(" "),a("el-step",{attrs:{description:"1970-01-01 08:00:00"!==t.list.shipping_time?t.list.shipping_time:"",title:"商家发货"}}),t._v(" "),a("el-step",{attrs:{description:"1970-01-01 08:00:00"!==t.list.confirm_time?t.list.confirm_time:"",title:"交易完成"}})],1)],1),t._v(" "),a("el-card",{staticStyle:{"margin-top":"25px"},attrs:{shadow:"always"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("商品信息")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list.goods_list,"summary-method":t.getSummaries,border:"","show-summary":""}},[a("el-table-column",{attrs:{align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"45px",height:"45px"},attrs:{src:t.row.img}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商品",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"规格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.specification))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"单价（元）",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.price))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"数量（件）",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.number))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"金额（元）",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.price*e.row.number))])]}}])})],1)],1),t._v(" "),a("el-card",{staticStyle:{"margin-top":"25px"},attrs:{shadow:"always"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("配送")])]),t._v(" "),2===t.list.state?a("div",[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"运费"}},[t.list.carriage?a("span",[t._v(t._s(t._f("1000")(t.list.carriage))+"元")]):a("span",[t._v("免运费")])]),t._v(" "),a("el-form-item",{attrs:{label:"物流公司",prop:"dhl_id"}},[a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:t.temp.dhl_id,callback:function(e){t.$set(t.temp,"dhl_id",e)},expression:"temp.dhl_id"}},t._l(t.dhl,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"运单号",prop:"odd"}},[a("el-input",{attrs:{maxlength:"255",clearable:""},model:{value:t.temp.odd,callback:function(e){t.$set(t.temp,"odd",e)},expression:"temp.odd"}})],1)],1)],1):a("div",[a("el-row",{staticStyle:{"line-height":"35px","font-size":"14px"},attrs:{type:"flex"}},[t.list.carriage?a("el-col",{attrs:{span:24}},[t._v("运费："+t._s(t._f("1000")(t.list.carriage))+"元")]):a("el-col",{attrs:{span:24}},[t._v("运费：免运费")])],1),t._v(" "),a("el-row",{staticStyle:{"line-height":"35px","font-size":"14px"},attrs:{type:"flex"}},[t.list.dhl?a("el-col",{attrs:{span:24}},[t._v("物流公司："+t._s(t.list.dhl.name))]):t._e()],1),t._v(" "),a("el-row",{staticStyle:{"line-height":"35px","font-size":"14px"},attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[t._v("运单号："+t._s(t.list.odd))])],1)],1)]),t._v(" "),t.list.refund_money?a("el-card",{staticStyle:{"margin-top":"25px"},attrs:{shadow:"always"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("退款详情")])]),t._v(" "),a("el-row",{staticStyle:{"line-height":"35px","font-size":"14px"},attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[t._v("退款金额："+t._s(t._f("1000")(t.list.refund_money))+"元")])],1),t._v(" "),a("el-row",{staticStyle:{"line-height":"35px","font-size":"14px"},attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[t._v("退款方式："+t._s(t.list.refund_way))])],1),t._v(" "),a("el-row",{staticStyle:{"line-height":"35px","font-size":"14px"},attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[t._v("退款说明："+t._s(t.list.refund_reason))])],1)],1):t._e(),t._v(" "),a("div",{staticClass:"right",staticStyle:{"margin-top":"20px"}},[1===t.list.state||t.list.refund_money?t._e():a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("退款")]),t._v(" "),2===t.list.state?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.createSubmit()}}},[t._v("发货")]):t._e()],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogFormVisible,"close-on-click-modal":!1,title:"退款"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"refundForm",staticStyle:{width:"700px"},attrs:{rules:t.refundRules,model:t.refundTemp,"label-position":"left","label-width":"120px"}},[a("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"退款金额",prop:"refund_money"}},[a("el-input-number",{attrs:{precision:2,min:1,max:t.list.total,label:"退款金额"},model:{value:t.refundTemp.refund_money,callback:function(e){t.$set(t.refundTemp,"refund_money",e)},expression:"refundTemp.refund_money"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"退款方式",prop:"refund_way"}},[a("el-radio-group",{model:{value:t.refundTemp.refund_way,callback:function(e){t.$set(t.refundTemp,"refund_way",e)},expression:"refundTemp.refund_way"}},[a("el-radio",{attrs:{label:0}},[t._v("退到余额")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("线下退款")])],1),t._v(" "),a("el-alert",{attrs:{title:"退到余额：将款项退到用户余额中;线下退款：通过第三方退款或线下打款给用户",type:"warning"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"600px"},attrs:{label:"退款理由",prop:"refund_reason"}},[a("el-input",{attrs:{placeholder:"请填写退款理由",maxlength:"500",clearable:""},model:{value:t.refundTemp.refund_reason,callback:function(e){t.$set(t.refundTemp,"refund_reason",e)},expression:"refundTemp.refund_reason"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("usuel.cancel")))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.refundData()}}},[t._v(t._s(t.$t("usuel.confirm")))])],1)],1)],1)},[],!1,null,null,null);n.options.__file="Detail.vue";var o={name:"EditProduct",components:{Detail:n.exports}},d=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("detail",{attrs:{"is-edit":!0}})},[],!1,null,null,null);d.options.__file="shipment.vue";e.default=d.exports},"7zwI":function(t,e,a){"use strict";var s=a("PyOc");a.n(s).a},BeLl:function(t,e,a){"use strict";a.d(e,"c",function(){return r}),a.d(e,"b",function(){return n}),a.d(e,"a",function(){return o}),a.d(e,"e",function(){return d}),a.d(e,"d",function(){return c});var s=a("t3Un"),l=a("Qyje"),i=a.n(l);function r(t){return Object(s.a)({url:"dhl",method:"get",params:t})}function n(){return Object(s.a)({url:"dhlList",method:"get"})}function o(t){return t=(t=i.a.parse({data:t})).data,Object(s.a)({url:"dhl",method:"POST",data:t})}function d(t,e){return e=(e=i.a.parse({data:e})).data,Object(s.a)({url:"dhl/"+t,method:"PUT",data:e})}function c(t,e){return e=(e=i.a.parse({data:e})).data,Object(s.a)({url:"dhl/"+t,method:"DELETE",data:e})}},PyOc:function(t,e,a){},RQhk:function(t,e,a){"use strict";a.d(e,"c",function(){return r}),a.d(e,"a",function(){return n}),a.d(e,"d",function(){return o}),a.d(e,"b",function(){return d});var s=a("t3Un"),l=a("Qyje"),i=a.n(l);function r(t){return Object(s.a)({url:"indent",method:"get",params:t})}function n(t){return t=(t=i.a.parse({data:t})).data,Object(s.a)({url:"indentShipments",method:"POST",data:t})}function o(t,e){return e=(e=i.a.parse({data:e})).data,Object(s.a)({url:"indentRefund/"+t,method:"PUT",data:e})}function d(t){return Object(s.a)({url:"indent/"+t,method:"get"})}}}]);