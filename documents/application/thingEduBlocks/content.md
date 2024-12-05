# ThingEduBlock

## Phần mềm lập trình kết hợp phần cứng

**Tài liệu cứng dành cho người dùng (Phiên bản 1.1)**

### Đây là Logo MakerViet

---

## Mục lục

1. Giới thiệu
* Giới thiệu chung
* Mục đích
*  Đối tượng
2. Hướng dẫn cài đặt
2. Tổng quan giao diện người dùng
* Giao diện cơ bản
   * Kết nối phần cứng
* Giao diện khi kết nối ThingBot 
3. Chức năng chính
* Lập trình
4. Ví dụ sử dụng
5.  FAQ
6.  Support

---

## Hướng dẫn sử dụng cho ThingEduBlock

### Giới thiệu chung

Hướng dẫn này mô tả cách sử dụng và vận hành ThingEduBlock, phần mềm lập trình kéo thả đơn giản, dễ hiểu, dễ tiếp cận nhằm kết nối, điều chỉnh phần cứng. Đặc biệt thiết kế dành cho kết nối với bo mạch phát triển bởi MakerViet: ThingBot và các thành phần khác trong IoT.

ThingBot là bo mạch đa dạng tùy biến, với nhiều chân kết nối động cơ, cảm biến tích hợp, cổng cấp nguồn riêng,...

---

### Mục đích

Đơn giản và dễ tiếp cận với STEAM, khả năng tùy biến, dễ sử dụng cũng như kết nối logic để mọi đối tượng từ học sinh cho tới người dùng phổ thông đều có thể sử dụng được.
ThingEduBlock cho phép người dùng hoàn toàn tùy biến theo logic, mở rộng thêm các loại phần cứng khác thông qua bo mạch trung tâm là ThingBot như động cơ, servo, cảm biến,… kết nối không dây qua Wifi và BLE. Điều này cho phép thậm chí mở rộng hơn về tiềm năng của ThingEduBlock và ThingBot bởi người dùng có thể hoàn toàn điều chỉnh, gửi, nhận dữ liệu từ nhiều nguồn khác nhau trong một mạng lưới mở cũng như trong gia đình, doanh nghiệp nhỏ, trường học. 

---

### Đối tượng

- Học sinh từ 11 – 18 tuổi.
- Người dùng phổ thông muốn kết nối phần cứng lấy dữ liệu môi trường và điều khiển thiết bị.

---

## Cài đặt

**Link cài đặt mới nhất của OpenBlock:**

Hiện tại, OpenBlock chỉ hỗ trợ trên hệ điều hành Windows và bạn có thể tải về [tại đây.](https://github.com/thingedublock/thingedublock-desktop/releases/tag/v1.0.2-alpha)

![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/462580200_956700623178489_7038706041655370203_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG_HGi3gepJ3CMHewuPdK3IGr75MxHabooavvkzEdpuiqDzs7MeSajg3lF_Ppkfd-0LxLznuwMtlaJlmTK3I5dv&_nc_ohc=107tTkDLnT0Q7kNvgHqkRX9&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QE65mYFwy2i7zA5xXv-0YBL3rPg72VQcLHh5fqWUcC0uQ&oe=6778FBAF) 

**Lưu ý:** Chọn đúng phiên bản Windows (x32 hoặc x64).  

### Hướng dẫn cài đặt:

Tải về và chạy file `.exe` như các ứng dụng khác.

![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/462558506_1256517022061052_2166249981732312747_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGX7iuo4TMYTwrE0rT8EUP7v2t03JI_jVu_a3Tckj-NW6AGgIsumH920ROM-j7KV4hSzqGBuEeDJN6ImgzzgV4B&_nc_ohc=WpdXdx3LMjgQ7kNvgF0FvMS&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&oh=03_Q7cD1QF0Qmo73uosWpY4tnsFgTOh6RxCqUcGi3DzxsAuVGYGSg&oe=67791D6F)

Khi cửa sổ hiện lên, chọn **"**Next**"**.

![](https://scontent.fhan20-1.fna.fbcdn.net/v/t1.15752-9/467460723_982984633637937_5039842184097697552_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE1ftNEU21k8NNm3Zv7LMfRZ0beXFsTPgtnRt5cWxM-C86DqViWxOeEeiriBeggp29xKT-jtlnvl0GuJjN6areV&_nc_ohc=0nab315ct0sQ7kNvgHnNNGL&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&oh=03_Q7cD1QFiTI5F85cy4RtOhehNEuXstk-UJ2q8qi-1W19KAuRPHA&oe=67790B9A)

Chọn ổ đĩa cài đặt và nhấn **"**Install**"**.

![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/462543548_9038128972898778_287751536130633063_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGkeHroZ56stn3-pWVBtArqVx0BxFp75vhXHQHEWnvm-JvOrYc9hmRs5OjKnQvFI0o3Iyqle3JogRaEy0h8qiG7&_nc_ohc=gpCzNn2riN8Q7kNvgFukiHN&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QFMmyDhgWO_KzX-EiLCXhbGQZZ9tF8YlkGq2LLWbPBKTA&oe=67790988)

Sau khi cài đặt xong, bạn có thể mở phần mềm bằng biểu tượng trên màn hình hoặc tìm kiếm **"**OpenBlock**"** trong thanh tìm kiếm, ta sẽ thấy được giao diện chính của phần mềm.

![](https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/462563586_3075228895948782_5041159951286834882_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEpy1kXdnfil_1RBnE3WYGgFhque9Nup68WGq57026nr-BNRo-Uq5o7tL_spSTxX68-pQ6vtrK_eteeXbUaoH5J&_nc_ohc=hJf5uFRJux4Q7kNvgFPV0dO&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&oh=03_Q7cD1QG9FRwLwwOtIXpUMY2DKf163ObWKpujZcUHrZr3pBuQqw&oe=67790F88)

Đây là giao diện chính của Scratch (ThingEduBlock dựa trên phiên bản [OpenBlock Desktop](https://github.com/openblockcc/openblock-desktop)), tại giao diện này chúng ta chỉ có thể lập trình với những block cơ bản nhất và điều khiển nhân vật “quái vật nhỏ” màu xanh lá ở bên phía bên phải màn hình.

---
## Kết nối phần cứng

Sử dụng dây USB Type-C để kết nối với mạch ThingBot:

![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/466605901_942859963980253_3822162557976712000_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGpkfkZJXE3NKvbWi1BkLKiIWLDnIQbfdohYsOchBt92qIrGhBP6kcLEs-mpFtrpBR2L4enEY_-2O0_diW_5BF0&_nc_ohc=mr2Z7zgwmh0Q7kNvgFbD9Qg&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&oh=03_Q7cD1QG3WKaGZjkknU0u3gxKsZG04GZ7GZoSgwjJ7oDKHixNbQ&oe=67790924)


Tại giao diện chính, hãy chọn thiết bị mà bạn muốn lập trình bằng cách bấm vào **"**No device selected**"** trên thanh công cụ:    
![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/462551628_422720107444396_5804069205857181271_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHc-frSaCXYfOrJLrvT0ck2JJy1pXj1KsgknLWlePUqyCjGR1fkspzRCrlpAsnH9XZaV32OIetEqLdWTf2s6Rhd&_nc_ohc=mo0vn7ilblcQ7kNvgHrDHuR&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QGrngXwWEzCIGJqra5ptlHpSGOrPV9xH0Jkg2eGBttDQw&oe=677900B8)
 
và chọn thiết bị mà bạn muốn kết nối:
![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/467459815_1733606517423144_6288849551976721381_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG12qpDDNazmuY51_VuYaKiNZpufVTgjYw1mm59VOCNjNOdpblWn7g0PrhP0mUIXFRC-TdSLVwYAxSZJmGbp_R9&_nc_ohc=2ZJbJdGrfjIQ7kNvgGCiU8N&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QFcI_QxJzlCewAShdszl3xj9hB3z4WYwqSCOM-Otz2myA&oe=6779037A)

Như cách bạn có thể thấy, các thiết bị hiện OpenBlock hỗ trợ đó chính là Arduino Uno, Arduino Nano, Esp32, Esp32 – C3, Cobot V1, ThingBot và VIA – BanhMi.

Tương tự với những phần cứng khác, bạn hãy kết nối tới mạch đó trước rồi hãy kết nối trong ThingEduBlock nhé!

Click vào biểu tượng của ThingBot: 

![](https://scontent.fhan20-1.fna.fbcdn.net/v/t1.15752-9/462579766_889910083252879_3181150552056970223_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEN6aU4Z6HXTAaVBuHFeoN_Qc7i9cSlL3JBzuL1xKUvctjPIKgsO2oh3X66zAEJk8ILrNHYCwK_CkjPGYQz9AaZ&_nc_ohc=ow98Wf-WHzIQ7kNvgHAfCBp&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&oh=03_Q7cD1QEFleickWFKFMb7521XHgO8m4obGEjsMAZ0-oyq1rhh-A&oe=67790F5B)

và chọn cổng **"**Connect**"** ![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/467457070_904775228464605_4608087178375450274_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGJSORUAImw3JRrKeusQMviK3Y_9QvWv_grdj_1C9a_-Cli_WflE0Gp7vA6Ms2urXB5R_KK_J17HUjfrjv0D-up&_nc_ohc=GU0XUD6AbDAQ7kNvgE4HQgX&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&oh=03_Q7cD1QHZki2ugKpkvh6-8EwoRhYJp3iVovX7oL46rUII3_W9kw&oe=67791FD6)

tiếp sau là **"**Go to editor**"** để có thể vào giao diện lập trình chính ![](https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/462564432_566734792743961_4436599646169146207_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGakf0xilCWDsYMm1PR2ItUaGy5NJN10pRobLk0k3XSlLiPnh8BSMRdbKZrxU27XcmXqpo91s9maW2IqoNcQc8X&_nc_ohc=xJyIrXIj2XoQ7kNvgHJSs0D&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&oh=03_Q7cD1QFh8Qh77CkpYG13MkyHQA_qhBOgrFyzvE5wOAN7ZS9lGA&oe=677920ED)

---

## Giao diện lập trình chính với phần cứng là ThingBot:

![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/462564202_988253113139463_272066331961713218_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF9LB7n5ren8UXZJRP7_ba61lqMDHH7cA3WWowMcftwDXMDJN9WTDbfHpVhBm4y6ej0pssuCD-UZTWWm_-ed161&_nc_ohc=cxtbTr2JQK4Q7kNvgFVWsd-&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QG6g2yiC-GYg2SsImNdS7FCoSHsSJHp5d4YI-RXNpk32A&oe=677912B2)

Như các bạn có thể thấy ở phần trên cừng là những thông tin về việc kết nối phần cứng của bạn:

![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/466880364_1614461805827541_2821024716501915308_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFlABKoklUJ10WjD9ABEv_rJpzzbpDk0oImnPNukOTSgpzpQRwseVVAl1PlEAvPMHjerqIAAMz86QhI_CZIKz22&_nc_ohc=WE-51wviqXYQ7kNvgEHTn1J&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&oh=03_Q7cD1QFGvsAbT_TL3OLrevIexjvfy36Kbx46eQV8TuY0aG-tCQ&oe=6778F048)

Ở mũi tên số 1, đó là mục **“File”** nơi mà bạn có thể chọn **“New”**: tạo project mới, **“Load** **from** **your computer”** hoặc lưu về máy tính của bạn **“Save to your computer”**. 

Tại vị trí thứ 2, đó chính là thể hiện tên của phần cứng bạn đã chọn.

Vị trí thứ 3, thể hiện tên thiết bị phần cứng đang kết nối và tên cổng kết nối.

Cuối cùng, mũi tên thứ 4 là nơi mà bạn có thể đặt tên cho Project của bạn.

---

## Chức năng chính của ThingEduBlock

### Lập trình

Tiếp theo, sẽ là phần chính của OpenBlock đó chính là lập trình và kết nối cũng như nạp Code cho phần cứng. 
Như bạn có thể thấy, ở bên trái của giao diện, có 2 cột tách biệt nhau đó chính là đầu mục được phân tách sẵn của mỗi phần lập trình và trong mỗi đầu mục sẽ là những khối lệnh của riêng từng phần để có thể dễ dàng lập trình hơn.


Tại mục **“Events”** và là mục đầu tiên, Block **“when Arduino begin”** - khối lệnh bắt buộc phải có và phải được đặt đầu tiên của mỗi chương trình. 
Mục **“Control”** là những khối lệnh logic đơn giản như **“wait 1 seconds”**: đợi 1 giây hoặc những khối logic như: 

**“forever”** có chức năng tương tự vòng lặp if, khi bạn đặt lệnh trong khối này thì lệnh sẽ được thực thi lại vô hạn lần.

**“wait”** có tác dụng như hàm delay(), đợi bao nhiêu lâu trước khi thực hiện lệnh tiếp theo.

**“repeat”** thực thi khối lệnh bên trong bao nhiêu lần.

![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/462580203_555401187318799_5583897307715505284_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFIavKB4l2xechviLpkwbJJLzSi642FIvQvNKLrjYUi9FUUiUiyIQAXw8wreqeUUYSyAQlnt2m1In-LA_u4x2Kp&_nc_ohc=oZNev8Wt_cMQ7kNvgFr1WCN&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QHTtUouLrd_XlVVQztXDFuKv3adCTUPfXPUDMjrRhkymA&oe=67791A53)

**“if…** **then”** nếu khối lệnh bên trong đúng ![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/462555323_1623697631560830_2827179360212246144_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHtGDyTeardbsKTYvVMFlsOQFgqzN9Wio1AWCrM31aKjVNYHZRFaayBoRHj-B-3r27hEteseA2uLTchcIHl1kmb&_nc_ohc=fWWyP_Wr5gYQ7kNvgEHUSQc&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&oh=03_Q7cD1QF8j35x_lR03wlxSWwiNSdDrTC4piW1wV_BpYCuMMpAXw&oe=677910D4)  thì sẽ thực thi khối lệnh bên dưới: 
![](https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/467460740_1122894099550773_1521145347825088870_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGdXUujFCYImi5SW3uHYA4oxbp7jQOHv6PFunuNA4e_o04X5Zw-1TOXQfRBHSiRSYy7SDEsZKv3WnbALX1B6Uzw&_nc_ohc=hHnHOY2QY9cQ7kNvgEvlxCs&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&oh=03_Q7cD1QE9eoVt56UWzOD5bEk4r17DvgJOwINsVWOrDbQecbMqYQ&oe=6778F6BC)

**“if…** **then…** **else”** tương tụ như trên nhưng trong trường hợp khối tlệnh bên trong **if** không đúng thì khối lệnh dưới **else** ![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/467456545_1504680186826279_7156884822294492349_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGH91QqIf742RAVgmVspLBogFOB-2plzBiAU4H7amXMGEIEvctIPYjMvRdhe4yKA_DqXRQbHDbCjeXRjzyWFTlW&_nc_ohc=IPP3zW2XarAQ7kNvgEzKKxS&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QFLqUewSVHkTAVVdQd5s26ieYUwLT2kLB5_hCXLUJwUzQ&oe=677910EC) sẽ được thực thi.

**“wait until”** đợi cho tới thi khối lệnh bên trong được thực thi. ![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/462567110_1080057377188898_3844521534689621089_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE8ElJrxo_BzZq6NCqEEO5mnC1JBUYzIjycLUkFRjMiPPOGerB1w6KtxoiXJ0GlJDnrzVrP2mxYc_ZGRLTxX7YQ&_nc_ohc=R0Ppxj69YY0Q7kNvgHB612a&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&oh=03_Q7cD1QG0MiEdJOp90lbiLuxA5b1rQGcj7wbkIS0lpMWmQh6uqQ&oe=6778FD3F)

![](https://scontent.fhan20-1.fna.fbcdn.net/v/t1.15752-9/462537921_467305156382656_1651086753294276551_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH-oqNIp1T7vIDcaJ2CiNfw3sZ0VYlRkmTexnRViVGSZF5fgrL-Bp1ruIwOzC_RTeNBfN1eG1zmDbkYrDlieq1C&_nc_ohc=u7I3Rd_ntg4Q7kNvgH_fGec&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&oh=03_Q7cD1QEbFbhbhoQgrwBJIa1tTewrN2cIZaMcd_qg36hj5abi2g&oe=67790BA1) **“repeat until”** lặp lại khối lệnh bên dưới cho đến khi khối lệnh sau **“until”** được thực thi.

Tại mục **“Operator”** - các chức năng như toán tử đơn giản trong lập trình như +, -, *, /.

![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/462561259_510232128143848_3496454648801016805_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHm0BMU1K10-OpMXFZ-FSBTb1dUrcpPHGFvV1Styk8cYQgTaNsTwWKIzbtTWeN8CGclG9HmoyTVjux3BV3CmTbb&_nc_ohc=ya7jQcLjm5sQ7kNvgFAhLQ_&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QFLLoplgmYlZiXYM3ENQWiovAn9tfXeo4qgXn0Ufmgp8A&oe=6778FC13) 

**“Variables”**: tạo biến hoặc **“Make a list”**: tạo danh sách. ![](https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/467467226_1092532088761346_3586942437661419699_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFEp_lBecyw7cQ4tOFiB8CnK9mBEsQuTH4r2YESxC5MfiTATMab_SdKlrlc1R7SYO6ESxsPWpgYYXbTFUDLxzR8&_nc_ohc=g56I_EnNxVIQ7kNvgF7OgSJ&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&oh=03_Q7cD1QEmz40W4x-KHK9VyJvQMQ9AU5BYz7MHAiOLph5WbO1btw&oe=6779057C)

Mục **“My Blocks”** - tạo lập thêm block tùy biến của riêng bạn. ![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/462551628_1573682556856153_832454301825523820_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGPTl5Ym4Aa7EjggwXfuWtN_XJ1TSe2bAj9cnVNJ7ZsCA5jM-t8-NGAlluVuFaZRrYjd8-eOrM8ONbrOHRLa4JN&_nc_ohc=W9Jl6cfRIWIQ7kNvgEqQStC&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&oh=03_Q7cD1QG7CNOFikYiT0QgVY2E6nrr1a2EFAzOiMBSLDNy3OEC7A&oe=6778EB67)


**“Pins”** - những khối lệnh dành cho việc setup các chân cắm và lấy dữ liệu và sẽ có những khối lệnh bắt buộc như **“set pin”/”set digital pin”** và đọc giá trị từ pin như **“read digital pin”/”read analog pin”**. 
**“set pin”/”set digital pin”**: bạn điều chỉnh tùy theo vị trí cắm dây trên mạch của bạn.
**“mode input/out”**: thiết lập trạng thái mà bạn muốn chân pin đó làm gì.

![](https://scontent.fhan20-1.fna.fbcdn.net/v/t1.15752-9/467459786_2353255565020672_6807394870137704188_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG6tg-LdsLrwwN8sFICdNfFXH9FkbgxN0hcf0WRuDE3SDoX4AVd8o6sgXK25MSJf906GRf-cL4IsFifwlCE_FnS&_nc_ohc=o4yNsCKZR1MQ7kNvgGUkswe&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&oh=03_Q7cD1QGwRodPGxAfgQLSFSLfoQRhMjl8DoNw2EtjM7sGLmmsAA&oe=6779020A)


 ![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/462551056_1204389187722957_6936847490502209016_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFLISXl5KdVQo2Yn5Ai6GBMOmRRms4rj406ZFGaziuPjWysrW3otSkIrlrhXoMOrVXDTMwDDXZhqsU_fiQIL6t1&_nc_ohc=Xo8yoodAmwoQ7kNvgF6ZP5g&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QEiBOJ3M-UgRGQkUUcVhGQTEcnfOhz1Hq40mnUFbqeHWw&oe=6778F4FC)  **“Serial”** - những khối lệnh dùng để xuất dữ liệu thông qua Serial Mornitor.

Trong **“Data”**: những khối lệnh nhằm tùy biến dữ liệu đầu ra của bạn.
![](https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/462570976_2242058569530122_4145971502366236475_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG4HsxL9_JH1KtcIGSDwkCzoCiT6aOUmJOgKJPpo5SYkxCw2tAoB7Riq52rJvoG-bAa3MsbRlMox7Uiv1S499j2&_nc_ohc=PQxlkt2YBMgQ7kNvgEgav_r&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&oh=03_Q7cD1QFGmhJdO0Uib4Tc-vDW4zjIiPbW2TH-oJvCXN94wCYVmA&oe=6778F4AA)

**“ThingBot”** - kết nối và gửi dữ liệu cho servo/động cơ, khối lệnh **“init board”** màu xanh lá là bắt buộc và phải để ở phần đầu trước khi **“set motor”/”set servo”**. 

![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/462555257_982401023914336_146723020106996297_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGslKU8KM0FgaNZKHnIXAPLfAlgj-kLQZJ8CWCP6QtBkivrol0bxtkT-Uxl3lsKXUfqDFXHBJbilsUyrYjodWCU&_nc_ohc=6HXu8N8hgR4Q7kNvgGVx3xH&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QGkrUQcfIHz8u9kb89CHCZN6eypJZ_5Pq3yId56ph7gbA&oe=6778F80E) 

**“set buzzer”** – set còi buzzer ở 0 - 4096

**“set led”** – tại chân 1 hoặc 2 và ở 0 – 4096 (xung mà bạn muốn điều khiển buzzer và led)

![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/462555257_594964046421502_2648954811387164556_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFVQEY9gpUVku1JUS3IDrR8zKIfhZPzpVzMoh-Fk_OlXGDh7tl_xWC8XB3Pjz-kKdRxZYkcTIwYO7XCwIj3CKTP&_nc_ohc=qdH6ixHH__0Q7kNvgGqXI4P&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QGN7lh99icAQ75jOpRx7A22pUVgC0qqnBUBjnadleDpQA&oe=6778FF58)


Khối **“set motor”** sẽ bao gồm ô lựa chọn đầu tiên đó chính là set chân động cơ nào giữa từ M1 đến M4 tùy vào vị trí bạn cắm động cơ trên ThingBot, ô lựa chọn thứ 2 đó chính là chọn hướng động cơ sẽ chạy bao gồm **“forward”** – động cơ sẽ khởi động lăn về phía trước, **“backward”** – động cơ sẽ khỏi động lăn ngược lại 

![](https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/462564425_968731315096616_8200162760886283823_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHT3buHtZxGfiA98w7LgXNlN87Pv2r4DI03zs-_avgMjUUyK4pixKqbWbq4Ce9pd7WR3eBDZsvdZKeT_RwicWBw&_nc_ohc=dsTBZyq0RlYQ7kNvgELrPXT&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&oh=03_Q7cD1QGf8P0gHxIzSALNk4JzXa3swl3x2brcydl7ii0EMjXHRg&oe=6778E977)

và **“at speed”** – tại tốc độ từ 0 – 100 và đối với servo là pulse (xung điều khiển) từ 0 – 4096 nhằm đưa ra vị trí chính xác hơn theo người lập trình với servo.

Tại mục **“PS2”**: kết nối và lập trình tay cầm PS2, khối lệnh **“init ps2 receiver pin”** là bắt buộc và phải để ở trước những khối lệnh liên quan đến PS2 còn lại. 

![](https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/467457891_8758670490917081_8363465706541847107_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFeiHWrEagIp05-ZCgXD1-Z9Qda_rQYSiH1B1r-tBhKIbPoc2A6yW6DjFfSNti-rTy9_CmWnE2aY-yKOzcD4ZDe&_nc_ohc=lokv0IlyrXgQ7kNvgH5jxkZ&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&oh=03_Q7cD1QE2mjru7cSWxE-wnR0FS4-og-57qKu1suZYV4f53R_5bw&oe=67791F50)

**“init ps2 receiver pin DIN…”** – tùy thuộc vào vị trí kết nối các chân tín hiệu của khối receiver mà chúng ta sẽ hiệu chỉnh những ô lựa chọn này.

![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/467458657_1530857867607900_2338179373453726456_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFnF1z1CC7MSFG-JuP-_pGW29Mdgtt5bCPb0x2C23lsIzKQNdXBjeaJPZ-btywC0ZdGwhryA1JVYaFcYlVu162R&_nc_ohc=XfYA12ZveJkQ7kNvgGJQ9vb&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QGgB5fbNaHFsjMf3e8vbEW3G5G3pEszrfCx6sd0H5AjLA&oe=67790D00)

![](https://scontent.fhan20-1.fna.fbcdn.net/v/t1.15752-9/467456255_888037603443629_8352464429349791496_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGDdNzz1LlzkT3eiU_BU-cBXwmX6l5CXExfCZfqXkJcTH_9tNdEmdZn5eWqy1vfYnKAleZu7kPdTAadqWLZCPLH&_nc_ohc=Gab8tGZ81vkQ7kNvgEhPLm7&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&oh=03_Q7cD1QFY18FDBv4ZCOANzTfADwWJvIhSKqsWiw0rd-YoH_AVhg&oe=67790B2D)
Sau khi, lập trình xong bạn có thể chọn **“Upload”** để có thể nạp code vào phần cứng. 

Trong quá trình upload, sẽ có một cửa sổ hiện lên: 

![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/462551719_3829808217267577_1371941949081730782_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEvqsQ_HKWvJEGXfwJcNbCGVcjgmlxHaMVVyOCaXEdoxfVPp3ls0TIOh5Kv0qBimJPEf640JLZJRc5BwYNC5J-8&_nc_ohc=WoTRnRGA_sQQ7kNvgEuCnVo&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&oh=03_Q7cD1QH6x8yZNx6CdbGCH7B5hWoWWqxrUhUiUYzccP66OkcqRw&oe=67790ECE)

Như trong hình, các bạn đã nạp code thành công cho phần cứng của mình nhờ sự xuất hiện của dòng chữ **“Upload success”**.


Tuy nhiên, sẽ có lúc upload bị lỗi: 

![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/467457960_4060876144145786_2665868996632842321_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH648OmwFnO00tHCTYWChTsTsJs6U-Wzw1OwmzpT5bPDRuE4x9NDDQjYnu87NX6_C5LFheZG35nLUmyzS_oRakQ&_nc_ohc=XXoJdNAu95MQ7kNvgH19-cr&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&oh=03_Q7cD1QGzru6SmZrt9SBpwxrYBiXqe35XUzodLF_fxNis2Rtd-w&oe=67791BA6)

Ta có thể thấy dòng chữ **“Upload error”** thể hiện cho điều đó.
Lúc này, bạn cần kiểm tra lại code hoặc phần dây kết nối với phần cứng có gặp vấn đề gì không và hãy upload lại nhé!


## Lưu chương trình: 
Bạn có thể lưu chương trình bằng cách chọn **File** -> **Save to your computer.**

## Ví dụ...
.....

---

## FAQ

**Tôi gặp lỗi upload không thành công như thế này. Cách khắc phục?**

![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/462575000_779922847623440_4949439786698639853_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFJnh3bD0_Puc9DJGgkoMWmYSoguolIHD1hKiC6iUgcPWPfx70sw5ozazWMjK488xQEl6Q-JzWbIsf2TEptNDBp&_nc_ohc=Y7HdI2AhyacQ7kNvgFzkwkH&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&oh=03_Q7cD1QHUDt7pgKuX65i2sYJp35SIiSLTppOCR0PWtcjd1hJXrw&oe=6778F8D5)

Vấn đề này do con vi điều khiển ESP32C3 trên mạch, để khắc phục chúng ta cần
#### Bước 1: Ngắt hoàn toàn kết nối mạch khỏi nguồn pin và máy tính.
#### Bước 2: Nhấn giữ nút flash (nút được khoanh đỏ trong hình dưới), đồng thời cắm lại cáp USB kết nối mạch với máy tính.

![](https://scontent.fhan20-1.fna.fbcdn.net/v/t1.15752-9/462582224_900758872190700_6594704059056213430_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE788_UewK7Njcqs-8CFGZYF3ZtVOCQ_WcXdm1U4JD9ZwElvSfTMHHvLlfBDgxd1kaT69t65OcKx-oQC2AhC4LZ&_nc_ohc=DuxED-DYiegQ7kNvgGcCUlX&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&oh=03_Q7cD1QG1DdD2bLR4HJHdobDh0S2qugzoa3_KqBS16KAGHOnJiw&oe=67790F69)

#### Bước 3: Nhả nút flash, tiến hành nạp chương trình như bình thường.
#### Bước 4: Sau khi nạp chương trình thành công, ngắt nguồn mạch và kết nối lại để chương trình bắt đầu chạy.




---

## Support

**Email chính thức của MakerViet:** makerviet.official@gmail.com