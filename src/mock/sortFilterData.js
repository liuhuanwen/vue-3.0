export default {
  bar: {
    activity_types: [
      { icon_color: "70bc46", icon_name: "首", id: 8, name: "首单立减" },
      { icon_color: "70bc46", icon_name: "门", id: 9, name: "门店新客立减" },
      { icon_color: "f07373", icon_name: "减", id: 3, name: "满减优惠" },
      { icon_color: "ff7239", icon_name: "返", id: 7, name: "下单返红包" },
      { icon_color: "ffac2a", icon_name: "领", id: 6, name: "进店领红包" },
      { icon_color: "70bc46", icon_name: "配", id: 13, name: "配送费优惠" },
      { icon_color: "3cc791", icon_name: "赠", id: 4, name: "赠品优惠" },
      { icon_color: "f1884f", icon_name: "特", id: 2, name: "特价商品" },
      { icon_color: "70bc46", icon_name: "品", id: 20, name: "品质联盟红包" }
    ],
    delivery_mode: {
      border: "",
      color: "2395FF",
      gradient: { rgb_from: "00AAFF", rgb_to: "0085FF" },
      icon_hash: "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
      id: 1,
      is_solid: true,
      text: "蜂鸟专送",
      text_color: "FFFFFF"
    },
    price_ranges: [],
    super_vip: {
      image_hash: "7ef2eef001b97333db71063381773ba9png",
      name: "会员领红包"
    },
    supports: [
      {
        description: "超时10分钟立享赔付",
        icon_color: "57A9FF",
        icon_hash: "083765e6d2ec621ff84c0ea9f0b5b9d6png",
        icon_name: "准",
        id: 9,
        name: "准时达",
        ranking_weight: 8
      },
      {
        description: "",
        icon_color: "3FBDE6",
        icon_hash: "67c417ba499b9ef8240b8014a453bf30png",
        icon_name: "品",
        id: 8,
        name: "品牌商家",
        ranking_weight: 7
      },
      {
        description: "新店",
        icon_color: "E8842D",
        icon_hash: "c93ded991df780906f7471128a226104png",
        icon_name: "新",
        id: 5,
        name: "新店",
        ranking_weight: 6
      },
      {
        description: "该商户食品安全已由国泰产险承担，食品安全有保障",
        icon_color: "999999",
        icon_hash: "2cd444d002a94325c5dff004fb3b9505png",
        icon_name: "保",
        id: 7,
        name: "食安保",
        ranking_weight: 4
      },
      {
        description: "该商家支持开发票，请在下单时填写好发票抬头",
        icon_color: "999999",
        icon_hash: "3d45668ffc03151826f95b75249bea31png",
        icon_name: "票",
        id: 4,
        name: "开发票",
        ranking_weight: 3
      }
    ]
  },
  outside: {
    inside_sort_filter: [
      { key: "order_by", name: "综合排序", value: 0 },
      { key: "order_by", name: "好评优先", value: 7 },
      { key: "order_by", name: "销量最高", value: 6 },
      { key: "order_by", name: "起送价最低", value: 1 },
      { key: "order_by", name: "配送最快", value: 2 },
      { key: "order_by", name: "配送费最低", value: 9 },
      { key: "order_by", name: "人均从低到高", value: 10 },
      { key: "order_by", name: "人均从高到低", value: 11 },
      { key: "order_by", name: "通用排序", value: 12 }
    ],
    outside_filters: [
      { key: "activity_types[]", name: "品质联盟", value: 20 },
      { key: "activity_types[]", name: "满减优惠", value: 3 },
      { key: "support_ids[]", name: "新店", value: 5 },
      { key: "support_ids[]", name: "品牌商家", value: 8 }
    ],
    outside_sort_filter: [
      { key: "order_by", name: "距离最近", value: 5 },
      { is_filter: true, key: "quality_union", name: "品质联盟", value: 1 }
    ]
  }
};
