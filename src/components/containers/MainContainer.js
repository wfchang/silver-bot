import React, { Component } from "react";
import axios from "axios";
import { Grid, Row, Col } from "react-bootstrap";
import KonoBotContainer from "./KonoBotContainer";
import KonoWallContainer from "./KonoWallContainer";
import KeywordsContainer from "./KeywordsContainer";
import KonoHeader from "../components/KonoHeader";
import LoadingModal from "../components/LoadingModal";

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.botref = React.createRef();

    this.state = {
      loading: false,
      loadingType: "init",
      keywords: [],
      articles: [
        {
          article_url:
            "https://www.thekono.com/articles/a9bd6313-3a01-4ff9-9643-6655127b92e8",
          intro:
            "剛從BEAUTY前線退役，S編還是不忘對美妝、美食等新鮮事的追求，現在每個月來為大家奉上日本最新流行事。",
          magazine_name: "BEAUTY 美人誌",
          main_image_url: {
            url:
              "https://d12g6txo0oxz1l.baishan.thekono.com/article_main_images/a9bd6313-3a01-4ff9-9643-6655127b92e8/4:3/1200/1459495228.jpg?BscSignature=aec7dbbdad9ffe7ab3a17484ed26bbde9d7ff2744961e6738706b8586d5c3d59&Expires=1577836799&Expires=1577836799&Signature=PKsm~j~LDxaeNgSWMJ8bCNM7mZ3idiU8XZYmQQfAEarivEAoqLYIqheTu0XBisqfotOZuZsgrAAfQNgVl5nQ-gnC7WOHZb-9lISQWb-su6XmsXMwSA91QxFUwXap-x72YjWNJR3xY6gBCGYQtLKbpGU62MePOBgHgDRJDDGndU8_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA"
          },
          title: "日本流行筆記TOPICS 3"
        },
        {
          article_url:
            "https://www.thekono.com/articles/7f97eb47-beac-411c-b787-f792b678c945",
          intro:
            "日本各處的觀光地有著各自設計及營運且獨具特色的列車，而有些列車不僅供人們「交通移動」使用，更以「搭乘」列車為旅遊目的，廣受好評。觀光列車之所以受到大眾支持，原因在於其中凝聚日本特有的款待精神：風光明媚的景色、隨處可見車輛設計上的細節、乘客感到貼心的各種小關懷、精心烹調的當地食品等，還有招待員、在月台上看到當地人的笑容等，都讓人感受到無比魅力。",
          magazine_name: "欣旅遊Bon Voyage",
          main_image_url: {
            url:
              "https://d12g6txo0oxz1l.baishan.thekono.com/article_main_images/7f97eb47-beac-411c-b787-f792b678c945/4:3/1200/1491466618.jpg?BscSignature=da6ea1d5b3295824d338897dc1dd7be9b9a32da1fdeffdc760a11f886178ae5d&Expires=1577836799&Expires=1577836799&Signature=iSWrCXiVgOFcplU95oIGgdsQ5Wr~lj~Vyf1qE0aZpYLPuGgyPNqHWVhyn1XT~siSc7mzizRkyX03c0YJkClbruDfIQlHz2UzN7NXZrdoMhaeVp3kbbJN6i5Cc10qNHxuRFWfjhYlVoKQBj1Ne6qIQbqf~2yrlcaYPCUvCfY~K08_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA"
          },
          title: "日本特色鐵道"
        },
        {
          article_url:
            "https://www.thekono.com/articles/e9855835-6e6e-4f11-8203-34c93aa1ef9e",
          intro:
            "有沒有聽過日本的家品店「ニトリ（NITORI）」？其實她就像IKEA，出售各式各樣的家庭用品，小如餐具、毛巾、窗簾，大如餐枱、梳化、衣櫃等，全部都有齊，更以CP值高為賣點。唔講連日本人都唔知，原來NITORI更有電器賣，當中多款美容小家電只需¥476/HK$33，抵到爛！NITORI於全國各地都有分店，當中最易去兼貨品較齊全的，是上年12月開業、位於新宿高島屋百貨公司旁的分店，店內提供退稅服務，最適合香港遊客。以下精選6款實用美容小電器，下次去不妨一試！",
          magazine_name: "新假期",
          main_image_url: {
            url:
              "https://d12g6txo0oxz1l.baishan.thekono.com/article_main_images/e9855835-6e6e-4f11-8203-34c93aa1ef9e/4:3/1200/1513485541.jpg?BscSignature=90c97dc5185963a41ff16d580ffe1a7f256497fd58e93d5250295fa3532aae9d&Expires=1577836799&Expires=1577836799&Signature=j73rX-dtRqKSpZqUWZV39o207tSpNSCZFH7PriGRCWNvc4KmbKUaS901k172DOKOmXOvxd9qRFRIlhXNl6u164Gk~Zm0f3~Rc1X7PXuf1of0jRWrXUPKcn3Lr6-LDwFKeFW5tKLLN3LCJdRf4yyl2XT15NQGFLMczbty7qwv250_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA"
          },
          title: "全部¥500有找　日本Nitori優質美容電器"
        },
        {
          article_url:
            "https://www.thekono.com/articles/7331f8c0-2008-40a2-8330-9d06f60cd6b1",
          intro:
            "妖怪」，不只是從人們想像中衍生出的產物，在日本更形成豐富多元的文化，日本人對「他們」是有特殊情感的。而說起日本的妖怪歷史，不僅歷史悠久，種類、形體可是千奇百怪。在日本，只要是超乎日常經驗或超越一般了解範圍的不可思議現象與存在，就稱為妖怪，鬼太郎、犬夜叉、河童、雪女等，都是你我可能比較熟悉的，但日本不同區域，其實還有許多鮮少聽聞的妖怪，一起來看看吧！",
          magazine_name: "Sense好感",
          main_image_url: {
            url:
              "https://d12g6txo0oxz1l.baishan.thekono.com/article_main_images/7331f8c0-2008-40a2-8330-9d06f60cd6b1/4:3/1200/1473306864.jpg?BscSignature=4539921548d9763b077777fbd72d706b4c9655030a090a356015e6a48ca6dad9&Expires=1577836799&Expires=1577836799&Signature=YjBIJ07dTzvtwE~yMsJBnZvjTE0GOjcyVwhilAYXGEh9rotL0zKgK3HhNy85qqrqSY8LHr2grqm2xEDCjk9Y6wile8LEA8J9BJvwcACXvWB6AUpPkuP1fgl9ujTS7kGN4m7DJx0EVKA75aCGJF982hKjPmBQgbzP~FfQTXL0u1I_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA"
          },
          title: "日本妖怪趣聞"
        },
        {
          article_url:
            "https://www.thekono.com/articles/efd4a438-b09e-44cc-9980-b5f2b166cc25",
          intro:
            "日本女性美容雜誌《LDK》就像香港每月出版的《選擇》月刊一樣，每期為市民大眾以科學化方法去測檢市場上的產品，不過這本女性雜誌更集中於美妝產品的研究，所以每期都會羅列出最佳的美容產品評分，近月分別嚴選了最好用的面膜和化妝水，睇完報告，以後去日本藥妝店就知買邊支最好！",
          magazine_name: "新假期",
          main_image_url: {
            url:
              "https://d12g6txo0oxz1l.baishan.thekono.com/article_main_images/efd4a438-b09e-44cc-9980-b5f2b166cc25/4:3/1200/1511494049.jpg?BscSignature=b9781375b117dd19d3a4f7292d6bc79d93cb251da950faab10a4b7398637721d&Expires=1577836799&Expires=1577836799&Signature=Duu2NfxrmLbQbKc~vwnaL5dWGe~qhTRhWnL9PhWnLwLjMrIE2mJV4cVvxLhLEpPuT44da~Gno5Duu4mLYF4hjtRyZEiSYdfmDkoDSvMXqkg6~v-w-U2dQ7rmCkbFJouAGS3lDhK6wisIGLe9y5eCdYODHNLq4eblUwxm~9zGMTA_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA"
          },
          title: "日本藥妝天書嚴選　最保濕面膜、化妝水"
        },
        {
          article_url:
            "https://www.thekono.com/articles/ba138274-e512-4512-906e-2181e7a6b23b",
          intro:
            "踏進日本環球影城歡慶15週年的大門，讓人熱血沸騰的旅程就此展開，跳上「飛天翼龍」的座位，享受360度旋轉俯瞰高空的極速快感，加入艾蒙和小小兵的15週年慶遊行隊伍，隨著激昂樂音用力搖擺，還來不及喘口氣就墜入哈利波特的魔法世界，飛天遁地之後來杯甜滋滋的奶油啤酒，大啖聖誕市集的美食，在綻放著煙火和燦爛星光的天使樂音中擁抱暖暖心意的冬夜。",
          magazine_name: "TRAVELER Luxe 旅人誌",
          main_image_url: {
            url:
              "https://d12g6txo0oxz1l.baishan.thekono.com/article_main_images/ba138274-e512-4512-906e-2181e7a6b23b/4:3/1200/1483521767.jpg?BscSignature=1afd637090ba674d4a47be1d9fbcf69302e5b31f960c1f78f393ec9f141a5ad0&Expires=1577836799&Expires=1577836799&Signature=AgUp-R6f5emVRHGveY1DmvEsjh-76LeklABidBtQ9rdSLvBLdW9UiHMAQ~VQMzCImydfJM1VR-Jr24FrHNM1Yqhf8zaxqwKf1obGq-WG481DrIeLLdZMqfFPKjnCP17xX2IW5Pw7CZ~OGo895WHc-tJIVsBqJJUvJyRsazhLt~o_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA"
          },
          title: "日本環球影城®，奇幻聖誕派對大挑戰"
        },
        {
          article_url:
            "https://www.thekono.com/articles/bbf0bf6b-eb5b-4159-b122-c23c9f347d66",
          intro:
            "隨著小小兵樂園開幕，日本環球影城的入口也換上新裝，俏皮的小小兵點綴在大門上，明確地點出了園內的新亮點。說也奇妙，作為《神偷奶爸》系列電影的配角，小小兵卻比主角更受到歡迎，不僅推出專屬電影，現在更有專屬樂園，吸引無數粉絲朝聖。",
          magazine_name: "TRAVELER Luxe 旅人誌",
          main_image_url: {
            url:
              "https://d12g6txo0oxz1l.baishan.thekono.com/article_main_images/bbf0bf6b-eb5b-4159-b122-c23c9f347d66/4:3/1200/1496473440.jpg?BscSignature=e923a2f35c4f69f00ba1101122f833aa258a4190ec8574e90f3f9c08dcce8d3d&Expires=1577836799&Expires=1577836799&Signature=kWRduyMTqO8iYjYPFFR6bTMG8l1MoQ0HLyalogNLN4~AJPSR8VGQXnelRtGRvmhuADDj33UTJPBOAEXW~lYD3yQ~Lj6AkSD4NjAPXVJKoHE-10S9~kXE6z7xIQ~gF7QkJ8b-0V3NAPOBhWqEDJafFjLMXJbmc1kuO2HTFAtC5I8_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA"
          },
          title: "小小兵樂園登場！日本環球影城新魅力"
        },
        {
          article_url:
            "https://www.thekono.com/articles/12f852ae-8218-464f-a665-0d31bfe6c1a8",
          intro:
            "和夏季折扣、秋季楓紅並列三大旺季，每年3、4月間的日本櫻花季，從選擇日期、買機票到選地點都是學問，而且是一場搶時間的旅遊戰爭。日本賞櫻之旅的重點，當然是掌握準確的櫻花開花時間，才能盡情享受美景。櫻花開不開看老天臉色，很可能計畫趕不上變化，所以聰明保留旅程彈性，是聰明賞櫻最大絕招！",
          magazine_name: "GQ",
          main_image_url: {
            url:
              "https://d12g6txo0oxz1l.baishan.thekono.com/article_main_images/12f852ae-8218-464f-a665-0d31bfe6c1a8/4:3/1200/1457405657.jpg?BscSignature=a426dc499f952808e71976d2cb07be724c67e2539c37f4c3e7f4692110553012&Expires=1577836799&Expires=1577836799&Signature=lvdyNjbQ2lufA5YmzS5s-H~9DrlEjB-NBCrqROmTBdpbJw~~OlZ6e1ArHfGUrY0vJKHMfMZKtcpbb~kToPMzT2vTJPNyDr70GdC~e3mZFzI642CLZFORl71GHeTjQLEcyKokUoPZrXcf6tNYvzIAC~liK3y4q5YwLD2yPU38YEo_&Key-Pair-Id=APKAJK5IHUOE42KLZRLA"
          },
          title: "日本聰明賞櫻攻略"
        }
      ]
    };

    this.api_url = "http://192.168.1.108:5000";
    this.addKeyword = this.addKeyword.bind(this);
    this.dropKeyword = this.dropKeyword.bind(this);
    this.getArticlesWithKeywords = this.getArticlesWithKeywords.bind(this);
    this.popAllKeywords = this.popAllKeywords.bind(this);
    this.setSearchLoading = this.setSearchLoading.bind(this);
    this.setLoadingRecommend = this.setLoadingRecommend.bind(this);
  }

  componentDidMount() {
    // console.log("call api");
    this.setState({ loading: true });
    axios
      .get(`${this.api_url}/api/articles`, {
        params: {
          terms: "旅遊 韓國",
          limit: 24
        }
      })
      .then(resp => {
        console.log(resp);
        const articles = resp.data.articles;
        this.setState({ articles: articles, loading: false });
      })
      .catch(error => console.log(error));
  }

  addKeyword(keyword) {
    let keywords = this.state.keywords;
    keywords.push(keyword);
    this.setState({ keywords: keywords }, this.getArticlesWithKeywords());
    // call get article api with new keywords
  }

  dropKeyword(keyword) {
    let keywords = this.state.keywords;
    // find keyword and drop
    const index = keywords.indexOf(keyword);
    keywords.splice(index, 1);
    console.log(keywords.length);
    if (keywords.length) {
      this.setState({ keywords: keywords }, this.getArticlesWithKeywords());
    } else {
      this.setState(
        { keywords: keywords },
        this.botref.current.sendMsg("<EMPTY>")
      );
    }
    // call get article api with new keywords
  }

  // get article api
  getArticlesWithKeywords() {
    const keywords = this.state.keywords;
    this.setState({ loading: true });

    console.log("get article with keywords: ", keywords);
    axios
      .get(`${this.api_url}/api/articles`, {
        params: {
          terms: keywords.join(" "),
          limit: 200
        }
      })
      .then(resp => {
        console.log(resp);
        const articles = resp.data.articles;
        this.setState({ articles: articles, loading: false });
        this.botref.current.popBuffer();
        window.scrollTo(0, 0);
      })
      .catch(error => console.log(error));
  }

  popAllKeywords() {
    this.setState({ keywords: [] });
  }

  setSearchLoading() {
    this.setState({ loadingType: "search" });
  }

  setLoadingRecommend() {
    console.log("recommend");
    this.setState({ loadingType: "recommend" });
  }

  render() {
    return (
      <div id="main">
        <Grid fluid>
          <Row className="show-grid">
            <LoadingModal
              loading={this.state.loading}
              loadingType={this.state.loadingType}
              keyword={this.state.keywords[this.state.keywords.length - 1]}
            />
            <Col md={9}>
              <KonoHeader />
              <KeywordsContainer
                keywords={this.state.keywords}
                dropKeyword={this.dropKeyword}
              />
              <KonoWallContainer articles={this.state.articles} />
            </Col>
            <KonoBotContainer
              ref={this.botref}
              addKeyword={this.addKeyword}
              keywords={this.state.keywords}
              popAllKeywords={this.popAllKeywords}
              setSearchLoading={this.setSearchLoading}
              setLoadingRecommend={this.setLoadingRecommend}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MainContainer;
