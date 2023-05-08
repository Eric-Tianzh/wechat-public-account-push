/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'wechat-test',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxdb71cdb739c66835',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b9ae0f1a5980fcc893ed0f5bb9dfc67b',


  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,
    
    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
    },
  
  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: false,
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '小王',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9Bzu6u2ZUOc8bmWr_4EV1M2y0Mk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'E5z8Uyuc3_n2u-CYjn6_UGU80xSHHzna-9xmLifolHs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      province: '北京',
      city: '北京',
      horoscopeDate: '10-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      name: 't',
      id: 'o9Bzu6t46OgmbvJyukftdTP7bn-g',
      useTemplateId: 'E5z8Uyuc3_n2u-CYjn6_UGU80xSHHzna-9xmLifolHs',
      province: '北京',
      city: '北京',
      horoscopeDate: '08-18',
      horoscopeDateType: '',
      customizedDateList: [],
      courseSchedule: null
    },
    {
      name: 'wc',
      id: 'o9Bzu6i0KqjHa4BppJvyNTkIdmLw',
      useTemplateId: 'R5UZ-YXjitIHi-toWdJJVW6JgAlgS2v5N9uVtgCEC5g',
      province: '福建',
      city: '厦门',
      horoscopeDate: '06-08',
      horoscopeDateType: '',
      customizedDateList: [],
      courseSchedule: null
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'wra3wVuZl5DAq8ztNJ96wsXhtv4owjkkW0cu6Ap6iG8',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9Bzu6t46OgmbvJyukftdTP7bn-g',
    }
  ],

}

module.exports = USER_CONFIG

